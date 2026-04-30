/**
 * =====================================================================
 * SPECIES DEEP DATA — Phase B1 rollout
 * =====================================================================
 * Per-species deep-data fields (stock status, production history,
 * mercury, antibiotics, price range, supply chain, look-alikes,
 * regulations, key operators, history, media watch).
 *
 * Structured as an overlay keyed by species slug. `speciesBySlug()`
 * in species.ts merges these fields in at runtime (see mergeDeepData
 * helper at the bottom of species.ts). This keeps individual species
 * objects in species.ts small and each species' deep data scoped to
 * one reviewable block here.
 *
 * Adding/editing:
 *   1. Add or edit the entry below for the species slug
 *   2. Every referenced citationId must exist in citations.ts
 *      (run `npx tsx scripts/check-citations.ts` to verify)
 *
 * Provenance:
 *   — Stock status: SAFS 2024 (primary)
 *   — Production volumes: ABARES Australian Fisheries Statistics (primary)
 *   — Mercury: FSANZ surveys (primary) or aggregated estimate (tagged)
 *   — Antibiotics: FSANZ residue surveys + DAFF imported-food inspection
 *   — Prices: editorial synthesis of Sydney Fish Market + trade sources
 *     (all dated 2026 Q1 — update quarterly)
 * =====================================================================
 */

import type {
  StockStatus,
  ProductionYear,
  GearMethod,
  MercuryData,
  AntibioticData,
  PriceRange,
  SupplyChainStep,
  LookAlike,
  Regulations,
  KeyOperator,
  HistoryEntry,
  MediaWatchEntry,
} from "./types";

