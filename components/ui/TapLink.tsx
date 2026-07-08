"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

/**
 * Same-tab navigation links unmount almost immediately on click, which can cut
 * a CSS :active transition short before it's ever painted. whileTap fires on
 * pointerdown instead, so the press feedback is visible even for fast taps.
 */
export function TapLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <MotionLink href={href} className={className} whileTap={{ scale: 0.9 }}>
      {children}
    </MotionLink>
  );
}
