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
} from "./species";

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

  /* ============================ ROCK LOBSTER ============================ */
  "rock-lobster": {
    stockStatus: {
      rating: "sustainable",
      year: 2024,
      citationId: "msc-wrl-2000",
      note: "Western Rock Lobster was the first MSC-certified fishery globally (2000). Southern Rock Lobster also sustainably managed.",
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
};
