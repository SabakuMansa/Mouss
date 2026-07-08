import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://mousquetairesfootus.fr";

const routes = [
  "",
  "/a-propos",
  "/equipes",
  "/calendrier",
  "/nous-rejoindre",
  "/boutique",
  "/contact",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/calendrier" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
