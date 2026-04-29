import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { decodeEntities } from "@/lib/html-entities";
import { findAustralianPage as PAGE } from "@/data/content/conversion-pages";

export const metadata: Metadata = {
  title: "How to Find Australian Seafood — Country of Origin",
  description:
    "Practical guide for Australian shoppers and diners: how to ask the fishmonger, how to read a supermarket label, the apps to use, and 10 Aussie alternatives to common imports.",
};

const TH_STYLE: React.CSSProperties = {
  textAlign: "left",
  padding: "0.9rem 1rem",
  fontFamily: "var(--f-cond)",
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

function ConfidencePill({ value }: { value: string }) {
  const isHigh = value === "High";
  const isAvoid = value === "Avoid";
  const bg = isHigh
    ? "rgba(30,158,128,0.12)"
    : isAvoid
      ? "rgba(231,111,81,0.15)"
      : "rgba(245,158,11,0.15)";
  const fg = isHigh ? "var(--teal)" : isAvoid ? "var(--coral)" : "var(--gold)";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.25rem 0.7rem",
        borderRadius: 50,
        fontSize: "0.78rem",
        fontWeight: 600,
        background: bg,
        color: fg,
      }}
    >
      {value}
    </span>
  );
}

export default function FindAustralianPage() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">{PAGE.hero.eyebrow}</span>
          <h1 className="entity-title">
            {PAGE.hero.title} <em>{PAGE.hero.titleAccent}</em>
          </h1>
          <p className="entity-lede">{PAGE.hero.lede}</p>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>{PAGE.asking.title}</h2>
          <p>{PAGE.asking.body}</p>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
            {PAGE.asking.scripts.map((s) => (
              <div
                key={s.scenario}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "1.2rem 1.4rem",
                }}
              >
                <span className="index-card-eyebrow">{s.scenario}</span>
                <p
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    margin: "0.6rem 0",
                    fontStyle: "italic",
                  }}
                >
                  {decodeEntities(s.prompt)}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>
                  <strong style={{ color: "var(--teal)" }}>Why:</strong>{" "}
                  {decodeEntities(s.why)}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.reading.title}</h2>
          <p>{PAGE.reading.body}</p>
          <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ background: "var(--sand-light)" }}>
                  <th
                    style={{
                      ...TH_STYLE,
                      color: "var(--navy)",
                      borderBottom: "2px solid var(--border)",
                    }}
                  >
                    Label says
                  </th>
                  <th
                    style={{
                      ...TH_STYLE,
                      color: "var(--navy)",
                      borderBottom: "2px solid var(--border)",
                    }}
                  >
                    What it means
                  </th>
                  <th
                    style={{
                      ...TH_STYLE,
                      color: "var(--navy)",
                      borderBottom: "2px solid var(--border)",
                    }}
                  >
                    Australian-ness
                  </th>
                </tr>
              </thead>
              <tbody>
                {PAGE.reading.items.map((item, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td
                      style={{
                        padding: "0.9rem 1rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                      }}
                    >
                      {decodeEntities(item.signal)}
                    </td>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-mid)" }}>
                      {item.meaning}
                    </td>
                    <td style={{ padding: "0.9rem 1rem" }}>
                      <ConfidencePill value={item.confidence} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.apps.title}</h2>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
            {PAGE.apps.items.map((app) => {
              const isInternal = app.url.startsWith("/");
              const cardStyle: React.CSSProperties = {
                display: "block",
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "1.2rem 1.4rem",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
              };
              const inner = (
                <>
                  <strong
                    style={{
                      display: "block",
                      fontFamily: "var(--f-serif)",
                      fontSize: "1.05rem",
                      color: "var(--navy)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {app.name} {isInternal ? "→" : "↗"}
                  </strong>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-mid)",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {app.text}
                  </p>
                </>
              );
              return isInternal ? (
                <Link key={app.name} href={app.url} style={cardStyle}>
                  {inner}
                </Link>
              ) : (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={cardStyle}
                >
                  {inner}
                </a>
              );
            })}
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.swaps.title}</h2>
          <p>{PAGE.swaps.body}</p>
          <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ background: "rgba(231,111,81,0.06)" }}>
                  <th
                    style={{
                      ...TH_STYLE,
                      color: "var(--coral)",
                      borderBottom: "2px solid rgba(231,111,81,0.2)",
                    }}
                  >
                    Imported
                  </th>
                  <th
                    style={{
                      ...TH_STYLE,
                      color: "var(--teal)",
                      borderBottom: "2px solid rgba(30,158,128,0.2)",
                      background: "rgba(30,158,128,0.05)",
                    }}
                  >
                    Australian alternative
                  </th>
                </tr>
              </thead>
              <tbody>
                {PAGE.swaps.rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.9rem 1rem", color: "var(--text-mid)" }}>
                      {decodeEntities(r.imported)}
                    </td>
                    <td
                      style={{
                        padding: "0.9rem 1rem",
                        fontWeight: 600,
                        background: "rgba(30,158,128,0.05)",
                      }}
                    >
                      <Link href={r.link} style={{ color: "var(--teal)", textDecoration: "none" }}>
                        {r.australian} →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              background: "rgba(30,158,128,0.07)",
              borderLeft: "4px solid var(--teal)",
              padding: "1.6rem 2rem",
              borderRadius: 4,
              marginTop: "3rem",
            }}
          >
            <h2 style={{ marginTop: 0 }}>{PAGE.rule.title}</h2>
            <p>{PAGE.rule.body}</p>
            <Link href="/labelling" className="btn-primary">
              Read the labelling law →
            </Link>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Make every seafood meal Australian</h2>
        <p>
          25 species. 50+ fishing regions. Side-by-side comparisons. The full case for choosing
          local — backed by data.
        </p>
        <Link href="/why-australian" className="btn-white">
          Why Australian seafood
        </Link>
      </div>
    </PageShell>
  );
}
