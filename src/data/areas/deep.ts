/**
 * =====================================================================
 * AREA DEEP DATA — Phase C rollout
 * =====================================================================
 * Per-area deep-data fields (catch volume, top species, fleet, ports,
 * processors, history, cultural significance, economic value, tourism).
 *
 * Structured as an overlay keyed by area slug — `areaBySlug()` merges
 * these in at runtime. Hand-curated from ABARES, state fisheries
 * statistics, and tourism / industry sources. Estimates are tagged.
 * =====================================================================
 */

import type {
  AreaCatchVolume,
  AreaTopSpecies,
  AreaFleet,
  AreaPort,
  AreaProcessor,
  AreaHistoryEntry,
  AreaEconomicValue,
  AreaTourism,
} from "./types";

export type AreaDeepData = {
  catchVolume?: AreaCatchVolume;
  topSpecies?: AreaTopSpecies[];
  fleet?: AreaFleet;
  keyPorts?: AreaPort[];
  processors?: AreaProcessor[];
  history?: AreaHistoryEntry[];
  culturalSignificance?: string;
  economicValue?: AreaEconomicValue;
  tourismHooks?: AreaTourism[];
  citationIds?: string[];
};

export const areasDeep: Record<string, AreaDeepData> = {
  /* =========================== STATE: NSW =========================== */
  nsw: {
    catchVolume: { tonnes: 17500, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate", note: "Combined wild + aquaculture for NSW." },
    topSpecies: [
      { speciesSlug: "oysters", pctOfCatch: 28, note: "Sydney Rock Oyster — endemic to NSW." },
      { speciesSlug: "prawns", pctOfCatch: 22, note: "School and eastern king prawns." },
      { speciesSlug: "snapper", pctOfCatch: 14 },
      { speciesSlug: "kingfish", pctOfCatch: 9, note: "Wild + aquaculture (Port Stephens)." },
      { speciesSlug: "flathead", pctOfCatch: 8 },
    ],
    fleet: { vessels: 460, approxWorkers: 1100, homePorts: ["Sydney Fish Market", "Newcastle", "Coffs Harbour", "Eden", "Wollongong"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [
      { name: "Sydney Fish Market", note: "Largest seafood auction in the southern hemisphere." },
      { name: "Eden", note: "Major south-coast port; tuna, lobster, shark." },
      { name: "Coffs Harbour", note: "North-coast finfish and prawns." },
      { name: "Newcastle / Lake Macquarie", note: "Estuarine fisheries hub." },
    ],
    processors: [
      { name: "Sydney Fish Market", type: "market", url: "https://www.sydneyfishmarket.com.au/" },
      { name: "Walker Seafoods Australia", type: "exporter" },
      { name: "Professional Fishermen's Association NSW", type: "coop", url: "https://www.pfansw.com.au/" },
    ],
    economicValue: { dollars: "~$420M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1872, note: "First recorded commercial Sydney Rock Oyster culture in Georges River." },
      { year: 1945, note: "Sydney Fish Market establishes as the regulated wholesale auction." },
      { year: 2002, note: "Sydney Fish Market relocates to Pyrmont." },
      { year: 2023, note: "New Sydney Fish Market construction at Blackwattle Bay underway." },
    ],
    culturalSignificance:
      "NSW estuaries — particularly the Hawkesbury, Wallis Lake, and Clyde — are the cultural heartland of the Sydney Rock Oyster, a species endemic to Australia. NSW also hosts significant Indigenous fishing rights under the Native Title Act, with Aboriginal corporations active in coastal management. The Sydney Fish Market remains the cultural and commercial anchor of east-coast seafood.",
    tourismHooks: [
      { name: "Sydney Fish Market guided tours", note: "Daily 6am auction tours" },
      { name: "Hawkesbury & Wallis Lake oyster trails", note: "Estuary-to-plate provenance experiences" },
      { name: "Eden Whale Festival & seafood weekend", note: "Late October" },
    ],
    citationIds: ["abares-fisheries-stats", "nsw-dpi-stock", "sfm-pricing"],
  },

  /* =========================== STATE: SA =========================== */
  sa: {
    catchVolume: { tonnes: 75000, year: 2023, sourceId: "abares-fisheries-stats", provenance: "primary", note: "Largest wild-catch state by volume — driven by sardines and tuna." },
    topSpecies: [
      { speciesSlug: "sardines", pctOfCatch: 58, note: "SA Sardine Fishery is Australia's largest by volume." },
      { speciesSlug: "tuna", pctOfCatch: 9, note: "Southern Bluefin Tuna ranching at Port Lincoln." },
      { speciesSlug: "prawns", pctOfCatch: 5, note: "Spencer Gulf King Prawns." },
      { speciesSlug: "rock-lobster", pctOfCatch: 3, note: "Southern Rock Lobster on the SE coast." },
      { speciesSlug: "abalone", pctOfCatch: 2 },
      { speciesSlug: "oysters", pctOfCatch: 2, note: "Coffin Bay Pacific Oysters." },
    ],
    fleet: { vessels: 750, approxWorkers: 4200, homePorts: ["Port Lincoln", "Port Adelaide", "Coffin Bay", "Kingscote (Kangaroo Island)"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [
      { name: "Port Lincoln", note: "Southern Bluefin Tuna capital of the world; sardine fleet base." },
      { name: "Port Adelaide", note: "Wholesale and prawn fleet." },
      { name: "Coffin Bay", note: "Iconic oyster-growing waters." },
    ],
    processors: [
      { name: "Australian Southern Bluefin Tuna Industry Association", type: "coop", url: "https://asbtia.com.au/" },
      { name: "Stehr Group", type: "exporter" },
      { name: "Spencer Gulf & West Coast Prawn Boat Owners Association", type: "coop", url: "https://spencergulfprawn.com.au/" },
      { name: "Kinkawooka Shellfish", type: "processor", url: "https://kinkawooka.com.au/" },
    ],
    economicValue: { dollars: "~$580M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1952, note: "Commercial Southern Bluefin Tuna fishing begins in SA." },
      { year: 1968, note: "Spencer Gulf prawn fishery scales commercially." },
      { year: 1996, note: "First Southern Bluefin Tuna ranching pens trialled at Port Lincoln." },
      { year: 2010, note: "Coffin Bay oyster industry becomes globally recognised." },
    ],
    culturalSignificance:
      "South Australia produces roughly 35% of Australia's wild-capture seafood by value — driven primarily by Port Lincoln, the global capital of Southern Bluefin Tuna, and the SA sardine fishery (the country's largest by volume). The Coorong fishery on the lower Murray is a longstanding Ngarrindjeri co-management arrangement; the cultural heritage of Greek and Italian migrants underlies much of the SA fishing fleet's character.",
    tourismHooks: [
      { name: "Tuna ranching tours (Port Lincoln)", note: "Aquatic Outdoor Adventures Wessex" },
      { name: "Coffin Bay oyster farm tours", note: "On-water wading experiences" },
      { name: "Tunarama (Port Lincoln festival)", note: "Annual long weekend in January" },
    ],
    citationIds: ["abares-fisheries-stats", "pirsa-fisheries", "safs-2024"],
  },

  /* =========================== STATE: WA =========================== */
  wa: {
    catchVolume: { tonnes: 32000, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    topSpecies: [
      { speciesSlug: "rock-lobster", pctOfCatch: 35, note: "WA Western Rock Lobster — first MSC-certified fishery globally (2000)." },
      { speciesSlug: "prawns", pctOfCatch: 18, note: "Exmouth and Shark Bay prawn fleets." },
      { speciesSlug: "abalone", pctOfCatch: 4 },
      { speciesSlug: "barramundi", pctOfCatch: 3, note: "Cone Bay sea-cage barramundi (Kimberley)." },
      { speciesSlug: "blue-swimmer-crab", pctOfCatch: 3 },
      { speciesSlug: "pearls", note: "Broome — South Sea Pearls (separate, not measured by tonnage)." },
    ],
    fleet: { vessels: 580, approxWorkers: 3100, homePorts: ["Fremantle", "Geraldton", "Exmouth", "Carnarvon", "Broome"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [
      { name: "Fremantle", note: "Wholesale hub and southern lobster fleet." },
      { name: "Geraldton", note: "Western Rock Lobster fleet capital." },
      { name: "Exmouth", note: "Prawns, mahi-mahi, sport-fishing." },
      { name: "Broome", note: "Pearling capital — Paspaley, Cygnet Bay." },
    ],
    processors: [
      { name: "Geraldton Fishermen's Co-operative (Brolos)", type: "coop", url: "https://brolos.com.au/" },
      { name: "Western Rock Lobster Council", type: "coop", url: "https://www.westernrocklobster.org/" },
      { name: "MG Kailis", type: "processor", url: "https://www.mgkailis.com.au/" },
      { name: "Mareterram", type: "processor", url: "https://mareterram.com/" },
      { name: "Paspaley Pearling Company", type: "processor", url: "https://www.paspaley.com/" },
    ],
    economicValue: { dollars: "~$700M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1880, note: "Pearling industry begins in Broome." },
      { year: 1963, note: "WA Rock Lobster fishery introduces pot-licence limitation — global first." },
      { year: 2000, note: "WA Rock Lobster becomes the first MSC-certified fishery globally." },
      { year: 2010, note: "ITQ system implemented for WA Rock Lobster." },
      { year: 2020, note: "China import disruption reshapes lobster industry." },
    ],
    culturalSignificance:
      "Western Australia's fisheries are anchored by the iconic Western Rock Lobster — the first MSC-certified fishery in the world (2000) — and the Broome pearling industry, which has Indo-Malay, Japanese, and Aboriginal heritage stretching back to the 1880s. The Kimberley barramundi industry includes some of Australia's largest sea-cage operations. Geraldton remains a working lobster port with strong Italian and Greek migrant heritage.",
    tourismHooks: [
      { name: "Cygnet Bay pearl tours (Kimberley)", note: "Pearl meat tasting experiences" },
      { name: "Geraldton fishing-fleet harbour tours", note: "Active commercial port" },
      { name: "Exmouth game-fishing charters", note: "Mahi-mahi, marlin, sailfish in season" },
    ],
    citationIds: ["abares-fisheries-stats", "wa-dpird-fisheries", "msc-wrl-2000"],
  },

  /* =========================== STATE: TAS =========================== */
  tas: {
    catchVolume: { tonnes: 88000, year: 2023, sourceId: "abares-fisheries-stats", provenance: "primary", note: "Tasmania is Australia's largest aquaculture producer — driven almost entirely by farmed Atlantic salmon." },
    topSpecies: [
      { speciesSlug: "salmon", pctOfCatch: 92, note: "Tasmanian Atlantic Salmon dominates state production." },
      { speciesSlug: "abalone", pctOfCatch: 2, note: "TAS produces 25% of the global wild abalone harvest." },
      { speciesSlug: "rock-lobster", pctOfCatch: 1, note: "Southern Rock Lobster — high-value premium." },
      { speciesSlug: "oysters", pctOfCatch: 1, note: "Pacific Oysters — premium estuaries." },
      { speciesSlug: "mussels", pctOfCatch: 0.5 },
    ],
    fleet: { vessels: 480, approxWorkers: 5800, homePorts: ["Hobart", "Triabunna", "Strahan", "Devonport", "Bicheno"], sourceId: "tas-nre-fisheries", provenance: "estimate" },
    keyPorts: [
      { name: "Hobart", note: "Wholesale and live-export hub." },
      { name: "Strahan (Macquarie Harbour)", note: "Salmon farming capital." },
      { name: "Triabunna", note: "Abalone and lobster operations." },
      { name: "Bicheno", note: "Crayfish (rock lobster) port." },
    ],
    processors: [
      { name: "Tassal", type: "processor", url: "https://www.tassal.com.au/" },
      { name: "Huon Aquaculture", type: "processor", url: "https://www.huonaqua.com.au/" },
      { name: "Petuna", type: "processor", url: "https://www.petuna.com/" },
      { name: "Salmon Tasmania", type: "coop", url: "https://salmontasmania.com.au/" },
      { name: "Tasmanian Abalone Council", type: "coop", url: "https://tasabalone.com.au/" },
    ],
    economicValue: { dollars: "~$1.4B", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1962, note: "Tasmanian abalone fishery commences." },
      { year: 1984, note: "First Atlantic salmon eggs imported under strict biosecurity." },
      { year: 1986, note: "First sea-pen Atlantic salmon harvested." },
      { year: 2012, note: "Macquarie Harbour expansion triggers environmental review cycle." },
      { year: 2024, note: "Storm Bay becomes the primary salmon-farming expansion zone." },
    ],
    culturalSignificance:
      "Tasmania is Australia's largest aquaculture producer by volume and value, anchored by farmed Atlantic salmon (Tassal, Huon, Petuna). The wild-catch industry — particularly the Tasmanian Abalone fishery, world-leading by volume — has been a global model for ITQ shellfish management since 1985. Tasmanian seafood routes export to Japan, China, and Hong Kong; the salmon industry is also subject to vigorous environmental scrutiny.",
    tourismHooks: [
      { name: "Get Shucked oyster farm (Bruny Island)", note: "Self-guided shucking on the deck" },
      { name: "Tasmanian Whisky & Salmon trail", note: "East coast paired experiences" },
      { name: "IMAS marine science tours (Hobart)", note: "World-class marine research" },
    ],
    citationIds: ["abares-fisheries-stats", "tas-nre-fisheries", "tas-salmon-industry"],
  },

  /* =================== REGION: SPENCER GULF (SA) =================== */
  "spencer-gulf": {
    catchVolume: { tonnes: 2300, year: 2023, sourceId: "abares-fisheries-stats", provenance: "primary", note: "Spencer Gulf Prawn Fishery harvest." },
    topSpecies: [
      { speciesSlug: "prawns", pctOfCatch: 80, note: "Spencer Gulf King Prawns — globally premium." },
      { speciesSlug: "kingfish", pctOfCatch: 12, note: "Sea-cage aquaculture (Clean Seas)." },
      { speciesSlug: "snapper", pctOfCatch: 6, note: "Recovering rebuilding stock." },
    ],
    fleet: { vessels: 39, approxWorkers: 280, homePorts: ["Port Lincoln", "Port Pirie"], sourceId: "abares-fisheries-stats", provenance: "primary", note: "Closed boat-night management; one of the world's most sophisticated prawn fisheries." },
    keyPorts: [
      { name: "Port Lincoln", note: "Tuna, prawns, kingfish — anchor port of SA." },
      { name: "Port Pirie", note: "Wholesale and prawn-fleet support." },
    ],
    processors: [
      { name: "Spencer Gulf & West Coast Prawn Boat Owners Association", type: "coop", url: "https://spencergulfprawn.com.au/" },
      { name: "Clean Seas Seafood (kingfish)", type: "processor", url: "https://www.cleanseas.com.au/" },
    ],
    economicValue: { dollars: "~$95M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate", note: "Spencer Gulf prawn ex-vessel value." },
    history: [
      { year: 1968, note: "Spencer Gulf prawn fishery begins commercial operation." },
      { year: 1986, note: "Closed boat-night management framework introduced." },
      { year: 2010, note: "Real-time satellite-monitored boat tracking implemented." },
    ],
    culturalSignificance:
      "Spencer Gulf is one of the world's most sophisticated wild prawn fisheries — fleet operations are coordinated nightly via radio, with each vessel reporting catch composition to inform real-time spatial closures. The Greek-Australian fishing heritage is deep here, and the Spencer Gulf brand commands a significant premium globally.",
    tourismHooks: [
      { name: "Port Lincoln seafood tours", note: "Drift Tours — tuna, prawns, kingfish" },
    ],
    citationIds: ["abares-fisheries-stats", "pirsa-fisheries", "safs-2024"],
  },

  /* =================== REGION: PORT LINCOLN (SA) =================== */
  "port-lincoln": {
    catchVolume: { tonnes: 50000, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate", note: "Combined sardines + tuna ranching + prawns + kingfish from the wider Port Lincoln basin." },
    topSpecies: [
      { speciesSlug: "sardines", pctOfCatch: 85 },
      { speciesSlug: "tuna", pctOfCatch: 8, note: "Southern Bluefin Tuna ranching." },
      { speciesSlug: "kingfish", pctOfCatch: 4 },
      { speciesSlug: "prawns", pctOfCatch: 2 },
    ],
    fleet: { vessels: 120, approxWorkers: 1800, homePorts: ["Port Lincoln"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [
      { name: "Port Lincoln Marina", note: "Tuna ranching pen base." },
      { name: "Boston Bay", note: "Sardine fleet harbour." },
    ],
    processors: [
      { name: "Stehr Group (tuna)", type: "processor" },
      { name: "Tony's Tuna International", type: "processor" },
      { name: "Clean Seas Seafood (kingfish)", type: "processor", url: "https://www.cleanseas.com.au/" },
      { name: "Australian Sardine Fisheries", type: "coop" },
    ],
    economicValue: { dollars: "~$220M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1952, note: "Commercial Southern Bluefin Tuna fishing begins." },
      { year: 1996, note: "First tuna ranching pens deployed in Boston Bay." },
      { year: 2010, note: "SA sardine fishery becomes Australia's largest by volume." },
    ],
    culturalSignificance:
      "Port Lincoln is widely described as the seafood capital of Australia by per-capita value. The Tunarama festival celebrates the town's tuna heritage every January. The Eyre Peninsula community combines significant Greek, Italian, Croatian, and Aboriginal fishing histories.",
    tourismHooks: [
      { name: "Tunarama Festival", note: "Annual January long weekend" },
      { name: "Tuna ranching pen tours", note: "Marine sightseeing" },
    ],
    citationIds: ["abares-fisheries-stats", "pirsa-fisheries", "safs-2024"],
  },

  /* =================== REGION: COFFIN BAY (SA) =================== */
  "coffin-bay": {
    catchVolume: { tonnes: 1700, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate", note: "Pacific Oyster harvest (excluding wild oyster collection)." },
    topSpecies: [
      { speciesSlug: "oysters", pctOfCatch: 100, note: "Pacific Oysters — Coffin Bay is Australia's premier appellation." },
    ],
    keyPorts: [{ name: "Coffin Bay", note: "Working oyster town and tourism destination." }],
    processors: [
      { name: "Coffin Bay Oyster Farm", type: "processor", url: "https://coffinbayoysterfarm.com/" },
      { name: "Pristine Oyster Farm", type: "processor" },
    ],
    economicValue: { dollars: "~$28M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1969, note: "Pacific Oyster cultivation trial commences in Coffin Bay." },
      { year: 1980, note: "Commercial oyster industry establishes." },
      { year: 2004, note: "Coffin Bay's reputation as a premium oyster appellation crystallises." },
      { year: 2014, note: "POMS biosecurity zone enacted to protect SA stock from disease." },
    ],
    culturalSignificance:
      "Coffin Bay is the most internationally recognised oyster appellation in Australia. The clean, deep, and well-flushed waters of the bay produce a distinctive sweet-saline oyster, sold as a premium product domestically and to Asian export markets.",
    tourismHooks: [
      { name: "Coffin Bay Oyster Farm tours", note: "Wading tours with shucking on the bay" },
      { name: "1802 Oyster Bar & Bistro", note: "Working oyster town dining" },
    ],
    citationIds: ["abares-fisheries-stats", "pirsa-fisheries"],
  },

  /* =================== REGION: BASS STRAIT (VIC/TAS) =================== */
  "bass-strait": {
    catchVolume: { tonnes: 12000, year: 2023, sourceId: "abares-fisheries-stats", provenance: "primary", note: "Combined SESSF (flathead, scallops, gummy shark) and rock lobster." },
    topSpecies: [
      { speciesSlug: "flathead", pctOfCatch: 35, note: "Tiger Flathead — Bass Strait is the dominant supply region." },
      { speciesSlug: "scallops", pctOfCatch: 25 },
      { speciesSlug: "rock-lobster", pctOfCatch: 12 },
      { speciesSlug: "abalone", pctOfCatch: 6 },
    ],
    fleet: { vessels: 95, approxWorkers: 600, homePorts: ["Lakes Entrance", "Apollo Bay", "Triabunna", "Eden"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [
      { name: "Lakes Entrance", note: "Largest commercial port on Victorian coast." },
      { name: "Apollo Bay", note: "Lobster and finfish." },
      { name: "Eden (NSW)", note: "Southern terminal for Bass Strait operations." },
    ],
    processors: [
      { name: "South East Trawl Fishing Industry Association", type: "coop", url: "https://setfia.org.au/" },
      { name: "Lakes Entrance Fishermen's Cooperative", type: "coop" },
    ],
    economicValue: { dollars: "~$160M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1915, note: "Commercial trawling begins in Bass Strait." },
      { year: 1981, note: "Bass Strait Scallop Fishery enters management framework." },
      { year: 1992, note: "Southern and Eastern Scalefish and Shark Fishery (SESSF) consolidated." },
      { year: 2018, note: "Scallop stocks show recovery under rotational closures." },
    ],
    culturalSignificance:
      "Bass Strait is the most significant shared fishing zone in Australia — straddling Victoria and Tasmania, jointly managed by the Commonwealth (AFMA). The Lakes Entrance fleet is a multi-generational fishing community. The strait is also the home water for the iconic Tiger Flathead.",
    tourismHooks: [
      { name: "Lakes Entrance fish-and-chip trail", note: "Generations-old port culture" },
      { name: "Apollo Bay seafood festival", note: "Annual February" },
    ],
    citationIds: ["abares-fisheries-stats", "afma-harvest-strategies", "safs-2024"],
  },

  /* =================== REGION: GREAT BARRIER REEF (QLD) =================== */
  "great-barrier-reef": {
    catchVolume: { tonnes: 1500, year: 2023, sourceId: "abares-fisheries-stats", provenance: "primary", note: "Coral Reef Fin Fish Fishery — line-only." },
    topSpecies: [
      { speciesSlug: "coral-trout", pctOfCatch: 60, note: "Premium reef fish; live-export to Hong Kong." },
      { speciesSlug: "snapper", pctOfCatch: 12, note: "Red emperor and other reef snapper." },
    ],
    fleet: { vessels: 230, approxWorkers: 580, homePorts: ["Cairns", "Townsville", "Mackay", "Bowen"], sourceId: "qld-fisheries", provenance: "estimate" },
    keyPorts: [
      { name: "Cairns", note: "Reef line-fish unloading and live-export." },
      { name: "Townsville", note: "Mid-reef fleet base." },
    ],
    processors: [
      { name: "Queensland Seafood Industry Association", type: "coop", url: "https://qldseafood.com.au/" },
      { name: "Cairns Marine", type: "processor" },
    ],
    economicValue: { dollars: "~$120M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1975, note: "Great Barrier Reef Marine Park established by the GBRMPA." },
      { year: 2003, note: "GBR Marine Park Zoning Plan substantially expands no-take zones." },
      { year: 2009, note: "QLD Coral Reef Fin Fish Fishery moves to ITQ system." },
      { year: 2020, note: "China export disruption reorients to domestic and Hong Kong markets." },
    ],
    culturalSignificance:
      "The Great Barrier Reef is a UNESCO World Heritage area and the world's largest coral reef ecosystem. The Coral Reef Fin Fish Fishery operates strictly with hook-and-line gear under tight quota — a global model for reef-fish sustainability. Indigenous Land and Sea Management programs co-manage many traditional sea country areas.",
    tourismHooks: [
      { name: "Cairns reef seafood tours", note: "Working fisherman experiences" },
      { name: "GBRMPA Reef HQ Aquarium", note: "Educational reef centre" },
    ],
    citationIds: ["abares-fisheries-stats", "qld-fisheries", "gbrmpa-zoning", "daff-mpa"],
  },

  /* =================== REGION: COORONG (SA) =================== */
  coorong: {
    catchVolume: { tonnes: 400, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    topSpecies: [
      { speciesSlug: "mulloway", pctOfCatch: 55, note: "Coorong Mulloway is co-managed with Ngarrindjeri Regional Authority." },
      { speciesSlug: "sardines", pctOfCatch: 20, note: "Pilchards used as bait and tuna feed." },
    ],
    fleet: { vessels: 28, approxWorkers: 60, homePorts: ["Goolwa", "Meningie"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [{ name: "Goolwa", note: "Lower Murray launching point." }, { name: "Meningie", note: "Lake Albert / Coorong access." }],
    processors: [
      { name: "Coorong Wild Seafood (Ngarrindjeri Regional Authority)", type: "coop", url: "https://ngarrindjeri.org.au/" },
    ],
    economicValue: { dollars: "~$8M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1981, note: "Coorong commercial fishery formalised." },
      { year: 2009, note: "Ngarrindjeri co-management arrangements established." },
      { year: 2020, note: "Stock rebuilding measures introduced for mulloway." },
    ],
    culturalSignificance:
      "The Coorong is a Ngarrindjeri saltwater country of immense cultural significance. The Coorong Wild Seafood cooperative is one of Australia's most prominent Indigenous-led commercial seafood operations, providing employment, training, and cultural continuity for Ngarrindjeri community members.",
    tourismHooks: [
      { name: "Coorong National Park", note: "RAMSAR-listed wetland" },
      { name: "Ngarrindjeri cultural tours", note: "Saltwater country experiences" },
    ],
    citationIds: ["abares-fisheries-stats", "coorong-coop", "native-title-1993"],
  },

  /* =================== REGION: HAWKESBURY RIVER (NSW) =================== */
  "hawkesbury-river": {
    catchVolume: { tonnes: 1200, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    topSpecies: [
      { speciesSlug: "oysters", pctOfCatch: 95, note: "Sydney Rock Oyster — heritage grounds." },
    ],
    keyPorts: [{ name: "Mooney Mooney", note: "Working oyster town." }, { name: "Brooklyn", note: "Oyster industry hub." }],
    processors: [
      { name: "Broken Bay Oysters", type: "processor" },
      { name: "Hawkesbury River Oyster Growers Association", type: "coop" },
    ],
    economicValue: { dollars: "~$22M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1872, note: "First commercial Sydney Rock Oyster culture in Georges River; Hawkesbury follows shortly." },
      { year: 2004, note: "QX disease re-emerges; multi-year recovery." },
      { year: 2018, note: "Heritage estuary recognition under NSW DPI program." },
    ],
    culturalSignificance:
      "The Hawkesbury is one of Australia's oldest continuous oyster-growing estuaries. Sydney Rock Oysters from the Hawkesbury are widely considered among the country's most distinctive — drawing on a deep brackish-saline mix and carrying multi-generational family-business heritage.",
    tourismHooks: [
      { name: "Hawkesbury Oyster Trail", note: "Mooney Mooney to Brooklyn route" },
    ],
    citationIds: ["abares-fisheries-stats", "nsw-dpi-stock", "oysters-australia"],
  },

  /* =================== REGION: EXMOUTH GULF (WA) =================== */
  "exmouth-gulf": {
    catchVolume: { tonnes: 1800, year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    topSpecies: [
      { speciesSlug: "prawns", pctOfCatch: 85, note: "Exmouth Gulf Banana and Tiger prawns." },
      { speciesSlug: "mahi-mahi", pctOfCatch: 5 },
    ],
    fleet: { vessels: 11, homePorts: ["Exmouth"], sourceId: "abares-fisheries-stats", provenance: "estimate" },
    keyPorts: [{ name: "Exmouth", note: "Prawn fleet base for the gulf." }],
    processors: [
      { name: "Mareterram", type: "processor", url: "https://mareterram.com/" },
      { name: "MG Kailis", type: "processor", url: "https://www.mgkailis.com.au/" },
    ],
    economicValue: { dollars: "~$45M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1963, note: "Exmouth Gulf prawn fishery commences." },
      { year: 2000, note: "BRDs (Bycatch Reduction Devices) mandated." },
    ],
    culturalSignificance:
      "Exmouth Gulf is the gateway to Ningaloo Reef — and the prawn fishery operates with a sharp focus on environmental stewardship in proximity to a World Heritage site.",
    tourismHooks: [
      { name: "Ningaloo Reef game-fishing", note: "Mahi-mahi, marlin, sailfish" },
    ],
    citationIds: ["abares-fisheries-stats", "wa-dpird-fisheries"],
  },

  /* =================== REGION: BROOME (WA) =================== */
  broome: {
    topSpecies: [
      { speciesSlug: "pearls", note: "Australian South Sea Pearls — premium globally." },
      { speciesSlug: "barramundi", note: "Cone Bay Ocean Barramundi (nearby)." },
    ],
    keyPorts: [{ name: "Broome", note: "Pearling capital." }],
    processors: [
      { name: "Paspaley Pearling Company", type: "processor", url: "https://www.paspaley.com/" },
      { name: "Cygnet Bay Pearls", type: "processor", url: "https://cygnetbaypearls.com.au/" },
      { name: "Pearl Producers Association", type: "coop", url: "https://pearlproducers.com.au/" },
    ],
    economicValue: { dollars: "~$60M", year: 2023, sourceId: "abares-fisheries-stats", provenance: "estimate" },
    history: [
      { year: 1880, note: "Pearling industry begins." },
      { year: 1956, note: "Cultured South Sea Pearl industry established (Paspaley)." },
      { year: 2012, note: "Pearl meat — by-product of pearl culture — emerges as a niche premium food." },
    ],
    culturalSignificance:
      "Broome's pearling history is unique in Australia. The town's heritage interweaves Aboriginal, Japanese, Malay, Indonesian, and Filipino communities — many of whom worked the historic pearl-shell industry. The contemporary pearl industry remains a deeply place-based, multi-cultural enterprise.",
    tourismHooks: [
      { name: "Cygnet Bay pearl tours", note: "Working pearl-farm experiences" },
      { name: "Willie Creek Pearl Farm", note: "Day visitors welcome" },
    ],
    citationIds: ["abares-fisheries-stats", "wa-dpird-fisheries"],
  },

  /* =================== REGION: PORT STEPHENS (NSW) =================== */
  "port-stephens": {
    topSpecies: [
      { speciesSlug: "kingfish", pctOfCatch: 70, note: "Huon Aquaculture sea-cage Yellowtail Kingfish." },
      { speciesSlug: "oysters", pctOfCatch: 20 },
    ],
    keyPorts: [{ name: "Nelson Bay", note: "Working harbour and aquaculture support." }],
    processors: [
      { name: "Huon Aquaculture (Yellowtail Kingfish)", type: "processor", url: "https://www.huonaqua.com.au/" },
      { name: "Hunter Local Land Services (NSW DPI)", type: "research" },
    ],
    history: [
      { year: 1990, note: "Sydney Rock Oyster culture established in Port Stephens estuary." },
      { year: 2018, note: "Yellowtail Kingfish sea-cage trial commences." },
      { year: 2022, note: "Commercial-scale Yellowtail Kingfish operation underway." },
    ],
    culturalSignificance:
      "Port Stephens is the second of Australia's two scaled Yellowtail Kingfish aquaculture regions (alongside Spencer Gulf). It also hosts a long-standing Sydney Rock Oyster industry.",
    tourismHooks: [
      { name: "Port Stephens oyster trail", note: "Estuary-to-plate experiences" },
    ],
    citationIds: ["abares-fisheries-stats", "nsw-dpi-stock"],
  },
};
