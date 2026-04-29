import type { Entity, Slug } from "./types";

export type AreaType = "state" | "region";
export type StateCode = "NSW" | "VIC" | "QLD" | "SA" | "WA" | "TAS" | "NT" | "ACT";

export type Area = Entity & {
  type: AreaType;
  state?: StateCode;
  /** For regions: the slug of their parent state (used for nested URL /areas/[state]/[region]) */
  parentState?: Slug;
  headlineStat?: { value: string; label: string };
  highlights?: string[];
};

/* -----------------------------------------------------------------
 * STATES (8) — every Australian state + territory with a coastline.
 * Each has its own /areas/[state] URL.
 * --------------------------------------------------------------- */
const states: Area[] = [
  {
    slug: "nsw",
    name: "New South Wales",
    type: "state",
    state: "NSW",
    tagline: "Estuaries & Sydney Rock Oysters",
    summary:
      "NSW's coastline is a chain of productive estuaries — home to the iconic Sydney Rock Oyster — alongside a substantial wild-catch fleet for prawns, snapper, and kingfish.",
    headlineStat: { value: "Sydney Rock", label: "Australia's iconic native oyster — endemic to NSW" },
    highlights: [
      "Largest Sydney Rock Oyster production in the country",
      "Active wild-catch fleets for school prawns, eastern king prawns, and finfish",
      "Heritage-listed estuarine fisheries (Hawkesbury, Clyde, Wallis Lake)",
      "Strong recreational fishing economy supports coastal towns",
    ],
    related: { species: ["oysters"], industry: ["aquaculture", "commercial-fishing"] },
  },
  {
    slug: "vic",
    name: "Victoria",
    type: "state",
    state: "VIC",
    tagline: "Bass Strait & rock lobster",
    summary:
      "Victoria's southern shores meet Bass Strait — a productive zone for southern rock lobster, scallops, abalone, and a long history of estuarine fishing.",
    highlights: [
      "Historic fishing ports: Lakes Entrance, Apollo Bay, Portland",
      "Significant southern rock lobster and abalone fisheries",
      "Mussel long-lines in Port Phillip Bay and Western Port",
      "Recovering native flat oyster (Angasi) reefs in Port Phillip",
    ],
    related: {
      species: ["rocklobster", "abalone", "mussels"],
      industry: ["commercial-fishing", "aquaculture"],
    },
  },
  {
    slug: "qld",
    name: "Queensland",
    type: "state",
    state: "QLD",
    tagline: "Tropical waters & the Great Barrier Reef",
    summary:
      "From the Great Barrier Reef to Cape York and the Torres Strait, Queensland's tropical fisheries cover prawns, mud crab, coral trout, and a strong Indigenous fishing presence.",
    highlights: [
      "Great Barrier Reef Marine Park — world's largest coral reef system",
      "Northern banana and tiger prawn trawl fishery",
      "Coral reef finfish (coral trout, red emperor) supports premium markets",
      "Cape York and Torres Strait have major Indigenous commercial fisheries",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  },
  {
    slug: "sa",
    name: "South Australia",
    type: "state",
    state: "SA",
    tagline: "Tuna, oysters & premium prawns",
    summary:
      "South Australia is home to Spencer Gulf King Prawns, Coffin Bay oysters, and the global capital of Southern Bluefin Tuna — Port Lincoln. SA produces roughly 35% of Australia's wild-capture seafood by value.",
    headlineStat: { value: "35%", label: "Approx. share of Australia's wild-capture value" },
    highlights: [
      "Spencer Gulf — premium wild-caught King Prawn fishery",
      "Coffin Bay — internationally renowned oyster region",
      "Port Lincoln — Southern Bluefin Tuna ranching capital",
      "Southern rock lobster in the south-east",
      "Large abalone fishery, mostly Greenlip",
    ],
    related: {
      species: ["prawns", "tuna", "oysters", "rocklobster", "abalone", "mussels"],
      industry: ["commercial-fishing", "aquaculture", "tuna-ranching"],
    },
  },
  {
    slug: "wa",
    name: "Western Australia",
    type: "state",
    state: "WA",
    tagline: "MSC pioneer + pearling",
    summary:
      "WA's vast coastline supports the iconic Western Rock Lobster — the world's first MSC-certified fishery (2000) — plus prawn, scallop, abalone, and the cultured pearl industry off Broome.",
    headlineStat: {
      value: "2000",
      label: "World's first MSC-certified fishery (Western Rock Lobster)",
    },
    highlights: [
      "Western Rock Lobster fishery — world MSC pioneer",
      "Shark Bay & Exmouth Gulf — major prawn and scallop fisheries",
      "Greenlip and Brownlip abalone in the south-west",
      "Broome — capital of Australia's South Sea Pearl industry",
      "Strong Indigenous co-management arrangements in the north",
    ],
    related: {
      species: ["western-rock-lobster", "abalone", "pearls"],
      industry: ["commercial-fishing", "aquaculture", "indigenous-fishing"],
    },
  },
  {
    slug: "tas",
    name: "Tasmania",
    type: "state",
    state: "TAS",
    tagline: "Aquaculture powerhouse",
    summary:
      "Tasmania produces the bulk of Australia's farmed Atlantic salmon, world-class oysters, abalone, and southern rock lobster — all benefiting from clean cool waters and strict regulation.",
    headlineStat: { value: "#1", label: "Largest farmed seafood producer (by value) in Australia" },
    highlights: [
      "Atlantic salmon farms in Macquarie Harbour, Storm Bay, and the Tamar",
      "Pacific oyster farms across the south coast and East Coast",
      "World-leading Greenlip and Blacklip abalone fisheries",
      "Pot-caught Southern Rock Lobster (live export to Asia)",
      "Bruny Island, Coles Bay, and the Furneaux Group are key seafood regions",
    ],
    related: {
      species: ["salmon", "oysters", "abalone", "rocklobster", "mussels"],
      industry: ["aquaculture", "commercial-fishing", "processors"],
    },
  },
  {
    slug: "nt",
    name: "Northern Territory",
    type: "state",
    state: "NT",
    tagline: "Wild barramundi & mud crab",
    summary:
      "The NT is famous for wild-caught barramundi from rivers and estuaries across Arnhem Land and the Top End — alongside mud crab, banana prawn, and Indigenous fishing operations.",
    highlights: [
      "Wild barramundi rivers across the Top End",
      "Banana prawn trawl fishery in the Gulf of Carpentaria",
      "Significant Indigenous-owned commercial fishing operations",
      "Mud crab fishery across coastal mangrove systems",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  },
  {
    slug: "act",
    name: "Australian Capital Territory",
    type: "state",
    state: "ACT",
    tagline: "Major seafood market (no coastline)",
    summary:
      "While the ACT has no coastline, it's a significant inland market for Australian seafood — and home to many federal agencies that regulate fisheries (DAFF, AFMA, FSANZ).",
    highlights: [
      "Hub for federal seafood policy and management agencies",
      "Strong restaurant and government catering market for Australian seafood",
      "Trout aquaculture in surrounding rural NSW supplies the local market",
    ],
    related: { industry: ["processors"] },
  },
];

/* -----------------------------------------------------------------
 * REGIONS (~50) — by state. Each gets /areas/[state]/[region].
 * --------------------------------------------------------------- */

const region = (
  partial: Omit<Area, "type"> & { parentState: Slug; state: StateCode },
): Area => ({ ...partial, type: "region" });

const nswRegions: Area[] = [
  region({
    slug: "hawkesbury",
    name: "Hawkesbury River",
    state: "NSW",
    parentState: "nsw",
    tagline: "Sydney Rock heartland",
    summary:
      "One of NSW's oldest oyster-growing rivers, the Hawkesbury supplies premium Sydney Rock Oysters to the Sydney market with deep estuarine flavour.",
    highlights: [
      "Major Sydney Rock Oyster region",
      "Long oyster-farming heritage dating to the 1880s",
      "Strict water-quality monitoring under the NSW Shellfish Program",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "pittwater",
    name: "Pittwater",
    state: "NSW",
    parentState: "nsw",
    tagline: "Sheltered estuary oysters",
    summary:
      "A sheltered drowned-river-valley estuary north of Sydney producing prized Sydney Rock Oysters and supporting recreational fishing.",
    highlights: [
      "Boutique Sydney Rock Oyster production",
      "Sheltered waters produce sweet, mineral-driven oysters",
      "Tight integration with marine park boundaries",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "wallis-lake",
    name: "Wallis Lake",
    state: "NSW",
    parentState: "nsw",
    tagline: "NSW's largest oyster lake",
    summary:
      "Wallis Lake on the NSW Mid North Coast is one of Australia's most important oyster-producing estuaries — home to a significant Sydney Rock Oyster industry.",
    highlights: [
      "One of NSW's biggest single-estuary oyster producers",
      "Sydney Rock Oysters with a distinctive sweet-salty profile",
      "Active research partnerships on disease resistance",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "camden-haven",
    name: "Camden Haven",
    state: "NSW",
    parentState: "nsw",
    summary:
      "A small Mid North Coast estuary with a long oyster-growing history and a strong recreational fishing economy.",
    highlights: [
      "Sydney Rock Oysters with strong local provenance",
      "Important for recreational and charter fishing",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "port-stephens",
    name: "Port Stephens",
    state: "NSW",
    parentState: "nsw",
    tagline: "Drowned-valley harbour",
    summary:
      "A vast natural harbour north of Newcastle hosting oyster farms, recreational fishing, and a charter-boat industry built on snapper, kingfish, and mulloway.",
    highlights: [
      "Sydney Rock Oysters in the inner reaches",
      "Premier game-fishing charter centre",
      "Marine park supports significant biodiversity",
    ],
    related: { species: ["oysters"], industry: ["aquaculture", "commercial-fishing"] },
  }),
  region({
    slug: "sydney-harbour",
    name: "Sydney Harbour & estuaries",
    state: "NSW",
    parentState: "nsw",
    tagline: "Iconic but constrained",
    summary:
      "Once the heart of the NSW seafood industry, Sydney Harbour fishing is now largely recreational — though Sydney Fish Market remains the largest in the southern hemisphere.",
    highlights: [
      "Sydney Fish Market: 100+ tonnes traded daily",
      "Commercial harbour fishing closed since 2006 (dioxin contamination)",
      "Major auction hub for fish landed across NSW and beyond",
    ],
    related: { industry: ["processors", "commercial-fishing"] },
  }),
  region({
    slug: "clyde-river",
    name: "Clyde River",
    state: "NSW",
    parentState: "nsw",
    tagline: "Heritage oyster region",
    summary:
      "Batemans Bay's Clyde River is famed for its Sydney Rock Oysters — a long, sheltered estuary producing some of the country's most highly prized oysters.",
    highlights: [
      "Sydney Rock Oysters with distinctive metallic finish",
      "Backed by 150+ years of oyster heritage",
      "Heritage-listed estuarine fishery",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "coffs-coast",
    name: "Coffs Coast",
    state: "NSW",
    parentState: "nsw",
    summary:
      "The Coffs Coast supports a wild-catch fleet for spanner crab, snapper, mahi-mahi, and Australian salmon, plus a developing recreational charter sector.",
    highlights: [
      "Spanner crab fishery is a regional specialty",
      "Active inshore fleet for finfish",
      "Solitary Islands Marine Park",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "eden",
    name: "Eden / Twofold Bay",
    state: "NSW",
    parentState: "nsw",
    tagline: "Far South Coast trawl port",
    summary:
      "Eden is NSW's southernmost commercial fishing port — landing offshore trawl-caught fish, abalone divers operate nearby, and historic whaling roots remain in living memory.",
    highlights: [
      "Major NSW trawl-fishery landing port",
      "Significant abalone diving industry",
      "Whaling heritage now drives whale-watching tourism",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
];

const vicRegions: Area[] = [
  region({
    slug: "lakes-entrance",
    name: "Lakes Entrance",
    state: "VIC",
    parentState: "vic",
    tagline: "Victoria's biggest fishing port",
    summary:
      "Lakes Entrance is Victoria's largest fishing port — home to a multi-species trawl fleet landing flathead, gummy shark, prawns, and scallops to the Melbourne market.",
    highlights: [
      "Largest commercial fishing fleet in Victoria",
      "Tiger flathead is the signature species",
      "Important Bass Strait gateway",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "apollo-bay",
    name: "Apollo Bay",
    state: "VIC",
    parentState: "vic",
    tagline: "Lobster & abalone port",
    summary:
      "On Victoria's Great Ocean Road, Apollo Bay is a small but historically vital port for southern rock lobster and abalone divers working Bass Strait.",
    highlights: [
      "Southern rock lobster pot fishery",
      "Active abalone diving industry",
      "Annual Apollo Bay Seafood Festival showcases the catch",
    ],
    related: { species: ["rocklobster", "abalone"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "portland",
    name: "Portland",
    state: "VIC",
    parentState: "vic",
    tagline: "Western District deep-sea port",
    summary:
      "Portland's deep-water port supports an offshore fleet targeting deep-sea fish, southern rock lobster, and historic abalone fisheries off the south-west Victorian coast.",
    highlights: [
      "Deep-water Bass Strait fleet",
      "Southern rock lobster pots in nearby waters",
      "Strategic for whale and abalone research",
    ],
    related: { species: ["rocklobster", "abalone"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "port-phillip-bay",
    name: "Port Phillip Bay",
    state: "VIC",
    parentState: "vic",
    tagline: "Mussels & native oyster restoration",
    summary:
      "Melbourne's harbour bay is a leader in low-impact aquaculture — blue mussels grown on long-lines and an active restoration of the native flat (Angasi) oyster.",
    highlights: [
      "Major Australian blue mussel production",
      "Native Angasi oyster reef restoration projects",
      "Snapper, garfish and squid recreational fisheries",
    ],
    related: { species: ["mussels", "oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "western-port",
    name: "Western Port",
    state: "VIC",
    parentState: "vic",
    summary:
      "A large tidal embayment east of Melbourne with a small mussel industry, recreational fishing, and significant Ramsar-listed wetlands.",
    highlights: [
      "Mussel long-lines",
      "Productive estuarine system supporting fish nurseries",
      "Ramsar-listed wetland of international significance",
    ],
    related: { species: ["mussels"], industry: ["aquaculture"] },
  }),
  region({
    slug: "gippsland-lakes",
    name: "Gippsland Lakes",
    state: "VIC",
    parentState: "vic",
    summary:
      "Australia's largest navigable inland waterway is connected to Bass Strait at Lakes Entrance — supporting prawn, calamari, and bream commercial fisheries plus an enormous recreational scene.",
    highlights: [
      "Eastern king prawn fishery",
      "Calamari and silver trevally",
      "Important coastal lagoon system",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
];

const qldRegions: Area[] = [
  region({
    slug: "moreton-bay",
    name: "Moreton Bay",
    state: "QLD",
    parentState: "qld",
    tagline: "Bug capital",
    summary:
      "Moreton Bay is famous for the Moreton Bay Bug (slipper lobster), banana prawns, and a multi-species fleet supplying Brisbane.",
    highlights: [
      "Iconic Moreton Bay Bug fishery",
      "Banana and tiger prawn trawls",
      "Recreational fishing capital of SE QLD",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "hervey-bay",
    name: "Hervey Bay",
    state: "QLD",
    parentState: "qld",
    summary:
      "A sheltered bay between the mainland and K'gari (Fraser Island) supporting scallops, prawns, and a renowned recreational fishery for whiting and flathead.",
    highlights: [
      "Saucer scallop fishery",
      "Eastern king prawn",
      "World-renowned humpback whale-watching destination",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "hinchinbrook",
    name: "Hinchinbrook & Townsville",
    state: "QLD",
    parentState: "qld",
    tagline: "Wild barramundi country",
    summary:
      "The Hinchinbrook Channel and Townsville coast support wild-caught barramundi, mud crab, banana prawns, and a major reef-fish charter industry.",
    highlights: [
      "Wild Hinchinbrook barramundi",
      "Mud crab fishery in mangrove systems",
      "Adjacent to the Great Barrier Reef Marine Park",
    ],
    related: { species: ["barramundi"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "mooloolaba",
    name: "Mooloolaba",
    state: "QLD",
    parentState: "qld",
    tagline: "Sunshine Coast tuna port",
    summary:
      "Mooloolaba is QLD's premier tuna port — landing yellowfin, swordfish, and mahi-mahi from the Eastern Tuna and Billfish Fishery.",
    highlights: [
      "Major Eastern Tuna and Billfish landing port",
      "Yellowfin tuna and swordfish",
      "Active sashimi-grade export market",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "mackay",
    name: "Mackay & the Whitsundays",
    state: "QLD",
    parentState: "qld",
    summary:
      "Whitsundays-region fisheries cover spanish mackerel, coral trout, red emperor, and a vibrant reef-charter scene set against the Great Barrier Reef.",
    highlights: [
      "Reef line-fishing for coral trout and red emperor",
      "Spanish mackerel run is a regional event",
      "Charter and tourism overlap",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "karumba",
    name: "Karumba",
    state: "QLD",
    parentState: "qld",
    tagline: "Gulf of Carpentaria gateway",
    summary:
      "Karumba on the Gulf of Carpentaria is the heart of the banana prawn fishery and a major barramundi fishing town with Indigenous co-management.",
    highlights: [
      "Banana prawn fishery hub",
      "Wild barramundi rivers",
      "Significant Indigenous fishing presence",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
      areas: ["gulf-of-carpentaria"],
    },
  }),
  region({
    slug: "weipa",
    name: "Weipa & Cape York",
    state: "QLD",
    parentState: "qld",
    tagline: "Indigenous-managed fisheries",
    summary:
      "Cape York fisheries are increasingly Indigenous-led — barramundi, mud crab, and reef fish fisheries with strong cultural integration.",
    highlights: [
      "Wild barramundi and mud crab",
      "Major Indigenous fishing operations",
      "Adjacent to the Great Barrier Reef Marine Park",
    ],
    related: {
      species: ["barramundi"],
      industry: ["indigenous-fishing", "commercial-fishing"],
    },
  }),
  region({
    slug: "cairns",
    name: "Cairns & Far North Queensland",
    state: "QLD",
    parentState: "qld",
    summary:
      "Cairns is the gateway to the northern Great Barrier Reef — a centre for reef-line fishing, charter operations, and seafood processing for Asia-Pacific markets.",
    highlights: [
      "Major reef-fish processing hub",
      "Coral trout and red emperor",
      "Tourism and charter fishing economy",
    ],
    related: { industry: ["commercial-fishing", "processors"] },
  }),
  region({
    slug: "gulf-of-carpentaria",
    name: "Gulf of Carpentaria",
    state: "QLD",
    parentState: "qld",
    tagline: "Banana prawn ocean",
    summary:
      "The shallow tropical sea between northern QLD and Arnhem Land — the heart of Australia's banana and tiger prawn trawl fishery.",
    highlights: [
      "Northern Prawn Fishery — one of Australia's most valuable",
      "Banana prawns are the signature catch",
      "Significant Indigenous fishing co-management",
    ],
    related: {
      industry: ["commercial-fishing", "indigenous-fishing"],
      areas: ["karumba", "weipa", "arnhem-land"],
    },
  }),
];

const saRegions: Area[] = [
  region({
    slug: "spencer-gulf",
    name: "Spencer Gulf",
    state: "SA",
    parentState: "sa",
    tagline: "Premium prawn fishery",
    summary:
      "Spencer Gulf, South Australia, produces wild-caught Western King Prawns considered among the finest in the world — fished under tight quotas and well-defined seasons.",
    headlineStat: { value: "~2,000t", label: "Annual King Prawn quota" },
    highlights: [
      "Tightly-managed fishery with seasonal closures",
      "Operated by ~39 licensed vessels",
      "Quality controlled by on-board grading and snap freezing",
      "Recognised globally as a benchmark sustainable prawn fishery",
    ],
    related: {
      species: ["prawns"],
      industry: ["commercial-fishing"],
    },
  }),
  region({
    slug: "coffin-bay",
    name: "Coffin Bay",
    state: "SA",
    parentState: "sa",
    tagline: "Oyster Capital",
    summary:
      "Coffin Bay's clean, nutrient-rich waters on SA's Eyre Peninsula produce some of the world's most celebrated Pacific Oysters — fast-growing, plump, and consistently briny.",
    highlights: [
      "Pacific oyster (Crassostrea gigas) is the dominant farmed species",
      "Some of the largest single-bay production in Australia",
      "Famous &ldquo;Coffin Bay&rdquo; brand commands global premiums",
      "Strict water-quality monitoring underpins consistent quality",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "port-lincoln",
    name: "Port Lincoln",
    state: "SA",
    parentState: "sa",
    tagline: "Tuna capital of the world",
    summary:
      "On the southern tip of SA's Eyre Peninsula, Port Lincoln is the centre of Australia's Southern Bluefin Tuna industry — both wild capture and ranching.",
    headlineStat: {
      value: "Tuna capital",
      label: "Centre of Australia's Southern Bluefin Tuna industry",
    },
    highlights: [
      "Primary base for the Southern Bluefin Tuna ranching fleet",
      "Major export hub for live and processed seafood",
      "Tuna industry is the city's largest employer",
      "Annual Tunarama Festival celebrates the industry",
    ],
    related: {
      species: ["tuna"],
      industry: ["tuna-ranching", "commercial-fishing"],
    },
  }),
  region({
    slug: "great-australian-bight",
    name: "Great Australian Bight",
    state: "SA",
    parentState: "sa",
    tagline: "Wild Southern Bluefin",
    summary:
      "The Bight is where wild Southern Bluefin Tuna are caught each summer before being towed back to Port Lincoln. Also home to deep-water fisheries with strict environmental management.",
    highlights: [
      "Summer aggregation zone for juvenile Southern Bluefin Tuna",
      "Highly regulated Marine Park boundaries",
      "Important for whale and pinniped conservation",
      "Petroleum exploration debate has shaped policy in recent years",
    ],
    related: { species: ["tuna"], industry: ["commercial-fishing", "tuna-ranching"] },
  }),
  region({
    slug: "streaky-bay",
    name: "Streaky Bay",
    state: "SA",
    parentState: "sa",
    summary:
      "On the western edge of SA's Eyre Peninsula, Streaky Bay supports Pacific oyster farms and a strong abalone-diving fleet operating along the rugged coast.",
    highlights: [
      "Pacific oyster aquaculture",
      "Abalone diving in adjacent waters",
      "Pristine, low-traffic coastline",
    ],
    related: { species: ["oysters", "abalone"], industry: ["aquaculture", "commercial-fishing"] },
  }),
  region({
    slug: "robe",
    name: "Robe & Limestone Coast",
    state: "SA",
    parentState: "sa",
    tagline: "Southern lobster heartland",
    summary:
      "Robe and the Limestone Coast support the bulk of SA's Southern Rock Lobster pot fishery, with live export to Asia underpinning much of the local economy.",
    highlights: [
      "Heart of the SA Southern Rock Lobster fishery",
      "Live export market for Asian premium dining",
      "Tightly quota-managed",
    ],
    related: { species: ["rocklobster"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "kangaroo-island",
    name: "Kangaroo Island",
    state: "SA",
    parentState: "sa",
    summary:
      "Kangaroo Island has a small but highly regarded southern rock lobster fleet, marron aquaculture, and growing oyster farms in clean offshore waters.",
    highlights: [
      "Southern rock lobster pots offshore",
      "Marron and oyster aquaculture",
      "Recovering tourism economy post-2020 bushfires",
    ],
    related: { species: ["rocklobster", "oysters"], industry: ["commercial-fishing", "aquaculture"] },
  }),
];

const waRegions: Area[] = [
  region({
    slug: "shark-bay",
    name: "Shark Bay",
    state: "WA",
    parentState: "wa",
    tagline: "World Heritage prawn waters",
    summary:
      "A UNESCO World Heritage Area producing premium tiger and king prawns, scallops, and supporting one of Australia's most rigorously managed offshore fisheries.",
    highlights: [
      "Shark Bay Prawn Trawl Fishery — MSC certified",
      "Saucer scallop fishery",
      "World Heritage marine ecosystem",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "exmouth-gulf",
    name: "Exmouth Gulf",
    state: "WA",
    parentState: "wa",
    tagline: "Tropical prawn fishery",
    summary:
      "Adjacent to Ningaloo Reef, Exmouth Gulf supports a tightly-managed tiger prawn fishery and a famous recreational game-fishing scene.",
    highlights: [
      "Exmouth Gulf Prawn Fishery",
      "Adjacent to Ningaloo Marine Park (World Heritage)",
      "Game-fishing for marlin, sailfish, mackerel",
    ],
    related: { industry: ["commercial-fishing"] },
  }),
  region({
    slug: "carnarvon",
    name: "Carnarvon",
    state: "WA",
    parentState: "wa",
    summary:
      "Carnarvon is a quiet WA fishing town with a substantial prawn-trawl fleet and aquaculture interests in the Gascoyne region.",
    highlights: [
      "Shark Bay-area prawn fleet base",
      "Emerging aquaculture",
      "Gateway to the Coral Coast",
    ],
    related: { industry: ["commercial-fishing", "aquaculture"] },
  }),
  region({
    slug: "geraldton",
    name: "Geraldton",
    state: "WA",
    parentState: "wa",
    tagline: "Western Rock Lobster capital",
    summary:
      "Geraldton is the centre of the Western Rock Lobster industry — the world's first MSC-certified fishery — with the bulk of the catch processed locally and exported live.",
    highlights: [
      "Heart of the Western Rock Lobster fleet",
      "Significant live-export operation",
      "Anchor port for the Abrolhos Islands fishery",
    ],
    related: { species: ["western-rock-lobster"], industry: ["commercial-fishing", "processors"] },
  }),
  region({
    slug: "abrolhos-islands",
    name: "Abrolhos Islands",
    state: "WA",
    parentState: "wa",
    tagline: "Lobster archipelago",
    summary:
      "An offshore archipelago west of Geraldton — historically and economically central to the Western Rock Lobster fishery, with a unique island-based fishing community.",
    highlights: [
      "Heart of the Western Rock Lobster fishery",
      "Approx. 200 fishing camps across the islands",
      "Class-A nature reserve protection",
    ],
    related: { species: ["western-rock-lobster"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "albany",
    name: "Albany",
    state: "WA",
    parentState: "wa",
    summary:
      "On WA's south coast, Albany supports an abalone fleet, southern rock lobster pots, and a developing marron and ocean trout farming sector.",
    highlights: [
      "Greenlip and Brownlip abalone diving",
      "Southern rock lobster pot fishery",
      "Marron and ocean trout aquaculture",
    ],
    related: { species: ["abalone", "rocklobster"], industry: ["commercial-fishing", "aquaculture"] },
  }),
  region({
    slug: "esperance",
    name: "Esperance",
    state: "WA",
    parentState: "wa",
    summary:
      "Esperance's pristine waters support an abalone fleet, southern rock lobster pots, and a small but growing aquaculture industry.",
    highlights: [
      "Greenlip abalone diving",
      "Southern rock lobster pots",
      "Pristine offshore waters",
    ],
    related: { species: ["abalone", "rocklobster"], industry: ["commercial-fishing"] },
  }),
  region({
    slug: "fremantle",
    name: "Fremantle / Cockburn Sound",
    state: "WA",
    parentState: "wa",
    tagline: "Perth's seafood gateway",
    summary:
      "Fremantle and Cockburn Sound are Perth's seafood landing and processing hub — handling lobster, crab, finfish, and a growing aquaculture sector.",
    highlights: [
      "Major WA seafood processing hub",
      "Cockburn Sound mussel and crab industries",
      "Strategic port for live lobster export",
    ],
    related: { industry: ["processors", "commercial-fishing"] },
  }),
  region({
    slug: "broome",
    name: "Broome",
    state: "WA",
    parentState: "wa",
    tagline: "Pearling capital",
    summary:
      "Broome on WA's Kimberley coast is the heart of Australia's South Sea Pearl industry — a heritage rich in Indigenous, Asian, and European involvement going back to the 1880s.",
    highlights: [
      "Centre of Australia's Pinctada maxima pearling industry",
      "Pearl meat is a sought-after delicacy alongside the gem",
      "Multicultural pearling heritage (Aboriginal, Japanese, Malay, Filipino divers)",
      "Modern pearl farms operate under strict environmental conditions",
    ],
    related: { species: ["pearls"], industry: ["aquaculture", "indigenous-fishing"] },
  }),
  region({
    slug: "kimberley-coast",
    name: "Kimberley Coast",
    state: "WA",
    parentState: "wa",
    summary:
      "The vast, remote Kimberley coast supports pearling, barramundi recreational tourism, and growing Indigenous-led commercial fishing operations.",
    highlights: [
      "Pearl farms in remote bays",
      "Indigenous fishing economy",
      "Significant barramundi and threadfin tourism fishery",
    ],
    related: {
      species: ["pearls", "barramundi"],
      industry: ["aquaculture", "indigenous-fishing"],
    },
  }),
];

const tasRegions: Area[] = [
  region({
    slug: "macquarie-harbour",
    name: "Macquarie Harbour",
    state: "TAS",
    parentState: "tas",
    tagline: "Salmon & ocean trout",
    summary:
      "A vast, brackish, west-coast Tasmanian harbour that became one of Australia's most important salmon and ocean-trout farming sites — though not without environmental scrutiny.",
    highlights: [
      "Major site for Tasmanian Atlantic salmon production",
      "Brackish, deep waters create unique farming conditions",
      "Subject of ongoing environmental management reviews",
      "Borders the Tasmanian Wilderness World Heritage Area",
    ],
    related: { species: ["salmon"], industry: ["aquaculture"] },
  }),
  region({
    slug: "storm-bay",
    name: "Storm Bay",
    state: "TAS",
    parentState: "tas",
    tagline: "Open-ocean salmon expansion",
    summary:
      "Storm Bay south of Hobart is the next-generation site for open-water Atlantic salmon farming — high-energy, well-flushed, and increasingly the centre of growth.",
    highlights: [
      "Largest open-ocean salmon farming zone in Australia",
      "Higher-energy environment than Macquarie Harbour",
      "Subject to detailed marine science programs",
    ],
    related: { species: ["salmon"], industry: ["aquaculture"] },
  }),
  region({
    slug: "bruny-island",
    name: "Bruny Island",
    state: "TAS",
    parentState: "tas",
    summary:
      "Bruny Island is a culinary destination — boutique Pacific oyster farms and a thriving food-tourism scene built on Tasmanian seafood.",
    highlights: [
      "Boutique Pacific oyster farms",
      "Food-tourism economy",
      "Adjacent to the Recherche Bay protected area",
    ],
    related: { species: ["oysters"], industry: ["aquaculture"] },
  }),
  region({
    slug: "freycinet-east-coast",
    name: "Freycinet & East Coast",
    state: "TAS",
    parentState: "tas",
    tagline: "Oyster + scallop coast",
    summary:
      "Tasmania's east coast — including Coles Bay and Freycinet Peninsula — supports Pacific oyster farms, scallop divers, and a renowned recreational rock-lobster fishery.",
    highlights: [
      "Pacific oyster farms in sheltered bays",
      "Scallop divers operate offshore",
      "Recreational rock-lobster destination",
    ],
    related: { species: ["oysters", "rocklobster"], industry: ["aquaculture", "commercial-fishing"] },
  }),
  region({
    slug: "furneaux-group",
    name: "Furneaux Group",
    state: "TAS",
    parentState: "tas",
    tagline: "Bass Strait islands",
    summary:
      "The Furneaux Group (including Flinders Island) supports remote southern rock lobster, abalone, and a unique muttonbird (short-tailed shearwater) harvest by Tasmanian Aboriginal communities.",
    highlights: [
      "Remote southern rock lobster fishery",
      "Abalone diving in offshore reefs",
      "Tasmanian Aboriginal muttonbird harvest is unique cultural fishery",
    ],
    related: {
      species: ["rocklobster", "abalone"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  }),
  region({
    slug: "tamar",
    name: "Tamar Estuary",
    state: "TAS",
    parentState: "tas",
    summary:
      "Northern Tasmania's Tamar estuary supports oyster farms, an established salmon farming operation, and processing facilities serving Bass Strait fisheries.",
    highlights: [
      "Pacific oyster farming",
      "Salmon farming operations",
      "Major processing facilities for Bass Strait fish",
    ],
    related: { species: ["salmon", "oysters"], industry: ["aquaculture", "processors"] },
  }),
];

const ntRegions: Area[] = [
  region({
    slug: "darwin",
    name: "Darwin",
    state: "NT",
    parentState: "nt",
    tagline: "Top End fishing capital",
    summary:
      "Darwin is the heart of the NT seafood industry — barramundi, mud crab, threadfin salmon, and banana prawns landed and processed here for southern markets.",
    highlights: [
      "Major NT seafood processing hub",
      "Wild barramundi and mud crab",
      "Significant Indigenous fishing co-management",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "processors", "indigenous-fishing"],
    },
  }),
  region({
    slug: "arnhem-land",
    name: "Arnhem Land",
    state: "NT",
    parentState: "nt",
    tagline: "Indigenous-managed Sea Country",
    summary:
      "Arnhem Land's coast is one of the most intact, culturally rich seafood landscapes on Earth — Sea Country owned and managed by Yolŋu and other Aboriginal peoples for thousands of generations.",
    highlights: [
      "Indigenous Protected Areas span the coast",
      "Customary, cultural, and emerging commercial fisheries",
      "Strong Indigenous Ranger presence",
    ],
    related: {
      species: ["barramundi"],
      industry: ["indigenous-fishing", "commercial-fishing"],
    },
  }),
  region({
    slug: "northern-territory-rivers",
    name: "Northern Territory Rivers",
    state: "NT",
    parentState: "nt",
    tagline: "Wild barramundi country",
    summary:
      "The Mary, Daly, Roper, and South Alligator river systems produce wild Australian barramundi, a fish with deep significance to Top End fishing communities.",
    highlights: [
      "Wild barramundi spawning and migration corridors",
      "Important to Indigenous customary fishing",
      "Strong recreational fishery — barra is a major tourism drawcard",
      "Estuarine systems also produce mud crab, threadfin salmon, and king prawn",
    ],
    related: {
      species: ["barramundi"],
      industry: ["commercial-fishing", "indigenous-fishing"],
    },
  }),
];

/* Cross-state — assign to the dominant fishery's state */
const crossStateRegions: Area[] = [
  region({
    slug: "torres-strait",
    name: "Torres Strait",
    state: "QLD",
    parentState: "qld",
    tagline: "Indigenous-led tropical fisheries",
    summary:
      "Between Cape York and PNG, the Torres Strait is co-managed with Traditional Inhabitants and supports tropical rock lobster, prawn, and finfish fisheries with significant Indigenous ownership.",
    highlights: [
      "Co-managed under the Torres Strait Treaty (Australia & PNG)",
      "Tropical rock lobster fishery is a cornerstone of the local economy",
      "Strong Traditional Inhabitant Boat (TIB) sector",
      "Pearling, beche-de-mer, and trochus also commercially significant",
    ],
    related: {
      industry: ["indigenous-fishing", "commercial-fishing"],
    },
  }),
  region({
    slug: "bass-strait",
    name: "Bass Strait",
    state: "TAS",
    parentState: "tas",
    tagline: "VIC-TAS shared waters",
    summary:
      "The shallow sea between Victoria and Tasmania — a shared fishing ground for southern rock lobster, scallops, abalone, and the offshore trawl fishery.",
    highlights: [
      "Major scallop fishery (Victoria & Tasmania)",
      "Abalone diving on both sides",
      "Important southern rock lobster zone",
    ],
    related: {
      species: ["rocklobster", "abalone"],
      industry: ["commercial-fishing"],
      areas: ["lakes-entrance", "macquarie-harbour"],
    },
  }),
];

export const areas: Area[] = [
  ...states,
  ...nswRegions,
  ...vicRegions,
  ...qldRegions,
  ...saRegions,
  ...waRegions,
  ...tasRegions,
  ...ntRegions,
  ...crossStateRegions,
];

/* ----------------- Helpers ----------------- */

export const areaBySlug = (slug: Slug): Area | undefined =>
  areas.find((a) => a.slug === slug);

export const allAreaSlugs = (): Slug[] => areas.map((a) => a.slug);

export const statesOnly = (): Area[] => areas.filter((a) => a.type === "state");

export const regionsOnly = (): Area[] => areas.filter((a) => a.type === "region");

export const regionsByState = (stateSlug: Slug): Area[] =>
  areas.filter((a) => a.type === "region" && a.parentState === stateSlug);

/**
 * Returns the canonical URL for an area (state or region).
 * - State: /areas/[state-slug]
 * - Region: /areas/[parent-state-slug]/[region-slug]
 */
export const areaUrl = (a: Area): string => {
  if (a.type === "state") return `/areas/${a.slug}`;
  if (a.parentState) return `/areas/${a.parentState}/${a.slug}`;
  return `/areas/${a.slug}`; // fallback (shouldn't happen for clean data)
};
