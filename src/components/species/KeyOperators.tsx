import type { KeyOperator } from "@/data/species";

const OP_LABEL: Record<string, string> = {
  coop: "Co-op",
  "peak-body": "Peak body",
  processor: "Processor",
  farm: "Farm",
  retailer: "Retailer",
  research: "Research",
  market: "Market",
};

const OP_COLOR: Record<string, string> = {
  coop: "var(--teal)",
  "peak-body": "var(--navy)",
  processor: "var(--gold)",
  farm: "var(--teal)",
  retailer: "var(--coral)",
  research: "var(--navy)",
  market: "var(--gold)",
};

export function KeyOperators({ items }: { items: KeyOperator[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.6rem" }}>
      {items.map((op, i) => {
        const content = (
          <>
            <span
              style={{
                display: "inline-block",
                padding: "0.15rem 0.55rem",
                borderRadius: 50,
                background: `${OP_COLOR[op.type]}1a`,
                color: OP_COLOR[op.type],
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginRight: "0.6rem",
              }}
            >
              {OP_LABEL[op.type]}
            </span>
            <strong style={{ color: "var(--navy)" }}>{op.name}</strong>
            {op.region && (
              <span style={{ color: "var(--text-light)", marginLeft: "0.5rem", fontSize: "0.85rem" }}>
                · {op.region}
              </span>
            )}
            {op.url && " ↗"}
          </>
        );
        return (
          <li
            key={i}
            style={{
              background: "white",
              border: "1px solid rgba(10,37,64,0.1)",
              borderRadius: 6,
              padding: "0.7rem 1rem",
              fontSize: "0.92rem",
            }}
          >
            {op.url ? (
              <a
                href={op.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
