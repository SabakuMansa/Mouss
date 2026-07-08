import { ShoppingBag, ExternalLink } from "lucide-react";
import type { ShopProduct } from "@/lib/data/shop";

export function ProductCard({ product, href }: { product: ShopProduct; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950/8">
        <ShoppingBag className="size-5 text-navy-900" aria-hidden />
      </div>
      <h3 className="mt-4 font-heading text-lg tracking-wide text-navy-950 uppercase">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm text-navy-900/65">{product.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-heading text-2xl text-navy-950">{product.price}</span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-gold-500 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Commander <ExternalLink className="size-3.5" />
        </span>
      </div>
    </a>
  );
}
