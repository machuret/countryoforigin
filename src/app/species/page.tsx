import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { species } from "@/data/species";

export const metadata: Metadata = {
  title: "All Australian Seafood Species — Country of Origin",
  description:
    "Browse all the Australian seafood species we cover — wild-caught fish, farmed shellfish, premium crustaceans, and more.",
};

export default function SpeciesIndex() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Browse</span>
          <h1 className="entity-title">
            Australian Seafood <em>Species</em>
          </h1>
          <p className="entity-lede">
            From wild Northern barramundi to farmed Tasmanian salmon, dive-caught Greenlip
            abalone, and cold-water rock lobster — explore the species that come from Australian
            waters.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <div className="index-grid">
            {species.map((s) => (
              <Link key={s.slug} href={`/species/${s.slug}`} className="index-card">
                <span className="index-card-eyebrow">
                  {s.tagline ?? (s.sourcing === "wild" ? "Wild Caught" : s.sourcing === "farmed" ? "Aquaculture" : "Wild & Farmed")}
                </span>
                <h3>{s.name}</h3>
                {s.scientific && <div className="sci">{s.scientific}</div>}
                <p>{s.summary}</p>
                <div className="index-card-tags">
                  {s.tags.slice(0, 3).map((t, i) => (
                    <span key={t} className={`tag ${["tag-green", "tag-blue", "tag-gold"][i % 3]}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="arrow">View profile →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
