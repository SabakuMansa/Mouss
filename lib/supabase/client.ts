import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Client Supabase pour le navigateur (composants "use client").
 * Utilise la clé publique — la sécurité est assurée par les règles RLS
 * définies dans supabase/schema.sql, pas par le secret de cette clé.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
