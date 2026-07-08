import Image from "next/image";
import { ShoppingBag, ExternalLink } from "lucide-react";
import type { ProductRow } from "@/lib/supabase/products";

export function ProductCard({ product, href }: { product: ProductRow; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {product.image_url ? (
        <div className="relative aspect-square w-full overflow-hidden bg-navy-950/5">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-navy-950/5">
          <ShoppingBag className="size-10 text-navy-900/30" aria-hidden />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg tracking-wide text-navy-950 uppercase">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-navy-900/65">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-heading text-2xl text-navy-950">{product.price}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-gold-500 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Commander <ExternalLink className="size-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
