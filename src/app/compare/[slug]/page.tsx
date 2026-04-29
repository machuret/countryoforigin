import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CompareCard } from "@/components/CompareCard";
import { NutritionBars } from "@/components/NutritionBars";
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

          {sp && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Nutrition (per 100g)</h2>
              <p>How {sp.name} compares to imported equivalents on key nutrients.</p>
              <div style={{ maxWidth: 760 }}>
                <NutritionBars bars={sp.nutrition} />
              </div>
              <p style={{ marginTop: "2rem" }}>
                <Link href={`/species/${sp.slug}`} className="btn-primary">
                  Read the full {sp.name} profile →
                </Link>
              </p>
            </>
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
