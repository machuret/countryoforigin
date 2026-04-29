import Link from "next/link";
import type { Industry } from "@/data/industries";

export function IndustryGrid({ items }: { items: Industry[] }) {
  return (
    <section className="env-section" id="industry">
      <div className="env-inner">
        <span className="section-tag">Industry</span>
        <h2 className="section-title">Five pillars of Australian seafood</h2>
        <p className="section-desc">
          Indigenous fishing, commercial fleets, aquaculture, processors, and tuna ranching —
          each with their own dedicated page.
        </p>
        <div className="env-grid">
          {items.map((i) => (
            <Link
              key={i.slug}
              href={`/industry/${i.slug}`}
              className="env-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {i.headlineStat && <span className="env-stat">{i.headlineStat.value}</span>}
              <h3>{i.name}</h3>
              <p>{i.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
