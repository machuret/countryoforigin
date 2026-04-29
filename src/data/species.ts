import type { Entity, Slug } from "./types";

export type SourcingType = "wild" | "farmed" | "both";

export type NutBar = {
  name: string;
  aus: number;
  imp: number;
  max: number;
  unit: string;
};

export type SeasonStatus = "peak" | "good" | "available" | "off";
export type SeasonalityMonth = { month: string; status: SeasonStatus };

export type CookingNote = { method: string; text: string };

export type WhyAustralianBreakdown = {
  health: string[];
  economy: string[];
  environment: string[];
  taste: string[];
};

/* ------------------------- PHASE B — DEEP DATA ------------------------- */

export type StockRating =
  | "sustainable"
  | "sustainable-rebuilding"
  | "depleting"
  | "overfished"
  | "recovering"
  | "undefined";

export type StockStatus = {
  rating: StockRating;
  year: number;
  citationId: string;
  note?: string;
};

export type ProductionYear = {
  year: number;
  tonnes: number;
  sourceId?: string;
  provenance?: "primary" | "estimate" | "editorial";
};

export type GearMethod = {
  method: string;
  note?: string;
};

export type MercuryData = {
  aus: number;              // mg/kg
  imp: number;              // mg/kg
  unit?: "mg/kg";
  citationId: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type AntibioticLevel = "none" | "rare" | "low" | "documented";

export type AntibioticData = {
  aus: AntibioticLevel;
  imp: AntibioticLevel;
  citationId: string;
  provenance?: "primary" | "estimate" | "editorial";
  note?: string;
};

export type PriceRange = {
  ausLow: number;
  ausHigh: number;
  impLow: number;
  impHigh: number;
  unit?: "$/kg";
  asOf: string;             // e.g. "2026 Q1"
  provenance: "primary" | "estimate" | "editorial";
};

export type SupplyChainStep = {
  step: string;
  days: string;             // e.g. "1–3"
  note?: string;
};

export type LookAlike = {
  name: string;
  whyConfused: string;
  howToTell: string;
};

export type Regulations = {
  quotaTonnes?: number;
  bagLimit?: string;
  sizeLimit?: string;
  sourceId?: string;
  note?: string;
};

export type OperatorType =
  | "coop"
  | "peak-body"
  | "processor"
  | "farm"
  | "retailer"
  | "research"
  | "market";

export type KeyOperator = {
  name: string;
  type: OperatorType;
  region?: string;
  url?: string;
};

export type HistoryEntry = {
  year: number;
  note: string;
};

export type MediaWatchEntry = {
  outlet: string;
  headline: string;
  year: number;
  url: string;
  tier?: "primary" | "secondary";
};

export type Species = Entity & {
  scientific?: string;
  sourcing: SourcingType;
  emoji: string;
  cls: string;
  tags: string[];
  flavour?: string;
  nutrition: NutBar[];

  /* PHASE 2 — DEEP CONTENT */
  importedFrom?: string;
  importedRisks?: string[];
  whyAustralian?: WhyAustralianBreakdown;
  seasonality?: SeasonalityMonth[];
  cookingNotes?: CookingNote[];
  labelingHint?: string;
  citationIds?: string[];
  signatureRegions?: Slug[];

  /* PHASE B — DEEP DATA (all optional, species-by-species rollout) */
  stockStatus?: StockStatus;
  productionHistory?: ProductionYear[];
  gear?: GearMethod[];
  mercury?: MercuryData;
  antibiotics?: AntibioticData;
  priceRange?: PriceRange;
  supplyChain?: SupplyChainStep[];
  lookAlikes?: LookAlike[];
  regulations?: Regulations;
  keyOperators?: KeyOperator[];
  history?: HistoryEntry[];
  mediaWatch?: MediaWatchEntry[];
};

/* Helper: build a 12-month seasonality array. Pass a peak set and good set. */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const seasons = (
  peak: number[],
  good: number[] = [],
  off: number[] = [],
): SeasonalityMonth[] =>
  MONTHS.map((month, i) => {
    const m = i + 1;
    const status: SeasonStatus = peak.includes(m)
      ? "peak"
      : good.includes(m)
        ? "good"
        : off.includes(m)
          ? "off"
          : "available";
    return { month, status };
  });

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
    importedFrom: "Thailand, Vietnam, Indonesia",
    importedRisks: [
      "Antibiotic and chemical residues frequently detected in imports",
      "Mangrove habitat destruction for pond aquaculture",
      "Variable farming standards — pond water quality often poor",
      "10–14 day transit reduces nutrition and flavour",
    ],
    whyAustralian: {
      health: [
        "1.7× the omega-3 of imported equivalents",
        "No antibiotics or hormones in farmed Australian barra",
        "FSANZ-monitored mercury levels well below safety thresholds",
      ],
      economy: [
        "Backbone of NT and far-north QLD coastal economies",
        "Significant Indigenous-owned commercial operations",
        "Farms and rivers support hundreds of regional jobs",
      ],
      environment: [
        "Strict water-quality and breeding regulations",
        "No mangrove destruction (unlike imported pond aquaculture)",
        "Wild river closures during spawning each wet season",
      ],
      taste: [
        "Distinctive sweet, clean white flesh",
        "Fresh — typically reaches retail within 2–3 days",
        "Wild barra from the Roper or Daly is a true delicacy",
      ],
    },
    seasonality: seasons([3, 4, 5, 6, 7, 8, 9], [2, 10], []),
    cookingNotes: [
      {
        method: "Pan-sear (skin on)",
        text: "Hot pan, oil, score the skin, 4 min skin-side, 1 min flesh side. Squeeze of lemon. Done.",
      },
      {
        method: "BBQ whole",
        text: "Score the sides, stuff with lemongrass and coriander, wrap in banana leaf, hot grill 8 min each side.",
      },
      {
        method: "En papillote",
        text: "Bake in baking paper with white wine, fennel, and tomato — keeps the flesh moist.",
      },
      {
        method: "Sashimi",
        text: "Cone Bay-grade farmed barramundi is sashimi-rated. Slice thin against the grain, soy + yuzu.",
      },
    ],
    labelingHint:
      'Look for "Wild Australian Barramundi" or named-farm provenance (Cone Bay, Humpty Doo, Bowarrady).',
    citationIds: ["fsanz-tds", "heart-foundation-omega3", "fao-mangroves"],
    signatureRegions: ["nt", "northern-territory-rivers", "qld", "hinchinbrook"],
    related: {
      areas: ["nt", "qld", "northern-territory-rivers", "hinchinbrook", "weipa"],
      industry: ["aquaculture", "commercial-fishing", "indigenous-fishing"],
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
    importedFrom: "Norway, Chile, Faroe Islands",
    importedRisks: [
      "Air-freighted product carries enormous carbon footprint",
      "Higher antibiotic use rates in some imported origins",
      "14–21 days from harvest to Australian retail",
      "Synthetic colour additives often required to mask freshness loss",
    ],
    whyAustralian: {
      health: [
        "Higher omega-3 than imported salmon (~2,700mg vs 2,100mg per 100g)",
        "Antibiotic use is minimal and tightly regulated",
        "ASC-certified farms audited against rigorous health standards",
      ],
      economy: [
        "Largest single aquaculture employer in Australia",
        "Underpins entire Tasmanian regional economies (Hobart, Strahan, Bicheno)",
        "Significant export revenue funds further infrastructure investment",
      ],
      environment: [
        "Storm Bay's high-energy water replaces older sites",
        "Marine science programs run alongside production",
        "ASC + Best Aquaculture Practices certification",
      ],
      taste: [
        "Harvested Tuesday → Sydney plate Wednesday night",
        "No air-freight = no compression-induced flesh degradation",
        "Rich oil content makes it ideal for sashimi, gravlax, or hot-smoke",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      {
        method: "Sashimi",
        text: "Buy a sashimi-grade fillet, freeze 24h to reduce parasite risk, slice thin against the grain.",
      },
      {
        method: "Cure (gravlax)",
        text: "1:1 salt and sugar with dill, weigh down 36–48h, slice paper-thin.",
      },
      {
        method: "Pan-roast (skin on)",
        text: "Hot pan, score the skin, 5 min skin side, finish 2 min flesh side. Rest before serving.",
      },
      {
        method: "Hot-smoke",
        text: "Brine 2h, dry, smoke at 80°C with applewood for 90 min.",
      },
    ],
    labelingHint:
      'Always specify "Tasmanian Atlantic Salmon" — never confuse imported frozen-thawed product with fresh local.',
    citationIds: ["fsanz-tds", "heart-foundation-omega3", "icct-air-freight"],
    signatureRegions: ["tas", "macquarie-harbour", "storm-bay", "tamar"],
    related: {
      areas: ["tas", "macquarie-harbour", "storm-bay", "tamar"],
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
    importedFrom: "Vietnam, India, China, Thailand",
    importedRisks: [
      "Sulphite preservatives — major allergen, mandatory disclosure when used",
      "Antibiotic and antifungal residues regularly detected at the border",
      "Pond construction has driven mangrove loss across SE Asia",
      "Documented forced-labour cases in parts of the Thai supply chain",
    ],
    whyAustralian: {
      health: [
        "No sulphites required — natural sodium levels only",
        "Zero antibiotic exposure — wild-caught from clean Gulf waters",
        "High-quality protein with iodine and B12",
      ],
      economy: [
        "Eyre Peninsula towns built on the prawn fleet",
        "39 licensed Spencer Gulf vessels — tightly capped",
        "Major export earnings fund the science underpinning quotas",
      ],
      environment: [
        "Bycatch Reduction Devices and TEDs mandatory in trawls",
        "Seasonal closures protect spawning aggregations",
        "Independently assessed as sustainable",
      ],
      taste: [
        "Snap-frozen on board to lock in sweetness",
        "Distinctive briny finish from clean Gulf waters",
        "The benchmark by which other prawns are judged",
      ],
    },
    seasonality: seasons([5, 6, 7, 8, 9, 10], [3, 4, 11], []),
    cookingNotes: [
      {
        method: "Raw (sashimi)",
        text: "Spencer Gulf prawns sashimi-grade — peel, devein, dress with lime + chilli.",
      },
      {
        method: "BBQ shell-on",
        text: "Drizzle with olive oil + salt, hot grill 90 sec each side, finish with lemon.",
      },
      {
        method: "Garlic butter",
        text: "Peeled, hot pan, butter + lots of garlic + parsley, 2 min total. Crusty bread.",
      },
      {
        method: "Salt & pepper",
        text: "Cantonese-style: corn-flour dust, deep fry 2 min, toss with chilli + spring onion.",
      },
    ],
    labelingHint:
      'Look for "Wild Australian Prawn" with a region — Spencer Gulf, Exmouth, Shark Bay, Banana Prawn (Gulf of Carpentaria).',
    citationIds: ["fsanz-residues", "fao-mangroves", "ap-investigation-2015"],
    signatureRegions: ["spencer-gulf", "sa", "shark-bay", "exmouth-gulf"],
    related: {
      areas: ["spencer-gulf", "sa", "shark-bay", "exmouth-gulf", "gulf-of-carpentaria"],
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
    importedFrom: "Pacific Ocean, Indian Ocean (Yellowfin / Bigeye)",
    importedRisks: [
      "Mercury accumulation in older, larger imported tuna",
      "Long-line bycatch — turtles, sharks, seabirds",
      "Seafood mislabelling rates highest for tuna products",
      "Traceability often lost at multiple supply-chain handoffs",
    ],
    whyAustralian: {
      health: [
        "Lower mercury — ranched fish are juveniles fed clean sardines",
        "Rich in omega-3 and selenium",
        "Tight food-safety surveillance via FSANZ",
      ],
      economy: [
        "Port Lincoln industry is SA's largest export contributor",
        "Tunarama Festival — cultural anchor of the region",
        "Premium export prices (Japan) fund local infrastructure",
      ],
      environment: [
        "CCSBT international quota — among the world's most rigorous",
        "Stock formally classified as recovering",
        "Ranching uses no industrial feed pellets — only sardines",
      ],
      taste: [
        "Global gold standard for sashimi-grade tuna",
        "Belly (otoro) is a rare delicacy",
        "Ranched fattening period produces unmatched marbling",
      ],
    },
    seasonality: seasons([12, 1, 2], [11, 3, 4, 5], []),
    cookingNotes: [
      { method: "Sashimi", text: "Slice akami (lean) thin against the grain. Soy + wasabi only." },
      {
        method: "Sear (tataki)",
        text: "Crust with sesame, sear 30 sec each side, slice and dress with ponzu.",
      },
      { method: "Tartare", text: "Hand-dice, dress with shallot, capers, lemon, olive oil." },
      { method: "Ceviche", text: "Cube, marinate in lime + chilli + coriander 5 min before serving." },
    ],
    labelingHint:
      'Specify "Southern Bluefin Tuna" or "Yellowfin Tuna" — origin, species, and grade matter for sashimi.',
    citationIds: ["safs-2024", "fsanz-mercury-2024", "oceana-mislabelling"],
    signatureRegions: ["port-lincoln", "great-australian-bight", "sa"],
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
    flavour:
      "Varies by species; from creamy and mineral (Sydney Rock) to brisk and briny (Pacific) to umami-rich (Angasi)",
    nutrition: [
      { name: "Zinc (per 100g)", aus: 38, imp: 22, max: 50, unit: "mg" },
      { name: "Vitamin B12", aus: 19, imp: 14, max: 25, unit: "µg" },
      { name: "Iron", aus: 7.2, imp: 5.1, max: 10, unit: "mg" },
      { name: "Selenium", aus: 77, imp: 55, max: 100, unit: "µg" },
      { name: "Protein", aus: 9.5, imp: 8.0, max: 14, unit: "g" },
    ],
    importedFrom: "France, Japan, USA, Korea",
    importedRisks: [
      "Biosecurity risk — POMS, OsHV-1, herpes-virus introduction",
      "Long transit dramatically increases food-safety risk in raw shellfish",
      "Loss of provenance — shucked-frozen product is essentially anonymous",
    ],
    whyAustralian: {
      health: [
        "World-class zinc, B12, and iron content",
        "Live / freshly-shucked product means peak nutrient retention",
        "Strict NSW & SA Shellfish Programs monitor every estuary weekly",
      ],
      economy: [
        "Sydney Rock industry supports ~250 NSW family farms",
        "Coffin Bay brand is internationally recognised",
        "Estuarine farming preserves coastal regional economies",
      ],
      environment: [
        "Filter-feeders that actively improve water quality",
        "No supplementary feed required — zero feed inputs",
        "Native Angasi reef restoration projects underway",
      ],
      taste: [
        "Sydney Rock — endemic, slow-grown, mineral-driven",
        "Coffin Bay Pacific — clean, briny, plump",
        "Native Angasi — rare, complex, umami-rich",
      ],
    },
    seasonality: seasons([4, 5, 6, 7, 8, 9], [3, 10], []),
    cookingNotes: [
      {
        method: "Natural with mignonette",
        text: "Shallot + red-wine vinegar + cracked pepper. The benchmark serving.",
      },
      { method: "Kilpatrick", text: "Worcestershire + bacon, grill until just bubbling." },
      { method: "Tempura", text: "Light batter, fry 60 sec, serve with ponzu and shichimi." },
      {
        method: "Baked with parmesan",
        text: "Topped with breadcrumb, parmesan, parsley, baked 6 min hot oven.",
      },
    ],
    labelingHint:
      'Ask for the species (Sydney Rock / Pacific / Angasi) AND the estuary (Wallis Lake, Coffin Bay, Bruny, etc.).',
    citationIds: ["fsanz-tds"],
    signatureRegions: ["nsw", "coffin-bay", "tas", "wallis-lake", "hawkesbury"],
    related: {
      areas: ["nsw", "sa", "tas", "coffin-bay", "wallis-lake", "hawkesbury", "bruny-island"],
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
    importedFrom: "China, South Korea, Mexico, Chile",
    importedRisks: [
      "Many imported wild stocks have collapsed — poaching is endemic",
      "Imported farmed product often relies on intensive feed inputs",
      "Heavy-metal accumulation in polluted overseas waters",
      "Traceability often opaque",
    ],
    whyAustralian: {
      health: [
        "Lean protein with selenium and B12",
        "Caught in pristine cold waters — minimal contaminant load",
        "No farmed-feed inputs in wild Australian abalone",
      ],
      economy: [
        "TAS, VIC, SA, WA dive industries support hundreds of skilled jobs",
        "Significant Asian export market funds science and enforcement",
        "Several Indigenous-owned abalone operations",
      ],
      environment: [
        "TAC quotas adjusted annually based on biomass surveys",
        "Dive-only — near-zero bycatch by design",
        "Closed seasons protect spawning",
      ],
      taste: [
        "Distinct firm bite with cold-water mineral finish",
        "Wild fish develop slowly — flavour intensity is unmatched",
        "Sashimi presentation is the gold standard",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      { method: "Sashimi", text: "Slice paper-thin, dress with ponzu and grated daikon." },
      {
        method: "Pan-fry (quickly)",
        text: "Tenderise, dust in flour, butter, 30 sec each side. Overcooked = leather.",
      },
      { method: "Dashi simmer", text: "Gently poach in dashi 4 min — Japanese style." },
      { method: "Deep-fry", text: "Tempura batter, 60 sec, serve with lemon + sea salt." },
    ],
    labelingHint:
      'Ask for the species — Greenlip, Blacklip, or Brownlip — and the state (TAS, VIC, SA, WA).',
    citationIds: ["safs-2024"],
    signatureRegions: ["tas", "vic", "sa", "wa", "albany", "esperance", "furneaux-group"],
    related: {
      areas: ["tas", "vic", "sa", "wa", "albany", "esperance", "furneaux-group", "apollo-bay"],
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
    importedFrom: "New Zealand, Chile, Spain",
    importedRisks: [
      "Long transit reduces freshness and increases handling-loss",
      "Carbon footprint of importing low-value seafood is enormous",
      "Loss of point-of-origin estuary information",
    ],
    whyAustralian: {
      health: [
        "Higher omega-3 than imported equivalents",
        "Iron, B12, and selenium-dense — a cheap nutrient powerhouse",
        "No feed inputs = no concentration of feed contaminants",
      ],
      economy: [
        "Active farms in Tasmania, Victoria (Port Phillip Bay), and SA",
        "Mussel farming supports diverse coastal small businesses",
        "Significant restaurant and processing demand",
      ],
      environment: [
        "Among the lowest-carbon protein sources on Earth",
        "Filter-feeding actively improves bay water quality",
        "No feed inputs at all — pure ecosystem services",
      ],
      taste: [
        "Plump, sweet, and clean from long-line cold-water farms",
        "Adapts to almost any cuisine — French, Thai, Italian, Spanish",
        "Best within 24 hours of harvest",
      ],
    },
    seasonality: seasons([4, 5, 6, 7, 8, 9, 10], [3, 11], []),
    cookingNotes: [
      {
        method: "Marinière",
        text: "Shallot + white wine + butter + parsley. 4 min covered. Discard any unopened.",
      },
      {
        method: "Thai red curry",
        text: "Sauté red curry paste, coconut milk, mussels, basil, lime. 5 min total.",
      },
      { method: "Chowder", text: "Steam, pick the meat, fold into a potato-leek-cream base." },
      { method: "Saganaki", text: "Olive oil + garlic + tomato + ouzo + feta. Greek classic." },
    ],
    labelingHint: 'Look for "Australian Blue Mussels" with a clear "live" tag and harvest date.',
    citationIds: ["heart-foundation-omega3"],
    signatureRegions: ["tas", "vic", "sa", "port-phillip-bay", "western-port"],
    related: {
      areas: ["tas", "vic", "sa", "port-phillip-bay", "western-port"],
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
    importedFrom: "Canada, USA, Cuba",
    importedRisks: [
      "Frozen-thawed product common — texture loss is significant",
      "Live transit by air carries large carbon and welfare cost",
      "Variable quota management across origin countries",
    ],
    whyAustralian: {
      health: [
        "Lean, mineral-rich premium protein",
        "Caught in cold pristine waters — minimal contaminant exposure",
        "Pot-caught means no chemical residues at all",
      ],
      economy: [
        "Live export underpins entire Tasmanian and SA towns",
        "Robe and Apollo Bay rely on the seasonal fleet",
        "Regional skilled jobs — vessel crew, divers, processors",
      ],
      environment: [
        "Pot fishery — near-zero bycatch",
        "Stock-status assessed and published every two years",
        "Strict TAC quotas adjusted to biomass",
      ],
      taste: [
        "Sweet, dense flesh from cold southern waters",
        "Live export to Asia is a benchmark for quality",
        "Sashimi from a live lobster is unforgettable",
      ],
    },
    seasonality: seasons([11, 12, 1, 2, 3, 4], [5, 10], []),
    cookingNotes: [
      {
        method: "Split & grill",
        text: "Halve live, brush with garlic butter, grill cut-side down 6 min, finish flesh-up 3 min.",
      },
      {
        method: "Sashimi",
        text: "Spike a live lobster, slice tail meat against the grain, soy + wasabi.",
      },
      {
        method: "Mornay",
        text: "Béchamel + gruyère + dijon, fill the half-shell, gratinate under the grill.",
      },
      {
        method: "Thermidor",
        text: "Cooked tail meat in cognac-cream sauce, back into the shell, gratinate.",
      },
    ],
    labelingHint:
      'Ask for the species: Southern Rock, Western Rock, or Tropical Rock — and confirm "live" or "cooked".',
    citationIds: ["safs-2024"],
    signatureRegions: ["tas", "sa", "vic", "robe", "apollo-bay", "kangaroo-island"],
    related: {
      areas: ["tas", "sa", "vic", "robe", "apollo-bay", "kangaroo-island", "furneaux-group"],
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
    importedFrom: "Canada, USA, Cuba",
    importedRisks: [
      "MSC equivalence not always present in imported origins",
      "Frozen-thawed product common — texture suffers",
      "Live transit by air freight is high carbon",
    ],
    whyAustralian: {
      health: [
        "Lean, mineral-rich protein from pristine WA waters",
        "Pot-caught — zero chemical exposure",
        "Premium-grade selenium and zinc content",
      ],
      economy: [
        "Geraldton and the Abrolhos Islands depend on the fishery",
        "World-class live-export operation funds local infrastructure",
        "Roughly 200 licensed boats with multi-generation family operators",
      ],
      environment: [
        "World's first MSC-certified fishery (2000)",
        "ITQ quota system, science-led",
        "Pot fishery — bycatch is minimal",
      ],
      taste: [
        "Drier, sweeter cousin of the Southern Rock",
        "Iconic to WA cuisine",
        "Best appreciated split & grilled with butter",
      ],
    },
    seasonality: seasons([1, 2, 3, 4, 5, 6], [7, 12], []),
    cookingNotes: [
      {
        method: "Split & grill",
        text: "Halve live, garlic butter, grill 6 min cut-side down, 3 min flesh-up.",
      },
      { method: "Mornay", text: "Béchamel + gruyère, fill the half-shell, gratinate." },
      { method: "Sashimi", text: "Live, spiked, sliced tail meat — soy + wasabi only." },
      { method: "Thermidor", text: "Cognac-cream sauce, back in shell, gratinate." },
    ],
    labelingHint: 'Look for the MSC blue tick — Western Rock Lobster has been MSC-certified since 2000.',
    citationIds: ["msc-wrl-2000"],
    signatureRegions: ["wa", "geraldton", "abrolhos-islands", "fremantle"],
    related: {
      areas: ["wa", "geraldton", "abrolhos-islands", "fremantle"],
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
    importedFrom: "Japan (Akoya), China (freshwater), French Polynesia (Tahitian)",
    importedRisks: [
      "Smaller pearls (Akoya/freshwater) are not interchangeable with South Sea",
      "Variable environmental management across origin countries",
      "Pearl meat from imported origins rare and lower-grade",
    ],
    whyAustralian: {
      health: [
        "Pearl meat is iron-rich, lean, and seafood-clean",
        "Broome industry operates under environmental approvals",
        "Pristine Kimberley waters with minimal contaminant load",
      ],
      economy: [
        "Multicultural heritage industry — Indigenous, Japanese, Malay, Filipino divers",
        "Broome's economy historically built on pearling",
        "Several Indigenous-owned pearling operations",
      ],
      environment: [
        "Strict environmental approval process for new farm sites",
        "No supplementary feed — pearls grow naturally in the ocean",
        "Important employer in remote Indigenous communities",
      ],
      taste: [
        "Pearl meat — crisp, sweet, melon-aroma",
        "A genuine delicacy, served sashimi or lightly seared",
        "Distinct from any other shellfish meat",
      ],
    },
    seasonality: seasons([], [4, 5, 6, 7, 8, 9], []),
    cookingNotes: [
      { method: "Sashimi", text: "Slice meat thin, dress with citrus and ponzu." },
      {
        method: "Lightly seared",
        text: "Hot pan, 30 sec each side, finish with brown butter + lemon.",
      },
      {
        method: "Carpaccio",
        text: "Paper-thin, drizzle with olive oil + lemon + sea salt + pink peppercorns.",
      },
    ],
    labelingHint:
      'Look for "Australian South Sea Pearl" or Pinctada maxima — and ideally Broome / Kimberley provenance.',
    citationIds: [],
    signatureRegions: ["broome", "kimberley-coast", "wa"],
    related: {
      areas: ["wa", "broome", "kimberley-coast"],
      industry: ["aquaculture", "indigenous-fishing"],
      compare: ["pearls-aus-vs-imported"],
    },
  },

  /* ---------------- PHASE 3 — 15 ADDITIONAL SPECIES ---------------- */

  {
    slug: "snapper",
    name: "Snapper",
    scientific: "Chrysophrys auratus",
    tagline: "The pink king of the east coast",
    sourcing: "wild",
    emoji: "🐟",
    cls: "sc-barramundi",
    tags: ["Wild Caught", "Iconic", "Quota Managed"],
    summary:
      "One of Australia's most iconic table fish — wild-caught from NSW, QLD, SA, and WA. Pink-fleshed, mild, and prized for both table and recreational fishing.",
    flavour: "Mild, sweet, firm white-pink flesh — versatile from sashimi to roast",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 460, imp: 280, max: 800, unit: "mg" },
      { name: "Protein", aus: 21.4, imp: 19.0, max: 26, unit: "g" },
      { name: "Selenium", aus: 42, imp: 28, max: 60, unit: "µg" },
      { name: "Iodine", aus: 31, imp: 18, max: 50, unit: "µg" },
      { name: "Vitamin B12", aus: 2.6, imp: 1.8, max: 4, unit: "µg" },
    ],
    importedFrom: "New Zealand, China (often as &lsquo;sea bream&rsquo;)",
    importedRisks: [
      "Mislabelling — &lsquo;snapper&rsquo; on imported menus is often unrelated species",
      "Long transit reduces firmness and flavour",
      "Variable management standards in some origins",
    ],
    whyAustralian: {
      health: [
        "Genuinely Australian-caught — DNA-traceable to species",
        "Clean low-mercury eating fish",
        "Quality omega-3, B12, and selenium per serving",
      ],
      economy: [
        "Important to NSW, QLD, SA, and WA fleets",
        "Major recreational species — supports charter tourism",
        "Active processor sector in Sydney and SA",
      ],
      environment: [
        "Quota-managed across all states",
        "Stock-status reports show recovering populations",
        "Recreational bag limits protect breeding stock",
      ],
      taste: [
        "Sweet, mild flesh — the benchmark Australian table fish",
        "Whole-roast in salt crust is iconic",
        "Sashimi-grade from quality sources",
      ],
    },
    seasonality: seasons([10, 11, 12, 1, 2, 3], [4, 9], []),
    cookingNotes: [
      { method: "Whole roast", text: "Salt-crust 220°C, 25 min for a 1kg fish, rest before unveiling." },
      { method: "Pan-sear (skin on)", text: "Score the skin, hot pan, 4 min skin side, 1 min flesh." },
      { method: "Sashimi", text: "Premium fillet, slice thin against the grain — soy + yuzu." },
      { method: "Steamed (Cantonese)", text: "Whole fish, ginger + spring onion, hot peanut oil." },
    ],
    labelingHint: 'Insist on "Australian Snapper" — &ldquo;snapper&rdquo; alone often means imported substitutes.',
    citationIds: ["safs-2024", "oceana-mislabelling"],
    signatureRegions: ["nsw", "sa", "wa", "port-stephens", "spencer-gulf", "shark-bay"],
    related: {
      areas: ["nsw", "sa", "wa", "port-stephens", "shark-bay"],
      industry: ["commercial-fishing"],
      compare: ["snapper-aus-vs-imported"],
    },
  },
  {
    slug: "flathead",
    name: "Tiger Flathead",
    scientific: "Platycephalus richardsoni",
    tagline: "Australia's favourite fish-and-chips",
    sourcing: "wild",
    emoji: "🐟",
    cls: "sc-barramundi",
    tags: ["Wild Caught", "Iconic", "Sustainable"],
    summary:
      "Tiger flathead is the species behind much of Australia's classic fish-and-chips — wild-caught off NSW, VIC, and TAS in well-managed offshore trawls.",
    flavour: "Delicate, sweet, firm white flesh — clean and unmistakable",
    nutrition: [
      { name: "Protein", aus: 22.0, imp: 19.6, max: 26, unit: "g" },
      { name: "Omega-3 Fatty Acids", aus: 220, imp: 140, max: 500, unit: "mg" },
      { name: "Selenium", aus: 39, imp: 26, max: 60, unit: "µg" },
      { name: "Iodine", aus: 28, imp: 16, max: 50, unit: "µg" },
      { name: "Vitamin B12", aus: 2.1, imp: 1.4, max: 4, unit: "µg" },
    ],
    importedFrom: "Vietnam, Thailand (often as basa, swai, or &lsquo;flake&rsquo;)",
    importedRisks: [
      "Imported &lsquo;flake&rsquo; is often basa, gummy shark, or unrelated species",
      "Pond-farmed substitutes have variable food-safety standards",
      "Mislabelling at takeaway scale is widespread",
    ],
    whyAustralian: {
      health: [
        "Low mercury, low fat — perfect family fish",
        "Wild-caught with no chemical exposure",
        "Quality protein at an accessible price",
      ],
      economy: [
        "Backbone species of Lakes Entrance and east-coast trawl ports",
        "Affordable workhorse for fish-and-chip shops",
        "Multi-generation fishing families",
      ],
      environment: [
        "Bycatch Reduction Devices in trawl",
        "Quota-managed under Commonwealth Trawl Sector",
        "Stock classified as sustainable",
      ],
      taste: [
        "Cleanest, sweetest white fish in the country",
        "Holds up in batter without going dry",
        "Distinct from imported substitutes",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      { method: "Beer batter", text: "Cold lager + flour + cornflour. 180°C oil, 4 min. Sea salt." },
      { method: "Pan-fry", text: "Flour-dust, butter + lemon, 2 min each side. Don't overcook." },
      { method: "Foil-baked", text: "Lemon, dill, butter, white wine, foil parcels, 180°C 12 min." },
      { method: "Crumbed cutlets", text: "Egg + panko, shallow fry 2 min each side, tartare sauce." },
    ],
    labelingHint: 'Ask for "Australian Tiger Flathead" or "Dusky Flathead" — never accept anonymous &ldquo;flake&rdquo;.',
    citationIds: ["safs-2024", "oceana-mislabelling"],
    signatureRegions: ["lakes-entrance", "vic", "nsw", "tas", "bass-strait"],
    related: {
      areas: ["lakes-entrance", "vic", "nsw", "tas", "bass-strait"],
      industry: ["commercial-fishing"],
      compare: ["flathead-aus-vs-imported"],
    },
  },
  {
    slug: "king-george-whiting",
    name: "King George Whiting",
    scientific: "Sillaginodes punctatus",
    tagline: "South Australia's beloved table fish",
    sourcing: "wild",
    emoji: "🐟",
    cls: "sc-barramundi",
    tags: ["Wild Caught", "Premium", "Endemic"],
    summary:
      "Endemic to southern Australian waters, King George Whiting is among the country's most prized small table fish — sweet, delicate, and almost exclusively wild-caught.",
    flavour: "Sweet, delicate, melting white flesh — the finest small fish in Australia",
    nutrition: [
      { name: "Protein", aus: 20.8, imp: 18.4, max: 26, unit: "g" },
      { name: "Omega-3 Fatty Acids", aus: 380, imp: 220, max: 700, unit: "mg" },
      { name: "Selenium", aus: 41, imp: 26, max: 60, unit: "µg" },
      { name: "Iodine", aus: 32, imp: 18, max: 50, unit: "µg" },
      { name: "Vitamin B12", aus: 2.4, imp: 1.6, max: 4, unit: "µg" },
    ],
    importedFrom: "Imported &lsquo;whiting&rsquo; products are typically unrelated species — Pacific or African origin",
    importedRisks: [
      "Imported &lsquo;whiting&rsquo; is rarely the same species or family",
      "Substantial mislabelling risk at retail",
      "Long transit destroys the delicate texture",
    ],
    whyAustralian: {
      health: [
        "Low-mercury, low-fat, easily digestible",
        "Excellent first fish for children",
        "Genuine product — no substitution risk when sourced from Aussie fishmonger",
      ],
      economy: [
        "Cornerstone of small-scale SA and VIC fisheries",
        "Recreational fishing tourism in Yorke and Eyre peninsulas",
        "Premium pricing supports family operators",
      ],
      environment: [
        "Endemic species — found nowhere else",
        "Bag and size limits protect spawning aggregations",
        "Caught using low-impact handlines and small nets",
      ],
      taste: [
        "Considered Australia's finest small table fish",
        "Sweet flesh that melts when cooked correctly",
        "Iconic shallow-fried with lemon",
      ],
    },
    seasonality: seasons([4, 5, 6, 7, 8, 9, 10], [3, 11], []),
    cookingNotes: [
      { method: "Pan-fry whole", text: "Score, dust in flour, 2 min each side in butter. Lemon. Done." },
      { method: "Crumbed fillet", text: "Egg-and-panko, shallow fry 90 sec each side." },
      { method: "Steamed", text: "Whole, with shallot and ginger, 8 min. Hot oil over the top." },
      { method: "Sashimi", text: "Larger fillets only — slice thin, citrus + sea salt." },
    ],
    labelingHint: 'Ask explicitly for "King George Whiting" — most other &ldquo;whiting&rdquo; on Australian menus is School or Sand Whiting.',
    citationIds: ["safs-2024"],
    signatureRegions: ["sa", "vic", "spencer-gulf", "kangaroo-island"],
    related: {
      areas: ["sa", "vic", "spencer-gulf", "kangaroo-island", "port-phillip-bay"],
      industry: ["commercial-fishing"],
      compare: ["whiting-aus-vs-imported"],
    },
  },
  {
    slug: "bream",
    name: "Yellowfin Bream",
    scientific: "Acanthopagrus australis",
    tagline: "East coast estuary classic",
    sourcing: "wild",
    emoji: "🐟",
    cls: "sc-barramundi",
    tags: ["Wild Caught", "Estuarine", "Recreational Favourite"],
    summary:
      "A fast, scrappy estuarine fish caught from southern QLD to eastern VIC. Bream is one of Australia's most popular recreational species and a quietly excellent table fish.",
    flavour: "Sweet, mild, slightly nutty — crisp skin if cooked well",
    nutrition: [
      { name: "Protein", aus: 21.0, imp: 18.5, max: 26, unit: "g" },
      { name: "Omega-3 Fatty Acids", aus: 540, imp: 320, max: 800, unit: "mg" },
      { name: "Selenium", aus: 38, imp: 26, max: 60, unit: "µg" },
      { name: "Iodine", aus: 30, imp: 18, max: 50, unit: "µg" },
      { name: "Vitamin B12", aus: 2.2, imp: 1.6, max: 4, unit: "µg" },
    ],
    importedFrom: "Imported &lsquo;sea bream&rsquo; usually refers to gilt-head or Mediterranean species",
    importedRisks: [
      "Imported sea bream is a different species entirely",
      "Often pond-farmed with antibiotics in some origins",
      "Loses textural distinction during long transit",
    ],
    whyAustralian: {
      health: [
        "Clean low-mercury species — safe for everyday eating",
        "Estuarine wild stock with minimal contaminant exposure",
        "Solid omega-3 for an &ldquo;all-purpose&rdquo; fish",
      ],
      economy: [
        "Estuarine commercial fishery underpins NSW coastal towns",
        "Major drawcard for recreational fishing tourism",
        "Hawkesbury, Clyde, and Wallis Lake bream are regional brands",
      ],
      environment: [
        "Bag and size limits protect spawning",
        "Estuarine fisheries actively managed for habitat",
        "Bream populations indicate estuarine health",
      ],
      taste: [
        "Crisp skin when pan-fried correctly",
        "Sweet, slightly nutty flesh",
        "Classic whole-fish presentation",
      ],
    },
    seasonality: seasons([3, 4, 5, 6, 7, 8], [2, 9, 10], []),
    cookingNotes: [
      { method: "Whole BBQ", text: "Scaled, scored, lemon stuffed inside, 8 min each side hot grill." },
      { method: "Pan-fry (skin on)", text: "Hot pan, oil + butter, 4 min skin side, 1 min flesh." },
      { method: "Salt-baked", text: "Bury in coarse salt, 200°C 25 min, crack the crust at the table." },
      { method: "Ceviche", text: "Diced, lime + chilli + coriander 3 min, served immediately." },
    ],
    labelingHint: 'Look for "Australian Yellowfin Bream" or "Black Bream" — origin matters for the flavour.',
    citationIds: ["safs-2024"],
    signatureRegions: ["nsw", "qld", "wallis-lake", "clyde-river", "hawkesbury"],
    related: {
      areas: ["nsw", "qld", "wallis-lake", "clyde-river", "hawkesbury"],
      industry: ["commercial-fishing"],
      compare: ["bream-aus-vs-imported"],
    },
  },
  {
    slug: "mulloway",
    name: "Mulloway",
    scientific: "Argyrosomus japonicus",
    tagline: "The silver giant",
    sourcing: "wild",
    emoji: "🐟",
    cls: "sc-tuna",
    tags: ["Wild Caught", "Recreational Trophy", "Premium"],
    summary:
      "A large, silver-flanked predator of southern Australian estuaries and beaches — mulloway is a recreational trophy and an excellent table fish prized by chefs.",
    flavour: "Firm, white, slightly oily — holds up to robust treatment and curing",
    nutrition: [
      { name: "Protein", aus: 22.5, imp: 19.4, max: 28, unit: "g" },
      { name: "Omega-3 Fatty Acids", aus: 720, imp: 410, max: 1000, unit: "mg" },
      { name: "Selenium", aus: 44, imp: 28, max: 60, unit: "µg" },
      { name: "Vitamin D", aus: 5.5, imp: 3.4, max: 10, unit: "µg" },
      { name: "Vitamin B12", aus: 2.8, imp: 1.9, max: 4, unit: "µg" },
    ],
    importedFrom: "Imported &lsquo;jewfish&rsquo; or &lsquo;corvina&rsquo; from S. America (sciaenid family)",
    importedRisks: [
      "Imported corvina is a different species from variable origins",
      "Long-haul refrigeration damages firm-flesh texture",
      "Trace metals and origin verification often weak",
    ],
    whyAustralian: {
      health: [
        "Low-mercury despite being a large predator",
        "Strong omega-3 profile — close to oily-fish levels",
        "Wild estuarine stock with no farming contaminants",
      ],
      economy: [
        "Important commercial estuarine species (Coorong, NSW estuaries)",
        "Recreational trophy fish drives tourism",
        "Yamba, Coorong, and SA estuary fleets rely on it",
      ],
      environment: [
        "Recovering wild stocks after historic overfishing",
        "Stock-status assessed every two years",
        "Coorong Indigenous co-management informs quotas",
      ],
      taste: [
        "Pristine cured (gravlax) — chef-favourite",
        "Holds up to roasting and grilling",
        "A quietly world-class table fish",
      ],
    },
    seasonality: seasons([2, 3, 4, 5], [1, 6, 11, 12], []),
    cookingNotes: [
      { method: "Cure (gravlax)", text: "Salt + sugar + dill, 36h, slice paper-thin." },
      { method: "Whole roast", text: "Salt-crust, 220°C 30 min for 1.5kg, crack at the table." },
      { method: "Pan-sear", text: "Skin-on, hot pan, 4 min skin side, 1 min flesh." },
      { method: "Ceviche", text: "Diced, lime + chilli + coriander 5 min — firm flesh holds well." },
    ],
    labelingHint: 'Ask for "Australian Mulloway" or "Coorong Mulloway" — never confuse with imported corvina/jewfish.',
    citationIds: ["safs-2024"],
    signatureRegions: ["sa", "nsw", "spencer-gulf"],
    related: {
      areas: ["sa", "nsw", "spencer-gulf"],
      industry: ["commercial-fishing", "indigenous-fishing"],
      compare: ["mulloway-aus-vs-imported"],
    },
  },
  {
    slug: "kingfish",
    name: "Yellowtail Kingfish",
    scientific: "Seriola lalandi",
    tagline: "The southern hamachi",
    sourcing: "both",
    emoji: "🐠",
    cls: "sc-tuna",
    tags: ["Wild & Farmed", "Sashimi Grade", "Premium"],
    summary:
      "Yellowtail Kingfish — the southern cousin of Japan's hamachi — is wild-caught around southern Australia and farmed in Spencer Gulf SA. World-class sashimi.",
    flavour: "Rich, oily, buttery — Australia's premier sashimi finfish",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 1900, imp: 1100, max: 2500, unit: "mg" },
      { name: "Protein", aus: 24.0, imp: 21.5, max: 28, unit: "g" },
      { name: "Selenium", aus: 52, imp: 34, max: 70, unit: "µg" },
      { name: "Vitamin D", aus: 8.6, imp: 5.2, max: 12, unit: "µg" },
      { name: "Vitamin B12", aus: 4.4, imp: 2.8, max: 6, unit: "µg" },
    ],
    importedFrom: "Japan (hamachi/buri), USA, Mexico",
    importedRisks: [
      "Imported hamachi often farmed with significant antibiotic use",
      "Long air-freight = compressed flesh and oxidised oils",
      "Mislabelling between species (kingfish/amberjack/seriola)",
    ],
    whyAustralian: {
      health: [
        "Higher omega-3 than imported hamachi",
        "Antibiotic-restricted farming in Spencer Gulf",
        "Premium sashimi-grade vitamin D and B12",
      ],
      economy: [
        "Spencer Gulf farms underpin SA aquaculture diversification",
        "Wild fishery important to NSW and southern QLD fleets",
        "Premium export earnings to Asian markets",
      ],
      environment: [
        "Spencer Gulf operations under SA aquaculture environmental code",
        "Wild stock-status reports show healthy populations",
        "Recreational trophy fishery is well-regulated",
      ],
      taste: [
        "World-class sashimi (rivals premium Japanese hamachi)",
        "Buttery flesh works equally raw, seared, or smoked",
        "Crisp skin when seared properly",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      { method: "Sashimi", text: "Slice against the grain, soy + wasabi only — top-tier raw fish." },
      { method: "Sear (tataki)", text: "Sesame crust, sear 30 sec each side, slice and dress with ponzu." },
      { method: "Ceviche", text: "Hand-dice, lime + jalapeño + coriander + olive oil." },
      { method: "Hot smoke", text: "Brine 2h, smoke at 80°C for 90 min — stunning kingfish pâté." },
    ],
    labelingHint: 'Ask for "Australian Yellowtail Kingfish" — wild from NSW or farmed Spencer Gulf both excellent.',
    citationIds: ["safs-2024", "heart-foundation-omega3"],
    signatureRegions: ["sa", "nsw", "spencer-gulf", "port-stephens"],
    related: {
      areas: ["sa", "nsw", "spencer-gulf", "port-stephens"],
      industry: ["aquaculture", "commercial-fishing"],
      compare: ["kingfish-aus-vs-imported"],
    },
  },
  {
    slug: "mahi-mahi",
    name: "Mahi-mahi",
    scientific: "Coryphaena hippurus",
    tagline: "Tropical pelagic blade",
    sourcing: "wild",
    emoji: "🐠",
    cls: "sc-tuna",
    tags: ["Wild Caught", "Pelagic", "Sustainable"],
    summary:
      "Known locally as &lsquo;dolphinfish&rsquo;, mahi-mahi are wild-caught off QLD and NSW in the Eastern Tuna and Billfish Fishery — fast-growing and highly sustainable.",
    flavour: "Mild, sweet, firm — takes spice, smoke, and acid superbly",
    nutrition: [
      { name: "Protein", aus: 24.5, imp: 22.0, max: 28, unit: "g" },
      { name: "Omega-3 Fatty Acids", aus: 580, imp: 380, max: 900, unit: "mg" },
      { name: "Selenium", aus: 48, imp: 32, max: 70, unit: "µg" },
      { name: "Vitamin D", aus: 4.2, imp: 2.6, max: 10, unit: "µg" },
      { name: "Vitamin B12", aus: 3.0, imp: 2.0, max: 4, unit: "µg" },
    ],
    importedFrom: "Pacific Ocean (Ecuador, Peru), Vietnam — often long-line caught",
    importedRisks: [
      "Imported long-line product has higher bycatch (turtles, sharks)",
      "Often arrives heavily frozen-thawed",
      "Variable mercury levels in older fish",
    ],
    whyAustralian: {
      health: [
        "Lean, low-mercury (fast-growing species)",
        "Strong protein and selenium per serving",
        "Wild — no farming residues",
      ],
      economy: [
        "Mooloolaba fleet primary supplier",
        "Coastal QLD and NSW pelagic boats",
        "Charter and sport-fishing tourism boost",
      ],
      environment: [
        "Fast-growing — among the most sustainable pelagic fish",
        "Caught alongside tuna in Eastern Tuna & Billfish Fishery",
        "Stock-status classified sustainable",
      ],
      taste: [
        "Distinctive sweet-mild flesh that takes bold flavours",
        "Iconic Caribbean and Hawaiian preparations",
        "Holds up brilliantly on the BBQ",
      ],
    },
    seasonality: seasons([12, 1, 2, 3, 4], [5, 11], []),
    cookingNotes: [
      { method: "BBQ steaks", text: "Marinate in lime + chilli + garlic 30 min, hot grill 3 min each side." },
      { method: "Tacos", text: "Pan-sear cubes with chipotle, soft tortilla, slaw + crema." },
      { method: "Ceviche", text: "Cube, lime + jalapeño + red onion 5 min, mango on the side." },
      { method: "Whole roast", text: "Smaller fish whole, lemon + chilli, 200°C 18 min." },
    ],
    labelingHint: 'Ask for "Australian Mahi-mahi" — explicitly check it isn\'t Vietnamese imported product.',
    citationIds: ["safs-2024"],
    signatureRegions: ["qld", "nsw", "mooloolaba", "coffs-coast"],
    related: {
      areas: ["qld", "nsw", "mooloolaba", "coffs-coast"],
      industry: ["commercial-fishing"],
      compare: ["mahi-aus-vs-imported"],
    },
  },
  {
    slug: "coral-trout",
    name: "Coral Trout",
    scientific: "Plectropomus leopardus",
    tagline: "Reef royalty",
    sourcing: "wild",
    emoji: "🐠",
    cls: "sc-prawn",
    tags: ["Reef Line-Caught", "Iconic GBR", "Premium Export"],
    summary:
      "The most prized reef fish in Australian waters — line-caught on the Great Barrier Reef. A staple of premium Asian export markets and high-end Australian restaurants.",
    flavour: "Firm, white, sweet-mild — the premium reef fish",
    nutrition: [
      { name: "Protein", aus: 23.1, imp: 20.4, max: 28, unit: "g" },
      { name: "Selenium", aus: 51, imp: 34, max: 70, unit: "µg" },
      { name: "Iodine", aus: 36, imp: 22, max: 60, unit: "µg" },
      { name: "Omega-3 Fatty Acids", aus: 380, imp: 220, max: 700, unit: "mg" },
      { name: "Vitamin B12", aus: 2.6, imp: 1.7, max: 4, unit: "µg" },
    ],
    importedFrom: "Indonesia, Philippines, Solomon Islands — sometimes cyanide-caught",
    importedRisks: [
      "Cyanide fishing remains documented in parts of SE Asia",
      "Reef destruction with dynamite or aquarium-trade methods",
      "Mislabelling — &lsquo;coral trout&rsquo; is sometimes other grouper species",
    ],
    whyAustralian: {
      health: [
        "Line-caught, no chemical exposure",
        "Pristine GBR waters with strict pollution controls",
        "Premium-grade lean protein",
      ],
      economy: [
        "Cornerstone of Cairns, Mackay, and Townsville fleets",
        "Major export to Hong Kong premium markets",
        "Reef Line Fishery is QLD's most valuable",
      ],
      environment: [
        "Line-caught only — no nets, no trawling near reefs",
        "Highly regulated within Great Barrier Reef Marine Park",
        "ITQ quota, size limits, and seasonal closures",
      ],
      taste: [
        "Considered the world's finest reef table fish",
        "Iconic Cantonese steamed presentation",
        "Premium pan-roast or whole-fish work equally",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      { method: "Steamed (Cantonese)", text: "Whole fish, ginger + spring onion, soy + hot oil." },
      { method: "Pan-roast (skin on)", text: "Score skin, 5 min skin side, finish in oven 4 min." },
      { method: "Whole BBQ", text: "Stuffed with lemongrass, banana leaf wrap, hot grill 8 min each side." },
      { method: "Sashimi", text: "Premium fillets only — slice thin, ponzu + grated daikon." },
    ],
    labelingHint: 'Ask for "Australian Coral Trout from the Great Barrier Reef" — check origin papers if buying premium.',
    citationIds: ["safs-2024", "greenpeace-cyanide"],
    signatureRegions: ["qld", "cairns", "mackay", "hinchinbrook"],
    related: {
      areas: ["qld", "cairns", "mackay", "hinchinbrook"],
      industry: ["commercial-fishing"],
      compare: ["coral-trout-aus-vs-imported"],
    },
  },
  {
    slug: "mud-crab",
    name: "Mud Crab",
    scientific: "Scylla serrata",
    tagline: "Mangrove-king of the tropics",
    sourcing: "wild",
    emoji: "🦀",
    cls: "sc-lobster",
    tags: ["Wild Caught", "Tropical", "Indigenous-managed"],
    summary:
      "Australian mud crab — caught in the mangrove systems of NT, far north QLD, and the Kimberley — is one of the world's premier crab species.",
    flavour: "Sweet, dense, briny — the gold standard of tropical crab",
    nutrition: [
      { name: "Protein", aus: 19.4, imp: 16.8, max: 24, unit: "g" },
      { name: "Selenium", aus: 48, imp: 32, max: 70, unit: "µg" },
      { name: "Zinc", aus: 4.2, imp: 3.0, max: 6, unit: "mg" },
      { name: "Omega-3 Fatty Acids", aus: 460, imp: 280, max: 700, unit: "mg" },
      { name: "Vitamin B12", aus: 7.8, imp: 5.4, max: 10, unit: "µg" },
    ],
    importedFrom: "Sri Lanka, Indonesia, Philippines, Bangladesh",
    importedRisks: [
      "Mangrove-pond aquaculture drives habitat loss",
      "Imported live crab welfare standards highly variable",
      "Long transit reduces meat-to-shell yield significantly",
    ],
    whyAustralian: {
      health: [
        "Wild from clean mangrove estuaries",
        "Excellent zinc, B12, and selenium",
        "No farming chemical exposure",
      ],
      economy: [
        "Important Indigenous fishery in NT, Cape York, Kimberley",
        "Darwin and Karumba fleets land most product",
        "Highly cultural fishery for Top End communities",
      ],
      environment: [
        "Pot-only — no bycatch",
        "Size and sex limits protect breeding stock",
        "Caught from intact mangrove systems",
      ],
      taste: [
        "Sweet, dense meat — the world's best mud crab",
        "Iconic Singapore chilli-crab origin",
        "Live to plate is the only way",
      ],
    },
    seasonality: seasons([10, 11, 12, 1, 2, 3, 4], [9, 5], []),
    cookingNotes: [
      { method: "Singapore chilli-crab", text: "Sambal + tomato + egg, hot wok, mantou bread to mop up." },
      { method: "Steamed", text: "Live, 12 min for a 1kg crab, with ginger-soy dipping sauce." },
      { method: "Salt and pepper", text: "Cantonese-style, deep-fry 2 min, toss with chilli and spring onion." },
      { method: "BBQ", text: "Halved, brushed with garlic-butter, hot grill 6 min each side." },
    ],
    labelingHint: 'Ask for "Australian Mud Crab" or specifically &ldquo;NT Mud Crab&rdquo; — check it isn\'t Asian imported.',
    citationIds: ["safs-2024", "fao-mangroves"],
    signatureRegions: ["nt", "qld", "darwin", "karumba", "kimberley-coast"],
    related: {
      areas: ["nt", "qld", "darwin", "karumba", "kimberley-coast", "weipa"],
      industry: ["commercial-fishing", "indigenous-fishing"],
      compare: ["mud-crab-aus-vs-imported"],
    },
  },
  {
    slug: "blue-swimmer-crab",
    name: "Blue Swimmer Crab",
    scientific: "Portunus armatus",
    tagline: "The summer crab",
    sourcing: "wild",
    emoji: "🦀",
    cls: "sc-lobster",
    tags: ["Wild Caught", "Quota Managed", "Warm Water"],
    summary:
      "A vivid blue, sweet-meated portunid wild-caught from SA, WA, NSW, and southern QLD. The classic Australian summer crab — sweeter and lighter than its tropical cousin.",
    flavour: "Sweet, delicate, lighter than mud crab — perfect for summer pasta",
    nutrition: [
      { name: "Protein", aus: 18.6, imp: 16.4, max: 24, unit: "g" },
      { name: "Selenium", aus: 44, imp: 30, max: 70, unit: "µg" },
      { name: "Zinc", aus: 3.6, imp: 2.6, max: 6, unit: "mg" },
      { name: "Omega-3 Fatty Acids", aus: 380, imp: 240, max: 700, unit: "mg" },
      { name: "Vitamin B12", aus: 6.4, imp: 4.6, max: 10, unit: "µg" },
    ],
    importedFrom: "Indonesia, Vietnam, India (often as picked &lsquo;crab meat&rsquo; tins)",
    importedRisks: [
      "Picked imported crab meat is essentially anonymous",
      "Pasteurised product loses fresh flavour",
      "Some origins use bleach during processing",
    ],
    whyAustralian: {
      health: [
        "Live or fresh-cooked retains natural sweetness",
        "Clean wild waters — no farming residues",
        "High in zinc and B12",
      ],
      economy: [
        "Important to SA, WA, and NSW estuarine fleets",
        "Mandurah (WA) and Spencer Gulf are key hubs",
        "Recreational fishery supports coastal tourism",
      ],
      environment: [
        "Pot-caught — minimal bycatch",
        "Sex and size limits protect the stock",
        "Recovery after WA stock-management overhaul",
      ],
      taste: [
        "Delicate sweetness — a different fish from mud crab",
        "Iconic spaghetti granchio sauce",
        "Best simply boiled and shared at the table",
      ],
    },
    seasonality: seasons([12, 1, 2, 3, 4], [11, 5], []),
    cookingNotes: [
      { method: "Boiled whole", text: "Salted boiling water, 10 min for 500g, cool, crack at the table." },
      { method: "Spaghetti granchio", text: "Picked meat, garlic + chilli + tomato + parsley." },
      { method: "Crab cakes", text: "Picked meat, panko, mayo, pan-fry 3 min each side." },
      { method: "Asian curry", text: "Halved, in a coconut-curry, served with rice and bread." },
    ],
    labelingHint: 'Ask for "Australian Blue Swimmer Crab" — never anonymous &ldquo;crab meat&rdquo;.',
    citationIds: ["safs-2024"],
    signatureRegions: ["sa", "wa", "nsw", "spencer-gulf", "fremantle"],
    related: {
      areas: ["sa", "wa", "nsw", "spencer-gulf", "fremantle"],
      industry: ["commercial-fishing"],
      compare: ["blue-swimmer-aus-vs-imported"],
    },
  },
  {
    slug: "spanner-crab",
    name: "Spanner Crab",
    scientific: "Ranina ranina",
    tagline: "The frog-like delicacy",
    sourcing: "wild",
    emoji: "🦀",
    cls: "sc-lobster",
    tags: ["MSC Certified", "Net-caught", "Niche Premium"],
    summary:
      "Bright orange, frog-shaped, and astonishingly sweet — Australia's spanner crab fishery (mainly QLD and NSW) is MSC-certified and globally unique.",
    flavour: "Light, sweet, almost lobster-like — fine, delicate flesh",
    nutrition: [
      { name: "Protein", aus: 20.2, imp: 17.6, max: 24, unit: "g" },
      { name: "Selenium", aus: 49, imp: 32, max: 70, unit: "µg" },
      { name: "Zinc", aus: 4.0, imp: 2.8, max: 6, unit: "mg" },
      { name: "Omega-3 Fatty Acids", aus: 420, imp: 260, max: 700, unit: "mg" },
      { name: "Vitamin B12", aus: 7.0, imp: 4.8, max: 10, unit: "µg" },
    ],
    importedFrom: "Generally not imported — Australia produces most of the global supply",
    importedRisks: [
      "Imported &lsquo;spanner crab&rsquo; products are extremely rare and origin-uncertain",
      "Most imported &lsquo;crab meat&rsquo; tins are different species entirely",
    ],
    whyAustralian: {
      health: [
        "Premium clean protein with strong B12 and zinc",
        "Wild, no farming exposure",
        "Caught alive — peak nutrient retention",
      ],
      economy: [
        "Coffs Coast and southern QLD fleet specialty",
        "Premium domestic market (Sydney, Melbourne)",
        "Significant export to Asia",
      ],
      environment: [
        "MSC-certified fishery",
        "Net-caught with low impact",
        "Stock-status reports show sustainable harvest",
      ],
      taste: [
        "Considered Australia's most underrated crab",
        "Sweet, almost lobster-like flesh",
        "Distinctive orange shell makes for spectacular plating",
      ],
    },
    seasonality: seasons([3, 4, 5, 6, 7, 8, 9, 10], [2, 11], []),
    cookingNotes: [
      { method: "Steamed", text: "Whole, 8 min, served with lemon and aioli." },
      { method: "Asian curry", text: "Halved, coconut + galangal + lime leaf, 6 min." },
      { method: "Crab toast", text: "Picked meat on toasted brioche with whipped butter and chives." },
      { method: "Spanner crab linguine", text: "Garlic + chilli + parsley + olive oil — minimal interference." },
    ],
    labelingHint: 'Look for "Australian Spanner Crab" with MSC blue tick.',
    citationIds: ["msc-wrl-2000", "safs-2024"],
    signatureRegions: ["qld", "nsw", "coffs-coast", "moreton-bay"],
    related: {
      areas: ["qld", "nsw", "coffs-coast", "moreton-bay"],
      industry: ["commercial-fishing"],
      compare: ["spanner-crab-aus-vs-imported"],
    },
  },
  {
    slug: "scallops",
    name: "Australian Scallops",
    scientific: "Pecten fumatus / Amusium balloti",
    tagline: "Meaty Bass Strait beauties",
    sourcing: "wild",
    emoji: "🐚",
    cls: "sc-oyster",
    tags: ["Wild Caught", "Bass Strait", "Quota Managed"],
    summary:
      "Australia's commercial scallop catch comes mainly from Bass Strait (TAS/VIC) and Hervey Bay (QLD). Roe-on, premium, and very different from imported product.",
    flavour: "Sweet, milky, briny — the roe is part of the experience",
    nutrition: [
      { name: "Protein", aus: 17.8, imp: 15.2, max: 22, unit: "g" },
      { name: "Selenium", aus: 38, imp: 26, max: 60, unit: "µg" },
      { name: "Vitamin B12", aus: 1.6, imp: 1.0, max: 3, unit: "µg" },
      { name: "Omega-3 Fatty Acids", aus: 380, imp: 240, max: 700, unit: "mg" },
      { name: "Iron", aus: 2.4, imp: 1.6, max: 4, unit: "mg" },
    ],
    importedFrom: "Japan, China, USA, Peru — often roe-off and water-injected",
    importedRisks: [
      "Imported scallops often water-injected (sodium tripolyphosphate) — fake weight",
      "Roe typically removed for export — texture compromised",
      "Frozen-thawed product loses sweetness rapidly",
    ],
    whyAustralian: {
      health: [
        "Roe-on Australian scallops retain natural sweetness and nutrients",
        "No water-injection or phosphate additives",
        "Pristine cold Bass Strait waters",
      ],
      economy: [
        "Bass Strait dredge fleet (TAS/VIC) supports many regional jobs",
        "Hervey Bay saucer-scallop fishery key to QLD coast",
        "Premium market for restaurant suppliers",
      ],
      environment: [
        "Stock-status assessed every two years",
        "Closed seasons protect spawning",
        "Hervey Bay quota-managed dredge fishery",
      ],
      taste: [
        "Roe-on is the proper way to eat them",
        "Sweet, milky flesh — best raw or barely seared",
        "Nothing imported comes close",
      ],
    },
    seasonality: seasons([4, 5, 6, 7, 8, 9, 10], [3, 11], []),
    cookingNotes: [
      { method: "Sashimi", text: "Slice raw, dress with citrus + sea salt + olive oil." },
      { method: "Pan-sear", text: "Bone-dry, hot pan, 60 sec each side, butter + lemon to finish." },
      { method: "Carpaccio", text: "Paper-thin, lemon + olive oil + capers + chives." },
      { method: "Asian-style", text: "Steamed in shell, hot peanut oil + soy + spring onion." },
    ],
    labelingHint: 'Look for "Australian Roe-on Scallops" or "Bass Strait Scallops" — never water-injected.',
    citationIds: ["safs-2024", "fsanz-residues"],
    signatureRegions: ["tas", "vic", "qld", "bass-strait", "hervey-bay"],
    related: {
      areas: ["tas", "vic", "qld", "bass-strait", "hervey-bay"],
      industry: ["commercial-fishing"],
      compare: ["scallops-aus-vs-imported"],
    },
  },
  {
    slug: "calamari",
    name: "Southern Calamari",
    scientific: "Sepioteuthis australis",
    tagline: "The premium squid",
    sourcing: "wild",
    emoji: "🦑",
    cls: "sc-oyster",
    tags: ["Wild Caught", "Hand-jigged", "Premium"],
    summary:
      "Australia's southern calamari (squid) is hand-jigged from coastal waters across SA, VIC, and TAS. Prized over imported squid for its tender flesh and clean flavour.",
    flavour: "Tender, sweet, light brine — vastly superior to imported squid",
    nutrition: [
      { name: "Protein", aus: 18.4, imp: 15.8, max: 22, unit: "g" },
      { name: "Selenium", aus: 44, imp: 30, max: 70, unit: "µg" },
      { name: "Omega-3 Fatty Acids", aus: 540, imp: 320, max: 800, unit: "mg" },
      { name: "Vitamin B12", aus: 1.3, imp: 0.9, max: 3, unit: "µg" },
      { name: "Copper", aus: 1.9, imp: 1.4, max: 3, unit: "mg" },
    ],
    importedFrom: "China, Vietnam, Thailand, India",
    importedRisks: [
      "Imported squid often bleached or chemically tenderised",
      "Mass-produced rings are typically lower-grade species",
      "Frozen-thawed cycles ruin tender hand-jigged textures",
    ],
    whyAustralian: {
      health: [
        "Hand-jigged — no chemical treatment",
        "Pristine cold-water flesh",
        "Strong protein, selenium, and copper content",
      ],
      economy: [
        "Important small-boat hand-jigging sector",
        "Spencer Gulf, Port Phillip, and Tasmanian coast fleets",
        "Premium pricing supports family-scale operators",
      ],
      environment: [
        "Hand-jigged — zero bycatch and minimal disturbance",
        "Fast-growing species with healthy stock",
        "Targeted harvest with small, selective gear",
      ],
      taste: [
        "Astonishing tenderness vs frozen imported squid",
        "Sweet, clean — great raw, seared, or grilled",
        "The benchmark calamari salt-and-pepper",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      { method: "Salt and pepper", text: "Cornflour-dusted rings, deep-fry 90 sec, sea salt + chilli + spring onion." },
      { method: "Sashimi", text: "Cleaned tube, score the inside, slice thin — soy + ginger + sesame." },
      { method: "Char-grilled", text: "Whole tubes, hot grill 60 sec each side, lemon + chilli + parsley." },
      { method: "Stuffed and braised", text: "Tube stuffed with rice + herbs, braise in tomato sauce 30 min." },
    ],
    labelingHint: 'Ask for "Australian Southern Calamari" — frozen rings are usually imported.',
    citationIds: ["safs-2024"],
    signatureRegions: ["sa", "vic", "tas", "spencer-gulf", "port-phillip-bay"],
    related: {
      areas: ["sa", "vic", "tas", "spencer-gulf", "port-phillip-bay"],
      industry: ["commercial-fishing"],
      compare: ["calamari-aus-vs-imported"],
    },
  },
  {
    slug: "octopus",
    name: "Australian Octopus",
    scientific: "Octopus pallidus / Octopus tetricus",
    tagline: "Pot-caught Australian",
    sourcing: "wild",
    emoji: "🐙",
    cls: "sc-oyster",
    tags: ["Wild Caught", "Pot-caught", "Premium"],
    summary:
      "Pale and Gloomy octopus species are pot-caught off TAS, VIC, and SA. Australian product is fresher, less-processed, and far superior to imported tenderised octopus.",
    flavour: "Tender, mineral, ocean-rich — completely different from frozen imported product",
    nutrition: [
      { name: "Protein", aus: 19.0, imp: 16.4, max: 24, unit: "g" },
      { name: "Selenium", aus: 50, imp: 32, max: 70, unit: "µg" },
      { name: "Iron", aus: 4.1, imp: 2.6, max: 6, unit: "mg" },
      { name: "Vitamin B12", aus: 18.0, imp: 13.0, max: 24, unit: "µg" },
      { name: "Copper", aus: 2.5, imp: 1.7, max: 3, unit: "mg" },
    ],
    importedFrom: "Spain, Morocco, China, Vietnam",
    importedRisks: [
      "Often tenderised mechanically or chemically",
      "Long transit destroys natural texture",
      "Origin and species often unverifiable",
    ],
    whyAustralian: {
      health: [
        "Astonishing B12 and iron content",
        "Wild — no farming or chemical exposure",
        "Lean protein with strong copper and selenium",
      ],
      economy: [
        "Important to TAS and VIC small-fleet operators",
        "Pot fishery supports owner-operator businesses",
        "Niche premium market for restaurants",
      ],
      environment: [
        "Pot-caught — near-zero bycatch",
        "Species-selective gear",
        "Stocks are short-lived and resilient to fishing pressure",
      ],
      taste: [
        "Tender when cooked correctly (slow-braised or grilled)",
        "Mineral ocean flavour — distinctive",
        "Iconic charcoal-grilled with paprika and lemon",
      ],
    },
    seasonality: seasons([], [], []),
    cookingNotes: [
      { method: "Slow-braised", text: "1.5h in white wine + bay + garlic, then char-grill briefly." },
      { method: "Char-grilled", text: "Pre-cooked, finish on hot grill, dress with smoked paprika + lemon + olive oil." },
      { method: "Carpaccio", text: "Cooked, sliced paper-thin, citrus + olive oil + capers." },
      { method: "Greek-style", text: "Braise in red wine + tomato + cinnamon, serve with rice." },
    ],
    labelingHint: 'Ask for "Australian Octopus" — many restaurants and retailers serve imported.',
    citationIds: ["safs-2024"],
    signatureRegions: ["tas", "vic", "sa", "bass-strait", "port-phillip-bay"],
    related: {
      areas: ["tas", "vic", "sa", "bass-strait", "port-phillip-bay"],
      industry: ["commercial-fishing"],
      compare: ["octopus-aus-vs-imported"],
    },
  },
  {
    slug: "sardines",
    name: "Australian Sardines",
    scientific: "Sardinops sagax",
    tagline: "The omega-3 powerhouse",
    sourcing: "wild",
    emoji: "🐟",
    cls: "sc-tuna",
    tags: ["Wild Caught", "Sustainable", "Omega-3 Bomb"],
    summary:
      "The Australian Sardine fishery is one of the country's largest by volume — wild-purse-seined off SA. A nutrient-dense, sustainable, low-cost fish.",
    flavour: "Rich, oily, ocean-salty — the original anchovy alternative",
    nutrition: [
      { name: "Omega-3 Fatty Acids", aus: 2200, imp: 1700, max: 3000, unit: "mg" },
      { name: "Protein", aus: 24.6, imp: 22.0, max: 28, unit: "g" },
      { name: "Vitamin D", aus: 9.4, imp: 6.2, max: 15, unit: "µg" },
      { name: "Selenium", aus: 52, imp: 36, max: 70, unit: "µg" },
      { name: "Calcium", aus: 380, imp: 240, max: 500, unit: "mg" },
    ],
    importedFrom: "Morocco, Portugal, Spain, Peru (often tinned)",
    importedRisks: [
      "Imported tinned sardines vary in oil quality and salt content",
      "Long transit means oxidation of delicate omega-3",
      "Variable origin verification",
    ],
    whyAustralian: {
      health: [
        "Among the highest omega-3 fish per dollar in Australia",
        "Bone-in (in tin) means strong calcium too",
        "Low-mercury — safe for daily eating",
      ],
      economy: [
        "Largest single Australian wild-catch by volume",
        "Port Lincoln purse-seine fleet",
        "Underpins SA's tuna ranching industry too (feed source)",
      ],
      environment: [
        "Fast-growing forage species — highly resilient",
        "MSC-aligned management",
        "Purse-seine is selective for the target school",
      ],
      taste: [
        "Rich, oily, distinctive — nothing else like it",
        "Iconic char-grilled whole over coals",
        "Pristine fresh sardines beat anything tinned",
      ],
    },
    seasonality: seasons([1, 2, 3, 11, 12], [4, 10], []),
    cookingNotes: [
      { method: "Char-grilled whole", text: "Salted, hot grill, 90 sec each side, lemon + olive oil." },
      { method: "Pan-fried fillets", text: "Skin-on, dust in semolina, 60 sec each side." },
      { method: "Pasta with sardines", text: "Sicilian-style: fennel + raisins + anchovy + breadcrumbs." },
      { method: "Escabeche", text: "Pan-fry, marinate in vinegar + onion + bay overnight." },
    ],
    labelingHint: 'Look for "Australian Sardines" — fresh from Port Lincoln when in season.',
    citationIds: ["safs-2024", "heart-foundation-omega3"],
    signatureRegions: ["sa", "port-lincoln", "great-australian-bight"],
    related: {
      areas: ["sa", "port-lincoln", "great-australian-bight"],
      industry: ["commercial-fishing"],
      compare: ["sardines-aus-vs-imported"],
    },
  },
];

/* OYSTER VARIETIES — used in /species/oysters sub-grid */
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
import { speciesDeep } from "./species-deep";

/**
 * Merge the Phase-B deep-data overlay for this species (if any) into
 * the base species object. Fields set on the base species object take
 * precedence — the overlay only fills undefined fields. This means
 * future migration of overlay → base record is a no-op.
 */
function withDeep(s: Species): Species {
  const deep = speciesDeep[s.slug];
  if (!deep) return s;
  return {
    ...deep,
    ...s, // base wins
    // merge arrays where base is undefined
    productionHistory: s.productionHistory ?? deep.productionHistory,
    gear: s.gear ?? deep.gear,
    supplyChain: s.supplyChain ?? deep.supplyChain,
    lookAlikes: s.lookAlikes ?? deep.lookAlikes,
    keyOperators: s.keyOperators ?? deep.keyOperators,
    history: s.history ?? deep.history,
    mediaWatch: s.mediaWatch ?? deep.mediaWatch,
    stockStatus: s.stockStatus ?? deep.stockStatus,
    mercury: s.mercury ?? deep.mercury,
    antibiotics: s.antibiotics ?? deep.antibiotics,
    priceRange: s.priceRange ?? deep.priceRange,
    regulations: s.regulations ?? deep.regulations,
  };
}

export const speciesBySlug = (slug: Slug): Species | undefined => {
  const s = species.find((x) => x.slug === slug);
  return s ? withDeep(s) : undefined;
};

export const allSpeciesSlugs = (): Slug[] => species.map((s) => s.slug);
