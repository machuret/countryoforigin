import type { Area } from "../types";
import { region } from "./_helper";

export const qldRegions: Area[] = [
  region({
    slug: "moreton-bay",
    name: "Moreton Bay",
    state: "QLD",
    parentState: "qld",
    tagline: "Bug capital",
    summary:
      "Moreton Bay is famous for the Moreton Bay Bug (slipper lobster), banana prawns, and a multi-species fleet supplying Brisbane.",
    highlights: [
      "Iconic Moreton Bay Bug fishery",
      "Banana and tiger prawn trawls",
      "Recreational fishing capital of SE QLD",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "hervey-bay",
    name: "Hervey Bay",
    state: "QLD",
    parentState: "qld",
    summary:
      "A sheltered bay between the mainland and K'gari (Fraser Island) supporting scallops, prawns, and a renowned recreational fishery for whiting and flathead.",
    highlights: [
      "Saucer scallop fishery",
      "Eastern king prawn",
      "World-renowned humpback whale-watching destination",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "hinchinbrook",
    name: "Hinchinbrook & Townsville",
    state: "QLD",
    parentState: "qld",
    tagline: "Wild barramundi country",
    summary:
      "The Hinchinbrook Channel and Townsville coast support wild-caught barramundi, mud crab, banana prawns, and a major reef-fish charter industry.",
    highlights: [
      "Wild Hinchinbrook barramundi",
      "Mud crab fishery in mangrove systems",
      "Adjacent to the Great Barrier Reef Marine Park",
    ],
    related: { species: ["barramundi"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "mooloolaba",
    name: "Mooloolaba",
    state: "QLD",
    parentState: "qld",
    tagline: "Sunshine Coast tuna port",
    summary:
      "Mooloolaba is QLD's premier tuna port — landing yellowfin, swordfish, and mahi-mahi from the Eastern Tuna and Billfish Fishery.",
    highlights: [
      "Major Eastern Tuna and Billfish landing port",
      "Yellowfin tuna and swordfish",
      "Active sashimi-grade export market",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "mackay",
    name: "Mackay & the Whitsundays",
    state: "QLD",
    parentState: "qld",
    summary:
      "Whitsundays-region fisheries cover spanish mackerel, coral trout, red emperor, and a vibrant reef-charter scene set against the Great Barrier Reef.",
    highlights: [
      "Reef line-fishing for coral trout and red emperor",
      "Spanish mackerel run is a regional event",
      "Charter and tourism overlap",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "karumba",
    name: "Karumba",
    state: "QLD",
    parentState: "qld",
    tagline: "Gulf of Carpentaria gateway",
    summary:
      "Karumba on the Gulf of Carpentaria is the heart of the banana prawn fishery and a major barramundi fishing town with Indigenous co-management.",
    highlights: [
      "Banana prawn fishery hub",
      "Wild barramundi rivers",
      "Significant Indigenous fishing presence",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
      areas: ["gulf-of-carpentaria"],
    },
  }),
  region({
    slug: "weipa",
    name: "Weipa & Cape York",
    state: "QLD",
    parentState: "qld",
    tagline: "Indigenous-managed fisheries",
    summary:
      "Cape York fisheries are increasingly Indigenous-led — barramundi, mud crab, and reef fish fisheries with strong cultural integration.",
    highlights: [
      "Wild barramundi and mud crab",
      "Major Indigenous fishing operations",
      "Adjacent to the Great Barrier Reef Marine Park",
    ],
    related: {
      species: ["barramundi"],
      industry: ["indigenous-fishing", "commercial-fishing"],
    },
  }),
  region({
    slug: "cairns",
    name: "Cairns & Far North Queensland",
    state: "QLD",
    parentState: "qld",
    summary:
      "Cairns is the gateway to the northern Great Barrier Reef — a centre for reef-line fishing, charter operations, and seafood processing for Asia-Pacific markets.",
    highlights: [
      "Major reef-fish processing hub",
      "Coral trout and red emperor",
      "Tourism and charter fishing economy",
    ],
    related: { industry: ["commercial-fishing", "processors"] },
  }),
  region({
    slug: "gulf-of-carpentaria",
    name: "Gulf of Carpentaria",
    state: "QLD",
    parentState: "qld",
    tagline: "Banana prawn ocean",
    summary:
      "The shallow tropical sea between northern QLD and Arnhem Land — the heart of Australia's banana and tiger prawn trawl fishery.",
    highlights: [
      "Northern Prawn Fishery — one of Australia's most valuable",
      "Banana prawns are the signature catch",
      "Significant Indigenous fishing co-management",
    ],
    related: {
      industry: ["commercial-fishing", "indigenous-fishing"],
      areas: ["karumba", "weipa", "arnhem-land"],
    },
  }),
];

