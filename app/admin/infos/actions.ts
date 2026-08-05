"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function updateSettings(id: string, formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase
    .from("site_settings")
    .update({
      venue: String(formData.get("venue") || "") || null,
      address: String(formData.get("address")),
      schedule: String(formData.get("schedule")),
      email: String(formData.get("email")),
      helloasso_url: String(formData.get("helloasso_url") || "") || null,
      facebook_url: String(formData.get("facebook_url") || "") || null,
      instagram_url: String(formData.get("instagram_url") || "") || null,
      map_embed_src: String(formData.get("map_embed_src") || "") || null,
      twitch_channel: String(formData.get("twitch_channel") || "") || null,
    })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}
