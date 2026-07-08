"use client";

import { motion } from "framer-motion";
import { Volleyball, Swords, Shield, Zap, Trophy, Target } from "lucide-react";
import { club } from "@/lib/data/club";

const ITEMS = [
  { icon: Volleyball, label: "Football Américain" },
  { icon: Swords, label: "Esprit de compétition" },
  { icon: Shield, label: "Solidarité" },
  { icon: Zap, label: "Engagement" },
  { icon: Trophy, label: "Ambition" },
  { icon: Target, label: club.name },
];

function TickerRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={ariaHidden}>
      {ITEMS.map((item, index) => (
        <div key={item.label + index} className="flex items-center gap-3 whitespace-nowrap">
          <motion.span
            animate={
              item.icon === Swords
                ? { rotate: [0, -12, 12, 0] }
                : item.icon === Volleyball
                  ? { rotate: 360 }
                  : { scale: [1, 1.15, 1] }
            }
            transition={{ duration: item.icon === Volleyball ? 3 : 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex"
          >
            <item.icon className="size-5 text-gold-400" aria-hidden />
          </motion.span>
          <span className="font-heading text-sm tracking-[0.2em] text-white/70 uppercase">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Decorative scoreboard-style ticker — adds a bit of energy/motion between sections. */
export function ActionTicker() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy-950 py-4" role="presentation">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <TickerRow />
        <TickerRow ariaHidden />
      </div>
    </div>
  );
}
