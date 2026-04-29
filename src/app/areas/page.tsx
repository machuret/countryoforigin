import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { statesOnly, regionsByState, areaUrl } from "@/data/areas";

export const metadata: Metadata = {
  title: "Australian Seafood States & Regions — Country of Origin",
  description:
    "Browse Australian seafood by state and 50+ key fishing regions — from Spencer Gulf and Coffin Bay to the Kimberley, Macquarie Harbour, and the Torres Strait.",
};

export default function AreasIndex() {
  const states = statesOnly();

  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Browse</span>
          <h1 className="entity-title">
            States &amp; <em>Regions</em>
          </h1>
          <p className="entity-lede">
            Australian seafood is shaped by where it comes from. Browse by state for the big
            picture, or drill down into 50+ specific fishing regions — from Spencer Gulf to the
            Kimberley.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          {states.map((s) => {
            const regions = regionsByState(s.slug);
            return (
              <div key={s.slug} style={{ marginBottom: "3rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid rgba(10,37,64,0.1)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <span className="index-card-eyebrow">{s.state}</span>
                    <h2
                      style={{
                        fontFamily: "var(--f-serif)",
                        fontSize: "1.7rem",
                        fontWeight: 700,
                        color: "var(--navy)",
                        margin: 0,
                      }}
                    >
                      <Link
                        href={areaUrl(s)}
                        style={{ color: "var(--navy)", textDecoration: "none" }}
                      >
                        {s.name}
                      </Link>
                    </h2>
                    {s.tagline && (
                      <div
                        style={{
                          color: "var(--text-mid)",
                          fontSize: "0.95rem",
                          fontStyle: "italic",
                          marginTop: "0.3rem",
                        }}
                      >
                        {s.tagline}
                      </div>
                    )}
                  </div>
                  <Link
                    href={areaUrl(s)}
                    style={{
                      color: "var(--teal)",
                      fontFamily: "var(--f-cond)",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontSize: "0.78rem",
                      textDecoration: "none",
                    }}
                  >
                    {s.name} overview →
                  </Link>
                </div>

                {regions.length > 0 ? (
                  <div className="index-grid">
                    {regions.map((r) => (
                      <Link key={r.slug} href={areaUrl(r)} className="index-card">
                        <span className="index-card-eyebrow">Region</span>
                        <h3>{r.name}</h3>
                        {r.tagline && (
                          <div
                            className="sci"
                            style={{ fontStyle: "normal", color: "var(--teal)" }}
                          >
                            {r.tagline}
                          </div>
                        )}
                        <p>{r.summary}</p>
                        <span className="arrow">Open profile →</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: "var(--text-light)", fontStyle: "italic" }}>
                    No specific region pages yet — see the {s.name} overview.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
