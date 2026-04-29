import type { Area } from "../types";
import { region } from "./_helper";

export const saRegions: Area[] = [
  region({
    slug: "spencer-gulf",
    name: "Spencer Gulf",
    state: "SA",
    parentState: "sa",
    tagline: "Premium prawn fishery",
    summary:
      "Spencer Gulf, South Australia, produces wild-caught Western King Prawns considered among the finest in the world — fished under tight quotas and well-defined seasons.",
    headlineStat: { value: "~2,000t", label: "Annual King Prawn quota" },
    highlights: [
      "Tightly-managed fishery with seasonal closures",
      "Operated by ~39 licensed vessels",
      "Quality controlled by on-board grading and snap freezing",
      "Recognised globally as a benchmark sustainable prawn fishery",
    ],
    related: {
      species: ["prawns"],
      industry: ["commercial-fishing"],
    },
  }),
  region({
    slug: "coffin-bay",
    name: "Coffin Bay",
    state: "SA",
    parentState: "sa",
    tagline: "Oyster Capital",
    summary:
      "Coffin Bay's clean, nutrient-rich waters on SA's Eyre Peninsula produce some of the world's most celebrated Pacific Oysters — fast-growing, plump, and consistently briny.",
    highlights: [
      "Pacific oyster (Crassostrea gigas) is the dominant farmed species",
      "Some of the largest single-bay production in Australia",
      "Famous &ldquo;Coffin Bay&rdquo; brand commands global premiums",
      "Strict water-quality monitoring underpins consistent quality",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "port-lincoln",
    name: "Port Lincoln",
    state: "SA",
    parentState: "sa",
    tagline: "Tuna capital of the world",
    summary:
      "On the southern tip of SA's Eyre Peninsula, Port Lincoln is the centre of Australia's Southern Bluefin Tuna industry — both wild capture and ranching.",
    headlineStat: {
      value: "Tuna capital",
      label: "Centre of Australia's Southern Bluefin Tuna industry",
    },
    highlights: [
      "Primary base for the Southern Bluefin Tuna ranching fleet",
      "Major export hub for live and processed seafood",
      "Tuna industry is the city's largest employer",
      "Annual Tunarama Festival celebrates the industry",
    ],
    related: {
      species: ["tuna"],
      industry: ["tuna-ranching", "commercial-fishing"],
    },
  }),
  region({
    slug: "great-australian-bight",
    name: "Great Australian Bight",
    state: "SA",
    parentState: "sa",
    tagline: "Wild Southern Bluefin",
    summary:
      "The Bight is where wild Southern Bluefin Tuna are caught each summer before being towed back to Port Lincoln. Also home to deep-water fisheries with strict environmental management.",
    highlights: [
      "Summer aggregation zone for juvenile Southern Bluefin Tuna",
      "Highly regulated Marine Park boundaries",
      "Important for whale and pinniped conservation",
      "Petroleum exploration debate has shaped policy in recent years",
    ],
    related: { species: ["tuna"], industry: ["commercial-fishing", "tuna-ranching"] },
  }),
  region({
    slug: "streaky-bay",
    name: "Streaky Bay",
    state: "SA",
    parentState: "sa",
    summary:
      "On the western edge of SA's Eyre Peninsula, Streaky Bay supports Pacific oyster farms and a strong abalone-diving fleet operating along the rugged coast.",
    highlights: [
      "Pacific oyster aquaculture",
      "Abalone diving in adjacent waters",
      "Pristine, low-traffic coastline",
    ],
    related: { species: ["oysters", "abalone"], industry: ["aquaculture", "commercial-fishing"] },
  }),
  region({
    slug: "robe",
    name: "Robe & Limestone Coast",
    state: "SA",
    parentState: "sa",
    tagline: "Southern lobster heartland",
    summary:
      "Robe and the Limestone Coast support the bulk of SA's Southern Rock Lobster pot fishery, with live export to Asia underpinning much of the local economy.",
    highlights: [
      "Heart of the SA Southern Rock Lobster fishery",
      "Live export market for Asian premium dining",
      "Tightly quota-managed",
    ],
    related: { species: ["rocklobster"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "kangaroo-island",
    name: "Kangaroo Island",
    state: "SA",
    parentState: "sa",
    summary:
      "Kangaroo Island has a small but highly regarded southern rock lobster fleet, marron aquaculture, and growing oyster farms in clean offshore waters.",
    highlights: [
      "Southern rock lobster pots offshore",
      "Marron and oyster aquaculture",
      "Recovering tourism economy post-2020 bushfires",
    ],
    related: { species: ["rocklobster", "oysters"], industry: ["commercial-fishing", "aquaculture"] },
  }),
];

