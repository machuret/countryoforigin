import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { NutritionBars } from "@/components/NutritionBars";
import { CompareCard } from "@/components/CompareCard";
import {
  speciesBySlug,
  allSpeciesSlugs,
  oysterVarieties,
} from "@/data/species";
import { comparisonBySlug } from "@/data/comparisons";
import { areaBySlug, areaUrl } from "@/data/areas";
import { citationById } from "@/data/citations";
import { recipeBySlug } from "@/data/recipes";
import {
  StockStatusBadge,
  ProductionChart,
  ContaminantsTable,
  SupplyChainTimeline,
  LookAlikesTable,
  RegulationsBlock,
  KeyOperators,
  HistoryTimeline,
  MediaWatch,
  GearList,
} from "@/components/SpeciesDeep";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allSpeciesSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = speciesBySlug(slug);
  if (!s) return {};
  return {
    title: s.meta?.title ?? `${s.name} — Australian Seafood Guide`,
    description: s.meta?.description ?? s.summary,
  };
}

const PILLAR_META = [
  { key: "health" as const, label: "Health", color: "var(--teal)" },
  { key: "economy" as const, label: "Economy", color: "var(--gold)" },
  { key: "environment" as const, label: "Environment", color: "var(--ocean)" },
  { key: "taste" as const, label: "Taste", color: "var(--coral)" },
];

