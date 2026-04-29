import { species } from "@/data/species";
import type { StockRating } from "@/data/species";

const RATING_LABEL: Record<StockRating, string> = {
  sustainable: "Sustainable",
  "sustainable-rebuilding": "Rebuilding",
  depleting: "Depleting",
  overfished: "Overfished",
  recovering: "Recovering",
  undefined: "Not assessed",
};

const RATING_COLOR: Record<StockRating, string> = {
  sustainable: "var(--teal)",
  "sustainable-rebuilding": "var(--teal-light)",
  depleting: "var(--gold)",
  overfished: "var(--coral)",
  recovering: "var(--gold)",
  undefined: "var(--text-light)",
};

/**
 * Donut chart of every Species's stockStatus.rating. Live count from
 * src/data/species — re-renders automatically as new ratings are added.
 */
export function StockStatusBreakdown() {
  const counts: Partial<Record<StockRating, number>> = {};
  for (const s of species) {
    const r = s.stockStatus?.rating;
    if (!r) continue;
    counts[r] = (counts[r] ?? 0) + 1;
  }
  const entries = Object.entries(counts) as [StockRating, number][];
  if (entries.length === 0) return null;

  const total = entries.reduce((acc, [, n]) => acc + n, 0);
  const cx = 110;
  const cy = 110;
  const r = 80;
  const inner = 50;
  const TAU = Math.PI * 2;

  let acc = 0;
  const arcs = entries.map(([rating, n]) => {
    const start = (acc / total) * TAU - Math.PI / 2;
    acc += n;
    const end = (acc / total) * TAU - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    const x3 = cx + inner * Math.cos(end);
    const y3 = cy + inner * Math.sin(end);
    const x4 = cx + inner * Math.cos(start);
    const y4 = cy + inner * Math.sin(start);
    const d = [
      `M ${x1} ${y1}`,
      `A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`,
      `L ${x3} ${y3}`,
      `A ${inner} ${inner} 0 ${large} 0 ${x4} ${y4}`,
      "Z",
    ].join(" ");
    return { rating, n, d };
  });

  return (
    <figure className="dashboard-figure">
      <figcaption className="dashboard-caption">
        <strong>Stock status of profiled species</strong>
        <span>
          {total} species rated by Status of Australian Fish Stocks (SAFS).
          Species without a SAFS rating are excluded.
        </span>
      </figcaption>
      <div className="dashboard-donut">
        <svg
          viewBox="0 0 220 220"
          width="220"
          height="220"
          role="img"
          aria-label="Donut chart of species stock status"
        >
          {arcs.map((a) => (
            <path key={a.rating} d={a.d} fill={RATING_COLOR[a.rating]} />
          ))}
          <text
            x="110"
            y="110"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="var(--f-serif)"
            fontSize="32"
            fontWeight="700"
            fill="var(--navy)"
          >
            {total}
          </text>
          <text
            x="110"
            y="135"
            textAnchor="middle"
            fontFamily="var(--f-cond)"
            fontSize="10"
            letterSpacing="2"
            fill="var(--text-light)"
          >
            SPECIES
          </text>
        </svg>
        <ul className="dashboard-legend">
          {entries.map(([rating, n]) => (
            <li key={rating}>
              <span
                className="dashboard-legend__dot"
                style={{ background: RATING_COLOR[rating] }}
              />
              {RATING_LABEL[rating]}{" "}
              <strong>
                {n} ({Math.round((n / total) * 100)}%)
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
