import Link from "next/link";
import { NavBar, type NavItem, type NavGroup } from "./NavBar";
import { SearchPalette } from "./SearchPalette";
import { buildSearchIndex } from "@/lib/searchIndex";

/**
 * Shared shell — every page wraps its content in <PageShell>...</PageShell>
 * for consistent nav + footer. Source of truth for nav lives in
 * NAV_GROUPS and NAV_TOP below; the rendering is delegated to <NavBar>.
 */

const NAV_TOP: NavItem[] = [
  { href: "/why-australian", label: "Why Australian" },
  { href: "/compare", label: "Compare" },
  { href: "/find-australian", label: "Find Local" },
  { href: "/operators", label: "For Operators" },
];

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Explore",
    items: [
      { href: "/species", label: "Species", desc: "24 Australian species, deep-data profiles." },
      { href: "/areas", label: "States & regions", desc: "Where the seafood comes from." },
      { href: "/industry", label: "Industry", desc: "Wild-catch, aquaculture, processors." },
      { href: "/recipes", label: "Recipes", desc: "One hero recipe per species." },
      { href: "/seasonal", label: "Seasonal calendar", desc: "What's at peak each month." },
    ],
  },
  {
    label: "Learn",
    items: [
      { href: "/health", label: "Health", desc: "What seafood does for you, nutrient by nutrient." },
      { href: "/glossary", label: "Glossary", desc: "Every term defined." },
      { href: "/faq", label: "FAQ", desc: "Cited answers to common questions." },
      { href: "/myths", label: "Myths vs Facts", desc: "Common misconceptions corrected." },
      { href: "/label-guide", label: "Read a label", desc: "Decode origin claims." },
      { href: "/research", label: "Research", desc: "86-source citation library." },
    ],
  },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  const searchIndex = buildSearchIndex();
  return (
    <>
      <NavBar
        groups={NAV_GROUPS}
        top={NAV_TOP}
        search={<SearchPalette index={searchIndex} />}
      />

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
            <li><Link href="/find-australian">Find Australian (consumers)</Link></li>
            <li><Link href="/operators">For hospitality operators</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Learn</h4>
          <ul>
            <li><Link href="/glossary">Glossary</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/myths">Myths vs Facts</Link></li>
            <li><Link href="/label-guide">How to read a label</Link></li>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/seasonal">Seasonal calendar</Link></li>
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
            <li><Link href="/research">Data sources</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>
          © 2026 Country of Origin. Independent, non-commercial. Data drawn from FSANZ, DAFF,
          ABARES, FRDC, AFMA and peer-reviewed research — see{" "}
          <Link href="/research">Research</Link>.
        </p>
        <div className="footer-badges">
          <span className="footer-badge">86 cited sources</span>
          <span className="footer-badge">No advertising</span>
          <span className="footer-badge">No affiliate links</span>
        </div>
      </div>
    </>
  );
}
