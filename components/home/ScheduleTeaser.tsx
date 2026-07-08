import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { MatchCard } from "@/components/schedule/MatchCard";
import { matches } from "@/lib/data/matches";
import { matchStatus } from "@/lib/utils";

function pickTeaserMatches() {
  const sorted = [...matches].sort(
    (a, b) => new Date(a.dateTimeIso).getTime() - new Date(b.dateTimeIso).getTime()
  );
  const upcoming = sorted.filter((match) => matchStatus(match.dateTimeIso) === "upcoming");
  if (upcoming.length > 0) return upcoming.slice(0, 3);
  return sorted.slice(-3).reverse();
}

export function ScheduleTeaser() {
  const teaser = pickTeaserMatches();

  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="Calendrier" title="Nos matchs" />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teaser.map((match) => (
            <StaggerItem key={match.id}>
              <MatchCard match={match} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 text-center">
          <Button href="/calendrier" variant="secondary">
            Voir le calendrier complet
          </Button>
        </div>
      </div>
    </section>
  );
}
