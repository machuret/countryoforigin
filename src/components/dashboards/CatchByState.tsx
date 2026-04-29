import { areas } from "@/data/areas";

/**
 * Aggregates catchVolume.tonnes from every region with a parentState
 * up to the state level. Pure SVG, no client JS.
 */
export function CatchByStateChart() {
  const stateMap: Record<string, number> = {};
  for (const a of areas) {
    if (a.type !== "region" || !a.catchVolume?.tonnes) continue;
    const code = a.state ?? a.parentState ?? "OTHER";
    stateMap[code] = (stateMap[code] ?? 0) + a.catchVolume.tonnes;
  }
  const rows = Object.entries(stateMap)
    .map(([code, tonnes]) => ({ code, tonnes }))
    .sort((a, b) => b.tonnes - a.tonnes);

  if (rows.length === 0) return null;

  const max = Math.max(...rows.map((r) => r.tonnes));
  const barH = 28;
  const gap = 6;
  const labelW = 56;
  const valueW = 80;
  const w = 560;
  const h = rows.length * (barH + gap);

  return (
    <figure className="dashboard-figure">
      <figcaption className="dashboard-caption">
        <strong>Catch volume by state (2023)</strong>
        <span>
          Aggregated across {Object.keys(stateMap).length} states. Source: ABARES
          Australian Fisheries &amp; Aquaculture Statistics.
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height={h}
        role="img"
        aria-label="Bar chart of catch volume by Australian state"
      >
        {rows.map((r, i) => {
          const y = i * (barH + gap);
          const barW = ((w - labelW - valueW) * r.tonnes) / max;
          return (
            <g key={r.code}>
              <text
                x={0}
                y={y + barH / 2 + 4}
                fontSize="12"
                fontFamily="var(--f-cond)"
                fontWeight="700"
                fill="var(--navy)"
              >
                {r.code}
              </text>
              <rect
                x={labelW}
                y={y}
                width={Math.max(2, barW)}
                height={barH}
                rx={3}
                fill="var(--teal)"
                opacity={0.85}
              />
              <text
                x={labelW + barW + 6}
                y={y + barH / 2 + 4}
                fontSize="11"
                fontFamily="var(--f-sans)"
                fill="var(--navy)"
                fontWeight="600"
              >
                {r.tonnes.toLocaleString()} t
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
