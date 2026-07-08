import Image from "next/image";
import { getProducts } from "@/lib/supabase/products";
import { createProduct, updateProductImage, deleteProduct } from "./actions";

export default async function AdminBoutiquePage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Boutique</h1>
      <p className="mt-2 text-sm text-navy-900/60">
        Les 17 articles existants ont déjà été repris tels quels. Ajoutez une photo à chacun ci-dessous, ou ajoutez
        un nouvel article.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">Ajouter un article</h2>
        <form action={createProduct} className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium text-navy-900">
            Nom
            <input name="name" required className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Prix
            <input name="price" required placeholder="25€" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900 sm:col-span-2">
            Description
            <input name="description" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Photo (fichier)
            <input type="file" name="image_file" accept="image/*" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Ou URL de photo
            <input name="image_url" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <div className="sm:col-span-2">
            <button type="submit" className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2 text-sm font-semibold tracking-wide text-navy-950 uppercase">
              Ajouter
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 space-y-3">
        {products.length === 0 ? <p className="text-sm text-navy-900/60">Aucun article pour l&apos;instant.</p> : null}
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-950/5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-navy-950/8">
                {product.image_url ? (
                  <Image src={product.image_url} alt={product.name} width={56} height={56} className="size-full object-cover" />
                ) : (
                  <span className="text-xs text-navy-900/40">Sans photo</span>
                )}
              </div>
              <div>
                <p className="font-heading tracking-wide text-navy-950 uppercase">{product.name}</p>
                <p className="text-sm text-navy-900/60">{product.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <form action={updateProductImage.bind(null, product.id)} className="flex items-center gap-2">
                <input type="file" name="image_file" accept="image/*" className="w-40 text-xs" />
                <button type="submit" className="text-xs font-medium text-gold-600 hover:underline">
                  Mettre à jour la photo
                </button>
              </form>
              <form action={deleteProduct.bind(null, product.id)}>
                <button type="submit" className="text-sm font-medium text-red-600 hover:underline">
                  Supprimer
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
