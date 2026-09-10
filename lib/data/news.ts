import { formatMatchDate } from "@/lib/utils";
import type { Match, NewsItem } from "@/lib/types";

/**
 * Le site d'origine n'avait pas de rubrique « actualités ». Plutôt que d'inventer
 * du contenu, on reformule les 3 derniers matchs joués en cartes d'actualité :
 * ce sont de vraies données, simplement présentées autrement. La source n'indique
 * pas quel camp correspond à quel score, donc les titres restent neutres
 * (« Score final »), jamais « Victoire » ou « Défaite ».
 */
export function deriveNews(matches: Match[]): NewsItem[] {
  return matches
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
}

export function newsWithFormattedDate(matches: Match[]) {
  return deriveNews(matches).map((item) => ({ ...item, formattedDate: formatMatchDate(item.dateIso) }));
}
