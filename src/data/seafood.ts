export type SeafoodMetric = {
  label: string;
  aus: string;
  imp: string;
  ausGood: boolean;
};

export type SeafoodComparison = {
  aus: { name: string; origin: string; country: string };
  imp: { name: string; origin: string; country: string };
  metrics: SeafoodMetric[];
  ausScore: string;
  impScore: string;
};

export type FishKey =
  | "barramundi"
  | "salmon"
  | "prawns"
  | "tuna"
  | "oysters"
  | "abalone"
  | "mussels"
  | "rocklobster";

export const fishData: Record<FishKey, SeafoodComparison> = {
  barramundi: {
    aus: { name: "Australian Barramundi", origin: "Northern Australia", country: "Australia" },
    imp: { name: "Imported Barramundi", origin: "Thailand / Vietnam", country: "Asia" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "820mg", imp: "480mg", ausGood: true },
      { label: "Mercury Level", aus: "Very Low", imp: "Moderate", ausGood: true },
      { label: "Protein (per 100g)", aus: "22.4g", imp: "19.8g", ausGood: true },
      { label: "Avg. Transport Distance", aus: "~400km", imp: ">8,000km", ausGood: true },
      { label: "Antibiotic Treatment", aus: "None", imp: "Common", ausGood: true },
      { label: "Environmental Standard", aus: "Tier 1", imp: "Variable", ausGood: true },
      { label: "Price per 100g", aus: "~$3.50", imp: "~$2.10", ausGood: false },
    ],
    ausScore: "Australian barramundi scores 9.2/10 for nutrition, sustainability, and food safety.",
    impScore: "Imported product scores 5.8/10 due to lower standards and longer supply chains.",
  },
  salmon: {
    aus: { name: "Tasmanian Salmon", origin: "Tasmania, Australia", country: "Australia" },
    imp: { name: "Imported Salmon", origin: "Norway / Chile", country: "Europe / S. America" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "2,700mg", imp: "2,100mg", ausGood: true },
      { label: "Days from Harvest to Store", aus: "2–3 days", imp: "14–21 days", ausGood: true },
      { label: "Protein (per 100g)", aus: "24.1g", imp: "22.3g", ausGood: true },
      { label: "Antibiotic Use", aus: "Minimal", imp: "Higher rates", ausGood: true },
      { label: "Colour Additives", aus: "None required", imp: "Often added", ausGood: true },
      { label: "Carbon Footprint", aus: "Low", imp: "High (air freight)", ausGood: true },
      { label: "Price per 100g", aus: "~$4.20", imp: "~$3.00", ausGood: false },
    ],
    ausScore: "Tasmanian salmon scores 9.1/10 — world-class freshness and ASC-certified sustainability.",
    impScore: "Imported salmon scores 6.4/10 — quality varies significantly by origin and handling.",
  },
  prawns: {
    aus: { name: "Spencer Gulf King Prawns", origin: "South Australia", country: "Australia" },
    imp: { name: "Imported Prawns", origin: "Vietnam / India / China", country: "Asia" },
    metrics: [
      { label: "Protein (per 100g)", aus: "18.6g", imp: "17.2g", ausGood: true },
      { label: "Sodium Level", aus: "Natural", imp: "Often elevated", ausGood: true },
      { label: "Preservatives Added", aus: "None", imp: "Sulphites common", ausGood: true },
      { label: "Antibiotic Residues", aus: "Zero tolerance", imp: "Sometimes detected", ausGood: true },
      { label: "Farming Standards", aus: "Strict regulation", imp: "Variable", ausGood: true },
      { label: "Traceability", aus: "Full chain", imp: "Limited", ausGood: true },
      { label: "Price per 100g", aus: "~$5.00", imp: "~$2.50", ausGood: false },
    ],
    ausScore: "Spencer Gulf King Prawns score 9.5/10 — globally recognised as among the world's finest.",
    impScore: "Imported prawns score 5.2/10 — significant variation in quality, additives, and ethics.",
  },
  tuna: {
    aus: { name: "Southern Bluefin Tuna", origin: "Southern Ocean", country: "Australia" },
    imp: { name: "Imported Tuna", origin: "Pacific / Indian Ocean", country: "Various" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "1,800mg", imp: "1,200mg", ausGood: true },
      { label: "Mercury Level", aus: "Low-Moderate", imp: "Moderate-High", ausGood: true },
      { label: "Quota Management", aus: "CCSBT regulated", imp: "Variable", ausGood: true },
      { label: "Fishing Method", aus: "Pole & line", imp: "Often long-line", ausGood: true },
      { label: "Bycatch Rate", aus: "Very Low", imp: "Often High", ausGood: true },
      { label: "Product Traceability", aus: "Vessel to plate", imp: "Limited", ausGood: true },
      { label: "Price per 100g", aus: "~$6.00", imp: "~$2.80", ausGood: false },
    ],
    ausScore: "Australian tuna scores 8.7/10 — world-leading quota management ensures stock health.",
    impScore: "Imported tuna scores 5.5/10 — sustainability and mercury levels are major concerns.",
  },
  oysters: {
    aus: { name: "Sydney Rock Oyster", origin: "NSW & SA Estuaries", country: "Australia" },
    imp: { name: "Imported Oysters", origin: "France / Japan / USA", country: "Europe / Asia" },
    metrics: [
      { label: "Zinc (per 100g)", aus: "38mg", imp: "22mg", ausGood: true },
      { label: "Native to Australia", aus: "Yes — endemic", imp: "No", ausGood: true },
      { label: "Time to Table", aus: "1–3 days", imp: "7–21 days", ausGood: true },
      { label: "Water Quality Testing", aus: "Weekly", imp: "Varies by country", ausGood: true },
      { label: "Ecosystem Service", aus: "Water filtering", imp: "N/A (imported)", ausGood: true },
      { label: "Biosecurity Risk", aus: "None", imp: "Pathogen risk", ausGood: true },
      { label: "Price per dozen", aus: "~$18", imp: "~$28", ausGood: true },
    ],
    ausScore: "Sydney Rock Oysters score 9.8/10 — unique endemic species with unmatched freshness.",
    impScore: "Imported oysters score 6.0/10 — freshness and food safety risks increase with distance.",
  },
  abalone: {
    aus: { name: "Australian Greenlip Abalone", origin: "Tasmania, Vic, SA, WA", country: "Australia" },
    imp: { name: "Imported Abalone", origin: "China / Korea / Mexico", country: "Asia / Americas" },
    metrics: [
      { label: "Protein (per 100g)", aus: "17.1g", imp: "15.2g", ausGood: true },
      { label: "Iron (per 100g)", aus: "3.2mg", imp: "2.1mg", ausGood: true },
      { label: "Wild vs. Farmed", aus: "Wild-caught divers", imp: "Often farmed", ausGood: true },
      { label: "Sustainability Quota", aus: "TAC-managed", imp: "Often unregulated", ausGood: true },
      { label: "Traceability", aus: "Diver-to-plate", imp: "Limited", ausGood: true },
      { label: "Heavy Metals", aus: "Pristine waters", imp: "Variable", ausGood: true },
      { label: "Price per 100g", aus: "~$15.00", imp: "~$8.00", ausGood: false },
    ],
    ausScore:
      "Australian abalone scores 9.6/10 — world's largest wild fishery, dive-caught with strict quotas.",
    impScore:
      "Imported abalone scores 5.4/10 — often farmed with feed additives; many nations face stock collapse.",
  },
  mussels: {
    aus: { name: "Australian Blue Mussels", origin: "Tasmania, Victoria, SA", country: "Australia" },
    imp: { name: "Imported Mussels", origin: "New Zealand / Chile / Spain", country: "Various" },
    metrics: [
      { label: "Protein (per 100g)", aus: "11.9g", imp: "11.2g", ausGood: true },
      { label: "Omega-3 (per 100g)", aus: "700mg", imp: "550mg", ausGood: true },
      { label: "Time to Table", aus: "1–4 days", imp: "10–21 days", ausGood: true },
      { label: "Iron (per 100g)", aus: "6.7mg", imp: "5.3mg", ausGood: true },
      { label: "Farming Method", aus: "Long-line, no feed", imp: "Variable", ausGood: true },
      { label: "Carbon Footprint", aus: "Among lowest in seafood", imp: "Higher (transport)", ausGood: true },
      { label: "Price per kg", aus: "~$12", imp: "~$10", ausGood: false },
    ],
    ausScore:
      "Australian mussels score 9.4/10 — clean rope-grown protein with one of seafood's smallest footprints.",
    impScore: "Imported mussels score 6.8/10 — quality is good but freshness drops with transit.",
  },
  rocklobster: {
    aus: {
      name: "Southern Rock Lobster",
      origin: "Tasmania, SA, Victoria",
      country: "Australia",
    },
    imp: { name: "Imported Lobster", origin: "Canada / USA / Cuba", country: "N. America / Caribbean" },
    metrics: [
      { label: "Protein (per 100g)", aus: "20.5g", imp: "18.9g", ausGood: true },
      { label: "Selenium (per 100g)", aus: "75µg", imp: "55µg", ausGood: true },
      { label: "Wild vs. Farmed", aus: "Wild-caught (pots)", imp: "Wild-caught", ausGood: true },
      { label: "Quota Management", aus: "Stock-status assessed", imp: "Variable", ausGood: true },
      { label: "Live Trade Standards", aus: "World-leading", imp: "Variable", ausGood: true },
      { label: "Bycatch Rate", aus: "Very low (pot fishery)", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$120", imp: "~$70", ausGood: false },
    ],
    ausScore:
      "Southern Rock Lobster scores 9.3/10 — premium wild-caught quality with sustainable pot-fishery management.",
    impScore:
      "Imported lobster scores 6.5/10 — freshness varies, especially for frozen or long-haul live shipments.",
  },
};

