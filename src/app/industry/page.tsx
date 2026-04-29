import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { industries } from "@/data/industries";
import {
  CatchByStateChart,
  GVPByStateChart,
  StockStatusBreakdown,
  MercuryComparisonChart,
  IndustryHeadlines,
  ProcessorTypeBreakdown,
} from "@/components/dashboards";

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
          <h2 style={{ fontFamily: "var(--f-serif)", fontSize: "var(--fs-h2)", marginBottom: "0.6rem", color: "var(--navy)" }}>
            By the numbers
          </h2>
          <p style={{ color: "var(--text-mid)", maxWidth: 720, marginBottom: "1.5rem" }}>
            Six visualisations of the dataset that powers this site — each
            redraws automatically when the underlying records change. Every
            figure traces back to a primary citation.
          </p>
          <div className="dashboards-grid">
            <div className="dashboard-figure--full">
              <IndustryHeadlines />
            </div>
            <CatchByStateChart />
            <GVPByStateChart />
            <StockStatusBreakdown />
            <ProcessorTypeBreakdown />
            <div className="dashboard-figure--full">
              <MercuryComparisonChart />
            </div>
          </div>

          <h2 style={{ fontFamily: "var(--f-serif)", fontSize: "var(--fs-h2)", margin: "3rem 0 1.5rem", color: "var(--navy)" }}>
            Five pillars of Australian seafood
          </h2>
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
