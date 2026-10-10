"use client";

import { Suspense, useState } from "react";
import { accountLinks, departments, highlights } from "@/config/navigation";
import { Drawer } from "@/components/ui/Drawer";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { useT } from "@/i18n/I18nProvider";
import Link from "@/i18n/Link";
import { cn } from "@/utils/cn";
import { departmentText } from "@/utils/department";
import { CurrencyMenu } from "@/components/currency/CurrencyMenu";
import { LanguageMenu } from "./LanguageMenu";

const SECONDARY = [
  { labelKey: "nav.account", href: accountLinks.account, icon: "user" },
  { labelKey: "nav.wishlist", href: accountLinks.wishlist, icon: "heart" },
  { labelKey: "nav.cart", href: accountLinks.cart, icon: "bag" },
  { labelKey: "nav.search", href: accountLinks.search, icon: "search" },
];

/**
 * Full-height slide-out navigation for mobile & tablet. Slides from the reading-start side.
 * Women and Girls open in place (no extra page load) with large, thumb-friendly rows.
 */
export function MobileMenu({ contact, className }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("nav.openMenu")}
        aria-expanded={open}
        className={cn("grid size-11 place-items-center text-ink/80 transition-colors hover:text-gold-deep", className)}
      >
        <Icon name="menu" className="size-6" />
      </button>

      <Drawer open={open} onClose={close} label={t("nav.menu")} side="start" closeLabel={t("common.close")}>
        {/* Close the menu when any link inside is followed. */}
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain" onClick={(event) => event.target.closest("a") && close()}>
          <div className="flex h-16 shrink-0 items-center border-b border-line px-5">
            <Logo className="h-10" />
          </div>

          {/* Preferences first, so language & currency are easy to find on phones. */}
          <div className="mx-5 flex items-center justify-between gap-2 border-b border-line py-1.5">
            <span className="eyebrow !text-[0.625rem] text-mute">
              {t("header.language")} · {t("header.currency")}
            </span>
            <div className="flex items-center">
              <Suspense fallback={null}>
                <LanguageMenu />
              </Suspense>
              <CurrencyMenu />
            </div>
          </div>

          <nav aria-label={t("nav.menu")} className="flex flex-1 flex-col px-5 pb-8 pt-6">
            <p className="eyebrow mb-4 text-gold-deep">{t("nav.shop")}</p>
            <ul className="flex flex-col gap-3">
              {departments.map((item) => (
                <li key={item.href} className={cn("border border-line", item.tone === "girls" ? "bg-girls-tint/60" : "bg-women-tint/60")}>
                  <details className="group/acc" open={item.tone === "women" ? true : undefined}>
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between px-4 [&::-webkit-details-marker]:hidden">
                      <span className="headline text-[2rem] leading-none">{t(item.labelKey)}</span>
                      <Icon name="chevronDown" className="size-5 text-mute transition-transform duration-300 group-open/acc:rotate-180" />
                    </summary>
                    <ul className="flex flex-col border-t border-line/80 bg-paper px-4 pb-3 pt-2">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="flex min-h-12 items-center justify-between text-[0.9375rem] text-ink/85 hover:text-gold-deep">
                            {t(child.labelKey)}
                            <Icon name="chevronRight" className="size-4 text-mute rtl:-scale-x-100" />
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={item.href} className={cn("eyebrow flex min-h-12 items-center", departmentText(item.tone))}>
                          {t("nav.allOf", { name: t(item.labelKey) })}
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-col border-t border-line pt-2">
              {highlights.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={cn("eyebrow flex min-h-12 items-center justify-between", item.accent ? "text-gold-deep" : "text-ink")}>
                    {t(item.labelKey)}
                    <Icon name="chevronRight" className="size-4 text-mute rtl:-scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-6 grid grid-cols-2 gap-px border border-line bg-line">
              {SECONDARY.map((item) => (
                <li key={item.labelKey} className="bg-paper">
                  <Link href={item.href} className="flex min-h-14 items-center gap-3 px-4 text-sm text-ink/85 hover:text-gold-deep">
                    <Icon name={item.icon} className="size-4.5 text-gold-deep" />
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-10 text-sm text-mute">
              {contact?.whatsappNumber ? (
                <a href={`https://wa.me/${contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 hover:text-ink">
                  <Icon name="whatsapp" className="size-4.5 text-gold-deep" />
                  {t("nav.whatsapp")}
                </a>
              ) : null}
              <p className="font-display text-xl italic text-ink/70">{t("brand.tagline")}</p>
            </div>
          </nav>
        </div>
      </Drawer>
    </>
  );
}
