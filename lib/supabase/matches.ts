import { createSupabaseServerClient } from "./server";
import type { Match } from "@/lib/types";

export async function getMatches(): Promise<Match[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("matches")
    .select("*")
    .order("date_time", { ascending: true });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    opponent: row.opponent,
    opponentLogo: row.opponent_logo_url,
    dateTimeIso: row.date_time,
    venue: row.venue,
    isHome: row.is_home,
    result: row.result,
  }));
}
