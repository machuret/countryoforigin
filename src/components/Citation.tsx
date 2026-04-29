import { citationById } from "@/data/citations";

/**
 * Inline citation superscript. Renders as a link to #cite-<id>.
 *
 * Usage:   <Citation id="safs-2024" />
 * Result:  small bracketed superscript that scrolls to the matching
 *          entry in a <CitationList> at the bottom of the page.
 *
 * If the id is unknown it renders a visible [?] warning (so regressions
 * are easy to spot in development).
 */
export function Citation({ id }: { id: string }) {
  const c = citationById(id);
  if (!c) {
    return (
      <sup
        style={{
          color: "var(--coral)",
          fontWeight: 700,
          fontSize: "0.75em",
          padding: "0 2px",
        }}
        title={`Unknown citation id: ${id}`}
      >
        [?]
      </sup>
    );
  }
  return (
    <sup style={{ fontSize: "0.72em", verticalAlign: "super" }}>
      <a
        href={`#cite-${id}`}
        style={{
          color: "var(--teal)",
          textDecoration: "none",
          fontWeight: 600,
          padding: "0 1px",
        }}
        title={`${c.title} — ${c.publisher}${c.year ? ` (${c.year})` : ""}`}
      >
        [{c.label}]
      </a>
    </sup>
  );
}

/**
 * Citation list — shown at the bottom of a long page to list every
 * cited source. Pass an array of citation ids; duplicates are de-duped.
 */
export function CitationList({ ids }: { ids: string[] }) {
  const unique = Array.from(new Set(ids));
  const rendered = unique
    .map((id) => citationById(id))
    .filter((c): c is NonNullable<ReturnType<typeof citationById>> => Boolean(c));

  if (rendered.length === 0) return null;

  return (
    <section
      style={{
        marginTop: "3rem",
        paddingTop: "2rem",
        borderTop: "1px solid rgba(10,37,64,0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Sources cited on this page</h2>
      <ol style={{ paddingLeft: "1.4rem", margin: 0 }}>
        {rendered.map((c) => (
          <li
            key={c.id}
            id={`cite-${c.id}`}
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.6,
              color: "var(--text-mid)",
              marginBottom: "0.6rem",
            }}
          >
            <a
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ color: "var(--teal)", fontWeight: 600, textDecoration: "none" }}
            >
              {c.title}
            </a>
            <span style={{ color: "var(--text-light)" }}>
              {" — "}
              {c.publisher}
              {c.year && `, ${c.year}`}
            </span>
            {c.tier !== "primary" && c.tier !== "secondary" && (
              <ProvenanceBadge tier={c.tier} inline />
            )}
            {c.notes && (
              <div
                style={{
                  fontSize: "0.78rem",
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
      </ol>
    </section>
  );
}

/**
 * Visible small pill showing data provenance for any number flagged
 * `estimate` or `editorial`. Sits inline with the value.
 *
 * Usage:   <DataProvenance tier="estimate" />
 *          <DataProvenance tier="editorial" />
 */
export function ProvenanceBadge({
  tier,
  inline = false,
}: {
  tier: "primary" | "secondary" | "estimate" | "editorial";
  inline?: boolean;
}) {
  const color =
    tier === "primary" ? "var(--teal)" : tier === "secondary" ? "var(--navy)" : tier === "estimate" ? "var(--gold)" : "var(--coral)";
  const label =
    tier === "primary" ? "primary" : tier === "secondary" ? "secondary" : tier === "estimate" ? "estimate" : "editorial";
  const tooltip =
    tier === "primary"
      ? "Government, peer-reviewed, or legislative source"
      : tier === "secondary"
        ? "Reputable NGO, industry body, or quality journalism"
        : tier === "estimate"
          ? "Industry estimate or derived from primary sources. See notes."
          : "Our own editorial analysis. See notes.";

  return (
    <span
      title={tooltip}
      style={{
        display: "inline-block",
        marginLeft: inline ? "0.4rem" : "0.5rem",
        padding: "0.1rem 0.5rem",
        background: `${color}1a`, // 10% opacity
        color,
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        borderRadius: 50,
        verticalAlign: "middle",
      }}
    >
      {label}
    </span>
  );
}

/**
 * Alias — same as ProvenanceBadge, different name for clarity at call sites
 * where we mark an individual data value (not a whole citation entry).
 */
export const DataProvenance = ProvenanceBadge;
