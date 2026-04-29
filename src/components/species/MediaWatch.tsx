import type { MediaWatchEntry } from "@/data/species";

export function MediaWatch({ items }: { items: MediaWatchEntry[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem" }}>
      {items.map((m, i) => (
        <li
          key={i}
          style={{
            background: "white",
            border: "1px solid rgba(10,37,64,0.1)",
            borderRadius: 6,
            padding: "0.7rem 1rem",
          }}
        >
          <a
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--navy)", textDecoration: "none" }}
          >
            <strong>{m.headline}</strong>
            <div style={{ fontSize: "0.78rem", color: "var(--text-light)", marginTop: "0.2rem" }}>
              {m.outlet} · {m.year} ↗
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
