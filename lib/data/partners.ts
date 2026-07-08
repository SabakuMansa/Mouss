import type { Partner } from "@/lib/types";

/**
 * No sponsor is listed on the original site (HelloAsso is a payment
 * processor, not a sponsor). Kept empty and typed so a future partner can be
 * added here without touching any component — the PartnersCta component
 * renders a "Devenir partenaire" call-to-action when this array is empty.
 */
export const partners: Partner[] = [];
