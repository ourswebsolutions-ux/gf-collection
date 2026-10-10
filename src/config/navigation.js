// Storefront navigation — single source for header, mobile menu and footer.
// Department/collection slugs map to /collections/[slug] (see src/content/collections.js
// and the category structure in prisma/seed.mjs). `labelKey` is the translation key
// (src/i18n/dictionaries); `label` is the English fallback. `tone` picks the
// department accent (Women = rose, Girls / Kids = lilac). The store sells
// women's and girls' clothing only.

export const departments = [
  {
    label: "Women", labelKey: "nav.women",
    href: "/collections/women",
    tone: "women",
    children: [
      { label: "Fancy / Party Wear", labelKey: "nav.womenParty", href: "/collections/women-fancy-party-wear" },
      { label: "Casual Dresses", labelKey: "nav.womenCasual", href: "/collections/women-casual" },
    ],
  },
  {
    label: "Girls / Kids", labelKey: "nav.girls",
    href: "/collections/girls",
    tone: "girls",
    children: [
      { label: "Girls' Fancy / Party Wear", labelKey: "nav.girlsParty", href: "/collections/girls-fancy-party-wear" },
      { label: "Girls' Casual Dresses", labelKey: "nav.girlsCasual", href: "/collections/girls-casual" },
    ],
  },
];

export const highlights = [
  { label: "Shop All", labelKey: "nav.shopAll", href: "/collections/shop" },
  { label: "Sale", labelKey: "nav.sale", href: "/collections/sale", accent: true },
];

export const accountLinks = {
  account: "/account",
  wishlist: "/wishlist",
  cart: "/cart",
  search: "/search",
};

export const footerNavigation = [
  {
    titleKey: "footer.columns.shop",
    links: [
      { labelKey: "footer.links.women", href: "/collections/women" },
      { labelKey: "footer.links.womenParty", href: "/collections/women-fancy-party-wear" },
      { labelKey: "footer.links.womenCasual", href: "/collections/women-casual" },
      { labelKey: "footer.links.girls", href: "/collections/girls" },
      { labelKey: "footer.links.girlsParty", href: "/collections/girls-fancy-party-wear" },
      { labelKey: "footer.links.girlsCasual", href: "/collections/girls-casual" },
      { labelKey: "footer.links.shopAll", href: "/collections/shop" },
      { labelKey: "footer.links.sale", href: "/collections/sale" },
    ],
  },
  {
    titleKey: "footer.columns.customer",
    links: [
      { labelKey: "footer.links.myAccount", href: "/account" },
      { labelKey: "footer.links.orders", href: "/account/orders" },
      { labelKey: "footer.links.wishlist", href: "/wishlist" },
      { labelKey: "footer.links.cart", href: "/cart" },
      { labelKey: "footer.links.trackOrder", href: "/track-order" },
    ],
  },
  {
    titleKey: "footer.columns.help",
    links: [
      { labelKey: "footer.links.contact", href: "/contact" },
      { labelKey: "footer.links.shipping", href: "/shipping" },
      { labelKey: "footer.links.returns", href: "/returns" },
      { labelKey: "footer.links.exchange", href: "/exchange" },
      { labelKey: "footer.links.sizeGuide", href: "/size-guide" },
      { labelKey: "footer.links.faqs", href: "/faqs" },
    ],
  },
  {
    titleKey: "footer.columns.company",
    links: [
      { labelKey: "footer.links.about", href: "/about" },
      { labelKey: "footer.links.contact", href: "/contact" },
      { labelKey: "footer.links.privacy", href: "/privacy-policy" },
      { labelKey: "footer.links.terms", href: "/terms" },
    ],
  },
];
