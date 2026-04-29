import type { Area } from "../types";
import { region } from "./_helper";

export const tasRegions: Area[] = [
  region({
    slug: "macquarie-harbour",
    name: "Macquarie Harbour",
    state: "TAS",
    parentState: "tas",
    tagline: "Salmon & ocean trout",
    summary:
      "A vast, brackish, west-coast Tasmanian harbour that became one of Australia's most important salmon and ocean-trout farming sites — though not without environmental scrutiny.",
    highlights: [
      "Major site for Tasmanian Atlantic salmon production",
      "Brackish, deep waters create unique farming conditions",
      "Subject of ongoing environmental management reviews",
      "Borders the Tasmanian Wilderness World Heritage Area",
    ],
    related: { species: ["salmon"], industry: ["aquaculture"] },
  }),
  region({
    slug: "storm-bay",
    name: "Storm Bay",
    state: "TAS",
    parentState: "tas",
    tagline: "Open-ocean salmon expansion",
    summary:
      "Storm Bay south of Hobart is the next-generation site for open-water Atlantic salmon farming — high-energy, well-flushed, and increasingly the centre of growth.",
    highlights: [
      "Largest open-ocean salmon farming zone in Australia",
      "Higher-energy environment than Macquarie Harbour",
      "Subject to detailed marine science programs",
    ],
    related: { species: ["salmon"], industry: ["aquaculture"] },
  }),
  region({
    slug: "bruny-island",
    name: "Bruny Island",
    state: "TAS",
    parentState: "tas",
    summary:
      "Bruny Island is a culinary destination — boutique Pacific oyster farms and a thriving food-tourism scene built on Tasmanian seafood.",
    highlights: [
      "Boutique Pacific oyster farms",
      "Food-tourism economy",
      "Adjacent to the Recherche Bay protected area",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "freycinet-east-coast",
    name: "Freycinet & East Coast",
    state: "TAS",
    parentState: "tas",
    tagline: "Oyster + scallop coast",
    summary:
      "Tasmania's east coast — including Coles Bay and Freycinet Peninsula — supports Pacific oyster farms, scallop divers, and a renowned recreational rock-lobster fishery.",
    highlights: [
      "Pacific oyster farms in sheltered bays",
      "Scallop divers operate offshore",
      "Recreational rock-lobster destination",
    ],
    related: { species: ["oysters", "rocklobster"], industry: ["aquaculture", "commercial-fishing"] },
  }),
  region({
    slug: "furneaux-group",
    name: "Furneaux Group",
    state: "TAS",
    parentState: "tas",
    tagline: "Bass Strait islands",
    summary:
      "The Furneaux Group (including Flinders Island) supports remote southern rock lobster, abalone, and a unique muttonbird (short-tailed shearwater) harvest by Tasmanian Aboriginal communities.",
    highlights: [
      "Remote southern rock lobster fishery",
      "Abalone diving in offshore reefs",
      "Tasmanian Aboriginal muttonbird harvest is unique cultural fishery",
    ],
    related: {
      species: ["rocklobster", "abalone"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  }),
  region({
    slug: "tamar",
    name: "Tamar Estuary",
    state: "TAS",
    parentState: "tas",
    summary:
      "Northern Tasmania's Tamar estuary supports oyster farms, an established salmon farming operation, and processing facilities serving Bass Strait fisheries.",
    highlights: [
      "Pacific oyster farming",
      "Salmon farming operations",
      "Major processing facilities for Bass Strait fish",
    ],
    related: { species: ["salmon", "oysters"], industry: ["aquaculture", "processors"] },
  }),
];

