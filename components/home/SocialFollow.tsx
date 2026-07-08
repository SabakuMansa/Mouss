import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { contactInfo } from "@/lib/data/contact";

const socials = [
  {
    name: "Facebook",
    handle: "mousfootus",
    href: contactInfo.facebookUrl,
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    handle: "mousquetairesfootus",
    href: contactInfo.instagramUrl,
    icon: InstagramIcon,
  },
];

export function SocialFollow() {
  return (
    <section className="bg-offwhite-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="Communauté" title="Suivez-nous" tone="light" />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 sm:max-w-xl sm:mx-auto">
          {socials.map((social) => (
            <StaggerItem key={social.name}>
              <a href={social.href} target="_blank" rel="noreferrer" className="block">
                <GlassCard className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-950 text-gold-400">
                    <social.icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-heading tracking-wide text-navy-950 uppercase">{social.name}</p>
                    <p className="text-sm text-navy-900/60">@{social.handle}</p>
                  </div>
                </GlassCard>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
