"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

/**
 * Pure tap-feedback wrapper — takes already-rendered children (icon included)
 * so no component reference has to cross the server → client boundary.
 * whileTap fires on pointerdown, before a same-tab navigation can unmount the
 * element and cut a CSS :active transition short.
 */
export function TapButton({
  href,
  className,
  children,
  ...rest
}: { href?: string; className?: string; children: React.ReactNode } & Record<string, unknown>) {
  if (href) {
    return (
      <MotionLink href={href} className={className} whileTap={{ scale: 0.94 }} {...rest}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button className={className} whileTap={{ scale: 0.94 }} {...rest}>
      {children}
    </motion.button>
  );
}
