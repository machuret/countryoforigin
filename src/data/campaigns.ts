import type { Entity, Slug } from "./types";

/**
 * Campaign content lives here so /why-australian and /risks-of-imported pages
 * can be edited without touching JSX.
 *
 * Two collections:
 *   - whyAustralianPillars (4 — health, economy, environment, taste)
 *   - riskPages           (5 — food fraud, antibiotics, labour, environment, transport)
 *
 * All numerical claims should reference an id in src/data/citations.ts.
 */

export type CampaignSection = {
  heading: string;
  /** One paragraph */
  body: string;
  /** Optional bullets — can include inline citation markers like [c:fsanz-mercury-2024] */
  bullets?: string[];
  /** Optional pull-stat */
  stat?: { value: string; label: string };
};

export type CampaignPage = Entity & {
  /** Big hero stat shown in the campaign hero */
  heroStat: { value: string; label: string };
  /** Optional theme so visual treatment varies */
  theme: "ocean" | "navy" | "coral" | "default";
  /** Body sections, rendered in order */
  sections: CampaignSection[];
  /** Closing CTA */
  cta?: { headline: string; body: string; href: string; label: string };
  /** Citation ids referenced by this page (used by /research) */
  citationIds?: string[];
};

/* -------------------------------------------------------------- */
/* WHY AUSTRALIAN — 4 PILLAR PAGES                                 */
/* -------------------------------------------------------------- */

