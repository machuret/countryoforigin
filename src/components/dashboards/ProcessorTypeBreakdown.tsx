import { areas } from "@/data/areas";

/**
 * Counts processors across every area by type — a quick read on where
 * the production stack sits (co-ops vs processors vs exporters vs markets).
 */
const TYPE_LABEL: Record<string, string> = {
  coop: "Co-ops",
  processor: "Processors",
  exporter: "Exporters",
  market: "Fish markets",
  research: "Research",
};

const TYPE_COLOR: Record<string, string> = {
  coop: "var(--teal)",
  processor: "var(--navy)",
  exporter: "var(--gold)",
  market: "var(--coral)",
  research: "var(--text-light)",
};

export function ProcessorTypeBreakdown() {
  const counts: Record<string, number> = {};
  for (const a of areas) {
    if (!a.processors) continue;
    for (const p of a.processors) {
      counts[p.type] = (counts[p.type] ?? 0) + 1;
    }
  }
  const rows = Object.entries(counts)
    .map(([t, n]) => ({ t, n }))
    .sort((a, b) => b.n - a.n);

  if (rows.length === 0) return null;

  const total = rows.reduce((acc, r) => acc + r.n, 0);
  const max = rows[0].n;
  const barH = 22;
  const gap = 8;
  const labelW = 130;
  const valueW = 60;
  const w = 560;
  const h = rows.length * (barH + gap);

  return (
    <figure className="dashboard-figure">
      <figcaption className="dashboard-caption">
        <strong>The Australian seafood production stack</strong>
        <span>
          {total} verified producers, processors, co-ops and markets profiled
          across {areas.filter((a) => a.processors).length} areas.
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height={h}
        role="img"
        aria-label="Bar chart of producer types"
      >
        {rows.map((r, i) => {
          const y = i * (barH + gap);
          const barW = ((w - labelW - valueW) * r.n) / max;
          return (
            <g key={r.t}>
              <text
                x={0}
                y={y + barH / 2 + 4}
                fontSize="12"
                fontFamily="var(--f-sans)"
                fontWeight="600"
                fill="var(--navy)"
              >
                {TYPE_LABEL[r.t] ?? r.t}
              </text>
              <rect
                x={labelW}
                y={y}
                width={Math.max(2, barW)}
                height={barH}
                rx={3}
                fill={TYPE_COLOR[r.t] ?? "var(--text-light)"}
                opacity={0.85}
              />
              <text
                x={labelW + barW + 6}
                y={y + barH / 2 + 4}
                fontSize="11"
                fontFamily="var(--f-cond)"
                fontWeight="700"
                fill="var(--navy)"
              >
                {r.n}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
