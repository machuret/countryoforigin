import type { Comparison } from "@/data/comparisons";

/**
 * Renders one full Aus-vs-Imported comparison side-by-side.
 * Used by both the homepage compare widget and the dedicated /compare/[slug] pages.
 */
export function CompareCard({ data }: { data: Comparison }) {
  return (
    <div className="compare-grid">
      <div className="compare-card">
        <div className="compare-card-header aus">
          <div>
            <div className="card-country">{data.aus.country}</div>
            <div className="card-fish-name">{data.aus.name}</div>
            <div className="card-origin">{data.aus.origin}</div>
          </div>
          <span className="aus-badge">🇦🇺 Local</span>
        </div>
        <div className="compare-body">
          {data.metrics.map((m) => (
            <div className="compare-metric" key={m.label}>
              <span className="metric-label">{m.label}</span>
              <span className="metric-val good">{m.aus}</span>
            </div>
          ))}
        </div>
        <div className="compare-score">
          <span className="score-label">Overall rating: </span>
          {data.ausScore}
        </div>
      </div>

      <div className="compare-vs">
        <div className="vs-circle">vs</div>
      </div>

      <div className="compare-card">
        <div className="compare-card-header import">
          <div>
            <div className="card-country">{data.imp.country}</div>
            <div className="card-fish-name">{data.imp.name}</div>
            <div className="card-origin">{data.imp.origin}</div>
          </div>
        </div>
        <div className="compare-body">
          {data.metrics.map((m) => (
            <div className="compare-metric" key={m.label}>
              <span className="metric-label">{m.label}</span>
              <span className={`metric-val ${m.ausGood ? "bad" : "good"}`}>{m.imp}</span>
            </div>
          ))}
        </div>
        <div className="compare-score">
          <span className="score-label" style={{ color: "var(--coral)" }}>
            Overall rating:{" "}
          </span>
          {data.impScore}
        </div>
      </div>
    </div>
  );
}
