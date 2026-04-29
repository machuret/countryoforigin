import type { CampaignPage } from "./types";

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
