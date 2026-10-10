// Storefront collections: the two departments (Women, Girls / Kids), their categories,
// "Shop all" and curated edits. Wording is localised via the dictionaries
// (collectionCopy.<slug>); a database category with the same slug supplies the
// live name, so admins can rename categories without a deploy.
// `filter` is declarative so the data layer can translate it to a Prisma `where`
// (src/services/productService.js → buildProductWhere).
//   categories  → Category.slug of the product's category or its parent
//   flag        → boolean Product column (onSale, bestSeller, featured)
//   popular     → flagged best seller OR has real (non-cancelled) sales
// `departmentFacet` offers the Women | Kids filter on cross-department listings
// (departments are read from the database: every ACTIVE top-level category).
// Departments are scoped by category (department + its subcategories), so a product
// always appears where the admin filed it.

const store = (name) => `/images/storefront/${name}`;
const product = (path) => `/images/products/${path}`;

export const collections = [
  {
    slug: "shop",
    department: null,
    image: { src: store("lookbook-6.jpg"), alt: "Woman with hands in her hair, black and white portrait" },
    filter: {},
    departmentFacet: true,
  },
  {
    slug: "women",
    department: "women",
    image: { src: product("crimson-satin-a-line-gown/1.jpg"), alt: "Woman in a crimson satin gown under an open sky" },
    filter: { categories: ["women"] },
  },
  {
    slug: "women-fancy-party-wear",
    department: "women",
    image: { src: product("antique-gold-embellished-ball-gown/1.jpg"), alt: "Woman twirling in an antique gold embellished ball gown" },
    filter: { categories: ["women-fancy-party-wear"] },
  },
  {
    slug: "women-casual",
    department: "women",
    image: { src: product("emerald-chiffon-wrap-maxi/1.jpg"), alt: "Woman in an emerald chiffon wrap maxi dress on a country path" },
    filter: { categories: ["women-casual"] },
  },
  {
    slug: "girls",
    department: "girls",
    image: { src: product("girls-ivory-tulle-twirl-dress/3.jpg"), alt: "Girl twirling in an ivory tulle dress on a terrace" },
    filter: { categories: ["girls"] },
  },
  {
    slug: "girls-fancy-party-wear",
    department: "girls",
    image: { src: product("girls-scarlet-ruffle-party-dress/2.jpg"), alt: "Girl in a scarlet ruffled party dress among autumn leaves" },
    filter: { categories: ["girls-fancy-party-wear"] },
  },
  {
    slug: "girls-casual",
    department: "girls",
    image: { src: product("girls-mint-chevron-sundress/1.jpg"), alt: "Girl in a mint chevron sundress in warm evening light" },
    filter: { categories: ["girls-casual"] },
  },
  {
    slug: "featured",
    department: null,
    image: { src: store("brand-story.jpg"), alt: "Woman in sunglasses and an oversized wool coat, black and white" },
    filter: { flag: "featured" },
    departmentFacet: true,
  },
  {
    slug: "best-sellers",
    department: null,
    image: { src: product("powder-blue-embroidered-gown/1.jpg"), alt: "Woman in a powder blue embroidered gown" },
    filter: { popular: true },
    departmentFacet: true,
  },
  {
    slug: "sale",
    department: null,
    image: { src: product("silver-sequin-one-shoulder-dress/1.jpg"), alt: "Woman in a silver sequin one-shoulder dress" },
    filter: { flag: "onSale" },
    departmentFacet: true,
  },
];

export function getCollectionDefinition(slug) {
  return collections.find((collection) => collection.slug === slug) ?? null;
}
