import { Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { partners } from "@/lib/data/partners";
import { club } from "@/lib/data/club";

export function PartnersCta() {
  return (
    <section className="bg-offwhite-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="Ensemble" title="Nos partenaires" tone="light" />

        {partners.length > 0 ? (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
            {/* Ready to render real logos once partners.ts is populated. */}
          </div>
        ) : (
          <RevealOnScroll delay={0.1} className="mx-auto mt-14 max-w-2xl rounded-3xl bg-navy-950 p-10 text-center sm:p-14">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gold-400/15">
              <Handshake className="size-7 text-gold-400" aria-hidden />
            </div>
            <h3 className="mt-6 font-heading text-2xl tracking-wide text-white uppercase sm:text-3xl">
              Devenez partenaire des Mousquetaires
            </h3>
            <p className="mt-4 text-white/70">
              {`${club.name} n'a pas encore de partenaire officiel — associez votre marque à un club ambitieux, structuré et tourné vers la jeunesse.`}
            </p>
            <Button href="/contact" variant="primary" className="mt-8">
              Devenir partenaire
            </Button>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
