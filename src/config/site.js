// Public, non-secret brand & storefront configuration.
// Safe to import from both server and client components — never put secrets here.

export const siteConfig = {
  name: "GF Collection",
  tagline: "Elegance for Every Generation",
  domain: "gfcollection.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gfcollection.com",
  description:
    "GF Collection — premium dresses for women and girls. Fancy and party wear, elegant casual dresses and beautifully made girls' dresses.",
  locale: "en",
  // Canonical store currency (all prices are stored in PKR) — see src/config/currency.js.
  currency: "PKR",
};

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  account: "/account",
  adminLogin: "/admin/login",
  admin: "/admin",
};
