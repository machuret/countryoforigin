export type FaqEntry = {
  q: string;
  a: string;
  citationIds?: string[];
  category: "buying" | "labels" | "health" | "sustainability" | "industry" | "rules-2026";
};

export const faqs: FaqEntry[] = [
  // Buying
  {
    category: "buying",
    q: "How do I know if a fish is actually Australian?",
    a: "Look for 'Product of Australia' on the package, or — at fishmongers and restaurants — ask where the fish was caught or farmed. From 1 July 2026, the country of origin must be on the menu for cooked seafood too.",
    citationIds: ["info-standard-2025", "coolfi-standard"],
  },
  {
    category: "buying",
    q: "Why is imported seafood often cheaper?",
    a: "Lower wages, larger scale, fewer biosecurity requirements, and (often) bulk frozen freight. Australian product carries higher labour and standards costs but tends to be fresher and traceable.",
    citationIds: ["abs-seafood-imports-66pc"],
  },
  {
    category: "buying",
    q: "What share of seafood eaten in Australia is imported?",
    a: "About 66%. The share is highest in cooked/value-added products (battered fillets, tinned tuna, frozen prawns).",
    citationIds: ["abs-seafood-imports-66pc"],
  },
  {
    category: "buying",
    q: "Where can I find lists of Australian-only fishmongers?",
    a: "Our /find-australian page collects scripts to use, label clues to spot, and apps that help. From 1 July 2026 the new Cool-Fi cooked-seafood Country of Origin Information Standard will make it far easier — fishmongers, takeaways and restaurants must display whether seafood is Australian, imported, or mixed.",
    citationIds: ["coolfi-standard", "info-standard-2025"],
  },

  // Labels
  {
    category: "labels",
    q: "What does 'Made in Australia from imported ingredients' mean for seafood?",
    a: "It means the product was substantially processed in Australia — but the seafood itself was caught or farmed elsewhere. It is the weakest origin claim allowed by law.",
    citationIds: ["industry-dept-cool", "info-standard-2025"],
  },
  {
    category: "labels",
    q: "What changes on 1 July 2026?",
    a: "Cooked-seafood Country of Origin Information Standard ('Cool-Fi') begins. Fishmongers and restaurants must show whether cooked seafood (e.g. fish & chips) is Australian, imported, or mixed.",
    citationIds: ["coolfi-standard"],
  },
  {
    category: "labels",
    q: "How common is seafood mislabelling in Australia?",
    a: "DNA studies have found 11–34% of fish at retail and foodservice is mislabelled, mostly substituting cheap imports for premium Australian species like snapper and flathead.",
    citationIds: ["amcs-dna", "oceana-mislabelling"],
  },
  {
    category: "labels",
    q: "What is the Australian Fish Names Standard?",
    a: "AFNS is a mandatory FSANZ-incorporated standard that prescribes one approved trade name per species. It prevents 'snapper' from being applied to cheaper imported species.",
    citationIds: ["aff-fish-names-standard"],
  },

  // Health
  {
    category: "health",
    q: "Is Australian seafood high in mercury?",
    a: "Most popular Australian species are low or very low. FSANZ publishes a regularly updated Mercury in Fish guide; high-mercury species like shark and ray are flagged for pregnant women.",
    citationIds: ["fsanz-mercury-2024"],
  },
  {
    category: "health",
    q: "How much omega-3 is in Australian seafood?",
    a: "Salmon, sardines, kingfish and tuna are excellent omega-3 sources. The Heart Foundation recommends 2–3 servings per week.",
    citationIds: ["heart-foundation-omega3", "fsanz-nutrient-tables"],
  },
  {
    category: "health",
    q: "Are antibiotics used in Australian aquaculture?",
    a: "Use is tightly controlled by Veterinary Health Plans. Routine prophylactic dosing is banned. Detection in retail product is rare under FSANZ residue testing.",
    citationIds: ["fsanz-antibiotic-residues"],
  },

  // Sustainability
  {
    category: "sustainability",
    q: "How sustainable are Australian fisheries?",
    a: "The biennial Status of Australian Fish Stocks (SAFS) shows the majority of Australian stocks are 'sustainable' or 'recovering'. Australian fisheries science is regarded as world-leading.",
    citationIds: ["safs-2024"],
  },
  {
    category: "sustainability",
    q: "Is salmon farming bad for the environment?",
    a: "It has impacts (nutrient loading, sea-lice, marine debris) and is closely scrutinised in Tasmania. Major producers hold ASC certification; Macquarie Harbour remains contested.",
    citationIds: ["guardian-salmon-tas", "tas-salmon-industry"],
  },
  {
    category: "sustainability",
    q: "What is MSC certification?",
    a: "Marine Stewardship Council — global standard for wild fisheries. Western Rock Lobster (since 2000), Northern Prawn Fishery, spanner crab and Coorong Indigenous fishery are MSC-certified.",
    citationIds: ["msc-registry", "msc-wrl-2000"],
  },
  {
    category: "sustainability",
    q: "Why do imports have a higher carbon footprint?",
    a: "Most imports involve sea or air freight thousands of kilometres, and many farmed-shrimp imports carry historical mangrove-conversion footprints.",
    citationIds: ["icct-air-freight", "fao-mangroves"],
  },

  // Industry
  {
    category: "industry",
    q: "How big is Australia's seafood industry?",
    a: "Around $3B GVP (wild + farmed) and 17,000+ direct jobs across catch, processing and logistics. Aquaculture has overtaken wild catch by value.",
    citationIds: ["frdc-economic-contribution", "abares-fisheries-stats"],
  },
  {
    category: "industry",
    q: "How important is Indigenous fishing?",
    a: "Critical — culturally, economically and in stewardship terms. Native title rights, ranger programs and a growing commercial sector underpin Sea Country management.",
    citationIds: ["nailsma", "native-title-1993", "akiba-2013"],
  },
  {
    category: "industry",
    q: "What is the Sydney Fish Market?",
    a: "Pyrmont, NSW — the southern hemisphere's largest seafood auction, handling around 13,000 tonnes per year and a primary domestic price-discovery venue.",
    citationIds: ["sfm-pricing"],
  },

  // 1 July 2026 rules
  {
    category: "rules-2026",
    q: "Does my fish-and-chip shop need to change menus from 1 July 2026?",
    a: "Yes. The Cool-Fi standard requires cooked seafood at fishmongers, takeaways, restaurants and clubs to display country of origin (Australian, Imported, or Mixed).",
    citationIds: ["coolfi-standard"],
  },
  {
    category: "rules-2026",
    q: "What are the penalties for non-compliance?",
    a: "Misleading origin claims can attract penalties under Australian Consumer Law. ACCC has prosecuted retailers and restaurants for false origin claims in the past.",
    citationIds: ["acl-schedule-2", "accc-food-labelling"],
  },
  {
    category: "rules-2026",
    q: "Do exporters need to comply?",
    a: "Yes — separate to Cool-Fi, exports require AQIS-issued health certificates and country-of-origin documentation accepted by destination authorities.",
    citationIds: ["aqis-export-controls"],
  },
];
