import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { TeamTabs } from "@/components/teams/TeamTabs";
import { getRoster } from "@/lib/supabase/roster";

export const metadata: Metadata = {
  title: "Équipes",
  description: "L'effectif complet des Mousquetaires : Séniors, U18 et staff technique.",
};

export default async function TeamsPage() {
  const { seniorRoster, u18Roster, coachingStaff } = await getRoster();

  return (
    <>
      <PageHero image="/images/hero/equipes.jpg" imageAlt="L'effectif des Mousquetaires" title="Nos effectifs" />

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <TeamTabs seniorRoster={seniorRoster} u18Roster={u18Roster} coachingStaff={coachingStaff} />
        </Container>
      </section>
    </>
  );
}
