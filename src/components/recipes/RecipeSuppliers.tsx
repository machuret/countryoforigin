import Link from "next/link";
import { speciesBySlug } from "@/data/species";
import { areaBySlug, areaUrl } from "@/data/areas";

/**
 * "Where to source this recipe's seafood" panel.
 *
 * Walks: speciesSlug → species.signatureRegions[] → areaBySlug() →
 * area.processors[] (filter by type "coop"/"processor"/"market").
 * Surfaces up to 6 verified Australian suppliers across the species's
 * signature regions, with a fallback CTA to /find-australian if a species
 * has no region/processor data yet.
 */
export function RecipeSuppliers({ speciesSlug }: { speciesSlug: string }) {
  const species = speciesBySlug(speciesSlug);
  if (!species) return null;

  const regions = (species.signatureRegions ?? [])
    .map((slug) => areaBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  type SupplierEntry = {
    name: string;
    type: string;
    url?: string;
    note?: string;
    regionName: string;
    regionHref: string;
  };

  const suppliers: SupplierEntry[] = [];
  for (const region of regions) {
    if (!region.processors) continue;
    for (const p of region.processors) {
      if (p.type === "research") continue;
      suppliers.push({
        name: p.name,
        type: p.type,
        url: p.url,
        note: p.note,
        regionName: region.name,
        regionHref: areaUrl(region),
      });
      if (suppliers.length >= 6) break;
    }
    if (suppliers.length >= 6) break;
  }

  if (suppliers.length === 0 && regions.length === 0) {
    return (
      <aside className="recipe-suppliers recipe-suppliers--empty">
        <h2 id="suppliers" className="recipe-suppliers__title">
          Where to source Australian {species.name.toLowerCase()}
        </h2>
        <p className="t-body" style={{ margin: "0.5rem 0 1rem" }}>
          Region and supplier data for this species hasn&apos;t been profiled yet.
          Use our consumer guide:
        </p>
        <Link href="/find-australian" className="btn-primary">
          How to find Australian seafood →
        </Link>
      </aside>
    );
  }

  return (
    <aside className="recipe-suppliers">
      <h2 id="suppliers" className="recipe-suppliers__title">
        Where to source Australian {species.name.toLowerCase()}
      </h2>
      <p className="recipe-suppliers__lede">
        Verified producers, co-ops and processors across {species.name}&apos;s
        signature {regions.length === 1 ? "region" : `${regions.length} regions`}.
        Each links to its profile or website.
      </p>

      {suppliers.length > 0 && (
        <div className="deep-grid-2 recipe-suppliers__grid">
          {suppliers.map((s) => {
            const Inner = (
              <>
                <span className="recipe-suppliers__type">{s.type}</span>
                <strong className="recipe-suppliers__name">{s.name}</strong>
                <span className="recipe-suppliers__region">
                  {s.regionName}
                </span>
                {s.note && <p className="recipe-suppliers__note">{s.note}</p>}
              </>
            );
            return s.url ? (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="deep-card deep-card-link recipe-suppliers__card"
              >
                {Inner}
              </a>
            ) : (
              <div key={s.name} className="deep-card recipe-suppliers__card">
                {Inner}
              </div>
            );
          })}
        </div>
      )}

      <p className="recipe-suppliers__more">
        Or browse all{" "}
        {regions.map((r, i) => (
          <span key={r.slug}>
            {i > 0 && (i === regions.length - 1 ? " and " : ", ")}
            <Link href={areaUrl(r)} className="recipe-suppliers__region-link">
              {r.name}
            </Link>
          </span>
        ))}{" "}
        producers, or{" "}
        <Link href={`/species/${species.slug}`}>
          read the full {species.name.toLowerCase()} profile
        </Link>
        .
      </p>
    </aside>
  );
}
