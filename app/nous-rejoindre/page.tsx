import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  MapPin,
  CalendarClock,
  Send,
  ExternalLink,
  Users,
  Megaphone,
  Flag,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Handshake,
  MessageCircle,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { ProfileCard } from "@/components/join/ProfileCard";
import { AdvantageCard } from "@/components/join/AdvantageCard";
import { recruitProfiles, advantages, practicalInfo } from "@/lib/data/join";
import { club } from "@/lib/data/club";
import { honors } from "@/lib/data/honors";

export const metadata: Metadata = {
  title: "Nous rejoindre",
  description:
    "Saison 2025-2026 — Les Mousquetaires recrutent joueurs, coachs, arbitres et bénévoles à Châtenay-Malabry.",
};

const PROFILE_ICONS = { Joueurs: Users, Coachs: Megaphone, Arbitres: Flag, Bénévoles: HeartHandshake } as const;
const ADVANTAGE_ICONS = {
  "Un collectif soudé": ShieldCheck,
  "Formation et encadrement": Sparkles,
  "Des ambitions": Handshake,
  "Une ambiance unique": MessageCircle,
} as const;

const titleCount = honors.reduce(
  (total, group) => total + group.lines.reduce((n, line) => n + (line.match(/\d{4}/g)?.length ?? 0), 0),
  0
);
const yearsOfHistory = new Date().getFullYear() - club.foundedYear;

const steps = [
  {
    number: "01",
    title: "Viens nous rencontrer",
    text: `Passe à un entraînement, sans engagement : ${practicalInfo.schedule}, au ${practicalInfo.venue}.`,
  },
  {
    number: "02",
    title: "Contacte-nous",
    text: "Une question avant de venir ? Écris-nous, on te répond rapidement pour préparer ta venue.",
  },
  {
    number: "03",
    title: "Inscris-toi",
    text: "Convaincu(e) ? Finalise ton adhésion en ligne pour la saison 2025-2026 via HelloAsso.",
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-navy-950">
        <Image
          src="/images/hero/nous-rejoindre.jpg"
          alt="Entraînement des Mousquetaires"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />

        <Container className="relative z-10 py-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase backdrop-blur">
            Saison 2025-2026
          </p>
          <h1 className="max-w-2xl font-heading text-6xl leading-[0.92] text-white uppercase sm:text-7xl">
            Rejoins les Mousquetaires
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Joueurs, coachs, arbitres, bénévoles : le club recrute pour la saison 2025-2026, quel que soit ton
            niveau.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={practicalInfo.helloAssoUrl} icon={ExternalLink}>
              M&apos;inscrire maintenant
            </Button>
            <Button href={`mailto:${practicalInfo.email}`} variant="secondary" icon={Send}>
              Poser une question
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-b border-navy-950/8 bg-offwhite-50 py-14">
        <Container>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: yearsOfHistory, suffix: " ans", label: "d'existence" },
              { value: titleCount, suffix: "", label: "titres remportés" },
              { value: 2, suffix: "", label: "soirs d'entraînement / semaine" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center">
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
          </div>
        </Container>
      </section>

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <SectionHeading kicker="Profils recherchés" title="Qui recherchons-nous ?" tone="light" />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recruitProfiles.map((profile) => (
              <StaggerItem key={profile.title}>
                <ProfileCard
                  profile={profile}
                  icon={PROFILE_ICONS[profile.title as keyof typeof PROFILE_ICONS]}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="relative flex h-[50svh] min-h-[360px] items-center overflow-hidden bg-navy-950">
        <Image
          src="/images/hero/equipes.jpg"
          alt="L'effectif des Mousquetaires à l'entraînement"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-navy-950/90" />
        <Container className="relative z-10 text-center">
          <RevealOnScroll>
            <p className="mx-auto max-w-2xl font-heading text-3xl leading-tight text-white uppercase sm:text-4xl">
              {club.tagline}
            </p>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950 py-24 sm:py-32">
        <Container>
          <SectionHeading kicker="Nos atouts" title="Pourquoi nous rejoindre ?" />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <StaggerItem key={advantage.title}>
                <AdvantageCard
                  advantage={advantage}
                  icon={ADVANTAGE_ICONS[advantage.title as keyof typeof ADVANTAGE_ICONS]}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <SectionHeading kicker="C'est simple" title="Comment nous rejoindre" tone="light" />
          <Stagger className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <StaggerItem key={step.number} className="relative text-center sm:text-left">
                <span className="font-heading text-6xl text-navy-950/10 sm:text-7xl">{step.number}</span>
                <h3 className="mt-2 font-heading text-xl tracking-wide text-navy-950 uppercase">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-900/70">{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-offwhite-50 pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <RevealOnScroll className="rounded-3xl bg-gold-400/95 p-10 text-center text-navy-950 shadow-xl sm:p-14">
            <h2 className="font-heading text-3xl tracking-wide uppercase sm:text-4xl">Prêt à nous rejoindre ?</h2>

            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0" />
                <span>
                  {practicalInfo.venue} — {practicalInfo.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CalendarClock className="mt-0.5 size-5 shrink-0" />
                <span>Entraînements : {practicalInfo.schedule}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0" />
                <a href={`mailto:${practicalInfo.email}`} className="underline underline-offset-2">
                  {practicalInfo.email}
                </a>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button
                href={`mailto:${practicalInfo.email}`}
                variant="secondary"
                icon={Send}
                className="!bg-navy-950/10 !text-navy-950 border-navy-950/20 hover:!bg-navy-950/20"
              >
                Demande de renseignement
              </Button>
              <Button href={practicalInfo.helloAssoUrl} icon={ExternalLink} className="!from-navy-950 !to-navy-900 !text-white">
                M&apos;inscrire
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
