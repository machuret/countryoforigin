/**
 * Phase-B species-detail components. All are presentational — every
 * piece of data comes from the Species overlay in species-deep.ts.
 * If a species has no data for a given block, the parent should not
 * render that block at all (so nothing appears empty).
 */

import Link from "next/link";
import type {
  StockStatus,
  ProductionYear,
  GearMethod,
  MercuryData,
  AntibioticData,
  PriceRange,
  SupplyChainStep,
  LookAlike,
  Regulations,
  KeyOperator,
  HistoryEntry,
  MediaWatchEntry,
  StockRating,
} from "@/data/species";
import { ProvenanceBadge } from "@/components/Citation";

/* ============================= STOCK STATUS ============================= */

const RATING_COLOR: Record<StockRating, string> = {
  sustainable: "var(--teal)",
  "sustainable-rebuilding": "var(--teal)",
  depleting: "var(--gold)",
  overfished: "var(--coral)",
  recovering: "var(--gold)",
  undefined: "var(--text-light)",
};

const RATING_LABEL: Record<StockRating, string> = {
  sustainable: "Sustainable",
  "sustainable-rebuilding": "Rebuilding",
  depleting: "Depleting",
  overfished: "Overfished",
  recovering: "Recovering",
  undefined: "Not assessed",
};

export function StockStatusBadge({ status }: { status: StockStatus }) {
  const color = RATING_COLOR[status.rating];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        padding: "0.5rem 1rem",
        borderRadius: 50,
        background: `${color}1f`,
        color,
        fontSize: "0.88rem",
        fontWeight: 700,
      }}
      title={status.note}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 0 3px ${color}20`,
        }}
      />
      <span>{RATING_LABEL[status.rating]}</span>
      <span style={{ opacity: 0.6, fontWeight: 500 }}>· SAFS {status.year}</span>
    </div>
  );
}

/* ============================ PRODUCTION CHART ========================== */

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

/* ========================== MERCURY / ANTIBIOTICS ======================= */

export function ContaminantRow({
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

/* ========================== SUPPLY CHAIN TIMELINE ======================= */

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
            <div
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--navy)",
              }}
            >
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

/* ============================ LOOK-ALIKES ============================ */

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

/* ============================= REGULATIONS ============================= */

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

/* ============================ KEY OPERATORS ============================ */

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

/* =============================== HISTORY =============================== */

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

/* ============================== MEDIA WATCH ============================= */

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
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--text-light)",
                marginTop: "0.2rem",
              }}
            >
              {m.outlet} · {m.year} ↗
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ================================ GEAR ================================= */

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
