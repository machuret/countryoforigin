"use client";

import { useState } from "react";
import { fishData, nutData, type FishKey } from "@/data/seafood";

const FISH_OPTIONS: { key: FishKey; emoji: string; label: string }[] = [
  { key: "barramundi", emoji: "🐟", label: "Barramundi" },
  { key: "salmon", emoji: "🐠", label: "Salmon" },
  { key: "prawns", emoji: "🦐", label: "Prawns" },
  { key: "tuna", emoji: "🐡", label: "Tuna" },
  { key: "oysters", emoji: "🦪", label: "Oysters" },
];

export function SeafoodCompare() {
  const [active, setActive] = useState<FishKey>("barramundi");
  const d = fishData[active];

  return (
    <>
      <div className="fish-selector">
        {FISH_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            type="button"
            className={`fish-chip${opt.key === active ? " active" : ""}`}
            onClick={() => setActive(opt.key)}
          >
            {opt.emoji} {opt.label}
          </button>
        ))}
      </div>

      <div className="compare-grid">
        <div className="compare-card">
          <div className="compare-card-header aus">
            <div>
              <div className="card-country">{d.aus.country}</div>
              <div className="card-fish-name">{d.aus.name}</div>
              <div className="card-origin">{d.aus.origin}</div>
            </div>
            <span className="aus-badge">🇦🇺 Local</span>
          </div>
          <div className="compare-body">
            {d.metrics.map((m) => (
              <div className="compare-metric" key={m.label}>
                <span className="metric-label">{m.label}</span>
                <span className="metric-val good">{m.aus}</span>
              </div>
            ))}
          </div>
          <div className="compare-score">
            <span className="score-label">Overall rating: </span>
            {d.ausScore}
          </div>
        </div>

        <div className="compare-vs">
          <div className="vs-circle">vs</div>
        </div>

        <div className="compare-card">
          <div className="compare-card-header import">
            <div>
              <div className="card-country">{d.imp.country}</div>
              <div className="card-fish-name">{d.imp.name}</div>
              <div className="card-origin">{d.imp.origin}</div>
            </div>
          </div>
          <div className="compare-body">
            {d.metrics.map((m) => (
              <div className="compare-metric" key={m.label}>
                <span className="metric-label">{m.label}</span>
                <span className={`metric-val ${m.ausGood ? "bad" : "good"}`}>{m.imp}</span>
              </div>
            ))}
          </div>
          <div className="compare-score">
            <span className="score-label" style={{ color: "var(--coral)" }}>
              Overall rating:{" "}
            </span>
            {d.impScore}
          </div>
        </div>
      </div>
    </>
  );
}

export function NutritionBars({ fish = "barramundi" as FishKey }: { fish?: FishKey }) {
  const data = nutData[fish] ?? nutData.barramundi;
  return (
    <div className="nut-bars">
      {data.map((n) => {
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
