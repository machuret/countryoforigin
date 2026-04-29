/**
 * Shared shape for any "page entity" (Species, Industry, Area, Comparison).
 * Each has a unique slug → URL.
 */
export type Slug = string;

export type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string; level?: 2 | 3 }
  | { kind: "list"; items: string[] }
  | { kind: "callout"; title: string; text: string; tone?: "info" | "warn" | "good" }
  | { kind: "stat-grid"; stats: { value: string; label: string }[] };

export type Entity = {
  slug: Slug;
  name: string;
  /** Short tag/eyebrow shown above title */
  tagline?: string;
  /** One-line description for index cards / SEO */
  summary: string;
  /** Long-form structured body */
  body?: ContentBlock[];
  /** Cross-links to other entities by slug */
  related?: {
    species?: Slug[];
    industry?: Slug[];
    areas?: Slug[];
    compare?: Slug[];
  };
  /** SEO overrides */
  meta?: { title?: string; description?: string };
};
