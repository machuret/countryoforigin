import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { industryBySlug, allIndustrySlugs } from "@/data/industries";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = industryBySlug(slug);
  if (!i) return {};
  return {
    title: i.meta?.title ?? `${i.name} — Country of Origin`,
    description: i.meta?.description ?? i.summary,
  };
}

export default async function IndustryDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = industryBySlug(slug);
  if (!i) notFound();

  const variant = i.theme === "navy" || i.theme === "ocean" ? "ocean" : "default";

  return (
    <PageShell>
      <EntityHero
        eyebrow={i.tagline}
        title={i.name}
        lede={i.summary}
        back={{ href: "/industry", label: "All industries" }}
        variant={variant}
      >
        {i.headlineStat && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: "0.8rem",
              padding: "0.8rem 1.2rem",
              background:
                variant === "ocean" ? "rgba(46,196,160,0.12)" : "rgba(30,158,128,0.08)",
              borderRadius: 6,
              marginTop: "1rem",
            }}
          >
            <strong
              style={{
                fontFamily: "var(--f-serif)",
                fontSize: "1.8rem",
                fontWeight: 800,
                color: variant === "ocean" ? "var(--teal-light)" : "var(--teal)",
              }}
            >
              {i.headlineStat.value}
            </strong>
            <span
              style={{
                fontSize: "0.85rem",
                color: variant === "ocean" ? "rgba(255,255,255,0.78)" : "var(--text-mid)",
              }}
            >
              {i.headlineStat.label}
            </span>
          </div>
        )}
      </EntityHero>

      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>What it covers</h2>
          <p>{i.summary}</p>

          {i.highlights && i.highlights.length > 0 && (
            <>
              <h2>Key facts</h2>
              <ul>
                {i.highlights.map((h, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </ul>
            </>
          )}

          {i.stats && i.stats.length > 0 && (
            <>
              <h2>By the numbers</h2>
              <div className="entity-stat-grid">
                {i.stats.map((stat) => (
                  <div className="entity-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <RelatedLinks related={i.related} />
    </PageShell>
  );
}
