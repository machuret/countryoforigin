import { industries } from "@/data/industries";

/**
 * Lightweight stat tiles — one per industry. Pulls headlineStat from
 * each Industry record so adding a new industry adds a new tile for free.
 */
export function IndustryHeadlines() {
  const tiles = industries
    .filter((i) => i.headlineStat)
    .map((i) => ({
      slug: i.slug,
      name: i.name,
      stat: i.headlineStat!,
    }));

  if (tiles.length === 0) return null;

  return (
    <figure className="dashboard-figure">
      <figcaption className="dashboard-caption">
        <strong>The 5 pillars of Australian seafood</strong>
        <span>
          Headline stat per industry. Click any tile for the full sourced profile.
        </span>
      </figcaption>
      <ul className="dashboard-tiles">
        {tiles.map((t) => (
          <li key={t.slug}>
            <a href={`/industry/${t.slug}`} className="dashboard-tile">
              <strong className="dashboard-tile__value">{t.stat.value}</strong>
              <span className="dashboard-tile__label">{t.stat.label}</span>
              <span className="dashboard-tile__name">{t.name} →</span>
            </a>
          </li>
        ))}
      </ul>
    </figure>
  );
}
