"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductRow as Product } from "@/lib/supabase/products";
import { updateProduct, deleteProduct } from "@/app/admin/boutique/actions";

const inputClass = "mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm";

export function ProductRow({ product }: { product: Product }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <form
          action={async (formData) => {
            await updateProduct(product.id, formData);
            setEditing(false);
          }}
          className="grid gap-3 sm:grid-cols-2"
        >
          <label className="text-sm font-medium text-navy-900">
            Nom
            <input name="name" required defaultValue={product.name} className={inputClass} />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Prix
            <input name="price" required defaultValue={product.price} className={inputClass} />
          </label>
          <label className="text-sm font-medium text-navy-900 sm:col-span-2">
            Description
            <input name="description" defaultValue={product.description ?? ""} className={inputClass} />
          </label>
          <label className="text-sm font-medium text-navy-900 sm:col-span-2">
            Remplacer la photo (facultatif — laissez vide pour garder l&apos;actuelle)
            <input type="file" name="image_file" accept="image/*" className={inputClass} />
          </label>
          <div className="flex items-center gap-4 sm:col-span-2">
            <button
              type="submit"
              className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2 text-sm font-semibold tracking-wide text-navy-950 uppercase"
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="mt-2 text-sm text-navy-900/60 underline"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-950/5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-navy-950/8">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              width={56}
              height={56}
              className="size-full object-cover"
            />
          ) : (
            <span className="text-xs text-navy-900/40">Sans photo</span>
          )}
        </div>
        <div>
          <p className="font-heading tracking-wide text-navy-950 uppercase">{product.name}</p>
          <p className="text-sm text-navy-900/60">
            {product.price}
            {product.description ? ` — ${product.description}` : ""}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          onClick={() => setEditing(true)}
          className="text-sm font-medium text-navy-900 hover:underline"
        >
          Modifier
        </button>
        <button
          onClick={() => {
            if (confirm(`Supprimer l'article « ${product.name} » ?`)) deleteProduct(product.id);
          }}
          className="text-sm font-medium text-red-600 hover:underline"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
