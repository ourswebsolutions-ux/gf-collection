// Structural seed — safe to run repeatedly (`npm run db:seed`).
//
// Creates ONLY the category structure of the GF Collection Women + Girls store:
//   Women        → Fancy / Party Wear, Casual Dresses
//   Girls / Kids → Girls' Fancy / Party Wear, Girls' Casual Dresses
// with Urdu/Hindi names. The store sells women's and girls' dresses only. Existing rows are never overwritten (upsert with an empty
// update), so later edits made by admins survive re-seeding.
//
// Categories that do not belong to this store (listed in LEGACY_SLUGS: Men, Boys, the
// mixed "Kids" department, Accessories, Women → Tops…) are RETIRED, not deleted: they are set to HIDDEN so they leave the storefront
// while their products, order history and customer accounts stay intact. Categories
// created by admins are never touched. Run with `-- --keep-legacy` to skip this step.
//
// It never creates products, customers, orders, reviews or sales.
// Optional admin bootstrap: set SEED_ADMIN_EMAIL + SEED_ADMIN_PASSWORD
// (+ SEED_ADMIN_FIRST_NAME / SEED_ADMIN_LAST_NAME). No password is ever hard-coded.
import { hashPassword } from "../src/lib/auth/password.js";
import { disconnectDb, getDb } from "../src/lib/db.js";
import { newPasswordSchema } from "../src/lib/validation/schemas/auth.js";
import { emailSchema, personNameSchema } from "../src/lib/validation/schemas/common.js";

const KEEP_LEGACY = process.argv.includes("--keep-legacy");

// Category slugs of the previous (men / women / kids / accessories) catalogue, and of the
// interim mixed Kids department (girls + boys) that this store replaced with Girls / Kids.
const LEGACY_SLUGS = [
  "men", "men-t-shirts", "men-shirts", "men-hoodies", "men-jackets", "men-pants", "men-trousers", "men-tracksuits",
  "women-dresses", "women-tops", "women-shirts", "women-hoodies", "women-jackets", "women-pants", "women-tracksuits",
  "kids", "kids-t-shirts", "kids-shirts", "kids-hoodies", "kids-pants", "kids-tracksuits",
  "kids-girls-party-wear", "kids-girls-casual", "kids-boys-party-wear", "kids-boys-casual",
  "accessories", "bags", "handbags", "perfumes", "watches", "fashion-accessories",
];

const STRUCTURE = [
  {
    name: "Women",
    slug: "women",
    description: "Fancy and party wear dresses, and elegant casual dresses.",
    translations: { ur: "خواتین", hi: "महिलाएँ" },
    children: [
      { name: "Fancy / Party Wear", slug: "women-fancy-party-wear", description: "Party, formal, wedding and evening wear — gowns, lehengas and occasion dresses.", translations: { ur: "فینسی / پارٹی وئیر", hi: "फ़ैंसी / पार्टी वियर" } },
      // `previousNames`: names an earlier seed used — renamed once to the current name, admin renames are kept.
      { name: "Casual Dresses", slug: "women-casual", previousNames: ["Casual"], description: "Everyday and modern casual dresses made for comfort.", translations: { ur: "کیژول ڈریسز", hi: "कैज़ुअल ड्रेसेज़" } },
    ],
  },
  {
    name: "Girls / Kids",
    slug: "girls",
    description: "Party, fancy and casual dresses for girls aged 2 to 12.",
    translations: { ur: "بچیاں", hi: "बच्चियाँ" },
    children: [
      { name: "Girls' Fancy / Party Wear", slug: "girls-fancy-party-wear", description: "Tulle, satin and lace dresses for birthdays, weddings, Eid and every celebration.", translations: { ur: "بچیوں کا فینسی / پارٹی وئیر", hi: "बच्चियों के फ़ैंसी / पार्टी वियर" } },
      { name: "Girls' Casual Dresses", slug: "girls-casual", description: "Soft cotton sundresses and everyday dresses made for play.", translations: { ur: "بچیوں کے کیژول ڈریسز", hi: "बच्चियों की कैज़ुअल ड्रेसेज़" } },
    ],
  },
];

