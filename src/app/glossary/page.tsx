import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { Citation } from "@/components/Citation";
import { glossary, type GlossaryTerm } from "@/data/content/glossary";

export const metadata: Metadata = {
  title: "Seafood Glossary — Country of Origin",
  description:
    "Plain-English definitions of every seafood, fishery, labelling and regulation term used across the site.",
};

const CATEGORY_LABELS: Record<GlossaryTerm["category"], string> = {
  regulation: "Regulators & laws",
  fishery: "Fisheries & gear",
  label: "Labels & origin",
  science: "Science & health",
  industry: "Industry & certification",
};

export default function GlossaryPage() {
  const grouped = (Object.keys(CATEGORY_LABELS) as GlossaryTerm["category"][]).map((cat) => ({
    cat,
    label: CATEGORY_LABELS[cat],
    items: glossary
      .filter((g) => g.category === cat)
      .sort((a, b) => a.term.localeCompare(b.term)),
  }));

  return (
    <PageShell>
      <EntityHero
        eyebrow="Reference"
        title="Seafood Glossary"
        lede="Plain-English definitions for every term we use — regulators, gear types, labels, certifications and key science."
        back={{ href: "/", label: "Home" }}
      />
      <section className="entity-body">
        <div className="entity-body-inner">
          <p>
            <strong>{glossary.length}</strong> terms across {grouped.length} categories.
            Cross-referenced to our <a href="/research">citation library</a>.
          </p>
          {grouped.map((g) => (
            <section key={g.cat} id={g.cat} style={{ marginTop: "2rem" }}>
              <h2>{g.label}</h2>
              <dl style={{ display: "grid", gap: "0.6rem" }}>
                {g.items.map((t) => (
                  <div
                    key={t.term}
                    style={{
                      padding: "0.8rem 1rem",
                      background: "var(--cream)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                    }}
                  >
                    <dt style={{ fontWeight: 700 }}>
                      {t.term}
                      {t.citationId && (
                        <span style={{ marginLeft: 6 }}>
                          <Citation id={t.citationId} />
                        </span>
                      )}
                    </dt>
                    <dd style={{ margin: "0.3rem 0 0" }}>{t.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
