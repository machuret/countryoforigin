import type { MercuryData, AntibioticData, PriceRange } from "@/data/species";
import { ProvenanceBadge } from "@/components/Citation";

function ContaminantRow({
  label,
  ausLabel,
  impLabel,
  tooltip,
  provenance,
}: {
  label: string;
  ausLabel: string;
  impLabel: string;
  tooltip?: string;
  provenance?: "primary" | "estimate" | "editorial";
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr 1fr",
        padding: "0.8rem 1rem",
        borderBottom: "1px solid rgba(10,37,64,0.06)",
        alignItems: "center",
      }}
      title={tooltip}
    >
      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--navy)" }}>
        {label}
        {provenance && provenance !== "primary" && (
          <ProvenanceBadge tier={provenance} inline />
        )}
      </div>
      <div style={{ fontSize: "0.88rem", color: "var(--teal)", fontWeight: 600 }}>{ausLabel}</div>
      <div style={{ fontSize: "0.88rem", color: "var(--coral)", fontWeight: 600 }}>{impLabel}</div>
    </div>
  );
}

export function ContaminantsTable({
  mercury,
  antibiotics,
  price,
}: {
  mercury?: MercuryData;
  antibiotics?: AntibioticData;
  price?: PriceRange;
}) {
  if (!mercury && !antibiotics && !price) return null;
  return (
    <div
      style={{
        background: "white",
        border: "1px solid rgba(10,37,64,0.1)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          padding: "0.7rem 1rem",
          background: "var(--sand-light)",
          fontSize: "0.72rem",
          fontFamily: "var(--f-cond)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--text-light)",
        }}
      >
        <div>Metric</div>
        <div style={{ color: "var(--teal)" }}>Australian</div>
        <div style={{ color: "var(--coral)" }}>Imported</div>
      </div>
      {mercury && (
        <ContaminantRow
          label={`Mercury (${mercury.unit ?? "mg/kg"})`}
          ausLabel={String(mercury.aus)}
          impLabel={String(mercury.imp)}
          tooltip={mercury.note}
          provenance={mercury.provenance}
        />
      )}
      {antibiotics && (
        <ContaminantRow
          label="Antibiotic residues"
          ausLabel={antibiotics.aus}
          impLabel={antibiotics.imp}
          tooltip={antibiotics.note}
          provenance={antibiotics.provenance}
        />
      )}
      {price && (
        <ContaminantRow
          label={`Typical retail price (${price.asOf})`}
          ausLabel={`$${price.ausLow}–${price.ausHigh}/kg`}
          impLabel={price.impLow === 0 && price.impHigh === 0 ? "n/a" : `$${price.impLow}–${price.impHigh}/kg`}
          provenance={price.provenance}
        />
      )}
    </div>
  );
}
