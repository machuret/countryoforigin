import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { citations } from "@/data/citations";

export const metadata: Metadata = {
  title: "Research & Citations — Country of Origin",
  description:
    "Every numerical claim made on this site is sourced. Browse our full citation library — government reports, peer-reviewed research, and major investigative journalism.",
};

export default function ResearchPage() {
  // Group by publisher for readability
  const grouped = citations.reduce<Record<string, typeof citations>>((acc, c) => {
    const key = c.publisher;
    (acc[key] ||= []).push(c);
    return acc;
  }, {});
  const publishers = Object.keys(grouped).sort();

  return (
    <PageShell>
      <header className="entity-hero entity-hero--default">
        <div className="entity-hero-inner">
          <span className="entity-eyebrow">Sources</span>
          <h1 className="entity-title">
            Research &amp; <em>Citations</em>
          </h1>
          <p className="entity-lede">
            Every numerical claim on this site is sourced. Below is the full library — primary
            government data, peer-reviewed research, and major investigative journalism. We update
            sources annually.
          </p>
        </div>
      </header>

      <section className="entity-body">
        <div className="entity-body-inner">
          {publishers.map((pub) => (
            <div key={pub} style={{ marginBottom: "2.5rem" }}>
              <h2>{pub}</h2>
              <ul>
                {grouped[pub].map((c) => (
                  <li key={c.id}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--teal)", textDecoration: "none", fontWeight: 600 }}
                    >
                      {c.title}
                    </a>
                    {c.year && (
                      <span style={{ color: "var(--text-light)" }}> &nbsp;({c.year})</span>
                    )}
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-light)",
                        marginTop: "0.2rem",
                      }}
                    >
                      Citation id: <code>{c.id}</code>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              background: "var(--sand-light)",
              borderRadius: 6,
            }}
          >
            <h3 style={{ fontFamily: "var(--f-serif)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              Found an outdated source?
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>
              Citations live in <code>src/data/citations.ts</code>. Update the URL or year there and
              every page that references the citation id automatically reflects the change.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
