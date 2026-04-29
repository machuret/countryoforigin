import Link from "next/link";

export type Crumb = { href?: string; label: string };

/**
 * Phase G — Site-wide breadcrumb trail. Pass an array of crumbs ordered
 * from root to current page; the final crumb is treated as the current
 * page (no link, aria-current="page").
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items.length) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} aria-current={isLast ? "page" : undefined}>
              {!isLast && c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
