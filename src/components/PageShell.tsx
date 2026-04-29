import Link from "next/link";

/**
 * Shared shell — every page (home, species, industry, areas, compare, labelling)
 * wraps its content in <PageShell>...</PageShell> for consistent nav + footer.
 *
 * To add/remove a top-level link, edit NAV_LINKS below — that's the single source
 * of truth for the global navigation.
 */
const NAV_LINKS = [
  { href: "/why-australian", label: "Why Australian" },
  { href: "/species", label: "Species" },
  { href: "/areas", label: "Areas" },
  { href: "/compare", label: "Compare" },
  { href: "/industry", label: "Industry" },
  { href: "/labelling", label: "Labelling" },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="nav">
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo">
            <div className="nav-logo-main">Country of Origin</div>
            <div className="nav-logo-sub">Australian Seafood Guide</div>
          </div>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/compare" className="nav-cta">
            Compare Now
          </Link>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div>
          <div className="footer-logo">Country of Origin</div>
          <div className="footer-tagline">Australian Seafood Guide</div>
          <p className="footer-desc">
            An independent resource helping Australians make informed seafood choices.
          </p>
        </div>
        <div className="footer-col">
          <h4>The case</h4>
          <ul>
            <li><Link href="/why-australian">Why Australian seafood</Link></li>
            <li><Link href="/risks-of-imported">Risks of imported</Link></li>
            <li><Link href="/research">Research &amp; citations</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/species">All species</Link></li>
            <li><Link href="/compare">Comparisons</Link></li>
            <li><Link href="/industry">Industry</Link></li>
            <li><Link href="/areas">States &amp; regions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Compliance</h4>
          <ul>
            <li><Link href="/labelling">Labelling Standard 2025</Link></li>
            <li>
              <a
                href="https://www.legislation.gov.au/F2025L00751/latest/text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the law
              </a>
            </li>
            <li>
              <a href="https://consumer.gov.au/" target="_blank" rel="noopener noreferrer">
                Australian Consumer Law
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="#">Data Sources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>
          © 2026 Country of Origin. All rights reserved. Data sourced from FSANZ, DAFF, and
          peer-reviewed research.
        </p>
        <div className="footer-badges">
          <span className="footer-badge">FSANZ Aligned</span>
          <span className="footer-badge">MSC Partner</span>
          <span className="footer-badge">AMSA Endorsed</span>
        </div>
      </div>
    </>
  );
}
