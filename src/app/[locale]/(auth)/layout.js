import Image from "next/image";
import { Suspense } from "react";
import { LanguageMenu } from "@/components/layout/LanguageMenu";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import Link from "@/i18n/Link";
import { getTranslator } from "@/i18n/server";

export default async function AuthLayout({ children, params }) {
  const t = await getTranslator((await params).locale);

  return (
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      {/* Brand panel — desktop only, so mobile goes straight to the form. */}
      <aside className="relative hidden overflow-hidden bg-sand lg:block">
        <Image src="/images/products/antique-gold-embellished-ball-gown/1.jpg" alt="" fill preload sizes="50vw" className="object-cover object-[50%_25%]" />
        <div className="absolute inset-x-10 bottom-10 flex items-center gap-8 bg-paper p-8 text-ink xl:inset-x-14 xl:bottom-14">
          <Logo variant="full" className="h-28 shrink-0" />
          <div className="flex flex-col gap-3 border-s border-line ps-8">
            <span className="rule-gold" aria-hidden="true" />
            <p className="headline text-title italic">{t("brand.tagline")}</p>
            <p className="eyebrow text-mute">{t("brand.departments")}</p>
          </div>
        </div>
      </aside>

      <main id="main" className="flex flex-col">
        <div className="container-page flex h-16 items-center justify-between gap-4 border-b border-line lg:h-20 lg:border-0">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-xs text-subtle transition-colors hover:text-ink">
            <Icon name="arrowRight" className="size-4 -scale-x-100 rtl:scale-x-100" />
            <span className="eyebrow !text-[0.625rem]">{siteConfig.name}</span>
          </Link>
          <div className="lg:hidden">
            <Logo className="h-9" />
          </div>
          <Suspense fallback={null}>
            <LanguageMenu tone="light" />
          </Suspense>
        </div>
        <div className="flex flex-1 items-center py-12">
          <div className="container-narrow max-w-md animate-reveal">{children}</div>
        </div>
      </main>
    </div>
  );
}
