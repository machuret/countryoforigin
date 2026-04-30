import Image from "next/image";
import { speciesImagePath } from "@/data/species/image-manifest";

/**
 * SpeciesImage — renders the photo for a species if one exists in
 * /public/species/<slug>.webp, otherwise falls back to the emoji character
 * set on the species record (e.g. 🐟, 🦞).
 *
 * Two sizes:
 *   variant="hero"  — 1200w source, served responsive. Use for species page
 *                     header, compare cards, and any full-width placement.
 *   variant="thumb" — 400w source, ideal for cards (homepage grid, carousels).
 *
 * The component sizes itself via width:100% / height:100%, so the parent
 * element controls the final rendered size.
 */
export function SpeciesImage({
  slug,
  emoji,
  alt,
  variant = "thumb",
  priority = false,
  sizes,
}: {
  slug: string;
  emoji?: string;
  alt: string;
  variant?: "hero" | "thumb";
  priority?: boolean;
  /** Forwarded to next/image; pick one appropriate to layout. */
  sizes?: string;
}) {
  const src = speciesImagePath(slug, variant);

  if (!src) {
    return (
      <span
        aria-hidden
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontSize: variant === "hero" ? "6rem" : "3rem",
          lineHeight: 1,
        }}
      >
        {emoji ?? "🐟"}
      </span>
    );
  }

  const defaultSizes =
    variant === "hero"
      ? "(max-width: 760px) 100vw, 1200px"
      : "(max-width: 760px) 50vw, 400px";

  return (
    <Image
      src={src}
      alt={alt}
      width={variant === "hero" ? 1200 : 400}
      height={variant === "hero" ? 900 : 300}
      priority={priority}
      sizes={sizes ?? defaultSizes}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}
