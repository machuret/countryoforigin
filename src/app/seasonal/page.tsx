import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { species } from "@/data/species";

export const metadata: Metadata = {
  title: "Seasonal Australian Seafood Calendar — Country of Origin",
  description:
    "12-month calendar of when Australian seafood is at its best. Pivoted from 25 species, peak/good/available status by month.",
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

type Status = "peak" | "good" | "available" | "off";

type MonthlySpecies = {
  slug: string;
  name: string;
  status: Status;
};

/**
 * Pivot all species' seasonality into a per-month list.
 * Includes only species that have at least one peak / good month
 * in their seasonality data.
 */
function buildCalendar(): { month: string; entries: MonthlySpecies[] }[] {
  return MONTHS.map((month) => {
    const entries: MonthlySpecies[] = species
      .map((s) => {
        const m = s.seasonality?.find((x) => x.month === month);
        if (!m) return null;
        return { slug: s.slug, name: s.name, status: m.status };
      })
      .filter((x): x is MonthlySpecies => x !== null);

    // Sort: peak → good → available → off
    const order: Record<Status, number> = { peak: 0, good: 1, available: 2, off: 3 };
    entries.sort((a, b) => order[a.status] - order[b.status] || a.name.localeCompare(b.name));

    return { month, entries };
  });
}

export default function SeasonalPage() {
  const cal = buildCalendar();
  const currentMonth = MONTHS[new Date().getMonth()];

  return (
    <PageShell>
      <header className="entity-hero entity-hero--ocean">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Seasonal calendar</span>
          <h1 className="entity-title">
            What&apos;s in <em>season now</em>
          </h1>
          <p className="entity-lede">
            Australian seafood, month by month. Peak when the species is at its absolute best;
            Good when quality is high but not peak; Available year-round; Off-season when the
            species is poor or unavailable.
          </p>
          <div style={{ marginTop: "1rem", fontSize: "0.95rem", color: "var(--text-light)" }}>
            Currently:{" "}
            <strong style={{ color: "var(--gold)" }}>{currentMonth}</strong> — see below.
          </div>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          <p>
            Seasonality data is sourced from each species page. Click any species to see its
            full profile — including signature regions, sourcing, nutrition, cooking notes, and
            a comparison to imported product.
          </p>

          <div style={{ display: "grid", gap: "1.5rem", marginTop: "2.5rem" }}>
            {cal.map(({ month, entries }) => {
              const peak = entries.filter((e) => e.status === "peak");
              const good = entries.filter((e) => e.status === "good");
              const isCurrent = month === currentMonth;

              return (
                <div
                  key={month}
                  id={month.toLowerCase()}
                  style={{
                    background: isCurrent ? "rgba(245,158,11,0.06)" : "white",
                    border: `1px solid ${isCurrent ? "var(--gold)" : "rgba(10,37,64,0.1)"}`,
                    borderRadius: 8,
                    padding: "1.5rem 1.8rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "1rem",
                      marginBottom: "1rem",
                      paddingBottom: "0.8rem",
                      borderBottom: "1px solid rgba(10,37,64,0.08)",
                    }}
                  >
                    <h2
                      style={{
                        margin: 0,
                        fontSize: "1.5rem",
                        color: isCurrent ? "var(--gold)" : "var(--navy)",
                      }}
                    >
                      {month}
                    </h2>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>
                      {peak.length} peak · {good.length} good
                    </span>
                    {isCurrent && (
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: "0.7rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: "var(--gold)",
                        }}
                      >
                        Now
                      </span>
                    )}
                  </div>

                  {peak.length > 0 && (
                    <div style={{ marginBottom: "0.8rem" }}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--teal)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Peak
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {peak.map((e) => (
                          <Link
                            key={e.slug}
                            href={`/species/${e.slug}`}
                            style={{
                              display: "inline-block",
                              background: "var(--teal)",
                              color: "white",
                              padding: "0.4rem 0.9rem",
                              borderRadius: 50,
                              fontSize: "0.82rem",
                              fontWeight: 600,
                              textDecoration: "none",
                            }}
                          >
                            {e.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {good.length > 0 && (
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--text-mid)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Good
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {good.map((e) => (
                          <Link
                            key={e.slug}
                            href={`/species/${e.slug}`}
                            style={{
                              display: "inline-block",
                              background: "rgba(46,196,160,0.18)",
                              color: "var(--navy)",
                              padding: "0.4rem 0.9rem",
                              borderRadius: 50,
                              fontSize: "0.82rem",
                              fontWeight: 600,
                              textDecoration: "none",
                            }}
                          >
                            {e.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {peak.length === 0 && good.length === 0 && (
                    <p style={{ fontSize: "0.9rem", color: "var(--text-light)", margin: 0 }}>
                      Nothing flagged peak or good for this month — see year-round species at{" "}
                      <Link href="/species" style={{ color: "var(--teal)" }}>
                        /species
                      </Link>
                      .
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--sand-light)", borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>How to read this calendar</h3>
            <ul style={{ marginBottom: 0 }}>
              <li>
                <strong style={{ color: "var(--teal)" }}>Peak</strong> — the species is at its
                absolute best. Premium price, premium quality, prioritise it.
              </li>
              <li>
                <strong>Good</strong> — quality is reliably high. Buy with confidence.
              </li>
              <li>
                Many farmed species (salmon, mussels, kingfish, oysters) are{" "}
                <strong>available year-round</strong> with quality peaks in cooler months.
              </li>
              <li>
                Wild-caught species track tighter seasons driven by spawning, water temperature,
                and migration.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Cook what&apos;s in season</h2>
        <p>24 hero recipes — one for every species on this calendar.</p>
        <Link href="/recipes" className="btn-white">
          Browse recipes
        </Link>
      </div>
    </PageShell>
  );
}
