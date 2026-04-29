import { areas } from "@/data/areas";

/**
 * Parses economicValue.dollars (strings like "~$420M", "~$1.4B") into
 * an AUD-million number, sums per state, and renders as a horizontal
 * bar chart. Strings that don't parse cleanly are skipped.
 */
function parseDollars(s: string): number | null {
  const m = s.match(/(\d+(?:\.\d+)?)\s*([MB])/i);
  if (!m) return null;
  const v = parseFloat(m[1]);
  return m[2].toUpperCase() === "B" ? v * 1000 : v;
}

export function GVPByStateChart() {
  const stateMap: Record<string, number> = {};
  for (const a of areas) {
    if (a.type !== "region" || !a.economicValue?.dollars) continue;
    const m = parseDollars(a.economicValue.dollars);
    if (!m) continue;
    const code = a.state ?? a.parentState ?? "OTHER";
    stateMap[code] = (stateMap[code] ?? 0) + m;
  }
  const rows = Object.entries(stateMap)
    .map(([code, mil]) => ({ code, mil }))
    .sort((a, b) => b.mil - a.mil);

  if (rows.length === 0) return null;
  const max = Math.max(...rows.map((r) => r.mil));
  const barH = 28;
  const gap = 6;
  const labelW = 56;
  const valueW = 90;
  const w = 560;
  const h = rows.length * (barH + gap);

  const fmt = (mil: number) =>
    mil >= 1000 ? `$${(mil / 1000).toFixed(1)}B` : `$${Math.round(mil)}M`;

  return (
    <figure className="dashboard-figure">
      <figcaption className="dashboard-caption">
        <strong>Gross value of production by state (2023)</strong>
        <span>
          Aggregated from regional GVP estimates. Some figures are
          ABARES-derived estimates, not primary; treat as order of magnitude.
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height={h}
        role="img"
        aria-label="Bar chart of gross value of production by state"
      >
        {rows.map((r, i) => {
          const y = i * (barH + gap);
          const barW = ((w - labelW - valueW) * r.mil) / max;
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
                fill="var(--gold)"
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
                {fmt(r.mil)}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
