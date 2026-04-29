import type { LookAlike } from "@/data/species";

export function LookAlikesTable({ items }: { items: LookAlike[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      {items.map((l, i) => (
        <div
          key={i}
          style={{
            background: "white",
            border: "1px solid rgba(10,37,64,0.1)",
            borderRadius: 6,
            padding: "1.1rem 1.3rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--f-serif)",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--navy)",
              marginBottom: "0.4rem",
            }}
          >
            {l.name}
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--text-mid)", marginBottom: "0.3rem" }}>
            <strong style={{ color: "var(--coral)" }}>Why confused: </strong>
            {l.whyConfused}
          </div>
          <div style={{ fontSize: "0.88rem", color: "var(--text-mid)" }}>
            <strong style={{ color: "var(--teal)" }}>How to tell: </strong>
            {l.howToTell}
          </div>
        </div>
      ))}
    </div>
  );
}
