import type { SupplyChainStep } from "@/data/species";

export function SupplyChainTimeline({ steps }: { steps: SupplyChainStep[] }) {
  if (!steps || steps.length === 0) return null;
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexWrap: "wrap",
        gap: "0.6rem",
      }}
    >
      {steps.map((s, i) => {
        const isTotal = i === steps.length - 1;
        return (
          <li
            key={i}
            style={{
              flex: isTotal ? "1 1 100%" : "1 1 180px",
              background: isTotal ? "rgba(30,158,128,0.1)" : "white",
              border: `1px solid ${isTotal ? "var(--teal)" : "rgba(10,37,64,0.1)"}`,
              borderRadius: 6,
              padding: "0.9rem 1.1rem",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                color: isTotal ? "var(--teal)" : "var(--text-light)",
                fontFamily: "var(--f-cond)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "0.2rem",
              }}
            >
              {isTotal ? "Total" : `Step ${i + 1}`}
            </div>
            <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--navy)" }}>
              {s.step}
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: isTotal ? "var(--teal)" : "var(--text-mid)",
                marginTop: "0.2rem",
                fontWeight: isTotal ? 700 : 500,
              }}
            >
              {s.days} days
            </div>
          </li>
        );
      })}
    </ol>
  );
}
