import Link from "next/link";
import { homeStats } from "@/data/content/site-stats";
import { WaveAnimation } from "@/components/ui/wave-animation-1";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-bg-circles" />
      <div className="hero-wave" aria-hidden="true">
        <WaveAnimation
          waveSpeed={1.6}
          waveIntensity={6}
          pointSize={1.4}
          gridDistance={5}
          particleColor="#2ec4a0"
          className="hero-wave__canvas"
        />
      </div>
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
          {homeStats.map((s) => (
            <div
              key={s.label}
              className={`stat-card${s.highlight ? " highlight" : ""}`}
            >
              <div className="stat-num">
                {s.value}
                {s.suffix && <span>{s.suffix}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
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
            fill="var(--sand)"
          />
        </svg>
      </div>
    </section>
  );
}
