import { Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { getSiteSettings } from "@/lib/supabase/settings";

export async function ContactTeaser() {
  const settings = await getSiteSettings();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
        <SectionHeading kicker="À bientôt" title="Une question ? Contactez-nous" />

        <RevealOnScroll delay={0.1} className="mt-10 flex flex-col items-center gap-4 text-white/80 sm:flex-row sm:justify-center sm:gap-10">
          <a href={`mailto:${settings.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="size-5 text-gold-400" />
            {settings.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-5 text-gold-400" />
            {settings.address}
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="mt-10">
          <Button href="/contact">Nous contacter</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
