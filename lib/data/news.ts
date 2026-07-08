import { matches } from "@/lib/data/matches";
import { formatMatchDate } from "@/lib/utils";
import type { NewsItem } from "@/lib/types";

/**
 * The original site has no "actualités" section. Rather than inventing
 * content, the 3 most recent played matches are reformulated as news cards —
 * real data, reframed. Score order isn't asserted by the source markup
 * (see lib/data/matches.ts), so titles stay neutral ("Score final"),
 * never "Victoire"/"Défaite".
 */
export const news: NewsItem[] = matches
  .filter((match) => match.result !== null)
  .sort((a, b) => new Date(b.dateTimeIso).getTime() - new Date(a.dateTimeIso).getTime())
  .slice(0, 3)
  .map((match) => ({
    id: match.id,
    title: `Score final ${match.isHome ? "face à" : "à l'extérieur contre"} ${match.opponent}`,
    excerpt: `${match.result} — ${match.venue}`,
    dateIso: match.dateTimeIso,
    href: "/calendrier",
  }));

export function newsWithFormattedDate() {
  return news.map((item) => ({ ...item, formattedDate: formatMatchDate(item.dateIso) }));
}
