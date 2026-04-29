import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Citation, CitationList } from "@/components/Citation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { species } from "@/data/species";
import type { Species } from "@/data/species";
import { faqs } from "@/data/content/faq";
import { healthNutrients, healthSafetyClaims } from "@/data/content/health";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbListSchema } from "@/lib/jsonld";
import { site } from "@/config/site";
import { MercuryComparisonChart } from "@/components/dashboards";

export const metadata: Metadata = {
  title: "Why Australian Seafood Is Healthier — Country of Origin",
  description:
    "Every nutrient seafood delivers, and every species that delivers most. A cited, side-by-side comparison of Australian vs imported seafood — with no marketing fluff.",
};

type RankedSpecies = {
  species: Species;
  ausValue: number;
  impValue: number;
  unit: string;
};

/** Build a ranked list of species per nutrient from raw species data. */
function topSpeciesForNutrient(nutrientKey: string, n = 5): RankedSpecies[] {
  const rows: RankedSpecies[] = [];
  for (const sp of species) {
    const bar = sp.nutrition?.find((b) => b.name === nutrientKey);
    if (!bar) continue;
    rows.push({
      species: sp,
      ausValue: bar.aus,
      impValue: bar.imp,
      unit: bar.unit,
    });
  }
  rows.sort((a, b) => b.ausValue - a.ausValue);
  return rows.slice(0, n);
}

/** Average AU vs imported per nutrient — for the headline strip. */
function averageDelta(nutrientKey: string): {
  aus: number;
  imp: number;
  uplift: number;
  unit: string;
} | null {
  let aus = 0;
  let imp = 0;
  let unit = "";
  let count = 0;
  for (const sp of species) {
    const bar = sp.nutrition?.find((b) => b.name === nutrientKey);
    if (!bar) continue;
    aus += bar.aus;
    imp += bar.imp;
    unit = bar.unit;
    count++;
  }
  if (count === 0) return null;
  const avgA = aus / count;
  const avgI = imp / count;
  return {
    aus: Math.round(avgA * 10) / 10,
    imp: Math.round(avgI * 10) / 10,
    uplift: Math.round(((avgA - avgI) / avgI) * 100),
    unit,
  };
}

const HEALTH_FAQS = faqs.filter((f) => f.category === "health");

