import { Suspense } from "react";
import Link from "@/i18n/Link";
import { departments, highlights } from "@/config/navigation";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { SearchOverlay } from "@/components/search/SearchOverlay";
import { getTranslator } from "@/i18n/server";
import { cn } from "@/utils/cn";
import { departmentText } from "@/utils/department";
import { CurrencyMenu } from "@/components/currency/CurrencyMenu";
import { AccountLink, CartButton, WishlistLink } from "@/components/shop/HeaderShopLinks";
import { LanguageMenu } from "./LanguageMenu";
import { MobileMenu } from "./MobileMenu";

const NAV_LINK =
  "eyebrow relative inline-flex h-20 items-center whitespace-nowrap text-ink/80 transition-colors duration-300 hover:text-ink after:absolute after:inset-x-0 after:bottom-6 after:h-px after:origin-left rtl:after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 after:ease-(--ease-luxe) hover:after:scale-x-100 focus-visible:after:scale-x-100";

// Display (grid/hidden) is set per element to avoid conflicting utilities.
const ICON_LINK = "relative size-11 place-items-center text-ink/80 transition-colors duration-300 hover:text-gold-deep";

/**
 * Storefront header — a Server Component on the ivory brand surface (the logo's
 * wordmark is near-black, so it always sits on light). The menus (language,
 * currency), search, mobile menu and the live bag/account/wishlist icons hydrate
 * on the client; the desktop navigation (Women | Girls with their categories) is
 * pure HTML/CSS. Uses logical (start/end) spacing so it mirrors in Urdu (RTL).
 */
export async function SiteHeader({ contact, locale }) {
  const t = await getTranslator(locale);

  return (
    <header data-entrance="header" className="sticky top-0 z-40 border-b border-line bg-paper text-ink">
      <div className="container-page grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:h-20 lg:grid-cols-[auto_1fr_auto] lg:gap-5 xl:gap-8">
        {/* Start: menu (mobile) / logo (desktop) */}
        <div className="flex items-center">
          <div className="-ms-2.5 flex items-center lg:hidden">
            <MobileMenu contact={contact} />
            <Suspense fallback={null}>
              <LanguageMenu align="start" compact />
            </Suspense>
          </div>
          <div className="hidden lg:block">
            <Logo preload className="h-13" />
          </div>
        </div>

        {/* Centre: logo (mobile) / navigation (desktop) */}
        <div className="flex justify-center">
          <div className="lg:hidden">
            <Logo preload className="h-10" />
          </div>
          <nav aria-label={t("nav.shop")} className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              {departments.map((item) => (
                <li key={item.href} className="group/nav relative">
                  <Link href={item.href} className={NAV_LINK}>
                    {t(item.labelKey)}
                    {item.children ? <Icon name="chevronDown" className="ms-1.5 size-3.5 opacity-60 transition-transform duration-300 group-hover/nav:rotate-180" /> : null}
                  </Link>
                  {item.children ? (
                    <div
                      className={cn(
                        "invisible absolute start-1/2 top-full z-10 -translate-x-1/2 translate-y-1 opacity-0 transition-[opacity,translate,visibility] duration-300 ease-(--ease-luxe) rtl:translate-x-1/2",
                        "group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100",
                      )}
                    >
                      <div className="min-w-64 border border-line bg-paper shadow-[0_24px_48px_-28px_rgb(28_26_23/0.35)]">
                        <p className={cn("eyebrow border-b border-line px-6 py-3.5 !text-[0.625rem]", item.tone === "girls" ? "bg-girls-tint" : "bg-women-tint", departmentText(item.tone))}>
                          {t(item.labelKey)}
                        </p>
                        <ul className="px-6 py-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className="block py-2.5 text-sm text-ink/80 transition-colors hover:text-gold-deep">
                                {t(child.labelKey)}
                              </Link>
                            </li>
                          ))}
                          <li className="mt-3 border-t border-line pt-3">
                            <Link href={item.href} className="eyebrow flex items-center gap-2 py-2 text-gold-deep hover:text-ink">
                              {t("nav.allOf", { name: t(item.labelKey) })}
                              <Icon name="arrowRight" className="size-3.5 rtl:-scale-x-100" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
              <li aria-hidden="true" className="h-4 w-px bg-line" />
              {highlights.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={cn(NAV_LINK, item.accent && "text-gold-deep hover:text-ink")}>
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* End: actions */}
        <div className="-me-2.5 flex items-center justify-end">
          {/* Language & currency: separate dropdowns, always visible on desktop. */}
          <div className="me-1 hidden items-center lg:flex">
            <Suspense fallback={null}>
              <LanguageMenu />
            </Suspense>
            <CurrencyMenu />
            <span aria-hidden="true" className="ms-1 h-4 w-px bg-line" />
          </div>
          <SearchOverlay triggerClassName={cn(ICON_LINK, "grid")} />
          <AccountLink className={cn(ICON_LINK, "hidden lg:grid")} />
          <WishlistLink className={cn(ICON_LINK, "hidden sm:grid")} />
          <CartButton className={cn(ICON_LINK, "grid")} />
        </div>
      </div>
    </header>
  );
}
