import type { Entity, Slug } from "../types";

export type SourcingType = "wild" | "farmed" | "both";

/**
 * What this record actually is. Drives whether nutrition / mercury / contaminant
 * blocks even apply. Most species are edible; non-food-byproduct (e.g. pearls)
 * exists in the catalogue for cultural/economic reasons but should not pretend
 * to have nutrition data.
 */
export type ProductType =
  | "finfish"
  | "crustacean"
  | "mollusc"
  | "cephalopod"
  | "non-food-byproduct";

export type NutBar = {
  name: string;
  aus: number;
  imp: number;
  max: number;
  unit: string;
};

export type SeasonStatus = "peak" | "good" | "available" | "off";
export type SeasonalityMonth = { month: string; status: SeasonStatus };

export type CookingNote = { method: string; text: string };

export type WhyAustralianBreakdown = {
  health: string[];
  economy: string[];
  environment: string[];
  taste: string[];
};

/* ------------------------- PHASE B — DEEP DATA ------------------------- */

export type StockRating =
  | "sustainable"
  | "sustainable-rebuilding"
  | "depleting"
  | "overfished"
  | "recovering"
  | "undefined";

export type StockStatus = {
  rating: StockRating;
  year: number;
  citationId: string;
  note?: string;
};

export type ProductionYear = {
  year: number;
  tonnes: number;
  sourceId?: string;
  provenance?: "primary" | "estimate" | "editorial";
};

export type GearMethod = {
  method: string;
  note?: string;
};

export type MercuryData = {
  aus: number;
  imp: number;
  unit?: "mg/kg";
  citationId: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type AntibioticLevel = "none" | "rare" | "low" | "documented";

export type AntibioticData = {
  aus: AntibioticLevel;
  imp: AntibioticLevel;
  citationId: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type PriceRange = {
  ausLow: number;
  ausHigh: number;
  impLow: number;
  impHigh: number;
  unit?: "$/kg";
  asOf: string;
  provenance: "primary" | "estimate" | "editorial";
};

export type SupplyChainStep = {
  step: string;
  days: string;
  note?: string;
};

export type LookAlike = {
  name: string;
  whyConfused: string;
  howToTell: string;
};

export type Regulations = {
  quotaTonnes?: number;
  bagLimit?: string;
  sizeLimit?: string;
  sourceId?: string;
  note?: string;
};

export type OperatorType =
  | "coop"
  | "peak-body"
  | "processor"
  | "farm"
  | "retailer"
  | "research"
  | "market";

export type KeyOperator = {
  name: string;
  type: OperatorType;
  region?: string;
  url?: string;
};

export type HistoryEntry = {
  year: number;
  note: string;
};

export type MediaWatchEntry = {
  outlet: string;
  headline: string;
  year: number;
  url: string;
  tier?: "primary" | "secondary";
};

export type Species = Entity & {
  scientific?: string;
  sourcing: SourcingType;
  /** Defaults to "finfish" if absent, for backwards compatibility. */
  productType?: ProductType;
  emoji: string;
  cls: string;
  tags: string[];
  flavour?: string;
  /**
   * Optional. Should be **omitted** for non-food-byproduct entries (e.g. pearls)
   * unless the edible by-product (e.g. pearl meat) has cited nutrition data.
   */
  nutrition?: NutBar[];

  /* PHASE 2 — DEEP CONTENT */
  importedFrom?: string;
  importedRisks?: string[];
  whyAustralian?: WhyAustralianBreakdown;
  seasonality?: SeasonalityMonth[];
  cookingNotes?: CookingNote[];
  labelingHint?: string;
  citationIds?: string[];
  signatureRegions?: Slug[];

  /* PHASE B — DEEP DATA (all optional, species-by-species rollout) */
  stockStatus?: StockStatus;
  productionHistory?: ProductionYear[];
  gear?: GearMethod[];
  mercury?: MercuryData;
  antibiotics?: AntibioticData;
  priceRange?: PriceRange;
  supplyChain?: SupplyChainStep[];
  lookAlikes?: LookAlike[];
  regulations?: Regulations;
  keyOperators?: KeyOperator[];
  history?: HistoryEntry[];
  mediaWatch?: MediaWatchEntry[];
};

export type OysterVariety = {
  key: string;
  name: string;
  scientific: string;
  origin: string;
  flavour: string;
  notes: string;
  tags: string[];
  status: "Native" | "Naturalised";
};
