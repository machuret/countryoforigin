import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { comparisons } from "@/data/comparisons";
import { speciesBySlug } from "@/data/species";
import { SpeciesImage } from "@/components/SpeciesImage";

export const metadata: Metadata = {
  title: "Australian vs Imported Seafood Comparisons — Country of Origin",
  description:
    "Side-by-side comparisons of Australian seafood against imported equivalents — nutrition, sustainability, transport, food safety and price.",
};

export default function CompareIndex() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Compare</span>
          <h1 className="entity-title">
            Australian vs <em>Imported Seafood</em>
          </h1>
          <p className="entity-lede">
            Pick a species and see exactly how Australian seafood stacks up against imported
            equivalents — nutrition, food safety, environmental standards, and price.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <div className="index-grid">
            {comparisons.map((c) => {
              const sp = speciesBySlug(c.speciesSlug);
              return (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="index-card index-card--with-image"
                >
                  {sp && (
                    <div className={`index-card-img ${sp.cls}`}>
                      <SpeciesImage
                        slug={sp.slug}
                        emoji={sp.emoji}
                        alt={`${sp.name} — Australian vs imported`}
                        variant="thumb"
                      />
                    </div>
                  )}
                  <span className="index-card-eyebrow">Comparison</span>
                  <h3>{c.name}</h3>
                  <p>{c.summary}</p>
                  <span className="arrow">View comparison →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
