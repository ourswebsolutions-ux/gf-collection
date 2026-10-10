import Image from "next/image";
import Link from "@/i18n/Link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";
import { departmentText } from "@/utils/department";

/**
 * Brand hero: the store promise beside the two departments, so it is clear at a
 * glance that this is a Women & Girls house. Text first on phones (headline, two
 * department buttons), then both departments side by side as large tappable
 * portraits; on desktop the copy and the portraits share the first screen.
 * The first portrait is preloaded as the LCP image.
 *
 * @param {{ content: ReturnType<typeof import("@/content/home").getHomeContent>["hero"] }} props
 */
export function Hero({ content }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-paper">
      {/* A quiet champagne wash behind the portraits — one tone, no gradient sweep. */}
      <div aria-hidden="true" className="absolute inset-y-0 end-0 -z-10 hidden w-[42%] bg-bone lg:block" />

      <div className="container-page grid gap-9 pb-12 pt-9 sm:pb-16 sm:pt-12 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
        <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-8">
          <p className="eyebrow flex animate-reveal items-center gap-4 text-gold-deep">
            <span className="rule-gold" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h1 id="hero-title" className="headline max-w-xl animate-reveal text-[clamp(2.75rem,4vw+0.5rem,5rem)] leading-[0.98] [animation-delay:120ms] [text-wrap:balance]">
            {content.title}
          </h1>
          <p className="max-w-md animate-reveal text-[0.9375rem] leading-relaxed text-subtle [animation-delay:200ms] sm:text-base">{content.subtitle}</p>
          <div className="grid animate-reveal grid-cols-2 gap-3 [animation-delay:260ms] sm:flex">
            <Button href={content.cta.href} size="lg" className="!px-4 sm:!px-10">
              {content.cta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="secondary" size="lg" className="!px-4 sm:!px-10">
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>

        <ul className="hero-media grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7">
          {content.panels.map((panel, index) => (
            <li key={panel.href} className={cn("animate-reveal", index === 1 && "lg:mt-20 [animation-delay:160ms]")}>
              <Link href={panel.href} className="group relative block aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={panel.image.src}
                  alt={panel.image.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, 48vw"
                  preload={index === 0}
                  fetchPriority={index === 0 ? "high" : undefined}
                  className="object-cover transition-[scale] duration-[1400ms] ease-(--ease-luxe) group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 bg-paper px-3 py-3 text-ink sm:inset-x-3 sm:bottom-3 sm:px-5 sm:py-4">
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="headline text-[1.375rem] leading-none sm:text-[1.875rem]">{panel.label}</span>
                    <span className={cn("eyebrow hidden truncate !text-[0.5625rem] sm:block", departmentText(panel.tone))}>{panel.caption}</span>
                  </span>
                  <Icon name="arrowRight" className="size-4 shrink-0 text-gold-deep transition-transform duration-500 ease-(--ease-luxe) group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
