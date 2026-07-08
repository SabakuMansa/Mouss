import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { TeamTabs } from "@/components/teams/TeamTabs";

export const metadata: Metadata = {
  title: "Équipes",
  description: "L'effectif complet des Mousquetaires : Séniors, U18 et staff technique.",
};

export default function TeamsPage() {
  return (
    <>
      <PageHero image="/images/hero/equipes.jpg" imageAlt="L'effectif des Mousquetaires" title="Nos effectifs" />

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <TeamTabs />
        </Container>
      </section>
    </>
  );
}
