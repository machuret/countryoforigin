/**
 * Long-form conversion pages — content blobs only. The JSX that
 * renders these lives next to each route, but the editorial content
 * is centralised here so it can be edited without touching React.
 */

export type ConversionHero = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lede: string;
};

/* ============================================================
 * /operators — 1 July 2026 hospitality compliance page
 * ============================================================ */

export const operatorsPage = {
  hero: {
    eyebrow: "For hospitality operators",
    title: "1 July 2026: every menu must show",
    titleAccent: "A · I · M",
    lede: "From 1 July 2026, every restaurant, café, fish-and-chip shop, caterer, food truck, takeaway, pub, hotel, and delivery operator in Australia must clearly label seafood as Australian (A), Imported (I), or Mixed (M). Failing to comply — or labelling imported product as Australian — exposes your business to penalties under the Australian Consumer Law.",
  } satisfies ConversionHero,

  countdown: {
    text: "Most operators have started auditing menus and suppliers. Here's what to do.",
  },

  checklist: [
    {
      num: "01",
      title: "Audit every seafood SKU on your menu",
      text: "List every dish that contains seafood. For each, identify the supplier, species, and country of catch / production. Get this in writing from your supplier.",
    },
    {
      num: "02",
      title: "Update menus, signage, and digital channels",
      text: "Add A, I, or M next to every seafood dish — printed menus, chalkboards, counter signage, your website, your QR code menu, and third-party delivery listings (UberEats, Menulog, DoorDash).",
    },
    {
      num: "03",
      title: "Train your front-of-house team",
      text: "Servers, counter staff, and managers need to confidently explain the codes if a customer asks. Build a one-page reference card and run a 10-minute briefing.",
    },
    {
      num: "04",
      title: "Document your supply chain",
      text: "Keep invoices, certificates of origin, and supplier specs on file. Regulators may request evidence — being able to back your label is the legal safe harbour.",
    },
    {
      num: "05",
      title: "Plan for supply changes",
      text: "If you swap suppliers seasonally (e.g. wild prawn season), your label may shift between A and M. Build a process for updating menus and printed materials whenever supply changes.",
    },
    {
      num: "06",
      title: "Use it as a marketing asset",
      text: "Operators with a strong &lsquo;A&rsquo; story consistently outperform on bookings. The new rule is also an invitation to tell your sourcing story — country, region, supplier, even the boat name.",
    },
  ],

  menuExamples: {
    intro:
      "Three concrete ways to add A/I/M to your menu without disrupting design. Pick one and apply it consistently.",
    examples: [
      {
        style: "Inline letter",
        before: "Battered Flathead & Chips        $24",
        after: "Battered Flathead (A) & Chips    $24",
        note: "Simplest — adds 3 characters per line. Add a small key at the bottom of the menu.",
      },
      {
        style: "Origin-led description",
        before: "Pan-fried fish of the day, lemon butter        $38",
        after: "Spencer Gulf King Prawns (A), pan-fried, lemon butter        $38",
        note: "Best for premium menus — turns the label into a marketing asset.",
      },
      {
        style: "Symbol or badge",
        before: "Salt & pepper squid       $22",
        after: "Salt & pepper calamari 🇦🇺       $22",
        note:
          "Visual flag works well on graphic menus. Pair with a footer key explaining the symbol.",
      },
    ],
  },

  whyItDrivesBookings: {
    title: "Why local sourcing drives revenue, not just compliance",
    body:
      "Independent surveys consistently find Australians prefer local seafood — and are willing to pay a premium when they can verify it. The 2026 standard isn't just a compliance burden: it's an industry-wide opportunity for operators who source local to stand out.",
    bullets: [
      "&ldquo;Australian&rdquo; on a menu drives a significant willingness-to-pay premium across price tiers",
      "Tourism diners explicitly seek out provenance — A on a menu is a discovery signal",
      "Local stories (boat name, region, family business) generate social-media coverage",
      "Diners are increasingly checking labels — &ldquo;Imported&rdquo; without context now reads as a red flag",
    ],
  },

  faq: [
    {
      q: "Does this apply to my business?",
      a: "If your business serves seafood for immediate consumption — eat in, takeaway, or delivery — yes. Restaurants, cafés, fish-and-chip shops, food trucks, caterers, hotels, pubs, clubs, sushi shops, and delivery operators are all covered.",
    },
    {
      q: "What if I don't sell seafood?",
      a: "If your menu has no seafood items, the standard doesn't apply to you. If you sell even one seafood dish (e.g. an occasional fish special), you'll need to label it from 1 July 2026.",
    },
    {
      q: "I sell pre-packaged seafood at retail. Am I covered?",
      a: "Pre-packaged seafood at supermarket-style retail is already covered by separate, existing country-of-origin food labelling rules. The 2026 standard targets seafood-for-immediate-consumption.",
    },
    {
      q: "What's the penalty for non-compliance?",
      a: "The standard is enforceable under the Australian Consumer Law. Failing to provide accurate information — or making misleading claims (e.g. labelling imported product as Australian) — can attract significant penalties under the ACL.",
    },
    {
      q: "Do I have to label species, or just origin?",
      a: "The standard requires origin (A/I/M). Species naming is governed by separate fish-naming rules (e.g. it's misleading to call basa &lsquo;flathead&rsquo;). Best practice is to name both — origin AND species.",
    },
    {
      q: "What about recipes that change supplier seasonally?",
      a: "Update the label whenever supply changes. M (Mixed) is a safe label when a single dish contains seafood from multiple countries.",
    },
  ],

  links: [
    {
      label: "Read the full Information Standard 2025",
      href: "https://www.legislation.gov.au/F2025L00751/latest/text",
      external: true,
    },
    {
      label: "Department of Industry — country-of-origin labelling policy",
      href: "https://www.industry.gov.au/trade/country-origin-labelling",
      external: true,
    },
    {
      label: "Australian Consumer Law overview",
      href: "https://consumer.gov.au/",
      external: true,
    },
    {
      label: "Country of Origin labelling explainer",
      href: "/labelling",
      external: false,
    },
  ],
};

