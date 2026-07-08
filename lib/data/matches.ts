import type { Match } from "@/lib/types";

/**
 * Transcribed 1:1 from the original site's CALENDRIER.html (saison 2025-2026).
 * `matchStatus()` (lib/utils.ts) derives "upcoming"/"past" dynamically from
 * dateTimeIso vs. the current date — never hardcoded, since the source data
 * ages every day. Score order (home-away) is not asserted by the original
 * markup, so `result` is kept verbatim instead of inventing a win/loss badge.
 */
export const matches: Match[] = [
  {
    id: "2025-11-16-cobras",
    opponent: "Cobras de Paris",
    opponentLogo: "/images/opponents/cobras.jpg",
    dateTimeIso: "2025-11-16T14:00:00+01:00",
    venue: "Stade Jean Longuet, Châtenay-Malabry",
    isHome: true,
    result: "6 - 0",
  },
  {
    id: "2025-11-30-saints",
    opponent: "Saints de Marne la Vallée",
    opponentLogo: "/images/opponents/saints.jpg",
    dateTimeIso: "2025-11-30T14:00:00+01:00",
    venue: "Stade Jean Longuet, Châtenay-Malabry",
    isHome: true,
    result: "24 - 6",
  },
  {
    id: "2025-12-14-meteores",
    opponent: "Météores Fontenay-sous-Bois",
    opponentLogo: "/images/opponents/meteo.jpg",
    dateTimeIso: "2025-12-14T14:00:00+01:00",
    venue: "Stade André Laurent, Fontenay-sous-Bois",
    isHome: false,
    result: "20 - 23",
  },
  {
    id: "2026-01-18-bucks",
    opponent: "Bucks de Boran-sur-Oise",
    opponentLogo: "/images/opponents/bucks.jpg",
    dateTimeIso: "2026-01-18T14:00:00+01:00",
    venue: "Stade Jean Longuet, Châtenay-Malabry",
    isHome: true,
    result: "18 - 0",
  },
  {
    id: "2026-02-01-chevalier",
    opponent: "Chevalier d'Orléans",
    opponentLogo: "/images/opponents/chevalier.jpg",
    dateTimeIso: "2026-02-01T14:00:00+01:00",
    venue: "Stade de l'Île Arrault, Orléans",
    isHome: false,
    result: "8 - 20",
  },
  {
    id: "2026-02-22-meteores",
    opponent: "Météores Fontenay-sous-Bois",
    opponentLogo: "/images/opponents/meteo.jpg",
    dateTimeIso: "2026-02-22T14:00:00+01:00",
    venue: "Stade Jean Longuet, Châtenay-Malabry",
    isHome: true,
    result: "10 - 7",
  },
  {
    id: "2026-03-14-saints",
    opponent: "Saints de Marne la Vallée",
    opponentLogo: "/images/opponents/saints.jpg",
    dateTimeIso: "2026-03-14T20:00:00+01:00",
    venue: "41 rue de l'Abyme, Magny-le-Hongre",
    isHome: false,
    result: "37 - 0",
  },
  {
    id: "2026-04-04-cobras",
    opponent: "Cobras de Paris",
    opponentLogo: "/images/opponents/cobras.jpg",
    dateTimeIso: "2026-04-04T20:00:00+02:00",
    venue: "Stade Suzanne Lenglen, 75015 Paris",
    isHome: false,
    result: null,
  },
];
