/**
 * Build a flat search index from every data source. Runs at build time
 * (server) so the resulting JSON ships once to the client and is then
 * filtered with a tiny in-memory matcher.
 *
 * Output ~50KB after gzip for the current dataset (~250 entries).
 */

import { species } from "@/data/species";
import { areas } from "@/data/areas";
import { areaUrl } from "@/data/areas";
import { industries } from "@/data/industries";
import { comparisons } from "@/data/comparisons";
import { recipes } from "@/data/content/recipes";
import { glossary } from "@/data/content/glossary";
import { faqs } from "@/data/content/faq";
import { myths } from "@/data/content/myths";
import { whyAustralianPillars, riskPages } from "@/data/campaigns";

export type SearchEntry = {
  id: string;
  title: string;
  category:
    | "Species"
    | "Area"
    | "Industry"
    | "Compare"
    | "Recipe"
    | "Glossary"
    | "FAQ"
    | "Myth"
    | "Pillar"
    | "Risk";
  href: string;
  /** Plain-text searchable haystack — joined name + summary + tags etc. */
  text: string;
  blurb?: string;
};

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  for (const s of species) {
    out.push({
      id: `species:${s.slug}`,
      title: s.name,
      category: "Species",
      href: `/species/${s.slug}`,
      text: [s.name, s.scientific, s.summary, s.tagline, ...(s.tags ?? [])]
        .filter(Boolean)
        .join(" "),
      blurb: s.tagline,
    });
  }

  for (const a of areas) {
    out.push({
      id: `area:${a.slug}`,
      title: a.name,
      category: "Area",
      href: areaUrl(a),
      text: [a.name, a.summary, a.tagline, a.state].filter(Boolean).join(" "),
      blurb: a.tagline ?? a.state,
    });
  }

  for (const i of industries) {
    out.push({
      id: `industry:${i.slug}`,
      title: i.name,
      category: "Industry",
      href: `/industry/${i.slug}`,
      text: [i.name, i.summary, i.tagline].filter(Boolean).join(" "),
      blurb: i.tagline,
    });
  }

  for (const c of comparisons) {
    out.push({
      id: `compare:${c.slug}`,
      title: c.name,
      category: "Compare",
      href: `/compare/${c.slug}`,
      text: [c.name, c.summary].filter(Boolean).join(" "),
      blurb: "Australian vs imported",
    });
  }

  for (const r of recipes) {
    out.push({
      id: `recipe:${r.slug}`,
      title: r.name,
      category: "Recipe",
      href: `/recipes/${r.slug}`,
      text: [r.name, r.summary, r.speciesSlug].filter(Boolean).join(" "),
      blurb: `${r.prepMin + r.cookMin} min · ${r.difficulty}`,
    });
  }

  for (const g of glossary) {
    out.push({
      id: `glossary:${g.term}`,
      title: g.term,
      category: "Glossary",
      href: `/glossary#${g.term.replace(/\s+/g, "-").toLowerCase()}`,
      text: [g.term, g.definition].join(" "),
      blurb: g.definition.slice(0, 90),
    });
  }

  for (const f of faqs) {
    out.push({
      id: `faq:${f.q.slice(0, 40)}`,
      title: f.q,
      category: "FAQ",
      href: `/faq#${f.category}`,
      text: [f.q, f.a].join(" "),
      blurb: f.a.slice(0, 90),
    });
  }

  for (const m of myths) {
    out.push({
      id: `myth:${m.myth.slice(0, 40)}`,
      title: m.myth,
      category: "Myth",
      href: `/myths`,
      text: [m.myth, m.fact].join(" "),
      blurb: m.fact.slice(0, 90),
    });
  }

  for (const p of whyAustralianPillars) {
    out.push({
      id: `pillar:${p.slug}`,
      title: p.name,
      category: "Pillar",
      href: `/why-australian/${p.slug}`,
      text: [p.name, p.summary, p.tagline].filter(Boolean).join(" "),
      blurb: p.tagline,
    });
  }

  for (const r of riskPages) {
    out.push({
      id: `risk:${r.slug}`,
      title: r.name,
      category: "Risk",
      href: `/risks-of-imported/${r.slug}`,
      text: [r.name, r.summary, r.tagline].filter(Boolean).join(" "),
      blurb: r.tagline,
    });
  }

  return out;
}
