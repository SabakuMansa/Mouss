import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Photos du club des Mousquetaires : entraînements, matchs et effectif à Châtenay-Malabry.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        image="/images/hero/equipes.jpg"
        imageAlt="L'effectif des Mousquetaires"
        kicker="En images"
        title="Galerie"
      />

      <section className="bg-navy-950 py-24 sm:py-32">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
