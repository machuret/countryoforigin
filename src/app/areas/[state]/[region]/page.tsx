import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { areaBySlug, regionsOnly, areaUrl } from "@/data/areas";

type Params = { state: string; region: string };

export async function generateStaticParams(): Promise<Params[]> {
  return regionsOnly().map((r) => ({
    state: r.parentState ?? "",
    region: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { region } = await params;
  const a = areaBySlug(region);
  if (!a || a.type !== "region") return {};
  return {
    title: a.meta?.title ?? `${a.name} — Australian Seafood Guide`,
    description: a.meta?.description ?? a.summary,
  };
}

export default async function RegionDetail({ params }: { params: Promise<Params> }) {
  const { state, region } = await params;
  const a = areaBySlug(region);
  if (!a || a.type !== "region" || a.parentState !== state) notFound();

  const parent = areaBySlug(state);

  return (
    <PageShell>
      <EntityHero
        eyebrow={`Region · ${a.state ?? ""}`}
        title={a.name}
        lede={a.summary}
        back={
          parent
            ? { href: areaUrl(parent), label: `Back to ${parent.name}` }
            : { href: "/areas", label: "All areas" }
        }
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
        {parent && (
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-mid)" }}>
            Part of{" "}
            <Link href={areaUrl(parent)} style={{ color: "var(--teal)", fontWeight: 600 }}>
              {parent.name}
            </Link>
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
