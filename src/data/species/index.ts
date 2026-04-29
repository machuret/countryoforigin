import type { Slug } from "../types";
import { mergeOverlay } from "@/lib/mergeOverlay";
import type { Species } from "./types";
import { species } from "./records";
import { speciesDeep } from "./deep";

export type {
  SourcingType,
  ProductType,
  NutBar,
  SeasonStatus,
  SeasonalityMonth,
  CookingNote,
  WhyAustralianBreakdown,
  StockRating,
  StockStatus,
  ProductionYear,
  GearMethod,
  MercuryData,
  AntibioticLevel,
  AntibioticData,
  PriceRange,
  SupplyChainStep,
  LookAlike,
  Regulations,
  OperatorType,
  KeyOperator,
  HistoryEntry,
  MediaWatchEntry,
  Species,
  OysterVariety,
} from "./types";

export { species } from "./records";
export { oysterVarieties } from "./oyster-varieties";

const SPECIES_OVERLAY_ARRAYS: (keyof Species)[] = [
  "productionHistory",
  "gear",
  "supplyChain",
  "lookAlikes",
  "keyOperators",
  "history",
  "mediaWatch",
];

export const speciesBySlug = (slug: Slug): Species | undefined => {
  const s = species.find((x) => x.slug === slug);
  return s ? mergeOverlay(s, speciesDeep[slug], SPECIES_OVERLAY_ARRAYS) : undefined;
};

export const allSpeciesSlugs = (): Slug[] => species.map((s) => s.slug);
