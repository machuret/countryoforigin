export type MythEntry = {
  myth: string;
  fact: string;
  category: "health" | "sustainability" | "industry" | "labels";
  citationIds?: string[];
};

export const myths: MythEntry[] = [
  {
    category: "health",
    myth: "All fish has dangerous levels of mercury.",
    fact: "Most popular Australian seafood — salmon, prawns, oysters, barramundi, sardines, whiting — is low or very low in mercury. FSANZ flags only a handful of long-lived predators (shark, ray, swordfish, billfish) for limited intake during pregnancy.",
    citationIds: ["fsanz-mercury-2024"],
  },
  {
    category: "health",
    myth: "Farmed salmon is full of antibiotics.",
    fact: "In Tasmania, salmon antibiotic use is governed by Veterinary Health Plans and prophylactic dosing is banned. Detection in retail product is rare under FSANZ residue testing.",
    citationIds: ["fsanz-antibiotic-residues", "tas-salmon-industry"],
  },
  {
    category: "health",
    myth: "Frozen seafood is always lower quality.",
    fact: "For most species (especially prawns and tuna), commercial blast-freezing within hours of catch preserves quality far better than 'fresh' product that spent a week travelling. The issue is freshness chain, not freezing.",
  },
  {
    category: "health",
    myth: "You shouldn't eat seafood more than once a week.",
    fact: "The Heart Foundation, NHMRC and WHO all recommend at least 2–3 servings of fish per week for omega-3 intake.",
    citationIds: ["heart-foundation-omega3", "nhmrc-dietary-guidelines"],
  },

  {
    category: "sustainability",
    myth: "Australian fisheries are over-fished.",
    fact: "The biennial SAFS report finds the great majority of Australian stocks are 'sustainable' or 'recovering' — Australia is among the world's best-managed fishing nations.",
    citationIds: ["safs-2024"],
  },
  {
    category: "sustainability",
    myth: "All farmed shrimp is bad for mangroves.",
    fact: "Historically, large-scale shrimp pond expansion in SE Asia caused mangrove loss. Current best practice uses already-cleared land and certified standards (BAP, ASC). Mangrove-conversion remains a real but reduced concern.",
    citationIds: ["fao-mangroves", "wwf-shrimp"],
  },
  {
    category: "sustainability",
    myth: "Tasmanian salmon is ASC-certified, so there's nothing to worry about.",
    fact: "Certification helps but doesn't eliminate concerns about Macquarie Harbour oxygen levels, marine debris and sea-lice. Public scrutiny in TAS is genuine and ongoing.",
    citationIds: ["guardian-salmon-tas"],
  },
  {
    category: "sustainability",
    myth: "Tuna is always over-fished.",
    fact: "Southern Bluefin Tuna was severely depleted but has been classified 'recovering' under CCSBT since 2014. Yellowfin and skipjack stocks vary by ocean and fleet.",
    citationIds: ["safs-2024", "afma-harvest-strategies"],
  },

  {
    category: "industry",
    myth: "Australia barely fishes — most seafood is imported.",
    fact: "Both are true: Australia produces $3B GVP, and 66% of seafood eaten here is imported. The local industry is significant but consumption is far higher than production.",
    citationIds: ["frdc-economic-contribution", "abs-seafood-imports-66pc"],
  },
  {
    category: "industry",
    myth: "Indigenous fishing means just customary catch.",
    fact: "Native title now supports commercial Indigenous fisheries (Akiba 2013). Indigenous-owned operators contribute $50M+ annually and manage huge tracts of Sea Country.",
    citationIds: ["akiba-2013", "nailsma"],
  },
  {
    category: "industry",
    myth: "Aquaculture and wild-catch are at war.",
    fact: "They are complementary segments — aquaculture provides reliable volume (salmon, oysters, barra, mussels), wild-catch provides species and seasonality you can't farm.",
  },

  {
    category: "labels",
    myth: "'Made in Australia' means the seafood is Australian.",
    fact: "It only means the product was processed here. The seafood itself can be 100% imported. Look for 'Product of Australia' for the strongest claim.",
    citationIds: ["industry-dept-cool", "info-standard-2025"],
  },
  {
    category: "labels",
    myth: "Restaurants already have to disclose seafood origin.",
    fact: "Not until 1 July 2026. The Cool-Fi standard then requires fishmongers, takeaways, restaurants and clubs to display origin (Australian / Imported / Mixed) for cooked seafood.",
    citationIds: ["coolfi-standard"],
  },
  {
    category: "labels",
    myth: "If it says 'snapper' in a fish & chip shop, it's snapper.",
    fact: "Multiple DNA studies have shown 'snapper' is one of the most-mislabelled categories. Genuine snapper is protected under AFNS — but only if the seller uses the correct name.",
    citationIds: ["amcs-dna", "aff-fish-names-standard"],
  },
];
