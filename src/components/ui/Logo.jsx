import Image from "next/image";
import Link from "@/i18n/Link";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";

// Brand assets cut from the store logo (public/logo.png) — same artwork, transparent
// padding removed so it can be sized precisely; aspect ratios are never altered:
//   full       → the complete stacked logo: monogram, "GF", "COLLECTION" (footer, auth, brand moments)
//   horizontal → the same monogram and wordmark placed side by side (headers, where height is limited)
//   mark       → the champagne monogram alone (very compact spaces, favicon)
// The wordmark is near-black, so the logo is always placed on light (ivory) surfaces.
const ASSETS = {
  full: { src: "/brand/gf-logo.png", width: 168, height: 242 },
  horizontal: { src: "/brand/gf-logo-horizontal.png", width: 353, height: 131 },
  mark: { src: "/brand/gf-mark.png", width: 163, height: 131 },
};

/**
 * @param {{ variant?: "horizontal" | "full" | "mark", href?: string | null, className?: string, imageClassName?: string, preload?: boolean }} props
 */
export function Logo({ variant = "horizontal", href = "/", className, imageClassName, preload = false }) {
  const asset = ASSETS[variant];
  const image = (
    <Image
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={`${siteConfig.name} — ${siteConfig.tagline}`}
      preload={preload}
      unoptimized
      className={cn("h-full w-auto object-contain", imageClassName)}
    />
  );

  if (!href) return <span className={cn("inline-flex", className)}>{image}</span>;

  return (
    <Link href={href} aria-label={`${siteConfig.name} home`} className={cn("inline-flex", className)}>
      {image}
    </Link>
  );
}
