import { getPartners } from "@/lib/supabase/partners";
import { createPartner, deletePartner } from "./actions";

export default async function AdminPartnersPage() {
  const partners = await getPartners();

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Partenaires</h1>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5">
        <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">Ajouter un partenaire</h2>
        <form action={createPartner} className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium text-navy-900">
            Nom
            <input name="name" required className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Site web (optionnel)
            <input name="website_url" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Logo (fichier)
            <input type="file" name="logo_file" accept="image/*" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Ou URL de logo
            <input name="logo_url" className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <div className="sm:col-span-2">
            <button type="submit" className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2 text-sm font-semibold tracking-wide text-navy-950 uppercase">
              Ajouter
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 space-y-3">
        {partners.length === 0 ? <p className="text-sm text-navy-900/60">Aucun partenaire pour l&apos;instant.</p> : null}
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-950/5">
            <p className="font-heading tracking-wide text-navy-950 uppercase">{partner.name}</p>
            <form action={deletePartner.bind(null, partner.id)}>
              <button type="submit" className="text-sm font-medium text-red-600 hover:underline">
                Supprimer
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
