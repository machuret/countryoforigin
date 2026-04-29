import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { whyAustralianPillars } from "@/data/campaigns";

export const metadata: Metadata = {
  title: "Why Choose Australian Seafood — Health, Economy, Environment, Taste",
  description:
    "Four reasons to choose Australian seafood — better nutrition, regional jobs, world-class environmental standards, and freshness you can taste. Each backed by evidence.",
};

export default function WhyAustralianHub() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--ocean">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">The case for local</span>
          <h1 className="entity-title">
            Why Choose <em>Australian Seafood?</em>
          </h1>
          <p className="entity-lede">
            Four pillars — health, economy, environment, taste. Each one is the reason coastal
            Australians, leading chefs, and the country&apos;s most informed consumers choose
            local. Every claim on these pages is sourced.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <div className="index-grid">
            {whyAustralianPillars.map((p) => (
              <Link key={p.slug} href={`/why-australian/${p.slug}`} className="index-card">
                <span className="index-card-eyebrow">{p.tagline}</span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <div
                  style={{
                    marginBottom: "1rem",
                    padding: "0.6rem 0.8rem",
                    background: "rgba(30,158,128,0.08)",
                    borderLeft: "3px solid var(--teal)",
                    borderRadius: 4,
                  }}
                >
                  <strong
                    style={{
                      fontFamily: "var(--f-serif)",
                      fontSize: "1.3rem",
                      color: "var(--teal)",
                      display: "block",
                    }}
                  >
                    {p.heroStat.value}
                  </strong>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-mid)" }}>
                    {p.heroStat.label}
                  </span>
                </div>
                <span className="arrow">Read pillar →</span>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "white",
              borderRadius: 8,
              borderLeft: "4px solid var(--coral)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--f-serif)",
                fontSize: "1.4rem",
                color: "var(--navy)",
                marginBottom: "0.6rem",
              }}
            >
              The other side of the argument
            </h3>
            <p style={{ color: "var(--text-mid)", marginBottom: "1rem" }}>
              We also document the documented risks of imported seafood — food fraud, antibiotics,
              labour exploitation, environmental destruction, and the carbon cost of long-haul
              freight.
            </p>
            <Link href="/risks-of-imported" className="btn-primary">
              The risks of imported seafood →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
