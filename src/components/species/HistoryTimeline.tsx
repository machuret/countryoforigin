import type { HistoryEntry } from "@/data/species";

export function HistoryTimeline({ items }: { items: HistoryEntry[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        borderLeft: "2px solid rgba(30,158,128,0.3)",
        paddingLeft: "1.4rem",
      }}
    >
      {items.map((h, i) => (
        <li
          key={i}
          style={{
            position: "relative",
            paddingBottom: "1.1rem",
            marginBottom: "0.2rem",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "-1.95rem",
              top: 4,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "var(--teal)",
              boxShadow: "0 0 0 3px white",
            }}
          />
          <strong
            style={{
              fontFamily: "var(--f-cond)",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              color: "var(--teal)",
              display: "block",
            }}
          >
            {h.year}
          </strong>
          <div style={{ fontSize: "0.92rem", color: "var(--text-mid)", marginTop: "0.15rem" }}>
            {h.note}
          </div>
        </li>
      ))}
    </ol>
  );
}
