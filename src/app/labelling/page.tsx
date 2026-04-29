import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Country of Origin Labelling for Seafood — Information Standard 2025",
  description:
    "From 1 July 2026, businesses serving seafood for immediate consumption in Australia must label it Australian (A), imported (I), or mixed origin (M). Here's what the rules say and what you need to do.",
};

export default function LabellingPage() {
  return (
    <>
      {/* NAV (simple, links back home) */}
      <nav className="nav">
        <div className="nav-logo">
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className="nav-logo-main">Country of Origin</div>
            <div className="nav-logo-sub">Australian Seafood Guide</div>
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/#compare">Compare</Link>
          <Link href="/#seafood">Our Seafood</Link>
          <Link href="/#nutrition">Nutrition</Link>
          <Link href="/#economy">Economy</Link>
          <Link href="/labelling" className="nav-cta">
            Labelling Rules
          </Link>
        </div>
      </nav>

      <header className="legal-hero">
        <div className="legal-hero-inner">
          <span className="legal-eyebrow">Information Standard 2025 · Effective 1 July 2026</span>
          <h1 className="legal-title">
            Country of Origin Labelling <em>for Seafood</em>
          </h1>
          <p className="legal-lede">
            From <strong>1 July 2026</strong>, every business in Australia that serves seafood for
            immediate consumption — restaurants, cafés, fish &amp; chip shops, pubs, food trucks,
            caterers, takeaway, delivery — must clearly tell customers whether the seafood is{" "}
            <strong>Australian (A)</strong>, <strong>imported (I)</strong>, or{" "}
            <strong>mixed origin (M)</strong>.
          </p>
          <div className="legal-actions">
            <a
              href="https://www.legislation.gov.au/F2025L00751/latest/text"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read the Standard
            </a>
            <a
              href="https://www.industry.gov.au/trade/country-origin-labelling"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-outline-dark"
            >
              Department Policy
            </a>
          </div>
        </div>
      </header>

      <section className="legal-section">
        <div className="legal-inner">
          <span className="section-tag">The standard</span>
          <h2 className="section-title">What is the new rule?</h2>
          <p className="legal-body">
            The full name of the law is the{" "}
            <em>
              Competition and Consumer (Australian Consumer Law — Country of Origin Information for
              Seafood for Immediate Consumption) Information Standard 2025
            </em>
            . It sits under the Australian Consumer Law (ACL), and the federal Department of
            Industry, Science and Resources is responsible for country-of-origin labelling policy.
          </p>
          <p className="legal-body">
            The standard <strong>comes into effect on 1 July 2026</strong>. Until then, voluntary
            labelling is encouraged but not enforced.
          </p>

          <div className="code-grid">
            <div className="code-card a">
              <div className="code-letter">A</div>
              <h3>Australian</h3>
              <p>
                The seafood was grown, caught, or farmed in Australia. Both wild-caught and
                aquaculture product qualify, provided the fish itself originated in Australian
                waters or farms.
              </p>
            </div>
            <div className="code-card i">
              <div className="code-letter">I</div>
              <h3>Imported</h3>
              <p>
                The seafood was caught or farmed overseas. Even if it was processed, packed, or
                cooked in Australia, the country of catch / production is what counts.
              </p>
            </div>
            <div className="code-card m">
              <div className="code-letter">M</div>
              <h3>Mixed Origin</h3>
              <p>
                The dish contains seafood from more than one country — for example a seafood
                platter that combines Australian prawns with imported squid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section alt">
        <div className="legal-inner">
          <span className="section-tag">Who is covered</span>
          <h2 className="section-title">Does this apply to my business?</h2>
          <p className="legal-body">
            The labelling requirements apply if your business <strong>serves seafood for
            immediate consumption</strong> in Australia. &ldquo;Immediate consumption&rdquo; means
            the food is ready to eat as soon as it&apos;s handed to the customer — it doesn&apos;t
            matter whether they eat it on-site, take it away, or have it delivered.
          </p>

          <div className="legal-cols">
            <div>
              <h3 className="col-heading good">✓ Covered businesses include</h3>
              <ul className="legal-list">
                <li>Restaurants and cafés</li>
                <li>Fish &amp; chip shops</li>
                <li>Pubs, hotels, clubs serving food</li>
                <li>Food trucks and market stalls</li>
                <li>Catering services</li>
                <li>Takeaway and home-delivery operators (incl. via apps)</li>
                <li>Hotels, resorts, and tourism venues serving seafood</li>
                <li>Sushi shops and quick-service seafood retailers</li>
              </ul>
            </div>
            <div>
              <h3 className="col-heading neutral">— Not covered</h3>
              <ul className="legal-list">
                <li>Pre-packaged seafood sold in supermarkets (already covered by existing
                  country-of-origin food labelling rules)</li>
                <li>Raw seafood sold at fish-monger counters for home preparation</li>
                <li>Bulk/wholesale supply between businesses</li>
                <li>Private cooking, charity events, or non-commercial gatherings</li>
              </ul>
              <p className="legal-note">
                If you only sell raw, un-prepared seafood at retail, you should still check the
                existing supermarket-style country-of-origin rules — they apply separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <div className="legal-inner">
          <span className="section-tag">How to comply</span>
          <h2 className="section-title">What you need to display</h2>
          <p className="legal-body">
            You must clearly display the origin of every seafood item, using the letters{" "}
            <strong>A</strong>, <strong>I</strong>, or <strong>M</strong>. Where you put them is up
            to you, as long as the customer can see the information at the point they decide what
            to order.
          </p>
          <div className="how-grid">
            {[
              {
                num: "01",
                title: "Add A / I / M to your menu",
                text: "Print the letter beside each seafood dish. Many cafés do this with a small key at the bottom of the menu, e.g. &ldquo;Battered Flathead (A)&rdquo;.",
              },
              {
                num: "02",
                title: "Update digital menus + apps",
                text: "Online menus, QR-code menus, and third-party delivery listings (e.g. UberEats, Menulog) must show the same information.",
              },
              {
                num: "03",
                title: "Use signage if items aren't on a menu",
                text: "Counter signage, chalkboards, and self-serve cabinets must include the origin code beside each seafood item.",
              },
              {
                num: "04",
                title: "Keep records of your supply chain",
                text: "Be ready to demonstrate to regulators where each seafood ingredient came from — invoices, certificates of origin, and supplier specs.",
              },
              {
                num: "05",
                title: "Train your staff",
                text: "Front-of-house staff should know what each label means and how to answer customer questions about origin.",
              },
              {
                num: "06",
                title: "Update mixed-origin items as supply changes",
                text: "If you swap suppliers seasonally, your labelling must change too. M (mixed) is the safe label when ingredients come from multiple countries.",
              },
            ].map((step) => (
              <div className="how-card" key={step.num}>
                <div className="how-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="legal-section alt">
        <div className="legal-inner">
          <span className="section-tag">Why it matters</span>
          <h2 className="section-title">Better information, better decisions</h2>
          <div className="legal-cols">
            <div>
              <p className="legal-body">
                Most Australians say they want to know where their seafood comes from — and surveys
                consistently find a strong preference for Australian product when that information
                is available. The new standard removes the guesswork and lets diners reward
                businesses that source locally.
              </p>
              <p className="legal-body">
                Beyond the legal obligation, displaying A/I/M is also a useful marketing signal:
                it&apos;s an easy way to differentiate your menu and promote local sourcing.
              </p>
            </div>
            <div className="legal-callout">
              <strong>Penalties</strong>
              <p>
                The standard is enforceable under the Australian Consumer Law. Failing to provide
                accurate origin information, or making misleading claims (e.g. labelling imported
                seafood as Australian), can attract significant penalties under the ACL. Make sure
                your supply records back up your labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <div className="legal-inner">
          <span className="section-tag">Resources</span>
          <h2 className="section-title">Where to read more</h2>
          <div className="legal-resources">
            <a
              href="https://www.legislation.gov.au/F2025L00751/latest/text"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <strong>The Standard (full text)</strong>
              <span>
                Competition and Consumer (Australian Consumer Law — Country of Origin Information
                for Seafood for Immediate Consumption) Information Standard 2025
              </span>
            </a>
            <a
              href="https://consumer.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <strong>Australian Consumer Law</strong>
              <span>
                The umbrella law under which the seafood standard is made. Sets the framework for
                truthful, non-misleading commerce.
              </span>
            </a>
            <a
              href="https://www.industry.gov.au/trade/country-origin-labelling"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <strong>Department of Industry — CoO labelling policy</strong>
              <span>
                Federal department responsible for country-of-origin labelling policy across food
                and seafood.
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Source local. Label clearly.</h2>
        <p>
          Want to highlight Australian seafood on your menu? Browse our species guide and start
          building a story your customers can taste.
        </p>
        <Link href="/#seafood" className="btn-white">
          Explore Australian Species
        </Link>
      </div>

      <footer className="footer">
        <div>
          <div className="footer-logo">Country of Origin</div>
          <div className="footer-tagline">Australian Seafood Guide</div>
          <p className="footer-desc">
            An independent resource helping Australians make informed seafood choices.
          </p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/#compare">Seafood Comparison</Link>
            </li>
            <li>
              <Link href="/#seafood">Australian Species</Link>
            </li>
            <li>
              <Link href="/#tuna">Southern Bluefin Tuna</Link>
            </li>
            <li>
              <Link href="/#indigenous">Indigenous Fishing</Link>
            </li>
            <li>
              <Link href="/#commercial">Commercial Fleets</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Compliance</h4>
          <ul>
            <li>
              <Link href="/labelling">Labelling Standard 2025</Link>
            </li>
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
              <a
                href="https://consumer.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Australian Consumer Law
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#">Data Sources</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>
          © 2026 Country of Origin. This page summarises the law for general guidance only and is
          not legal advice. Always refer to the Information Standard 2025 and ACL for definitive
          requirements.
        </p>
      </div>
    </>
  );
}
