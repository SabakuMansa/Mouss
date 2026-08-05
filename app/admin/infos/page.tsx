import { getSiteSettings } from "@/lib/supabase/settings";
import { updateSettings } from "./actions";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();
  const isFallback = settings.id === "fallback";

  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Infos pratiques</h1>

      {isFallback ? (
        <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Aucune ligne trouvée dans <code>site_settings</code> — exécutez d&apos;abord{" "}
          <code>supabase/alter_site_settings.sql</code>, puis rechargez cette page.
        </p>
      ) : (
        <form action={updateSettings.bind(null, settings.id)} className="mt-8 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium text-navy-900">
            Nom du stade
            <input name="venue" defaultValue={settings.venue ?? ""} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Adresse
            <input name="address" required defaultValue={settings.address} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Horaires d&apos;entraînement
            <input name="schedule" required defaultValue={settings.schedule} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Email de contact
            <input name="email" required defaultValue={settings.email} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Lien HelloAsso (adhésion)
            <input name="helloasso_url" defaultValue={settings.helloasso_url ?? ""} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Lien Facebook
            <input name="facebook_url" defaultValue={settings.facebook_url ?? ""} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Lien Instagram
            <input name="instagram_url" defaultValue={settings.instagram_url ?? ""} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900 sm:col-span-2">
            Carte Google Maps (URL d&apos;intégration)
            <input name="map_embed_src" defaultValue={settings.map_embed_src ?? ""} className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm" />
          </label>
          <label className="text-sm font-medium text-navy-900">
            Chaîne Twitch (identifiant, sans URL)
            <input
              name="twitch_channel"
              placeholder="mousquetaires92"
              defaultValue={settings.twitch_channel ?? ""}
              className="mt-1 w-full rounded-lg border border-navy-950/15 px-3 py-2 text-sm"
            />
          </label>
          <div className="sm:col-span-2">
            <button type="submit" className="mt-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-6 py-2 text-sm font-semibold tracking-wide text-navy-950 uppercase">
              Enregistrer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
