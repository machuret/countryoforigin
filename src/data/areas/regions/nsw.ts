import type { Area } from "../types";
import { region } from "./_helper";

export const nswRegions: Area[] = [
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