async function upsertTranslations(db, categoryId, translations = {}) {
  for (const [locale, name] of Object.entries(translations)) {
    await db.categoryTranslation.upsert({
      where: { categoryId_locale: { categoryId, locale } },
      update: {},
      create: { categoryId, locale, name },
    });
  }
}

async function seedCategories(db) {
  let created = 0;
  let total = 0;

  for (const [departmentIndex, department] of STRUCTURE.entries()) {
    const before = await db.category.count();
    const parent = await db.category.upsert({
      where: { slug: department.slug },
      update: {},
      create: { name: department.name, slug: department.slug, description: department.description ?? null, sortOrder: departmentIndex },
    });
    if (parent.parentId) console.log(`! Category "${department.slug}" exists as a subcategory — left unchanged; fix it in Admin → Categories`);

    await upsertTranslations(db, parent.id, department.translations);

    for (const [childIndex, child] of department.children.entries()) {
      const row = await db.category.upsert({
        where: { slug: child.slug },
        update: {},
        create: { name: child.name, slug: child.slug, description: child.description ?? null, parentId: parent.id, sortOrder: childIndex },
      });
      if (child.previousNames?.includes(row.name)) await db.category.update({ where: { id: row.id }, data: { name: child.name } });
      await upsertTranslations(db, row.id, child.translations);
    }

    total += 1 + department.children.length;
    created += (await db.category.count()) - before;
  }

  console.log(`✓ Categories: ${total} in structure, ${created} newly created, ${total - created} already present`);
}

/**
 * Hide (never delete) the previous store's categories that are still ACTIVE.
 * Products keep their category, so order history, carts and the admin catalogue are
 * unaffected; hidden categories and their products simply leave the storefront.
 */
async function retireLegacyCategories(db) {
  if (KEEP_LEGACY) {
    console.log("– Legacy categories: kept (--keep-legacy)");
    return;
  }
  const legacy = await db.category.findMany({
    where: { slug: { in: LEGACY_SLUGS }, status: "ACTIVE" },
    select: { slug: true, _count: { select: { products: true } } },
    orderBy: { slug: "asc" },
  });
  if (!legacy.length) {
    console.log("✓ Legacy categories: none active");
    return;
  }
  await db.category.updateMany({ where: { slug: { in: legacy.map((row) => row.slug) } }, data: { status: "HIDDEN" } });
  const products = legacy.reduce((sum, row) => sum + row._count.products, 0);
  console.log(`✓ Legacy categories hidden (not deleted): ${legacy.length} — ${legacy.map((row) => row.slug).join(", ")}`);
  console.log(`  ${products} product(s) in them are kept with their order history; re-activate a category in Admin → Categories if needed.`);
}

async function seedAdmin(db) {
  const { SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD, SEED_ADMIN_FIRST_NAME, SEED_ADMIN_LAST_NAME } = process.env;
  if (!SEED_ADMIN_EMAIL || !SEED_ADMIN_PASSWORD) {
    console.log("– Admin: skipped (set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD, or run `npm run admin:create`)");
    return;
  }

  const email = emailSchema.parse(SEED_ADMIN_EMAIL);
  const password = newPasswordSchema.parse(SEED_ADMIN_PASSWORD);
  const existing = await db.user.findUnique({ where: { email }, select: { role: true } });

  if (existing) {
    console.log(
      existing.role === "ADMIN"
        ? "✓ Admin: already exists (password unchanged)"
        : "! Admin: an account with this email exists as CUSTOMER — promote it deliberately with `npm run admin:create`",
    );
    return;
  }

  await db.user.create({
    data: {
      email,
      firstName: personNameSchema.parse(SEED_ADMIN_FIRST_NAME || "Store"),
      lastName: personNameSchema.parse(SEED_ADMIN_LAST_NAME || "Admin"),
      role: "ADMIN",
      passwordHash: await hashPassword(password),
    },
  });
  console.log("✓ Admin: created — remove SEED_ADMIN_PASSWORD from the environment now");
}

try {
  const db = getDb();
  await seedCategories(db);
  await retireLegacyCategories(db);
  await seedAdmin(db);
} catch (error) {
  console.error(`✗ Seed failed: ${error.internalMessage ?? error.message}`);
  process.exitCode = 1;
} finally {
  await disconnectDb().catch(() => {});
}
