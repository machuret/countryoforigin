import Link from "next/link";
import type { Area } from "@/data/areas";
import { areaUrl } from "@/data/areas";

export function AreasOverview({ items }: { items: Area[] }) {
  return (
    <section className="economy-section" id="areas">
      <div className="economy-inner">
        <span className="section-tag">Where it&apos;s from</span>
        <h2 className="section-title">States &amp; key fishing regions</h2>
        <p className="section-desc">
          Australian seafood is shaped by where it comes from. Browse a few key areas below, or{" "}
          <Link href="/areas" style={{ color: "var(--teal)", textDecoration: "underline" }}>
            see them all
          </Link>
          .
        </p>
        <div className="seafood-grid" style={{ marginTop: "2.5rem" }}>
          {items.map((a) => (
            <Link
              key={a.slug}
              href={areaUrl(a)}
              className="seafood-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="seafood-info">
                <span className="index-card-eyebrow">
                  {a.type === "state" ? `State · ${a.state}` : `Region · ${a.state}`}
                </span>
                <h3>{a.name}</h3>
                {a.tagline && <div className="seafood-origin">{a.tagline}</div>}
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                  {a.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
