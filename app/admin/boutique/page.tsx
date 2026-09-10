import { getProducts } from "@/lib/supabase/products";
import { ProductRow } from "@/components/admin/ProductRow";
import { createProduct } from "./actions";

export default async function AdminBoutiquePage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Boutique</h1>
      <p className="mt-2 text-sm text-navy-900/60">
        Modifiez le nom, le prix, la description ou la photo d&apos;un article existant, ou ajoutez-en un
        nouveau. Attention : la boutique HelloAsso est indépendante et doit être mise à jour séparément.
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
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