/* ============================================================
 * /find-australian — practical consumer guide
 * ============================================================ */

export const findAustralianPage = {
  hero: {
    eyebrow: "For consumers",
    title: "How to actually find",
    titleAccent: "Australian seafood",
    lede: "Most Australians say they want Australian seafood. The challenge is finding it. This page is a practical, no-fluff guide for shoppers and diners — the questions to ask, the labels to read, the apps to use, and the easy alternatives when you want to swap an import for a local.",
  } satisfies ConversionHero,

  asking: {
    title: "How to ask the fishmonger",
    body:
      "The single most useful question is: 'Where was this caught or farmed?' If they hesitate, push for the country. If they can't answer at all, walk. Australian seafood always has provenance you can verify.",
    scripts: [
      {
        scenario: "At the fish counter",
        prompt: '"Where was this caught — and what species exactly?"',
        why: "Forces the supplier to confirm both species AND country of catch / production.",
      },
      {
        scenario: "Buying prawns",
        prompt:
          '"Are these Australian wild prawns? Spencer Gulf, Exmouth, Shark Bay, or Banana Prawn?"',
        why: "Naming a region signals you know what good Australian product looks like.",
      },
      {
        scenario: "Buying fish-and-chips",
        prompt:
          '"What\'s in the &lsquo;flake&rsquo; today — gummy shark, basa, or something else?"',
        why: "&lsquo;Flake&rsquo; is one of the most-substituted names. Real Aussie flake is gummy shark.",
      },
      {
        scenario: "At a sushi bar",
        prompt: '"Is the salmon Tasmanian? Is the tuna Australian Southern Bluefin?"',
        why: "Distinguishes premium Australian product from frozen imported sashimi-grade alternatives.",
      },
      {
        scenario: "Ordering oysters",
        prompt: '"Sydney Rock, Pacific, or Angasi? And which estuary?"',
        why: "Native Sydney Rock from the Hawkesbury / Wallis Lake / Coffin Bay is unique to Australia.",
      },
    ],
  },

  reading: {
    title: "How to read a supermarket label",
    body:
      "Pre-packaged seafood at supermarket scale is required to display country-of-origin information. Here's what to actually look for.",
    items: [
      {
        signal: "&ldquo;Product of Australia&rdquo;",
        meaning: "All significant ingredients are Australian. The strongest claim.",
        confidence: "High" as const,
      },
      {
        signal: "&ldquo;Made in Australia from at least 90% Australian ingredients&rdquo;",
        meaning: "Manufactured here with mostly Australian seafood. Strong.",
        confidence: "High" as const,
      },
      {
        signal: "&ldquo;Made in Australia from imported ingredients&rdquo;",
        meaning:
          "Manufactured here, but the seafood itself is imported. The fish is NOT Australian.",
        confidence: "Low (it's imported)" as const,
      },
      {
        signal: "&ldquo;Packed in Australia&rdquo; only",
        meaning: "The product was only packed locally — origin of the seafood unclear.",
        confidence: "Low" as const,
      },
      {
        signal: "Origin not displayed",
        meaning: "Most likely an import lobbying loophole product. Avoid.",
        confidence: "Avoid" as const,
      },
    ],
  },

  apps: {
    title: "Apps and tools that help",
    items: [
      {
        name: "GoodFish (Australian Marine Conservation Society)",
        url: "https://goodfish.org.au/",
        text: "Australia's most authoritative consumer guide to sustainable seafood. Search any species and see a green-amber-red rating with origin, fishing method, and a recommendation.",
      },
      {
        name: "Sydney Fish Market — In Season Now",
        url: "https://www.sydneyfishmarket.com.au/",
        text: "Live updates on what's in season at Australia's largest auction. Useful for menu planning or knowing what to ask for.",
      },
      {
        name: "Country of Origin (this site)",
        url: "/species",
        text: "Browse 25 Australian species, 50+ fishing regions, and 25 Aus-vs-imported comparisons. Free, sourced, no app.",
      },
      {
        name: "MSC Find a Fish",
        url: "https://www.msc.org/en-au/what-we-are-doing/our-collective-impact/sustainable-fish-finder",
        text: "Search MSC-certified products. Useful for verifying sustainable wild-capture claims at retail.",
      },
    ],
  },

  swaps: {
    title: "Top 10 Australian alternatives to common imports",
    body:
      "If you find yourself reaching for an imported product, here are the local equivalents that are nearly always in the next aisle or on the same menu.",
    rows: [
      {
        imported: "Imported tiger prawns (Vietnam/India/Thailand)",
        australian: "Spencer Gulf King Prawns",
        link: "/species/prawns",
      },
      {
        imported: "Norwegian / Chilean farmed salmon",
        australian: "Tasmanian Atlantic Salmon",
        link: "/species/salmon",
      },
      {
        imported: "Imported &lsquo;flake&rsquo; (basa / pangasius / shark)",
        australian: "Tiger or Dusky Flathead",
        link: "/species/flathead",
      },
      {
        imported: "Imported &lsquo;snapper&rsquo; (NZ / China)",
        australian: "Australian Snapper",
        link: "/species/snapper",
      },
      {
        imported: "Imported squid rings (China / Vietnam)",
        australian: "Southern Calamari (hand-jigged)",
        link: "/species/calamari",
      },
      {
        imported: "Imported scallops (often water-injected)",
        australian: "Bass Strait or Hervey Bay roe-on scallops",
        link: "/species/scallops",
      },
      {
        imported: "Imported mussels (NZ / Chile / Spain)",
        australian: "Australian Blue Mussels (Tas / Vic / SA)",
        link: "/species/mussels",
      },
      {
        imported: "Imported abalone (China / Korea)",
        australian: "Wild Greenlip Abalone (Tas / Vic / SA / WA)",
        link: "/species/abalone",
      },
      {
        imported: "Imported tinned tuna (variable mercury)",
        australian: "Australian Southern Bluefin Tuna (sashimi or steak)",
        link: "/species/tuna",
      },
      {
        imported: "Imported tinned sardines",
        australian: "Australian Sardines (Port Lincoln, fresh in season)",
        link: "/species/sardines",
      },
    ],
  },

  rule: {
    title: "From 1 July 2026, restaurants must tell you",
    body:
      "Every restaurant, café, fish-and-chip shop, takeaway, and delivery operator in Australia must display A (Australian), I (Imported), or M (Mixed) next to every seafood dish. If they don't — ask. If they can't answer — choose differently.",
  },
};
