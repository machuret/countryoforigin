import Link from "next/link";
import type { Species } from "@/data/species";
import { SpeciesImage } from "@/components/SpeciesImage";

/**
 * Horizontal CSS scroll-snap carousel of other species. No JS libraries
 * involved — it's a `display:flex` row with `scroll-snap-type: x mandatory`
 * on the parent. Users swipe on mobile or drag on desktop.
 *
 * Source order: the species are passed in pre-filtered (current species
 * removed, optionally shuffled or grouped by family by the caller).
 */
export function OtherSpeciesCarousel({
  species,
  title = "Explore other Australian species",
}: {
  species: Species[];
  title?: string;
}) {
  if (species.length === 0) return null;

  return (
    <section className="other-species" style={{ marginTop: "3rem" }}>
      <h2 style={{ marginBottom: "0.5rem" }}>{title}</h2>
      <p className="deep-muted" style={{ marginBottom: "1.2rem" }}>
        Scroll to browse. Each card links to a full species profile.
      </p>
      <div className="other-species-rail">
        {species.map((s) => (
          <Link
            key={s.slug}
            href={`/species/${s.slug}`}
            className="other-species-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={`other-species-img ${s.cls}`}>
              <SpeciesImage
                slug={s.slug}
                emoji={s.emoji}
                alt={s.name}
                variant="thumb"
              />
            </div>
            <div className="other-species-info">
              <h3>{s.name}</h3>
              <p className="deep-muted">{s.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
