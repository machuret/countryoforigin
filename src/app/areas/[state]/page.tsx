import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { areaBySlug, regionsByState, statesOnly, areaUrl } from "@/data/areas";

type Params = { state: string };

/**
 * /areas/[state] — handles the STATE detail page.
 * (Region URLs are /areas/[state]/[region] handled in the nested route.)
 */
export async function generateStaticParams(): Promise<Params[]> {
  return statesOnly().map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { state } = await params;
  const a = areaBySlug(state);
  if (!a || a.type !== "state") return {};
  return {
    title: a.meta?.title ?? `${a.name} — Australian Seafood Guide`,
    description: a.meta?.description ?? a.summary,
  };
}

export default async function StateDetail({ params }: { params: Promise<Params> }) {
  const { state } = await params;
  const a = areaBySlug(state);
  if (!a || a.type !== "state") notFound();

  const regions = regionsByState(a.slug);

  return (
    <PageShell>
      <EntityHero
        eyebrow={`Australian State · ${a.state ?? ""}`}
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

          {regions.length > 0 && (
            <>
              <h2>Regions in {a.name}</h2>
              <p>
                {regions.length} fishing region{regions.length === 1 ? "" : "s"} have their own
                profile inside {a.name}.
              </p>
              <div className="seafood-grid" style={{ marginTop: "1.5rem" }}>
                {regions.map((r) => (
                  <Link
                    key={r.slug}
                    href={areaUrl(r)}
                    className="seafood-card"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="seafood-info">
                      <span className="index-card-eyebrow">{r.tagline ?? "Region"}</span>
                      <h3>{r.name}</h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                        {r.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <RelatedLinks related={a.related} />
    </PageShell>
  );
}
