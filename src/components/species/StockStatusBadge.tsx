import type { StockStatus, StockRating } from "@/data/species";

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
