import type { Entity, Slug } from "./types";

export type Metric = {
  label: string;
  aus: string;
  imp: string;
  /** True when the Australian value is the better outcome */
  ausGood: boolean;
};

export type Comparison = Entity & {
  /** Slug of the species this comparison is for (1-1) */
  speciesSlug: Slug;
  aus: { name: string; origin: string; country: string };
  imp: { name: string; origin: string; country: string };
  metrics: Metric[];
  ausScore: string;
  impScore: string;
};

export const comparisons: Comparison[] = [
  {
    slug: "barramundi-aus-vs-imported",
    name: "Australian Barramundi vs Imported",
    speciesSlug: "barramundi",
    tagline: "Comparison",
    summary:
      "Side-by-side: Northern Australian wild & farmed barramundi against barramundi imported from Thailand and Vietnam.",
    aus: { name: "Australian Barramundi", origin: "Northern Australia", country: "Australia" },
    imp: { name: "Imported Barramundi", origin: "Thailand / Vietnam", country: "Asia" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "820mg", imp: "480mg", ausGood: true },
      { label: "Mercury Level", aus: "Very Low", imp: "Moderate", ausGood: true },
      { label: "Protein (per 100g)", aus: "22.4g", imp: "19.8g", ausGood: true },
      { label: "Avg. Transport Distance", aus: "~400km", imp: ">8,000km", ausGood: true },
      { label: "Antibiotic Treatment", aus: "None", imp: "Common", ausGood: true },
      { label: "Environmental Standard", aus: "Tier 1", imp: "Variable", ausGood: true },
      { label: "Price per 100g", aus: "~$3.50", imp: "~$2.10", ausGood: false },
    ],
    ausScore: "Australian barramundi scores 9.2/10 for nutrition, sustainability, and food safety.",
    impScore: "Imported product scores 5.8/10 due to lower standards and longer supply chains.",
  },
  {
    slug: "salmon-aus-vs-norway",
    name: "Tasmanian Salmon vs Norwegian Salmon",
    speciesSlug: "salmon",
    summary:
      "Tasmanian Atlantic salmon vs imported Norwegian and Chilean salmon — freshness, antibiotic use, and supply chain.",
    aus: { name: "Tasmanian Salmon", origin: "Tasmania, Australia", country: "Australia" },
    imp: { name: "Imported Salmon", origin: "Norway / Chile", country: "Europe / S. America" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "2,700mg", imp: "2,100mg", ausGood: true },
      { label: "Days from Harvest to Store", aus: "2–3 days", imp: "14–21 days", ausGood: true },
      { label: "Protein (per 100g)", aus: "24.1g", imp: "22.3g", ausGood: true },
      { label: "Antibiotic Use", aus: "Minimal", imp: "Higher rates", ausGood: true },
      { label: "Colour Additives", aus: "None required", imp: "Often added", ausGood: true },
      { label: "Carbon Footprint", aus: "Low", imp: "High (air freight)", ausGood: true },
      { label: "Price per 100g", aus: "~$4.20", imp: "~$3.00", ausGood: false },
    ],
    ausScore: "Tasmanian salmon scores 9.1/10 — world-class freshness and ASC-certified sustainability.",
    impScore: "Imported salmon scores 6.4/10 — quality varies significantly by origin and handling.",
  },
  {
    slug: "prawns-aus-vs-asia",
    name: "Spencer Gulf King Prawns vs Imported Prawns",
    speciesSlug: "prawns",
    summary:
      "Australian wild King Prawns from Spencer Gulf vs farmed imported prawns from Vietnam, India, and China.",
    aus: { name: "Spencer Gulf King Prawns", origin: "South Australia", country: "Australia" },
    imp: { name: "Imported Prawns", origin: "Vietnam / India / China", country: "Asia" },
    metrics: [
      { label: "Protein (per 100g)", aus: "18.6g", imp: "17.2g", ausGood: true },
      { label: "Sodium Level", aus: "Natural", imp: "Often elevated", ausGood: true },
      { label: "Preservatives Added", aus: "None", imp: "Sulphites common", ausGood: true },
      { label: "Antibiotic Residues", aus: "Zero tolerance", imp: "Sometimes detected", ausGood: true },
      { label: "Farming Standards", aus: "Strict regulation", imp: "Variable", ausGood: true },
      { label: "Traceability", aus: "Full chain", imp: "Limited", ausGood: true },
      { label: "Price per 100g", aus: "~$5.00", imp: "~$2.50", ausGood: false },
    ],
    ausScore: "Spencer Gulf King Prawns score 9.5/10 — globally recognised as among the world's finest.",
    impScore: "Imported prawns score 5.2/10 — significant variation in quality, additives, and ethics.",
  },
  {
    slug: "tuna-southern-bluefin-vs-imported",
    name: "Southern Bluefin Tuna vs Imported Tuna",
    speciesSlug: "tuna",
    summary:
      "Wild & ranched Southern Bluefin from the Bight vs imported Yellowfin and Bigeye from various Pacific and Indian Ocean fleets.",
    aus: { name: "Southern Bluefin Tuna", origin: "Southern Ocean", country: "Australia" },
    imp: { name: "Imported Tuna", origin: "Pacific / Indian Ocean", country: "Various" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "1,800mg", imp: "1,200mg", ausGood: true },
      { label: "Mercury Level", aus: "Low-Moderate", imp: "Moderate-High", ausGood: true },
      { label: "Quota Management", aus: "CCSBT regulated", imp: "Variable", ausGood: true },
      { label: "Fishing Method", aus: "Pole & line / ranching", imp: "Often long-line", ausGood: true },
      { label: "Bycatch Rate", aus: "Very Low", imp: "Often High", ausGood: true },
      { label: "Product Traceability", aus: "Vessel to plate", imp: "Limited", ausGood: true },
      { label: "Price per 100g", aus: "~$6.00", imp: "~$2.80", ausGood: false },
    ],
    ausScore: "Australian tuna scores 8.7/10 — world-leading quota management ensures stock health.",
    impScore: "Imported tuna scores 5.5/10 — sustainability and mercury levels are major concerns.",
  },
  {
    slug: "oysters-aus-vs-imported",
    name: "Australian Oysters vs Imported Oysters",
    speciesSlug: "oysters",
    summary:
      "Native Sydney Rock and farmed Pacific oysters from Australian waters vs imported oysters from France, Japan, and the USA.",
    aus: { name: "Sydney Rock / Pacific Oyster", origin: "NSW & SA Estuaries", country: "Australia" },
    imp: { name: "Imported Oysters", origin: "France / Japan / USA", country: "Europe / Asia / N. America" },
    metrics: [
      { label: "Zinc (per 100g)", aus: "38mg", imp: "22mg", ausGood: true },
      { label: "Native to Australia", aus: "Yes (Sydney Rock)", imp: "No", ausGood: true },
      { label: "Time to Table", aus: "1–3 days", imp: "7–21 days", ausGood: true },
      { label: "Water Quality Testing", aus: "Weekly", imp: "Varies by country", ausGood: true },
      { label: "Ecosystem Service", aus: "Water filtering", imp: "N/A (imported)", ausGood: true },
      { label: "Biosecurity Risk", aus: "None", imp: "Pathogen risk", ausGood: true },
      { label: "Price per dozen", aus: "~$18", imp: "~$28", ausGood: true },
    ],
    ausScore: "Sydney Rock Oysters score 9.8/10 — unique endemic species with unmatched freshness.",
    impScore: "Imported oysters score 6.0/10 — freshness and food safety risks increase with distance.",
  },
  {
    slug: "abalone-aus-vs-imported",
    name: "Australian Greenlip Abalone vs Imported",
    speciesSlug: "abalone",
    summary:
      "Wild dive-caught Australian Greenlip vs farmed and imported abalone from China, Korea, and Mexico.",
    aus: { name: "Australian Greenlip Abalone", origin: "Tas, Vic, SA, WA", country: "Australia" },
    imp: { name: "Imported Abalone", origin: "China / Korea / Mexico", country: "Asia / Americas" },
    metrics: [
      { label: "Protein (per 100g)", aus: "17.1g", imp: "15.2g", ausGood: true },
      { label: "Iron (per 100g)", aus: "3.2mg", imp: "2.1mg", ausGood: true },
      { label: "Wild vs. Farmed", aus: "Wild-caught divers", imp: "Often farmed", ausGood: true },
      { label: "Sustainability Quota", aus: "TAC-managed", imp: "Often unregulated", ausGood: true },
      { label: "Traceability", aus: "Diver-to-plate", imp: "Limited", ausGood: true },
      { label: "Heavy Metals", aus: "Pristine waters", imp: "Variable", ausGood: true },
      { label: "Price per 100g", aus: "~$15.00", imp: "~$8.00", ausGood: false },
    ],
    ausScore:
      "Australian abalone scores 9.6/10 — world's largest wild fishery, dive-caught with strict quotas.",
    impScore:
      "Imported abalone scores 5.4/10 — often farmed with feed additives; many nations face stock collapse.",
  },
  {
    slug: "mussels-aus-vs-imported",
    name: "Australian Blue Mussels vs Imported",
    speciesSlug: "mussels",
    summary:
      "Rope-grown Australian Blue Mussels vs imported mussels from New Zealand, Chile, and Spain.",
    aus: { name: "Australian Blue Mussels", origin: "Tas, Vic, SA", country: "Australia" },
    imp: { name: "Imported Mussels", origin: "NZ / Chile / Spain", country: "Various" },
    metrics: [
      { label: "Protein (per 100g)", aus: "11.9g", imp: "11.2g", ausGood: true },
      { label: "Omega-3 (per 100g)", aus: "700mg", imp: "550mg", ausGood: true },
      { label: "Time to Table", aus: "1–4 days", imp: "10–21 days", ausGood: true },
      { label: "Iron (per 100g)", aus: "6.7mg", imp: "5.3mg", ausGood: true },
      { label: "Farming Method", aus: "Long-line, no feed", imp: "Variable", ausGood: true },
      { label: "Carbon Footprint", aus: "Among lowest in seafood", imp: "Higher (transport)", ausGood: true },
      { label: "Price per kg", aus: "~$12", imp: "~$10", ausGood: false },
    ],
    ausScore:
      "Australian mussels score 9.4/10 — clean rope-grown protein with one of seafood's smallest footprints.",
    impScore: "Imported mussels score 6.8/10 — quality is good but freshness drops with transit.",
  },
  {
    slug: "rocklobster-aus-vs-imported",
    name: "Southern Rock Lobster vs Imported Lobster",
    speciesSlug: "rocklobster",
    summary:
      "Wild-caught Southern Rock Lobster from Tasmania, SA, and Victoria vs imported lobster from Canada, USA, and Cuba.",
    aus: { name: "Southern Rock Lobster", origin: "Tas, SA, Vic", country: "Australia" },
    imp: { name: "Imported Lobster", origin: "Canada / USA / Cuba", country: "N. America / Caribbean" },
    metrics: [
      { label: "Protein (per 100g)", aus: "20.5g", imp: "18.9g", ausGood: true },
      { label: "Selenium (per 100g)", aus: "75µg", imp: "55µg", ausGood: true },
      { label: "Wild vs. Farmed", aus: "Wild-caught (pots)", imp: "Wild-caught", ausGood: true },
      { label: "Quota Management", aus: "Stock-status assessed", imp: "Variable", ausGood: true },
      { label: "Live Trade Standards", aus: "World-leading", imp: "Variable", ausGood: true },
      { label: "Bycatch Rate", aus: "Very low (pot fishery)", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$120", imp: "~$70", ausGood: false },
    ],
    ausScore:
      "Southern Rock Lobster scores 9.3/10 — premium wild-caught quality with sustainable pot-fishery management.",
    impScore:
      "Imported lobster scores 6.5/10 — freshness varies, especially for frozen or long-haul live shipments.",
  },
  {
    slug: "western-rocklobster-aus-vs-imported",
    name: "Western Rock Lobster vs Imported Lobster",
    speciesSlug: "western-rock-lobster",
    summary:
      "MSC-certified Western Rock Lobster (the world's first MSC fishery) vs imported lobster.",
    aus: { name: "Western Rock Lobster", origin: "Western Australia", country: "Australia" },
    imp: { name: "Imported Lobster", origin: "Canada / USA / Cuba", country: "N. America / Caribbean" },
    metrics: [
      { label: "MSC Certified Since", aus: "2000", imp: "Variable", ausGood: true },
      { label: "Protein (per 100g)", aus: "20.2g", imp: "18.9g", ausGood: true },
      { label: "Wild vs. Farmed", aus: "Wild-caught (pots)", imp: "Wild-caught", ausGood: true },
      { label: "Quota Management", aus: "ITQ", imp: "Variable", ausGood: true },
      { label: "Bycatch Rate", aus: "Very low (pot fishery)", imp: "Variable", ausGood: true },
      { label: "Live Trade Standards", aus: "World-leading", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$110", imp: "~$70", ausGood: false },
    ],
    ausScore:
      "Western Rock Lobster scores 9.6/10 — global benchmark for sustainable wild-capture lobster.",
    impScore:
      "Imported lobster scores 6.5/10 — freshness varies, especially for frozen or long-haul live shipments.",
  },
  {
    slug: "pearls-aus-vs-imported",
    name: "Australian South Sea Pearls vs Imported Cultured Pearls",
    speciesSlug: "pearls",
    summary:
      "Pinctada maxima South Sea Pearls farmed off Broome vs imported Akoya, Tahitian, and Chinese freshwater pearls.",
    aus: { name: "Australian South Sea Pearls", origin: "Broome, WA", country: "Australia" },
    imp: { name: "Imported Cultured Pearls", origin: "Japan / China / French Polynesia", country: "Various" },
    metrics: [
      { label: "Pearl Species", aus: "Pinctada maxima", imp: "Akoya / freshwater", ausGood: true },
      { label: "Average Size", aus: "10–20mm", imp: "5–9mm (Akoya)", ausGood: true },
      { label: "Farming Standards", aus: "Strict environmental approvals", imp: "Variable", ausGood: true },
      { label: "Pearl Meat Edible", aus: "Yes — sought-after delicacy", imp: "Variable", ausGood: true },
      { label: "Heritage", aus: "Multicultural & Indigenous", imp: "Various", ausGood: true },
      { label: "Price per pearl", aus: "From ~$500", imp: "From ~$50 (freshwater)", ausGood: false },
    ],
    ausScore:
      "Australian South Sea Pearls score 9.7/10 — the world's most prized cultured pearls.",
    impScore:
      "Imported cultured pearls score 6.5/10 — broad range of quality and origin.",
  },

  /* ---------------- PHASE 3 — 15 ADDITIONAL COMPARISONS ---------------- */

  {
    slug: "snapper-aus-vs-imported",
    name: "Australian Snapper vs Imported",
    speciesSlug: "snapper",
    summary:
      "Australian wild snapper (Chrysophrys auratus) against imported &lsquo;snapper&rsquo; — often unrelated species substituted at retail.",
    aus: { name: "Australian Snapper", origin: "NSW / SA / WA", country: "Australia" },
    imp: { name: "Imported &lsquo;Snapper&rsquo;", origin: "NZ / China / SE Asia", country: "Various" },
    metrics: [
      { label: "Species accuracy", aus: "Always Chrysophrys auratus", imp: "Often substituted", ausGood: true },
      { label: "Mercury level", aus: "Low", imp: "Variable", ausGood: true },
      { label: "Quota management", aus: "ITQ + bag limits", imp: "Variable", ausGood: true },
      { label: "Days from harvest to plate", aus: "2–4 days", imp: "10–21 days", ausGood: true },
      { label: "Mislabelling risk", aus: "Low", imp: "Documented up to 30%", ausGood: true },
      { label: "Price per kg (fillet)", aus: "~$45", imp: "~$28", ausGood: false },
    ],
    ausScore: "Australian Snapper scores 9.0/10 — the genuine article, traceable to the boat.",
    impScore: "Imported &lsquo;snapper&rsquo; scores 5.6/10 — frequently a different species entirely.",
  },
  {
    slug: "flathead-aus-vs-imported",
    name: "Australian Flathead vs Imported &lsquo;Flake&rsquo;",
    speciesSlug: "flathead",
    summary:
      "Wild Australian Tiger Flathead vs imported basa, swai, or generic &lsquo;flake&rsquo; — often the substitute for true Aussie flathead at takeaways.",
    aus: { name: "Tiger Flathead", origin: "Bass Strait / NSW", country: "Australia" },
    imp: { name: "Imported &lsquo;Flake&rsquo;", origin: "Vietnam / Thailand", country: "Asia" },
    metrics: [
      { label: "Wild vs farmed", aus: "Wild trawl", imp: "Pond aquaculture", ausGood: true },
      { label: "Antibiotics", aus: "None", imp: "Often detected", ausGood: true },
      { label: "Mercury", aus: "Low", imp: "Variable", ausGood: true },
      { label: "True species", aus: "Always Platycephalus", imp: "Basa / pangasius / shark", ausGood: true },
      { label: "Carbon footprint", aus: "Low", imp: "High (long transit)", ausGood: true },
      { label: "Price per kg (fillet)", aus: "~$30", imp: "~$14", ausGood: false },
    ],
    ausScore: "Australian Flathead scores 9.0/10 — wild, sustainable, the real fish-and-chips.",
    impScore: "Imported &lsquo;flake&rsquo; scores 4.8/10 — variable species, pond-farming concerns.",
  },
  {
    slug: "whiting-aus-vs-imported",
    name: "King George Whiting vs Imported &lsquo;Whiting&rsquo;",
    speciesSlug: "king-george-whiting",
    summary:
      "Endemic Australian King George Whiting vs imported &lsquo;whiting&rsquo; products — typically unrelated species at retail.",
    aus: { name: "King George Whiting", origin: "SA / VIC", country: "Australia" },
    imp: { name: "Imported &lsquo;Whiting&rsquo;", origin: "Pacific / Africa", country: "Various" },
    metrics: [
      { label: "Endemic to Australia", aus: "Yes", imp: "No", ausGood: true },
      { label: "Wild caught", aus: "Hand-line / small net", imp: "Variable", ausGood: true },
      { label: "Mislabelling risk", aus: "Low", imp: "Significant", ausGood: true },
      { label: "Mercury", aus: "Low", imp: "Variable", ausGood: true },
      { label: "Days to plate", aus: "2–3 days", imp: "10–21 days", ausGood: true },
      { label: "Price per kg (fillet)", aus: "~$55", imp: "~$22", ausGood: false },
    ],
    ausScore: "King George Whiting scores 9.4/10 — endemic, premium, irreplaceable.",
    impScore: "Imported &lsquo;whiting&rsquo; scores 5.0/10 — usually a different species.",
  },
  {
    slug: "bream-aus-vs-imported",
    name: "Australian Bream vs Imported Sea Bream",
    speciesSlug: "bream",
    summary:
      "Wild estuarine Australian Yellowfin Bream vs Mediterranean / Asian sea bream — different species, different waters.",
    aus: { name: "Australian Yellowfin Bream", origin: "NSW / QLD estuaries", country: "Australia" },
    imp: { name: "Imported Sea Bream", origin: "Mediterranean / Asia", country: "Various" },
    metrics: [
      { label: "Wild vs farmed", aus: "Wild estuarine", imp: "Pond / cage farmed", ausGood: true },
      { label: "Antibiotics", aus: "None", imp: "Often detected", ausGood: true },
      { label: "Same species?", aus: "Acanthopagrus australis", imp: "Different sparid species", ausGood: true },
      { label: "Days to plate", aus: "2–3 days", imp: "10–14 days", ausGood: true },
      { label: "Price per kg", aus: "~$30", imp: "~$25", ausGood: false },
    ],
    ausScore: "Australian Bream scores 8.6/10 — local, wild, and indistinguishable in flavour terms.",
    impScore: "Imported Sea Bream scores 6.0/10 — different species, longer chain, farming concerns.",
  },
  {
    slug: "mulloway-aus-vs-imported",
    name: "Australian Mulloway vs Imported Corvina",
    speciesSlug: "mulloway",
    summary:
      "Wild Australian Mulloway vs imported corvina/jewfish — sciaenid relatives but very different products.",
    aus: { name: "Australian Mulloway", origin: "SA / NSW estuaries", country: "Australia" },
    imp: { name: "Imported Corvina", origin: "South America", country: "Various" },
    metrics: [
      { label: "Wild caught", aus: "Yes", imp: "Variable", ausGood: true },
      { label: "Same species?", aus: "Argyrosomus japonicus", imp: "Different species", ausGood: true },
      { label: "Mercury", aus: "Low for size", imp: "Variable", ausGood: true },
      { label: "Stock-status reports", aus: "Recovering", imp: "Variable", ausGood: true },
      { label: "Indigenous co-management", aus: "Coorong yes", imp: "No", ausGood: true },
      { label: "Price per kg", aus: "~$35", imp: "~$22", ausGood: false },
    ],
    ausScore: "Australian Mulloway scores 8.7/10 — rebuilding wild stock, premium chef-favourite.",
    impScore: "Imported Corvina scores 5.8/10 — unrelated species marketed under similar names.",
  },
  {
    slug: "kingfish-aus-vs-imported",
    name: "Australian Kingfish vs Imported Hamachi",
    speciesSlug: "kingfish",
    summary:
      "Australian Yellowtail Kingfish (wild and farmed) vs imported Japanese hamachi/buri — same family, very different supply chains.",
    aus: { name: "Australian Yellowtail Kingfish", origin: "Spencer Gulf / NSW", country: "Australia" },
    imp: { name: "Imported Hamachi", origin: "Japan / Mexico", country: "Various" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "1,900mg", imp: "1,100mg", ausGood: true },
      { label: "Antibiotic regime", aus: "Restricted", imp: "Often heavy", ausGood: true },
      { label: "Air-freight required", aus: "No", imp: "Yes", ausGood: true },
      { label: "Days to plate", aus: "2–3 days", imp: "5–10 days", ausGood: true },
      { label: "Sashimi grade", aus: "Premium", imp: "Premium", ausGood: false },
      { label: "Price per kg (fillet)", aus: "~$50", imp: "~$45", ausGood: false },
    ],
    ausScore: "Australian Kingfish scores 9.2/10 — sashimi excellence with a far cleaner supply chain.",
    impScore: "Imported Hamachi scores 6.8/10 — quality varies; antibiotic and air-freight concerns.",
  },
  {
    slug: "mahi-aus-vs-imported",
    name: "Australian Mahi-mahi vs Imported",
    speciesSlug: "mahi-mahi",
    summary:
      "Australian-caught mahi-mahi (Mooloolaba fleet) vs imported long-line or trawl-caught product from Pacific S. America and Vietnam.",
    aus: { name: "Australian Mahi-mahi", origin: "QLD / NSW", country: "Australia" },
    imp: { name: "Imported Mahi-mahi", origin: "Ecuador / Peru / Vietnam", country: "Various" },
    metrics: [
      { label: "Bycatch", aus: "Low", imp: "Often high (long-line)", ausGood: true },
      { label: "Mercury", aus: "Low (fast-growing)", imp: "Variable", ausGood: true },
      { label: "Days to plate", aus: "2–4 days", imp: "10–21 days", ausGood: true },
      { label: "Stock status", aus: "Sustainable", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$30", imp: "~$20", ausGood: false },
    ],
    ausScore: "Australian Mahi-mahi scores 8.6/10 — wild, fast-growing, sustainably caught.",
    impScore: "Imported Mahi-mahi scores 6.2/10 — long-line bycatch and freshness concerns.",
  },
  {
    slug: "coral-trout-aus-vs-imported",
    name: "Australian Coral Trout vs Imported Reef Fish",
    speciesSlug: "coral-trout",
    summary:
      "Line-caught Coral Trout from the Great Barrier Reef vs imported grouper/reef fish, sometimes cyanide-caught.",
    aus: { name: "Coral Trout (GBR)", origin: "Queensland", country: "Australia" },
    imp: { name: "Imported Reef Fish", origin: "Indonesia / Philippines", country: "SE Asia" },
    metrics: [
      { label: "Catch method", aus: "Line-only", imp: "Cyanide / dynamite reported", ausGood: true },
      { label: "Mercury", aus: "Low", imp: "Variable", ausGood: true },
      { label: "Marine park protection", aus: "GBR Marine Park", imp: "Variable", ausGood: true },
      { label: "Stock status", aus: "Quota-managed", imp: "Often unregulated", ausGood: true },
      { label: "Price per kg (fillet)", aus: "~$80", imp: "~$45", ausGood: false },
    ],
    ausScore: "Australian Coral Trout scores 9.5/10 — premium reef fish under world-class management.",
    impScore: "Imported reef fish scores 4.2/10 — environmental and food-safety concerns.",
  },
  {
    slug: "mud-crab-aus-vs-imported",
    name: "Australian Mud Crab vs Imported",
    speciesSlug: "mud-crab",
    summary:
      "Wild Australian mud crab vs farmed imported mud crab from SE Asia — different supply chains, different welfare and sustainability profiles.",
    aus: { name: "Australian Mud Crab", origin: "NT / QLD / WA", country: "Australia" },
    imp: { name: "Imported Mud Crab", origin: "Sri Lanka / Indonesia / Philippines", country: "Asia" },
    metrics: [
      { label: "Wild vs farmed", aus: "Wild pot-caught", imp: "Often pond-farmed", ausGood: true },
      { label: "Mangrove impact", aus: "None", imp: "Significant habitat loss", ausGood: true },
      { label: "Indigenous management", aus: "Yes (NT/QLD)", imp: "No", ausGood: true },
      { label: "Live transit welfare", aus: "Strict", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$80", imp: "~$50", ausGood: false },
    ],
    ausScore: "Australian Mud Crab scores 9.4/10 — gold-standard tropical crab.",
    impScore: "Imported Mud Crab scores 5.6/10 — pond-farming and welfare concerns.",
  },
  {
    slug: "blue-swimmer-aus-vs-imported",
    name: "Australian Blue Swimmer Crab vs Imported",
    speciesSlug: "blue-swimmer-crab",
    summary:
      "Live or fresh Australian blue swimmer vs imported pasteurised crab meat tins from SE Asia and India.",
    aus: { name: "Australian Blue Swimmer", origin: "SA / WA / NSW", country: "Australia" },
    imp: { name: "Imported Crab Meat", origin: "Indonesia / Vietnam / India", country: "Asia" },
    metrics: [
      { label: "Form", aus: "Live or fresh", imp: "Pasteurised tin", ausGood: true },
      { label: "Species verified", aus: "Yes", imp: "Often anonymous", ausGood: true },
      { label: "Bleach in processing", aus: "No", imp: "Reported in some origins", ausGood: true },
      { label: "Days to plate", aus: "1–3 days", imp: "Variable (pasteurised)", ausGood: true },
      { label: "Price per kg", aus: "~$35", imp: "~$25", ausGood: false },
    ],
    ausScore: "Australian Blue Swimmer scores 9.0/10 — fresh, traceable, sweet.",
    impScore: "Imported crab meat scores 5.8/10 — anonymous tins of variable quality.",
  },
  {
    slug: "spanner-crab-aus-vs-imported",
    name: "Australian Spanner Crab vs Imported",
    speciesSlug: "spanner-crab",
    summary:
      "Australia's MSC-certified spanner crab vs imported crab products of variable origin.",
    aus: { name: "Australian Spanner Crab", origin: "QLD / NSW", country: "Australia" },
    imp: { name: "Imported Crab Products", origin: "Various", country: "Various" },
    metrics: [
      { label: "MSC certified", aus: "Yes", imp: "Rare", ausGood: true },
      { label: "Catch method", aus: "Net (low impact)", imp: "Variable", ausGood: true },
      { label: "Species verified", aus: "Always Ranina ranina", imp: "Often substituted", ausGood: true },
      { label: "Live to plate", aus: "Yes", imp: "Rare", ausGood: true },
      { label: "Price per kg", aus: "~$45", imp: "~$30", ausGood: false },
    ],
    ausScore: "Australian Spanner Crab scores 9.5/10 — MSC, niche, world-class.",
    impScore: "Imported Crab scores 5.4/10 — origin and species often unverifiable.",
  },
  {
    slug: "scallops-aus-vs-imported",
    name: "Australian Scallops vs Imported",
    speciesSlug: "scallops",
    summary:
      "Roe-on Australian scallops from Bass Strait and Hervey Bay vs imported scallops from Asia, USA, and Peru — often water-injected.",
    aus: { name: "Australian Roe-on Scallops", origin: "Bass Strait / Hervey Bay", country: "Australia" },
    imp: { name: "Imported Scallops", origin: "Japan / China / USA / Peru", country: "Various" },
    metrics: [
      { label: "Water injection (STPP)", aus: "None", imp: "Common", ausGood: true },
      { label: "Roe retained", aus: "Yes", imp: "Usually removed", ausGood: true },
      { label: "Frozen-thawed cycles", aus: "Minimal", imp: "Common", ausGood: true },
      { label: "Stock-status reports", aus: "Yes", imp: "Variable", ausGood: true },
      { label: "Price per kg", aus: "~$70", imp: "~$45", ausGood: false },
    ],
    ausScore: "Australian Scallops score 9.3/10 — roe-on, no additives, premium.",
    impScore: "Imported Scallops score 5.6/10 — often water-injected and roe-off.",
  },
  {
    slug: "calamari-aus-vs-imported",
    name: "Australian Calamari vs Imported Squid",
    speciesSlug: "calamari",
    summary:
      "Hand-jigged Southern Calamari vs frozen imported squid rings — completely different products in flavour and texture.",
    aus: { name: "Australian Southern Calamari", origin: "SA / VIC / TAS", country: "Australia" },
    imp: { name: "Imported Squid", origin: "China / Vietnam / Thailand", country: "Asia" },
    metrics: [
      { label: "Catch method", aus: "Hand-jigged", imp: "Industrial trawl", ausGood: true },
      { label: "Chemical tenderising", aus: "None", imp: "Common", ausGood: true },
      { label: "Bleach in processing", aus: "None", imp: "Reported", ausGood: true },
      { label: "Frozen-thawed cycles", aus: "Minimal", imp: "Multiple", ausGood: true },
      { label: "Price per kg", aus: "~$30", imp: "~$15", ausGood: false },
    ],
    ausScore: "Southern Calamari scores 9.2/10 — tender, fresh, hand-jigged.",
    impScore: "Imported Squid scores 5.0/10 — bleached, treated, generic.",
  },
  {
    slug: "octopus-aus-vs-imported",
    name: "Australian Octopus vs Imported",
    speciesSlug: "octopus",
    summary:
      "Australian pot-caught octopus vs imported (often Spanish or Moroccan) tenderised product.",
    aus: { name: "Australian Octopus", origin: "TAS / VIC / SA", country: "Australia" },
    imp: { name: "Imported Octopus", origin: "Spain / Morocco / China", country: "Various" },
    metrics: [
      { label: "Catch method", aus: "Pot (low impact)", imp: "Variable", ausGood: true },
      { label: "Mechanical tenderising", aus: "None", imp: "Common", ausGood: true },
      { label: "Days to plate", aus: "2–4 days", imp: "10–28 days", ausGood: true },
      { label: "Vitamin B12 (per 100g)", aus: "18µg", imp: "13µg", ausGood: true },
      { label: "Price per kg", aus: "~$40", imp: "~$30", ausGood: false },
    ],
    ausScore: "Australian Octopus scores 8.9/10 — fresh, untreated, under-rated.",
    impScore: "Imported Octopus scores 6.4/10 — variable origin and treatment.",
  },
  {
    slug: "sardines-aus-vs-imported",
    name: "Australian Sardines vs Imported",
    speciesSlug: "sardines",
    summary:
      "Fresh-or-tinned Australian sardines (Port Lincoln) vs imported tinned sardines from Morocco, Portugal, Spain, Peru.",
    aus: { name: "Australian Sardines", origin: "Port Lincoln, SA", country: "Australia" },
    imp: { name: "Imported Sardines", origin: "Morocco / Portugal / Peru", country: "Various" },
    metrics: [
      { label: "Omega-3 (per 100g)", aus: "2,200mg", imp: "1,700mg", ausGood: true },
      { label: "Sustainability rating", aus: "MSC-aligned", imp: "Variable", ausGood: true },
      { label: "Days to plate (fresh)", aus: "1–2 days", imp: "Tinned only", ausGood: true },
      { label: "Mercury", aus: "Very low", imp: "Very low", ausGood: false },
      { label: "Price per kg (fresh)", aus: "~$8", imp: "~$15 (tin equivalent)", ausGood: true },
    ],
    ausScore: "Australian Sardines score 9.4/10 — high-omega, low-cost, deeply sustainable.",
    impScore: "Imported tinned sardines score 7.0/10 — generally fine but no fresh option.",
  },
];

export const comparisonBySlug = (slug: Slug): Comparison | undefined =>
  comparisons.find((c) => c.slug === slug);
export const allComparisonSlugs = (): Slug[] => comparisons.map((c) => c.slug);
