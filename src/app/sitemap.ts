import type { MetadataRoute } from "next";
import { species } from "@/data/species";
import { industries } from "@/data/industries";
import { areas, areaUrl } from "@/data/areas";
import { comparisons } from "@/data/comparisons";
import { whyAustralianPillars, riskPages } from "@/data/campaigns";

const BASE_URL = "https://countryoforigin.com.au";

/**
 * Auto-generates sitemap.xml from data files. Add a new species/area/etc to
 * the data files and the sitemap entry appears automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/species",
    "/areas",
    "/industry",
    "/compare",
    "/why-australian",
    "/risks-of-imported",
    "/labelling",
    "/research",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const speciesRoutes = species.map((s) => ({
    url: `${BASE_URL}/species/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${BASE_URL}/industry/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const areaRoutes = areas.map((a) => ({
    url: `${BASE_URL}${areaUrl(a)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: a.type === "state" ? 0.7 : 0.6,
  }));

  const compareRoutes = comparisons.map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const whyRoutes = whyAustralianPillars.map((p) => ({
    url: `${BASE_URL}/why-australian/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const riskRoutes = riskPages.map((p) => ({
    url: `${BASE_URL}/risks-of-imported/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...speciesRoutes,
    ...industryRoutes,
    ...areaRoutes,
    ...compareRoutes,
    ...whyRoutes,
    ...riskRoutes,
  ];
}
