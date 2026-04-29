import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CompareCard } from "@/components/CompareCard";
import { NutritionBars } from "@/components/NutritionBars";
import { CitationList } from "@/components/Citation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  NumericCompareCard,
  QualitativeCompareCard,
  DeepCompareGrid,
  PriceContextBlock,
  BottomLineBlock,
  MethodNote,
} from "@/components/compare";
import { comparisonBySlug, allComparisonSlugs } from "@/data/comparisons";
import { speciesBySlug } from "@/data/species";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = comparisonBySlug(slug);
  if (!c) return {};
  return {
    title: c.meta?.title ?? `${c.name} — Country of Origin`,
    description: c.meta?.description ?? c.summary,
  };
}

export default async function ComparisonDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = comparisonBySlug(slug);
  if (!c) notFound();

  const sp = speciesBySlug(c.speciesSlug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/compare", label: "Compare" },
          { label: c.name },
        ]}
      />
      <EntityHero
        eyebrow="Comparison"
        title={c.name}
        lede={c.summary}
        back={{ href: "/compare", label: "All comparisons" }}
        variant="ocean"
      />

      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>Side-by-side</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <CompareCard data={c} />
          </div>

          {sp && sp.nutrition && sp.nutrition.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Nutrition (per 100g)</h2>
              <p>How {sp.name} compares to imported equivalents on key nutrients.</p>
              <div style={{ maxWidth: 760 }}>
                <NutritionBars bars={sp.nutrition} />
              </div>
            </>
          )}

          {c.priceContext && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Price context</h2>
              <PriceContextBlock text={c.priceContext} />
            </>
          )}

          {(c.carbon || c.jobs || c.freshnessDays) && (
            <>
              <h2 style={{ marginTop: "3rem" }}>By the numbers</h2>
              <DeepCompareGrid>
                <NumericCompareCard title="Carbon footprint" data={c.carbon} ausGood />
                <NumericCompareCard title="Australian jobs supported" data={c.jobs} ausGood={false} />
                <NumericCompareCard title="Freshness — harvest to retail" data={c.freshnessDays} ausGood />
              </DeepCompareGrid>
              {(c.carbon?.note || c.methodNote) && (
                <MethodNote text={c.methodNote} />
              )}
            </>
          )}

          {(c.welfare || c.mislabellingRisk || c.traceability) && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Quality &amp; integrity</h2>
              <DeepCompareGrid>
                <QualitativeCompareCard title="Welfare &amp; ethics" data={c.welfare} />
                <QualitativeCompareCard title="Mislabelling risk" data={c.mislabellingRisk} />
                <QualitativeCompareCard title="Traceability" data={c.traceability} />
              </DeepCompareGrid>
            </>
          )}

          {c.bottomLine && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Bottom line</h2>
              <BottomLineBlock text={c.bottomLine} />
            </>
          )}

          {c.citationIds && c.citationIds.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Sources</h2>
              <CitationList ids={c.citationIds} />
            </>
          )}

          {sp && (
            <p style={{ marginTop: "2rem" }}>
              <Link href={`/species/${sp.slug}`} className="btn-primary">
                Read the full {sp.name} profile →
              </Link>
            </p>
          )}
        </div>
      </section>

      <RelatedLinks
        related={{
          species: sp ? [sp.slug] : [],
          industry: sp?.related?.industry ?? [],
          areas: sp?.related?.areas ?? [],
          compare: [],
        }}
      />
    </PageShell>
  );
}