export type SpeciesDeepData = {
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

export const speciesDeep: Record<string, SpeciesDeepData> = {
  /* ============================= BARRAMUNDI ============================= */
  barramundi: {
    stockStatus: {
      rating: "sustainable",
      year: 2024,
      citationId: "safs-2024",
      note: "Wild NT/QLD stocks sustainable; the vast majority of Australian supply is now farmed.",
    },
    productionHistory: [
      { year: 2019, tonnes: 9200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 9800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 10500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 11800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 12400, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Pond aquaculture", note: "Dominant supply mode — NT, QLD, NSW, VIC" },
      { method: "Sea cage", note: "Humpty Doo Barramundi, Cone Bay WA" },
      { method: "Gillnet (wild)", note: "NT coastal & riverine — Indigenous & commercial" },
      { method: "Recreational line", note: "A major recreational target across the Top End" },
    ],
    mercury: {
      aus: 0.05,
      imp: 0.11,
      unit: "mg/kg",
      citationId: "fsanz-tds",
      provenance: "primary",
      note: "Well below the 0.5 mg/kg FSANZ maximum level for fish.",
    },
    antibiotics: {
      aus: "none",
      imp: "documented",
      citationId: "daff-imported-food",
      provenance: "primary",
      note: "Australian aquaculture permits no prophylactic antibiotics in barramundi production.",
    },
    priceRange: {
      ausLow: 28,
      ausHigh: 48,
      impLow: 14,
      impHigh: 22,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Harvest (farm or wild)", days: "Day 0" },
      { step: "Processing & chill", days: "0–1" },
      { step: "Wholesale transit", days: "1–2" },
      { step: "Retail / foodservice", days: "2–4" },
      { step: "Total AUS days to plate", days: "2–4" },
    ],
    lookAlikes: [
      {
        name: "Imported basa / pangasius",
        whyConfused: "Often sold as white-fleshed 'barramundi' substitute at lower price points.",
        howToTell: "Barramundi has distinct pinkish flesh, pearlescent skin, fine scales. Basa is uniformly white, often boneless fillets only, sold frozen.",
      },
      {
        name: "Imported Nile perch",
        whyConfused: "Lates niloticus — same genus as barra; historically mislabelled.",
        howToTell: "Nile perch is almost never sold in Australia. If the label doesn't specify origin — ask.",
      },
    ],
    regulations: {
      quotaTonnes: 500,
      sizeLimit: "55cm (NT wild)",
      bagLimit: "5/day (NT recreational)",
      sourceId: "nt-fisheries",
      note: "NT wild-catch is strictly quota-managed alongside Indigenous customary fishing protections.",
    },
    keyOperators: [
      { name: "Humpty Doo Barramundi", type: "farm", region: "Northern Territory", url: "https://humptydoobarramundi.com.au/" },
      { name: "Cone Bay Ocean Barramundi", type: "farm", region: "Kimberley, WA", url: "https://mpa.com.au/" },
      { name: "Australian Barramundi Farmers Association", type: "peak-body", url: "https://www.abfa.org.au/" },
      { name: "Marine Produce Australia (MPA)", type: "processor", region: "WA" },
    ],
    history: [
      { year: 1984, note: "First successful barramundi hatchery in Cairns." },
      { year: 1993, note: "Akiba v Commonwealth line of Native Title cases begin to affirm NT Indigenous fishing rights." },
      { year: 2004, note: "Humpty Doo Barramundi established; large-scale freshwater pond farming begins." },
      { year: 2015, note: "Cone Bay sea-cage operation scales — Australia's first ocean-farmed barramundi at commercial volume." },
      { year: 2022, note: "AFS 2022 — wild NT stocks assessed sustainable." },
    ],
    mediaWatch: [
      { outlet: "ABC Rural", headline: "Aussie barramundi industry fights imported competition", year: 2024, url: "https://www.abc.net.au/news/rural/", tier: "secondary" },
    ],
  },

  /* =============================== SALMON =============================== */
  salmon: {
    stockStatus: {
      rating: "sustainable",
      year: 2024,
      citationId: "safs-2024",
      note: "All Tasmanian Atlantic salmon is farmed; regulated under strict state environmental approvals.",
    },
    productionHistory: [
      { year: 2019, tonnes: 65000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 72000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 75000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 77000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 79000, sourceId: "tas-salmon-industry", provenance: "estimate" },
    ],
    gear: [
      { method: "Sea-pen aquaculture", note: "Dominant — Macquarie Harbour, Storm Bay, Huon Estuary" },
      { method: "Hatchery & smolt production", note: "Freshwater systems in highland Tasmania" },
      { method: "Closed-containment trials", note: "Early-stage RAS (recirculating) experiments" },
    ],
    mercury: {
      aus: 0.04,
      imp: 0.05,
      unit: "mg/kg",
      citationId: "fsanz-tds",
      provenance: "primary",
      note: "Very low in both cases — typical of farmed salmonids.",
    },
    antibiotics: {
      aus: "rare",
      imp: "low",
      citationId: "fsanz-antibiotic-residues",
      provenance: "primary",
      note: "Australian producers use antibiotics only on veterinary prescription in response to specific disease events; residue monitoring is continuous.",
    },
    priceRange: {
      ausLow: 32,
      ausHigh: 45,
      impLow: 22,
      impHigh: 32,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Harvest from sea-pens", days: "Day 0" },
      { step: "Bleeding & chilling", days: "0" },
      { step: "Air/road to mainland", days: "1–2" },
      { step: "Retail / foodservice", days: "2–4" },
      { step: "Total AUS days to plate", days: "2–4" },
    ],
    lookAlikes: [
      {
        name: "Imported Norwegian / Chilean salmon",
        whyConfused: "Same species (Salmo salar). Packaging often emphasises 'Atlantic Salmon'.",
        howToTell: "Under 2016 CoOFL rules, origin must be displayed. 'Packed in Australia from imported fish' means imported flesh.",
      },
      {
        name: "Ocean Trout (Oncorhynchus mykiss)",
        whyConfused: "Also farmed in Tasmania; similar flesh colour.",
        howToTell: "Ocean trout has a pinker, softer flesh and subtler flavour. Often labelled as such — it's a premium product in its own right.",
      },
    ],
    regulations: {
      sourceId: "tas-nre-fisheries",
      note: "Tasmanian Environmental Protection Agency regulates biomass caps per lease area. Independent scientific review processes are mandatory.",
    },
    keyOperators: [
      { name: "Tassal", type: "farm", region: "Tasmania", url: "https://www.tassal.com.au/" },
      { name: "Huon Aquaculture", type: "farm", region: "Tasmania", url: "https://www.huonaqua.com.au/" },
      { name: "Petuna", type: "farm", region: "Tasmania", url: "https://www.petuna.com/" },
      { name: "Salmon Tasmania", type: "peak-body", url: "https://salmontasmania.com.au/" },
      { name: "Institute for Marine and Antarctic Studies (IMAS)", type: "research", region: "Tasmania", url: "https://www.imas.utas.edu.au/" },
    ],
    history: [
      { year: 1984, note: "First commercial Atlantic salmon eggs imported to Tasmania under strict biosecurity." },
      { year: 1986, note: "First salmon harvested from Tasmanian sea-pens." },
      { year: 2012, note: "Macquarie Harbour expansion triggers environmental concerns and reviews." },
      { year: 2021, note: "Macquarie Harbour biomass caps tightened following World Heritage Area concerns." },
      { year: 2024, note: "Storm Bay becomes the primary expansion zone with revised Environmental Impact Statements." },
    ],
    mediaWatch: [
      { outlet: "Guardian Australia", headline: "Tasmanian salmon industry under environmental pressure", year: 2024, url: "https://www.theguardian.com/australia-news", tier: "secondary" },
      { outlet: "ABC News", headline: "Macquarie Harbour salmon biomass caps", year: 2023, url: "https://www.abc.net.au/news", tier: "secondary" },
    ],
  },

  /* =============================== PRAWNS =============================== */
  prawns: {
    stockStatus: {
      rating: "sustainable",
      year: 2024,
      citationId: "safs-2024",
      note: "Spencer Gulf, Exmouth Gulf, and NPF (Banana Prawns) fisheries assessed sustainable with tight effort controls.",
    },
    productionHistory: [
      { year: 2019, tonnes: 21000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 19500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 23000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 22500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 24000, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Otter trawl (wild)", note: "Spencer Gulf, Northern Prawn Fishery, Exmouth Gulf — all with BRDs mandatory" },
      { method: "Pond aquaculture (farmed)", note: "QLD & NT — Black Tiger Prawn farms" },
    ],
    mercury: {
      aus: 0.03,
      imp: 0.04,
      unit: "mg/kg",
      citationId: "fsanz-tds",
      provenance: "primary",
      note: "Crustaceans are inherently low-mercury. Imported levels vary by species.",
    },
    antibiotics: {
      aus: "none",
      imp: "documented",
      citationId: "daff-imported-food",
      provenance: "primary",
      note: "Imported farmed prawns (Vietnam, India, Thailand) have repeatedly tested positive for enrofloxacin, nitrofurans, and chloramphenicol in Australian IFIS inspections.",
    },
    priceRange: {
      ausLow: 35,
      ausHigh: 65,
      impLow: 16,
      impHigh: 28,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Catch (trawl at sea)", days: "Day 0" },
      { step: "Freeze at sea / chill", days: "0" },
      { step: "Port unloading & grading", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail / foodservice", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3 (fresh) / frozen-at-sea (FAS)" },
    ],
    lookAlikes: [
      {
        name: "Imported Vannamei (whiteleg) prawns",
        whyConfused: "Pond-farmed in SE Asia. Visually similar once peeled.",
        howToTell: "Australian prawns are almost always sold shell-on with intact head. Imports are typically peeled, deveined, frozen IQF. Labels must state origin.",
      },
      {
        name: "Imported Black Tiger prawns",
        whyConfused: "Same species (Penaeus monodon) as farmed AUS Black Tigers.",
        howToTell: "Australian product displays origin prominently and typically sells fresh-chilled. Imported is almost always frozen.",
      },
    ],
    regulations: {
      quotaTonnes: 3000,
      sourceId: "safs-2024",
      note: "Spencer Gulf is effort-managed (limited boat-nights); NPF has fleet caps and gear restrictions. BRDs mandatory.",
    },
    keyOperators: [
      { name: "Spencer Gulf & West Coast Prawn Boat Owners Association", type: "peak-body", region: "SA", url: "https://spencergulfprawn.com.au/" },
      { name: "Australian Council of Prawn Fisheries", type: "peak-body", url: "https://acpf.com.au/" },
      { name: "Austral Fisheries", type: "processor", region: "National", url: "https://australfisheries.com.au/" },
      { name: "Mareterram", type: "processor", region: "WA (Exmouth)", url: "https://mareterram.com/" },
      { name: "Sydney Fish Market", type: "market", region: "NSW", url: "https://www.sydneyfishmarket.com.au/" },
    ],
    history: [
      { year: 1970, note: "Northern Prawn Fishery (NPF) established as Commonwealth-managed fishery." },
      { year: 1980, note: "Spencer Gulf prawn fishery begins industrial-scale trawl operations." },
      { year: 2000, note: "Bycatch Reduction Devices (BRDs) progressively mandated across all trawl fleets." },
      { year: 2012, note: "NPF achieves MSC certification for Banana Prawn components." },
      { year: 2019, note: "White spot outbreak in SE QLD ponds prompts biosecurity crackdown on imported raw prawns." },
    ],
    mediaWatch: [
      { outlet: "ABC Rural", headline: "Imported prawn biosecurity after white spot outbreak", year: 2020, url: "https://www.abc.net.au/news/rural/", tier: "secondary" },
    ],
  },

  /* ================================ TUNA ================================ */
  tuna: {
    stockStatus: {
      rating: "sustainable-rebuilding",
      year: 2024,
      citationId: "safs-2024",
      note: "Southern Bluefin Tuna has been rebuilding since historic lows; CCSBT quota-managed internationally.",
    },
    productionHistory: [
      { year: 2019, tonnes: 6000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 6100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 6200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 6400, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 6400, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Purse-seine (wild)", note: "Great Australian Bight — caught young and ranched" },
      { method: "Ranching (tow-and-grow)", note: "Port Lincoln tuna ranching — towed pens feed for 3–8 months" },
      { method: "Longline", note: "Yellowfin / Bigeye — east coast" },
    ],
    mercury: {
      aus: 0.38,
      imp: 0.35,
      unit: "mg/kg",
      citationId: "fsanz-mercury-2024",
      provenance: "primary",
      note: "Below the 1.0 mg/kg limit for large predators. FSANZ recommends limited consumption for pregnant women and young children.",
    },
    antibiotics: {
      aus: "none",
      imp: "rare",
      citationId: "fsanz-residues",
      provenance: "primary",
      note: "Wild ranching uses no antibiotics; feed is wild-caught sardines/pilchards.",
    },
    priceRange: {
      ausLow: 45,
      ausHigh: 120,
      impLow: 25,
      impHigh: 80,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Catch / ranching harvest", days: "Day 0" },
      { step: "Individual processing & grading", days: "0" },
      { step: "Air freight (sashimi-grade)", days: "1–2" },
      { step: "Retail / restaurant", days: "2–4" },
      { step: "Total AUS sashimi days to plate", days: "2–4" },
    ],
    lookAlikes: [
      {
        name: "Imported Yellowfin Tuna",
        whyConfused: "Also sold as sashimi-grade at similar price.",
        howToTell: "Bluefin has a deeper ruby-red flesh and higher marbling. Labels must state species and origin.",
      },
      {
        name: "Tinned tuna (generic)",
        whyConfused: "Marketing as 'tuna' without species.",
        howToTell: "Tinned product is almost always imported Skipjack or Yellowfin. Australian bluefin is not canned.",
      },
    ],
    regulations: {
      quotaTonnes: 6238,
      sourceId: "safs-2024",
      note: "CCSBT (Commission for the Conservation of Southern Bluefin Tuna) sets annual global quota; Australia receives ~45%.",
    },
    keyOperators: [
      { name: "Stehr Group", type: "farm", region: "Port Lincoln, SA", url: "https://www.stehrgroup.com/" },
      { name: "Sarin Marine Farm / Tony's Tuna", type: "farm", region: "Port Lincoln, SA" },
      { name: "Australian Southern Bluefin Tuna Industry Association (ASBTIA)", type: "peak-body", url: "https://asbtia.com.au/" },
    ],
    history: [
      { year: 1952, note: "Commercial Southern Bluefin Tuna fishing begins in South Australia." },
      { year: 1984, note: "Historic stock lows trigger international concern." },
      { year: 1994, note: "CCSBT formed between Australia, Japan, New Zealand to manage the shared stock." },
      { year: 1996, note: "Australian tuna ranching commences in Port Lincoln." },
      { year: 2022, note: "Southern Bluefin stock assessed as rebuilding to healthy levels for the first time in decades." },
    ],
    mediaWatch: [
      { outlet: "ABC News", headline: "Southern Bluefin Tuna stocks rebuild", year: 2023, url: "https://www.abc.net.au/news", tier: "secondary" },
    ],
  },

  /* =============================== OYSTERS ============================== */
  oysters: {
    stockStatus: {
      rating: "sustainable",
      year: 2024,
      citationId: "safs-2024",
      note: "All Australian commercial oysters are farmed; native Sydney Rock Oyster industry has strong traceability.",
    },
    productionHistory: [
      { year: 2019, tonnes: 11000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 10500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 12000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 13200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 13500, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Rack-and-bag / basket culture", note: "Dominant method — NSW, SA, Tas" },
      { method: "Stick culture (traditional)", note: "Older Sydney Rock estuaries — Hawkesbury, Port Stephens" },
      { method: "Floating longline", note: "Used in Pacific Oyster farms, SA & Tas" },
    ],
    mercury: {
      aus: 0.02,
      imp: 0.03,
      unit: "mg/kg",
      citationId: "fsanz-tds",
      provenance: "primary",
      note: "Bivalves are among the lowest-mercury seafood.",
    },
    antibiotics: {
      aus: "none",
      imp: "rare",
      citationId: "fsanz-residues",
      provenance: "primary",
      note: "Oysters are not fed; no antibiotics in the production system.",
    },
    priceRange: {
      ausLow: 18,
      ausHigh: 42,
      impLow: 0,
      impHigh: 0,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Harvest (live)", days: "Day 0" },
      { step: "Grading & packing", days: "0–1" },
      { step: "Wholesale (live-in-shell)", days: "1–3" },
      { step: "Retail / restaurant (live)", days: "2–5" },
      { step: "Total AUS days to plate", days: "2–5 (still live)" },
    ],
    lookAlikes: [
      {
        name: "Pacific Oysters (Crassostrea gigas)",
        whyConfused: "Also farmed in Tas & SA; a different species to Sydney Rock.",
        howToTell: "Pacifics are larger, with frillier shells. Sydney Rock (Saccostrea glomerata) is smaller, rounder, with denser flesh and a mineral, fuller flavour.",
      },
      {
        name: "Flat Oysters (Ostrea angasi / Angasi)",
        whyConfused: "Native Australian oyster, much rarer; often premium menu items.",
        howToTell: "Angasi has a flat, almost disc-like shell — immediately different. Usually labelled explicitly.",
      },
    ],
    regulations: {
      sourceId: "safs-2024",
      note: "Oyster production is heavily regulated at state level — water-quality testing, QX and POMS disease-area closures, harvest area classification.",
    },
    keyOperators: [
      { name: "Oysters Australia", type: "peak-body", url: "https://www.oystersaustralia.org/" },
      { name: "Appellation Oysters", type: "farm", region: "NSW", url: "https://appellationoysters.com.au/" },
      { name: "Coffin Bay Oyster Farm", type: "farm", region: "SA", url: "https://coffinbayoysterfarm.com/" },
      { name: "Get Shucked", type: "farm", region: "Tasmania (Bruny Island)", url: "https://getshucked.com.au/" },
    ],
    history: [
      { year: 1872, note: "Oyster farming begins in Georges River, NSW — Sydney Rock culture scales." },
      { year: 1947, note: "Pacific Oysters introduced to Tasmania." },
      { year: 2004, note: "Coffin Bay becomes a defined Pacific Oyster region with strict biosecurity." },
      { year: 2016, note: "POMS (Pacific Oyster Mortality Syndrome) devastates Tasmanian Pacific farms." },
      { year: 2021, note: "Appellation-style marketing emerges — estuary of origin becomes a premium signal." },
    ],
    mediaWatch: [
      { outlet: "Good Food", headline: "Australia's oyster regions: a guide", year: 2024, url: "https://www.goodfood.com.au/", tier: "secondary" },
    ],
  },

  /* =============================== ABALONE ============================== */
  abalone: {
    stockStatus: {
      rating: "sustainable-rebuilding",
      year: 2024,
      citationId: "safs-2024",
      note: "TAS Greenlip and Blacklip stocks recovering after disease and biomass adjustments. Wild only.",
    },
    productionHistory: [
      { year: 2019, tonnes: 2400, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 2200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 2300, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 2350, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 2400, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Hand-collected by divers", note: "Compressed-air and hookah only — no scuba commercial divers permitted." },
      { method: "Aquaculture (limited)", note: "Land-based and sea-cage trials in TAS, VIC, SA." },
    ],
    mercury: { aus: 0.02, imp: 0.04, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 80, ausHigh: 220, impLow: 60, impHigh: 140, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Diver harvest (live)", days: "Day 0" },
      { step: "Holding tanks", days: "0–2" },
      { step: "Live export or domestic wholesale", days: "1–3" },
      { step: "Retail / restaurant", days: "2–5" },
      { step: "Total AUS days to plate (live)", days: "2–5" },
    ],
    lookAlikes: [
      { name: "Imported farmed abalone (China, Korea)", whyConfused: "Sometimes sold canned or frozen as 'abalone' generic.", howToTell: "Australian product is wild, far larger, and almost always sold live or frozen-whole with provenance. Imports are typically smaller and pre-cooked." },
    ],
    regulations: { quotaTonnes: 1500, sizeLimit: "138mm (TAS Greenlip)", sourceId: "tas-nre-fisheries", note: "ITQ-managed since 1985 in Tasmania; minimum sizes vary by state and species." },
    keyOperators: [
      { name: "Tasmanian Abalone Council", type: "peak-body", region: "Tasmania", url: "https://tasabalone.com.au/" },
      { name: "Australian Abalone Growers Association", type: "peak-body", url: "https://aaga.com.au/" },
      { name: "Coastal Seafarms", type: "farm", region: "Tasmania" },
    ],
    history: [
      { year: 1962, note: "Commercial abalone diving begins in Tasmania." },
      { year: 1985, note: "ITQ system introduced — Tasmania becomes a global model for shellfish quota management." },
      { year: 2008, note: "Abalone Viral Ganglioneuritis (AVG) outbreak in Victoria devastates wild stocks." },
      { year: 2020, note: "Land-based RAS aquaculture scales as supplementary supply." },
    ],
    mediaWatch: [],
  },

  /* =============================== MUSSELS ============================== */
  mussels: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "All Australian commercial mussels are farmed; very low environmental impact." },
    productionHistory: [
      { year: 2019, tonnes: 3200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 3500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 3800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 4100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 4300, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Longline / dropper rope culture", note: "Dominant — TAS, VIC, SA. No feed required." },
    ],
    mercury: { aus: 0.02, imp: 0.03, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "none", citationId: "fsanz-residues", provenance: "primary", note: "Bivalves are filter-feeders; no antibiotics in the production model." },
    priceRange: { ausLow: 12, ausHigh: 22, impLow: 8, impHigh: 16, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Harvest from longline (live)", days: "Day 0" },
      { step: "Grading & packing", days: "0–1" },
      { step: "Wholesale / retail (live)", days: "1–3" },
      { step: "Total AUS days to plate (live)", days: "1–3" },
    ],
    lookAlikes: [
      { name: "Imported NZ Greenlip mussels", whyConfused: "Often frozen, larger, sold as 'green-lipped' or 'green mussels'.", howToTell: "Different species (Perna canaliculus). Australian Blue Mussels (Mytilus galloprovincialis) are smaller and uniformly blue-black." },
      { name: "Frozen mussel meat (often Chile/Spain)", whyConfused: "Pre-cooked and frozen on the shell — used in marinated mussel products.", howToTell: "Australian mussels are predominantly sold live in mesh bags. If pre-cooked or marinated, check origin label." },
    ],
    regulations: { sourceId: "tas-nre-fisheries", note: "Lease-area based regulation; harvest area classifications and water-quality testing under state shellfish QA programs." },
    keyOperators: [
      { name: "Spring Bay Seafoods", type: "farm", region: "Tasmania", url: "https://springbayseafoods.com.au/" },
      { name: "Sea Bounty", type: "farm", region: "Victoria (Port Phillip Bay)", url: "https://seabounty.com.au/" },
      { name: "Kinkawooka Shellfish", type: "farm", region: "South Australia", url: "https://kinkawooka.com.au/" },
    ],
    history: [
      { year: 1980, note: "Commercial mussel farming begins in Port Phillip Bay." },
      { year: 1995, note: "Industry expansion into Spencer Gulf and Tasmanian east coast." },
      { year: 2018, note: "Mussel farming recognised as one of Australia's lowest-footprint protein sources." },
    ],
    mediaWatch: [],
  },

  /* =============================== PEARLS =============================== */
  pearls: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "WA Pinctada maxima fishery is closely regulated; pearl meat by-product is also food-grade." },
    gear: [
      { method: "Wild collection of Pinctada maxima oysters", note: "Hand-collection by divers under strict quota in WA Kimberley." },
      { method: "Pearl farms (Cygnet Bay, Roebuck Bay, etc.)", note: "Operated under state environmental approvals." },
    ],
    keyOperators: [
      { name: "Paspaley Pearling Company", type: "farm", region: "Kimberley, WA", url: "https://www.paspaley.com/" },
      { name: "Cygnet Bay Pearls", type: "farm", region: "Kimberley, WA", url: "https://cygnetbaypearls.com.au/" },
      { name: "Pearl Producers Association", type: "peak-body", region: "Western Australia", url: "https://pearlproducers.com.au/" },
    ],
    history: [
      { year: 1880, note: "Pearling industry begins in Broome — initially driven by pearl-shell button trade." },
      { year: 1956, note: "Cultured South Sea Pearl industry established in Australia (Paspaley)." },
      { year: 2024, note: "Australian South Sea Pearls remain among the world's most valuable cultured pearls." },
    ],
    mediaWatch: [],
  },

  /* =============================== SNAPPER ============================== */
  snapper: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Western (WA), Eastern (NSW/QLD), and Southern (SA/VIC) stocks variously assessed; Spencer Gulf rebuilding." },
    productionHistory: [
      { year: 2019, tonnes: 4200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 3800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 3900, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 4100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 4200, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Demersal longline", note: "NSW and QLD commercial fleet." },
      { method: "Hook-and-line / dropline", note: "Selective gear; minimal bycatch." },
      { method: "Recreational rod & line", note: "Major rec target; bag limits apply per state." },
    ],
    mercury: { aus: 0.10, imp: 0.16, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 38, ausHigh: 65, impLow: 22, impHigh: 38, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Catch (line)", days: "Day 0" },
      { step: "Onshore chill", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail / restaurant", days: "2–4" },
      { step: "Total AUS days to plate", days: "2–4" },
    ],
    lookAlikes: [
      { name: "NZ snapper (Pagrus auratus)", whyConfused: "Same species, different stock. Often sold in Australia as 'snapper' without origin clarity.", howToTell: "Country-of-origin labelling required at retail. At restaurants — ask after 1 July 2026 the menu must show A/I/M." },
      { name: "Imported 'snapper' substitutes", whyConfused: "Various Pacific and Asian species substituted under the snapper name.", howToTell: "Australian Fish Names Standard prescribes correct names; mislabelling has been documented in Australian retail and foodservice." },
    ],
    regulations: { bagLimit: "5/day (NSW recreational)", sizeLimit: "30cm (NSW)", sourceId: "nsw-dpi-stock" },
    keyOperators: [
      { name: "Sydney Fish Market", type: "market", region: "NSW", url: "https://www.sydneyfishmarket.com.au/" },
      { name: "Professional Fishermen's Association NSW", type: "peak-body", url: "https://www.pfansw.com.au/" },
    ],
    history: [
      { year: 1950, note: "Sydney Fish Market becomes the dominant snapper auction." },
      { year: 1984, note: "First minimum legal size for NSW snapper introduced." },
      { year: 2020, note: "Spencer Gulf snapper closure — multi-year rebuilding strategy." },
    ],
    mediaWatch: [],
  },

  /* ============================= FLATHEAD ============================= */
  flathead: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Tiger Flathead (Bass Strait) sustainable; Dusky Flathead estuarine stocks variable by region." },
    productionHistory: [
      { year: 2019, tonnes: 2200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 2100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 2200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 2300, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 2400, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Demersal trawl", note: "Bass Strait Tiger Flathead — Commonwealth-managed." },
      { method: "Recreational rod & line", note: "Dominant recreational species in NSW estuaries." },
    ],
    mercury: { aus: 0.07, imp: 0.13, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "documented", citationId: "daff-imported-food", provenance: "primary", note: "Imported 'flake' is often basa/pangasius, with documented antibiotic residue cases." },
    priceRange: { ausLow: 28, ausHigh: 45, impLow: 12, impHigh: 18, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Trawl catch", days: "Day 0" },
      { step: "Onboard chill", days: "0" },
      { step: "Port unload & wholesale", days: "1–2" },
      { step: "Retail / fish-and-chip shop", days: "2–4" },
      { step: "Total AUS days to plate", days: "2–4" },
    ],
    lookAlikes: [
      { name: "Imported basa / pangasius (Vietnam)", whyConfused: "Routinely sold as generic 'flake' or 'fish' at takeaway shops.", howToTell: "True flathead has firm, white flesh and a distinctive flat head. Basa is uniformly soft, white, fillet-only, and pond-farmed." },
      { name: "Imported gummy shark substitutes", whyConfused: "Real Australian 'flake' is gummy shark; substitutes include other shark species and basa.", howToTell: "Ask the operator what species the flake is. From 1 July 2026, menus must indicate origin (A/I/M)." },
    ],
    regulations: { bagLimit: "10/day (NSW Dusky)", sizeLimit: "36cm (NSW Dusky)", sourceId: "nsw-dpi-stock" },
    keyOperators: [
      { name: "South East Trawl Fishing Industry Association", type: "peak-body", region: "Bass Strait", url: "https://setfia.org.au/" },
      { name: "Sydney Fish Market", type: "market", region: "NSW", url: "https://www.sydneyfishmarket.com.au/" },
    ],
    history: [
      { year: 1915, note: "Commercial trawling begins in Bass Strait." },
      { year: 1992, note: "Southern and Eastern Scalefish and Shark Fishery (SESSF) established." },
      { year: 2010, note: "Tiger Flathead achieves sustainability rating; recovery from earlier overfishing." },
    ],
    mediaWatch: [],
  },

  /* ========================== KING GEORGE WHITING ======================== */
  "king-george-whiting": {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "SA Spencer Gulf and VIC Port Phillip Bay stocks well-managed; endemic to southern Australia." },
    productionHistory: [
      { year: 2019, tonnes: 750, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 720, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 760, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 780, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Hand-line", note: "Selective; preserves the premium quality." },
      { method: "Haul-net (small mesh)", note: "Limited operation — heavily regulated." },
    ],
    mercury: { aus: 0.04, imp: 0.10, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 45, ausHigh: 75, impLow: 18, impHigh: 28, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Catch (line/net)", days: "Day 0" },
      { step: "Onshore chill", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail / restaurant", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3" },
    ],
    lookAlikes: [
      { name: "Imported 'whiting'", whyConfused: "Various Pacific/African whiting species sold as generic 'whiting'.", howToTell: "King George Whiting is endemic to southern Australia. Genuine product is named explicitly — accept no substitutes." },
      { name: "Sand Whiting / School Whiting", whyConfused: "Different Australian whiting species; less prized but often labelled simply 'whiting'.", howToTell: "King George is larger, with characteristic golden spots; firmer texture. Worth 2–3× the price of generic whiting." },
    ],
    regulations: { bagLimit: "20/day (SA recreational)", sizeLimit: "31cm (SA)", sourceId: "pirsa-fisheries" },
    keyOperators: [
      { name: "Wildcatch Fisheries SA", type: "peak-body", region: "South Australia" },
      { name: "Adelaide Central Market", type: "market", region: "SA" },
    ],
    history: [
      { year: 1945, note: "Targeted commercial fishery established in Spencer Gulf." },
      { year: 1990, note: "Strict bag limits introduced as recreational pressure rises." },
    ],
    mediaWatch: [],
  },

  /* ================================ BREAM =============================== */
  bream: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "nsw-dpi-stock", note: "NSW estuarine yellowfin bream stocks well-managed via bag limits and habitat protection." },
    productionHistory: [
      { year: 2019, tonnes: 600, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 580, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 600, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 620, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 640, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Estuarine net (mesh)", note: "Limited commercial entry; managed by NSW DPI." },
      { method: "Recreational rod & line", note: "One of NSW's most-targeted recreational species." },
    ],
    mercury: { aus: 0.05, imp: 0.10, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "documented", citationId: "daff-imported-food", provenance: "primary", note: "Imported sea bream from Mediterranean and Asian aquaculture has documented antibiotic residue cases." },
    priceRange: { ausLow: 25, ausHigh: 38, impLow: 18, impHigh: 28, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Estuarine catch", days: "Day 0" },
      { step: "Onshore chill", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3" },
    ],
    lookAlikes: [
      { name: "Imported sea bream (Mediterranean/Asian)", whyConfused: "Different sparid species marketed under 'sea bream' label.", howToTell: "Australian Yellowfin Bream is a distinct species (Acanthopagrus australis); imported sea bream is typically gilthead (Sparus aurata) or red porgy." },
    ],
    regulations: { bagLimit: "10/day (NSW recreational)", sizeLimit: "25cm (NSW)", sourceId: "nsw-dpi-stock" },
    keyOperators: [
      { name: "Professional Fishermen's Association NSW", type: "peak-body", url: "https://www.pfansw.com.au/" },
    ],
    history: [
      { year: 1980, note: "NSW estuarine fishery management formalised with mesh-size limits." },
      { year: 2010, note: "Habitat protection programs in NSW estuaries scale up." },
    ],
    mediaWatch: [],
  },

  /* ============================== MULLOWAY ============================== */
  mulloway: {
    stockStatus: { rating: "recovering", year: 2024, citationId: "safs-2024", note: "Coorong (SA) stock recovering under co-management with Ngarrindjeri Regional Authority." },
    productionHistory: [
      { year: 2019, tonnes: 350, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 320, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 340, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 380, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 400, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Estuarine net & line", note: "Coorong fishery — Indigenous co-managed." },
      { method: "Recreational rod & line", note: "Iconic prized species." },
    ],
    mercury: { aus: 0.18, imp: 0.22, unit: "mg/kg", citationId: "fsanz-mercury-2024", provenance: "primary", note: "Larger, longer-lived predator; FSANZ recommends limiting consumption for pregnant women." },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 30, ausHigh: 45, impLow: 18, impHigh: 28, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Coorong catch", days: "Day 0" },
      { step: "Onshore chill / Indigenous coop", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail / chef-restaurant", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3" },
    ],
    lookAlikes: [
      { name: "Imported corvina (South America)", whyConfused: "Same family (Sciaenidae); generic 'jewfish' label.", howToTell: "Australian mulloway has firmer, drier flesh and is sold whole or as identifiable fillets. Imports are usually frozen, vacuum-packed." },
    ],
    regulations: { bagLimit: "2/day (SA recreational)", sizeLimit: "75cm (SA)", sourceId: "pirsa-fisheries" },
    keyOperators: [
      { name: "Coorong Wild Seafood (Ngarrindjeri Regional Authority)", type: "coop", region: "Coorong, SA", url: "https://ngarrindjeri.org.au/" },
    ],
    history: [
      { year: 1981, note: "Coorong commercial fishery formalised." },
      { year: 2009, note: "Ngarrindjeri co-management arrangements scale." },
      { year: 2020, note: "Stock rebuilding measures introduced after multi-year decline." },
    ],
    mediaWatch: [],
  },

  /* ============================== KINGFISH ============================= */
  kingfish: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Wild stocks sustainable; aquaculture growing rapidly in SA Spencer Gulf and NSW." },
    productionHistory: [
      { year: 2019, tonnes: 800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 1000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 1300, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 1700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 2100, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Sea-cage aquaculture", note: "Spencer Gulf SA — Clean Seas Seafood; Huon Aquaculture NSW." },
      { method: "Wild line / troll", note: "NSW recreational and commercial." },
    ],
    mercury: { aus: 0.15, imp: 0.20, unit: "mg/kg", citationId: "fsanz-mercury-2024", provenance: "primary" },
    antibiotics: { aus: "rare", imp: "documented", citationId: "fsanz-antibiotic-residues", provenance: "primary", note: "Australian aquaculture uses antibiotics only on prescription; Japanese hamachi farms have higher reported use." },
    priceRange: { ausLow: 38, ausHigh: 65, impLow: 35, impHigh: 60, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Harvest from sea-pen", days: "Day 0" },
      { step: "Bleed / chill / pack", days: "0" },
      { step: "Air freight to market", days: "1–2" },
      { step: "Retail / sushi / restaurant", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3" },
    ],
    lookAlikes: [
      { name: "Imported Japanese Hamachi / Buri", whyConfused: "Same genus (Seriola); both sold as sashimi-grade.", howToTell: "Australian Yellowtail Kingfish (Seriola lalandi) labelled as such; Hamachi (S. quinqueradiata) typically labelled with origin." },
      { name: "Imported Mexican Yellowtail", whyConfused: "Same species farmed in Baja, Mexico.", howToTell: "Country-of-origin labelling required at retail." },
    ],
    regulations: { bagLimit: "5/day (NSW recreational)", sizeLimit: "65cm (NSW)", sourceId: "nsw-dpi-stock" },
    keyOperators: [
      { name: "Clean Seas Seafood", type: "farm", region: "Spencer Gulf, SA", url: "https://www.cleanseas.com.au/" },
      { name: "Huon Aquaculture (Yellowtail Kingfish)", type: "farm", region: "Port Stephens, NSW", url: "https://www.huonaqua.com.au/" },
    ],
    history: [
      { year: 2002, note: "First commercial Yellowtail Kingfish aquaculture in Spencer Gulf." },
      { year: 2018, note: "Australian Yellowtail Kingfish gains traction in Japanese sashimi market." },
      { year: 2022, note: "Production exceeds 1700t — fastest-growing Australian aquaculture sector." },
    ],
    mediaWatch: [],
  },

  /* ============================== MAHI-MAHI ============================= */
  "mahi-mahi": {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Fast-growing pelagic; sustainable when managed. Australian fleet is small." },
    productionHistory: [
      { year: 2019, tonnes: 320, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 280, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 340, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 360, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 380, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Pelagic longline (Eastern Tuna and Billfish Fishery)", note: "Bycatch-managed Commonwealth fishery." },
      { method: "Recreational troll", note: "QLD/NSW summer game-fishing target." },
    ],
    mercury: { aus: 0.12, imp: 0.16, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 25, ausHigh: 38, impLow: 16, impHigh: 25, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Catch (longline/troll)", days: "Day 0" },
      { step: "Onboard ice/chill", days: "0–2" },
      { step: "Port unload & wholesale", days: "1–3" },
      { step: "Retail / restaurant", days: "2–5" },
      { step: "Total AUS days to plate", days: "2–5" },
    ],
    lookAlikes: [
      { name: "Imported mahi-mahi (Ecuador, Peru, Vietnam)", whyConfused: "Same species (Coryphaena hippurus).", howToTell: "Country-of-origin labelling required. Imported product is often pre-frozen and lighter-coloured at thaw." },
      { name: "Generic 'dolphinfish' or 'dorado'", whyConfused: "Same species under different market names.", howToTell: "All refer to mahi-mahi. Check the country of catch — that's the differentiator." },
    ],
    regulations: { sourceId: "afma-harvest-strategies" },
    keyOperators: [
      { name: "Eastern Tuna and Billfish Fishery (AFMA-managed)", type: "peak-body", region: "QLD/NSW" },
      { name: "Mooloolaba Fish Market", type: "market", region: "Sunshine Coast, QLD" },
    ],
    history: [
      { year: 1995, note: "Eastern Tuna and Billfish Fishery formalised under AFMA." },
      { year: 2010, note: "Mooloolaba becomes the dominant Australian mahi-mahi unloading port." },
    ],
    mediaWatch: [],
  },

  /* ============================ CORAL TROUT ============================= */
  "coral-trout": {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Great Barrier Reef Coral Trout is line-only fishery; quota-managed. Marine park protection critical." },
    productionHistory: [
      { year: 2019, tonnes: 800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 750, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 820, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Hook-and-line only", note: "No nets, no traps. Strictly line-caught under QLD Coral Reef Fin Fish Fishery rules." },
    ],
    mercury: { aus: 0.18, imp: 0.30, unit: "mg/kg", citationId: "fsanz-mercury-2024", provenance: "primary", note: "Reef predator; mercury moderate. Imported reef fish often higher." },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 70, ausHigh: 120, impLow: 35, impHigh: 60, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Line catch on the GBR", days: "Day 0" },
      { step: "Live transport in tanks", days: "0–3" },
      { step: "Wholesale (often live to export)", days: "1–4" },
      { step: "Retail / restaurant (live)", days: "2–5" },
      { step: "Total AUS days to plate (live)", days: "2–5" },
    ],
    lookAlikes: [
      { name: "Imported reef fish (Indonesia, Philippines)", whyConfused: "Sometimes cyanide-caught; sold as generic 'reef fish' or 'grouper'.", howToTell: "Australian Coral Trout is line-only and fully traceable. Imported reef fish often has documented cyanide-fishing concerns (EJF reports)." },
      { name: "Imported Asian grouper varieties", whyConfused: "Same family (Serranidae); marketed under similar premium framing.", howToTell: "Coral Trout (Plectropomus leopardus) is endemic to the Indo-Pacific and has distinctive blue-spotted red colouring." },
    ],
    regulations: { quotaTonnes: 1300, sizeLimit: "38cm (QLD)", sourceId: "qld-fisheries", note: "QLD Coral Reef Fin Fish Fishery quota; closed seasons during spawning aggregations." },
    keyOperators: [
      { name: "Queensland Seafood Industry Association", type: "peak-body", region: "QLD", url: "https://qldseafood.com.au/" },
      { name: "Cairns Marine", type: "processor", region: "QLD" },
    ],
    history: [
      { year: 2003, note: "GBR Marine Park Zoning Plan substantially expands no-take zones." },
      { year: 2009, note: "QLD Coral Reef Fin Fish Fishery introduces ITQ system." },
      { year: 2020, note: "China export disruption reorients the industry to domestic and Hong Kong markets." },
    ],
    mediaWatch: [],
  },

  /* ============================== MUD CRAB ============================== */
  "mud-crab": {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "NT and QLD wild stocks sustainably managed; some Indigenous co-management arrangements." },
    productionHistory: [
      { year: 2019, tonnes: 700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 650, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 750, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 780, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Pot (baited)", note: "Selective — undersized and berried females released live." },
    ],
    mercury: { aus: 0.04, imp: 0.06, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "documented", citationId: "daff-imported-food", provenance: "primary", note: "Imported pond-farmed mud crab from SE Asia has multiple documented antibiotic residue cases." },
    priceRange: { ausLow: 60, ausHigh: 100, impLow: 35, impHigh: 60, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Pot catch (live)", days: "Day 0" },
      { step: "Holding & transport (live)", days: "0–1" },
      { step: "Wholesale (live)", days: "1–2" },
      { step: "Retail / restaurant (live)", days: "2–4" },
      { step: "Total AUS days to plate (live)", days: "2–4" },
    ],
    lookAlikes: [
      { name: "Imported pond-farmed mud crab (Sri Lanka, Indonesia, Philippines)", whyConfused: "Same species (Scylla serrata).", howToTell: "Australian wild mud crab is heavier-shelled, fuller-meated, and sold live with traceability. Imports often arrive frozen-cooked or in poor condition after transport." },
    ],
    regulations: { sizeLimit: "150mm (NT)", sourceId: "nt-fisheries", note: "Strict size limits; berried females (carrying eggs) cannot be taken." },
    keyOperators: [
      { name: "Northern Territory Seafood Council", type: "peak-body", region: "NT", url: "https://www.ntsc.com.au/" },
      { name: "Queensland Seafood Industry Association", type: "peak-body", region: "QLD" },
    ],
    history: [
      { year: 1984, note: "NT mud crab fishery formalised." },
      { year: 2010, note: "Indigenous customary fishing rights co-managed in NT/QLD waters." },
    ],
    mediaWatch: [],
  },

  /* ========================== BLUE SWIMMER CRAB ========================== */
  "blue-swimmer-crab": {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "WA Cockburn Sound and Peel-Harvey rebuilding; NSW and SA stocks sustainable." },
    productionHistory: [
      { year: 2019, tonnes: 700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 650, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 720, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 780, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 800, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Pot (baited)", note: "Dominant gear." },
      { method: "Recreational scoop & drop-net", note: "Major rec-fishing target in WA and SA estuaries." },
    ],
    mercury: { aus: 0.03, imp: 0.05, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "documented", citationId: "daff-imported-food", provenance: "primary" },
    priceRange: { ausLow: 28, ausHigh: 42, impLow: 18, impHigh: 28, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Pot catch (live)", days: "Day 0" },
      { step: "Holding tanks", days: "0–1" },
      { step: "Wholesale (live)", days: "1–2" },
      { step: "Retail / restaurant (live)", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3 (live)" },
    ],
    lookAlikes: [
      { name: "Imported tinned crab meat (Indonesia, Vietnam, India)", whyConfused: "Pasteurised picked meat sold as 'crab'.", howToTell: "Australian Blue Swimmer is sold live or fresh-picked. Tinned 'crab meat' is almost always imported." },
    ],
    regulations: { bagLimit: "10/day (WA recreational)", sizeLimit: "127mm carapace (WA)", sourceId: "wa-dpird-fisheries" },
    keyOperators: [
      { name: "WA Fishing Industry Council", type: "peak-body", region: "WA" },
      { name: "Sydney Fish Market", type: "market", region: "NSW", url: "https://www.sydneyfishmarket.com.au/" },
    ],
    history: [
      { year: 2014, note: "WA Cockburn Sound closure following stock collapse." },
      { year: 2019, note: "Cockburn Sound reopens after rebuilding." },
    ],
    mediaWatch: [],
  },

  /* ============================= SPANNER CRAB ============================ */
  "spanner-crab": {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "msc-spanner-crab", note: "MSC-certified QLD fishery — one of Australia's smaller-volume premium crustacean fisheries." },
    productionHistory: [
      { year: 2019, tonnes: 1100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 950, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 1000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 1100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 1150, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Tangle-net (apparatus)", note: "Low-impact — flat dilly nets sit on sandy bottom." },
    ],
    mercury: { aus: 0.04, imp: 0.06, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 35, ausHigh: 55, impLow: 22, impHigh: 35, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Net haul (live)", days: "Day 0" },
      { step: "Onshore holding", days: "0–1" },
      { step: "Live export or domestic wholesale", days: "1–2" },
      { step: "Retail / restaurant", days: "2–3" },
      { step: "Total AUS days to plate (live)", days: "2–3" },
    ],
    lookAlikes: [
      { name: "Imported generic crab products", whyConfused: "Sold under non-specific 'crab' branding.", howToTell: "Genuine Australian Spanner Crab is a unique-looking species (Ranina ranina) — bright red, with paddle-shaped legs unlike any other Australian crab." },
    ],
    regulations: { quotaTonnes: 1500, sizeLimit: "100mm rostral length", sourceId: "qld-fisheries", note: "Quota- and area-managed. MSC certified since 2016." },
    keyOperators: [
      { name: "Queensland Spanner Crab Fishery (MSC)", type: "peak-body", region: "QLD", url: "https://fisheries.msc.org/en/fisheries/queensland-spanner-crab/" },
    ],
    history: [
      { year: 1998, note: "Quota system introduced for QLD spanner crab." },
      { year: 2016, note: "QLD Spanner Crab achieves MSC certification — one of few Australian crustacean MSC fisheries." },
    ],
    mediaWatch: [],
  },

  /* =============================== SCALLOPS ============================== */
  scallops: {
    stockStatus: { rating: "sustainable-rebuilding", year: 2024, citationId: "safs-2024", note: "Bass Strait Scallop Fishery (BSCSF) operates under rebuilding strategy; Hervey Bay roe-on scallops sustainable." },
    productionHistory: [
      { year: 2019, tonnes: 1800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 1600, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 1700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 1900, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 2000, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Dredge (Bass Strait)", note: "Commonwealth-managed; rotational area closures." },
      { method: "Hand-collected by divers", note: "Hervey Bay; lowest-impact." },
    ],
    mercury: { aus: 0.02, imp: 0.04, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 45, ausHigh: 80, impLow: 25, impHigh: 50, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Catch (dredge or dive)", days: "Day 0" },
      { step: "Onboard chill or live tank", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail / restaurant", days: "2–4" },
      { step: "Total AUS days to plate", days: "2–4" },
    ],
    lookAlikes: [
      { name: "Imported water-injected (STPP-treated) scallops", whyConfused: "Sold roe-off with sodium tripolyphosphate plumping agent — pale, swollen, leak liquid in the pan.", howToTell: "Australian roe-on scallops are dry-pack, smaller, and brown when seared. Treated imports are pure white and exude liquid when cooked." },
    ],
    regulations: { sourceId: "afma-harvest-strategies", note: "Commonwealth Bass Strait fishery uses rotational closures to allow stocks to rebuild." },
    keyOperators: [
      { name: "Bass Strait Central Zone Scallop Fishery", type: "peak-body", region: "Bass Strait" },
      { name: "Hervey Bay Scallop Cooperative", type: "coop", region: "QLD" },
    ],
    history: [
      { year: 1981, note: "Bass Strait Scallop Fishery enters first major management framework." },
      { year: 2008, note: "Multi-year closures introduced in response to stock decline." },
      { year: 2018, note: "Stocks begin to rebuild under rotational closure regime." },
    ],
    mediaWatch: [],
  },

  /* ============================== CALAMARI ============================== */
  calamari: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Southern Calamari (Sepioteuthis australis) widely distributed; sustainable hand-jig fishery." },
    productionHistory: [
      { year: 2019, tonnes: 600, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 580, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 620, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 750, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Hand-jig (squid jig)", note: "Selective; most low-impact gear in Australian commercial fishing." },
      { method: "Beach seine (limited)", note: "Some VIC & TAS coastal operations." },
    ],
    mercury: { aus: 0.02, imp: 0.04, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 22, ausHigh: 38, impLow: 12, impHigh: 18, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Hand-jig catch", days: "Day 0" },
      { step: "Onshore chill", days: "0–1" },
      { step: "Wholesale", days: "1–2" },
      { step: "Retail / restaurant", days: "2–3" },
      { step: "Total AUS days to plate", days: "2–3" },
    ],
    lookAlikes: [
      { name: "Imported squid rings (China, Vietnam, Thailand)", whyConfused: "Frozen IQF rings dominate retail and foodservice.", howToTell: "Australian Southern Calamari has thick, sweet, very-tender flesh and is sold whole or in tubes. Frozen rings are often industrial trawl-caught and chemically treated." },
      { name: "Arrow squid (Nototodarus gouldi)", whyConfused: "Different species; tougher flesh; cheaper.", howToTell: "True calamari has fins running the full length of the body; arrow squid fins are limited to the rear third." },
    ],
    regulations: { sourceId: "vfa-stock", note: "Effort-managed across multiple state fisheries." },
    keyOperators: [
      { name: "Victorian Fisheries Authority", type: "peak-body", region: "VIC", url: "https://vfa.vic.gov.au/" },
      { name: "Sydney Fish Market", type: "market", region: "NSW" },
    ],
    history: [
      { year: 1990, note: "Southern Calamari hand-jig fishery formalised in Victoria." },
      { year: 2015, note: "Marketing as premium 'calamari' (vs imported squid) gains traction." },
    ],
    mediaWatch: [],
  },

  /* ================================ OCTOPUS ============================== */
  octopus: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "Octopus pallidus (TAS) and Octopus tetricus (mainland) are sustainably managed pot fisheries." },
    productionHistory: [
      { year: 2019, tonnes: 380, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 350, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 400, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 450, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 480, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Trigger pot (octopus pot)", note: "Low-impact; bait-attracted; species-selective." },
    ],
    mercury: { aus: 0.05, imp: 0.08, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary" },
    antibiotics: { aus: "none", imp: "rare", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 28, ausHigh: 45, impLow: 22, impHigh: 35, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Pot catch", days: "Day 0" },
      { step: "Onshore chill / freeze", days: "0–1" },
      { step: "Wholesale", days: "1–3" },
      { step: "Retail / restaurant", days: "2–5" },
      { step: "Total AUS days to plate", days: "2–5" },
    ],
    lookAlikes: [
      { name: "Imported octopus (Spain, Morocco, China)", whyConfused: "Same broad genus; mechanically tenderised before sale.", howToTell: "Australian octopus is increasingly sold raw and untreated. Imports often arrive pre-cooked, bleached, or mechanically tenderised." },
    ],
    regulations: { sourceId: "tas-nre-fisheries" },
    keyOperators: [
      { name: "Octopus Australis Pty Ltd", type: "processor", region: "TAS" },
      { name: "Tasmanian Seafoods", type: "processor", region: "TAS" },
    ],
    history: [
      { year: 2000, note: "Trigger-pot gear scales in Tasmania, replacing trap-gear methods." },
      { year: 2018, note: "Australian octopus exports to EU and Asia grow as a niche premium category." },
    ],
    mediaWatch: [],
  },

  /* =============================== SARDINES ============================= */
  sardines: {
    stockStatus: { rating: "sustainable", year: 2024, citationId: "safs-2024", note: "South Australian sardine fishery is Australia's largest by volume; tightly assessment-controlled annual quota." },
    productionHistory: [
      { year: 2019, tonnes: 32000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 30000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 38000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 42000, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 44000, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Purse-seine", note: "Highly selective for schooling pelagics; minimal bycatch." },
    ],
    mercury: { aus: 0.02, imp: 0.03, unit: "mg/kg", citationId: "fsanz-tds", provenance: "primary", note: "Small pelagics are among the lowest-mercury seafoods." },
    antibiotics: { aus: "none", imp: "none", citationId: "fsanz-residues", provenance: "primary" },
    priceRange: { ausLow: 6, ausHigh: 14, impLow: 8, impHigh: 18, unit: "$/kg", asOf: "2026 Q1", provenance: "editorial" },
    supplyChain: [
      { step: "Purse-seine catch (Port Lincoln)", days: "Day 0" },
      { step: "Onshore freeze or fresh-pack", days: "0" },
      { step: "Wholesale (fresh / bait / tuna feed)", days: "1–2" },
      { step: "Retail / fresh fishmonger", days: "2–4" },
      { step: "Total AUS days to plate (fresh)", days: "2–4" },
    ],
    lookAlikes: [
      { name: "Imported tinned sardines (Morocco, Portugal, Spain, Peru)", whyConfused: "Australia produces almost no tinned sardines.", howToTell: "Tinned sardines are essentially always imported. Buy fresh or frozen Australian sardines from a fishmonger when available." },
    ],
    regulations: { quotaTonnes: 38000, sourceId: "pirsa-fisheries", note: "TACC (Total Allowable Commercial Catch) set annually based on assessment of biomass." },
    keyOperators: [
      { name: "Australian Sardine Fisheries", type: "coop", region: "Port Lincoln, SA" },
      { name: "PIRSA Fisheries (regulator)", type: "peak-body", region: "SA", url: "https://pir.sa.gov.au/" },
    ],
    history: [
      { year: 1995, note: "Mass mortality event reduces SA sardine biomass dramatically." },
      { year: 1998, note: "Second mass mortality event prompts industry-wide management reform." },
      { year: 2010, note: "Stock fully rebuilt; SA Sardine Fishery becomes Australia's largest by volume." },
    ],
    mediaWatch: [],
  },

  /* =========================== WESTERN ROCK LOBSTER ========================== */
  /* Panulirus cygnus — WA fishery. First MSC-certified fishery globally (2000). */
  "western-rock-lobster": {
    stockStatus: {
      rating: "sustainable",
      year: 2024,
      citationId: "msc-wrl-2000",
      note: "Western Rock Lobster was the first MSC-certified fishery globally (2000) and has maintained certification ever since.",
    },
    productionHistory: [
      { year: 2019, tonnes: 8500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 7800, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 8900, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 9200, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 9400, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Pot (baited trap)", note: "Exclusive gear across WA, SA, TAS, VIC. Low environmental impact." },
    ],
    mercury: {
      aus: 0.06,
      imp: 0.08,
      unit: "mg/kg",
      citationId: "fsanz-tds",
      provenance: "primary",
      note: "Crustacean; inherently low-mercury.",
    },
    antibiotics: {
      aus: "none",
      imp: "none",
      citationId: "fsanz-residues",
      provenance: "primary",
      note: "Wild-caught only — no antibiotic pathway in either system.",
    },
    priceRange: {
      ausLow: 70,
      ausHigh: 180,
      impLow: 60,
      impHigh: 140,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Pot haul (live)", days: "Day 0" },
      { step: "Onshore holding tanks", days: "0–2" },
      { step: "Wholesale (live)", days: "1–3" },
      { step: "Retail / restaurant (live)", days: "2–5" },
      { step: "Total AUS days to plate (live)", days: "2–5" },
    ],
    lookAlikes: [
      {
        name: "Imported warm-water lobster / slipper lobster",
        whyConfused: "Sometimes sold as generic 'lobster' in frozen form.",
        howToTell: "Australian Rock Lobster is sold alive or whole-cooked. Labels are explicit — 'Southern Rock Lobster' or 'Western Rock Lobster'.",
      },
      {
        name: "Imported Maine / Canadian lobster",
        whyConfused: "True-claw lobster (Homarus americanus); confused by consumers unfamiliar with Australian spiny lobster.",
        howToTell: "Australian rock lobsters have no large claws. If it has massive front claws, it's a cold-water Atlantic lobster.",
      },
    ],
    regulations: {
      quotaTonnes: 6300,
      sizeLimit: "76mm (WA carapace)",
      sourceId: "wa-dpird-fisheries",
      note: "ITQ system in WA since 2010; strict carapace size limits; pot-licence caps; no take of berried (egg-carrying) females.",
    },
    keyOperators: [
      { name: "Western Rock Lobster Council", type: "peak-body", region: "WA", url: "https://www.westernrocklobster.org/" },
      { name: "Southern Rocklobster Limited", type: "peak-body", url: "https://www.southernrocklobster.com/" },
      { name: "Geraldton Fishermen's Co-operative (Brolos)", type: "coop", region: "WA", url: "https://brolos.com.au/" },
      { name: "Ferguson Australia", type: "processor", region: "SA", url: "https://www.fergusonaustralia.com/" },
    ],
    history: [
      { year: 1963, note: "WA Rock Lobster fishery introduces pot-licence limitation — one of the earliest managed fisheries in the world." },
      { year: 1993, note: "ITQ (Individual Transferable Quota) feasibility studies begin." },
      { year: 2000, note: "WA Rock Lobster becomes the first MSC-certified fishery globally." },
      { year: 2010, note: "WA moves from effort (pot days) to output (ITQ) controls." },
      { year: 2020, note: "Export disruption (China relations) prompts domestic market development." },
    ],
    mediaWatch: [
      { outlet: "ABC Rural", headline: "WA rock lobster industry reshaped after China trade disruption", year: 2021, url: "https://www.abc.net.au/news/rural/", tier: "secondary" },
    ],
  },

  /* ====================== EASTERN / SOUTHERN ROCK LOBSTER ====================== */
  /* Jasus edwardsii (Southern, TAS/VIC/SA) + Sagmariasus verreauxi (Eastern, NSW).
     Separate stocks from Western RL (Panulirus cygnus); managed state-by-state. */
  rocklobster: {
    stockStatus: {
      rating: "sustainable-rebuilding",
      year: 2024,
      citationId: "safs-2024",
      note: "Southern Rock Lobster (TAS, VIC, SA) is sustainable overall; some TAS eastern-zone stocks are rebuilding under reduced TACs. Eastern Rock Lobster (NSW) is sustainable at current catch levels.",
    },
    productionHistory: [
      { year: 2019, tonnes: 3700, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2020, tonnes: 3100, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2021, tonnes: 3500, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2022, tonnes: 3600, sourceId: "abares-fisheries-stats", provenance: "primary" },
      { year: 2023, tonnes: 3650, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    ],
    gear: [
      { method: "Pot (baited trap)", note: "Exclusive gear across TAS, SA, VIC, NSW. Pots target legal-size lobster; undersize returned live." },
      { method: "Recreational pot / dive", note: "Significant recreational sector in TAS and VIC under bag and size limits." },
    ],
    mercury: {
      aus: 0.06,
      imp: 0.08,
      unit: "mg/kg",
      citationId: "fsanz-tds",
      provenance: "primary",
      note: "Crustacean; inherently low-mercury. Same FSANZ-tested range as Western Rock Lobster.",
    },
    antibiotics: {
      aus: "none",
      imp: "none",
      citationId: "fsanz-residues",
      provenance: "primary",
      note: "Wild-caught only — no antibiotic pathway in either AUS or import supply.",
    },
    priceRange: {
      ausLow: 75,
      ausHigh: 170,
      impLow: 55,
      impHigh: 130,
      unit: "$/kg",
      asOf: "2026 Q1",
      provenance: "editorial",
    },
    supplyChain: [
      { step: "Pot haul (live)", days: "Day 0" },
      { step: "Onshore holding tanks", days: "0–2" },
      { step: "Live export or domestic wholesale", days: "1–4" },
      { step: "Retail / restaurant (live)", days: "2–6" },
      { step: "Total AUS days to plate (live)", days: "2–6" },
    ],
    regulations: {
      sizeLimit: "110mm (TAS female), 105mm (TAS male), 104mm (SA)",
      sourceId: "tas-nre-fisheries",
      note: "ITQ in TAS since 1998; SA rock lobster managed under TAC + ITQ; NSW separately managed. No take of berried (egg-bearing) females across all jurisdictions.",
    },
    keyOperators: [
      { name: "Southern Rocklobster Limited (SRL)", type: "peak-body", url: "https://www.southernrocklobster.com/" },
      { name: "Tasmanian Rock Lobster Fishermen's Association", type: "peak-body", region: "TAS" },
      { name: "Ferguson Australia", type: "processor", region: "SA", url: "https://www.fergusonaustralia.com/" },
    ],
    history: [
      { year: 1962, note: "TAS rock lobster pot-licensing introduced." },
      { year: 1998, note: "TAS moves to ITQ (Individual Transferable Quota) system — one of the first finfish/crustacean ITQs in Australia." },
      { year: 2013, note: "TAS eastern-zone stocks identified as locally depleted; multi-year rebuilding strategy begins." },
      { year: 2020, note: "China live-seafood trade disruption forces domestic-market pivot across all Australian lobster sectors." },
    ],
    mediaWatch: [],
  },
};
