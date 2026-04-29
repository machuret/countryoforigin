import type { OysterVariety } from "./types";

export const oysterVarieties: OysterVariety[] = [
  {
    key: "sydney-rock",
    name: "Sydney Rock Oyster",
    scientific: "Saccostrea glomerata",
    origin: "NSW & southern QLD estuaries",
    flavour: "Sweet, creamy, mineral finish",
    notes:
      "Australia's iconic native oyster. Slower-growing than Pacifics, prized for depth of flavour and resilience to estuarine conditions.",
    tags: ["Native", "Estuarine", "3+ Years Growth"],
    status: "Native",
  },
  {
    key: "pacific",
    name: "Pacific Oyster",
    scientific: "Crassostrea gigas",
    origin: "Tasmania, SA, Coffin Bay",
    flavour: "Brisk, briny, cucumber-like",
    notes:
      "Introduced from Japan, now the dominant farmed species in cool southern waters. Fast-growing and behind Coffin Bay's reputation.",
    tags: ["Naturalised", "Cold Water", "12–18 Months Growth"],
    status: "Naturalised",
  },
  {
    key: "angasi",
    name: "Native Angasi (Flat) Oyster",
    scientific: "Ostrea angasi",
    origin: "Tasmania, SA, Victoria",
    flavour: "Rich, umami, almost mushroomy",
    notes:
      "Australia's flat oyster. Once nearly lost to overharvest, now part of restoration projects rebuilding shellfish reefs.",
    tags: ["Native", "Restoration Species", "Premium Rare"],
    status: "Native",
  },
];
