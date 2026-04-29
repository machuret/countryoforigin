import Link from "next/link";

/**
 * Reusable hero block used by every detail page (species, industry, area, comparison).
 * Edit once here to change the look across all detail pages.
 */
export function EntityHero({
  eyebrow,
  title,
  titleAccent,
  lede,
  back,
  variant = "default",
  children,
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  lede?: string;
  back?: { href: string; label: string };
  variant?: "default" | "dark" | "ocean";
  children?: React.ReactNode;
}) {
  return (
    <header className={`entity-hero entity-hero--${variant}`}>
      <div className="entity-hero-inner">
        {back && (
          <Link href={back.href} className="entity-back">
            ← {back.label}
          </Link>
        )}
        {eyebrow && <span className="entity-eyebrow">{eyebrow}</span>}
        <h1 className="entity-title">
          {title}
          {titleAccent && (
            <>
              {" "}
              <em>{titleAccent}</em>
            </>
          )}
        </h1>
        {lede && <p className="entity-lede">{lede}</p>}
        {children && <div className="entity-hero-extra">{children}</div>}
      </div>
    </header>
  );
}
