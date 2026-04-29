import type { Area } from "../types";
import { region } from "./_helper";

export const ntRegions: Area[] = [
  region({
    slug: "darwin",
    name: "Darwin",
    state: "NT",
    parentState: "nt",
    tagline: "Top End fishing capital",
    summary:
      "Darwin is the heart of the NT seafood industry — barramundi, mud crab, threadfin salmon, and banana prawns landed and processed here for southern markets.",
    highlights: [
      "Major NT seafood processing hub",
      "Wild barramundi and mud crab",
      "Significant Indigenous fishing co-management",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "processors", "indigenous-fishing"],
    },
  }),
  region({
    slug: "arnhem-land",
    name: "Arnhem Land",
    state: "NT",
    parentState: "nt",
    tagline: "Indigenous-managed Sea Country",
    summary:
      "Arnhem Land's coast is one of the most intact, culturally rich seafood landscapes on Earth — Sea Country owned and managed by Yolŋu and other Aboriginal peoples for thousands of generations.",
    highlights: [
      "Indigenous Protected Areas span the coast",
      "Customary, cultural, and emerging commercial fisheries",
      "Strong Indigenous Ranger presence",
    ],
    related: {
      species: ["barramundi"],
      industry: ["indigenous-fishing", "commercial-fishing"],
    },
  }),
  region({
    slug: "northern-territory-rivers",
    name: "Northern Territory Rivers",
    state: "NT",
    parentState: "nt",
    tagline: "Wild barramundi country",
    summary:
      "The Mary, Daly, Roper, and South Alligator river systems produce wild Australian barramundi, a fish with deep significance to Top End fishing communities.",
    highlights: [
      "Wild barramundi spawning and migration corridors",
      "Important to Indigenous customary fishing",
      "Strong recreational fishery — barra is a major tourism drawcard",
      "Estuarine systems also produce mud crab, threadfin salmon, and king prawn",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  }),
];

/* Cross-state — assign to the dominant fishery's state */
