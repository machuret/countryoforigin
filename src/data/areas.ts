import type { Entity, Slug } from "./types";

export type AreaType = "state" | "region";

export type Area = Entity & {
  type: AreaType;
  /** ISO-style state code where applicable (e.g. NSW). For regions, the state they sit in. */
  state?: "NSW" | "VIC" | "QLD" | "SA" | "WA" | "TAS" | "NT" | "ACT";
  /** Headline number for the area (optional) */
  headlineStat?: { value: string; label: string };
  /** Short list of bullet highlights */
  highlights?: string[];
};

export const areas: Area[] = [
  /* STATES */
  {
    slug: "nsw",
    name: "New South Wales",
    type: "state",
    state: "NSW",
    tagline: "Estuaries & oysters",
    summary:
      "NSW's coastline is dominated by productive estuaries — home to the iconic Sydney Rock Oyster — alongside a substantial wild-catch fleet for prawns, snapper, and kingfish.",
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
    related: { species: ["rocklobster", "abalone", "mussels"], industry: ["commercial-fishing", "aquaculture"] },
  },
  {
    slug: "qld",
    name: "Queensland",
    type: "state",
    state: "QLD",
    tagline: "Tropical waters",
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
      areas: ["torres-strait"],
    },
  },
  {
    slug: "sa",
    name: "South Australia",
    type: "state",
    state: "SA",
    tagline: "Tuna & premium prawns",
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
      areas: ["spencer-gulf", "coffin-bay", "port-lincoln", "great-australian-bight"],
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
    headlineStat: { value: "2000", label: "World's first MSC-certified fishery (Western Rock Lobster)" },
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
      areas: ["broome"],
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
      areas: ["macquarie-harbour"],
    },
  },
  {
    slug: "nt",
    name: "Northern Territory",
    type: "state",
    state: "NT",
    tagline: "Wild barramundi",
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
      areas: ["northern-territory-rivers"],
    },
  },

  /* REGIONS */
  {
    slug: "spencer-gulf",
    name: "Spencer Gulf",
    type: "region",
    state: "SA",
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
    related: { species: ["prawns"], industry: ["commercial-fishing"], areas: ["sa", "port-lincoln"] },
  },
  {
    slug: "coffin-bay",
    name: "Coffin Bay",
    type: "region",
    state: "SA",
    tagline: "Oyster Capital",
    summary:
      "Coffin Bay's clean, nutrient-rich waters on SA's Eyre Peninsula produce some of the world's most celebrated Pacific Oysters — fast-growing, plump, and consistently briny.",
    highlights: [
      "Pacific oyster (Crassostrea gigas) is the dominant farmed species",
      "Some of the largest single-bay production in Australia",
      "Famous &ldquo;Coffin Bay&rdquo; brand commands global premiums",
      "Strict water-quality monitoring underpins consistent quality",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"], areas: ["sa"] },
  },
  {
    slug: "port-lincoln",
    name: "Port Lincoln",
    type: "region",
    state: "SA",
    tagline: "Tuna capital of the world",
    summary:
      "On the southern tip of SA's Eyre Peninsula, Port Lincoln is the centre of Australia's Southern Bluefin Tuna industry — both wild capture and ranching.",
    headlineStat: { value: "Tuna capital", label: "Centre of Australia's Southern Bluefin Tuna industry" },
    highlights: [
      "Primary base for the Southern Bluefin Tuna ranching fleet",
      "Major export hub for live and processed seafood",
      "Tuna industry is the city's largest employer",
      "Annual Tunarama Festival celebrates the industry",
    ],
    related: { species: ["tuna"], industry: ["tuna-ranching", "commercial-fishing"], areas: ["sa", "great-australian-bight"] },
  },
  {
    slug: "great-australian-bight",
    name: "Great Australian Bight",
    type: "region",
    state: "SA",
    tagline: "Wild Southern Bluefin",
    summary:
      "The Bight is where wild Southern Bluefin Tuna are caught each summer before being towed back to Port Lincoln. Also home to deep-water fisheries with strict environmental management.",
    highlights: [
      "Summer aggregation zone for juvenile Southern Bluefin Tuna",
      "Highly regulated Marine Park boundaries",
      "Important for whale and pinniped conservation",
      "Petroleum exploration debate has shaped policy in recent years",
    ],
    related: { species: ["tuna"], industry: ["commercial-fishing", "tuna-ranching"], areas: ["sa", "port-lincoln"] },
  },
  {
    slug: "macquarie-harbour",
    name: "Macquarie Harbour",
    type: "region",
    state: "TAS",
    tagline: "Salmon & ocean trout",
    summary:
      "A vast, brackish, west-coast Tasmanian harbour that became one of Australia's most important salmon and ocean-trout farming sites — though not without environmental scrutiny.",
    highlights: [
      "Major site for Tasmanian Atlantic salmon production",
      "Brackish, deep waters create unique farming conditions",
      "Subject of ongoing environmental management reviews",
      "Borders the Tasmanian Wilderness World Heritage Area",
    ],
    related: { species: ["salmon"], industry: ["aquaculture"], areas: ["tas"] },
  },
  {
    slug: "torres-strait",
    name: "Torres Strait",
    type: "region",
    state: "QLD",
    tagline: "Indigenous-led fisheries",
    summary:
      "Between Cape York and PNG, the Torres Strait is co-managed with Traditional Inhabitants and supports tropical rock lobster, prawn, and finfish fisheries with significant Indigenous ownership.",
    highlights: [
      "Co-managed under the Torres Strait Treaty (Australia & PNG)",
      "Tropical rock lobster fishery is a cornerstone of the local economy",
      "Strong Traditional Inhabitant Boat (TIB) sector",
      "Pearling, beche-de-mer, and trochus also commercially significant",
    ],
    related: {
      species: [],
      industry: ["indigenous-fishing", "commercial-fishing"],
      areas: ["qld"],
    },
  },
  {
    slug: "broome",
    name: "Broome",
    type: "region",
    state: "WA",
    tagline: "Pearling capital",
    summary:
      "Broome on WA's Kimberley coast is the heart of Australia's South Sea Pearl industry — a heritage rich in Indigenous, Asian, and European involvement going back to the 1880s.",
    highlights: [
      "Centre of Australia's Pinctada maxima pearling industry",
      "Pearl meat is a sought-after delicacy alongside the gem",
      "Multicultural pearling heritage (Aboriginal, Japanese, Malay, Filipino divers)",
      "Modern pearl farms operate under strict environmental conditions",
    ],
    related: { species: ["pearls"], industry: ["aquaculture", "indigenous-fishing"], areas: ["wa"] },
  },
  {
    slug: "northern-territory-rivers",
    name: "Northern Territory Rivers",
    type: "region",
    state: "NT",
    tagline: "Wild Barramundi country",
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
      areas: ["nt"],
    },
  },
];

export const areaBySlug = (slug: Slug): Area | undefined => areas.find((a) => a.slug === slug);
export const allAreaSlugs = (): Slug[] => areas.map((a) => a.slug);
export const statesOnly = (): Area[] => areas.filter((a) => a.type === "state");
export const regionsOnly = (): Area[] => areas.filter((a) => a.type === "region");
