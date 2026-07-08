import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import path from "node:path";

const envPath = path.join(import.meta.dirname, "..", ".env.local");
for (const line of readFileSync(envPath, "utf8").split("\n")) {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const { data, error } = await supabase.from("teams").select("*");
if (error) {
  console.error("ERREUR:", error.message);
  process.exit(1);
}
console.log("Connexion réussie. Table 'teams' contient", data.length, "ligne(s).");
