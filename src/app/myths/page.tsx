import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { Citation, CitationList } from "@/components/Citation";
import { myths, type MythEntry } from "@/data/content/myths";

export const metadata: Metadata = {
  title: "Seafood Myths vs Facts — Country of Origin",
  description:
    "Common myths about Australian seafood — health, sustainability, industry and labelling — corrected with cited evidence.",
};

const CATEGORY_LABELS: Record<MythEntry["category"], string> = {
  health: "Health",
  sustainability: "Sustainability",
  industry: "Industry",
  labels: "Labels & origin",
};

export default function MythsPage() {
  const grouped = (Object.keys(CATEGORY_LABELS) as MythEntry["category"][]).map((cat) => ({
    cat,
    label: CATEGORY_LABELS[cat],
    items: myths.filter((m) => m.category === cat),
  }));

  const allCitationIds = Array.from(
    new Set(myths.flatMap((m) => m.citationIds ?? [])),
  );

  return (
    <PageShell>
      <EntityHero
        eyebrow="Reference"
        title="Myths vs Facts"
        lede="The most common Australian seafood myths — and what the evidence actually shows."
        back={{ href: "/", label: "Home" }}
      />
      <section className="entity-body">
        <div className="entity-body-inner">
          <p>
            <strong>{myths.length}</strong> myths debunked across {grouped.length} categories.
          </p>
          {grouped.map((g) => (
            <section key={g.cat} id={g.cat} style={{ marginTop: "2rem" }}>
              <h2>{g.label}</h2>
              <div style={{ display: "grid", gap: "0.9rem" }}>
                {g.items.map((m, i) => (
                  <article key={i} className="myth-card">
                    <p style={{ margin: 0 }}>
                      <strong style={{ color: "var(--danger)" }}>Myth:</strong> {m.myth}
                    </p>
                    <p style={{ margin: "0.5rem 0 0" }}>
                      <strong style={{ color: "var(--teal)" }}>Fact:</strong> {m.fact}
                      {m.citationIds &&
                        m.citationIds.map((id) => <Citation key={id} id={id} />)}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {allCitationIds.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Sources</h2>
              <CitationList ids={allCitationIds} />
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}
