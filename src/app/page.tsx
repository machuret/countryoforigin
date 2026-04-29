import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SeafoodCompareTabs } from "@/components/SeafoodCompareTabs";
import {
  HomeHero,
  IntroPillars,
  WhyAndRisksTeaser,
  FeaturedSpecies,
  IndustryGrid,
  AreasOverview,
  ConversionStrip,
} from "@/components/home";
import { species } from "@/data/species";
import { industries } from "@/data/industries";
import { statesOnly, regionsOnly } from "@/data/areas";

export default function Home() {
  const featuredSpecies = species.slice(0, 6);
  const allAreas = [...statesOnly().slice(0, 4), ...regionsOnly().slice(0, 4)];

  return (
    <PageShell>
      <HomeHero />
      <IntroPillars />
      <WhyAndRisksTeaser />

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

      <FeaturedSpecies items={featuredSpecies} />
      <IndustryGrid items={industries} />
      <AreasOverview items={allAreas} />
      <ConversionStrip />

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
