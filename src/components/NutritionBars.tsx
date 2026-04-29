import type { NutBar } from "@/data/species";

/**
 * Stand-alone, server-rendered nutrition bars.
 * Pass it the bars array straight from a Species record.
 */
export function NutritionBars({ bars }: { bars: NutBar[] }) {
  return (
    <div className="nut-bars">
      {bars.map((n) => {
        const ausPct = Math.round((n.aus / n.max) * 100);
        const impPct = Math.round((n.imp / n.max) * 100);
        return (
          <div key={n.name}>
            <div className="nut-bar-label">
              <span>{n.name}</span>
              <span style={{ display: "flex", gap: "0.8rem" }}>
                <span style={{ color: "var(--teal)" }}>
                  {n.aus}
                  {n.unit}
                </span>
                <span style={{ color: "#aaa", fontWeight: 400 }}>
                  {n.imp}
                  {n.unit}
                </span>
              </span>
            </div>
            <div className="nut-bar-track">
              <div className="nut-bar-fill fill-aus" style={{ width: `${ausPct}%` }} />
            </div>
            <div className="nut-bar-track import-track" style={{ marginTop: 3 }}>
              <div
                className="nut-bar-fill"
                style={{ width: `${impPct}%`, background: "#ccc" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
