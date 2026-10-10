import { ProductGrid } from "@/components/product/ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Heading + product grid for the homepage rails (Women's and Girls' party & casual,
 * Featured, Sale, Best Sellers). Copy comes from the page (localised); products
 * only from the database.
 */
const SURFACES = { paper: "bg-paper", bone: "bg-bone", women: "bg-women-tint/50", girls: "bg-girls-tint/50" };

export function ProductShowcase({ id, content, empty, products, tone = "paper" }) {
  return (
    <section aria-labelledby={id} className={SURFACES[tone] ?? SURFACES.paper}>
      <div className="container-page section-y flex flex-col gap-10 sm:gap-14">
        <SectionHeading id={id} eyebrow={content.eyebrow} title={content.title} description={content.description} action={content.action} />
        {products.length ? <ProductGrid products={products} /> : <EmptyState title={empty.title} description={empty.description} />}
      </div>
    </section>
  );
}
