/**
 * =====================================================================
 * CENTRALISED CITATION LIBRARY — barrel + helpers
 * =====================================================================
 * Every numerical claim on the site cites an id from `records.ts`.
 * Add a new source there and reference it from any data file via
 * `citationIds: ["my-new-id"]` or inline via `<Citation id="..." />`.
 *
 * Tiers:
 *   primary    — authoritative government / peer-reviewed / legislative
 *   secondary  — reputable NGO / industry body / quality journalism
 *   estimate   — industry estimate or derived from primary sources
 *   editorial  — our own analysis, explicitly labelled as such
 *
 * Domains: stock-status · production · trade · nutrition · mercury ·
 * labour · environment · regulatory · labelling · indigenous ·
 * operators · journalism
 * =====================================================================
 */

import type { Citation, CitationDomain, CitationTier } from "./types";
import { citations } from "./records";

export type { Citation, CitationDomain, CitationTier } from "./types";
export { citations } from "./records";

export const citationById = (id: string): Citation | undefined =>
  citations.find((c) => c.id === id);

export const citationsByDomain = (domain: CitationDomain): Citation[] =>
  citations.filter((c) => c.domain === domain);

export const citationsByTier = (tier: CitationTier): Citation[] =>
  citations.filter((c) => c.tier === tier);

export const CITATION_DOMAINS: { key: CitationDomain; label: string }[] = [
  { key: "stock-status", label: "Stock status & management" },
  { key: "production", label: "Production & economics" },
  { key: "trade", label: "Trade data" },
  { key: "nutrition", label: "Nutrition" },
  { key: "mercury", label: "Mercury, antibiotics & residues" },
  { key: "labour", label: "Labour & human rights" },
  { key: "environment", label: "Environment & aquaculture" },
  { key: "regulatory", label: "Regulatory & legal" },
  { key: "labelling", label: "Labelling & mislabelling" },
  { key: "indigenous", label: "Indigenous fisheries" },
  { key: "operators", label: "Operators & peak bodies" },
  { key: "journalism", label: "Journalism & investigations" },
];

export const TIER_LABELS: Record<CitationTier, string> = {
  primary: "Primary source",
  secondary: "Secondary source",
  estimate: "Derived estimate",
  editorial: "Editorial analysis",
};
