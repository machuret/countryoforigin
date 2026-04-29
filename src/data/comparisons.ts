import type { Entity, Slug } from "./types";

export type Metric = {
  label: string;
  aus: string;
  imp: string;
  /** True when the Australian value is the better outcome */
  ausGood: boolean;
};

export type Comparison = Entity & {
  /** Slug of the species this comparison is for (1-1) */
  speciesSlug: Slug;
  aus: { name: string; origin: string; country: string };
  imp: { name: string; origin: string; country: string };
  metrics: Metric[];
  ausScore: string;
  impScore: string;
};

export const comparisons: Comparison[] = [
  {
    slug: "barramundi-aus-vs-imported",
    name: "Australian Barramundi vs Imported",
    speciesSlug: "barramundi",
    tagline: "Comparison",
    summary:
      "Side-by-side: Northern Australian wild & farmed barramundi against barramundi imported from Thailand and Vietnam.",
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
  {
    slug: "salmon-aus-vs-norway",
    name: "Tasmanian Salmon vs Norwegian Salmon",
    speciesSlug: "salmon",
    summary:
      "Tasmanian Atlantic salmon vs imported Norwegian and Chilean salmon — freshness, antibiotic use, and supply chain.",
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
  {
    slug: "prawns-aus-vs-asia",
    name: "Spencer Gulf King Prawns vs Imported Prawns",
    speciesSlug: "prawns",
    summary:
      "Australian wild King Prawns from Spencer Gulf vs farmed imported prawns from Vietnam, India, and China.",
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
  {
    slug: "tuna-southern-bluefin-vs-imported",
    name: "Southern Bluefin Tuna vs Imported Tuna",
    speciesSlug: "tuna",
    summary:
      "Wild & ranched Southern Bluefin from the Bight vs imported Yellowfin and Bigeye from various Pacific and Indian Ocean fleets.",
    aus: { name: "Southern Bluefin Tuna", origin: "Southern Ocean", country: "Australia" },
    imp: { name: "Imported Tuna", origin: "Pacific / Indian Ocean", country: "Various" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "1,800mg", imp: "1,200mg", ausGood: true },
      { label: "Mercury Level", aus: "Low-Moderate", imp: "Moderate-High", ausGood: true },
      { label: "Quota Management", aus: "CCSBT regulated", imp: "Variable", ausGood: true },
      { label: "Fishing Method", aus: "Pole & line / ranching", imp: "Often long-line", ausGood: true },
      { label: "Bycatch Rate", aus: "Very Low", imp: "Often High", ausGood: true },
      { label: "Product Traceability", aus: "Vessel to plate", imp: "Limited", ausGood: true },
      { label: "Price per 100g", aus: "~$6.00", imp: "~$2.80", ausGood: false },
    ],
    ausScore: "Australian tuna scores 8.7/10 — world-leading quota management ensures stock health.",
    impScore: "Imported tuna scores 5.5/10 — sustainability and mercury levels are major concerns.",
  },
  {
    slug: "oysters-aus-vs-imported",
    name: "Australian Oysters vs Imported Oysters",
    speciesSlug: "oysters",
    summary:
      "Native Sydney Rock and farmed Pacific oysters from Australian waters vs imported oysters from France, Japan, and the USA.",
    aus: { name: "Sydney Rock / Pacific Oyster", origin: "NSW & SA Estuaries", country: "Australia" },
    imp: { name: "Imported Oysters", origin: "France / Japan / USA", country: "Europe / Asia / N. America" },
    metrics: [
      { label: "Zinc (per 100g)", aus: "38mg", imp: "22mg", ausGood: true },
      { label: "Native to Australia", aus: "Yes (Sydney Rock)", imp: "No", ausGood: true },
      { label: "Time to Table", aus: "1–3 days", imp: "7–21 days", ausGood: true },
      { label: "Water Quality Testing", aus: "Weekly", imp: "Varies by country", ausGood: true },
      { label: "Ecosystem Service", aus: "Water filtering", imp: "N/A (imported)", ausGood: true },
      { label: "Biosecurity Risk", aus: "None", imp: "Pathogen risk", ausGood: true },
      { label: "Price per dozen", aus: "~$18", imp: "~$28", ausGood: true },
    ],
    ausScore: "Sydney Rock Oysters score 9.8/10 — unique endemic species with unmatched freshness.",
    impScore: "Imported oysters score 6.0/10 — freshness and food safety risks increase with distance.",
  },
  {
    slug: "abalone-aus-vs-imported",
    name: "Australian Greenlip Abalone vs Imported",
    speciesSlug: "abalone",
    summary:
      "Wild dive-caught Australian Greenlip vs farmed and imported abalone from China, Korea, and Mexico.",
    aus: { name: "Australian Greenlip Abalone", origin: "Tas, Vic, SA, WA", country: "Australia" },
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
  {
    slug: "mussels-aus-vs-imported",
    name: "Australian Blue Mussels vs Imported",
    speciesSlug: "mussels",
    summary:
      "Rope-grown Australian Blue Mussels vs imported mussels from New Zealand, Chile, and Spain.",
    aus: { name: "Australian Blue Mussels", origin: "Tas, Vic, SA", country: "Australia" },
    imp: { name: "Imported Mussels", origin: "NZ / Chile / Spain", country: "Various" },
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
  {
    slug: "rocklobster-aus-vs-imported",
    name: "Southern Rock Lobster vs Imported Lobster",
    speciesSlug: "rocklobster",
    summary:
      "Wild-caught Southern Rock Lobster from Tasmania, SA, and Victoria vs imported lobster from Canada, USA, and Cuba.",
    aus: { name: "Southern Rock Lobster", origin: "Tas, SA, Vic", country: "Australia" },
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
  {
    slug: "western-rocklobster-aus-vs-imported",
    name: "Western Rock Lobster vs Imported Lobster",
    speciesSlug: "western-rock-lobster",
    summary:
      "MSC-certified Western Rock Lobster (the world's first MSC fishery) vs imported lobster.",
    aus: { name: "Western Rock Lobster", origin: "Western Australia", country: "Australia" },
    imp: { name: "Imported Lobster", origin: "Canada / USA / Cuba", country: "N. America / Caribbean" },
    metrics: [
      { label: "MSC Certified Since", aus: "2000", imp: "Variable", ausGood: true },
      { label: "Protein (per 100g)", aus: "20.2g", imp: "18.9g", ausGood: true },
      { label: "Wild vs. Farmed", aus: "Wild-caught (pots)", imp: "Wild-caught", ausGood: true },
      { label: "Quota Management", aus: "ITQ", imp: "Variable", ausGood: true },
      { label: "Bycatch Rate", aus: "Very low (pot fishery)", imp: "Variable", ausGood: true },
      { label: "Live Trade Standards", aus: "World-leading", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$110", imp: "~$70", ausGood: false },
    ],
    ausScore:
      "Western Rock Lobster scores 9.6/10 — global benchmark for sustainable wild-capture lobster.",
    impScore:
      "Imported lobster scores 6.5/10 — freshness varies, especially for frozen or long-haul live shipments.",
  },
  {
    slug: "pearls-aus-vs-imported",
    name: "Australian South Sea Pearls vs Imported Cultured Pearls",
    speciesSlug: "pearls",
    summary:
      "Pinctada maxima South Sea Pearls farmed off Broome vs imported Akoya, Tahitian, and Chinese freshwater pearls.",
    aus: { name: "Australian South Sea Pearls", origin: "Broome, WA", country: "Australia" },
    imp: { name: "Imported Cultured Pearls", origin: "Japan / China / French Polynesia", country: "Various" },
    metrics: [
      { label: "Pearl Species", aus: "Pinctada maxima", imp: "Akoya / freshwater", ausGood: true },
      { label: "Average Size", aus: "10–20mm", imp: "5–9mm (Akoya)", ausGood: true },
      { label: "Farming Standards", aus: "Strict environmental approvals", imp: "Variable", ausGood: true },
      { label: "Pearl Meat Edible", aus: "Yes — sought-after delicacy", imp: "Variable", ausGood: true },
      { label: "Heritage", aus: "Multicultural & Indigenous", imp: "Various", ausGood: true },
      { label: "Price per pearl", aus: "From ~$500", imp: "From ~$50 (freshwater)", ausGood: false },
    ],
    ausScore:
      "Australian South Sea Pearls score 9.7/10 — the world's most prized cultured pearls.",
    impScore:
      "Imported cultured pearls score 6.5/10 — broad range of quality and origin.",
  },
];

export const comparisonBySlug = (slug: Slug): Comparison | undefined =>
  comparisons.find((c) => c.slug === slug);
export const allComparisonSlugs = (): Slug[] => comparisons.map((c) => c.slug);
