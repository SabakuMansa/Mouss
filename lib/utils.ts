import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DATE_FORMATTER = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const TIME_FORMATTER = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
});

export function formatMatchDate(iso: string) {
  const date = new Date(iso);
  return DATE_FORMATTER.format(date);
}

export function formatMatchTime(iso: string) {
  const date = new Date(iso);
  return TIME_FORMATTER.format(date);
}

/** Le statut se déduit de la date réelle du match comparée à maintenant — jamais écrit en dur. */
export function matchStatus(iso: string): "upcoming" | "past" {
  return new Date(iso).getTime() > Date.now() ? "upcoming" : "past";
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
