import type { Slug } from "../types";
import { mergeOverlay } from "@/lib/mergeOverlay";
import type { Industry } from "./types";
import { industries } from "./records";
import { industriesDeep } from "./deep";

export type {
  Industry,
  IndustryWorkforce,
  IndustryEconomicImpact,
  IndustryProducer,
  IndustryAssociation,
  IndustryReport,
  IndustryTimelineEntry,
  IndustryRegulation,
  IndustryCertification,
  IndustryChallenge,
} from "./types";

export { industries } from "./records";

export const industryBySlug = (slug: Slug): Industry | undefined => {
  const base = industries.find((i) => i.slug === slug);
  if (!base) return undefined;
  return mergeOverlay(base, industriesDeep[slug]);
};

export const allIndustrySlugs = (): Slug[] => industries.map((i) => i.slug);
