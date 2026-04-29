import Link from "next/link";
import { speciesBySlug } from "@/data/species";
import { industryBySlug } from "@/data/industries";
import { areaBySlug } from "@/data/areas";
import { comparisonBySlug } from "@/data/comparisons";
import type { Slug } from "@/data/types";

type Resolver = (slug: Slug) => { slug: Slug; name: string } | undefined;

const SECTIONS: {
  key: "species" | "industry" | "areas" | "compare";
  label: string;
  basePath: string;
  resolver: Resolver;
}[] = [
  { key: "species", label: "Related species", basePath: "/species", resolver: speciesBySlug },
  { key: "industry", label: "Related industry", basePath: "/industry", resolver: industryBySlug },
  { key: "areas", label: "Related areas", basePath: "/areas", resolver: areaBySlug },
  { key: "compare", label: "Comparisons", basePath: "/compare", resolver: comparisonBySlug },
];

/**
 * Render cross-links to other entities. Pass an entity's `related` field.
 * Resilient to missing/unknown slugs — they're silently skipped.
 */
export function RelatedLinks({
  related,
}: {
  related?: {
    species?: Slug[];
    industry?: Slug[];
    areas?: Slug[];
    compare?: Slug[];
  };
}) {
  if (!related) return null;
  const groups = SECTIONS.map((section) => {
    const slugs = related[section.key] ?? [];
    const items = slugs
      .map((slug) => section.resolver(slug))
      .filter((x): x is { slug: Slug; name: string } => Boolean(x));
    return { ...section, items };
  }).filter((g) => g.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <section className="related-section">
      <div className="related-inner">
        <h2 className="related-title">Explore further</h2>
        <div className="related-grid">
          {groups.map((g) => (
            <div key={g.key} className="related-group">
              <h3>{g.label}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item.slug}>
                    <Link href={`${g.basePath}/${item.slug}`}>{item.name} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
