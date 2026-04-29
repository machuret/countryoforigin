import type { Entity } from "../types";

export type CampaignSection = {
  heading: string;
  /** One paragraph */
  body: string;
  /** Optional bullets — can include inline citation markers like [c:fsanz-mercury-2024] */
  bullets?: string[];
  /** Optional pull-stat */
  stat?: { value: string; label: string };
};

export type CampaignPage = Entity & {
  /** Big hero stat shown in the campaign hero */
  heroStat: { value: string; label: string };
  /** Optional theme so visual treatment varies */
  theme: "ocean" | "navy" | "coral" | "default";
  /** Body sections, rendered in order */
  sections: CampaignSection[];
  /** Closing CTA */
  cta?: { headline: string; body: string; href: string; label: string };
  /** Citation ids referenced by this page (used by /research) */
  citationIds?: string[];
};