export type NutBar = {
  name: string;
  aus: number;
  imp: number;
  max: number;
  unit: string;
};

export const nutData: Record<FishKey, NutBar[]> = {
  barramundi: [
    { name: "Omega-3 Fatty Acids", aus: 820, imp: 480, max: 1000, unit: "mg" },
    { name: "Protein", aus: 22.4, imp: 19.8, max: 28, unit: "g" },
    { name: "Vitamin D", aus: 6.2, imp: 4.1, max: 10, unit: "µg" },
    { name: "Selenium", aus: 38, imp: 26, max: 50, unit: "µg" },
    { name: "Iodine", aus: 44, imp: 28, max: 60, unit: "µg" },
  ],
  salmon: [
    { name: "Omega-3 Fatty Acids", aus: 2700, imp: 2100, max: 3000, unit: "mg" },
    { name: "Protein", aus: 24.1, imp: 22.3, max: 28, unit: "g" },
    { name: "Vitamin D", aus: 11, imp: 7.5, max: 15, unit: "µg" },
    { name: "Selenium", aus: 36, imp: 28, max: 50, unit: "µg" },
    { name: "Vitamin B12", aus: 3.2, imp: 2.4, max: 5, unit: "µg" },
  ],
  prawns: [
    { name: "Protein", aus: 18.6, imp: 17.2, max: 24, unit: "g" },
    { name: "Selenium", aus: 33, imp: 24, max: 50, unit: "µg" },
    { name: "Iodine", aus: 35, imp: 22, max: 60, unit: "µg" },
    { name: "Zinc", aus: 1.6, imp: 1.2, max: 3, unit: "mg" },
    { name: "Vitamin B12", aus: 1.8, imp: 1.3, max: 3, unit: "µg" },
  ],
  tuna: [
    { name: "Omega-3 Fatty Acids", aus: 1800, imp: 1200, max: 2500, unit: "mg" },
    { name: "Protein", aus: 25.4, imp: 23.6, max: 30, unit: "g" },
    { name: "Vitamin D", aus: 6.8, imp: 4.3, max: 10, unit: "µg" },
    { name: "Selenium", aus: 90, imp: 70, max: 110, unit: "µg" },
    { name: "Vitamin B12", aus: 9.4, imp: 7.1, max: 12, unit: "µg" },
  ],
  oysters: [
    { name: "Zinc (per 100g)", aus: 38, imp: 22, max: 50, unit: "mg" },
    { name: "Vitamin B12", aus: 19, imp: 14, max: 25, unit: "µg" },
    { name: "Iron", aus: 7.2, imp: 5.1, max: 10, unit: "mg" },
    { name: "Selenium", aus: 77, imp: 55, max: 100, unit: "µg" },
    { name: "Protein", aus: 9.5, imp: 8.0, max: 14, unit: "g" },
  ],
  abalone: [
    { name: "Protein", aus: 17.1, imp: 15.2, max: 22, unit: "g" },
    { name: "Iron", aus: 3.2, imp: 2.1, max: 5, unit: "mg" },
    { name: "Vitamin B12", aus: 0.7, imp: 0.5, max: 1.5, unit: "µg" },
    { name: "Selenium", aus: 45, imp: 32, max: 60, unit: "µg" },
    { name: "Magnesium", aus: 48, imp: 36, max: 70, unit: "mg" },
  ],
  mussels: [
    { name: "Omega-3 Fatty Acids", aus: 700, imp: 550, max: 900, unit: "mg" },
    { name: "Protein", aus: 11.9, imp: 11.2, max: 16, unit: "g" },
    { name: "Iron", aus: 6.7, imp: 5.3, max: 9, unit: "mg" },
    { name: "Vitamin B12", aus: 24, imp: 19, max: 30, unit: "µg" },
    { name: "Selenium", aus: 89, imp: 70, max: 110, unit: "µg" },
  ],
  rocklobster: [
    { name: "Protein", aus: 20.5, imp: 18.9, max: 25, unit: "g" },
    { name: "Selenium", aus: 75, imp: 55, max: 100, unit: "µg" },
    { name: "Vitamin B12", aus: 1.4, imp: 1.0, max: 2, unit: "µg" },
    { name: "Zinc", aus: 3.5, imp: 2.8, max: 5, unit: "mg" },
    { name: "Copper", aus: 1.6, imp: 1.2, max: 2, unit: "mg" },
  ],
};

