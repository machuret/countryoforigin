import type { Area } from "../types";
import { region } from "./_helper";

export const waRegions: Area[] = [
  region({
    slug: "shark-bay",
    name: "Shark Bay",
    state: "WA",
    parentState: "wa",
    tagline: "World Heritage prawn waters",
    summary:
      "A UNESCO World Heritage Area producing premium tiger and king prawns, scallops, and supporting one of Australia's most rigorously managed offshore fisheries.",
    highlights: [
      "Shark Bay Prawn Trawl Fishery — MSC certified",
      "Saucer scallop fishery",
      "World Heritage marine ecosystem",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "exmouth-gulf",
    name: "Exmouth Gulf",
    state: "WA",
    parentState: "wa",
    tagline: "Tropical prawn fishery",
    summary:
      "Adjacent to Ningaloo Reef, Exmouth Gulf supports a tightly-managed tiger prawn fishery and a famous recreational game-fishing scene.",
    highlights: [
      "Exmouth Gulf Prawn Fishery",
      "Adjacent to Ningaloo Marine Park (World Heritage)",
      "Game-fishing for marlin, sailfish, mackerel",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "carnarvon",
    name: "Carnarvon",
    state: "WA",
    parentState: "wa",
    summary:
      "Carnarvon is a quiet WA fishing town with a substantial prawn-trawl fleet and aquaculture interests in the Gascoyne region.",
    highlights: [
      "Shark Bay-area prawn fleet base",
      "Emerging aquaculture",
      "Gateway to the Coral Coast",
    ],
    related: { industry: ["commercial-fishing", "aquaculture"] },
  }),
  region({
    slug: "geraldton",
    name: "Geraldton",
    state: "WA",
    parentState: "wa",
    tagline: "Western Rock Lobster capital",
    summary:
      "Geraldton is the centre of the Western Rock Lobster industry — the world's first MSC-certified fishery — with the bulk of the catch processed locally and exported live.",
    highlights: [
      "Heart of the Western Rock Lobster fleet",
      "Significant live-export operation",
      "Anchor port for the Abrolhos Islands fishery",
    ],
    related: { species: ["western-rock-lobster"], industry: ["commercial-fishing", "processors"] },
  }),
  region({
    slug: "abrolhos-islands",
    name: "Abrolhos Islands",
    state: "WA",
    parentState: "wa",
    tagline: "Lobster archipelago",
    summary:
      "An offshore archipelago west of Geraldton — historically and economically central to the Western Rock Lobster fishery, with a unique island-based fishing community.",
    highlights: [
      "Heart of the Western Rock Lobster fishery",
      "Approx. 200 fishing camps across the islands",
      "Class-A nature reserve protection",
    ],
    related: { species: ["western-rock-lobster"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "albany",
    name: "Albany",
    state: "WA",
    parentState: "wa",
    summary:
      "On WA's south coast, Albany supports an abalone fleet, southern rock lobster pots, and a developing marron and ocean trout farming sector.",
    highlights: [
      "Greenlip and Brownlip abalone diving",
      "Southern rock lobster pot fishery",
      "Marron and ocean trout aquaculture",
    ],
    related: { species: ["abalone", "rocklobster"], industry: ["commercial-fishing", "aquaculture"] },
  }),
  region({
    slug: "esperance",
    name: "Esperance",
    state: "WA",
    parentState: "wa",
    summary:
      "Esperance's pristine waters support an abalone fleet, southern rock lobster pots, and a small but growing aquaculture industry.",
    highlights: [
      "Greenlip abalone diving",
      "Southern rock lobster pots",
      "Pristine offshore waters",
    ],
    related: { species: ["abalone", "rocklobster"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "fremantle",
    name: "Fremantle / Cockburn Sound",
    state: "WA",
    parentState: "wa",
    tagline: "Perth's seafood gateway",
    summary:
      "Fremantle and Cockburn Sound are Perth's seafood landing and processing hub — handling lobster, crab, finfish, and a growing aquaculture sector.",
    highlights: [
      "Major WA seafood processing hub",
      "Cockburn Sound mussel and crab industries",
      "Strategic port for live lobster export",
    ],
    related: { industry: ["processors", "commercial-fishing"] },
  }),
  region({
    slug: "broome",
    name: "Broome",
    state: "WA",
    parentState: "wa",
    tagline: "Pearling capital",
    summary:
      "Broome on WA's Kimberley coast is the heart of Australia's South Sea Pearl industry — a heritage rich in Indigenous, Asian, and European involvement going back to the 1880s.",
    highlights: [
      "Centre of Australia's Pinctada maxima pearling industry",
      "Pearl meat is a sought-after delicacy alongside the gem",
      "Multicultural pearling heritage (Aboriginal, Japanese, Malay, Filipino divers)",
      "Modern pearl farms operate under strict environmental conditions",
    ],
    related: { species: ["pearls"], industry: ["aquaculture", "indigenous-fishing"] },
  }),
  region({
    slug: "kimberley-coast",
    name: "Kimberley Coast",
    state: "WA",
    parentState: "wa",
    summary:
      "The vast, remote Kimberley coast supports pearling, barramundi recreational tourism, and growing Indigenous-led commercial fishing operations.",
    highlights: [
      "Pearl farms in remote bays",
      "Indigenous fishing economy",
      "Significant barramundi and threadfin tourism fishery",
    ],
    related: {
      species: ["pearls", "barramundi"],
      industry: ["aquaculture", "indigenous-fishing"],
    },
  }),
];

