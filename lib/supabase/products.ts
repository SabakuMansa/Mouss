import { createSupabaseServerClient } from "./server";

export interface ProductRow {
  id: string;
  name: string;
  description: string | null;
  price: string;
  image_url: string | null;
}

export async function getProducts(): Promise<ProductRow[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, image_url")
    .order("created_at", { ascending: true });

  if (error || !data) return [];
  return data;
}
