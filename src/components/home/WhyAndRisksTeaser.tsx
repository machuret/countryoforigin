import Link from "next/link";

export function WhyAndRisksTeaser() {
  return (
    <section className="env-section" style={{ background: "var(--navy)" }}>
      <div className="env-inner">
        <span className="section-tag" style={{ color: "var(--teal-light)" }}>
          Why it matters
        </span>
        <h2 className="section-title" style={{ color: "white" }}>
          Four pillars. Five risks. <em>One simple choice.</em>
        </h2>
        <p className="section-desc" style={{ color: "rgba(255,255,255,0.78)" }}>
          We make the case for Australian seafood across health, economy, environment, and
          taste — and document the risks of imported product across food fraud, antibiotics,
          forced labour, environmental destruction, and air-freight emissions. Every claim is
          sourced.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <Link
            href="/why-australian"
            className="env-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "rgba(46,196,160,0.1)",
              borderLeft: "4px solid var(--teal-light)",
            }}
          >
            <span className="env-stat" style={{ color: "var(--teal-light)" }}>
              4 reasons
            </span>
            <h3 style={{ color: "white" }}>Why Australian seafood</h3>
            <p style={{ color: "rgba(255,255,255,0.78)" }}>
              Health · Economy · Environment · Taste — the case for choosing local.
            </p>
          </Link>
          <Link
            href="/risks-of-imported"
            className="env-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "rgba(231,111,81,0.12)",
              borderLeft: "4px solid var(--coral)",
            }}
          >
            <span className="env-stat" style={{ color: "var(--coral)" }}>
              5 risks
            </span>
            <h3 style={{ color: "white" }}>Risks of imported</h3>
            <p style={{ color: "rgba(255,255,255,0.78)" }}>
              Food fraud · Antibiotics · Forced labour · Environment · Transport.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
