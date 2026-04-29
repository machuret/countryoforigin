/**
 * Centralised citation library. Every numerical claim used on a campaign page
 * (or anywhere) should live here, referenced by id from the page's citationIds[].
 *
 * To update a source — e.g. annual stats refresh — edit the URL/year here and
 * /research will reflect it everywhere it's used.
 */

export type Citation = {
  id: string;
  /** Short label (used in footnotes) */
  label: string;
  /** Full title of the source */
  title: string;
  publisher: string;
  year?: number;
  url: string;
};

export const citations: Citation[] = [
  {
    id: "fsanz-tds",
    label: "FSANZ Australian Total Diet Study",
    title: "Australian Total Diet Study — 25th Study",
    publisher: "Food Standards Australia New Zealand",
    year: 2019,
    url: "https://www.foodstandards.gov.au/science-data/monitoringnutrients/australian-total-diet-study",
  },
  {
    id: "fsanz-mercury-2024",
    label: "FSANZ mercury in fish guidance",
    title: "Mercury in fish — consumer advice",
    publisher: "Food Standards Australia New Zealand",
    year: 2024,
    url: "https://www.foodstandards.gov.au/consumer/chemicals/mercury",
  },
  {
    id: "heart-foundation-omega3",
    label: "Heart Foundation omega-3 guidance",
    title: "Fish, oils, omega-3 and heart health",
    publisher: "National Heart Foundation of Australia",
    url: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/fish-and-seafood",
  },
  {
    id: "abares-fisheries-stats",
    label: "ABARES Australian fisheries statistics",
    title: "Australian fisheries and aquaculture statistics",
    publisher: "ABARES (Department of Agriculture, Fisheries and Forestry)",
    year: 2024,
    url: "https://www.agriculture.gov.au/abares/research-topics/fisheries/fisheries-and-aquaculture-statistics",
  },
  {
    id: "frdc-employment",
    label: "FRDC employment & economic contribution",
    title: "Australian seafood industry — economic contribution",
    publisher: "Fisheries Research and Development Corporation",
    url: "https://www.frdc.com.au/",
  },
  {
    id: "native-title-1993",
    label: "Native Title Act 1993",
    title: "Native Title Act 1993 (Cth)",
    publisher: "Australian Government — Federal Register of Legislation",
    year: 1993,
    url: "https://www.legislation.gov.au/C2004A04665/latest/text",
  },
  {
    id: "safs-2024",
    label: "Status of Australian Fish Stocks",
    title: "Status of Australian Fish Stocks Reports",
    publisher: "Department of Agriculture, Fisheries and Forestry",
    year: 2024,
    url: "https://www.fish.gov.au/",
  },
  {
    id: "msc-wrl-2000",
    label: "Western Rock Lobster MSC certification (2000)",
    title: "Western Australia Rock Lobster — MSC Fishery",
    publisher: "Marine Stewardship Council",
    year: 2000,
    url: "https://fisheries.msc.org/en/fisheries/western-australia-rock-lobster/",
  },
  {
    id: "daff-mpa",
    label: "Australian Marine Parks coverage",
    title: "Australian Marine Parks",
    publisher: "Parks Australia / DCCEEW",
    url: "https://parksaustralia.gov.au/marine/",
  },
  {
    id: "oceana-mislabelling",
    label: "Oceana global mislabelling meta-analysis",
    title: "Seafood Fraud — Global Studies Compilation",
    publisher: "Oceana",
    year: 2021,
    url: "https://oceana.org/reports/global-seafood-fraud/",
  },
  {
    id: "amcs-dna",
    label: "AMCS DNA testing",
    title: "GoodFish — Australia's Sustainable Seafood Guide",
    publisher: "Australian Marine Conservation Society",
    url: "https://goodfish.org.au/",
  },
  {
    id: "daff-imported-food",
    label: "DAFF Imported Food Inspection Scheme",
    title: "Imported Food Inspection Scheme",
    publisher: "Department of Agriculture, Fisheries and Forestry",
    url: "https://www.agriculture.gov.au/biosecurity-trade/import/goods/food/inspection-compliance",
  },
  {
    id: "fsanz-residues",
    label: "FSANZ chemical residues in food",
    title: "Chemicals in food — surveillance and standards",
    publisher: "Food Standards Australia New Zealand",
    url: "https://www.foodstandards.gov.au/science-data/chemicals-in-food",
  },
  {
    id: "ap-investigation-2015",
    label: "AP Pulitzer-winning seafood investigation",
    title: "Seafood from Slaves — AP investigation",
    publisher: "Associated Press",
    year: 2015,
    url: "https://www.ap.org/about/awards-and-recognition/seafood-from-slaves/",
  },
  {
    id: "us-state-tip",
    label: "US State Department — Trafficking in Persons report",
    title: "Trafficking in Persons Report",
    publisher: "United States Department of State",
    year: 2024,
    url: "https://www.state.gov/reports/2024-trafficking-in-persons-report/",
  },
  {
    id: "greenpeace-distant-water",
    label: "Greenpeace — labour abuse in distant-water fleets",
    title: "Choppy Waters — distant-water fleet investigations",
    publisher: "Greenpeace International",
    year: 2020,
    url: "https://www.greenpeace.org/international/publication/45684/choppy-waters/",
  },
  {
    id: "fao-mangroves",
    label: "FAO mangrove loss data",
    title: "The world's mangroves — assessment",
    publisher: "Food and Agriculture Organization of the UN",
    url: "https://www.fao.org/forestry/mangrove/",
  },
  {
    id: "wwf-shrimp",
    label: "WWF shrimp aquaculture impacts",
    title: "Sustainable Shrimp Farming",
    publisher: "WWF",
    url: "https://www.worldwildlife.org/industries/farmed-shrimp",
  },
  {
    id: "greenpeace-cyanide",
    label: "Greenpeace / EJF cyanide fishing reports",
    title: "Cyanide fishing in the Coral Triangle",
    publisher: "Greenpeace / Environmental Justice Foundation",
    url: "https://ejfoundation.org/reports/",
  },
  {
    id: "icct-air-freight",
    label: "ICCT air freight emissions data",
    title: "CO₂ emissions from commercial aviation",
    publisher: "International Council on Clean Transportation",
    year: 2023,
    url: "https://theicct.org/publication/co2-emissions-from-commercial-aviation-2023/",
  },
];

export const citationById = (id: string): Citation | undefined =>
  citations.find((c) => c.id === id);
