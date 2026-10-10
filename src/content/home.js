// Homepage editorial content for the Women + Girls store. Structure (links, imagery,
// crops) lives here; all wording comes from the dictionaries (`home.*`), so every
// language is complete. Product rails are filled from the database only.
// Imagery: licensed editorial photography (see docs/MEDIA_CREDITS.md).

const img = (name) => `/images/storefront/${name}`;
const productImg = (path) => `/images/products/${path}`;

/** @param {(key: string) => any} t  server translator for the page's locale */
export function getHomeContent(t) {
  return {
    hero: {
      eyebrow: t("home.hero.eyebrow"),
      title: t("brand.tagline"),
      subtitle: t("home.hero.subtitle"),
      cta: { label: t("home.hero.ctaWomen"), href: "/collections/women" },
      secondaryCta: { label: t("home.hero.ctaGirls"), href: "/collections/girls" },
      panels: [
        {
          tone: "women",
          label: t("nav.women"),
          caption: t("home.hero.womenCaption"),
          href: "/collections/women",
          image: { src: productImg("maroon-rosette-tulle-gown/1.jpg"), width: 1000, height: 1250, alt: t("home.hero.womenAlt") },
        },
        {
          tone: "girls",
          label: t("nav.girls"),
          caption: t("home.hero.girlsCaption"),
          href: "/collections/girls",
          image: { src: productImg("girls-scarlet-ruffle-party-dress/1.jpg"), width: 1000, height: 1250, alt: t("home.hero.girlsAlt") },
        },
      ],
    },

    categories: {
      heading: t("home.categories.heading"),
      shopLabel: t("home.categories.shop"),
      items: [
        { tone: "women", department: t("nav.women"), label: t("nav.womenParty"), href: "/collections/women-fancy-party-wear", image: { src: productImg("burgundy-satin-mermaid-gown/1.jpg"), alt: t("home.categories.alts.party") } },
        { tone: "women", department: t("nav.women"), label: t("nav.womenCasual"), href: "/collections/women-casual", image: { src: productImg("white-tiered-cotton-maxi/1.jpg"), alt: t("home.categories.alts.casual") } },
        { tone: "girls", department: t("nav.girls"), label: t("nav.girlsParty"), href: "/collections/girls-fancy-party-wear", image: { src: productImg("girls-ivory-lace-sleeve-tulle-gown/1.jpg"), alt: t("home.categories.alts.girlsParty") } },
        { tone: "girls", department: t("nav.girls"), label: t("nav.girlsCasual"), href: "/collections/girls-casual", image: { src: productImg("girls-sunshine-yellow-sundress/1.jpg"), alt: t("home.categories.alts.girlsCasual") } },
      ],
    },

    featuredCollections: {
      women: {
        eyebrow: t("nav.women"),
        title: t("home.women.title"),
        description: t("home.women.description"),
        cta: { label: t("home.women.cta"), href: "/collections/women" },
        links: [
          { label: t("nav.womenParty"), href: "/collections/women-fancy-party-wear" },
          { label: t("nav.womenCasual"), href: "/collections/women-casual" },
        ],
        images: {
          main: { src: productImg("navy-beaded-off-shoulder-gown/1.jpg"), alt: t("home.women.altMain"), width: 1000, height: 1250 },
          detail: { src: productImg("silver-sequin-one-shoulder-dress/2.jpg"), alt: t("home.women.altDetail"), width: 1000, height: 1250 },
        },
      },
      girls: {
        eyebrow: t("nav.girls"),
        title: t("home.girls.title"),
        description: t("home.girls.description"),
        cta: { label: t("home.girls.cta"), href: "/collections/girls" },
        links: [
          { label: t("nav.girlsParty"), href: "/collections/girls-fancy-party-wear" },
          { label: t("nav.girlsCasual"), href: "/collections/girls-casual" },
        ],
        images: {
          main: { src: productImg("girls-ivory-tulle-twirl-dress/1.jpg"), alt: t("home.girls.altMain"), width: 1000, height: 1250 },
          detail: { src: productImg("girls-coral-floral-cotton-dress/1.jpg"), alt: t("home.girls.altDetail"), width: 1000, height: 1250 },
        },
      },
    },

    brandStory: {
      eyebrow: t("home.story.eyebrow"),
      title: t("home.story.title"),
      body: [t("home.story.body1"), t("home.story.body2")],
      cta: { label: t("footer.links.about"), href: "/about" },
      image: { src: img("brand-story.jpg"), alt: t("home.story.alt"), width: 1800, height: 1440 },
    },

    promo: {
      eyebrow: t("home.promo.eyebrow"),
      title: t("home.promo.title"),
      cta: { label: t("home.promo.cta"), href: "/collections/women-fancy-party-wear" },
      image: { src: productImg("red-embroidered-bridal-lehenga/1.jpg"), alt: t("home.promo.alt"), width: 1000, height: 1250 },
    },

    lookbook: {
      eyebrow: t("home.lookbook.eyebrow"),
      title: t("home.lookbook.title"),
      description: t("home.lookbook.description"),
      followLabel: t("home.lookbook.follow"),
      items: [
        { src: productImg("olive-slip-maxi-dress/1.jpg") },
        { src: productImg("girls-blush-puff-sleeve-tulle-dress/1.jpg") },
        { src: productImg("black-embellished-cocktail-dress/1.jpg") },
        { src: productImg("girls-midnight-star-tulle-dress/1.jpg") },
        { src: productImg("mustard-maroon-embroidered-lehenga/1.jpg") },
        { src: productImg("girls-white-ruffle-off-shoulder-dress/1.jpg") },
      ].map((item, index) => ({ ...item, alt: t("home.lookbook.alts")[index] })),
    },

    showcase: {
      party: { eyebrow: t("nav.women"), title: t("home.showcase.partyTitle"), description: t("home.showcase.partyText"), action: { label: t("home.showcase.viewAll"), href: "/collections/women-fancy-party-wear" } },
      casual: { eyebrow: t("nav.women"), title: t("home.showcase.casualTitle"), description: t("home.showcase.casualText"), action: { label: t("home.showcase.viewAll"), href: "/collections/women-casual" } },
      girlsParty: { eyebrow: t("nav.girls"), title: t("home.showcase.girlsPartyTitle"), description: t("home.showcase.girlsPartyText"), action: { label: t("home.showcase.viewAll"), href: "/collections/girls-fancy-party-wear" } },
      girlsCasual: { eyebrow: t("nav.girls"), title: t("home.showcase.girlsCasualTitle"), description: t("home.showcase.girlsCasualText"), action: { label: t("home.showcase.viewAll"), href: "/collections/girls-casual" } },
      featured: { eyebrow: t("home.showcase.featuredEyebrow"), title: t("home.showcase.featuredTitle"), description: t("home.showcase.featuredText"), action: { label: t("home.showcase.viewAll"), href: "/collections/featured" } },
      sale: { eyebrow: t("home.showcase.saleEyebrow"), title: t("home.showcase.saleTitle"), description: t("home.showcase.saleText"), action: { label: t("home.showcase.saleAction"), href: "/collections/sale" } },
      bestSellers: { eyebrow: t("home.showcase.bestEyebrow"), title: t("home.showcase.bestTitle"), description: t("home.showcase.bestText"), action: { label: t("home.showcase.bestAction"), href: "/collections/best-sellers" } },
      shop: { eyebrow: t("home.showcase.shopEyebrow"), title: t("home.showcase.shopTitle"), description: t("home.showcase.shopText"), action: { label: t("home.showcase.viewAll"), href: "/collections/shop" } },
      empty: { title: t("home.showcase.emptyTitle"), description: t("home.showcase.emptyText") },
    },
  };
}
