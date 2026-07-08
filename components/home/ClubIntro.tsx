import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { introText } from "@/lib/data/about";
import { club } from "@/lib/data/club";
import { getMatches } from "@/lib/supabase/matches";
import { honors } from "@/lib/data/honors";

const titleCount = honors.reduce(
  (total, group) => total + group.lines.reduce((n, line) => n + (line.match(/\d{4}/g)?.length ?? 0), 0),
  0
);
const yearsOfHistory = new Date().getFullYear() - club.foundedYear;

export async function ClubIntro() {
  const matches = await getMatches();

  return (
    <section className="bg-offwhite-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Qui sommes-nous"
              title="Une histoire de conquête depuis 1982"
              tone="light"
              align="left"
            />
            <RevealOnScroll delay={0.1} className="mt-6 space-y-4 text-navy-900/75">
              <p>{introText.location}</p>
              <p>{introText.disciplines}</p>
              <p className="font-semibold text-navy-950">{introText.welcome}</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} className="mt-8">
              <Button href="/a-propos" variant="ghost" className="px-0">
                Découvrir notre histoire
              </Button>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.15} className="grid grid-cols-3 gap-3 sm:gap-6">
            {[
              { value: yearsOfHistory, suffix: " ans", label: "d'histoire du club" },
              { value: titleCount, suffix: "", label: "titres remportés" },
              { value: matches.length, suffix: "", label: "matchs cette saison" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-navy-950/8 bg-white px-2 py-6 text-center shadow-sm sm:px-6"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-3xl text-navy-950 sm:text-4xl lg:text-5xl"
                />
                <p className="mt-2 text-[0.65rem] leading-tight font-medium tracking-wide text-navy-900/60 uppercase sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
