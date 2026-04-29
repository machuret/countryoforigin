import type { Area } from "../types";
import { region } from "./_helper";

export const vicRegions: Area[] = [
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

