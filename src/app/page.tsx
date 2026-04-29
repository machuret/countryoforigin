import { SeafoodCompare, NutritionBars } from "@/components/SeafoodCompare";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <div className="nav-logo-main">Country of Origin</div>
          <div className="nav-logo-sub">Australian Seafood Guide</div>
        </div>
        <div className="nav-links">
          <a href="#compare">Compare</a>
          <a href="#seafood">Our Seafood</a>
          <a href="#nutrition">Nutrition</a>
          <a href="#environment">Environment</a>
          <a href="#economy">Economy</a>
          <a href="#labels">Reading Labels</a>
          <a href="#compare" className="nav-cta">
            Compare Now
          </a>
        </div>
      </nav>

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
              <a href="#compare" className="btn-primary">
                Compare Seafood
              </a>
              <a href="#seafood" className="btn-outline">
                Explore Species
              </a>
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

      {/* COMPARE */}
      <section className="compare-section" id="compare">
        <div className="compare-inner">
          <div className="compare-header">
            <span className="section-tag">Interactive Comparison</span>
            <h2 className="section-title">Australian vs. Imported Seafood</h2>
            <p className="section-desc">
              Select a seafood type to see a detailed side-by-side comparison of nutritional content,
              environmental impact, and food safety standards.
            </p>
          </div>
          <SeafoodCompare />
        </div>
      </section>

      {/* SEAFOOD GRID */}
      <section id="seafood">
        <div className="section">
          <span className="section-tag">Australian Waters</span>
          <h2 className="section-title">Featured Australian Seafood</h2>
          <p className="section-desc">
            From the warm tropical waters of the north to the cool southern oceans, Australia&apos;s
            diverse marine environment produces an extraordinary variety of premium seafood.
          </p>
          <div className="seafood-grid">
            {[
              {
                cls: "sc-barramundi",
                emoji: "🐟",
                status: "wild",
                title: "Barramundi",
                origin: "Northern Australia & Farms",
                tags: ["High Omega-3", "Low Mercury", "MSC Certified"],
              },
              {
                cls: "sc-salmon",
                emoji: "🐠",
                status: "farmed",
                title: "Atlantic Salmon",
                origin: "Tasmania",
                tags: ["Omega-3 Rich", "ASC Certified", "Antibiotic Free"],
              },
              {
                cls: "sc-oyster",
                emoji: "🦪",
                status: "farmed",
                title: "Sydney Rock Oyster",
                origin: "NSW & SA Coast",
                tags: ["High Zinc", "Water Filtering", "Native Species"],
              },
              {
                cls: "sc-prawn",
                emoji: "🦐",
                status: "wild",
                title: "King Prawns",
                origin: "Spencer Gulf, SA",
                tags: ["High Protein", "No Preservatives", "Sustainably Fished"],
              },
              {
                cls: "sc-tuna",
                emoji: "🐡",
                status: "wild",
                title: "Southern Bluefin Tuna",
                origin: "Southern Ocean",
                tags: ["Premium Grade", "CCSBT Quota", "Traceable"],
              },
              {
                cls: "sc-lobster",
                emoji: "🦞",
                status: "wild",
                title: "Western Rock Lobster",
                origin: "Western Australia",
                tags: ["Low Fat", "MSC Certified", "World's Largest"],
              },
              {
                cls: "sc-lobster",
                emoji: "🦞",
                status: "wild",
                title: "Southern Rock Lobster",
                origin: "Tasmania, SA & Victoria",
                tags: ["Live Export Premium", "Pot-caught", "Stock-status Assessed"],
              },
              {
                cls: "sc-oyster",
                emoji: "🐚",
                status: "wild",
                title: "Greenlip Abalone",
                origin: "Tasmania, Vic, SA, WA",
                tags: ["Dive Caught", "TAC Quota", "World's Largest Wild Fishery"],
              },
              {
                cls: "sc-oyster",
                emoji: "🫧",
                status: "farmed",
                title: "Blue Mussels",
                origin: "Tasmania & Victoria",
                tags: ["Rope Grown", "Low Carbon", "No Feed Required"],
              },
              {
                cls: "sc-barramundi",
                emoji: "✨",
                status: "farmed",
                title: "South Sea Pearls",
                origin: "Western Australia (Broome)",
                tags: ["World's Finest", "Sustainable Pinctada Maxima", "Cultural Heritage"],
              },
            ].map((s) => (
              <div className="seafood-card" key={s.title}>
                <div className="seafood-img">
                  <div className={`seafood-img-bg ${s.cls}`}>{s.emoji}</div>
                  <span
                    className={`seafood-status ${s.status === "wild" ? "status-wild" : "status-farmed"}`}
                  >
                    {s.status === "wild" ? "Wild Caught" : "Aquaculture"}
                  </span>
                </div>
                <div className="seafood-info">
                  <h3>{s.title}</h3>
                  <div className="seafood-origin">{s.origin}</div>
                  <div className="seafood-tags">
                    {s.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`tag ${["tag-green", "tag-blue", "tag-gold"][i % 3]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OYSTER VARIETIES */}
      <section style={{ background: "var(--sand-light)" }}>
        <div className="section">
          <span className="section-tag">Spotlight</span>
          <h2 className="section-title">
            Australian Oysters — <span style={{ color: "var(--teal)" }}>Three Distinct Varieties</span>
          </h2>
          <p className="section-desc">
            &ldquo;Oyster&rdquo; on a menu can mean very different things. Australia farms three
            distinct species, each with its own native range, growing time, and flavour profile.
          </p>
          <div className="seafood-grid">
            {[
              {
                key: "sydney-rock",
                title: "Sydney Rock Oyster",
                sci: "Saccostrea glomerata",
                origin: "NSW & southern QLD estuaries",
                flavour: "Sweet, creamy, mineral finish",
                notes:
                  "Australia's iconic native oyster. Slower-growing than Pacifics, prized for depth of flavour and resilience to estuarine conditions.",
                tags: ["Native", "Estuarine", "3+ Years Growth"],
                cls: "sc-oyster",
              },
              {
                key: "pacific",
                title: "Pacific Oyster",
                sci: "Crassostrea gigas",
                origin: "Tasmania, SA, Coffin Bay",
                flavour: "Brisk, briny, cucumber-like",
                notes:
                  "Introduced from Japan, now the dominant farmed species in cool southern waters. Fast-growing and behind Coffin Bay's reputation.",
                tags: ["Naturalised", "Cold Water", "12–18 Months Growth"],
                cls: "sc-oyster",
              },
              {
                key: "angasi",
                title: "Native Angasi (Flat) Oyster",
                sci: "Ostrea angasi",
                origin: "Tasmania, SA, Victoria",
                flavour: "Rich, umami, almost mushroomy",
                notes:
                  "Australia's flat oyster. Once nearly lost to overharvest, now part of restoration projects rebuilding shellfish reefs.",
                tags: ["Native", "Restoration Species", "Premium Rare"],
                cls: "sc-oyster",
              },
            ].map((o) => (
              <div className="seafood-card" key={o.key}>
                <div className="seafood-img">
                  <div className={`seafood-img-bg ${o.cls}`}>🦪</div>
                  <span
                    className={`seafood-status ${
                      o.tags[0] === "Native" ? "status-wild" : "status-farmed"
                    }`}
                  >
                    {o.tags[0]}
                  </span>
                </div>
                <div className="seafood-info">
                  <h3>{o.title}</h3>
                  <div className="seafood-origin">
                    <em style={{ fontStyle: "italic" }}>{o.sci}</em>
                  </div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-mid)",
                      margin: "0.4rem 0 0.6rem",
                      lineHeight: 1.55,
                    }}
                  >
                    <strong style={{ color: "var(--navy)" }}>Origin:</strong> {o.origin}
                    <br />
                    <strong style={{ color: "var(--navy)" }}>Flavour:</strong> {o.flavour}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.55,
                      marginBottom: "0.8rem",
                    }}
                  >
                    {o.notes}
                  </p>
                  <div className="seafood-tags">
                    {o.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`tag ${["tag-green", "tag-blue", "tag-gold"][i % 3]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRITION */}
      <section className="nutrition-section" id="nutrition">
        <div className="nutrition-inner">
          <span className="section-tag">Nutritional Value</span>
          <h2 className="section-title">Why Australian Seafood Nourishes Better</h2>
          <p className="section-desc">
            Freshness, feed quality, and clean water make a measurable difference in the nutritional
            profile of seafood. Australian seafood consistently outperforms imports on key health
            markers.
          </p>
          <div className="nutrition-grid">
            <div>
              <NutritionBars />
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-light)",
                  marginTop: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                Comparison based on per 100g serving. Data sourced from FSANZ and peer-reviewed
                nutritional studies.
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginLeft: "1rem",
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 4,
                      background: "var(--teal)",
                      borderRadius: 2,
                      display: "inline-block",
                    }}
                  />{" "}
                  Australian
                  <span
                    style={{
                      width: 12,
                      height: 4,
                      background: "#ccc",
                      borderRadius: 2,
                      display: "inline-block",
                      marginLeft: "0.5rem",
                    }}
                  />{" "}
                  Imported
                </span>
              </p>
            </div>
            <div className="nut-facts">
              <h3>What Makes the Difference?</h3>
              {[
                {
                  icon: "🌊",
                  title: "Pristine Water Quality",
                  text: "Australian waters are among the world's cleanest, with strict pollution controls that result in seafood with lower heavy metal contamination and higher bioavailable nutrients.",
                },
                {
                  icon: "⏱️",
                  title: "Shorter Supply Chain",
                  text: "Domestically caught seafood reaches your plate faster. Fresh fish retains more omega-3 fatty acids and vitamins that degrade during long transport and frozen storage.",
                },
                {
                  icon: "🚫",
                  title: "No Hidden Additives",
                  text: "Australian seafood standards ban many preservatives and treatments common in imported product, including sodium tripolyphosphate water retention agents that add weight but reduce nutrition.",
                },
                {
                  icon: "🔬",
                  title: "Rigorous Safety Testing",
                  text: "FSANZ and DAFF conduct regular testing for pesticides, antibiotics, and heavy metals — standards that many exporting nations cannot match.",
                },
              ].map((f) => (
                <div className="nut-fact-item" key={f.title}>
                  <div className="nut-fact-icon">{f.icon}</div>
                  <div className="nut-fact-text">
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENVIRONMENT */}
      <section className="env-section" id="environment">
        <div className="env-inner">
          <span className="section-tag">Environmental Impact</span>
          <h2 className="section-title">Australia&apos;s Ocean Stewardship</h2>
          <p className="section-desc">
            When you choose Australian seafood, you&apos;re voting for a fishing industry that takes
            its environmental responsibilities seriously — one that future generations will thank you
            for.
          </p>
          <div className="env-grid">
            {[
              {
                stat: "~40%",
                title: "Carbon Footprint Reduction",
                text: "Australian seafood travels far shorter distances than imports, dramatically reducing transport emissions and refrigeration energy use.",
              },
              {
                stat: "100%",
                title: "Bycatch Reporting Required",
                text: "Australian fishers are legally required to report all bycatch, with strict limits that protect endangered species like dolphins and seabirds.",
              },
              {
                stat: "13M+",
                title: "km² of Protected Waters",
                text: "Australia has the world's third-largest network of marine protected areas, including no-take zones that let ecosystems recover and thrive.",
              },
              {
                stat: "Zero",
                title: "Illegal Fishing Tolerance",
                text: "Australia's monitoring, control, and surveillance system tracks every commercial vessel, making illegal, unreported, and unregulated fishing virtually impossible.",
              },
            ].map((c) => (
              <div className="env-card" key={c.title}>
                <span className="env-stat">{c.stat}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="env-banner">
            <div>
              <h3>Imported Seafood &amp; Hidden Environmental Costs</h3>
              <p>
                Much of the world&apos;s seafood is caught using destructive practices including
                bottom trawling, cyanide fishing, and dynamite fishing — all illegal in Australia.
                Choosing Australian means ensuring your seafood doesn&apos;t come at the cost of
                irreplaceable coral reefs and marine habitats overseas.
              </p>
            </div>
            <div className="env-banner-num">
              <strong>85%</strong>
              <span>of global fisheries are fully exploited, overexploited or depleted</span>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMY */}
      <section className="economy-section" id="economy">
        <div className="economy-inner">
          <span className="section-tag">Supporting Local Communities</span>
          <h2 className="section-title">Your Purchase Powers Australian Lives</h2>
          <p className="section-desc">
            The Australian seafood industry is more than food — it&apos;s the backbone of hundreds of
            coastal communities, supporting fishers, processors, retailers, and researchers across
            the country.
          </p>
          <div className="econ-grid">
            <div className="econ-numbers">
              {[
                { num: "17,000", em: true, label: "Direct jobs in the Australian fishing industry" },
                {
                  num: "$3B",
                  em: true,
                  label: "Gross value of Australian seafood production annually",
                },
                {
                  num: "50+",
                  em: true,
                  label: "Coastal towns that depend on fishing as their primary industry",
                },
                {
                  num: "4×",
                  em: true,
                  label: "Economic multiplier effect of buying local seafood vs. imports",
                },
              ].map((n) => (
                <div className="econ-num-card" key={n.label}>
                  <div className="econ-num">
                    {n.em ? <em>{n.num}</em> : n.num}
                  </div>
                  <div className="econ-num-label">{n.label}</div>
                </div>
              ))}
            </div>
            <div>
              {[
                {
                  num: "01",
                  title: "Money Stays in Australia",
                  text: "When you buy Australian seafood, wages are paid to Australian workers, taxes are collected by Australian governments, and profits are reinvested in Australian businesses — creating a virtuous economic cycle.",
                },
                {
                  num: "02",
                  title: "Preserves Fishing Culture & Heritage",
                  text: "Many Australian fishing families have worked the same waters for generations. Supporting them means preserving irreplaceable knowledge, cultural traditions, and the character of our coastal towns.",
                },
                {
                  num: "03",
                  title: "Funds Sustainable Research",
                  text: "A thriving industry funds research into better fishing practices, stock monitoring, and marine conservation — ensuring the long-term viability of our ocean resources.",
                },
                {
                  num: "04",
                  title: "Avoids Exploitation Overseas",
                  text: "Much cheap imported seafood relies on labour practices that would be illegal in Australia. Choosing local ensures your seafood doesn't support worker exploitation in overseas processing facilities.",
                },
              ].map((r) => (
                <div className="econ-reason" key={r.num}>
                  <div className="reason-num">{r.num}</div>
                  <div className="reason-content">
                    <h4>{r.title}</h4>
                    <p>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LABELS */}
      <section className="label-section" id="labels">
        <div className="label-inner">
          <span className="section-tag">Consumer Guide</span>
          <h2 className="section-title">How to Read a Seafood Label</h2>
          <p className="section-desc">
            Australian law requires country of origin labelling on all seafood sold in stores.
            Here&apos;s what to look for to make an informed choice every time.
          </p>
          <div className="label-grid">
            <div className="label-card must-have">
              <h3>✓ Look For</h3>
              <p>These labels indicate the highest standards of Australian production and traceability.</p>
              <ul>
                <li>&quot;Product of Australia&quot; or &quot;Australian&quot; — caught AND processed here</li>
                <li>MSC (Marine Stewardship Council) blue tick</li>
                <li>ASC certification for farmed seafood</li>
                <li>AMSA (Australian Made, Australian Grown) logo</li>
                <li>Specific catch location (e.g. &quot;Spencer Gulf SA&quot;)</li>
                <li>Harvest date and vessel name</li>
              </ul>
            </div>
            <div className="label-card should-have">
              <h3>⚠ Check Carefully</h3>
              <p>These terms may be misleading — dig deeper before purchasing.</p>
              <ul>
                <li>&quot;Made in Australia from imported ingredients&quot; — processed here but fish from overseas</li>
                <li>&quot;Product of multiple countries&quot; — mixed origin, variable standards</li>
                <li>&quot;Packed in Australia&quot; — doesn&apos;t mean caught or farmed here</li>
                <li>No certification logos present</li>
                <li>Vague descriptions like &quot;Pacific Ocean&quot;</li>
              </ul>
            </div>
            <div className="label-card watch-out">
              <h3>✗ Red Flags</h3>
              <p>Be cautious of seafood with these characteristics — quality and ethics may be compromised.</p>
              <ul>
                <li>No country of origin information at all</li>
                <li>Countries with poor fisheries management records</li>
                <li>Unusual price — far cheaper than Australian equivalents</li>
                <li>&quot;Imported&quot; with no additional detail</li>
                <li>No certification or traceability information</li>
                <li>Preservatives like E223, E224 (sulphites) added</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2>Make the Switch to Australian Seafood</h2>
        <p>
          Join thousands of Australians who are making informed choices about the seafood they eat —
          better for their health, the environment, and local communities.
        </p>
        <a href="#compare" className="btn-white">
          Start Comparing Now
        </a>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <div className="footer-logo">Country of Origin</div>
          <div className="footer-tagline">Australian Seafood Guide</div>
          <p className="footer-desc">
            An independent resource helping Australians make informed seafood choices. We believe
            that knowing where your food comes from leads to better decisions for health, environment,
            and community.
          </p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#compare">Seafood Comparison</a>
            </li>
            <li>
              <a href="#seafood">Australian Species</a>
            </li>
            <li>
              <a href="#nutrition">Nutritional Data</a>
            </li>
            <li>
              <a href="#environment">Sustainability</a>
            </li>
            <li>
              <a href="#economy">Economic Impact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#labels">Label Reading Guide</a>
            </li>
            <li>
              <a href="#">Seasonal Calendar</a>
            </li>
            <li>
              <a href="#">Cooking Guides</a>
            </li>
            <li>
              <a href="#">Find Local Fishers</a>
            </li>
            <li>
              <a href="#">Research &amp; Studies</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Data Sources</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Media Kit</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
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
