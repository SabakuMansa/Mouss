import Image from "next/image";
import { Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { getPartners } from "@/lib/supabase/partners";
import { club } from "@/lib/data/club";

export async function PartnersCta() {
  const partners = await getPartners();

  return (
    <section className="bg-offwhite-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="Ensemble" title="Nos partenaires" tone="light" />

        {partners.length > 0 ? (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
            {partners.map((partner) =>
              partner.logo_url ? (
                <a
                  key={partner.id}
                  href={partner.website_url ?? undefined}
                  target={partner.website_url ? "_blank" : undefined}
                  rel="noreferrer"
                  className="relative h-16 w-40 grayscale transition-all hover:grayscale-0"
                >
                  <Image src={partner.logo_url} alt={partner.name} fill className="object-contain" />
                </a>
              ) : (
                <p key={partner.id} className="font-heading text-lg tracking-wide text-navy-950 uppercase">
                  {partner.name}
                </p>
              )
            )}
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
