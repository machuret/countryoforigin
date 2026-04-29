import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { comparisons } from "@/data/comparisons";

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
            {comparisons.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="index-card">
                <span className="index-card-eyebrow">Comparison</span>
                <h3>{c.name}</h3>
                <p>{c.summary}</p>
                <span className="arrow">View comparison →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
