import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { riskPages } from "@/data/campaigns";

export const metadata: Metadata = {
  title: "The Risks of Imported Seafood — Country of Origin",
  description:
    "Food fraud, antibiotics, forced labour, environmental destruction, and the carbon cost of long-haul transport — what you need to know about imported seafood, evidence-led.",
};

export default function RisksHub() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--ocean">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">The other side</span>
          <h1 className="entity-title">
            The Risks of <em>Imported Seafood</em>
          </h1>
          <p className="entity-lede">
            Five evidence-backed reasons to read your menu carefully. Every page on this hub is
            sourced from peer-reviewed research, government investigations, or major journalism —
            the AP, FAO, FSANZ, US State Department, Greenpeace, ILO, and others.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <div className="index-grid">
            {riskPages.map((p) => (
              <Link key={p.slug} href={`/risks-of-imported/${p.slug}`} className="index-card">
                <span className="index-card-eyebrow">{p.tagline}</span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <div
                  style={{
                    marginBottom: "1rem",
                    padding: "0.6rem 0.8rem",
                    background: "rgba(231,111,81,0.08)",
                    borderLeft: "3px solid var(--coral)",
                    borderRadius: 4,
                  }}
                >
                  <strong
                    style={{
                      fontFamily: "var(--f-serif)",
                      fontSize: "1.3rem",
                      color: "var(--coral)",
                      display: "block",
                    }}
                  >
                    {p.heroStat.value}
                  </strong>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-mid)" }}>
                    {p.heroStat.label}
                  </span>
                </div>
                <span className="arrow">Read risk →</span>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "white",
              borderRadius: 8,
              borderLeft: "4px solid var(--teal)",
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
              The Australian alternative
            </h3>
            <p style={{ color: "var(--text-mid)", marginBottom: "1rem" }}>
              For every imported risk, there&apos;s an Australian alternative under stricter
              regulation, with shorter supply chains, in cleaner waters.
            </p>
            <Link href="/why-australian" className="btn-primary">
              Why Australian seafood →
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
