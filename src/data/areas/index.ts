import type { Slug } from "../types";
import { mergeOverlay } from "@/lib/mergeOverlay";
import type { Area } from "./types";
import { states } from "./states";
import { regions } from "./regions";
import { areasDeep } from "./deep";

export type {
  AreaType,
  StateCode,
  AreaCatchVolume,
  AreaTopSpecies,
  AreaFleet,
  AreaPort,
  AreaProcessor,
  AreaHistoryEntry,
  AreaEconomicValue,
  AreaTourism,
  Area,
} from "./types";

/** All states followed by all regions, in canonical order. */
export const areas: Area[] = [...states, ...regions];

const AREA_OVERLAY_ARRAYS: (keyof Area)[] = [
  "topSpecies",
  "keyPorts",
  "processors",
  "history",
  "tourismHooks",
  "citationIds",
];

export const areaBySlug = (slug: Slug): Area | undefined => {
  const a = areas.find((x) => x.slug === slug);
  return a ? mergeOverlay(a, areasDeep[slug], AREA_OVERLAY_ARRAYS) : undefined;
};

export const allAreaSlugs = (): Slug[] => areas.map((a) => a.slug);

export const statesOnly = (): Area[] => areas.filter((a) => a.type === "state");

export const regionsOnly = (): Area[] => areas.filter((a) => a.type === "region");

export const regionsByState = (stateSlug: Slug): Area[] =>
  areas.filter((a) => a.type === "region" && a.parentState === stateSlug);

/**
 * Returns the canonical URL for an area (state or region).
 * - State: /areas/[state-slug]
 * - Region: /areas/[parent-state-slug]/[region-slug]
 */
export const areaUrl = (a: Area): string => {
  if (a.type === "state") return `/areas/${a.slug}`;
  if (a.parentState) return `/areas/${a.parentState}/${a.slug}`;
  return `/areas/${a.slug}`;
};
