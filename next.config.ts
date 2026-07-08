import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ hostname: "**.supabase.co" }, { hostname: "cdn.helloasso.com" }] },
};

export default nextConfig;
