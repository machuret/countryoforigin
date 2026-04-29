import type { Area } from "./types";


/* -----------------------------------------------------------------
 * STATES (8) — every Australian state + territory with a coastline.
 * Each has its own /areas/[state] URL.
 * --------------------------------------------------------------- */
export const states: Area[] = [
  {
    slug: "nsw",
    name: "New South Wales",
    type: "state",
    state: "NSW",
    tagline: "Estuaries & Sydney Rock Oysters",
    summary:
      "NSW's coastline is a chain of productive estuaries — home to the iconic Sydney Rock Oyster — alongside a substantial wild-catch fleet for prawns, snapper, and kingfish.",
    headlineStat: { value: "Sydney Rock", label: "Australia's iconic native oyster — endemic to NSW" },
    highlights: [
      "Largest Sydney Rock Oyster production in the country",
      "Active wild-catch fleets for school prawns, eastern king prawns, and finfish",
      "Heritage-listed estuarine fisheries (Hawkesbury, Clyde, Wallis Lake)",
      "Strong recreational fishing economy supports coastal towns",
    ],
    related: { species: ["oysters"], industry: ["aquaculture", "commercial-fishing"] },
  },
  {
    slug: "vic",
    name: "Victoria",
    type: "state",
    state: "VIC",
    tagline: "Bass Strait & rock lobster",
    summary:
      "Victoria's southern shores meet Bass Strait — a productive zone for southern rock lobster, scallops, abalone, and a long history of estuarine fishing.",
    highlights: [
      "Historic fishing ports: Lakes Entrance, Apollo Bay, Portland",
      "Significant southern rock lobster and abalone fisheries",
      "Mussel long-lines in Port Phillip Bay and Western Port",
      "Recovering native flat oyster (Angasi) reefs in Port Phillip",
    ],
    related: {
      species: ["rocklobster", "abalone", "mussels"],
      industry: ["commercial-fishing", "aquaculture"],
    },
  },
  {
    slug: "qld",
    name: "Queensland",
    type: "state",
    state: "QLD",
    tagline: "Tropical waters & the Great Barrier Reef",
    summary:
      "From the Great Barrier Reef to Cape York and the Torres Strait, Queensland's tropical fisheries cover prawns, mud crab, coral trout, and a strong Indigenous fishing presence.",
    highlights: [
      "Great Barrier Reef Marine Park — world's largest coral reef system",
      "Northern banana and tiger prawn trawl fishery",
      "Coral reef finfish (coral trout, red emperor) supports premium markets",
      "Cape York and Torres Strait have major Indigenous commercial fisheries",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  },
  {
    slug: "sa",
    name: "South Australia",
    type: "state",
    state: "SA",
    tagline: "Tuna, oysters & premium prawns",
    summary:
      "South Australia is home to Spencer Gulf King Prawns, Coffin Bay oysters, and the global capital of Southern Bluefin Tuna — Port Lincoln. SA produces roughly 35% of Australia's wild-capture seafood by value.",
    headlineStat: { value: "35%", label: "Approx. share of Australia's wild-capture value" },
    highlights: [
      "Spencer Gulf — premium wild-caught King Prawn fishery",
      "Coffin Bay — internationally renowned oyster region",
      "Port Lincoln — Southern Bluefin Tuna ranching capital",
      "Southern rock lobster in the south-east",
      "Large abalone fishery, mostly Greenlip",
    ],
    related: {
      species: ["prawns", "tuna", "oysters", "rocklobster", "abalone", "mussels"],
      industry: ["commercial-fishing", "aquaculture", "tuna-ranching"],
    },
  },
  {
    slug: "wa",
    name: "Western Australia",
    type: "state",
    state: "WA",
    tagline: "MSC pioneer + pearling",
    summary:
      "WA's vast coastline supports the iconic Western Rock Lobster — the world's first MSC-certified fishery (2000) — plus prawn, scallop, abalone, and the cultured pearl industry off Broome.",
    headlineStat: {
      value: "2000",
      label: "World's first MSC-certified fishery (Western Rock Lobster)",
    },
    highlights: [
      "Western Rock Lobster fishery — world MSC pioneer",
      "Shark Bay & Exmouth Gulf — major prawn and scallop fisheries",
      "Greenlip and Brownlip abalone in the south-west",
      "Broome — capital of Australia's South Sea Pearl industry",
      "Strong Indigenous co-management arrangements in the north",
    ],
    related: {
      species: ["western-rock-lobster", "abalone", "pearls"],
      industry: ["commercial-fishing", "aquaculture", "indigenous-fishing"],
    },
  },
  {
    slug: "tas",
    name: "Tasmania",
    type: "state",
    state: "TAS",
    tagline: "Aquaculture powerhouse",
    summary:
      "Tasmania produces the bulk of Australia's farmed Atlantic salmon, world-class oysters, abalone, and southern rock lobster — all benefiting from clean cool waters and strict regulation.",
    headlineStat: { value: "#1", label: "Largest farmed seafood producer (by value) in Australia" },
    highlights: [
      "Atlantic salmon farms in Macquarie Harbour, Storm Bay, and the Tamar",
      "Pacific oyster farms across the south coast and East Coast",
      "World-leading Greenlip and Blacklip abalone fisheries",
      "Pot-caught Southern Rock Lobster (live export to Asia)",
      "Bruny Island, Coles Bay, and the Furneaux Group are key seafood regions",
    ],
    related: {
      species: ["salmon", "oysters", "abalone", "rocklobster", "mussels"],
      industry: ["aquaculture", "commercial-fishing", "processors"],
    },
  },
  {
    slug: "nt",
    name: "Northern Territory",
    type: "state",
    state: "NT",
    tagline: "Wild barramundi & mud crab",
    summary:
      "The NT is famous for wild-caught barramundi from rivers and estuaries across Arnhem Land and the Top End — alongside mud crab, banana prawn, and Indigenous fishing operations.",
    highlights: [
      "Wild barramundi rivers across the Top End",
      "Banana prawn trawl fishery in the Gulf of Carpentaria",
      "Significant Indigenous-owned commercial fishing operations",
      "Mud crab fishery across coastal mangrove systems",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  },
  {
    slug: "act",
    name: "Australian Capital Territory",
    type: "state",
    state: "ACT",
    tagline: "Major seafood market (no coastline)",
    summary:
      "While the ACT has no coastline, it's a significant inland market for Australian seafood — and home to many federal agencies that regulate fisheries (DAFF, AFMA, FSANZ).",
    highlights: [
      "Hub for federal seafood policy and management agencies",
      "Strong restaurant and government catering market for Australian seafood",
      "Trout aquaculture in surrounding rural NSW supplies the local market",
    ],
    related: { industry: ["processors"] },
  },
];

/* -----------------------------------------------------------------
 * REGIONS (~50) — by state. Each gets /areas/[state]/[region].
 * --------------------------------------------------------------- */
