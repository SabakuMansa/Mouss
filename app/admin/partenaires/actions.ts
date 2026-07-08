"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function createPartner(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  const file = formData.get("logo_file") as File | null;
  let logoUrl = String(formData.get("logo_url") || "") || null;

  if (file && file.size > 0) {
    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("photos").upload(fileName, file);
    if (uploadError) throw new Error(uploadError.message);
    logoUrl = supabase.storage.from("photos").getPublicUrl(fileName).data.publicUrl;
  }

  const { error } = await supabase.from("partners").insert({
    name: String(formData.get("name")),
    logo_url: logoUrl,
    website_url: String(formData.get("website_url") || "") || null,
  });

  if (error) throw new Error(error.message);
  revalidatePath("/admin/partenaires");
  revalidatePath("/");
}

export async function deletePartner(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("partners").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/partenaires");
  revalidatePath("/");
}
