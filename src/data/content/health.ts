/**
 * Editorial / encyclopaedic content for /health.
 *
 * Per-nutrient explanatory copy is sourced from the NHMRC Nutrient
 * Reference Values for Australia and New Zealand and the FSANZ
 * Australian Food Composition Database. Numeric per-species values
 * are NOT in this file — they live on each Species record's
 * `nutrition[]` array and are surfaced at the page level by walking
 * `data/species/records.ts`.
 */

export type HealthNutrient = {
  /** Must match the `name` on a Species nutrition entry */
  key: string;
  /** Display title */
  title: string;
  /** What it does in the body */
  role: string;
  /** Why seafood is the right vehicle for it (in Australia specifically) */
  whyAustralia: string;
  /** Display unit when no per-species data is shown */
  unit: string;
  /** Citation ids backing the claims above */
  citationIds: string[];
};

export const healthNutrients: HealthNutrient[] = [
  {
    key: "Omega-3 Fatty Acids",
    title: "Omega-3 (EPA + DHA)",
    role:
      "Long-chain omega-3 fatty acids EPA and DHA are linked to lower cardiovascular risk and better neurological development. Most Australians consume well below the Heart Foundation's 2-3 servings of oily fish per week.",
    whyAustralia:
      "Cold-water Australian species like Tasmanian Atlantic salmon, sardines and mackerel accumulate higher EPA + DHA per gram than equivalent imports — both because of the colder feeding waters and shorter freezer-to-plate cycles preserve the unsaturated fats.",
    unit: "mg",
    citationIds: ["heart-foundation-omega3", "who-omega3"],
  },
  {
    key: "Protein",
    title: "Complete Protein",
    role:
      "Seafood delivers all nine essential amino acids in a highly bio-available form, with less saturated fat than beef or pork at the same protein density.",
    whyAustralia:
      "Australian wild and farmed species typically test slightly higher in raw protein per 100g — partly because tighter quality controls reduce the water-injection (sodium tripolyphosphate) that artificially inflates the weight of imports.",
    unit: "g",
    citationIds: ["fsanz-nutrient-tables", "nhmrc-dietary-guidelines"],
  },
  {
    key: "Selenium",
    title: "Selenium",
    role:
      "Essential trace mineral for thyroid function, antioxidant defence and immune response. The NHMRC adult RDI is 70 µg/day for men, 60 µg/day for women.",
    whyAustralia:
      "Selenium concentrates in muscle tissue of marine fish and is one of the few nutrients where Australian feed-water levels meaningfully outperform global averages.",
    unit: "µg",
    citationIds: ["fsanz-nutrient-tables", "nhmrc-dietary-guidelines"],
  },
  {
    key: "Vitamin B12",
    title: "Vitamin B12",
    role:
      "Critical for nerve function, red blood cell formation and DNA synthesis. B12 is found almost exclusively in animal foods — and seafood is the most concentrated source per kilojoule.",
    whyAustralia:
      "Tasmanian salmon, sardines and bivalve molluscs (oysters, mussels) deliver an entire daily B12 requirement in a single 100g serve — significantly more than red meat or eggs.",
    unit: "µg",
    citationIds: ["fsanz-nutrient-tables"],
  },
  {
    key: "Iodine",
    title: "Iodine",
    role:
      "Required for thyroid hormone production. Iodine deficiency affects up to one in four Australian women of childbearing age — Australian soils are iodine-poor, making marine sources critical.",
    whyAustralia:
      "Saltwater seafood is the single best dietary source of iodine in the Australian diet. Native Sydney Rock Oysters and seaweed-fed species concentrate higher levels than imported equivalents grown on grain-based feed.",
    unit: "µg",
    citationIds: ["nhmrc-dietary-guidelines", "fsanz-nutrient-tables"],
  },
  {
    key: "Vitamin D",
    title: "Vitamin D",
    role:
      "Necessary for calcium absorption and bone density. Australia has surprisingly high rates of vitamin D deficiency — particularly in winter, in shift workers, and in older adults.",
    whyAustralia:
      "Wild-caught oily fish (salmon, sardines, mackerel) are among the few non-fortified dietary sources of vitamin D. Australian wild-catch typically tests higher than farmed imports raised under controlled lighting.",
    unit: "µg",
    citationIds: ["nhmrc-dietary-guidelines"],
  },
  {
    key: "Zinc",
    title: "Zinc",
    role:
      "Drives over 300 enzymatic reactions, supports immune function and wound healing. The NHMRC RDI is 14 mg/day for men, 8 mg/day for women.",
    whyAustralia:
      "Australian Sydney Rock Oysters are arguably the most concentrated dietary zinc source in the world — a single 100g serve exceeds the adult daily target several times over.",
    unit: "mg",
    citationIds: ["fsanz-nutrient-tables", "nhmrc-dietary-guidelines"],
  },
  {
    key: "Iron",
    title: "Iron",
    role:
      "Critical for oxygen transport and energy. Heme iron from animal sources is more bio-available than plant iron — and Australian shellfish (mussels, abalone, oysters) sit alongside red meat as the most concentrated dietary forms.",
    whyAustralia:
      "Shellfish farmed in Australian estuarine waters concentrate measurably higher iron than imports grown in lower-mineral feed lakes.",
    unit: "mg",
    citationIds: ["fsanz-nutrient-tables", "nhmrc-dietary-guidelines"],
  },
  {
    key: "Copper",
    title: "Copper",
    role:
      "Co-factor for iron metabolism and connective-tissue formation. Often overlooked but routinely under-consumed by adults on grain-heavy diets.",
    whyAustralia:
      "Australian crustaceans (rock lobster, prawns, mud crab) and oysters are among the highest copper-density foods in the Australian diet.",
    unit: "mg",
    citationIds: ["fsanz-nutrient-tables"],
  },
];

/**
 * Headline AU vs imported wins that aren't strictly nutrients but
 * affect health outcomes (mercury exposure, antibiotic residues).
 */
export const healthSafetyClaims = [
  {
    title: "Lower mercury exposure",
    body:
      "Imported tuna, shark and large pelagic species often come from older, larger animals farther up the food chain — which means higher methylmercury concentrations. Australian Southern Bluefin Tuna is ranched from juveniles fed on clean sardines, dramatically reducing the mercury load.",
    citationIds: ["fsanz-mercury-2024", "fda-mercury-fish"],
  },
  {
    title: "Antibiotic-free aquaculture",
    body:
      "Australian aquaculture standards prohibit hormonal growth promoters and place severe restrictions on antibiotic use — Tasmanian salmon farms operate under formal Veterinary Health Plans. Imports from major exporters routinely test positive for residues at levels that wouldn't pass Australian inspection.",
    citationIds: ["fsanz-antibiotic-residues", "guardian-salmon-tas"],
  },
  {
    title: "No water-injection adulteration",
    body:
      "Sodium tripolyphosphate water injection is standard practice in many imported white-fish products to inflate weight. The Australian Food Standards Code prohibits the practice on whole and minimally-processed seafood — meaning more protein per gram in Australian product.",
    citationIds: ["fsanz-residues", "choice-prawn-test"],
  },
  {
    title: "Shorter freezer-to-plate window",
    body:
      "Most Australian seafood reaches retail within 2-3 days of harvest. Imported equivalents typically log 14-21 days from harvest to local store. Long freezer cycles oxidise omega-3 fatty acids and degrade the volatile compounds that drive seafood flavour.",
    citationIds: ["editorial-supply-chain", "icct-air-freight"],
  },
];
