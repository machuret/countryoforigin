"use client";

import { useState } from "react";
import { comparisons } from "@/data/comparisons";
import { CompareCard } from "./CompareCard";

/**
 * Interactive comparison tabs (used on the homepage).
 * Edit `comparisons` data to add new tabs — no UI changes required.
 */
export function SeafoodCompareTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const list = comparisons.slice(0, 8);
  const data = list[activeIdx];

  return (
    <>
      <div className="fish-selector">
        {list.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            className={`fish-chip${i === activeIdx ? " active" : ""}`}
            onClick={() => setActiveIdx(i)}
          >
            {c.name.split(' vs ')[0]}
          </button>
        ))}
      </div>
      <CompareCard data={data} />
    </>
  );
}
