"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PositionGroup } from "@/components/teams/PositionGroup";
import { seniorRoster, u18Roster, coachingStaff } from "@/lib/data/roster";
import { PlayerCard } from "@/components/teams/PlayerCard";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";

const TABS = [
  { id: "senior", label: "Sénior" },
  { id: "u18", label: "U18" },
  { id: "coach", label: "Coach" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function TeamTabs() {
  const [active, setActive] = useState<TabId>("senior");

  return (
    <div>
      <div role="tablist" aria-label="Effectifs" className="mx-auto flex w-fit gap-1 rounded-full bg-navy-950/5 p-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400",
              active === tab.id ? "text-navy-950" : "text-navy-900/50 hover:text-navy-900"
            )}
          >
            {active === tab.id ? (
              <motion.span
                layoutId="team-tab-pill"
                className="absolute inset-0 rounded-full bg-gold-400"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            ) : null}
            <span className="relative">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-16">
        {active === "senior" ? (
          <div id="panel-senior" role="tabpanel" aria-labelledby="tab-senior" className="space-y-16">
            {seniorRoster.map((group) => (
              <PositionGroup key={group.position} group={group} />
            ))}
          </div>
        ) : null}

        {active === "u18" ? (
          <div id="panel-u18" role="tabpanel" aria-labelledby="tab-u18" className="space-y-16">
            {u18Roster.map((group) => (
              <PositionGroup key={group.position} group={group} />
            ))}
          </div>
        ) : null}

        {active === "coach" ? (
          <div id="panel-coach" role="tabpanel" aria-labelledby="tab-coach">
            <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {coachingStaff.map((coach) => (
                <StaggerItem key={coach.name}>
                  <PlayerCard player={coach} subtitle={coach.role} />
                  <p className="mt-2 text-center text-xs font-medium text-navy-900/60">{coach.role}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ) : null}
      </div>
    </div>
  );
}
