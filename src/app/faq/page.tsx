import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { Citation, CitationList } from "@/components/Citation";
import { faqs, type FaqEntry } from "@/data/content/faq";

export const metadata: Metadata = {
  title: "Seafood FAQ — Country of Origin",
  description:
    "Frequently-asked questions on Australian seafood: buying, labels, health, sustainability, industry and the 1 July 2026 cooked-fish rules.",
};

const CATEGORY_LABELS: Record<FaqEntry["category"], string> = {
  buying: "Buying",
  labels: "Labels & origin",
  health: "Health & nutrition",
  sustainability: "Sustainability",
  industry: "Industry",
  "rules-2026": "1 July 2026 rules",
};

export default function FaqPage() {
  const grouped = (Object.keys(CATEGORY_LABELS) as FaqEntry["category"][]).map((cat) => ({
    cat,
    label: CATEGORY_LABELS[cat],
    items: faqs.filter((f) => f.category === cat),
  }));

  const allCitationIds = Array.from(
    new Set(faqs.flatMap((f) => f.citationIds ?? [])),
  );

  return (
    <PageShell>
      <EntityHero
        eyebrow="Reference"
        title="Frequently asked questions"
        lede="Plain answers, every claim cited. From '1 July 2026' compliance to mercury, MSC, mislabelling and more."
        back={{ href: "/", label: "Home" }}
      />
      <section className="entity-body">
        <div className="entity-body-inner">
          <p>
            <strong>{faqs.length}</strong> questions across {grouped.length} categories.
          </p>
          {grouped.map((g) => (
            <section key={g.cat} id={g.cat} style={{ marginTop: "2rem" }}>
              <h2>{g.label}</h2>
              <div style={{ display: "grid", gap: "0.7rem" }}>
                {g.items.map((f, i) => (
                  <details key={i} className="faq">
                    <summary>{f.q}</summary>
                    <p style={{ margin: "0.8rem 0 0" }}>{f.a}</p>
                    {f.citationIds && f.citationIds.length > 0 && (
                      <p style={{ margin: "0.4rem 0 0", fontSize: "0.85rem" }}>
                        Sources:{" "}
                        {f.citationIds.map((id) => (
                          <Citation key={id} id={id} />
                        ))}
                      </p>
                    )}
                  </details>
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
