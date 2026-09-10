export type PositionGroupName =
  | "Quarterbacks"
  | "Running Backs"
  | "Receveurs"
  | "Tight End"
  | "Oline"
  | "Dline"
  | "Linebacker"
  | "DB";

export interface Player {
  name: string;
  heightCm?: string;
  weightKg?: string;
  /** Chemin relatif à /public, ou null si aucune vraie photo n'existe (affiche alors PlayerPlaceholder). */
  photo: string | null;
}

export interface PositionGroup {
  position: PositionGroupName;
  players: Player[];
}

export interface Coach {
  name: string;
  role: string;
  photo: string | null;
}

export interface Match {
  id: string;
  opponent: string;
  opponentLogo: string | null;
  dateTimeIso: string;
  venue: string;
  isHome: boolean;
  /** Score repris tel qu'il était publié ; on n'affirme pas quel camp correspond à quel chiffre. */
  result: string | null;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  dateIso: string;
  href: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface HonorGroup {
  category: string;
  lines: string[];
}

export interface RecruitProfile {
  title: string;
  description: string;
}

export interface Advantage {
  title: string;
  description: string;
}
