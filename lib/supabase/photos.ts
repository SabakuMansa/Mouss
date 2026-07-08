import { createSupabaseServerClient } from "./server";

export interface Photo {
  id: string;
  image_url: string;
  caption: string | null;
}

export async function getPhotos(): Promise<Photo[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("photos")
    .select("id, image_url, caption")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data;
}
