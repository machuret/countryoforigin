import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { recipes } from "@/data/content/recipes";
import { speciesBySlug } from "@/data/species";

export const metadata: Metadata = {
  title: "Australian Seafood Recipes — Country of Origin",
  description:
    "24 hero recipes, one per Australian seafood species. Wild-caught prawns to Tasmanian salmon to Great Barrier Reef coral trout — cook the species correctly.",
};

const DIFFICULTY_COLOR = {
  easy: "var(--teal)",
  medium: "var(--gold)",
  advanced: "var(--coral)",
} as const;

export default function RecipesIndex() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Recipes</span>
          <h1 className="entity-title">
            Cook Australian <em>seafood</em> properly
          </h1>
          <p className="entity-lede">
            {recipes.length} hero recipes, one per species — short, precise, ingredient-first. No
            fluff, no 30-paragraph preamble. Just how to treat the fish.
          </p>
        </div>
      </header>

      <section className="index-section">
        <div className="index-inner">
          <div className="seafood-grid">
            {recipes.map((r) => {
              const sp = speciesBySlug(r.speciesSlug);
              return (
                <Link href={`/recipes/${r.slug}`} key={r.slug} className="index-card-link">
                  <article className="seafood-card">
                    <div className="seafood-img">
                      <div className={`seafood-img-bg ${sp?.cls ?? "sc-barramundi"}`}>
                        {sp?.emoji ?? "🐟"}
                      </div>
                      <span
                        className="seafood-status"
                        style={{
                          background: DIFFICULTY_COLOR[r.difficulty],
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        {r.difficulty}
                      </span>
                    </div>
                    <div className="seafood-info">
                      <h3>{r.name}</h3>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-light)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {sp?.name ?? r.speciesSlug}
                      </div>
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-mid)",
                          lineHeight: 1.55,
                          marginBottom: "0.8rem",
                        }}
                      >
                        {r.summary}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.8rem",
                          fontSize: "0.75rem",
                          color: "var(--text-mid)",
                          paddingTop: "0.6rem",
                          borderTop: "1px solid rgba(10,37,64,0.08)",
                        }}
                      >
                        <span>⏱ {r.prepMin + r.cookMin} min</span>
                        <span>👥 {r.servings} serves</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
