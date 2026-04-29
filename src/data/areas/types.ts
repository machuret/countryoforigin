import type { Entity, Slug } from "../types";

export type AreaType = "state" | "region";
export type StateCode = "NSW" | "VIC" | "QLD" | "SA" | "WA" | "TAS" | "NT" | "ACT";

export type AreaCatchVolume = {
  tonnes: number;
  year: number;
  sourceId?: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type AreaTopSpecies = {
  speciesSlug: string;
  pctOfCatch?: number;
  note?: string;
};

export type AreaFleet = {
  vessels?: number;
  approxWorkers?: number;
  homePorts?: string[];
  sourceId?: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type AreaPort = {
  name: string;
  note?: string;
};

export type AreaProcessor = {
  name: string;
  type: "processor" | "coop" | "exporter" | "market" | "research";
  url?: string;
  note?: string;
};

export type AreaHistoryEntry = {
  year: number;
  note: string;
};

export type AreaEconomicValue = {
  dollars: string;
  year: number;
  sourceId?: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type AreaTourism = {
  name: string;
  note?: string;
  url?: string;
};

export type Area = Entity & {
  type: AreaType;
  state?: StateCode;
  /** For regions: the slug of their parent state */
  parentState?: Slug;
  headlineStat?: { value: string; label: string };
  highlights?: string[];

  /* PHASE C — DEEP DATA (all optional; rolled out per-area) */
  catchVolume?: AreaCatchVolume;
  topSpecies?: AreaTopSpecies[];
  fleet?: AreaFleet;
  keyPorts?: AreaPort[];
  processors?: AreaProcessor[];
  history?: AreaHistoryEntry[];
  culturalSignificance?: string;
  economicValue?: AreaEconomicValue;
  tourismHooks?: AreaTourism[];
  citationIds?: string[];
};
