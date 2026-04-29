import type { Area } from "../types";
import { region } from "./_helper";

export const crossStateRegions: Area[] = [
  region({
    slug: "torres-strait",
    name: "Torres Strait",
    state: "QLD",
    parentState: "qld",
    tagline: "Indigenous-led tropical fisheries",
    summary:
      "Between Cape York and PNG, the Torres Strait is co-managed with Traditional Inhabitants and supports tropical rock lobster, prawn, and finfish fisheries with significant Indigenous ownership.",
    highlights: [
      "Co-managed under the Torres Strait Treaty (Australia & PNG)",
      "Tropical rock lobster fishery is a cornerstone of the local economy",
      "Strong Traditional Inhabitant Boat (TIB) sector",
      "Pearling, beche-de-mer, and trochus also commercially significant",
    ],
    related: {
      industry: ["indigenous-fishing", "commercial-fishing"],
    },
  }),
  region({
    slug: "bass-strait",
    name: "Bass Strait",
    state: "TAS",
    parentState: "tas",
    tagline: "VIC-TAS shared waters",
    summary:
      "The shallow sea between Victoria and Tasmania — a shared fishing ground for southern rock lobster, scallops, abalone, and the offshore trawl fishery.",
    highlights: [
      "Major scallop fishery (Victoria & Tasmania)",
      "Abalone diving on both sides",
      "Important southern rock lobster zone",
    ],
    related: {
      species: ["rocklobster", "abalone"],
      industry: ["commercial-fishing"],
      areas: ["lakes-entrance", "macquarie-harbour"],
    },
  }),
];
