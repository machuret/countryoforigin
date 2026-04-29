/**
 * Minimal helpers for emitting Schema.org JSON-LD into our page heads.
 *
 * Usage in any server component:
 *   <JsonLd data={breadcrumbList([...])} />
 *
 * The helpers return plain objects (no string-escaping) so a single
 * <JsonLd /> component handles serialisation centrally.
 */

import { site } from "@/config/site";

export type Crumb = { name: string; url: string };

/** Article — generic catch-all for /species, /areas, /industry, /compare */
export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  image?: string;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    author: { "@type": "Organization", name: opts.authorName ?? site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.baseUrl,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
  };
}

/** Recipe schema for Google Recipe rich results */
export function recipeSchema(opts: {
  url: string;
  name: string;
  description: string;
  image?: string;
  prepMin: number;
  cookMin: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  pairing?: string;
}) {
  const totalMin = opts.prepMin + opts.cookMin;
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    prepTime: `PT${opts.prepMin}M`,
    cookTime: `PT${opts.cookMin}M`,
    totalTime: `PT${totalMin}M`,
    recipeYield: `${opts.servings} serving${opts.servings === 1 ? "" : "s"}`,
    recipeCuisine: "Australian",
    recipeIngredient: opts.ingredients,
    recipeInstructions: opts.instructions.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
    suitableForDiet: undefined,
    keywords: opts.pairing,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.baseUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  };
}

/** FAQPage schema */
export function faqPageSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** BreadcrumbList — emit on every detail page */
export function breadcrumbListSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** Organization — emit once in root layout */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.baseUrl,
    description: site.description,
  };
}
