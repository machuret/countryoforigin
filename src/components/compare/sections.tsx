import type { CompareNumeric, CompareQualitative } from "@/data/comparisons";

/** Two horizontal bars representing AUS vs IMP numeric values */
export function VersusBar({
  ausValue,
  impValue,
  unit,
  ausGood,
  ausLabel = "AUS",
  impLabel = "Imported",
}: {
  ausValue: number;
  impValue: number;
  unit?: string;
  /** True when smaller is better for AUS (e.g. carbon, freshness days) */
  ausGood?: boolean;
  ausLabel?: string;
  impLabel?: string;
}) {
  const max = Math.max(ausValue, impValue) || 1;
  const ausPct = (ausValue / max) * 100;
  const impPct = (impValue / max) * 100;
  const ausCls = ausGood !== false ? "versus-fill versus-fill--aus" : "versus-fill versus-fill--neutral";
  const impCls = ausGood !== false ? "versus-fill versus-fill--imp" : "versus-fill versus-fill--neutral";
  return (
    <div style={{ marginTop: "0.5rem" }}>
      <Row label={ausLabel} value={ausValue} unit={unit} pct={ausPct} cls={ausCls} />
      <Row label={impLabel} value={impValue} unit={unit} pct={impPct} cls={impCls} />
    </div>
  );
}

function Row({
  label,
  value,
  unit,
  pct,
  cls,
}: {
  label: string;
  value: number;
  unit?: string;
  pct: number;
  cls: string;
}) {
  const unitShort = unit ? unit.split(" ")[0] : "";
  return (
    <div className="versus-row">
      <div className="versus-row__head">
        <strong>{label}</strong>
        <span>
          {value}
          {unitShort ? ` ${unitShort}` : ""}
        </span>
      </div>
      <div className="versus-track">
        <div
          className={cls}
          style={{ ["--versus-pct" as string]: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function NumericCompareCard({
  title,
  data,
  ausGood = true,
}: {
  title: string;
  data?: CompareNumeric;
  ausGood?: boolean;
}) {
  if (!data || data.ausValue == null || data.impValue == null) return null;
  return (
    <div className="deep-card">
      <h3>{title}</h3>
      <VersusBar
        ausValue={data.ausValue}
        impValue={data.impValue}
        unit={data.unit}
        ausGood={ausGood}
      />
      {data.unit && <p className="deep-muted">{data.unit}</p>}
      {data.note && <p className="deep-muted">{data.note}</p>}
    </div>
  );
}

export function QualitativeCompareCard({
  title,
  data,
}: {
  title: string;
  data?: CompareQualitative;
}) {
  if (!data || (!data.aus && !data.imp)) return null;
  return (
    <div className="deep-card">
      <h3>{title}</h3>
      {data.aus && (
        <p>
          <strong style={{ color: "var(--teal)" }}>Australia:</strong> {data.aus}
        </p>
      )}
      {data.imp && (
        <p>
          <strong style={{ color: "var(--danger)" }}>Imported:</strong> {data.imp}
        </p>
      )}
      {data.note && <p className="deep-muted">{data.note}</p>}
    </div>
  );
}

export function DeepCompareGrid({ children }: { children: React.ReactNode }) {
  return <div className="deep-grid-2">{children}</div>;
}

export function PriceContextBlock({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="deep-card deep-card--price">
      <strong>Why is the imported product cheaper?</strong>
      <p style={{ margin: "0.4rem 0 0" }}>{text}</p>
    </div>
  );
}

export function BottomLineBlock({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="deep-card deep-card--bottom">
      <strong>Bottom line</strong>
      <p style={{ margin: "0.4rem 0 0" }}>{text}</p>
    </div>
  );
}

export function MethodNote({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="deep-muted">
      <strong>Methodology:</strong> {text}
    </p>
  );
}