export default function HealthPage() {
  const allCitationIds = Array.from(
    new Set([
      ...healthNutrients.flatMap((n) => n.citationIds),
      ...healthSafetyClaims.flatMap((c) => c.citationIds),
      ...HEALTH_FAQS.flatMap((f) => f.citationIds ?? []),
    ]),
  );

  return (
    <PageShell>
      <JsonLd
        data={articleSchema({
          url: `${site.baseUrl}/health`,
          headline: "Why Australian seafood is healthier",
          description:
            "Cited per-nutrient comparison of Australian seafood — what each species delivers, and where imports fall short.",
        })}
      />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", url: site.baseUrl },
          { name: "Health", url: `${site.baseUrl}/health` },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "Health" },
        ]}
      />

      <header className="entity-hero entity-hero--ocean">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Why eat seafood</span>
          <h1 className="entity-title">
            What Australian seafood <em>does for you</em>
          </h1>
          <p className="entity-lede">
            One serve of Australian seafood delivers nine of the nutrients
            most under-consumed by Australian adults — at higher
            concentrations than imported equivalents, with significantly
            lower exposure to mercury, antibiotic residues and
            water-injection adulteration. Every claim below is sourced.
          </p>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          {/* Headline strip — average AU vs imported uplift across nutrients */}
          <h2 id="headline">By the numbers</h2>
          <p>
            Averages across the {species.length} species profiled on this site,
            using FSANZ Australian Food Composition Database values.
            <Citation id="fsanz-nutrient-tables" />
          </p>
          <div className="health-headline-grid">
            {healthNutrients
              .map((n) => ({ n, d: averageDelta(n.key) }))
              .filter((row) => row.d && row.d.uplift > 0)
              .slice(0, 6)
              .map(({ n, d }) =>
                d ? (
                  <div key={n.key} className="health-headline">
                    <strong className="health-headline__uplift">
                      +{d.uplift}%
                    </strong>
                    <span className="health-headline__name">{n.title}</span>
                    <span className="health-headline__values">
                      {d.aus}
                      {d.unit} AUS · {d.imp}
                      {d.unit} imported
                    </span>
                  </div>
                ) : null,
              )}
          </div>

          {/* Per-nutrient deep-dive */}
          <h2 id="nutrients" style={{ marginTop: "3rem" }}>
            What each nutrient does — and which Australian species delivers it
          </h2>
          <p>
            For every nutrient below: what it does in your body, why
            Australian seafood wins, and the top {5} Australian species per
            100g serve.
          </p>

          <div className="health-nutrients">
            {healthNutrients.map((nutrient) => {
              const top = topSpeciesForNutrient(nutrient.key, 5);
              if (top.length === 0) return null;
              const max = top[0].ausValue;
              return (
                <article key={nutrient.key} className="health-nutrient">
                  <header className="health-nutrient__head">
                    <h3 className="health-nutrient__title">
                      {nutrient.title}
                      {nutrient.citationIds.map((id) => (
                        <Citation key={id} id={id} />
                      ))}
                    </h3>
                    <p className="health-nutrient__role">{nutrient.role}</p>
                    <p className="health-nutrient__why">
                      <strong>Why Australian:</strong> {nutrient.whyAustralia}
                    </p>
                  </header>

                  <div className="health-nutrient__chart">
                    <p className="health-nutrient__chart-title">
                      Top {top.length} Australian sources (per 100g)
                    </p>
                    {top.map((row) => {
                      const ausPct = (row.ausValue / max) * 100;
                      const impPct = (row.impValue / max) * 100;
                      const uplift = Math.round(
                        ((row.ausValue - row.impValue) / row.impValue) * 100,
                      );
                      return (
                        <div
                          key={row.species.slug}
                          className="health-nutrient__row"
                        >
                          <Link
                            href={`/species/${row.species.slug}`}
                            className="health-nutrient__name"
                          >
                            {row.species.name}
                          </Link>
                          <div className="health-nutrient__bars">
                            <div
                              className="health-nutrient__bar health-nutrient__bar--aus"
                              style={{ width: `${ausPct}%` }}
                              title={`${row.ausValue}${row.unit} AUS`}
                            />
                            <div
                              className="health-nutrient__bar health-nutrient__bar--imp"
                              style={{ width: `${impPct}%` }}
                              title={`${row.impValue}${row.unit} imported`}
                            />
                          </div>
                          <div className="health-nutrient__values">
                            <span className="health-nutrient__aus">
                              {row.ausValue}
                              {row.unit}
                            </span>
                            <span className="health-nutrient__delta">
                              +{uplift}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="health-nutrient__legend">
                      <span>
                        <span className="health-nutrient__swatch health-nutrient__swatch--aus" />{" "}
                        Australian
                      </span>
                      <span>
                        <span className="health-nutrient__swatch health-nutrient__swatch--imp" />{" "}
                        Imported equivalent
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Safety / what you don't get */}
          <h2 id="safety" style={{ marginTop: "3rem" }}>
            What you <em>don&apos;t</em> get with Australian seafood
          </h2>
          <p>
            Choosing Australian isn&apos;t only about more nutrients —
            it&apos;s about avoiding what the imported supply chain routinely
            includes.
          </p>
          <div className="deep-grid-2">
            {healthSafetyClaims.map((claim) => (
              <div key={claim.title} className="deep-card health-claim">
                <h3>{claim.title}</h3>
                <p>{claim.body}</p>
                <p className="health-claim__cites">
                  Sources:{" "}
                  {claim.citationIds.map((id) => (
                    <Citation key={id} id={id} />
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Mercury chart — re-uses the dashboard component */}
          <h2 id="mercury" style={{ marginTop: "3rem" }}>
            Mercury: side-by-side, every species
          </h2>
          <p>
            Methylmercury accumulates in long-lived predatory fish. Lower is
            better. Imported equivalents test consistently higher because of
            longer-lived sourcing and weaker harvest controls.
          </p>
          <MercuryComparisonChart />

          {/* Health-categorised FAQs */}
          {HEALTH_FAQS.length > 0 && (
            <>
              <h2 id="faq" style={{ marginTop: "3rem" }}>
                Frequently asked health questions
              </h2>
              <div style={{ display: "grid", gap: "0.7rem" }}>
                {HEALTH_FAQS.map((f, i) => (
                  <details key={i} className="faq">
                    <summary>{f.q}</summary>
                    <p style={{ margin: "0.8rem 0 0" }}>
                      {f.a}
                      {f.citationIds &&
                        f.citationIds.map((id) => <Citation key={id} id={id} />)}
                    </p>
                  </details>
                ))}
              </div>
            </>
          )}

          <h2 style={{ marginTop: "3rem" }}>Go deeper</h2>
          <ul>
            <li>
              <Link href="/why-australian/health">
                Health pillar — the long-form case
              </Link>
            </li>
            <li>
              <Link href="/risks-of-imported/antibiotics">
                Risks of imported: antibiotic residues
              </Link>
            </li>
            <li>
              <Link href="/research?domain=nutrition">
                Browse the full nutrition citation library
              </Link>
            </li>
            <li>
              <Link href="/species">
                Compare any species AUS vs imported, side-by-side
              </Link>
            </li>
          </ul>

          <CitationList ids={allCitationIds} />
        </div>
      </section>
    </PageShell>
  );
}
