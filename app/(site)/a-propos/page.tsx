import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoryTimeline } from "@/components/about/HistoryTimeline";
import { HonorsBoard } from "@/components/about/HonorsBoard";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Depuis 1982, Les Mousquetaires font vivre le football américain et le flag football à Châtenay-Malabry.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/hero/a-propos.jpg"
        imageAlt="Le club des Mousquetaires à Châtenay-Malabry"
        kicker="Depuis 1982"
        title="Qui sommes-nous ?"
      />

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container className="max-w-3xl">
          <HistoryTimeline />
        </Container>
      </section>

      <section className="bg-navy-950 py-24 sm:py-32">
        <Container>
          <SectionHeading kicker="Un club de champions" title="Palmarès" />
          <div className="mt-16">
            <HonorsBoard />
          </div>
        </Container>
      </section>

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <SectionHeading kicker="Ce qui nous rassemble" title="Nos valeurs" tone="light" />
          <div className="mt-16">
            <ValuesGrid />
          </div>
        </Container>
      </section>
    </>
  );
}
