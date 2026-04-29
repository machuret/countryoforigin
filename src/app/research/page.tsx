"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ProvenanceBadge } from "@/components/Citation";
import {
  citations,
  CITATION_DOMAINS,
  TIER_LABELS,
  type CitationDomain,
  type CitationTier,
} from "@/data/citations";

type DomainFilter = CitationDomain | "all";
type TierFilter = CitationTier | "all";

export default function ResearchPage() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<DomainFilter>("all");
  const [tier, setTier] = useState<TierFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return citations.filter((c) => {
      if (domain !== "all" && c.domain !== domain) return false;
      if (tier !== "all" && c.tier !== tier) return false;
      if (q) {
        const hay = [c.title, c.publisher, c.label, c.id, c.notes ?? ""].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, domain, tier]);

  // Group filtered by domain for organised display
  const grouped = useMemo(() => {
    const map: Record<string, typeof citations> = {};
    filtered.forEach((c) => {
      (map[c.domain] ||= []).push(c);
    });
    return map;
  }, [filtered]);

  const tierCounts = useMemo(() => {
    const c: Record<string, number> = { all: citations.length };
    citations.forEach((x) => {
      c[x.tier] = (c[x.tier] ?? 0) + 1;
    });
    return c;
  }, []);

  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Sources</span>
          <h1 className="entity-title">
            Research &amp; <em>Citations</em>
          </h1>
          <p className="entity-lede">
            Every numerical claim on this site cites a source below. The library is tier-tagged
            — primary government / peer-reviewed sources sit alongside secondary NGO reports,
            labelled estimates, and our own editorial analysis. Filter by domain, tier, or search
            freely.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "1.5rem",
              fontSize: "0.9rem",
              color: "var(--text-light)",
              flexWrap: "wrap",
            }}
          >
            <span>
              <strong style={{ color: "var(--teal)" }}>{tierCounts.primary ?? 0}</strong> primary
            </span>
            <span>
              <strong style={{ color: "var(--navy)" }}>{tierCounts.secondary ?? 0}</strong>{" "}
              secondary
            </span>
            <span>
              <strong style={{ color: "var(--gold)" }}>{tierCounts.estimate ?? 0}</strong> estimate
            </span>
            <span>
              <strong style={{ color: "var(--coral)" }}>{tierCounts.editorial ?? 0}</strong>{" "}
              editorial
            </span>
            <span style={{ marginLeft: "auto", fontWeight: 600 }}>
              {citations.length} total sources
            </span>
          </div>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          {/* FILTER BAR */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "1fr 1fr 2fr",
              marginBottom: "2rem",
              padding: "1rem 1.2rem",
              background: "var(--sand-light)",
              borderRadius: 6,
              border: "1px solid rgba(10,37,64,0.1)",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-light)",
                  marginBottom: "0.3rem",
                }}
              >
                Domain
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value as DomainFilter)}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.7rem",
                  borderRadius: 4,
                  border: "1px solid rgba(10,37,64,0.15)",
                  background: "white",
                  fontSize: "0.9rem",
                }}
              >
                <option value="all">All domains</option>
                {CITATION_DOMAINS.map((d) => (
                  <option key={d.key} value={d.key}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-light)",
                  marginBottom: "0.3rem",
                }}
              >
                Tier
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value as TierFilter)}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.7rem",
                  borderRadius: 4,
                  border: "1px solid rgba(10,37,64,0.15)",
                  background: "white",
                  fontSize: "0.9rem",
                }}
              >
                <option value="all">All tiers</option>
                {(Object.keys(TIER_LABELS) as CitationTier[]).map((k) => (
                  <option key={k} value={k}>
                    {TIER_LABELS[k]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-light)",
                  marginBottom: "0.3rem",
                }}
              >
                Search
              </label>
              <input
                type="search"
                value={query}
                placeholder="e.g. mercury, FSANZ, labour…"
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.55rem 0.7rem",
                  borderRadius: 4,
                  border: "1px solid rgba(10,37,64,0.15)",
                  background: "white",
                  fontSize: "0.9rem",
                }}
              />
            </div>
          </div>

          <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
            Showing <strong>{filtered.length}</strong> of {citations.length} sources
          </p>

          {filtered.length === 0 && (
            <div
              style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                background: "var(--cream)",
                border: "1px dashed var(--border)",
                borderRadius: 8,
                marginTop: "1rem",
              }}
            >
              <p style={{ marginBottom: "1rem", fontSize: "1rem" }}>
                No sources match these filters.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setQuery("");
                  setDomain("all");
                  setTier("all");
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          {CITATION_DOMAINS.filter((d) => grouped[d.key]?.length).map((d) => (
            <div key={d.key} style={{ marginTop: "2.2rem" }}>
              <h2>{d.label}</h2>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {grouped[d.key].map((c) => (
                  <li
                    key={c.id}
                    style={{
                      padding: "0.9rem 0",
                      borderBottom: "1px solid rgba(10,37,64,0.06)",
                    }}
                  >
                    <a
                      href={c.url}
                      target={c.url.startsWith("http") ? "_blank" : undefined}
                      rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        color: "var(--teal)",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      {c.title}
                    </a>
                    <ProvenanceBadge tier={c.tier} inline />
                    {c.year && (
                      <span style={{ color: "var(--text-light)", marginLeft: "0.4rem" }}>
                        ({c.year})
                      </span>
                    )}
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-mid)",
                        marginTop: "0.3rem",
                      }}
                    >
                      {c.publisher}
                      {" · "}
                      <code
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--text-light)",
                          background: "rgba(10,37,64,0.05)",
                          padding: "0.05rem 0.4rem",
                          borderRadius: 3,
                        }}
                      >
                        id: {c.id}
                      </code>
                    </div>
                    {c.notes && (
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-light)",
                          fontStyle: "italic",
                          marginTop: "0.3rem",
                        }}
                      >
                        {c.notes}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: "rgba(30,158,128,0.07)",
              borderLeft: "3px solid var(--teal)",
              borderRadius: 4,
            }}
          >
            <h3 style={{ fontFamily: "var(--f-serif)", fontSize: "1.1rem", margin: "0 0 0.5rem 0" }}>
              How we handle data quality
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", lineHeight: 1.65 }}>
              Where authoritative numbers exist we use them and mark them{" "}
              <strong style={{ color: "var(--teal)" }}>primary</strong>. Where reputable NGOs or
              industry bodies are the best available source we mark those{" "}
              <strong style={{ color: "var(--navy)" }}>secondary</strong>. Where we synthesise a
              number (e.g. a 5-year price trend) we mark it{" "}
              <strong style={{ color: "var(--gold)" }}>estimate</strong>. Where the text is our own
              interpretation — e.g. "the genuine article" or "premium" — we mark it{" "}
              <strong style={{ color: "var(--coral)" }}>editorial</strong>. You'll see these badges
              on data values throughout the site.
            </p>
            <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", lineHeight: 1.65, marginTop: "0.8rem" }}>
              To update a source, edit <code>src/data/citations.ts</code> — every page that
              references the citation id reflects the change on next build. Found a gap or an
              outdated source?{" "}
              <Link href="/" style={{ color: "var(--teal)", fontWeight: 600 }}>
                Let us know.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
