import Link from "next/link";
import type { Species } from "@/data/species";

export function FeaturedSpecies({ items }: { items: Species[] }) {
  return (
    <section id="seafood">
      <div className="section">
        <span className="section-tag">Australian Waters</span>
        <h2 className="section-title">Featured Australian Species</h2>
        <p className="section-desc">
          From the warm tropical waters of the north to the cool southern oceans — explore the
          species that come from Australian waters. Each has its own profile page.
        </p>
        <div className="seafood-grid">
          {items.map((s) => (
            <Link
              key={s.slug}
              href={`/species/${s.slug}`}
              className="seafood-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="seafood-img">
                <div className={`seafood-img-bg ${s.cls}`}>{s.emoji}</div>
                <span
                  className={`seafood-status ${
                    s.sourcing === "wild" ? "status-wild" : "status-farmed"
                  }`}
                >
                  {s.sourcing === "wild"
                    ? "Wild Caught"
                    : s.sourcing === "farmed"
                      ? "Aquaculture"
                      : "Wild & Farmed"}
                </span>
              </div>
              <div className="seafood-info">
                <h3>{s.name}</h3>
                <div className="seafood-origin">{s.tagline}</div>
                <div className="seafood-tags">
                  {s.tags.slice(0, 3).map((t, i) => (
                    <span
                      key={t}
                      className={`tag ${["tag-green", "tag-blue", "tag-gold"][i % 3]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/species" className="btn-primary">
            View all species →
          </Link>
        </div>
      </div>
    </section>
  );
}
