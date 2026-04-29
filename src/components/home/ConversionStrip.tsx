import Link from "next/link";

export function ConversionStrip() {
  return (
    <section className="env-section" style={{ background: "var(--sand-light)" }}>
      <div className="env-inner">
        <span className="section-tag">Take action</span>
        <h2 className="section-title">
          Whether you <em>serve seafood</em> or <em>eat it</em> —
        </h2>
        <p className="section-desc">
          Two practical guides — for hospitality operators preparing for the 1 July 2026 labelling
          standard, and for consumers who want to find Australian seafood every time.
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
            href="/operators"
            className="env-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "white",
              borderLeft: "4px solid var(--coral)",
            }}
          >
            <span className="env-stat" style={{ color: "var(--coral)" }}>
              1 July 2026
            </span>
            <h3>For hospitality operators</h3>
            <p>
              Restaurants, cafés, fish-and-chip shops, food trucks, caterers — everything you
              need to comply with the new A/I/M labelling rule (and turn it into a marketing
              asset).
            </p>
          </Link>
          <Link
            href="/find-australian"
            className="env-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              background: "white",
              borderLeft: "4px solid var(--teal)",
            }}
          >
            <span className="env-stat" style={{ color: "var(--teal)" }}>
              For consumers
            </span>
            <h3>How to find Australian seafood</h3>
            <p>
              Practical scripts, label-reading guidance, the apps to use, and 10 Aussie
              alternatives to common imported products.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
