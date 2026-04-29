import type { GearMethod } from "@/data/species";

export function GearList({ items }: { items: GearMethod[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem" }}>
      {items.map((g, i) => (
        <li
          key={i}
          style={{
            fontSize: "0.9rem",
            color: "var(--text-mid)",
            padding: "0.6rem 1rem",
            background: "var(--sand-light)",
            borderLeft: "3px solid var(--teal)",
            borderRadius: 4,
          }}
        >
          <strong style={{ color: "var(--navy)" }}>{g.method}</strong>
          {g.note && <span style={{ color: "var(--text-light)" }}> — {g.note}</span>}
        </li>
      ))}
    </ul>
  );
}
