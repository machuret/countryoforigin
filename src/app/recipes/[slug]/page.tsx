import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { recipeBySlug, allRecipeSlugs } from "@/data/content/recipes";
import { speciesBySlug } from "@/data/species";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allRecipeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = recipeBySlug(slug);
  if (!r) return {};
  return {
    title: `${r.name} — Australian Seafood Recipe`,
    description: r.summary,
  };
}

export default async function RecipeDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const r = recipeBySlug(slug);
  if (!r) notFound();
  const sp = speciesBySlug(r.speciesSlug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/recipes", label: "Recipes" },
          { label: r.name },
        ]}
      />
      <EntityHero
        eyebrow="Recipe"
        title={r.name}
        lede={r.summary}
        back={{ href: "/recipes", label: "All recipes" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: "1.5rem",
            fontSize: "0.92rem",
            color: "var(--text-mid)",
          }}
        >
          <span>
            <strong style={{ color: "var(--navy)" }}>Prep:</strong> {r.prepMin} min
          </span>
          <span>
            <strong style={{ color: "var(--navy)" }}>Cook:</strong> {r.cookMin} min
          </span>
          <span>
            <strong style={{ color: "var(--navy)" }}>Servings:</strong> {r.servings}
          </span>
          <span>
            <strong style={{ color: "var(--navy)" }}>Difficulty:</strong>{" "}
            <span style={{ textTransform: "capitalize" }}>{r.difficulty}</span>
          </span>
        </div>
      </EntityHero>

      <section className="entity-body">
        <div
          className="entity-body-inner"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* INGREDIENTS column */}
          <aside
            style={{
              background: "var(--sand-light)",
              borderLeft: "3px solid var(--teal)",
              borderRadius: 6,
              padding: "1.6rem 1.8rem",
              position: "sticky",
              top: "1rem",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "1.4rem" }}>Ingredients</h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {r.ingredients.map((ing, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "var(--text-mid)",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid rgba(10,37,64,0.06)",
                  }}
                >
                  {ing}
                </li>
              ))}
            </ul>
          </aside>

          {/* METHOD column */}
          <div>
            <h2 style={{ marginTop: 0 }}>Method</h2>
            <ol
              style={{
                paddingLeft: 0,
                listStyle: "none",
                counterReset: "step",
              }}
            >
              {r.method.map((step, i) => (
                <li
                  key={i}
                  style={{
                    counterIncrement: "step",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "1rem",
                    marginBottom: "1.2rem",
                    paddingBottom: "1.2rem",
                    borderBottom: "1px solid rgba(10,37,64,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--teal)",
                      color: "white",
                      display: "grid",
                      placeItems: "center",
                      fontFamily: "var(--f-cond)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "var(--text-mid)",
                    }}
                  >
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            {r.tips && r.tips.length > 0 && (
              <div
                style={{
                  background: "rgba(245,158,11,0.07)",
                  borderLeft: "3px solid var(--gold)",
                  padding: "1.4rem 1.6rem",
                  borderRadius: 4,
                  marginTop: "2rem",
                }}
              >
                <h3 style={{ marginTop: 0, color: "var(--gold)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Tips
                </h3>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {r.tips.map((t, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.93rem",
                        lineHeight: 1.65,
                        color: "var(--text-mid)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {r.pairing && (
              <div
                style={{
                  background: "rgba(30,158,128,0.07)",
                  borderLeft: "3px solid var(--teal)",
                  padding: "1.2rem 1.6rem",
                  borderRadius: 4,
                  marginTop: "1.2rem",
                }}
              >
                <strong
                  style={{
                    color: "var(--teal)",
                    fontFamily: "var(--f-cond)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Pairing
                </strong>
                <p
                  style={{
                    margin: "0.4rem 0 0",
                    fontSize: "0.95rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.6,
                  }}
                >
                  {r.pairing}
                </p>
              </div>
            )}

            {sp && (
              <div style={{ marginTop: "2.5rem" }}>
                <Link href={`/species/${sp.slug}`} className="btn-primary">
                  Read more about {sp.name} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
