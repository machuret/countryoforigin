import Link from "next/link";
import { PageShell } from "./PageShell";
import { EntityHero } from "./EntityHero";
import { decodeEntities } from "@/lib/html-entities";
import { citationById } from "@/data/citations";
import type { CampaignPage } from "@/data/campaigns";

/**
 * Renders a /why-australian/* or /risks-of-imported/* page from a CampaignPage.
 * To restyle every campaign page, edit ONE file (this one).
 */
export function CampaignPageTemplate({
  page,
  back,
  hubLabel,
}: {
  page: CampaignPage;
  back: { href: string; label: string };
  hubLabel: string;
}) {
  const variant: "ocean" | "dark" | "default" =
    page.theme === "ocean" || page.theme === "navy" ? "ocean" : "default";

  return (
    <PageShell>
      <EntityHero
        eyebrow={`${hubLabel} · ${page.tagline}`}
        title={page.name}
        lede={page.summary}
        back={back}
        variant={variant}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: "0.8rem",
            padding: "1rem 1.4rem",
            background:
              variant === "ocean" ? "rgba(46,196,160,0.15)" : "rgba(30,158,128,0.08)",
            borderRadius: 6,
            marginTop: "1.5rem",
          }}
        >
          <strong
            style={{
              fontFamily: "var(--f-serif)",
              fontSize: "2.4rem",
              fontWeight: 800,
              color: variant === "ocean" ? "var(--teal-light)" : "var(--teal)",
              lineHeight: 1,
            }}
          >
            {page.heroStat.value}
          </strong>
          <span
            style={{
              fontSize: "0.95rem",
              maxWidth: 360,
              color: variant === "ocean" ? "rgba(255,255,255,0.85)" : "var(--text-mid)",
            }}
          >
            {page.heroStat.label}
          </span>
        </div>
      </EntityHero>

      <section className="entity-body">
        <div className="entity-body-inner">
          {page.sections.map((s, idx) => (
            <div key={idx} style={{ marginBottom: "2.5rem" }}>
              <h2>{s.heading}</h2>
              <p>{decodeEntities(s.body)}</p>
              {s.bullets && s.bullets.length > 0 && (
                <ul>
                  {s.bullets.map((b, i) => (
                    <li key={i}>{decodeEntities(b)}</li>
                  ))}
                </ul>
              )}
              {s.stat && (
                <div className="entity-stat-grid" style={{ gridTemplateColumns: "1fr" }}>
                  <div className="entity-stat">
                    <strong>{s.stat.value}</strong>
                    <span>{s.stat.label}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {page.citationIds && page.citationIds.length > 0 && (
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(10,37,64,0.12)",
              }}
            >
              <h3 style={{ fontSize: "1rem", marginBottom: "0.8rem" }}>Sources</h3>
              <ol style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--text-mid)" }}>
                {page.citationIds.map((id) => {
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
              <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginTop: "1rem" }}>
                <Link href="/research" style={{ color: "var(--teal)" }}>
                  See all citations on /research →
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {page.cta && (
        <div className="cta-banner">
          <h2>{page.cta.headline}</h2>
          <p>{page.cta.body}</p>
          <Link href={page.cta.href} className="btn-white">
            {page.cta.label}
          </Link>
        </div>
      )}
    </PageShell>
  );
}