/* OYSTER VARIETIES (for the species page sub-grid) */
export type OysterVariety = {
  key: string;
  name: string;
  scientific: string;
  origin: string;
  flavour: string;
  notes: string;
  status: "native" | "naturalised";
};

export const oysterVarieties: OysterVariety[] = [
  {
    key: "sydney-rock",
    name: "Sydney Rock Oyster",
    scientific: "Saccostrea glomerata",
    origin: "NSW & southern Queensland estuaries",
    flavour: "Sweet, creamy, mineral finish",
    notes:
      "Australia's iconic native oyster — slower-growing than Pacifics, prized for depth of flavour and resilience to estuarine conditions.",
    status: "native",
  },
  {
    key: "pacific",
    name: "Pacific Oyster",
    scientific: "Crassostrea gigas",
    origin: "Tasmania, SA, Coffin Bay",
    flavour: "Brisk, briny, cucumber-like",
    notes:
      "Introduced from Japan and now the dominant farmed species in cool southern waters; grows fast and is the basis of Coffin Bay's reputation.",
    status: "naturalised",
  },
  {
    key: "angasi",
    name: "Native Angasi Oyster",
    scientific: "Ostrea angasi",
    origin: "Tasmania, SA, Victoria",
    flavour: "Rich, umami, almost mushroomy",
    notes:
      "Australia's flat oyster — once nearly lost to overharvest, now subject of restoration projects rebuilding shellfish reefs.",
    status: "native",
  },
];
