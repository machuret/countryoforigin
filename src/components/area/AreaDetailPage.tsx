import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { CitationList } from "@/components/Citation";
import { HistoryTimeline } from "@/components/species";
import { decodeEntities } from "@/lib/html-entities";
import type { Area } from "@/data/areas";
import { areaUrl } from "@/data/areas";
import {
  AreaHeadline,
  AreaTopSpeciesList,
  AreaFleetBlock,
  AreaProcessorList,
  AreaCulturalNote,
  NamedNoteList,
} from "@/components/area";

/**
 * Shared body for both `/areas/[state]` and `/areas/[state]/[region]`.
 * Renders breadcrumbs, hero, all the deep-data sections and related links.
 */
export function AreaDetailPage({
  area,
  breadcrumbs,
  hero,
  intro,
  childRegions,
}: {
  area: Area;
  breadcrumbs: Crumb[];
  hero: {
    eyebrow: string;
    back: { href: string; label: string };
    extra?: React.ReactNode;
  };
  /** Optional intro paragraph above sections */
  intro?: React.ReactNode;
  /** State pages render their child regions; region pages omit this */
  childRegions?: Area[];
}) {
  return (
    <PageShell>
      <Breadcrumbs items={breadcrumbs} />
      <EntityHero
        eyebrow={hero.eyebrow}
        title={area.name}
        lede={area.summary}
        back={hero.back}
      >
        {area.tagline && (
          <div
            style={{
              fontFamily: "var(--f-serif)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "var(--teal)",
              marginTop: "1rem",
            }}
          >
            {area.tagline}
          </div>
        )}
        {hero.extra}
      </EntityHero>

      <section className="entity-body">
        <div className="entity-body-inner">
          {intro ?? (
            <>
              <h2>About {area.name}</h2>
              <p>{area.summary}</p>
            </>
          )}

          {area.headlineStat && (
            <div className="entity-stat-grid" style={{ gridTemplateColumns: "1fr" }}>
              <div className="entity-stat">
                <strong>{area.headlineStat.value}</strong>
                <span>{area.headlineStat.label}</span>
              </div>
            </div>
          )}

          <AreaHeadline catch_={area.catchVolume} econ={area.economicValue} />

          {area.highlights && area.highlights.length > 0 && (
            <>
              <h2>Key facts</h2>
              <ul>
                {area.highlights.map((h: string, i: number) => (
                  <li key={i}>{decodeEntities(h)}</li>
                ))}
              </ul>
            </>
          )}

          {area.topSpecies && area.topSpecies.length > 0 && (
            <>
              <h2>Top species caught here</h2>
              <AreaTopSpeciesList items={area.topSpecies} />
            </>
          )}

          {area.fleet && (
            <>
              <h2>Fleet &amp; ports</h2>
              <AreaFleetBlock fleet={area.fleet} />
            </>
          )}

          {area.keyPorts && area.keyPorts.length > 0 && (
            <>
              <h2>Key fishing ports</h2>
              <NamedNoteList items={area.keyPorts} accent="teal" />
            </>
          )}

          {area.processors && area.processors.length > 0 && (
            <>
              <h2>Processors, co-ops &amp; markets</h2>
              <AreaProcessorList items={area.processors} />
            </>
          )}

          {area.history && area.history.length > 0 && (
            <>
              <h2>Historical timeline</h2>
              <HistoryTimeline items={area.history} />
            </>
          )}

          {area.culturalSignificance && (
            <>
              <h2>Cultural &amp; heritage significance</h2>
              <AreaCulturalNote text={area.culturalSignificance} />
            </>
          )}

          {area.tourismHooks && area.tourismHooks.length > 0 && (
            <>
              <h2>Visitor experiences</h2>
              <NamedNoteList items={area.tourismHooks} accent="gold" />
            </>
          )}

          {area.citationIds && area.citationIds.length > 0 && (
            <CitationList ids={area.citationIds} />
          )}

          {childRegions && childRegions.length > 0 && (
            <>
              <h2>Regions in {area.name}</h2>
              <p>
                {childRegions.length} fishing region{childRegions.length === 1 ? "" : "s"} have
                their own profile inside {area.name}.
              </p>
              <div className="seafood-grid" style={{ marginTop: "1.5rem" }}>
                {childRegions.map((r) => (
                  <Link
                    key={r.slug}
                    href={areaUrl(r)}
                    className="seafood-card"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="seafood-info">
                      <span className="index-card-eyebrow">{r.tagline ?? "Region"}</span>
                      <h3>{r.name}</h3>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-mid)",
                          lineHeight: 1.6,
                        }}
                      >
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

      <RelatedLinks related={area.related} />
    </PageShell>
  );
}
