import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Australian Seafood Industries — Country of Origin",
  description:
    "Indigenous fishing, commercial fleets, aquaculture, processors, and tuna ranching — the industries that put Australian seafood on your plate.",
};

export default function IndustryIndex() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Browse</span>
          <h1 className="entity-title">
            The Australian Seafood <em>Industry</em>
          </h1>
          <p className="entity-lede">
            From 65,000-year-old Indigenous fishing traditions to modern aquaculture and the
            world&apos;s most rigorously managed wild fleets — every link in the chain that brings
            Australian seafood to your plate.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <div className="index-grid">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industry/${i.slug}`} className="index-card">
                <span className="index-card-eyebrow">{i.tagline ?? "Industry"}</span>
                <h3>{i.name}</h3>
                <p>{i.summary}</p>
                {i.headlineStat && (
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
                        fontSize: "1.1rem",
                        color: "var(--teal)",
                        display: "block",
                      }}
                    >
                      {i.headlineStat.value}
                    </strong>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-mid)" }}>
                      {i.headlineStat.label}
                    </span>
                  </div>
                )}
                <span className="arrow">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
