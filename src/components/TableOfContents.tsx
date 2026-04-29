export type TocItem = { id: string; label: string };

/**
 * Phase G — Lightweight in-page table of contents. Pass a list of section
 * ids and labels; consumers must add matching `id="..."` to their <h2>s.
 */
export function TableOfContents({
  items,
  title = "On this page",
  className,
}: {
  items: TocItem[];
  title?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <aside className={`toc${className ? ` ${className}` : ""}`} aria-label={title}>
      <p className="toc-title">{title}</p>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.label}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