export const whyAustralianPillars: CampaignPage[] = [
  {
    slug: "health",
    name: "Health & Nutrition",
    tagline: "Pillar 1 of 4",
    summary:
      "Australian seafood is harvested from cleaner waters, reaches you faster, and is regulated under some of the world's strictest food-safety standards. Here's the evidence.",
    theme: "ocean",
    heroStat: {
      value: "1.7×",
      label: "More omega-3 in Australian barramundi than imported equivalents",
    },
    sections: [
      {
        heading: "More omega-3, every time",
        body:
          "Cold-water and clean-water fish accumulate more long-chain omega-3 fatty acids (EPA + DHA) — the type associated with cardiovascular and neurological health. Tasmanian Atlantic salmon, Spencer Gulf prawns, and Northern Australian barramundi consistently outperform imported equivalents on omega-3 per 100g.",
        bullets: [
          "Tasmanian salmon: ~2,700mg omega-3 per 100g vs ~2,100mg in Norwegian/Chilean equivalents",
          "Australian barramundi: ~820mg vs ~480mg in Thai/Vietnamese imports",
          "The Heart Foundation recommends 2–3 servings of oily fish per week",
        ],
      },
      {
        heading: "Less mercury, more trust",
        body:
          "Mercury accumulates in long-lived predatory fish. Imported tuna products tend to come from older, larger animals with higher methylmercury concentrations. Australian Southern Bluefin Tuna is ranched from juveniles fed clean sardines — drastically reducing mercury load.",
        bullets: [
          "FSANZ Australian Total Diet Study confirms low mercury in Australian-caught species",
          "Pregnant women and young children are advised to choose lower-mercury options",
          "Imported shark/tuna products account for most mercury exposure in Australian diets",
        ],
        stat: { value: "Low", label: "Mercury level in Australian-ranched Southern Bluefin Tuna" },
      },
      {
        heading: "Antibiotic-free, additive-free",
        body:
          "Australian aquaculture standards prohibit hormones and tightly restrict antibiotics. Australian processors do not use water-injection (sodium tripolyphosphate) on whole fish — a practice common overseas to inflate weight and mask freshness loss.",
        bullets: [
          "Tasmanian salmon farms operate under strict Veterinary Health Plans",
          "Sulphites (a common allergen used to preserve imported prawns) require mandatory labelling in Australia",
          "FSANZ random surveillance regularly detects banned residues in imported product",
        ],
      },
      {
        heading: "Faster from boat to plate",
        body:
          "Most Australian seafood reaches retail within 2–3 days of harvest. Imported equivalents typically take 14–21 days from net to shelf — frozen, thawed, and refrozen along the way. That gap shows up in nutrient retention, texture, and flavour.",
        stat: { value: "2–3 days", label: "Tasmanian salmon from harvest to Sydney plate" },
      },
    ],
    cta: {
      headline: "See the science species by species",
      body: "Every species page shows the per-100g nutrition delta against imported.",
      href: "/species",
      label: "Browse species profiles",
    },
    citationIds: ["fsanz-tds", "heart-foundation-omega3", "fsanz-mercury-2024"],
  },
  {
    slug: "economy",
    name: "Economy & Community",
    tagline: "Pillar 2 of 4",
    summary:
      "Choosing Australian seafood directly supports coastal economies, regional jobs, and the Indigenous Sea Country economy. Here's how the dollars flow.",
    theme: "navy",
    heroStat: {
      value: "$3B+",
      label: "Annual gross value of Australian seafood production",
    },
    sections: [
      {
        heading: "Regional jobs depend on it",
        body:
          "Seafood is the economic backbone of dozens of Australian coastal towns. From Port Lincoln (tuna ranching) to Geraldton (rock lobster), Eden (offshore trawl) to Broome (pearling), entire local economies are built on the industry.",
        bullets: [
          "~17,000 direct jobs in Australian seafood (catch + aquaculture + processing)",
          "Multiplier of 3–4× when supply chain, retail, and hospitality jobs are included",
          "Many Aboriginal communities operate or co-manage commercial fisheries",
        ],
        stat: { value: "17,000+", label: "Direct jobs in Australian seafood" },
      },
      {
        heading: "Indigenous Sea Country economy",
        body:
          "Indigenous-owned commercial fisheries — pearling, mud crab, trochus, beche-de-mer, finfish — are now a meaningful part of the Australian seafood economy. Choosing Australian product supports the long-overdue economic recognition of Sea Country.",
        bullets: [
          "Native Title Act 1993 recognises customary fishing rights",
          "100+ Indigenous Ranger groups co-manage fisheries",
          "Significant Indigenous-owned operations across NT, Cape York, Torres Strait, Kimberley",
        ],
      },
      {
        heading: "Where your dollar goes",
        body:
          "When you buy imported seafood, the bulk of the price flows offshore — to the catching vessel, the processor, the freight chain, and the importer. When you buy Australian, you keep that value in regional Australia: at the dock, at the cooperative, at the family processor in Lakes Entrance or Geraldton.",
        bullets: [
          "$1 spent locally typically generates $3–4 in regional economic activity",
          "Imported seafood at supermarket scale flows largely to multinational distributors",
          "Local restaurants buying local strengthen tourism and food culture",
        ],
      },
      {
        heading: "Exports build the brand",
        body:
          "Australia exports premium product (rock lobster, tuna, abalone, salmon) to Asia and the US. The premiums earned overseas fund the science, biosecurity, and quota programs that protect the resource for everyone — locals included.",
      },
    ],
    cta: {
      headline: "Find a region near you",
      body: "Browse 50+ fishing regions and see who's behind your dinner.",
      href: "/areas",
      label: "Explore states & regions",
    },
    citationIds: ["abares-fisheries-stats", "frdc-employment", "native-title-1993"],
  },
  {
    slug: "environment",
    name: "Environment & Sustainability",
    tagline: "Pillar 3 of 4",
    summary:
      "Australia operates among the world's most rigorously managed fisheries, with extensive marine protected areas and science-based quotas. The environmental gap to imported seafood is enormous.",
    theme: "ocean",
    heroStat: {
      value: "13.3M km²",
      label: "Australia's marine jurisdiction — among the largest on Earth",
    },
    sections: [
      {
        heading: "Quota-based, science-led",
        body:
          "Almost every Australian commercial fishery operates under Total Allowable Catch (TAC) or Individual Transferable Quota (ITQ) systems. AFMA's Status of Australian Fish Stocks reports — published every two years — track every major stock against transparent benchmarks.",
        bullets: [
          "100% of Commonwealth-managed fisheries operate under quota",
          "Stock-status reports published every two years (DAFF)",
          "Recovery plans triggered automatically when biomass falls below thresholds",
          "Western Rock Lobster — world's first MSC-certified fishery (2000)",
        ],
      },
      {
        heading: "Massive marine protection",
        body:
          "Australia has built one of the world's largest networks of marine protected areas — protecting habitat, breeding aggregations, and biodiversity that imported-seafood-supplying nations often do not. Roughly 45% of Australia's marine jurisdiction lies within reserves.",
        stat: { value: "~45%", label: "Of Australian waters within Marine Protected Areas" },
      },
      {
        heading: "Low-bycatch methods",
        body:
          "Australian fisheries have invested heavily in selective gear. Pot fisheries (lobster, crab) have near-zero bycatch. The Northern Prawn Fishery uses Bycatch Reduction Devices and Turtle Excluder Devices. Long-line shark mitigation systems are world-leading.",
        bullets: [
          "Pot fisheries: near-zero bycatch by design",
          "Mandatory TEDs and BRDs in tropical prawn trawls",
          "Vessel Monitoring Systems (VMS) on all Commonwealth fleets",
        ],
      },
      {
        heading: "Lower carbon footprint",
        body:
          "Australian seafood typically travels under 1,000km from harvest to plate. Imported salmon, prawns, and tuna often travel 8,000–15,000km — frequently by air freight, the highest-emission mode of food transport in existence.",
        stat: { value: "<1,000km", label: "Typical Australian seafood transport distance" },
      },
    ],
    cta: {
      headline: "Read the risks of imported seafood",
      body:
        "From bottom trawling to mangrove destruction — see what international fisheries look like.",
      href: "/risks-of-imported/environment",
      label: "Imported environmental risks",
    },
    citationIds: ["safs-2024", "msc-wrl-2000", "daff-mpa"],
  },
  {
    slug: "taste",
    name: "Taste & Quality",
    tagline: "Pillar 4 of 4",
    summary:
      "Freshness is flavour. Australian seafood reaches you days, not weeks, after harvest — and we have native species you can't get anywhere else on Earth.",
    theme: "coral",
    heroStat: { value: "Native", label: "Sydney Rock Oyster — found nowhere else on Earth" },
    sections: [
      {
        heading: "The science of fresh",
        body:
          "Once a fish dies, ATP breaks down, lipids oxidise, and texture changes within hours. The shorter the chain from boat to plate, the better the fish eats. Australian seafood routinely arrives at retail within 2–3 days of harvest. Imported equivalents are often 2–3 weeks old.",
        bullets: [
          "Rigor mortis windows make 0–4°C cold chain critical",
          "Lipid oxidation accelerates with every freeze-thaw cycle",
          "Sashimi-grade tuna requires harvesting and chilling within minutes",
        ],
      },
      {
        heading: "Species you can't get anywhere else",
        body:
          "Some of Australia's most prized seafood is endemic — found in our waters and nowhere else. The Sydney Rock Oyster (Saccostrea glomerata) is native only to NSW estuaries. Spencer Gulf King Prawns are widely judged the world's finest. Southern Bluefin Tuna is the global benchmark for premium sashimi tuna.",
        bullets: [
          "Sydney Rock Oyster — endemic to NSW & southern QLD",
          "Spencer Gulf King Prawn — globally regarded as the world's finest prawn",
          "Greenlip Abalone — world's largest wild fishery is Australian",
          "Southern Bluefin Tuna — premium sashimi standard",
        ],
      },
      {
        heading: "Chefs who source local say so",
        body:
          "Australia's leading restaurants — from Saint Peter (Josh Niland) to Tetsuya's, Cutler &amp; Co, and Ester — increasingly source 100% local. The flavour, transparency, and provenance story are too important to compromise.",
        stat: { value: "100%", label: "Australian sourcing at the country's leading seafood restaurants" },
      },
      {
        heading: "How to taste the difference",
        body:
          "Buy a Sydney Rock Oyster next to a Pacific oyster. Try Tasmanian salmon next to a Norwegian fillet. Cook a Spencer Gulf prawn next to an imported one. The difference in texture, flavour intensity, and clean finish is unmistakable.",
      },
    ],
    cta: {
      headline: "Pick a species and taste it tonight",
      body: "Each species profile includes flavour notes and how to cook it.",
      href: "/species",
      label: "Browse species",
    },
  },
];

