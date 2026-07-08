import { createSupabaseServerClient } from "./server";

export interface PartnerRow {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
}

export async function getPartners(): Promise<PartnerRow[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("partners")
    .select("id, name, logo_url, website_url")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data;
}
