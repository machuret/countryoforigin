import type { Entity, Slug } from "../types";

export type Metric = {
  label: string;
  aus: string;
  imp: string;
  /** True when the Australian value is the better outcome */
  ausGood: boolean;
};

export type CompareNumeric = {
  ausValue?: number;
  impValue?: number;
  unit?: string;
  note?: string;
  citationId?: string;
};

export type CompareQualitative = {
  aus?: string;
  imp?: string;
  note?: string;
  citationId?: string;
};

export type Comparison = Entity & {
  /** Slug of the species this comparison is for (1-1) */
  speciesSlug: Slug;
  aus: { name: string; origin: string; country: string };
  imp: { name: string; origin: string; country: string };
  metrics: Metric[];
  ausScore: string;
  impScore: string;
  /* ===== Phase E — deep data ===== */
  priceContext?: string;
  carbon?: CompareNumeric;
  jobs?: CompareNumeric;
  freshnessDays?: CompareNumeric;
  welfare?: CompareQualitative;
  mislabellingRisk?: CompareQualitative;
  traceability?: CompareQualitative;
  methodNote?: string;
  bottomLine?: string;
  citationIds?: string[];
};
