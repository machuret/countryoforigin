import type { Comparison } from "./types";

/**
 * Phase E — Comparison deep data overlay.
 * Hand-curated additional context per comparison: price drivers, carbon, jobs,
 * freshness, welfare, mislabelling risk, traceability, methodology and bottom line.
 * Numeric values are rough order-of-magnitude estimates with citations or
 * explicit `editorial` provenance where reported sources are absent.
 */
export const comparisonsDeep: Record<string, Partial<Comparison>> = {
  "barramundi-aus-vs-imported": {
    priceContext:
      "Imported barramundi from Thailand and Vietnam is typically 30–50% cheaper at retail because of lower wages, scale, and government export subsidies in source countries. The Australian price reflects local labour, biosecurity, feed and freight costs.",
    carbon: {
      ausValue: 4.2,
      impValue: 14.5,
      unit: "kg CO₂e per kg edible product (cradle-to-retail)",
      note: "Imported product is mostly air-freighted and has higher feed-conversion impacts.",
      citationId: "icct-air-freight",
    },
    jobs: {
      ausValue: 5,
      impValue: 0,
      unit: "Australian FTE jobs supported per tonne sold",
      note: "Includes farm, hatchery, feed, processing and freight.",
      citationId: "frdc-economic-contribution",
    },
    freshnessDays: {
      ausValue: 2,
      impValue: 14,
      unit: "days from harvest to retail",
      note: "Australian product is generally fresh; most imported barramundi arrives frozen.",
      citationId: "editorial-supply-chain",
    },
    welfare: {
      aus: "Veterinary Health Plans, low stocking density, ASC and BAP certified farms",
      imp: "Variable; mangrove clearing and disease pressure documented in some source regions",
      citationId: "fao-mangroves",
    },
    mislabellingRisk: {
      aus: "Low — Australian Fish Names Standard mandatory",
      imp: "Moderate — DNA studies show 11–34% mislabelling at retail/foodservice",
      citationId: "amcs-dna",
    },
    traceability: {
      aus: "Producer-to-plate; mandatory CoOL labelling",
      imp: "Limited; reliant on importer declarations",
      citationId: "info-standard-2025",
    },
    methodNote:
      "Carbon, freshness and jobs values are sector-level estimates. See cited sources for ranges; actual values vary by farm and route.",
    bottomLine:
      "Australian barramundi is more expensive but cleaner, fresher, lower-carbon and supports local jobs. Imported product is the cheaper option but rarely traceable to farm.",
    citationIds: [
      "abfa-barramundi",
      "amcs-dna",
      "icct-air-freight",
      "fao-mangroves",
      "info-standard-2025",
      "editorial-supply-chain",
      "frdc-economic-contribution",
    ],
  },

  "salmon-aus-vs-norway": {
    priceContext:
      "Norwegian and Chilean salmon is cheaper because of vast scale, lower energy costs and intensive sea-cage farming with established global feed supply chains. Tasmanian product is priced for fresher, shorter chain and stricter biosecurity.",
    carbon: {
      ausValue: 5.0,
      impValue: 12.0,
      unit: "kg CO₂e per kg edible (mostly air-freighted from Europe/Chile)",
      citationId: "icct-air-freight",
    },
    jobs: {
      ausValue: 8,
      impValue: 0,
      unit: "Australian FTE jobs supported per tonne sold",
      citationId: "tas-salmon-industry",
    },
    freshnessDays: {
      ausValue: 3,
      impValue: 18,
      unit: "days harvest-to-retail",
      note: "Tasmanian product is usually flown fresh nationally; imports often frozen or arrive 14+ days post-harvest.",
      citationId: "editorial-supply-chain",
    },
    welfare: {
      aus: "ASC, RSPCA Approved options; ongoing public scrutiny in Macquarie Harbour",
      imp: "ASC available; sea-lice and density issues persist in major export regions",
      citationId: "guardian-salmon-tas",
    },
    mislabellingRisk: {
      aus: "Low under AFNS",
      imp: "Low for whole salmon; higher for smoked/value-added products",
      citationId: "aff-fish-names-standard",
    },
    traceability: {
      aus: "Pen-to-plate batch tracking",
      imp: "Variable; tracked to importer not always to farm",
    },
    methodNote:
      "Carbon estimates assume sea-freight from Norway and air-freight from Chile blended; actual route shares change with seasons and tariffs.",
    bottomLine:
      "Tasmanian salmon is the freshest, lowest-air-miles option for Australian buyers and supports a $1B+ regional economy. Imports are cheaper but slower and rarely fresh.",
    citationIds: [
      "tas-salmon-industry",
      "guardian-salmon-tas",
      "icct-air-freight",
      "aff-fish-names-standard",
      "editorial-supply-chain",
    ],
  },

  "prawns-aus-vs-asia": {
    priceContext:
      "Vietnamese, Indian and Chinese farmed prawns are cheaper because of lower-cost ponds, lower wages, lower biosecurity bar and bulk frozen freight. Spencer Gulf wild prawns are wild-caught, MSC-aligned and never frozen at sea on the best vessels.",
    carbon: {
      ausValue: 3.5,
      impValue: 18.0,
      unit: "kg CO₂e per kg (mangrove conversion adds heavily for some imports)",
      citationId: "fao-mangroves",
    },
    jobs: {
      ausValue: 7,
      impValue: 0,
      unit: "Australian FTE jobs supported per tonne sold",
      citationId: "sa-prawn-coop",
    },
    freshnessDays: {
      ausValue: 2,
      impValue: 30,
      unit: "days harvest-to-retail (imports usually frozen weeks)",
      citationId: "editorial-supply-chain",
    },
    welfare: {
      aus: "Brief tow times; rapid chill at sea",
      imp: "Pond-grown; antibiotic residues sometimes detected",
      citationId: "fsanz-antibiotic-residues",
    },
    mislabellingRisk: {
      aus: "Low — covered by AFNS",
      imp: "Moderate — sulphite and species substitution documented",
      citationId: "choice-prawn-test",
    },
    traceability: {
      aus: "Vessel-to-plate",
      imp: "Limited; pond-level rare",
    },
    methodNote:
      "Carbon range for imports is wide depending on whether ponds replaced mangrove (high) or rice paddy (lower).",
    bottomLine:
      "Spencer Gulf prawns are world-class — sustainable, fresh, lower-carbon, and never use sulphites. Imports are cheaper but carry welfare, residue and ecosystem-conversion risks.",
    citationIds: [
      "sa-prawn-coop",
      "choice-prawn-test",
      "fsanz-antibiotic-residues",
      "fao-mangroves",
      "wwf-shrimp",
      "editorial-supply-chain",
    ],
  },

  "tuna-southern-bluefin-vs-imported": {
    priceContext:
      "Imported yellowfin and bigeye are cheaper because of larger global supply, mixed long-line fleets and lower CCSBT-style traceability requirements. SBT is a closed, quota-managed sashimi-grade product.",
    carbon: {
      ausValue: 6.0,
      impValue: 11.0,
      unit: "kg CO₂e per kg",
      note: "Long-line tuna chains can be very fuel-intensive depending on fleet and freezing.",
      citationId: "icct-air-freight",
    },
    jobs: {
      ausValue: 4,
      impValue: 0,
      unit: "Australian FTE jobs per tonne (Port Lincoln cluster)",
      citationId: "frdc-economic-contribution",
    },
    freshnessDays: {
      ausValue: 4,
      impValue: 21,
      unit: "days harvest-to-plate (fresh sashimi)",
      citationId: "editorial-supply-chain",
    },
    welfare: {
      aus: "Pen feeding 3–6 months; harvest by ike-jime methods",
      imp: "Mixed; long-line fleets carry bycatch and labour concerns",
      citationId: "ilo-forced-labour-fishing",
    },
    mislabellingRisk: {
      aus: "Low under CCSBT CDS",
      imp: "Moderate; tuna is a top-mislabelled species globally",
      citationId: "oceana-mislabelling",
    },
    traceability: {
      aus: "Every fish electronic-tagged under CCSBT Catch Documentation Scheme",
      imp: "Variable; rarely cage- or vessel-level",
    },
    methodNote:
      "SBT carbon includes pen-feeding cycle. Imported tuna carbon assumes long-line fleet plus air freight.",
    bottomLine:
      "Australian SBT is the gold-standard for traceable, quota-managed tuna. Imports are cheaper but carry significant labour, bycatch and origin-fraud risks.",
    citationIds: [
      "safs-2024",
      "afma-harvest-strategies",
      "ilo-forced-labour-fishing",
      "oceana-mislabelling",
      "icct-air-freight",
      "frdc-economic-contribution",
    ],
  },

  "oysters-aus-vs-imported": {
    priceContext:
      "Imported oysters (frozen or canned) are cheaper because of scale and lower handling cost. Live Australian Sydney rock and Pacific oysters are sold within days of harvest and cost more.",
    carbon: {
      ausValue: 2.5,
      impValue: 6.0,
      unit: "kg CO₂e per kg",
      note: "Bivalves are among the lowest-carbon proteins; air-freight tips the imported number.",
      citationId: "editorial-carbon-footprint",
    },
    jobs: {
      ausValue: 9,
      impValue: 0,
      unit: "Australian FTE jobs per tonne (estuary clusters)",
      citationId: "oysters-australia",
    },
    freshnessDays: { ausValue: 2, impValue: 21, unit: "days harvest-to-plate (live)" },
    welfare: { aus: "Bivalves; rope/rack culture; nil welfare concern", imp: "Bivalves; nil welfare concern" },
    mislabellingRisk: {
      aus: "Very low",
      imp: "Low for shells; species name rarely fraudulent",
    },
    traceability: { aus: "Lease-to-plate; harvest classification mandatory", imp: "Variable" },
    bottomLine:
      "Live Australian oysters are unbeatable for freshness and provenance, with negligible welfare or carbon downside. Imports are mostly frozen/canned with much longer chains.",
    citationIds: ["oysters-australia", "editorial-carbon-footprint", "info-standard-2025"],
  },

  "abalone-aus-vs-imported": {
    priceContext:
      "Imported abalone (China, Chile, Mexico) is cheaper but variable in quality. Wild Tasmanian and Victorian abalone is the world's premium product, exported live and rarely undersold.",
    carbon: { ausValue: 4.0, impValue: 13.0, unit: "kg CO₂e per kg", citationId: "editorial-carbon-footprint" },
    jobs: { ausValue: 6, impValue: 0, unit: "Australian FTE per tonne", citationId: "frdc-economic-contribution" },
    freshnessDays: { ausValue: 3, impValue: 21, unit: "days dive-to-table (live)" },
    welfare: { aus: "Hand-dive harvest; minimal bycatch", imp: "Often farmed in tanks or sea cages" },
    mislabellingRisk: { aus: "Very low", imp: "Moderate — meat substitution documented in canned product" },
    traceability: { aus: "Diver-tag and quota documentation", imp: "Variable" },
    bottomLine: "Australian abalone is among the world's most prized and best-managed; imports are cheaper but rarely match quality.",
    citationIds: ["frdc-economic-contribution", "editorial-carbon-footprint", "amcs-dna"],
  },

  "mussels-aus-vs-imported": {
    priceContext:
      "European Mediterranean mussels are cheap and ubiquitous in tinned form; Australian mussels are mostly fresh from long-lines in Spring Bay (TAS), Port Phillip (VIC) and Boston Bay (SA).",
    carbon: { ausValue: 1.5, impValue: 5.5, unit: "kg CO₂e per kg", note: "Bivalves are among the lowest-impact proteins.", citationId: "editorial-carbon-footprint" },
    jobs: { ausValue: 7, impValue: 0, unit: "Australian FTE per tonne" },
    freshnessDays: { ausValue: 2, impValue: 30, unit: "days harvest-to-retail" },
    welfare: { aus: "No welfare concern (bivalve)", imp: "No welfare concern (bivalve)" },
    mislabellingRisk: { aus: "Very low", imp: "Low" },
    traceability: { aus: "Lease-to-plate", imp: "Variable" },
    bottomLine: "Australian mussels are an excellent low-carbon, low-welfare-risk choice; imports are usually tinned and slower-chain.",
    citationIds: ["editorial-carbon-footprint", "info-standard-2025"],
  },

  "rocklobster-aus-vs-imported": {
    priceContext: "Imported lobster (US, Canada, NZ) is cheaper at scale; Australian Eastern and Southern rock lobster is premium, MSC-aligned and largely exported.",
    carbon: { ausValue: 8.0, impValue: 18.0, unit: "kg CO₂e per kg", note: "Live air-freighted lobster is high-carbon regardless of origin.", citationId: "icct-air-freight" },
    jobs: { ausValue: 9, impValue: 0, unit: "Australian FTE per tonne" },
    freshnessDays: { ausValue: 3, impValue: 14, unit: "days pot-to-plate (live)" },
    welfare: { aus: "Pot-caught; live transport in oxygenated tanks", imp: "Mostly trap-caught; mixed conditions" },
    mislabellingRisk: { aus: "Very low", imp: "Low" },
    traceability: { aus: "Tag-to-plate; quota documented", imp: "Variable" },
    bottomLine: "Australian rock lobster is world-leading on stock management; imports are cheaper but rarely live-handled to Australian standards.",
    citationIds: ["msc-wrl-2000", "msc-registry", "icct-air-freight"],
  },

  "western-rocklobster-aus-vs-imported": {
    priceContext: "Imported alternatives (US/Canada lobster, NZ packhorse) are cheaper. WRL is the world's largest single-species lobster fishery and has held MSC certification since 2000.",
    carbon: { ausValue: 7.5, impValue: 18.0, unit: "kg CO₂e per kg" },
    jobs: { ausValue: 9, impValue: 0, unit: "Australian FTE per tonne", citationId: "frdc-economic-contribution" },
    freshnessDays: { ausValue: 3, impValue: 14, unit: "days pot-to-plate (live)" },
    welfare: { aus: "Pot-caught; oxygenated live transport", imp: "Mixed" },
    mislabellingRisk: { aus: "Very low", imp: "Low" },
    traceability: { aus: "Tag-to-plate via Geraldton co-op chain", imp: "Variable" },
    bottomLine: "WRL is the gold-standard global benchmark for lobster sustainability — imports rarely match its supply chain.",
    citationIds: ["msc-wrl-2000", "msc-registry", "frdc-economic-contribution"],
  },

  "pearls-aus-vs-imported": {
    priceContext: "Tahitian and freshwater Chinese pearls are cheaper; Australian South Sea pearls are the world's premium product from Pinctada maxima.",
    bottomLine: "South Sea pearls are an unmatched cultural and economic product of the Kimberley coast. Imports compete on price, not provenance.",
    welfare: { aus: "Wild-stock supplemented hatchery; oysters returned to sea", imp: "Variable" },
    traceability: { aus: "Farm-to-string", imp: "Variable" },
    citationIds: ["frdc-economic-contribution"],
  },

  "snapper-aus-vs-imported": {
    priceContext: "Imported 'snapper' is often a different species (cheaper rosy snapper, rockfish or basa) sold under fraudulent labels — a long-running issue addressed by AFNS and CoOL rules.",
    mislabellingRisk: { aus: "Low (AFNS-protected)", imp: "High — DNA tests find frequent substitution", citationId: "amcs-dna" },
    freshnessDays: { ausValue: 2, impValue: 21, unit: "days catch-to-plate" },
    bottomLine: "Buy AFNS-named Australian snapper to avoid the most-mislabelled fish category in the country.",
    citationIds: ["amcs-dna", "aff-fish-names-standard", "info-standard-2025"],
  },

  "flathead-aus-vs-imported": {
    priceContext: "Most 'flathead' fillets in big supermarkets are imported basa or hoki. Genuine Australian flathead (sand, dusky, tiger) is more expensive but truly local.",
    mislabellingRisk: { aus: "Low", imp: "High — substitution with basa documented", citationId: "choice-prawn-test" },
    bottomLine: "If you want flathead, ask for AFNS-named flathead and check origin — not 'flathead-style' fillets.",
    citationIds: ["aff-fish-names-standard", "amcs-dna", "info-standard-2025"],
  },

  "whiting-aus-vs-imported": {
    priceContext: "Imported 'whiting' is often hoki or pollock from NZ or the North Pacific — cheaper but unrelated species.",
    mislabellingRisk: { aus: "Low (King George whiting and other AFNS names)", imp: "Moderate" },
    bottomLine: "Insist on AFNS-named whiting (e.g. King George) to get the genuine Australian product.",
    citationIds: ["aff-fish-names-standard", "amcs-dna"],
  },

  "bream-aus-vs-imported": {
    priceContext: "Imported 'bream' often refers to tilapia or ocean perch — cheaper but distinct species.",
    mislabellingRisk: { aus: "Low", imp: "Moderate–High" },
    bottomLine: "Australian black bream and yellowfin bream are estuary-based; imports tend to be tropical pond-farmed.",
    citationIds: ["aff-fish-names-standard"],
  },

  "mulloway-aus-vs-imported": {
    priceContext: "There is little direct imported equivalent; Australian mulloway is mostly wild-caught or farmed in SA.",
    bottomLine: "Mulloway is a culturally and ecologically important Coorong species — buy local or go without.",
    citationIds: ["coorong-coop", "frdc-economic-contribution"],
  },

  "kingfish-aus-vs-imported": {
    priceContext: "Imported yellowtail (Japanese hamachi) is cheaper; Australian yellowtail kingfish is farmed at scale in SA and is sashimi-grade fresh.",
    freshnessDays: { ausValue: 2, impValue: 14, unit: "days harvest-to-plate" },
    bottomLine: "Australian kingfish offers Japan-grade quality without Japan-grade air miles.",
    citationIds: ["frdc-economic-contribution", "icct-air-freight"],
  },

  "mahi-aus-vs-imported": {
    priceContext: "Bulk of mahi mahi sold in Australia is imported (Indian Ocean / Pacific). Local supply is small but high-quality.",
    bottomLine: "If choice exists, prefer Australian mahi — local long-line fleet has strong observer coverage.",
    citationIds: ["afma-bycatch", "afma-harvest-strategies"],
  },

  "coral-trout-aus-vs-imported": {
    priceContext: "Coral trout is almost entirely Australian (GBR live-export fleet); imports are minor and lower-grade frozen.",
    bottomLine: "Buy Australian coral trout — the GBR live-fish fleet has world-leading bycatch performance.",
    citationIds: ["gbrmpa-zoning", "afma-bycatch"],
  },

  "mud-crab-aus-vs-imported": {
    priceContext: "Imported live mud crabs from PNG, Indonesia and the Philippines compete on price; Australian mud crabs (NT, QLD, Top End) are pot-caught and command a premium.",
    welfare: { aus: "Pot-caught; live in seawater tanks", imp: "Variable", citationId: "ilo-forced-labour-fishing" },
    bottomLine: "Australian mud crab is more expensive but supports Indigenous and remote-coast fisheries.",
    citationIds: ["ilo-forced-labour-fishing", "frdc-economic-contribution"],
  },

  "blue-swimmer-aus-vs-imported": {
    priceContext: "Imported swimmer crabs (SE Asia) are cheaper, often as picked meat. Australian wild-caught is fresher and pot-managed.",
    bottomLine: "Australian blue swimmers are excellent value when in season; imports tend to be picked meat.",
    citationIds: ["frdc-economic-contribution"],
  },

  "spanner-crab-aus-vs-imported": {
    priceContext: "Spanner crab is overwhelmingly Australian — QLD/NSW MSC-certified fishery exporting most product.",
    bottomLine: "Spanner crab is a hidden Australian seafood gem — MSC-certified and locally caught.",
    citationIds: ["msc-spanner-crab", "msc-registry"],
  },

  "scallops-aus-vs-imported": {
    priceContext: "Imported scallops (Japan, China, Peru) are cheaper at scale. Australian scallops (saucer, queen) are premium-priced.",
    welfare: { aus: "Diver-caught or trawl-caught with low impact", imp: "Variable; some intensive bottom-trawl" },
    mislabellingRisk: { aus: "Low", imp: "Moderate — added water and STPP common abroad" },
    bottomLine: "Australian scallops have superior cold-chain and no STPP injection — premium-priced for a reason.",
    citationIds: ["fsanz-residues", "info-standard-2025"],
  },

  "calamari-aus-vs-imported": {
    priceContext: "Imported calamari (China, Peru, India) is cheap and dominates retail; Australian southern calamari is premium and limited.",
    mislabellingRisk: { aus: "Low", imp: "Moderate — squid species substitution common" },
    bottomLine: "Australian southern calamari is a small, special product — buy when you see it.",
    citationIds: ["amcs-dna"],
  },

  "octopus-aus-vs-imported": {
    priceContext: "Imported octopus (Spain, Morocco, Vietnam) is cheaper. Australian octopus is small-scale, often pot-caught in SA and WA.",
    welfare: { aus: "Pot-caught; locally killed", imp: "Variable" },
    bottomLine: "Buy Australian octopus where available — supports small-scale pot fisheries.",
    citationIds: ["frdc-economic-contribution"],
  },

  "sardines-aus-vs-imported": {
    priceContext: "Imported tinned sardines from Portugal, Spain and Morocco are cheaper and have iconic branding. Australian sardines are mostly sold fresh from SA's Coffin Bay fleet.",
    carbon: { ausValue: 1.0, impValue: 5.5, unit: "kg CO₂e per kg" },
    jobs: { ausValue: 5, impValue: 0, unit: "Australian FTE per tonne" },
    bottomLine: "Australian fresh sardines are an underused, low-carbon, omega-3-rich seafood. Try them grilled on toast.",
    citationIds: ["frdc-economic-contribution", "editorial-carbon-footprint"],
  },
};
