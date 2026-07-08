// Exporte toutes les tables publiques de la base en fichiers JSON, dans backups/<date>/.
// Lancé automatiquement chaque semaine par .github/workflows/backup.yml (voir ce fichier).
// N'utilise que la clé publique (anon) — chaque table a une règle "lecture publique",
// donc aucune clé secrète n'est nécessaire pour cette sauvegarde.

import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const TABLES = ["teams", "players", "matches", "news", "photos", "partners", "documents", "site_settings"];

const today = new Date().toISOString().slice(0, 10);
const outDir = path.join(import.meta.dirname, "..", "backups", today);
mkdirSync(outDir, { recursive: true });

for (const table of TABLES) {
  const { data, error } = await supabase.from(table).select("*");
  if (error) {
    console.error(`Erreur sur la table ${table}:`, error.message);
    continue;
  }
  writeFileSync(path.join(outDir, `${table}.json`), JSON.stringify(data, null, 2));
  console.log(`${table}: ${data.length} ligne(s) sauvegardée(s)`);
}
