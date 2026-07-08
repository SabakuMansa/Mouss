import { createSupabaseServerClient } from "./server";
import type { Coach, Player, PositionGroup, PositionGroupName } from "@/lib/types";

const POSITION_ORDER: PositionGroupName[] = [
  "Quarterbacks",
  "Running Backs",
  "Receveurs",
  "Tight End",
  "Oline",
  "Dline",
  "Linebacker",
  "DB",
];

interface RosterRow {
  name: string;
  position: string | null;
  height_cm: string | null;
  weight_kg: string | null;
  photo_url: string | null;
}

function groupByPosition(rows: RosterRow[]): PositionGroup[] {
  const byPosition = new Map<string, Player[]>();
  for (const row of rows) {
    const key = row.position ?? "Autre";
    const player: Player = {
      name: row.name,
      heightCm: row.height_cm ?? undefined,
      weightKg: row.weight_kg ?? undefined,
      photo: row.photo_url,
    };
    if (!byPosition.has(key)) byPosition.set(key, []);
    byPosition.get(key)!.push(player);
  }

  const orderedKeys = [
    ...POSITION_ORDER.filter((p) => byPosition.has(p)),
    ...[...byPosition.keys()].filter((k) => !POSITION_ORDER.includes(k as PositionGroupName)),
  ];

  return orderedKeys.map((position) => ({
    position: position as PositionGroupName,
    players: byPosition.get(position)!.sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

export async function getRoster() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("players")
    .select("name, position, height_cm, weight_kg, photo_url, teams(name)")
    .order("name");

  if (error || !data) {
    return { seniorRoster: [], u18Roster: [], coachingStaff: [] as Coach[] };
  }

  const senior: RosterRow[] = [];
  const u18: RosterRow[] = [];
  const coach: Coach[] = [];

  for (const row of data as unknown as (RosterRow & { teams: { name: string } | null })[]) {
    const teamName = row.teams?.name;
    if (teamName === "Sénior") senior.push(row);
    else if (teamName === "U18") u18.push(row);
    else if (teamName === "Coach") {
      coach.push({ name: row.name, role: row.position ?? "", photo: row.photo_url });
    }
  }

  return {
    seniorRoster: groupByPosition(senior),
    u18Roster: groupByPosition(u18),
    coachingStaff: coach,
  };
}
