import type { Entity } from "../types";

export type IndustryWorkforce = {
  direct?: string;
  indirect?: string;
  regions?: string[];
  note?: string;
};

export type IndustryEconomicImpact = {
  gvp?: string;
  exports?: string;
  domestic?: string;
  note?: string;
  citationId?: string;
};

export type IndustryProducer = {
  name: string;
  location?: string;
  products?: string;
  url?: string;
  note?: string;
};

export type IndustryAssociation = { name: string; url?: string; note?: string };

export type IndustryReport = {
  title: string;
  publisher?: string;
  year?: number;
  url?: string;
  summary?: string;
};

export type IndustryTimelineEntry = { year: number | string; event: string };

export type IndustryRegulation = {
  regulators?: { name: string; url?: string; note?: string }[];
  schemes?: { name: string; note?: string; url?: string }[];
};

export type IndustryCertification = { name: string; summary?: string; url?: string };

export type IndustryChallenge = { title: string; note: string };

export type Industry = Entity & {
  /** Card colour theme */
  theme: "navy" | "teal" | "ocean" | "coral";
  /** Headline stat shown on cards + hero */
  headlineStat?: { value: string; label: string };
  /** Detailed stats shown in detail page */
  stats?: { value: string; label: string }[];
  /** Bullet points used by detail page */
  highlights?: string[];
  /* ===== Phase D — deep data ===== */
  workforce?: IndustryWorkforce;
  economicImpact?: IndustryEconomicImpact;
  topProducers?: IndustryProducer[];
  associations?: IndustryAssociation[];
  reports?: IndustryReport[];
  timeline?: IndustryTimelineEntry[];
  regulation?: IndustryRegulation;
  certifications?: IndustryCertification[];
  challenges?: IndustryChallenge[];
  citationIds?: string[];
};
