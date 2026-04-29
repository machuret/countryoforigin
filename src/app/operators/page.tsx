import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "For Hospitality Operators — 1 July 2026 Labelling Compliance",
  description:
    "Restaurants, cafés, fish-and-chip shops, caterers, food trucks: from 1 July 2026 you must label seafood A (Australian), I (Imported), or M (Mixed). Here's the checklist.",
};

/* CONTENT — edit this object to update the page */
const PAGE = {
  hero: {
    eyebrow: "For hospitality operators",
    title: "1 July 2026: every menu must show",
    titleAccent: "A · I · M",
    lede: "From 1 July 2026, every restaurant, café, fish-and-chip shop, caterer, food truck, takeaway, pub, hotel, and delivery operator in Australia must clearly label seafood as Australian (A), Imported (I), or Mixed (M). Failing to comply — or labelling imported product as Australian — exposes your business to penalties under the Australian Consumer Law.",
  },

  countdown: {
    text: "Most operators have started auditing menus and suppliers. Here's what to do.",
  },

  checklist: [
    {
      num: "01",
      title: "Audit every seafood SKU on your menu",
      text: "List every dish that contains seafood. For each, identify the supplier, species, and country of catch / production. Get this in writing from your supplier.",
    },
    {
      num: "02",
      title: "Update menus, signage, and digital channels",
      text: "Add A, I, or M next to every seafood dish — printed menus, chalkboards, counter signage, your website, your QR code menu, and third-party delivery listings (UberEats, Menulog, DoorDash).",
    },
    {
      num: "03",
      title: "Train your front-of-house team",
      text: "Servers, counter staff, and managers need to confidently explain the codes if a customer asks. Build a one-page reference card and run a 10-minute briefing.",
    },
    {
      num: "04",
      title: "Document your supply chain",
      text: "Keep invoices, certificates of origin, and supplier specs on file. Regulators may request evidence — being able to back your label is the legal safe harbour.",
    },
    {
      num: "05",
      title: "Plan for supply changes",
      text: "If you swap suppliers seasonally (e.g. wild prawn season), your label may shift between A and M. Build a process for updating menus and printed materials whenever supply changes.",
    },
    {
      num: "06",
      title: "Use it as a marketing asset",
      text: "Operators with a strong &lsquo;A&rsquo; story consistently outperform on bookings. The new rule is also an invitation to tell your sourcing story — country, region, supplier, even the boat name.",
    },
  ],

  menuExamples: {
    intro:
      "Three concrete ways to add A/I/M to your menu without disrupting design. Pick one and apply it consistently.",
    examples: [
      {
        style: "Inline letter",
        before: "Battered Flathead & Chips        $24",
        after: "Battered Flathead (A) & Chips    $24",
        note: "Simplest — adds 3 characters per line. Add a small key at the bottom of the menu.",
      },
      {
        style: "Origin-led description",
        before: "Pan-fried fish of the day, lemon butter        $38",
        after:
          "Spencer Gulf King Prawns (A), pan-fried, lemon butter        $38",
        note: "Best for premium menus — turns the label into a marketing asset.",
      },
      {
        style: "Symbol or badge",
        before: "Salt & pepper squid       $22",
        after: "Salt & pepper calamari 🇦🇺       $22",
        note:
          "Visual flag works well on graphic menus. Pair with a footer key explaining the symbol.",
      },
    ],
  },

  whyItDrivesBookings: {
    title: "Why local sourcing drives revenue, not just compliance",
    body:
      "Independent surveys consistently find Australians prefer local seafood — and are willing to pay a premium when they can verify it. The 2026 standard isn&apos;t just a compliance burden: it&apos;s an industry-wide opportunity for operators who source local to stand out.",
    bullets: [
      "&ldquo;Australian&rdquo; on a menu drives a significant willingness-to-pay premium across price tiers",
      "Tourism diners explicitly seek out provenance — A on a menu is a discovery signal",
      "Local stories (boat name, region, family business) generate social-media coverage",
      "Diners are increasingly checking labels — &ldquo;Imported&rdquo; without context now reads as a red flag",
    ],
  },

  faq: [
    {
      q: "Does this apply to my business?",
      a: "If your business serves seafood for immediate consumption — eat in, takeaway, or delivery — yes. Restaurants, cafés, fish-and-chip shops, food trucks, caterers, hotels, pubs, clubs, sushi shops, and delivery operators are all covered.",
    },
    {
      q: "What if I don't sell seafood?",
      a: "If your menu has no seafood items, the standard doesn't apply to you. If you sell even one seafood dish (e.g. an occasional fish special), you'll need to label it from 1 July 2026.",
    },
    {
      q: "I sell pre-packaged seafood at retail. Am I covered?",
      a: "Pre-packaged seafood at supermarket-style retail is already covered by separate, existing country-of-origin food labelling rules. The 2026 standard targets seafood-for-immediate-consumption.",
    },
    {
      q: "What's the penalty for non-compliance?",
      a: "The standard is enforceable under the Australian Consumer Law. Failing to provide accurate information — or making misleading claims (e.g. labelling imported product as Australian) — can attract significant penalties under the ACL.",
    },
    {
      q: "Do I have to label species, or just origin?",
      a: "The standard requires origin (A/I/M). Species naming is governed by separate fish-naming rules (e.g. it's misleading to call basa &lsquo;flathead&rsquo;). Best practice is to name both — origin AND species.",
    },
    {
      q: "What about recipes that change supplier seasonally?",
      a: "Update the label whenever supply changes. M (Mixed) is a safe label when a single dish contains seafood from multiple countries.",
    },
  ],

  links: [
    {
      label: "Read the full Information Standard 2025",
      href: "https://www.legislation.gov.au/F2025L00751/latest/text",
      external: true,
    },
    {
      label: "Department of Industry — country-of-origin labelling policy",
      href: "https://www.industry.gov.au/trade/country-origin-labelling",
      external: true,
    },
    {
      label: "Australian Consumer Law overview",
      href: "https://consumer.gov.au/",
      external: true,
    },
    {
      label: "Country of Origin labelling explainer",
      href: "/labelling",
      external: false,
    },
  ],
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
                <p dangerouslySetInnerHTML={{ __html: step.text }} />
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
                  border: "1px solid rgba(10,37,64,0.1)",
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
                    <strong style={{ display: "block", color: "var(--coral)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.4rem" }}>
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
                    <strong style={{ display: "block", color: "var(--teal)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.4rem" }}>
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
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>

          <h2 style={{ marginTop: "3rem" }}>FAQ</h2>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            {PAGE.faq.map((item, i) => (
              <details
                key={i}
                style={{
                  background: "var(--sand-light)",
                  borderRadius: 6,
                  padding: "1rem 1.4rem",
                  borderLeft: "3px solid var(--teal)",
                }}
              >
                <summary
                  style={{
                    fontFamily: "var(--f-serif)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    cursor: "pointer",
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    marginTop: "0.8rem",
                    fontSize: "0.95rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.a}
                </p>
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
