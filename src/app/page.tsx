import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SeafoodCompareTabs } from "@/components/SeafoodCompareTabs";
import { species } from "@/data/species";
import { industries } from "@/data/industries";
import { statesOnly, regionsOnly, areaUrl } from "@/data/areas";

export default function Home() {
  const featuredSpecies = species.slice(0, 6);
  const allAreas = [...statesOnly().slice(0, 4), ...regionsOnly().slice(0, 4)];

  return (
    <PageShell>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circles" />
        <div className="hero-content">
          <div>
            <div className="hero-tag">Australian Seafood Authority</div>
            <h1 className="hero-title">
              Know Where Your Fish <em>Comes From</em>
            </h1>
            <p className="hero-desc">
              Australia has some of the world&apos;s cleanest, most sustainably managed waters.
              Discover why choosing Australian seafood means choosing better nutrition, a healthier
              planet, and a stronger local economy.
            </p>
            <div className="hero-actions">
              <Link href="/compare" className="btn-primary">
                Compare Seafood
              </Link>
              <Link href="/species" className="btn-outline">
                Explore Species
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-card highlight">
              <div className="stat-num">
                $3<span>B</span>
              </div>
              <div className="stat-label">
                Annual contribution of seafood to the Australian economy
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                600<span>+</span>
              </div>
              <div className="stat-label">Edible marine species found in Australian waters</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                37<span>%</span>
              </div>
              <div className="stat-label">
                of Australians don&apos;t know where their seafood comes from
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                4<span>th</span>
              </div>
              <div className="stat-label">Largest exclusive economic zone in the world</div>
            </div>
          </div>
        </div>
        <div className="wave-container">
          <svg
            className="wave"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="#f5ead7"
            />
          </svg>
        </div>
      </section>

      {/* INTRO PILLARS */}
      <div className="intro-strip">
        <div className="intro-inner">
          <div className="intro-pillar">
            <span className="intro-icon">🐟</span>
            <h3>Nutritional Superiority</h3>
            <p>
              Australian seafood is harvested from pristine waters, resulting in higher omega-3
              levels, less mercury exposure, and superior freshness compared to imported alternatives.
            </p>
          </div>
          <div className="intro-pillar">
            <span className="intro-icon">🌊</span>
            <h3>Environmental Leadership</h3>
            <p>
              Australia enforces some of the world&apos;s strictest fisheries regulations, ensuring
              sustainable practices that protect marine ecosystems for future generations.
            </p>
          </div>
          <div className="intro-pillar">
            <span className="intro-icon">🦐</span>
            <h3>Economic Impact</h3>
            <p>
              Every dollar spent on Australian seafood directly supports coastal fishing communities,
              creates local jobs, and keeps money circulating in the Australian economy.
            </p>
          </div>
        </div>
      </div>

      {/* WHY AUSTRALIAN — campaign teaser */}
      <section className="env-section" style={{ background: "var(--navy)" }}>
        <div className="env-inner">
          <span className="section-tag" style={{ color: "var(--teal-light)" }}>
            Why it matters
          </span>
          <h2 className="section-title" style={{ color: "white" }}>
            Four pillars. Five risks. <em>One simple choice.</em>
          </h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.78)" }}>
            We make the case for Australian seafood across health, economy, environment, and
            taste — and document the risks of imported product across food fraud, antibiotics,
            forced labour, environmental destruction, and air-freight emissions. Every claim is
            sourced.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <Link
              href="/why-australian"
              className="env-card"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "rgba(46,196,160,0.1)",
                borderLeft: "4px solid var(--teal-light)",
              }}
            >
              <span className="env-stat" style={{ color: "var(--teal-light)" }}>
                4 reasons
              </span>
              <h3 style={{ color: "white" }}>Why Australian seafood</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Health · Economy · Environment · Taste — the case for choosing local.
              </p>
            </Link>
            <Link
              href="/risks-of-imported"
              className="env-card"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "rgba(231,111,81,0.12)",
                borderLeft: "4px solid var(--coral)",
              }}
            >
              <span className="env-stat" style={{ color: "var(--coral)" }}>
                5 risks
              </span>
              <h3 style={{ color: "white" }}>Risks of imported</h3>
              <p style={{ color: "rgba(255,255,255,0.78)" }}>
                Food fraud · Antibiotics · Forced labour · Environment · Transport.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARE WIDGET */}
      <section className="compare-section" id="compare">
        <div className="compare-inner">
          <div className="compare-header">
            <span className="section-tag">Interactive Comparison</span>
            <h2 className="section-title">Australian vs. Imported Seafood</h2>
            <p className="section-desc">
              Pick a species and see how it stacks up. Each comparison has its own dedicated page —{" "}
              <Link href="/compare" style={{ color: "var(--teal)", textDecoration: "underline" }}>
                browse all comparisons
              </Link>
              .
            </p>
          </div>
          <SeafoodCompareTabs />
        </div>
      </section>

      {/* FEATURED SPECIES */}
      <section id="seafood">
        <div className="section">
          <span className="section-tag">Australian Waters</span>
          <h2 className="section-title">Featured Australian Species</h2>
          <p className="section-desc">
            From the warm tropical waters of the north to the cool southern oceans — explore the
            species that come from Australian waters. Each has its own profile page.
          </p>
          <div className="seafood-grid">
            {featuredSpecies.map((s) => (
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

      {/* INDUSTRY OVERVIEW */}
      <section className="env-section" id="industry">
        <div className="env-inner">
          <span className="section-tag">Industry</span>
          <h2 className="section-title">Five pillars of Australian seafood</h2>
          <p className="section-desc">
            Indigenous fishing, commercial fleets, aquaculture, processors, and tuna ranching —
            each with their own dedicated page.
          </p>
          <div className="env-grid">
            {industries.map((i) => (
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

      {/* AREAS OVERVIEW */}
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
            {allAreas.map((a) => (
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

      {/* CTA */}
      <div className="cta-banner">
        <h2>Make the Switch to Australian Seafood</h2>
        <p>
          Compare what you&apos;re buying. Read the species profiles. Support coastal Australia.
        </p>
        <Link href="/compare" className="btn-white">
          Start Comparing
        </Link>
      </div>
    </PageShell>
  );
}
