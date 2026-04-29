import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { decodeEntities } from "@/lib/html-entities";
import { operatorsPage as PAGE } from "@/data/content/conversion-pages";

export const metadata: Metadata = {
  title: "For Hospitality Operators — 1 July 2026 Labelling Compliance",
  description:
    "Restaurants, cafés, fish-and-chip shops, caterers, food trucks: from 1 July 2026 you must label seafood A (Australian), I (Imported), or M (Mixed). Here's the checklist.",
};

export default function OperatorsPage() {
  return (
    <PageShell>
      <header className="entity-hero entity-hero--ocean">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">{PAGE.hero.eyebrow}</span>
          <h1 className="entity-title">
            {PAGE.hero.title} <em>{PAGE.hero.titleAccent}</em>
          </h1>
          <p className="entity-lede">{PAGE.hero.lede}</p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="#checklist" className="btn-primary">
              Compliance checklist
            </Link>
            <Link href="/labelling" className="btn-outline btn-outline-dark">
              Read the law
            </Link>
          </div>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--text-mid)",
              marginBottom: "2rem",
            }}
          >
            {PAGE.countdown.text}
          </p>

          <h2 id="checklist">The 6-step compliance checklist</h2>
          <div className="how-grid">
            {PAGE.checklist.map((step) => (
              <div className="how-card" key={step.num}>
                <div className="how-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{decodeEntities(step.text)}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "3rem" }}>How to add A/I/M to your menu</h2>
          <p>{PAGE.menuExamples.intro}</p>
          <div style={{ display: "grid", gap: "1.2rem", marginTop: "1.5rem" }}>
            {PAGE.menuExamples.examples.map((ex) => (
              <div
                key={ex.style}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "1.4rem 1.6rem",
                }}
              >
                <span className="index-card-eyebrow">{ex.style}</span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    margin: "0.8rem 0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "0.85rem",
                      padding: "0.8rem 1rem",
                      background: "rgba(231,111,81,0.06)",
                      borderLeft: "3px solid var(--coral)",
                      borderRadius: 4,
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        color: "var(--coral)",
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Before
                    </strong>
                    {ex.before}
                  </div>
                  <div
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: "0.85rem",
                      padding: "0.8rem 1rem",
                      background: "rgba(30,158,128,0.07)",
                      borderLeft: "3px solid var(--teal)",
                      borderRadius: 4,
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        color: "var(--teal)",
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      After
                    </strong>
                    {ex.after}
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>
                  {ex.note}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "3rem" }}>{PAGE.whyItDrivesBookings.title}</h2>
          <p>{PAGE.whyItDrivesBookings.body}</p>
          <ul>
            {PAGE.whyItDrivesBookings.bullets.map((b, i) => (
              <li key={i}>{decodeEntities(b)}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: "3rem" }}>FAQ</h2>
          <div style={{ display: "grid", gap: "0.7rem", marginTop: "1rem" }}>
            {PAGE.faq.map((item, i) => (
              <details key={i} className="faq">
                <summary>{item.q}</summary>
                <p style={{ margin: "0.8rem 0 0" }}>{item.a}</p>
              </details>
            ))}
          </div>

          <h2 style={{ marginTop: "3rem" }}>Official resources</h2>
          <ul>
            {PAGE.links.map((l) => (
              <li key={l.href}>
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--teal)", fontWeight: 600 }}
                  >
                    {l.label} ↗
                  </a>
                ) : (
                  <Link href={l.href} style={{ color: "var(--teal)", fontWeight: 600 }}>
                    {l.label} →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Need a clean source list of Australian seafood?</h2>
        <p>
          We profile 25 Australian species across 50+ fishing regions — searchable by location,
          season, and supplier traceability.
        </p>
        <Link href="/species" className="btn-white">
          Browse Australian species
        </Link>
      </div>
    </PageShell>
  );
}
