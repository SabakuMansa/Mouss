export interface GalleryImage {
  src: string;
  alt: string;
  tall?: boolean;
}

/** Real club photos — hero action shots + player portraits, named for accessibility. */
export const galleryImages: GalleryImage[] = [
  { src: "/images/hero/equipes.jpg", alt: "L'effectif des Mousquetaires à l'entraînement", tall: true },
  { src: "/images/hero/home.jpg", alt: "Joueur des Mousquetaires sur le terrain" },
  { src: "/images/roster/10.jpg", alt: "David Victor — Quarterback" },
  { src: "/images/hero/calendrier.jpg", alt: "Match à domicile des Mousquetaires" },
  { src: "/images/roster/47.jpg", alt: "Monfort Matthieu — Running Back" },
  { src: "/images/roster/21.jpg", alt: "Achech Iyad — Tight End" },
  { src: "/images/hero/nous-rejoindre.jpg", alt: "Entraînement des Mousquetaires", tall: true },
  { src: "/images/roster/33.jpg", alt: "Admeziem Jessim — Dline" },
  { src: "/images/roster/1.jpg", alt: "Kouadri Djoubair — Receveur" },
  { src: "/images/hero/a-propos.jpg", alt: "Le club des Mousquetaires à Châtenay-Malabry" },
  { src: "/images/roster/67.jpg", alt: "Baudelot Ilhan — Oline" },
  { src: "/images/roster/59.jpg", alt: "Zaïti Bilal — Linebacker" },
  { src: "/images/hero/contact.jpg", alt: "Le stade Jean Longuet, Châtenay-Malabry" },
  { src: "/images/roster/80.jpg", alt: "Sougoumar Vivek — Receveur" },
  { src: "/images/roster/22.jpg", alt: "Vacherot Nicolas — DB" },
  { src: "/images/hero/boutique.jpg", alt: "Les Mousquetaires en action" },
];
