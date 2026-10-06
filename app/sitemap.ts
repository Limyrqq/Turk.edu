import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { universities } from "@/content/universities";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/universities",
    "/guide",
    "/residence",
    "/sources",
    "/privacy",
    ...universities.map((u) => `/universities/${u.id}`),
  ].map((route) => ({
    url: site.url + route,
    lastModified: "2026-09-30",
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
