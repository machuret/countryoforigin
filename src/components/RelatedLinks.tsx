import Link from "next/link";
import { speciesBySlug } from "@/data/species";
import { industryBySlug } from "@/data/industries";
import { areaBySlug, areaUrl } from "@/data/areas";
import { comparisonBySlug } from "@/data/comparisons";
import type { Slug } from "@/data/types";

type ResolvedItem = { slug: Slug; name: string; href: string };

const SECTIONS: {
  key: "species" | "industry" | "areas" | "compare";
  label: string;
  resolve: (slug: Slug) => ResolvedItem | undefined;
}[] = [
  {
    key: "species",
    label: "Related species",
    resolve: (slug) => {
      const x = speciesBySlug(slug);
      return x ? { slug: x.slug, name: x.name, href: `/species/${x.slug}` } : undefined;
    },
  },
  {
    key: "industry",
    label: "Related industry",
    resolve: (slug) => {
      const x = industryBySlug(slug);
      return x ? { slug: x.slug, name: x.name, href: `/industry/${x.slug}` } : undefined;
    },
  },
  {
    key: "areas",
    label: "Related areas",
    resolve: (slug) => {
      const x = areaBySlug(slug);
      return x ? { slug: x.slug, name: x.name, href: areaUrl(x) } : undefined;
    },
  },
  {
    key: "compare",
    label: "Comparisons",
    resolve: (slug) => {
      const x = comparisonBySlug(slug);
      return x ? { slug: x.slug, name: x.name, href: `/compare/${x.slug}` } : undefined;
    },
  },
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
      .map((slug) => section.resolve(slug))
      .filter((x): x is ResolvedItem => Boolean(x));
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
                    <Link href={item.href}>{item.name} →</Link>
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
