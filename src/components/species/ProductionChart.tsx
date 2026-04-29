import type { ProductionYear } from "@/data/species";

export function ProductionChart({ data }: { data: ProductionYear[] }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.tonnes));
  const W = 560;
  const H = 180;
  const barW = W / data.length - 12;
  return (
    <div
      style={{
        background: "white",
        border: "1px solid rgba(10,37,64,0.1)",
        borderRadius: 8,
        padding: "1.4rem 1.6rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.8rem" }}>
        <strong
          style={{
            fontFamily: "var(--f-cond)",
            fontSize: "0.82rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--navy)",
          }}
        >
          Production volume (tonnes)
        </strong>
        <span style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>
          Source: ABARES
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="xMidYMid meet">
        {data.map((d, i) => {
          const barH = (d.tonnes / max) * (H - 40);
          const x = i * (barW + 12) + 6;
          const y = H - barH - 20;
          return (
            <g key={d.year}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={barH}
                rx={3}
                fill="var(--teal)"
                opacity={d.provenance === "primary" ? 0.9 : 0.55}
              />
              <text
                x={x + barW / 2}
                y={H - 4}
                textAnchor="middle"
                fontSize="11"
                fill="var(--text-mid)"
                fontFamily="var(--f-cond)"
              >
                {d.year}
              </text>
              <text
                x={x + barW / 2}
                y={y - 6}
                textAnchor="middle"
                fontSize="10"
                fill="var(--navy)"
                fontWeight="600"
              >
                {d.tonnes.toLocaleString()}
              </text>
            </g>
          );
        })}
      </svg>
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          marginTop: "0.5rem",
          fontSize: "0.72rem",
          color: "var(--text-light)",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
          <span style={{ width: 10, height: 10, background: "var(--teal)", opacity: 0.9, borderRadius: 2 }} /> primary
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
          <span style={{ width: 10, height: 10, background: "var(--teal)", opacity: 0.55, borderRadius: 2 }} /> estimate
        </span>
      </div>
    </div>
  );
}
