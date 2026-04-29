import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CitationList } from "@/components/Citation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TableOfContents } from "@/components/TableOfContents";
import {
  IndustryHeadline,
  ProducerList,
  AssociationList,
  ReportList,
  IndustryTimeline,
  RegulationBlock,
  CertificationList,
  ChallengeList,
  SectionHeading,
} from "@/components/industry";
import { industryBySlug, allIndustrySlugs } from "@/data/industries";
import { decodeEntities } from "@/lib/html-entities";

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

  const tocItems: { id: string; label: string }[] = [];
  if (i.workforce || i.economicImpact) tocItems.push({ id: "workforce-economy", label: "Workforce & economy" });
  if (i.topProducers?.length) tocItems.push({ id: "producers", label: "Key producers" });
  if (i.associations?.length) tocItems.push({ id: "associations", label: "Industry bodies" });
  if (i.regulation) tocItems.push({ id: "regulation", label: "Regulation" });
  if (i.certifications?.length) tocItems.push({ id: "certifications", label: "Certifications" });
  if (i.timeline?.length) tocItems.push({ id: "history", label: "History" });
  if (i.reports?.length) tocItems.push({ id: "reports", label: "Key reports" });
  if (i.challenges?.length) tocItems.push({ id: "challenges", label: "Challenges" });
  if (i.citationIds?.length) tocItems.push({ id: "sources", label: "Sources" });

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/industry", label: "Industry" },
          { label: i.name },
        ]}
      />
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
          {tocItems.length > 2 && (
            <TableOfContents items={tocItems} className="toc--sticky" />
          )}
          <h2>What it covers</h2>
          <p>{i.summary}</p>

          {i.highlights && i.highlights.length > 0 && (
            <>
              <h2>Key facts</h2>
              <ul>
                {i.highlights.map((h: string, idx: number) => (
                  <li key={idx}>{decodeEntities(h)}</li>
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

          {(i.workforce || i.economicImpact) && (
            <>
              <SectionHeading id="workforce-economy">Workforce &amp; economy</SectionHeading>
              <IndustryHeadline workforce={i.workforce} econ={i.economicImpact} />
            </>
          )}

          {i.topProducers && i.topProducers.length > 0 && (
            <>
              <SectionHeading id="producers">Key producers &amp; operators</SectionHeading>
              <ProducerList items={i.topProducers} />
            </>
          )}

          {i.associations && i.associations.length > 0 && (
            <>
              <SectionHeading id="associations">Industry bodies</SectionHeading>
              <AssociationList items={i.associations} />
            </>
          )}

          {i.regulation && (
            <>
              <SectionHeading id="regulation">Regulation</SectionHeading>
              <RegulationBlock reg={i.regulation} />
            </>
          )}

          {i.certifications && i.certifications.length > 0 && (
            <>
              <SectionHeading id="certifications">Certifications</SectionHeading>
              <CertificationList items={i.certifications} />
            </>
          )}

          {i.timeline && i.timeline.length > 0 && (
            <>
              <SectionHeading id="history">History</SectionHeading>
              <IndustryTimeline items={i.timeline} />
            </>
          )}

          {i.reports && i.reports.length > 0 && (
            <>
              <SectionHeading id="reports">Key reports</SectionHeading>
              <ReportList items={i.reports} />
            </>
          )}

          {i.challenges && i.challenges.length > 0 && (
            <>
              <SectionHeading id="challenges">Challenges</SectionHeading>
              <ChallengeList items={i.challenges} />
            </>
          )}

          {i.citationIds && i.citationIds.length > 0 && (
            <>
              <SectionHeading id="sources">Sources</SectionHeading>
              <CitationList ids={i.citationIds} />
            </>
          )}
        </div>
      </section>

      <RelatedLinks related={i.related} />
    </PageShell>
  );
}
