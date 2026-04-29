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

export type Species = Entity & {
  scientific?: string;
  sourcing: SourcingType;
  emoji: string;
  cls: string;
  tags: string[];
  flavour?: string;
  nutrition: NutBar[];

  /* PHASE 2 — DEEP CONTENT */
  /** Where the imported version typically comes from */
  importedFrom?: string;
  /** Documented risks of the imported version (bullets) */
  importedRisks?: string[];
  /** 4-pillar Why-Australian breakdown for THIS species */
  whyAustralian?: WhyAustralianBreakdown;
  /** 12-month seasonality grid (Jan→Dec) */
  seasonality?: SeasonalityMonth[];
  /** Cooking methods + notes */
  cookingNotes?: CookingNote[];
  /** "Look for…" hint shown to the consumer */
  labelingHint?: string;
  /** Citation ids referenced on the species page (live in citations.ts) */
  citationIds?: string[];
  /** Strongest geographic associations — slugs of areas */
  signatureRegions?: Slug[];
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
export const speciesBySlug = (slug: Slug): Species | undefined =>
  species.find((s) => s.slug === slug);

export const allSpeciesSlugs = (): Slug[] => species.map((s) => s.slug);
