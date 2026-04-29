import type { Slug } from "../types";
import { mergeOverlay } from "@/lib/mergeOverlay";
import type { Comparison } from "./types";
import { comparisons } from "./records";
import { comparisonsDeep } from "./deep";

export type {
  Metric,
  CompareNumeric,
  CompareQualitative,
  Comparison,
} from "./types";

export { comparisons } from "./records";

export const comparisonBySlug = (slug: Slug): Comparison | undefined => {
  const base = comparisons.find((c) => c.slug === slug);
  if (!base) return undefined;
  return mergeOverlay(base, comparisonsDeep[slug]);
};

export const allComparisonSlugs = (): Slug[] => comparisons.map((c) => c.slug);
