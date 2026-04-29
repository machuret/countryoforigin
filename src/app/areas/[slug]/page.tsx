import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { areaBySlug, allAreaSlugs } from "@/data/areas";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) return {};
  return {
    title: a.meta?.title ?? `${a.name} — Australian Seafood Guide`,
    description: a.meta?.description ?? a.summary,
  };
}

export default async function AreaDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) notFound();

  const eyebrow =
    a.type === "state" ? `Australian State · ${a.state ?? ""}` : `Region · ${a.state ?? ""}`;

  return (
    <PageShell>
      <EntityHero
        eyebrow={eyebrow.trim()}
        title={a.name}
        lede={a.summary}
        back={{ href: "/areas", label: "All states & regions" }}
      >
        {a.tagline && (
          <div
            style={{
              fontFamily: "var(--f-serif)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "var(--teal)",
              marginTop: "1rem",
            }}
          >
            {a.tagline}
          </div>
        )}
      </EntityHero>

      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>About {a.name}</h2>
          <p>{a.summary}</p>

          {a.headlineStat && (
            <div className="entity-stat-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div className="entity-stat">
                <strong>{a.headlineStat.value}</strong>
                <span>{a.headlineStat.label}</span>
              </div>
            </div>
          )}

          {a.highlights && a.highlights.length > 0 && (
            <>
              <h2>Key facts</h2>
              <ul>
                {a.highlights.map((h, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <RelatedLinks related={a.related} />
    </PageShell>
  );
}