/* -------------------------------------------------------------- */
/* RISKS OF IMPORTED — 5 COUNTER-PAGES                             */
/* -------------------------------------------------------------- */

export const riskPages: CampaignPage[] = [
  {
    slug: "food-fraud",
    name: "Food Fraud & Mislabelling",
    tagline: "Risk 1 of 5",
    summary:
      "Globally, one in five seafood samples is mislabelled. Imported product is the highest-risk category. The 2026 Australian labelling standard exists for a reason.",
    theme: "coral",
    heroStat: { value: "1 in 5", label: "Global seafood samples found to be mislabelled" },
    sections: [
      {
        heading: "What &lsquo;snapper&rsquo; really means",
        body:
          "DNA tests of imported seafood — performed across the US, EU, Asia, and Australia — repeatedly find mislabelling rates of 20–40%. Cheaper species are routinely sold as more expensive ones. Imported &lsquo;snapper&rsquo; might be tilapia. Imported &lsquo;tuna&rsquo; might be escolar (which causes diarrhoea).",
        bullets: [
          "Oceana's global meta-analysis: 1 in 5 seafood samples mislabelled",
          "Australian Marine Conservation Society DNA testing has flagged Australian retail as well — predominantly on imported product",
          "Higher-priced names (snapper, grouper) are the most-substituted",
        ],
      },
      {
        heading: "Why the Australian system catches more",
        body:
          "Australian commercial fisheries operate under VMS-tracked, batch-traceable systems all the way to the processor. Every Australian-caught fish has a vessel, harvest date, and processing batch. Imported supply chains often lose this chain at the customs interface.",
      },
      {
        heading: "From 1 July 2026, you'll know",
        body:
          "The Information Standard 2025 makes A/I/M labelling mandatory for hospitality. If a menu doesn't show country of origin, ask. If staff can't tell you, walk.",
      },
    ],
    cta: {
      headline: "Read the labelling law",
      body: "How A/I/M works and what to ask before you order.",
      href: "/labelling",
      label: "Information Standard 2025",
    },
    citationIds: ["oceana-mislabelling", "amcs-dna"],
  },
  {
    slug: "antibiotics",
    name: "Antibiotics & Chemical Residues",
    tagline: "Risk 2 of 5",
    summary:
      "Many imported seafood products are produced in systems that rely on antibiotics, antifungals, and preservatives banned or restricted in Australia. Random surveillance regularly catches them at the border.",
    theme: "default",
    heroStat: { value: "Banned in AU", label: "Antibiotics still common in some imported aquaculture" },
    sections: [
      {
        heading: "Aquaculture without limits",
        body:
          "South-east Asian shrimp and Chinese tilapia industries have repeatedly been flagged by health authorities for use of antibiotics including chloramphenicol, nitrofurans, and malachite green — all banned for food production in Australia. Surveillance by FSANZ and DAFF Imported Food Inspection routinely detects residues.",
        bullets: [
          "Chloramphenicol — banned in food production worldwide; still detected in imports",
          "Nitrofurans — banned, residues remain detectable for years",
          "Malachite green — antifungal used in fish farming, carcinogenic concerns",
        ],
      },
      {
        heading: "Sulphites on imported prawns",
        body:
          "Sulphites are commonly used to preserve imported prawns and prevent black-spot. They're a major allergen — Australian law requires them to be labelled. If a menu doesn't disclose, you can't know.",
      },
      {
        heading: "What's in the water",
        body:
          "Many imported aquaculture systems operate in heavily polluted waterways — heavy metals, industrial runoff, untreated effluent. Australian aquaculture sites are independently audited for water quality and located in Class A waters.",
      },
    ],
    cta: {
      headline: "Pick clean Australian alternatives",
      body: "Every species page lists the imported risks side-by-side.",
      href: "/species",
      label: "Browse species",
    },
    citationIds: ["daff-imported-food", "fsanz-residues"],
  },
  {
    slug: "labour",
    name: "Labour Exploitation",
    tagline: "Risk 3 of 5",
    summary:
      "Investigations by AP, Greenpeace, the ILO, and the US State Department have repeatedly documented forced labour and modern slavery in the global seafood supply chain.",
    theme: "navy",
    heroStat: { value: "Documented", label: "Forced labour cases in Thai, Indonesian, and Chinese fleets" },
    sections: [
      {
        heading: "The 2015 AP investigation",
        body:
          "An Associated Press investigation traced shrimp peeled by enslaved workers in Thailand into the supply chains of major US and global supermarkets. The story won a Pulitzer Prize and triggered industry reform — but the structural problem remains.",
        bullets: [
          "AP investigation traced supply chains from forced-labour camps to Western retail shelves",
          "Thai government has improved law and enforcement but enforcement gaps remain",
          "ILO and US Department of State Trafficking-in-Persons reports continue to flag the sector",
        ],
      },
      {
        heading: "Distant-water fleets",
        body:
          "Distant-water fishing fleets — operating far from port for months or years — have been repeatedly documented by Greenpeace, the EJF, and Outlaw Ocean Project to use forced labour, debt bondage, and abuse of migrant crew.",
      },
      {
        heading: "Why Australian product is different",
        body:
          "Australian fisheries operate under domestic labour law. Crew are typically Australian or visa-holding workers under Fair Work standards. Vessels are inspected. The structural risk that defines parts of the global fleet does not exist here.",
      },
    ],
    cta: {
      headline: "Choose product without the human cost",
      body: "Every Australian comparison defaults to safer labour standards.",
      href: "/compare",
      label: "Browse comparisons",
    },
    citationIds: ["ap-investigation-2015", "us-state-tip", "greenpeace-distant-water"],
  },
  {
    slug: "environment",
    name: "Environmental Destruction Overseas",
    tagline: "Risk 4 of 5",
    summary:
      "Cyanide fishing on coral reefs. Mangroves cleared for prawn ponds. Bottom trawling on unsurveyed seamounts. Choosing imported seafood often means subsidising practices Australia banned decades ago.",
    theme: "ocean",
    heroStat: { value: "35%+", label: "Of mangroves lost globally — much to shrimp aquaculture" },
    sections: [
      {
        heading: "Mangroves vs shrimp ponds",
        body:
          "Tropical shrimp aquaculture in SE Asia, Central America, and Africa has been one of the largest single drivers of mangrove loss — destroying coastal nurseries, increasing storm-surge risk, and emitting massive amounts of stored carbon.",
        bullets: [
          "FAO estimates 30%+ global mangrove loss since 1980 — much driven by aquaculture",
          "Coastal nurseries lost reduce ALL nearby fisheries productivity",
          "Mangrove carbon emissions when destroyed are 3–5× higher than tropical forest",
        ],
      },
      {
        heading: "Cyanide & dynamite fishing",
        body:
          "Coral reef fish for the live-fish-trade and aquarium trade are still routinely caught using cyanide in parts of SE Asia. Dynamite fishing destroys reefs in seconds. Australian reef fisheries (coral trout, red emperor) operate under line-caught quotas.",
      },
      {
        heading: "Unregulated bottom trawling",
        body:
          "Some imported seafood comes from deep-sea trawl fisheries operating on under-surveyed seamounts and sensitive habitats — fisheries that could not operate under Australian environmental law. Orange roughy stocks are a global cautionary tale.",
      },
    ],
    cta: {
      headline: "Australia did the hard work — choose accordingly",
      body: "The environmental case for Australian seafood is overwhelming.",
      href: "/why-australian/environment",
      label: "Why Australian: environment",
    },
    citationIds: ["fao-mangroves", "wwf-shrimp", "greenpeace-cyanide"],
  },
  {
    slug: "transport",
    name: "The Carbon & Freshness Cost",
    tagline: "Risk 5 of 5",
    summary:
      "Imported seafood typically travels 8,000–15,000km to reach you, often by air freight — the highest-emission food transport mode in existence — and arrives weeks old.",
    theme: "default",
    heroStat: { value: "8,000–15,000km", label: "Typical distance imported seafood travels to AU" },
    sections: [
      {
        heading: "Air freight is the worst",
        body:
          "Air freight emits roughly 50× the CO₂ per tonne-km of sea freight. Premium imported seafood (sashimi tuna, lobster, fresh salmon) is typically air-freighted to maintain freshness — at enormous emissions cost.",
      },
      {
        heading: "Frozen-thawed-refrozen",
        body:
          "Cheap imported seafood that travels by sea is frozen, thawed, processed, refrozen, shipped, thawed at retail. Each cycle damages texture, releases moisture, and triggers lipid oxidation. The product on the shelf is a shadow of what it could be.",
      },
      {
        heading: "Australian: typically 2–3 days, locally caught",
        body:
          "Most Australian seafood travels under 1,000km, by truck or short flight. The freshness advantage is enormous. Tasmanian salmon harvested Tuesday morning is on Sydney plates Wednesday night.",
      },
    ],
    cta: {
      headline: "Find local — wherever you are",
      body: "Browse 50+ Australian fishing regions and see what's caught nearby.",
      href: "/areas",
      label: "States & regions",
    },
    citationIds: ["icct-air-freight"],
  },
];

export const whyPillarBySlug = (slug: Slug) =>
  whyAustralianPillars.find((p) => p.slug === slug);
export const allWhyPillarSlugs = (): Slug[] =>
  whyAustralianPillars.map((p) => p.slug);

export const riskPageBySlug = (slug: Slug) => riskPages.find((p) => p.slug === slug);
export const allRiskPageSlugs = (): Slug[] => riskPages.map((p) => p.slug);
