import type { Regulations } from "@/data/species";

export function RegulationsBlock({ reg }: { reg: Regulations }) {
  const pills: { label: string; value: string }[] = [];
  if (reg.quotaTonnes) pills.push({ label: "Quota", value: `${reg.quotaTonnes.toLocaleString()}t` });
  if (reg.bagLimit) pills.push({ label: "Bag limit", value: reg.bagLimit });
  if (reg.sizeLimit) pills.push({ label: "Size limit", value: reg.sizeLimit });

  return (
    <div>
      {pills.length > 0 && (
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
          {pills.map((p) => (
            <span
              key={p.label}
              style={{
                background: "rgba(30,158,128,0.1)",
                color: "var(--teal)",
                padding: "0.4rem 0.9rem",
                borderRadius: 50,
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              <span style={{ opacity: 0.7, marginRight: "0.4rem" }}>{p.label}:</span>
              {p.value}
            </span>
          ))}
        </div>
      )}
      {reg.note && (
        <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>{reg.note}</p>
      )}
    </div>
  );
}
