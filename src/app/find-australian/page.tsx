import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How to Find Australian Seafood — Country of Origin",
  description:
    "Practical guide for Australian shoppers and diners: how to ask the fishmonger, how to read a supermarket label, the apps to use, and 10 Aussie alternatives to common imports.",
};

const PAGE = {
  hero: {
    eyebrow: "For consumers",
    title: "How to actually find",
    titleAccent: "Australian seafood",
    lede: "Most Australians say they want Australian seafood. The challenge is finding it. This page is a practical, no-fluff guide for shoppers and diners — the questions to ask, the labels to read, the apps to use, and the easy alternatives when you want to swap an import for a local.",
  },

  asking: {
    title: "How to ask the fishmonger",
    body: "The single most useful question is: 'Where was this caught or farmed?' If they hesitate, push for the country. If they can't answer at all, walk. Australian seafood always has provenance you can verify.",
    scripts: [
      {
        scenario: "At the fish counter",
        prompt: '"Where was this caught — and what species exactly?"',
        why: "Forces the supplier to confirm both species AND country of catch / production.",
      },
      {
        scenario: "Buying prawns",
        prompt: '"Are these Australian wild prawns? Spencer Gulf, Exmouth, Shark Bay, or Banana Prawn?"',
        why: "Naming a region signals you know what good Australian product looks like.",
      },
      {
        scenario: "Buying fish-and-chips",
        prompt: '"What\'s in the &lsquo;flake&rsquo; today — gummy shark, basa, or something else?"',
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
    body: "Pre-packaged seafood at supermarket scale is required to display country-of-origin information. Here's what to actually look for.",
    items: [
      {
        signal: "&ldquo;Product of Australia&rdquo;",
        meaning: "All significant ingredients are Australian. The strongest claim.",
        confidence: "High",
      },
      {
        signal: "&ldquo;Made in Australia from at least 90% Australian ingredients&rdquo;",
        meaning: "Manufactured here with mostly Australian seafood. Strong.",
        confidence: "High",
      },
      {
        signal: "&ldquo;Made in Australia from imported ingredients&rdquo;",
        meaning: "Manufactured here, but the seafood itself is imported. The fish is NOT Australian.",
        confidence: "Low (it's imported)",
      },
      {
        signal: "&ldquo;Packed in Australia&rdquo; only",
        meaning: "The product was only packed locally — origin of the seafood unclear.",
        confidence: "Low",
      },
      {
        signal: "Origin not displayed",
        meaning: "Most likely an import lobbying loophole product. Avoid.",
        confidence: "Avoid",
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
    body: "If you find yourself reaching for an imported product, here are the local equivalents that are nearly always in the next aisle or on the same menu.",
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
    body: "Every restaurant, café, fish-and-chip shop, takeaway, and delivery operator in Australia must display A (Australian), I (Imported), or M (Mixed) next to every seafood dish. If they don't — ask. If they can't answer — choose differently.",
  },
};

export default function FindAustralianPage() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">{PAGE.hero.eyebrow}</span>
          <h1 className="entity-title">
            {PAGE.hero.title} <em>{PAGE.hero.titleAccent}</em>
          </h1>
          <p className="entity-lede">{PAGE.hero.lede}</p>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>{PAGE.asking.title}</h2>
          <p>{PAGE.asking.body}</p>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
            {PAGE.asking.scripts.map((s) => (
              <div
                key={s.scenario}
                style={{
                  background: "white",
                  border: "1px solid rgba(10,37,64,0.1)",
                  borderRadius: 6,
                  padding: "1.2rem 1.4rem",
                }}
              >
                <span className="index-card-eyebrow">{s.scenario}</span>
                <p
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    margin: "0.6rem 0",
                    fontStyle: "italic",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.prompt }}
                />
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>
                  <strong style={{ color: "var(--teal)" }}>Why:</strong> {s.why}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.reading.title}</h2>
          <p>{PAGE.reading.body}</p>
          <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
              }}
            >
              <thead>
                <tr style={{ background: "var(--sand-light)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--f-cond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--navy)",
                      borderBottom: "2px solid rgba(10,37,64,0.1)",
                    }}
                  >
                    Label says
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--f-cond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--navy)",
                      borderBottom: "2px solid rgba(10,37,64,0.1)",
                    }}
                  >
                    What it means
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--f-cond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--navy)",
                      borderBottom: "2px solid rgba(10,37,64,0.1)",
                    }}
                  >
                    Australian-ness
                  </th>
                </tr>
              </thead>
              <tbody>
                {PAGE.reading.items.map((item, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(10,37,64,0.06)" }}>
                    <td
                      style={{ padding: "0.9rem 1rem", fontWeight: 600, color: "var(--navy)" }}
                      dangerouslySetInnerHTML={{ __html: item.signal }}
                    />
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-mid)" }}>
                      {item.meaning}
                    </td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.25rem 0.7rem",
                          borderRadius: 50,
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          background:
                            item.confidence === "High"
                              ? "rgba(30,158,128,0.12)"
                              : item.confidence === "Avoid"
                                ? "rgba(231,111,81,0.15)"
                                : "rgba(245,158,11,0.15)",
                          color:
                            item.confidence === "High"
                              ? "var(--teal)"
                              : item.confidence === "Avoid"
                                ? "var(--coral)"
                                : "var(--gold)",
                        }}
                      >
                        {item.confidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.apps.title}</h2>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
            {PAGE.apps.items.map((app) => {
              const isInternal = app.url.startsWith("/");
              const Wrapper: React.ElementType = isInternal ? Link : "a";
              const props: Record<string, unknown> = isInternal
                ? { href: app.url }
                : { href: app.url, target: "_blank", rel: "noopener noreferrer" };
              return (
                <Wrapper
                  key={app.name}
                  {...props}
                  style={{
                    display: "block",
                    background: "white",
                    border: "1px solid rgba(10,37,64,0.1)",
                    borderRadius: 6,
                    padding: "1.2rem 1.4rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontFamily: "var(--f-serif)",
                      fontSize: "1.05rem",
                      color: "var(--navy)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {app.name} {isInternal ? "→" : "↗"}
                  </strong>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", margin: 0, lineHeight: 1.6 }}>
                    {app.text}
                  </p>
                </Wrapper>
              );
            })}
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.swaps.title}</h2>
          <p>{PAGE.swaps.body}</p>
          <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(231,111,81,0.06)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--f-cond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--coral)",
                      borderBottom: "2px solid rgba(231,111,81,0.2)",
                    }}
                  >
                    Imported
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--f-cond)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--teal)",
                      borderBottom: "2px solid rgba(30,158,128,0.2)",
                      background: "rgba(30,158,128,0.05)",
                    }}
                  >
                    Australian alternative
                  </th>
                </tr>
              </thead>
              <tbody>
                {PAGE.swaps.rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(10,37,64,0.06)" }}>
                    <td
                      style={{
                        padding: "0.9rem 1rem",
                        color: "var(--text-mid)",
                      }}
                      dangerouslySetInnerHTML={{ __html: r.imported }}
                    />
                    <td
                      style={{
                        padding: "0.9rem 1rem",
                        fontWeight: 600,
                        background: "rgba(30,158,128,0.05)",
                      }}
                    >
                      <Link href={r.link} style={{ color: "var(--teal)", textDecoration: "none" }}>
                        {r.australian} →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "rgba(30,158,128,0.07)",
              borderLeft: "4px solid var(--teal)",
              padding: "1.6rem 2rem",
              borderRadius: 4,
              marginTop: "3rem",
            }}
          >
            <h2 style={{ marginTop: 0 }}>{PAGE.rule.title}</h2>
            <p>{PAGE.rule.body}</p>
            <Link href="/labelling" className="btn-primary">
              Read the labelling law →
            </Link>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Make every seafood meal Australian</h2>
        <p>
          25 species. 50+ fishing regions. Side-by-side comparisons. The full case for choosing
          local — backed by data.
        </p>
        <Link href="/why-australian" className="btn-white">
          Why Australian seafood
        </Link>
      </div>
    </PageShell>
  );
}
