import { MetadataRoute } from "next";
import { pestLibrary } from "@/data/pest-library";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://urbanpestsolution.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/residential`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/library`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...pestLibrary.map((pest) => ({
      url: `${baseUrl}/library/${pest.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${baseUrl}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
