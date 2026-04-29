import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { statesOnly, regionsOnly } from "@/data/areas";

export const metadata: Metadata = {
  title: "Australian Seafood States & Regions — Country of Origin",
  description:
    "Browse Australian seafood by state and key fishing region — from Spencer Gulf to Coffin Bay, Macquarie Harbour to the Torres Strait.",
};

function AreaGrid({ areas, title }: { areas: ReturnType<typeof statesOnly>; title: string }) {
  if (areas.length === 0) return null;
  return (
    <>
      <h2
        style={{
          fontFamily: "var(--f-serif)",
          fontSize: "1.8rem",
          fontWeight: 700,
          color: "var(--navy)",
          marginTop: "3rem",
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </h2>
      <div className="index-grid">
        {areas.map((a) => (
          <Link key={a.slug} href={`/areas/${a.slug}`} className="index-card">
            <span className="index-card-eyebrow">
              {a.type === "state" ? `State · ${a.state}` : `Region · ${a.state}`}
            </span>
            <h3>{a.name}</h3>
            {a.tagline && (
              <div className="sci" style={{ fontStyle: "normal", color: "var(--teal)" }}>
                {a.tagline}
              </div>
            )}
            <p>{a.summary}</p>
            <span className="arrow">Open profile →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function AreasIndex() {
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
            picture, or by specific region for famed locations like Spencer Gulf and Coffin Bay.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <AreaGrid areas={statesOnly()} title="By State" />
          <AreaGrid areas={regionsOnly()} title="By Region" />
        </div>
      </section>
    </PageShell>
  );
}
