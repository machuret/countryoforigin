import type { Industry } from "./types";

/**
 * Phase D — Industry deep data overlay.
 * Merged into base records via industryBySlug helper. Hand-curated.
 */
export const industriesDeep: Record<string, Partial<Industry>> = {
  "indigenous-fishing": {
    workforce: {
      direct: "~2,500 directly employed in Indigenous commercial fisheries",
      indirect: "~5,000 in ranger programs, processing, and Sea Country management",
      regions: ["NT", "Cape York", "Torres Strait", "Kimberley (WA)", "Coorong (SA)"],
      note: "Includes commercial, customary, and ranger-program roles. Does not include recreational customary fishing.",
    },
    economicImpact: {
      gvp: "$50M+ annual gross value of Indigenous commercial fisheries",
      domestic: "Most product sold domestically; some pearling exported",
      note: "Customary catch is not monetised but central to food security and culture.",
      citationId: "nailsma",
    },
    topProducers: [
      {
        name: "Indigenous Reference Group (IRG)",
        location: "National",
        products: "Policy and quota advocacy across Commonwealth fisheries",
        note: "Advises AFMA on Commonwealth fisheries management.",
      },
      {
        name: "Coorong Wild Seafood",
        location: "Meningie, SA",
        products: "Mulloway, mullet, Coorong pipi",
        note: "Ngarrindjeri-owned; first Indigenous-owned MSC-certified fishery in Australia.",
        url: "https://coorongwildseafood.com.au/",
      },
      {
        name: "Maningrida Wild Foods",
        location: "Arnhem Land, NT",
        products: "Mud crab, magpie goose, file snake",
        note: "Bawinanga Aboriginal Corporation enterprise.",
      },
      {
        name: "Torres Strait Tropical Rock Lobster Fishery",
        location: "Torres Strait",
        products: "Tropical rock lobster (kaiar)",
        note: "Indigenous quota-holders represent the majority of the fishery post-2018 reforms.",
      },
    ],
    associations: [
      {
        name: "NAILSMA — North Australian Indigenous Land & Sea Management Alliance",
        url: "https://www.nailsma.org.au/",
        note: "Peak body for Indigenous land and sea management across northern Australia.",
      },
      {
        name: "Indigenous Reference Group (AFMA)",
        note: "Statutory advisory group on Commonwealth fisheries policy.",
      },
      {
        name: "Torres Strait Regional Authority Fisheries",
        url: "https://www.tsra.gov.au/",
      },
    ],
    reports: [
      {
        title: "NT Indigenous Fisheries Development Strategy 2022–2032",
        publisher: "NT Department of Industry, Tourism and Trade",
        year: 2022,
        url: "https://industry.nt.gov.au/",
        summary: "Ten-year roadmap for Indigenous-led commercial seafood ventures in the NT.",
      },
      {
        title: "Mabo v Queensland (No 2)",
        publisher: "High Court of Australia",
        year: 1992,
        summary: "Recognised native title at common law — foundational for sea country claims.",
      },
      {
        title: "Akiba v Commonwealth",
        publisher: "High Court of Australia",
        year: 2013,
        summary: "Recognised non-exclusive native title rights to take fisheries resources for any purpose, including commercial.",
      },
    ],
    timeline: [
      { year: "65,000+ ya", event: "First Australians manage Sea Country across the continent." },
      { year: 1850, event: "Pearl-shell divers from Torres Strait, Broome and Thursday Island enter colonial trade." },
      { year: 1992, event: "Mabo decision recognises native title at common law." },
      { year: 1993, event: "Native Title Act protects customary fishing rights." },
      { year: 2013, event: "Akiba decision confirms commercial native-title fishing rights." },
      { year: 2018, event: "Torres Strait TRL fishery majority-Indigenous owned for first time." },
      { year: 2022, event: "NT Indigenous Fisheries Development Strategy launched." },
    ],
    regulation: {
      regulators: [
        { name: "AFMA Indigenous Reference Group", url: "https://www.afma.gov.au/" },
        { name: "Native Title Tribunal", url: "https://www.nntt.gov.au/" },
        { name: "State fisheries departments (co-management arrangements)" },
      ],
      schemes: [
        { name: "Native Title Act 1993", note: "Protects non-commercial customary fishing rights." },
        { name: "Indigenous Land Use Agreements (ILUAs)", note: "Negotiated co-management of sea country." },
        { name: "Indigenous Protected Areas (IPAs)", note: "Cover ~50% of the National Reserve System." },
      ],
    },
    certifications: [
      {
        name: "MSC — Coorong fishery",
        summary: "First Indigenous-owned MSC-certified fishery in Australia (mulloway, mullet, pipi).",
        url: "https://fisheries.msc.org/",
      },
    ],
    challenges: [
      {
        title: "Capital and quota access",
        note: "Quota markets in many fisheries make new Indigenous entry expensive. Government and corporate buy-back schemes are slowly redressing this.",
      },
      {
        title: "Climate impacts on Sea Country",
        note: "Cyclone intensity, mangrove dieback, and heat events are reshaping mud-crab, barramundi and pearling grounds.",
      },
      {
        title: "Compliance burden on small operators",
        note: "Reporting, vessel monitoring, and biosecurity systems designed for larger fleets create disproportionate cost for remote Indigenous operators.",
      },
    ],
    citationIds: [
      "nailsma",
      "native-title-1993",
      "mabo-1992",
      "akiba-2013",
      "nt-indigenous-fisheries-strategy",
      "coorong-coop",
      "torres-strait-plan",
    ],
  },

  "commercial-fishing": {
    workforce: {
      direct: "~17,000 direct jobs in catch, processing and logistics",
      indirect: "~20,000 indirect jobs in regional supply chains",
      regions: ["SA (Spencer Gulf, Port Lincoln)", "WA (Geraldton, Fremantle)", "TAS", "NSW", "QLD", "NT"],
      note: "Direct + indirect workforce per FRDC labour-market study.",
    },
    economicImpact: {
      gvp: "$1.6B+ wild-catch GVP per year",
      exports: "$1.2B+ in seafood exports — primarily rock lobster, abalone, tuna, prawns",
      domestic: "Bulk of finfish, prawns and squid stay in domestic markets",
      citationId: "frdc-economic-contribution",
    },
    topProducers: [
      {
        name: "Geraldton Fishermen's Co-operative",
        location: "Geraldton, WA",
        products: "Western rock lobster — world's largest single-species lobster fishery",
        url: "https://www.brolos.com.au/",
      },
      {
        name: "Australian Bight Seafood",
        location: "Port Lincoln, SA",
        products: "Bight redfish, deep-sea trevalla, ocean jacket",
      },
      {
        name: "Lakes Entrance Fishermen's Co-operative",
        location: "Lakes Entrance, VIC",
        products: "Gummy shark, blue grenadier, scallops",
      },
      {
        name: "Sydney Fish Market",
        location: "Pyrmont, NSW",
        products: "Auction floor for ~13,000t of seafood annually",
        url: "https://www.sydneyfishmarket.com.au/",
      },
      {
        name: "Spencer Gulf and West Coast Prawn Fishermen's Association",
        location: "Port Lincoln, SA",
        products: "Spencer Gulf king prawn",
      },
    ],
    associations: [
      { name: "Seafood Industry Australia (SIA)", url: "https://seafoodindustryaustralia.com.au/", note: "National peak body for the Australian seafood industry." },
      { name: "Fisheries Research and Development Corporation (FRDC)", url: "https://www.frdc.com.au/" },
      { name: "Commonwealth Fisheries Association", note: "Represents Commonwealth-licensed operators." },
      { name: "Western Rock Lobster Council", url: "https://www.westernrocklobster.org/" },
    ],
    reports: [
      {
        title: "Status of Australian Fish Stocks (SAFS) 2024",
        publisher: "FRDC",
        year: 2024,
        url: "https://fish.gov.au/",
        summary: "Biennial assessment of 150+ stocks, the most comprehensive in the world.",
      },
      {
        title: "Australian Fisheries and Aquaculture Outlook",
        publisher: "ABARES",
        year: 2024,
        url: "https://www.agriculture.gov.au/abares",
      },
      {
        title: "Australian Seafood Industry — Workforce 2030",
        publisher: "FRDC",
        year: 2022,
        summary: "Identifies labour shortages in deckhands, skippers and processors.",
      },
    ],
    timeline: [
      { year: 1788, event: "Sydney Cove fish market established within months of First Fleet arrival." },
      { year: 1872, event: "First commercial trawler operates out of Sydney." },
      { year: 1952, event: "Spencer Gulf prawn fishery begins commercial operation." },
      { year: 1978, event: "Australian Fishing Zone (AFZ) declared — 200nm exclusive economic zone." },
      { year: 1991, event: "Fisheries Management Act 1991 establishes AFMA." },
      { year: 1992, event: "First ITQs introduced in southern bluefin tuna fishery." },
      { year: 2007, event: "Northern Prawn Fishery becomes first Aussie fishery MSC-certified." },
      { year: 2024, event: "100% VMS coverage on Commonwealth-managed fleets." },
    ],
    regulation: {
      regulators: [
        { name: "AFMA — Australian Fisheries Management Authority", url: "https://www.afma.gov.au/" },
        { name: "State fisheries departments", note: "PIRSA, DPIRD, NSW DPI, VFA, Tas NRE, QLD Fisheries, NT Fisheries." },
        { name: "AMSA — Maritime safety, vessel surveys", url: "https://www.amsa.gov.au/" },
      ],
      schemes: [
        { name: "Individual Transferable Quotas (ITQs)", note: "Used in most major fisheries." },
        { name: "Total Allowable Catch (TAC) limits", note: "Set annually based on stock assessments." },
        { name: "Vessel Monitoring Systems (VMS)", note: "Mandatory on Commonwealth-managed vessels." },
        { name: "Harvest Strategy Policy", url: "https://www.afma.gov.au/" },
      ],
    },
    certifications: [
      { name: "MSC — Marine Stewardship Council", summary: "Used by WRL, NPF, spanner crab, MSC-certified mackerel and others." },
      { name: "BAP — Best Aquaculture Practices", summary: "Less common in wild-catch but used in some processor sites." },
    ],
    challenges: [
      { title: "Workforce shortages", note: "Skipper and deckhand pipelines stressed; FRDC Workforce 2030 identifies the issue as critical." },
      { title: "Climate-driven species shifts", note: "Eastern rock lobster moving south; flathead recruitment changes." },
      { title: "Marine park expansion", note: "Reduced effort grounds in Commonwealth and state marine parks." },
      { title: "Imports undercutting price", note: "66% of seafood eaten in Australia is imported, often at lower price points." },
    ],
    citationIds: [
      "safs-2024",
      "afma-harvest-strategies",
      "abares-fisheries-stats",
      "frdc-economic-contribution",
      "frdc-workforce",
      "fisheries-management-act-1991",
      "amsa-fishing-vessels",
      "abs-seafood-imports-66pc",
    ],
  },

  aquaculture: {
    workforce: {
      direct: "~5,000 direct jobs",
      indirect: "~10,000 indirect (feed mills, hatcheries, processing, vets, logistics)",
      regions: ["TAS", "SA (Eyre Peninsula)", "NSW (oysters)", "QLD (barramundi, prawns)", "NT", "WA (pearls, barramundi)"],
    },
    economicImpact: {
      gvp: "$1.9B annual GVP — now larger than wild catch by value",
      exports: "$0.3B exports (salmon, oysters, pearls)",
      domestic: "Most farmed product (salmon, barramundi, oysters, mussels) is consumed domestically.",
      citationId: "frdc-economic-contribution",
    },
    topProducers: [
      { name: "Tassal", location: "Tasmania", products: "Atlantic salmon", url: "https://www.tassal.com.au/" },
      { name: "Huon Aquaculture", location: "Tasmania", products: "Atlantic salmon, ocean trout", url: "https://www.huonaqua.com.au/" },
      { name: "Petuna Seafoods", location: "Tasmania", products: "Atlantic salmon, ocean trout", url: "https://petuna.com/" },
      { name: "Australis Aquaculture", location: "Northern Territory", products: "Barramundi", url: "https://thebetterfish.com/" },
      { name: "Humpty Doo Barramundi", location: "Northern Territory", products: "Barramundi", url: "https://humptydoobarramundi.com.au/" },
      { name: "Cone Bay Barramundi (MPA Group)", location: "Kimberley, WA", products: "Sea-cage barramundi" },
      { name: "Coffin Bay Oyster Farm", location: "South Australia", products: "Pacific oysters" },
      { name: "Sydney Rock Oyster growers (NSW)", location: "Hawkesbury, Wallis Lake, Port Stephens", products: "Sydney rock oysters" },
      { name: "Paspaley Pearling Co", location: "Broome, WA", products: "South Sea pearls", url: "https://www.paspaley.com/" },
    ],
    associations: [
      { name: "Australian Mussel Producers Association", url: "https://www.musselproducers.com.au/" },
      { name: "Australian Barramundi Farmers Association", url: "https://www.abfa.org.au/" },
      { name: "Oysters Australia", url: "https://www.oystersaustralia.org/" },
      { name: "Tasmanian Salmonid Growers Association", note: "Industry body for Tasmanian salmon farms." },
      { name: "National Aquaculture Council", url: "https://aquaculture.org.au/" },
    ],
    reports: [
      {
        title: "Australian Aquaculture Industry Profile",
        publisher: "Seafood Industry Australia",
        year: 2023,
        summary: "Production-by-species breakdown and growth trajectory.",
      },
      {
        title: "Tasmanian Salmon Industry Plan",
        publisher: "Tasmanian Government",
        year: 2023,
        url: "https://nre.tas.gov.au/",
      },
      {
        title: "ABARES Fisheries and Aquaculture Statistics",
        publisher: "ABARES",
        year: 2024,
        url: "https://www.agriculture.gov.au/abares",
      },
    ],
    timeline: [
      { year: 1872, event: "Sydney rock oyster cultivation begins commercially in NSW." },
      { year: 1947, event: "First commercial pearl farm at Kuri Bay, WA (Paspaley)." },
      { year: 1985, event: "First Atlantic salmon eggs imported to Tasmania." },
      { year: 1986, event: "First commercial salmon harvest in Tasmania." },
      { year: 1989, event: "Pacific oysters established in SA's Coffin Bay." },
      { year: 2008, event: "Barramundi sea-cage farming begins at Cone Bay, WA." },
      { year: 2015, event: "Pacific Oyster Mortality Syndrome (POMS) outbreak in NSW and TAS." },
      { year: 2024, event: "Australian aquaculture surpasses $1.9B GVP — now larger than wild catch." },
    ],
    regulation: {
      regulators: [
        { name: "State EPAs", note: "Environmental approvals for marine farms." },
        { name: "Tasmanian DPIPWE / NRE", url: "https://nre.tas.gov.au/" },
        { name: "PIRSA Aquaculture", url: "https://pir.sa.gov.au/" },
        { name: "DAFF Biosecurity", url: "https://www.agriculture.gov.au/biosecurity-trade" },
      ],
      schemes: [
        { name: "Marine Farming Development Plans (TAS)" },
        { name: "Aquaculture leases (state-administered)" },
        { name: "Veterinary Health Plans for finfish" },
        { name: "Translocation protocols", note: "Strict rules on moving live aquatic animals between catchments." },
      ],
    },
    certifications: [
      { name: "ASC — Aquaculture Stewardship Council", summary: "Used by Tassal, Huon, Petuna for salmon and trout." },
      { name: "BAP — Best Aquaculture Practices", summary: "Used across barramundi and salmon farms." },
      { name: "RSPCA Approved Farming", summary: "Used by some salmon producers for welfare standards." },
    ],
    challenges: [
      { title: "Marine heatwaves", note: "Tasmanian waters warming faster than global average; oxygen stress in salmon farms." },
      { title: "POMS in oysters", note: "Pacific Oyster Mortality Syndrome devastated some NSW estuaries from 2015." },
      { title: "Social licence", note: "Salmon-farm siting in Macquarie Harbour and Storm Bay subject to ongoing community debate." },
      { title: "Feed sustainability", note: "Reducing wild-fish inputs in salmonid feed; growing use of plant and insect proteins." },
    ],
    citationIds: [
      "tas-salmon-industry",
      "abfa-barramundi",
      "oysters-australia",
      "frdc-economic-contribution",
      "abares-fisheries-stats",
      "guardian-salmon-tas",
    ],
  },

  processors: {
    workforce: {
      direct: "~9,000 direct in seafood processing facilities",
      indirect: "~12,000 indirect in cold-chain logistics, packaging, retail handling",
      regions: ["TAS (Hobart, Devonport)", "SA (Port Lincoln, Adelaide)", "VIC (Melbourne)", "NSW (Sydney)", "QLD (Brisbane, Cairns)"],
    },
    economicImpact: {
      gvp: "~$2B value-add from Australian seafood processing",
      domestic: "Domestic retail and foodservice the primary market",
      note: "Includes filleting, smoking, canning, freezing, value-added retail packs.",
      citationId: "frdc-economic-contribution",
    },
    topProducers: [
      { name: "Tassal Processing", location: "Huonville & Margate, TAS", products: "Salmon fillets, value-added retail packs" },
      { name: "Huon Aquaculture Parramatta Creek", location: "TAS", products: "Salmon processing and smoking" },
      { name: "Sydney Fish Market Processing", location: "Pyrmont, NSW", products: "Auction-to-foodservice processing of mixed wild catch" },
      { name: "De Costi Seafoods", location: "Sydney, NSW", products: "Wholesale and retail seafood processor", url: "https://decostiseafoods.com.au/" },
      { name: "Walker Seafoods Australia", location: "Mooloolaba, QLD", products: "Long-line tuna, swordfish processing", url: "https://walkerseafoods.com.au/" },
      { name: "MG Kailis Group", location: "WA", products: "Prawn and finfish processing" },
    ],
    associations: [
      { name: "Seafood Industry Australia", url: "https://seafoodindustryaustralia.com.au/" },
      { name: "Australian Food and Grocery Council", url: "https://www.afgc.org.au/" },
      { name: "Refrigerated Warehouse and Transport Association of Australia", url: "https://www.rwta.com.au/" },
    ],
    reports: [
      {
        title: "FSANZ Food Standards Code",
        publisher: "Food Standards Australia New Zealand",
        url: "https://www.foodstandards.gov.au/",
        summary: "Defines additives, residues and labelling for all processed seafood.",
      },
      {
        title: "Country of Origin Information Standard 2025",
        publisher: "ACCC / Department of Industry",
        year: 2025,
        url: "https://www.accc.gov.au/",
        summary: "Mandatory CoOL labelling on packaged seafood.",
      },
      {
        title: "Cool-Fi (Cooked-Food) Information Standard",
        publisher: "Department of Industry",
        year: 2026,
        summary: "From 1 July 2026 — extends CoOL labelling to cooked seafood at fishmongers and foodservice.",
      },
    ],
    timeline: [
      { year: 1865, event: "First commercial fish-cannery (mullet) opens in Tasmania." },
      { year: 1937, event: "FSANZ predecessor (NHMRC food code) established." },
      { year: 2002, event: "FSANZ Food Standards Code consolidates national rules." },
      { year: 2016, event: "Country of Origin Information Standard 2016 introduced (packaged foods)." },
      { year: 2018, event: "AFNS — Australian Fish Names Standard becomes mandatory under FSANZ." },
      { year: 2025, event: "CoOL Information Standard 2025 in force." },
      { year: 2026, event: "Cooked-fish CoOL rules begin 1 July 2026." },
    ],
    regulation: {
      regulators: [
        { name: "FSANZ", url: "https://www.foodstandards.gov.au/" },
        { name: "ACCC — Australian Competition and Consumer Commission", url: "https://www.accc.gov.au/" },
        { name: "State health authorities", note: "Audit HACCP plans on processor sites." },
        { name: "DAFF Imported Food Inspection Scheme", url: "https://www.agriculture.gov.au/" },
      ],
      schemes: [
        { name: "HACCP", note: "Mandatory food-safety plan." },
        { name: "Country of Origin Information Standard 2025" },
        { name: "Cool-Fi Information Standard (1 July 2026)", note: "Cooked seafood CoOL labelling." },
        { name: "Australian Fish Names Standard (AFNS)", note: "Mandatory naming under FSANZ Code." },
        { name: "Australian Consumer Law — Schedule 2", note: "Bans misleading conduct; covers seafood mislabelling." },
      ],
    },
    certifications: [
      { name: "HACCP", summary: "Mandatory hazard-analysis food-safety plan." },
      { name: "SQF — Safe Quality Food", summary: "Used by larger processors for retail compliance." },
      { name: "BRCGS Global Standard for Food Safety", summary: "Used for export-grade processing facilities." },
    ],
    challenges: [
      { title: "Seafood mislabelling", note: "Studies (Oceana, AMCS) show 11–34% mislabelling rates at point-of-sale; CoOL rules from 2026 aim to address this." },
      { title: "Import competition", note: "66% of seafood eaten in Australia is imported, often re-processed and sold without clear origin." },
      { title: "Energy costs", note: "Cold-chain electricity costs major operating-cost driver." },
      { title: "Skilled labour", note: "Filleting and smoking labour shortages flagged in FRDC workforce reports." },
    ],
    citationIds: [
      "info-standard-2025",
      "coolfi-standard",
      "aff-fish-names-standard",
      "acl-schedule-2",
      "oceana-mislabelling",
      "amcs-dna",
      "abs-seafood-imports-66pc",
      "frdc-economic-contribution",
    ],
  },

  "tuna-ranching": {
    workforce: {
      direct: "~700 direct jobs in Port Lincoln tuna ranching",
      indirect: "~2,000 indirect (sardine bait fishery, cage manufacture, freight, vets)",
      regions: ["Port Lincoln, SA (only ranching site)", "Great Australian Bight (capture grounds)"],
    },
    economicImpact: {
      gvp: "~$200M annual industry value",
      exports: "Almost 100% exported, primarily Japan (sashimi market)",
      note: "Australia's CCSBT quota is ~6,000t/year (subject to triennial reviews).",
      citationId: "frdc-economic-contribution",
    },
    topProducers: [
      { name: "Stehr Group", location: "Port Lincoln, SA", products: "Southern bluefin tuna ranching pioneer" },
      { name: "Australian Tuna Boat Owners Association (ATBOA)", location: "Port Lincoln, SA", note: "Industry body for SBT operators." },
      { name: "Tony's Tuna International", location: "Port Lincoln, SA", products: "SBT ranching and processing" },
      { name: "Sarin Marine Farm", location: "Port Lincoln, SA", products: "SBT ranching" },
    ],
    associations: [
      { name: "Australian Southern Bluefin Tuna Industry Association (ASBTIA)" },
      { name: "Commission for the Conservation of Southern Bluefin Tuna (CCSBT)", url: "https://www.ccsbt.org/", note: "International quota and stock-assessment body." },
    ],
    reports: [
      {
        title: "CCSBT Stock Assessment",
        publisher: "Commission for the Conservation of Southern Bluefin Tuna",
        year: 2023,
        url: "https://www.ccsbt.org/",
        summary: "Triennial assessment underpinning the rebuilding strategy.",
      },
      {
        title: "Status of Australian Fish Stocks — SBT chapter",
        publisher: "FRDC",
        year: 2024,
        url: "https://fish.gov.au/",
      },
    ],
    timeline: [
      { year: 1952, event: "Commercial SBT pole-and-line fishery begins in SA." },
      { year: 1982, event: "Catches peak globally; stock crashes through the 1980s." },
      { year: 1994, event: "CCSBT established with binding national quotas." },
      { year: 1996, event: "First commercial tuna ranching trial in Port Lincoln succeeds." },
      { year: 2009, event: "Stock declared severely depleted; quotas slashed." },
      { year: 2014, event: "Stock declared 'recovering' under CCSBT rebuilding strategy." },
      { year: 2024, event: "Quota raised in line with rebuilt stock; ~6,000t for Australia." },
    ],
    regulation: {
      regulators: [
        { name: "CCSBT — international quota authority", url: "https://www.ccsbt.org/" },
        { name: "AFMA — domestic management", url: "https://www.afma.gov.au/" },
        { name: "PIRSA Aquaculture — pen leases in Port Lincoln" },
      ],
      schemes: [
        { name: "Catch Documentation Scheme (CDS)", note: "Every fish tracked from cage to plate." },
        { name: "Statutory Fishing Rights (SFRs)", note: "Tradeable individual quotas." },
        { name: "Vessel Monitoring System (VMS)", note: "100% coverage on capture vessels." },
      ],
    },
    certifications: [
      { name: "CCSBT CDS", summary: "Every harvested fish has electronic tag and origin record — gold-standard traceability." },
    ],
    challenges: [
      { title: "Climate-driven distribution shifts", note: "SBT spawning grounds and migration paths sensitive to ocean warming." },
      { title: "Feed sustainability", note: "Pen-fed sardines/pilchards put pressure on bait fisheries; FCR research ongoing." },
      { title: "Closed-cycle breeding", note: "Hatchery-reared SBT (vs wild juvenile capture) remains a long-term R&D goal." },
      { title: "Market concentration", note: "Almost entirely dependent on Japanese sashimi market — exchange-rate and demand risk." },
    ],
    citationIds: [
      "safs-2024",
      "afma-harvest-strategies",
      "frdc-economic-contribution",
      "abares-fisheries-stats",
    ],
  },
};
