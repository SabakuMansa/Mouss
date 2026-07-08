import { getPhotos } from "@/lib/supabase/photos";
import { PhotoGrid } from "@/components/admin/PhotoGrid";
import { addPhoto } from "./actions";

export default async function AdminGalleryPage() {
  const photos = await getPhotos();

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Galerie</h1>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">Ajouter une photo</h2>
        <form action={addPhoto} className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium text-navy-900">
            Fichier image
            <input
              type="file"
              name="file"
              accept="image/*"
              className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Ou URL d&apos;image (si pas de fichier)
            <input
              name="image_url"
              className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-sm font-medium text-navy-900 sm:col-span-2">
            Légende (optionnel)
            <input
              name="caption"
              className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2 text-sm font-semibold tracking-wide text-navy-950 uppercase"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <PhotoGrid photos={photos} />
      </div>
    </div>
  );
}
