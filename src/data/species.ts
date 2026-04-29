import type { Entity, Slug } from "./types";

export type SourcingType = "wild" | "farmed" | "both";

export type NutBar = {
  name: string;
  aus: number;
  imp: number;
  max: number;
  unit: string;
};

export type Species = Entity & {
  /** Optional binomial (italicised in UI) */
  scientific?: string;
  /** Wild caught / farmed / both */
  sourcing: SourcingType;
  /** Card emoji (placeholder for hero image) */
  emoji: string;
  /** Card gradient class (sc-*) */
  cls: string;
  /** Tags shown on cards */
  tags: string[];
  /** Optional flavour notes */
  flavour?: string;
  /** Per-100g nutrition bars (used by /species/[slug] and /compare/[slug]) */
  nutrition: NutBar[];
};

export const species: Species[] = [
  {
    slug: "barramundi",
    name: "Barramundi",
    scientific: "Lates calcarifer",
    tagline: "Northern icon",
    sourcing: "both",
    emoji: "🐟",
    cls: "sc-barramundi",
    tags: ["High Omega-3", "Low Mercury", "MSC Certified"],
    summary:
      "An iconic native of Australia's tropical north — wild-caught in the rivers and estuaries of the NT and far-north QLD, and farmed in cages and ponds across the country.",
    flavour: "Sweet, mild, firm white flesh that holds together on the grill",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 820, imp: 480, max: 1000, unit: "mg" },
      { name: "Protein", aus: 22.4, imp: 19.8, max: 28, unit: "g" },
      { name: "Vitamin D", aus: 6.2, imp: 4.1, max: 10, unit: "µg" },
      { name: "Selenium", aus: 38, imp: 26, max: 50, unit: "µg" },
      { name: "Iodine", aus: 44, imp: 28, max: 60, unit: "µg" },
    ],
    related: {
      areas: ["nt", "qld", "northern-territory-rivers"],
      industry: ["aquaculture", "commercial-fishing"],
      compare: ["barramundi-aus-vs-imported"],
    },
  },
  {
    slug: "salmon",
    name: "Atlantic Salmon",
    scientific: "Salmo salar",
    tagline: "Tasmanian aquaculture",
    sourcing: "farmed",
    emoji: "🐠",
    cls: "sc-salmon",
    tags: ["Omega-3 Rich", "ASC Certified", "Antibiotic Free"],
    summary:
      "Australia's largest aquaculture industry by value — farmed almost exclusively in the cool, clean waters of southern Tasmania and Macquarie Harbour.",
    flavour: "Rich, oily, deep pink flesh; equally at home raw, cured, or roasted",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 2700, imp: 2100, max: 3000, unit: "mg" },
      { name: "Protein", aus: 24.1, imp: 22.3, max: 28, unit: "g" },
      { name: "Vitamin D", aus: 11, imp: 7.5, max: 15, unit: "µg" },
      { name: "Selenium", aus: 36, imp: 28, max: 50, unit: "µg" },
      { name: "Vitamin B12", aus: 3.2, imp: 2.4, max: 5, unit: "µg" },
    ],
    related: {
      areas: ["tas", "macquarie-harbour"],
      industry: ["aquaculture", "processors"],
      compare: ["salmon-aus-vs-norway"],
    },
  },
  {
    slug: "prawns",
    name: "King Prawns",
    scientific: "Melicertus latisulcatus",
    tagline: "Spencer Gulf premium",
    sourcing: "wild",
    emoji: "🦐",
    cls: "sc-prawn",
    tags: ["High Protein", "No Preservatives", "Sustainably Fished"],
    summary:
      "The wild-caught Western King Prawn from South Australia's Spencer Gulf is widely regarded as one of the world's finest — clean, sweet, and on a tightly-managed quota.",
    flavour: "Sweet, briny, with a snap when fresh — the benchmark Aussie prawn",
    nutrition: [
      { name: "Protein", aus: 18.6, imp: 17.2, max: 24, unit: "g" },
      { name: "Selenium", aus: 33, imp: 24, max: 50, unit: "µg" },
      { name: "Iodine", aus: 35, imp: 22, max: 60, unit: "µg" },
      { name: "Zinc", aus: 1.6, imp: 1.2, max: 3, unit: "mg" },
      { name: "Vitamin B12", aus: 1.8, imp: 1.3, max: 3, unit: "µg" },
    ],
    related: {
      areas: ["spencer-gulf", "sa"],
      industry: ["commercial-fishing"],
      compare: ["prawns-aus-vs-asia"],
    },
  },
  {
    slug: "tuna",
    name: "Southern Bluefin Tuna",
    scientific: "Thunnus maccoyii",
    tagline: "Recovery story",
    sourcing: "wild",
    emoji: "🐡",
    cls: "sc-tuna",
    tags: ["Premium Grade", "CCSBT Quota", "Traceable"],
    summary:
      "Once depleted, now rebuilding under the world's most rigorous international quota. Wild-caught in the Great Australian Bight and ranched in Port Lincoln.",
    flavour: "Deep, beefy, melting fat — the world's premium sashimi tuna",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 1800, imp: 1200, max: 2500, unit: "mg" },
      { name: "Protein", aus: 25.4, imp: 23.6, max: 30, unit: "g" },
      { name: "Vitamin D", aus: 6.8, imp: 4.3, max: 10, unit: "µg" },
      { name: "Selenium", aus: 90, imp: 70, max: 110, unit: "µg" },
      { name: "Vitamin B12", aus: 9.4, imp: 7.1, max: 12, unit: "µg" },
    ],
    related: {
      areas: ["sa", "port-lincoln", "great-australian-bight"],
      industry: ["commercial-fishing", "tuna-ranching"],
      compare: ["tuna-southern-bluefin-vs-imported"],
    },
  },
  {
    slug: "oysters",
    name: "Australian Oysters",
    tagline: "Three native varieties",
    sourcing: "farmed",
    emoji: "🦪",
    cls: "sc-oyster",
    tags: ["High Zinc", "Water Filtering", "Multiple Varieties"],
    summary:
      "Australia farms three distinct oyster species — Sydney Rock, Pacific, and the rare native Angasi — across estuaries from NSW to Tasmania.",
    flavour: "Varies by species; from creamy and mineral (Sydney Rock) to brisk and briny (Pacific) to umami-rich (Angasi)",
    nutrition: [
      { name: "Zinc (per 100g)", aus: 38, imp: 22, max: 50, unit: "mg" },
      { name: "Vitamin B12", aus: 19, imp: 14, max: 25, unit: "µg" },
      { name: "Iron", aus: 7.2, imp: 5.1, max: 10, unit: "mg" },
      { name: "Selenium", aus: 77, imp: 55, max: 100, unit: "µg" },
      { name: "Protein", aus: 9.5, imp: 8.0, max: 14, unit: "g" },
    ],
    related: {
      areas: ["nsw", "sa", "tas", "coffin-bay"],
      industry: ["aquaculture"],
      compare: ["oysters-aus-vs-imported"],
    },
  },
  {
    slug: "abalone",
    name: "Greenlip Abalone",
    scientific: "Haliotis laevigata",
    tagline: "Diver-caught",
    sourcing: "wild",
    emoji: "🐚",
    cls: "sc-oyster",
    tags: ["Dive Caught", "TAC Quota", "World's Largest Wild Fishery"],
    summary:
      "Australia is home to the world's largest wild abalone fishery — hand-collected by licensed divers across Tasmania, Victoria, SA, and WA under strict TAC quotas.",
    flavour: "Firm, mineral, ocean-deep — a delicacy across Asia for centuries",
    nutrition: [
      { name: "Protein", aus: 17.1, imp: 15.2, max: 22, unit: "g" },
      { name: "Iron", aus: 3.2, imp: 2.1, max: 5, unit: "mg" },
      { name: "Vitamin B12", aus: 0.7, imp: 0.5, max: 1.5, unit: "µg" },
      { name: "Selenium", aus: 45, imp: 32, max: 60, unit: "µg" },
      { name: "Magnesium", aus: 48, imp: 36, max: 70, unit: "mg" },
    ],
    related: {
      areas: ["tas", "vic", "sa", "wa"],
      industry: ["commercial-fishing"],
      compare: ["abalone-aus-vs-imported"],
    },
  },
  {
    slug: "mussels",
    name: "Blue Mussels",
    scientific: "Mytilus galloprovincialis",
    tagline: "Rope-grown",
    sourcing: "farmed",
    emoji: "🫧",
    cls: "sc-oyster",
    tags: ["Rope Grown", "Low Carbon", "No Feed Required"],
    summary:
      "One of Australia's most sustainable proteins — farmed on long-lines in Tasmania, Victoria, and SA. Mussels filter the water rather than consume feed.",
    flavour: "Plump, mineral, sweet — works equally in white wine, curry, or chowder",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 700, imp: 550, max: 900, unit: "mg" },
      { name: "Protein", aus: 11.9, imp: 11.2, max: 16, unit: "g" },
      { name: "Iron", aus: 6.7, imp: 5.3, max: 9, unit: "mg" },
      { name: "Vitamin B12", aus: 24, imp: 19, max: 30, unit: "µg" },
      { name: "Selenium", aus: 89, imp: 70, max: 110, unit: "µg" },
    ],
    related: {
      areas: ["tas", "vic", "sa"],
      industry: ["aquaculture"],
      compare: ["mussels-aus-vs-imported"],
    },
  },
  {
    slug: "rocklobster",
    name: "Southern Rock Lobster",
    scientific: "Jasus edwardsii",
    tagline: "Premium wild-caught",
    sourcing: "wild",
    emoji: "🦞",
    cls: "sc-lobster",
    tags: ["Live Export Premium", "Pot-caught", "Stock-status Assessed"],
    summary:
      "Wild-caught in cold southern waters using baited pots. Tasmania, SA, and Victoria's lobster fisheries supply both the domestic premium market and live export to Asia.",
    flavour: "Sweet, dense, delicately briny — the finest cold-water lobster in the world",
    nutrition: [
      { name: "Protein", aus: 20.5, imp: 18.9, max: 25, unit: "g" },
      { name: "Selenium", aus: 75, imp: 55, max: 100, unit: "µg" },
      { name: "Vitamin B12", aus: 1.4, imp: 1.0, max: 2, unit: "µg" },
      { name: "Zinc", aus: 3.5, imp: 2.8, max: 5, unit: "mg" },
      { name: "Copper", aus: 1.6, imp: 1.2, max: 2, unit: "mg" },
    ],
    related: {
      areas: ["tas", "sa", "vic"],
      industry: ["commercial-fishing"],
      compare: ["rocklobster-aus-vs-imported"],
    },
  },
  {
    slug: "western-rock-lobster",
    name: "Western Rock Lobster",
    scientific: "Panulirus cygnus",
    tagline: "World's first MSC fishery",
    sourcing: "wild",
    emoji: "🦞",
    cls: "sc-lobster",
    tags: ["MSC Certified (since 2000)", "Pot-caught", "WA Premium"],
    summary:
      "The Western Australian rock lobster fishery was the world's first to achieve MSC certification in 2000 and remains a benchmark for sustainable wild-capture management.",
    flavour: "Sweet, slightly drier than its southern cousin; iconic of WA",
    nutrition: [
      { name: "Protein", aus: 20.2, imp: 18.9, max: 25, unit: "g" },
      { name: "Selenium", aus: 70, imp: 55, max: 100, unit: "µg" },
      { name: "Vitamin B12", aus: 1.4, imp: 1.0, max: 2, unit: "µg" },
      { name: "Zinc", aus: 3.5, imp: 2.8, max: 5, unit: "mg" },
      { name: "Copper", aus: 1.6, imp: 1.2, max: 2, unit: "mg" },
    ],
    related: {
      areas: ["wa"],
      industry: ["commercial-fishing"],
      compare: ["western-rocklobster-aus-vs-imported"],
    },
  },
  {
    slug: "pearls",
    name: "Australian South Sea Pearls",
    scientific: "Pinctada maxima",
    tagline: "Cultural & industry icon",
    sourcing: "farmed",
    emoji: "✨",
    cls: "sc-barramundi",
    tags: ["World's Finest Cultured Pearls", "Pinctada Maxima", "Broome Heritage"],
    summary:
      "Australia is the world's leading source of South Sea pearls — farmed off the Kimberley coast in WA. Pearl meat is also a delicacy. The pearling industry has deep Indigenous and multicultural heritage.",
    flavour: "Pearl meat: crisp, sweet, with a melon-like aroma",
    nutrition: [
      { name: "Protein", aus: 19.5, imp: 17.0, max: 25, unit: "g" },
      { name: "Selenium", aus: 60, imp: 45, max: 100, unit: "µg" },
      { name: "Iron", aus: 4.4, imp: 3.1, max: 7, unit: "mg" },
      { name: "Vitamin B12", aus: 1.1, imp: 0.7, max: 2, unit: "µg" },
      { name: "Zinc", aus: 2.7, imp: 2.0, max: 5, unit: "mg" },
    ],
    related: {
      areas: ["wa", "broome"],
      industry: ["aquaculture", "indigenous-fishing"],
      compare: ["pearls-aus-vs-imported"],
    },
  },
];

/* OYSTER VARIETIES (sub-grid on /species/oysters) */
export type OysterVariety = {
  key: string;
  name: string;
  scientific: string;
  origin: string;
  flavour: string;
  notes: string;
  tags: string[];
  status: "Native" | "Naturalised";
};

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

/* Helpers */
export const speciesBySlug = (slug: Slug): Species | undefined =>
  species.find((s) => s.slug === slug);

export const allSpeciesSlugs = (): Slug[] => species.map((s) => s.slug);
