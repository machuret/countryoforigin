import type { Entity, Slug } from "./types";

export type Industry = Entity & {
  /** Card colour theme */
  theme: "navy" | "teal" | "ocean" | "coral";
  /** Headline stat shown on cards + hero */
  headlineStat?: { value: string; label: string };
  /** Detailed stats shown in detail page */
  stats?: { value: string; label: string }[];
  /** Bullet points used by detail page */
  highlights?: string[];
};

export const industries: Industry[] = [
  {
    slug: "indigenous-fishing",
    name: "Indigenous Fishing",
    tagline: "65,000 years of stewardship",
    theme: "ocean",
    summary:
      "Aboriginal and Torres Strait Islander peoples have managed Australia's coastal waters for millennia. Customary, cultural, and growing commercial fisheries are central to the future of Australian seafood.",
    headlineStat: { value: "65,000+ yrs", label: "Continuous management of Sea Country" },
    stats: [
      { value: "$50M+", label: "Annual value of Indigenous commercial fisheries" },
      { value: "15%", label: "Coastline under Indigenous management" },
      { value: "100+", label: "Active Indigenous Ranger groups" },
      { value: "1993", label: "Native Title Act recognises customary fishing rights" },
    ],
    highlights: [
      "Customary fishing rights protected under the Native Title Act 1993",
      "Sea Country includes inter-tidal zones and offshore waters",
      "Knowledge of seasonal indicators and breeding cycles informs modern science",
      "Indigenous-owned commercial operations across NT, Cape York, Torres Strait, and parts of WA",
      "Pearling, trochus, beche-de-mer, mud crab, and finfish are the dominant Indigenous commercial species",
      "Indigenous Ranger programs combine traditional ecological knowledge with modern science",
    ],
    related: {
      areas: ["nt", "qld", "torres-strait", "broome"],
      species: ["pearls"],
    },
  },
  {
    slug: "commercial-fishing",
    name: "Commercial Fishing",
    tagline: "The backbone of coastal Australia",
    theme: "navy",
    summary:
      "From small family trawlers in Spencer Gulf to highly regulated demersal fleets in WA, Australian commercial fisheries operate under science-based quota systems among the world's most rigorous.",
    headlineStat: { value: "$3B", label: "Gross value of Australian seafood production" },
    stats: [
      { value: "3,000+", label: "Commercial fishing vessels nationally" },
      { value: "17,000", label: "Direct jobs across catch, processing & logistics" },
      { value: "100%", label: "VMS-tracked fleets in Commonwealth fisheries" },
      { value: "50+", label: "Coastal towns where fishing is the primary industry" },
    ],
    highlights: [
      "Almost every fishery operates under ITQ or TAC quotas",
      "AFMA manages all Commonwealth fisheries",
      "State agencies manage inshore and estuarine fisheries",
      "Stock status reports published every two years",
      "Fleet methods include pot, trap, line, trawl, and dive — selected to minimise bycatch",
      "Most stocks classified as sustainable or recovering",
    ],
    related: {
      areas: ["sa", "wa", "tas", "spencer-gulf", "great-australian-bight"],
      species: ["prawns", "tuna", "rocklobster", "western-rock-lobster", "abalone"],
    },
  },
  {
    slug: "aquaculture",
    name: "Aquaculture",
    tagline: "Farming the cleanest waters",
    theme: "teal",
    summary:
      "Australia's aquaculture sector is the fastest-growing segment of seafood production — concentrated in Tasmania, SA, and tropical northern farms. World-class biosecurity and feed standards.",
    headlineStat: { value: "60%", label: "Share of Australian seafood production by value" },
    stats: [
      { value: "$1.6B+", label: "Annual aquaculture production value" },
      { value: "ASC/BAP", label: "Major certification schemes used by Aussie farms" },
      { value: "Tas/SA", label: "Two states producing the bulk of farmed seafood" },
      { value: "Zero", label: "Hormone or growth-promotant use" },
    ],
    highlights: [
      "Atlantic salmon (Tasmania) is the largest single segment",
      "Sydney Rock and Pacific oyster farms across NSW, SA, and Tasmania",
      "Barramundi farmed in cages and ponds across QLD, NT, and SA",
      "South Sea pearls farmed off the Kimberley coast (WA)",
      "Mussel long-lines in Tasmania, Victoria, and SA",
      "Strict biosecurity and Veterinary Health Plans for finfish",
    ],
    related: {
      areas: ["tas", "sa", "macquarie-harbour", "coffin-bay", "broome"],
      species: ["salmon", "barramundi", "oysters", "mussels", "pearls"],
    },
  },
  {
    slug: "processors",
    name: "Processors & Supply Chain",
    tagline: "Where quality is locked in",
    theme: "coral",
    summary:
      "What happens between the boat and your plate decides freshness, flavour, and food safety. Australian processors operate under FSANZ standards that ban many additives common overseas.",
    headlineStat: { value: "~$2B", label: "Annual value-add from Australian seafood processing" },
    stats: [
      { value: "500+", label: "Licensed seafood processing facilities" },
      { value: "0–4°C", label: "Cold chain maintained from harvest to retail" },
      { value: "HACCP", label: "Mandatory food-safety standard" },
      { value: "FSANZ", label: "Federal authority over seafood food standards" },
    ],
    highlights: [
      "HACCP-certified facilities audited regularly by state authorities",
      "No sodium tripolyphosphate (STPP) water-injection on whole fish",
      "Mandatory traceability — vessel ID, harvest date, processor batch",
      "Bans on sulphites in many products, with mandatory labelling where used",
      "Cold chain maintained at 0–4°C from harvest to retail",
      "&ldquo;Made in Australia from imported ingredients&rdquo; refers to processing — not catch",
    ],
    related: {
      areas: ["tas", "sa", "vic", "nsw"],
      species: ["salmon", "tuna", "prawns"],
    },
  },
  {
    slug: "tuna-ranching",
    name: "Tuna Ranching",
    tagline: "Wild caught, fattened in pens",
    theme: "ocean",
    summary:
      "Port Lincoln, SA is the world capital of Southern Bluefin Tuna ranching — wild juveniles are towed in cages from the Bight to feeding pens, then harvested for the global sashimi market.",
    headlineStat: { value: "~6,000t", label: "Annual Australian SBT quota under CCSBT" },
    stats: [
      { value: "$200M+", label: "Annual industry value" },
      { value: "1994", label: "CCSBT international quota established" },
      { value: "3–6mo", label: "Time tuna spend in feeding pens" },
      { value: "100%", label: "Catch documented under CCSBT scheme" },
    ],
    highlights: [
      "Wild juveniles caught in the Great Australian Bight, mostly in summer",
      "Towed in slow-moving cages back to Port Lincoln",
      "Fed sardines and pilchards over 3–6 months for fat and flavour",
      "Predominantly exported to Japan's sashimi market",
      "Stock now classified as recovering — once depleted, now under conservative management",
      "Industry vital to the Port Lincoln regional economy",
    ],
    related: {
      areas: ["port-lincoln", "great-australian-bight", "sa"],
      species: ["tuna"],
    },
  },
];

export const industryBySlug = (slug: Slug): Industry | undefined =>
  industries.find((i) => i.slug === slug);
export const allIndustrySlugs = (): Slug[] => industries.map((i) => i.slug);
