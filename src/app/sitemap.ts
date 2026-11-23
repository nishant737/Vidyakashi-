import type { MetadataRoute } from "next";
import { guideUpdatedISO } from "@/data/alvas";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: guideUpdatedISO, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/alvas-school-faq`, lastModified: guideUpdatedISO, changeFrequency: "monthly", priority: 0.8 },
  ];
}
