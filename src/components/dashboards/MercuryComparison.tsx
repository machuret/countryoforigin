import { species } from "@/data/species";

/**
 * Per-species Australian vs imported mercury (mg/kg). Pulls from
 * species.mercury where available; sorted by AU value ascending so the
 * chart reads "best Australian outcomes first".
 */
export function MercuryComparisonChart() {
  const rows = species
    .filter((s) => s.mercury && s.mercury.aus != null && s.mercury.imp != null)
    .map((s) => ({
      name: s.name,
      slug: s.slug,
      aus: s.mercury!.aus,
      imp: s.mercury!.imp,
    }))
    .sort((a, b) => a.aus - b.aus)
    .slice(0, 8);

  if (rows.length === 0) return null;

  const max = Math.max(...rows.flatMap((r) => [r.aus, r.imp]));
  const rowH = 44;
  const barH = 14;
  const gap = 4;
  const labelW = 130;
  const w = 560;
  const h = rows.length * rowH;

  return (
    <figure className="dashboard-figure">
      <figcaption className="dashboard-caption">
        <strong>Mercury content: Australian vs imported (mg/kg)</strong>
        <span>
          Per-species comparison. Lower is better. Sourced from FSANZ Total Diet
          Study and per-species mercury citations.
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height={h}
        role="img"
        aria-label="Side-by-side bar chart of mercury content"
      >
        {rows.map((r, i) => {
          const y = i * rowH + 6;
          const ausW = ((w - labelW - 70) * r.aus) / max;
          const impW = ((w - labelW - 70) * r.imp) / max;
          return (
            <g key={r.slug}>
              <text
                x={0}
                y={y + barH + 2}
                fontSize="11"
                fontFamily="var(--f-sans)"
                fontWeight="600"
                fill="var(--navy)"
              >
                {r.name}
              </text>
              {/* AUS bar */}
              <rect
                x={labelW}
                y={y}
                width={Math.max(2, ausW)}
                height={barH}
                rx={2}
                fill="var(--teal)"
              />
              <text
                x={labelW + ausW + 4}
                y={y + barH - 2}
                fontSize="10"
                fill="var(--teal)"
                fontWeight="600"
              >
                {r.aus} AU
              </text>
              {/* IMP bar */}
              <rect
                x={labelW}
                y={y + barH + gap}
                width={Math.max(2, impW)}
                height={barH}
                rx={2}
                fill="var(--coral)"
              />
              <text
                x={labelW + impW + 4}
                y={y + barH * 2 + gap - 2}
                fontSize="10"
                fill="var(--coral)"
                fontWeight="600"
              >
                {r.imp} IMP
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
