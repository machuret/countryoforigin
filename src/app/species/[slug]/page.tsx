import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { NutritionBars } from "@/components/NutritionBars";
import { CompareCard } from "@/components/CompareCard";
import { species, speciesBySlug, allSpeciesSlugs, oysterVarieties } from "@/data/species";
import { comparisonBySlug } from "@/data/comparisons";

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

export default async function SpeciesDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = speciesBySlug(slug);
  if (!s) notFound();

  const compare = s.related?.compare?.[0]
    ? comparisonBySlug(s.related.compare[0])
    : undefined;

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
      </EntityHero>

      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>About {s.name}</h2>
          {s.flavour && (
            <p>
              <strong>Flavour:</strong> {s.flavour}
            </p>
          )}
          <p>
            <strong>Sourcing:</strong>{" "}
            {s.sourcing === "wild"
              ? "Wild-caught only"
              : s.sourcing === "farmed"
                ? "Farmed (aquaculture) only"
                : "Both wild-caught and farmed"}
          </p>

          <h2>Nutritional value (per 100g)</h2>
          <p>
            How {s.name} compares to imported equivalents on the headline nutrients consumers care
            about.
          </p>
          <div style={{ maxWidth: 760 }}>
            <NutritionBars bars={s.nutrition} />
          </div>

          {compare && (
            <>
              <h2>Australia vs imported — at a glance</h2>
              <p>{compare.summary}</p>
              <CompareCard data={compare} />
              <p style={{ marginTop: "1.5rem" }}>
                <Link href={`/compare/${compare.slug}`} className="btn-primary">
                  Read the full comparison →
                </Link>
              </p>
            </>
          )}

          {/* Special-case oyster varieties sub-section */}
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
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-mid)",
                          lineHeight: 1.55,
                        }}
                      >
                        {o.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <RelatedLinks related={s.related} />
    </PageShell>
  );
}