export default async function SpeciesDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = speciesBySlug(slug);
  if (!s) notFound();

  const compare = s.related?.compare?.[0]
    ? comparisonBySlug(s.related.compare[0])
    : undefined;

  const recipe = recipeBySlug(s.slug);

  const sigRegions = (s.signatureRegions ?? [])
    .map((sl) => areaBySlug(sl))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <PageShell>
      <EntityHero
        eyebrow={s.tagline ?? "Species"}
        title={s.name}
        lede={s.summary}
        back={{ href: "/species", label: "All species" }}
      >
        {s.scientific && (
          <div style={{ fontStyle: "italic", color: "var(--text-light)", fontSize: "0.95rem" }}>
            {s.scientific}
          </div>
        )}
        {s.flavour && (
          <div style={{ marginTop: "1rem", fontSize: "1rem", color: "var(--text-mid)" }}>
            <strong style={{ color: "var(--navy)" }}>Flavour:</strong> {s.flavour}
          </div>
        )}
        {s.stockStatus && (
          <div style={{ marginTop: "1.2rem" }}>
            <StockStatusBadge status={s.stockStatus} />
          </div>
        )}
      </EntityHero>

      {/* WHY AUSTRALIAN — 4-PILLAR QUAD */}
      {s.whyAustralian && (
        <section className="species-why">
          <div className="species-why-inner">
            <span className="section-tag">Why Australian {s.name.split(" ").pop()}</span>
            <h2 className="section-title">Four reasons to choose local</h2>
            <div className="why-quad">
              {PILLAR_META.map((p) => (
                <div key={p.key} className="why-quad-card" style={{ borderTopColor: p.color }}>
                  <h3 style={{ color: p.color }}>{p.label}</h3>
                  <ul>
                    {s.whyAustralian![p.key].map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="entity-body">
        <div className="entity-body-inner">
          {/* SOURCING */}
          <h2>Sourcing</h2>
          <p>
            <strong>{s.name}</strong> is{" "}
            {s.sourcing === "wild"
              ? "exclusively wild-caught."
              : s.sourcing === "farmed"
                ? "exclusively farmed (aquaculture)."
                : "available both wild-caught and farmed."}
          </p>

          {/* SIGNATURE REGIONS */}
          {sigRegions.length > 0 && (
            <>
              <h2>Where it comes from</h2>
              <p>
                {s.name} is most strongly associated with these {sigRegions.length} Australian
                regions:
              </p>
              <div className="signature-regions">
                {sigRegions.map((r) => (
                  <Link key={r.slug} href={areaUrl(r)} className="signature-region-pill">
                    <strong>{r.name}</strong>
                    {r.tagline && <span>{r.tagline}</span>}
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* GEAR */}
          {s.gear && s.gear.length > 0 && (
            <>
              <h2>How it&apos;s caught or grown</h2>
              <GearList items={s.gear} />
            </>
          )}

          {/* PRODUCTION CHART */}
          {s.productionHistory && s.productionHistory.length > 0 && (
            <>
              <h2>Production volume (last 5 years)</h2>
              <p>
                Total Australian annual production of {s.name} — wild-catch + aquaculture combined.
                Sourced from ABARES Australian Fisheries and Aquaculture Statistics.
              </p>
              <ProductionChart data={s.productionHistory} />
            </>
          )}

          {/* REGULATIONS */}
          {s.regulations && (
            <>
              <h2>How it&apos;s managed</h2>
              <RegulationsBlock reg={s.regulations} />
            </>
          )}

          {/* NUTRITION */}
          <h2>Nutrition (per 100g)</h2>
          <p>
            How {s.name} compares to imported equivalents on the headline nutrients consumers care
            about.
          </p>
          <div style={{ maxWidth: 760 }}>
            <NutritionBars bars={s.nutrition} />
          </div>

          {/* CONTAMINANTS & PRICE */}
          {(s.mercury || s.antibiotics || s.priceRange) && (
            <>
              <h2>Contaminants &amp; price</h2>
              <p>
                Australian {s.name} compared to imported equivalents on mercury, antibiotic
                residues, and typical retail price. Unflagged metrics come from primary government
                sources (FSANZ, ABARES); synthesised numbers carry a visible tag.
              </p>
              <ContaminantsTable
                mercury={s.mercury}
                antibiotics={s.antibiotics}
                price={s.priceRange}
              />
            </>
          )}

          {/* SUPPLY CHAIN TIMELINE */}
          {s.supplyChain && s.supplyChain.length > 0 && (
            <>
              <h2>From harvest to plate</h2>
              <p>
                Days-to-plate is one of the strongest arguments for buying Australian. Here&apos;s
                the typical timeline for {s.name}.
              </p>
              <SupplyChainTimeline steps={s.supplyChain} />
            </>
          )}

          {/* SEASONALITY */}
          {s.seasonality && s.seasonality.length === 12 && (
            <>
              <h2>Seasonality</h2>
              <p>
                When to enjoy {s.name} at its peak.{" "}
                {s.sourcing === "farmed" &&
                  "(Farmed product is generally available year-round, with quality peaks in cooler months.)"}
              </p>
              <div className="seasonality-grid">
                {s.seasonality.map((m) => (
                  <div key={m.month} className={`season-cell season-${m.status}`}>
                    <strong>{m.month}</strong>
                    <span>{m.status}</span>
                  </div>
                ))}
              </div>
              <div className="season-legend">
                <span><i className="dot dot-peak" /> Peak</span>
                <span><i className="dot dot-good" /> Good</span>
                <span><i className="dot dot-available" /> Available</span>
                <span><i className="dot dot-off" /> Off-season</span>
              </div>
            </>
          )}

          {/* COOKING NOTES */}
          {s.cookingNotes && s.cookingNotes.length > 0 && (
            <>
              <h2>How to cook it</h2>
              <p>
                Four go-to preparations for {s.name} that respect the fish — short cooks, clean
                flavours, no over-doing it.
              </p>
              <div className="cooking-grid">
                {s.cookingNotes.map((c) => (
                  <div key={c.method} className="cooking-card">
                    <h4>{c.method}</h4>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
              {recipe && (
                <p style={{ marginTop: "1.5rem" }}>
                  <Link href={`/recipes/${recipe.slug}`} className="btn-primary">
                    Full recipe: {recipe.name} →
                  </Link>
                </p>
              )}
            </>
          )}

          {/* COMPARE */}
          {compare && (
            <>
              <h2>Australian vs imported — at a glance</h2>
              <p>{compare.summary}</p>
              <CompareCard data={compare} />
              <p style={{ marginTop: "1.5rem" }}>
                <Link href={`/compare/${compare.slug}`} className="btn-primary">
                  Read the full comparison →
                </Link>
              </p>
            </>
          )}

          {/* LOOK-ALIKES */}
          {s.lookAlikes && s.lookAlikes.length > 0 && (
            <>
              <h2>Look-alikes &amp; how to tell them apart</h2>
              <p>
                Products often confused with or substituted for Australian {s.name} — and what to
                look for instead.
              </p>
              <LookAlikesTable items={s.lookAlikes} />
            </>
          )}

          {/* RISKS OF IMPORTED */}
          {(s.importedFrom || s.importedRisks) && (
            <div className="imported-risks">
              <h2 style={{ color: "var(--coral)" }}>The risks of the imported version</h2>
              {s.importedFrom && (
                <p>
                  <strong>Typically imported from:</strong> {s.importedFrom}
                </p>
              )}
              {s.importedRisks && s.importedRisks.length > 0 && (
                <ul>
                  {s.importedRisks.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
              <p style={{ marginTop: "1rem" }}>
                <Link href="/risks-of-imported" className="btn-primary">
                  See the full case against imported seafood →
                </Link>
              </p>
            </div>
          )}

          {/* HOW TO BUY */}
          {s.labelingHint && (
            <>
              <h2>How to buy it</h2>
              <div className="labeling-hint">
                <span className="labeling-hint-icon">🔍</span>
                <div>
                  <strong>Look for:</strong>
                  <p>{s.labelingHint}</p>
                </div>
              </div>
              <p style={{ marginTop: "1rem", fontSize: "0.92rem" }}>
                From <strong>1 July 2026</strong>, every restaurant menu in Australia must show{" "}
                <strong>A</strong> (Australian), <strong>I</strong> (Imported), or{" "}
                <strong>M</strong> (Mixed) for each seafood dish.{" "}
                <Link href="/labelling" style={{ color: "var(--teal)" }}>
                  Read the law →
                </Link>
              </p>
            </>
          )}

          {/* OYSTER VARIETIES (special case) */}
          {s.slug === "oysters" && (
            <>
              <h2>Three Australian oyster varieties</h2>
              <p>
                &ldquo;Oyster&rdquo; on a menu can mean very different things. Australia farms three
                distinct species, each with its own native range, growing time, and flavour profile.
              </p>
              <div className="seafood-grid" style={{ marginTop: "1.5rem" }}>
                {oysterVarieties.map((o) => (
                  <div className="seafood-card" key={o.key}>
                    <div className="seafood-img">
                      <div className="seafood-img-bg sc-oyster">🦪</div>
                      <span
                        className={`seafood-status ${o.status === "Native" ? "status-wild" : "status-farmed"}`}
                      >
                        {o.status}
                      </span>
                    </div>
                    <div className="seafood-info">
                      <h3>{o.name}</h3>
                      <div className="seafood-origin">
                        <em style={{ fontStyle: "italic" }}>{o.scientific}</em>
                      </div>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-mid)",
                          margin: "0.4rem 0 0.6rem",
                          lineHeight: 1.55,
                        }}
                      >
                        <strong style={{ color: "var(--navy)" }}>Origin:</strong> {o.origin}
                        <br />
                        <strong style={{ color: "var(--navy)" }}>Flavour:</strong> {o.flavour}
                      </p>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-mid)", lineHeight: 1.55 }}>
                        {o.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* KEY OPERATORS */}
          {s.keyOperators && s.keyOperators.length > 0 && (
            <>
              <h2>Key operators, co-ops &amp; peak bodies</h2>
              <p>
                The businesses, co-operatives, and industry bodies behind Australian {s.name}.
              </p>
              <KeyOperators items={s.keyOperators} />
            </>
          )}

          {/* HISTORY */}
          {s.history && s.history.length > 0 && (
            <>
              <h2>Historical timeline</h2>
              <HistoryTimeline items={s.history} />
            </>
          )}

          {/* MEDIA WATCH */}
          {s.mediaWatch && s.mediaWatch.length > 0 && (
            <>
              <h2>In the news</h2>
              <MediaWatch items={s.mediaWatch} />
            </>
          )}

          {/* CITATIONS */}
          {s.citationIds && s.citationIds.length > 0 && (
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(10,37,64,0.12)",
              }}
            >
              <h3 style={{ fontSize: "1rem", marginBottom: "0.8rem" }}>Sources for this page</h3>
              <ol style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-mid)" }}>
                {s.citationIds.map((id) => {
                  const c = citationById(id);
                  if (!c) return null;
                  return (
                    <li key={id} style={{ marginBottom: "0.4rem" }}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--teal)", textDecoration: "none" }}
                      >
                        {c.label}
                      </a>{" "}
                      — <em>{c.publisher}</em>
                      {c.year ? ` (${c.year})` : ""}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </section>

      <RelatedLinks related={s.related} />
    </PageShell>
  );
}
