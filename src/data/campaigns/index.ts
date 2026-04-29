/**
 * Campaign content lives in `why-australian.ts` and `risks.ts`. This barrel
 * re-exports both so /why-australian and /risks-of-imported pages can be
 * edited without touching JSX.
 *
 * All numerical claims should reference an id in src/data/citations.
 */

import type { Slug } from "../types";
import { whyAustralianPillars } from "./why-australian";
import { riskPages } from "./risks";

export type { CampaignSection, CampaignPage } from "./types";
export { whyAustralianPillars } from "./why-australian";
export { riskPages } from "./risks";

export const whyPillarBySlug = (slug: Slug) =>
  whyAustralianPillars.find((p) => p.slug === slug);
export const allWhyPillarSlugs = (): Slug[] =>
  whyAustralianPillars.map((p) => p.slug);

export const riskPageBySlug = (slug: Slug) => riskPages.find((p) => p.slug === slug);
export const allRiskPageSlugs = (): Slug[] => riskPages.map((p) => p.slug);
