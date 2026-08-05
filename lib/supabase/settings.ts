import { createSupabaseServerClient } from "./server";

export interface SiteSettings {
  id: string;
  venue: string | null;
  address: string;
  schedule: string;
  email: string;
  helloasso_url: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  map_embed_src: string | null;
  twitch_channel: string | null;
}

const FALLBACK: SiteSettings = {
  id: "fallback",
  venue: "Stade Municipal Jean Longuet",
  address: "254 av. de la Division Leclerc - 92290 Chatenay-Malabry",
  schedule: "Lundi & Jeudi de 20h à 22h",
  email: "mousquetaires.footus@gmail.com",
  helloasso_url: "https://www.helloasso.com/associations/les-mousquetaires-foot-us/adhesions/adhesion-2025-2026",
  facebook_url: "https://www.facebook.com/mousfootus/?locale=fr_FR",
  instagram_url: "https://www.instagram.com/mousquetairesfootus/?hl=fr",
  map_embed_src:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.818395793304!2d2.267659359431484!3d48.76453030614987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e679e25e112069%3A0x342506e186ea8106!2sStade%20de%20Ch%C3%A2tenay-Malabry!5e0!3m2!1sfr!2sfr!4v1761945612178!5m2!1sfr!2sfr",
  twitch_channel: "mousquetaires92",
};

/**
 * Il n'existe qu'une seule ligne dans site_settings — les infos pratiques du club.
 * Si la base n'a pas encore été initialisée (ou en cas d'erreur), on retombe sur les
 * vraies valeurs d'origine plutôt que de casser l'affichage.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.from("site_settings").select("*").limit(1).maybeSingle();
  if (error || !data) return FALLBACK;
  return data;
}
