import Image from "next/image";
import Link from "@/i18n/Link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";
import { departmentText } from "@/utils/department";

/**
 * "Shop by category": the Women and Girls categories as editorial tiles, each
 * tagged with its department (rose for Women, lilac for Girls) so shoppers see
 * at once where a category belongs. 2×2 on phones, 4 across from tablet up.
 */
export function CategorySwitcher({ items, heading, shopLabel }) {
  return (
    <section aria-labelledby="categories-title" className="bg-paper">
      <div className="container-page section-y-sm">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <h2 id="categories-title" className="eyebrow flex items-center gap-3 text-gold-deep">
            <span className="rule-gold" aria-hidden="true" />
            {heading}
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 md:grid-cols-4">
          {items.map((item) => (
            <li key={item.href} className="reveal">
              <Link href={item.href} className="group flex flex-col gap-3">
                <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 768px) 24vw, 48vw"
                    className="object-cover transition-[scale] duration-1000 ease-(--ease-luxe) group-hover:scale-105"
                  />
                  <span className={cn("eyebrow absolute start-2 top-2 px-2.5 py-1.5 !text-[0.5625rem] sm:start-3 sm:top-3", item.tone === "girls" ? "bg-girls-tint" : "bg-women-tint", departmentText(item.tone))}>
                    {item.department}
                  </span>
                </span>
                <span className="flex items-start justify-between gap-2">
                  <span className="headline text-[1.25rem] leading-tight sm:text-[1.5rem]">{item.label}</span>
                  <span className="mt-1 flex shrink-0 items-center gap-2 text-gold-deep">
                    <span className="eyebrow hidden xl:inline">{shopLabel}</span>
                    <Icon name="arrowRight" className="size-4 transition-transform duration-500 ease-(--ease-luxe) group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
