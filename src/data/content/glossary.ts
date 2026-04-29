export type GlossaryTerm = {
  term: string;
  category: "regulation" | "fishery" | "label" | "science" | "industry";
  definition: string;
  citationId?: string;
};

export const glossary: GlossaryTerm[] = [
  // Regulation
  { term: "AFMA", category: "regulation", definition: "Australian Fisheries Management Authority — manages all Commonwealth (offshore) fisheries.", citationId: "afma-harvest-strategies" },
  { term: "FSANZ", category: "regulation", definition: "Food Standards Australia New Zealand — sets the bi-national Food Standards Code, including seafood additives, mercury limits and labelling rules.", citationId: "fsanz-mercury-2024" },
  { term: "DAFF", category: "regulation", definition: "Department of Agriculture, Fisheries and Forestry — federal department overseeing biosecurity, imported food and trade." },
  { term: "AQIS", category: "regulation", definition: "Australian Quarantine and Inspection Service — operates the Imported Food Inspection Scheme.", citationId: "aqis-export-controls" },
  { term: "ACCC", category: "regulation", definition: "Australian Competition and Consumer Commission — enforces the Australian Consumer Law including misleading conduct on origin claims.", citationId: "acl-schedule-2" },
  { term: "AMSA", category: "regulation", definition: "Australian Maritime Safety Authority — regulates fishing-vessel safety, surveys and crew certification.", citationId: "amsa-fishing-vessels" },
  { term: "CCSBT", category: "regulation", definition: "Commission for the Conservation of Southern Bluefin Tuna — international body managing SBT quota and stock recovery." },
  { term: "GBRMPA", category: "regulation", definition: "Great Barrier Reef Marine Park Authority — administers the GBR Marine Park zoning plan.", citationId: "gbrmpa-zoning" },

  // Fishery
  { term: "TAC", category: "fishery", definition: "Total Allowable Catch — the catch ceiling set by managers each season for a fishery." },
  { term: "ITQ", category: "fishery", definition: "Individual Transferable Quota — tradeable share of the TAC held by a licence-holder." },
  { term: "VMS", category: "fishery", definition: "Vessel Monitoring System — satellite-based tracker mandatory on most Commonwealth-managed vessels." },
  { term: "SAFS", category: "fishery", definition: "Status of Australian Fish Stocks — biennial FRDC report on the health of 150+ stocks.", citationId: "safs-2024" },
  { term: "Bycatch", category: "fishery", definition: "Non-target species caught alongside the targeted species; managed under bycatch reduction plans.", citationId: "afma-bycatch" },
  { term: "Demersal", category: "fishery", definition: "Living near or on the sea bed — e.g. flathead, snapper, ling." },
  { term: "Pelagic", category: "fishery", definition: "Living in open water away from the bottom — e.g. tuna, mackerel, sardines." },
  { term: "Trawl", category: "fishery", definition: "Towed-net fishing method, demersal (bottom) or midwater (off the seafloor)." },
  { term: "Long-line", category: "fishery", definition: "A main line up to several kilometres long with thousands of baited hooks; used for tuna, swordfish and ling." },
  { term: "Pot / Trap", category: "fishery", definition: "Baited cage left on the seafloor — the gear used for rock lobster, mud crab, spanner crab." },
  { term: "Hand-dive", category: "fishery", definition: "Diver-based harvesting on hookah or scuba — used for abalone, sea urchin." },
  { term: "Ranching", category: "fishery", definition: "Wild juveniles caught and grown out in feeding pens — used in Port Lincoln for Southern Bluefin Tuna." },
  { term: "Aquaculture", category: "fishery", definition: "Farming of aquatic species in ponds, cages or shellfish leases — Tasmania, SA and NSW are key Australian centres." },

  // Labelling
  { term: "CoOL", category: "label", definition: "Country of Origin Labelling — the mandatory disclosure of where seafood was caught/farmed and where it was processed.", citationId: "info-standard-2025" },
  { term: "Cool-Fi", category: "label", definition: "From 1 July 2026 — extension of CoOL rules to cooked seafood (fishmonger fryers, foodservice menus).", citationId: "coolfi-standard" },
  { term: "AFNS", category: "label", definition: "Australian Fish Names Standard — mandatory naming of seafood species in trade and at retail.", citationId: "aff-fish-names-standard" },
  { term: "Made in Australia", category: "label", definition: "Refers to where a food was substantially transformed — not where the seafood was caught. Read carefully.", citationId: "industry-dept-cool" },
  { term: "Product of Australia", category: "label", definition: "All significant ingredients and processing took place in Australia — strongest origin claim." },
  { term: "Mislabelling", category: "label", definition: "Incorrect species, origin or processing labelling. DNA studies show 11–34% of seafood at retail/foodservice is mislabelled.", citationId: "amcs-dna" },
  { term: "Sulphites", category: "label", definition: "Preservatives often used on imported prawns; must be declared on labels under FSANZ rules.", citationId: "fsanz-residues" },
  { term: "STPP", category: "label", definition: "Sodium Tripolyphosphate — water-binding agent used to add weight to prawns and scallops abroad; rare on Australian product.", citationId: "fsanz-residues" },

  // Science / health
  { term: "Mercury", category: "science", definition: "Naturally-occurring metal that bioaccumulates in long-lived predatory fish. FSANZ publishes maximum levels and dietary advice.", citationId: "fsanz-mercury-2024" },
  { term: "Omega-3 (EPA + DHA)", category: "science", definition: "Long-chain marine fatty acids associated with heart and brain health.", citationId: "heart-foundation-omega3" },
  { term: "Bioaccumulation", category: "science", definition: "Build-up of contaminants up the food chain — relevant to mercury, PCBs, microplastics." },
  { term: "FCR", category: "science", definition: "Feed Conversion Ratio — kg of feed per kg of body weight gain; salmon ~1.2, beef ~6+." },
  { term: "POMS", category: "science", definition: "Pacific Oyster Mortality Syndrome — viral disease affecting Pacific oysters, devastating to NSW estuaries from 2015." },

  // Industry
  { term: "FRDC", category: "industry", definition: "Fisheries Research and Development Corporation — co-funded by industry levies and government to fund fisheries R&D.", citationId: "frdc" },
  { term: "SIA", category: "industry", definition: "Seafood Industry Australia — national peak body representing wild-catch, aquaculture and processors.", citationId: "sia" },
  { term: "MSC", category: "industry", definition: "Marine Stewardship Council — global wild-fishery sustainability standard; used by WRL, NPF, spanner crab and others.", citationId: "msc-registry" },
  { term: "ASC", category: "industry", definition: "Aquaculture Stewardship Council — the equivalent farm-side certification; used by Tasmanian salmon farms." },
  { term: "BAP", category: "industry", definition: "Best Aquaculture Practices — global multi-species farm certification covering biosecurity, social and environmental standards." },
  { term: "RSPCA Approved", category: "industry", definition: "RSPCA's farm-welfare scheme; some Tasmanian salmon farms are certified." },
  { term: "Cold chain", category: "industry", definition: "The 0–4°C temperature window maintained from harvest to retail to keep seafood safe and fresh." },
  { term: "HACCP", category: "industry", definition: "Hazard Analysis and Critical Control Points — mandatory food-safety management system for processors." },
  { term: "Native Title", category: "industry", definition: "Recognition under Australian common law of Aboriginal and Torres Strait Islander rights to land and waters.", citationId: "native-title-1993" },
  { term: "Sea Country", category: "industry", definition: "Aboriginal and Torres Strait Islander term for the marine areas held under custodial responsibility." },
];
