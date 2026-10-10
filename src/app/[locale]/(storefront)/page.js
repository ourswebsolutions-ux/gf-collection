import { BrandStory } from "@/components/home/BrandStory";
import { CategorySwitcher } from "@/components/home/CategorySwitcher";
import { CollectionSection } from "@/components/home/CollectionSection";
import { Hero } from "@/components/home/Hero";
import { Lookbook } from "@/components/home/Lookbook";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { PromoBanner } from "@/components/home/PromoBanner";
import { siteConfig } from "@/config/site";
import { getHomeContent } from "@/content/home";
import { getBestSellers, getCategoryProducts, getFeaturedProducts, getSaleProducts } from "@/data/catalog";
import { getTranslator } from "@/i18n/server";
import { getPublicContact } from "@/lib/settings";
import { createMetadata } from "@/utils/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslator(locale);
  return createMetadata({ path: "/", locale, description: `${siteConfig.name} — ${t("brand.tagline")}. ${t("home.hero.subtitle")}` });
}

// Catalogue data is re-read at most once a minute (ISR) — fast pages, fresh stock.
export const revalidate = 60;

function OrganizationJsonLd({ social }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/brand/gf-logo.png`,
      slogan: siteConfig.tagline,
      description: siteConfig.description,
      ...(social.length && { sameAs: social.map((item) => item.href) }),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
  // JSON.stringify output is escaped for "<" to keep the script tag safe.
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const [t, party, casual, girlsParty, girlsCasual, featured, sale, bestSellers] = await Promise.all([
    getTranslator(locale),
    getCategoryProducts("women-fancy-party-wear", { limit: 4, locale }),
    getCategoryProducts("women-casual", { limit: 4, locale }),
    getCategoryProducts("girls-fancy-party-wear", { limit: 4, locale }),
    getCategoryProducts("girls-casual", { limit: 4, locale }),
    getFeaturedProducts({ limit: 4, locale }),
    getSaleProducts({ limit: 4, locale }),
    getBestSellers({ limit: 4, locale }),
  ]);
  const content = getHomeContent(t);
  const { showcase } = content;
  const { social } = await getPublicContact();
  const instagram = social.find((item) => item.name === "Instagram");
  // Product rails appear only when the database has pieces for them (never an empty rail);
  // a brand-new store shows a single "coming soon" rail instead.
  const hasProducts = party.length + casual.length + girlsParty.length + girlsCasual.length > 0;

  return (
    <>
      <OrganizationJsonLd social={social} />
      <Hero content={content.hero} />
      <CategorySwitcher items={content.categories.items} heading={content.categories.heading} shopLabel={content.categories.shopLabel} />

      {/* ── Women ── */}
      <CollectionSection id="collection-women" content={content.featuredCollections.women} tone="women" />
      {party.length ? <ProductShowcase id="party-title" content={showcase.party} empty={showcase.empty} products={party} /> : null}
      {casual.length ? <ProductShowcase id="casual-title" content={showcase.casual} empty={showcase.empty} products={casual} tone="bone" /> : null}

      <PromoBanner content={content.promo} />

      {/* ── Girls / Kids ── */}
      <CollectionSection id="collection-girls" content={content.featuredCollections.girls} reverse tone="girls" />
      {girlsParty.length ? <ProductShowcase id="girls-party-title" content={showcase.girlsParty} empty={showcase.empty} products={girlsParty} /> : null}
      {girlsCasual.length ? <ProductShowcase id="girls-casual-title" content={showcase.girlsCasual} empty={showcase.empty} products={girlsCasual} tone="girls" /> : null}

      {!hasProducts ? <ProductShowcase id="shop-title" content={showcase.shop} empty={showcase.empty} products={[]} /> : null}
      {/* Featured / sale / best sellers appear only when the team has flagged pieces or real sales exist. */}
      {featured.length ? <ProductShowcase id="featured-title" content={showcase.featured} empty={showcase.empty} products={featured} tone="bone" /> : null}
      {sale.length ? <ProductShowcase id="sale-title" content={showcase.sale} empty={showcase.empty} products={sale} /> : null}
      {bestSellers.length ? <ProductShowcase id="best-sellers-title" content={showcase.bestSellers} empty={showcase.empty} products={bestSellers} tone="bone" /> : null}

      <BrandStory content={content.brandStory} />
      <Lookbook content={content.lookbook} socialLink={instagram} />
    </>
  );
}
