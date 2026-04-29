import type { CampaignPage } from "./types";

export const whyAustralianPillars: CampaignPage[] = [
  {
    slug: "health",
    name: "Health & Nutrition",
    tagline: "Pillar 1 of 4",
    summary:
      "Australian seafood is harvested from cleaner waters, reaches you faster, and is regulated under some of the world's strictest food-safety standards. Here's the evidence.",
    theme: "ocean",
    heroStat: {
      value: "1.7×",
      label: "More omega-3 in Australian barramundi than imported equivalents",
    },
    sections: [
      {
        heading: "More omega-3, every time",
        body:
          "Cold-water and clean-water fish accumulate more long-chain omega-3 fatty acids (EPA + DHA) — the type associated with cardiovascular and neurological health. Tasmanian Atlantic salmon, Spencer Gulf prawns, and Northern Australian barramundi consistently outperform imported equivalents on omega-3 per 100g.",
        bullets: [
          "Tasmanian salmon: ~2,700mg omega-3 per 100g vs ~2,100mg in Norwegian/Chilean equivalents",
          "Australian barramundi: ~820mg vs ~480mg in Thai/Vietnamese imports",
          "The Heart Foundation recommends 2–3 servings of oily fish per week",
        ],
      },
      {
        heading: "Less mercury, more trust",
        body:
          "Mercury accumulates in long-lived predatory fish. Imported tuna products tend to come from older, larger animals with higher methylmercury concentrations. Australian Southern Bluefin Tuna is ranched from juveniles fed clean sardines — drastically reducing mercury load.",
        bullets: [
          "FSANZ Australian Total Diet Study confirms low mercury in Australian-caught species",
          "Pregnant women and young children are advised to choose lower-mercury options",
          "Imported shark/tuna products account for most mercury exposure in Australian diets",
        ],
        stat: { value: "Low", label: "Mercury level in Australian-ranched Southern Bluefin Tuna" },
      },
      {
        heading: "Antibiotic-free, additive-free",
        body:
          "Australian aquaculture standards prohibit hormones and tightly restrict antibiotics. Australian processors do not use water-injection (sodium tripolyphosphate) on whole fish — a practice common overseas to inflate weight and mask freshness loss.",
        bullets: [
          "Tasmanian salmon farms operate under strict Veterinary Health Plans",
          "Sulphites (a common allergen used to preserve imported prawns) require mandatory labelling in Australia",
          "FSANZ random surveillance regularly detects banned residues in imported product",
        ],
      },
      {
        heading: "Faster from boat to plate",
        body:
          "Most Australian seafood reaches retail within 2–3 days of harvest. Imported equivalents typically take 14–21 days from net to shelf — frozen, thawed, and refrozen along the way. That gap shows up in nutrient retention, texture, and flavour.",
        stat: { value: "2–3 days", label: "Tasmanian salmon from harvest to Sydney plate" },
      },
    ],
    cta: {
      headline: "See the science species by species",
      body: "Every species page shows the per-100g nutrition delta against imported.",
      href: "/species",
      label: "Browse species profiles",
    },
    citationIds: ["fsanz-tds", "heart-foundation-omega3", "fsanz-mercury-2024"],
  },
  {
    slug: "economy",
    name: "Economy & Community",
    tagline: "Pillar 2 of 4",
    summary:
      "Choosing Australian seafood directly supports coastal economies, regional jobs, and the Indigenous Sea Country economy. Here's how the dollars flow.",
    theme: "navy",
    heroStat: {
      value: "$3B+",
      label: "Annual gross value of Australian seafood production",
    },
    sections: [
      {
        heading: "Regional jobs depend on it",
        body:
          "Seafood is the economic backbone of dozens of Australian coastal towns. From Port Lincoln (tuna ranching) to Geraldton (rock lobster), Eden (offshore trawl) to Broome (pearling), entire local economies are built on the industry.",
        bullets: [
          "~17,000 direct jobs in Australian seafood (catch + aquaculture + processing)",
          "Multiplier of 3–4× when supply chain, retail, and hospitality jobs are included",
          "Many Aboriginal communities operate or co-manage commercial fisheries",
        ],
        stat: { value: "17,000+", label: "Direct jobs in Australian seafood" },
      },
      {
        heading: "Indigenous Sea Country economy",
        body:
          "Indigenous-owned commercial fisheries — pearling, mud crab, trochus, beche-de-mer, finfish — are now a meaningful part of the Australian seafood economy. Choosing Australian product supports the long-overdue economic recognition of Sea Country.",
        bullets: [
          "Native Title Act 1993 recognises customary fishing rights",
          "100+ Indigenous Ranger groups co-manage fisheries",
          "Significant Indigenous-owned operations across NT, Cape York, Torres Strait, Kimberley",
        ],
      },
      {
        heading: "Where your dollar goes",
        body:
          "When you buy imported seafood, the bulk of the price flows offshore — to the catching vessel, the processor, the freight chain, and the importer. When you buy Australian, you keep that value in regional Australia: at the dock, at the cooperative, at the family processor in Lakes Entrance or Geraldton.",
        bullets: [
          "$1 spent locally typically generates $3–4 in regional economic activity",
          "Imported seafood at supermarket scale flows largely to multinational distributors",
          "Local restaurants buying local strengthen tourism and food culture",
        ],
      },
      {
        heading: "Exports build the brand",
        body:
          "Australia exports premium product (rock lobster, tuna, abalone, salmon) to Asia and the US. The premiums earned overseas fund the science, biosecurity, and quota programs that protect the resource for everyone — locals included.",
      },
    ],
    cta: {
      headline: "Find a region near you",
      body: "Browse 50+ fishing regions and see who's behind your dinner.",
      href: "/areas",
      label: "Explore states & regions",
    },
    citationIds: ["abares-fisheries-stats", "frdc-economic-contribution", "native-title-1993"],
  },
  {
    slug: "environment",
    name: "Environment & Sustainability",
    tagline: "Pillar 3 of 4",
    summary:
      "Australia operates among the world's most rigorously managed fisheries, with extensive marine protected areas and science-based quotas. The environmental gap to imported seafood is enormous.",
    theme: "ocean",
    heroStat: {
      value: "13.3M km²",
      label: "Australia's marine jurisdiction — among the largest on Earth",
    },
    sections: [
      {
        heading: "Quota-based, science-led",
        body:
          "Almost every Australian commercial fishery operates under Total Allowable Catch (TAC) or Individual Transferable Quota (ITQ) systems. AFMA's Status of Australian Fish Stocks reports — published every two years — track every major stock against transparent benchmarks.",
        bullets: [
          "100% of Commonwealth-managed fisheries operate under quota",
          "Stock-status reports published every two years (DAFF)",
          "Recovery plans triggered automatically when biomass falls below thresholds",
          "Western Rock Lobster — world's first MSC-certified fishery (2000)",
        ],
      },
      {
        heading: "Massive marine protection",
        body:
          "Australia has built one of the world's largest networks of marine protected areas — protecting habitat, breeding aggregations, and biodiversity that imported-seafood-supplying nations often do not. Roughly 45% of Australia's marine jurisdiction lies within reserves.",
        stat: { value: "~45%", label: "Of Australian waters within Marine Protected Areas" },
      },
      {
        heading: "Low-bycatch methods",
        body:
          "Australian fisheries have invested heavily in selective gear. Pot fisheries (lobster, crab) have near-zero bycatch. The Northern Prawn Fishery uses Bycatch Reduction Devices and Turtle Excluder Devices. Long-line shark mitigation systems are world-leading.",
        bullets: [
          "Pot fisheries: near-zero bycatch by design",
          "Mandatory TEDs and BRDs in tropical prawn trawls",
          "Vessel Monitoring Systems (VMS) on all Commonwealth fleets",
        ],
      },
      {
        heading: "Lower carbon footprint",
        body:
          "Australian seafood typically travels under 1,000km from harvest to plate. Imported salmon, prawns, and tuna often travel 8,000–15,000km — frequently by air freight, the highest-emission mode of food transport in existence.",
        stat: { value: "<1,000km", label: "Typical Australian seafood transport distance" },
      },
    ],
    cta: {
      headline: "Read the risks of imported seafood",
      body:
        "From bottom trawling to mangrove destruction — see what international fisheries look like.",
      href: "/risks-of-imported/environment",
      label: "Imported environmental risks",
    },
    citationIds: ["safs-2024", "msc-wrl-2000", "daff-mpa"],
  },
  {
    slug: "taste",
    name: "Taste & Quality",
    tagline: "Pillar 4 of 4",
    summary:
      "Freshness is flavour. Australian seafood reaches you days, not weeks, after harvest — and we have native species you can't get anywhere else on Earth.",
    theme: "coral",
    heroStat: { value: "Native", label: "Sydney Rock Oyster — found nowhere else on Earth" },
    sections: [
      {
        heading: "The science of fresh",
        body:
          "Once a fish dies, ATP breaks down, lipids oxidise, and texture changes within hours. The shorter the chain from boat to plate, the better the fish eats. Australian seafood routinely arrives at retail within 2–3 days of harvest. Imported equivalents are often 2–3 weeks old.",
        bullets: [
          "Rigor mortis windows make 0–4°C cold chain critical",
          "Lipid oxidation accelerates with every freeze-thaw cycle",
          "Sashimi-grade tuna requires harvesting and chilling within minutes",
        ],
      },
      {
        heading: "Species you can't get anywhere else",
        body:
          "Some of Australia's most prized seafood is endemic — found in our waters and nowhere else. The Sydney Rock Oyster (Saccostrea glomerata) is native only to NSW estuaries. Spencer Gulf King Prawns are widely judged the world's finest. Southern Bluefin Tuna is the global benchmark for premium sashimi tuna.",
        bullets: [
          "Sydney Rock Oyster — endemic to NSW & southern QLD",
          "Spencer Gulf King Prawn — globally regarded as the world's finest prawn",
          "Greenlip Abalone — world's largest wild fishery is Australian",
          "Southern Bluefin Tuna — premium sashimi standard",
        ],
      },
      {
        heading: "Chefs who source local say so",
        body:
          "Australia's leading restaurants — from Saint Peter (Josh Niland) to Tetsuya's, Cutler &amp; Co, and Ester — increasingly source 100% local. The flavour, transparency, and provenance story are too important to compromise.",
        stat: { value: "100%", label: "Australian sourcing at the country's leading seafood restaurants" },
      },
      {
        heading: "How to taste the difference",
        body:
          "Buy a Sydney Rock Oyster next to a Pacific oyster. Try Tasmanian salmon next to a Norwegian fillet. Cook a Spencer Gulf prawn next to an imported one. The difference in texture, flavour intensity, and clean finish is unmistakable.",
      },
    ],
    cta: {
      headline: "Pick a species and taste it tonight",
      body: "Each species profile includes flavour notes and how to cook it.",
      href: "/species",
      label: "Browse species",
    },
  },
];

