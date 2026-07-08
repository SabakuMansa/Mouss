import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-navy-950 py-24">
      <Container className="text-center">
        <p className="font-heading text-8xl text-gold-400">404</p>
        <h1 className="mt-4 font-heading text-3xl tracking-wide text-white uppercase">Page introuvable</h1>
        <p className="mt-3 text-white/70">Cette page n&apos;existe pas ou a été déplacée.</p>
        <Button href="/" className="mt-10">
          Retour à l&apos;accueil
        </Button>
      </Container>
    </section>
  );
}
