import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { EntityHero } from "@/components/EntityHero";
import { Citation, CitationList } from "@/components/Citation";

export const metadata: Metadata = {
  title: "How to Read a Seafood Label — Country of Origin",
  description:
    "Decode origin claims, name standards, additives and the 1 July 2026 cooked-fish rules with this consumer guide.",
};

type LabelClaim = {
  claim: string;
  meaning: string;
  verdict: "strong" | "ok" | "weak" | "warning";
  citationIds?: string[];
};

const claims: LabelClaim[] = [
  {
    claim: "Product of Australia",
    meaning: "All significant ingredients and processing in Australia. Strongest origin claim available.",
    verdict: "strong",
    citationIds: ["info-standard-2025"],
  },
  {
    claim: "Grown in Australia",
    meaning: "Used for farmed produce; species was raised in Australia.",
    verdict: "strong",
  },
  {
    claim: "Australian (with kangaroo logo + bar chart)",
    meaning: "Mandatory CoOL on packaged food: green-and-gold triangle plus % bar shows Australian content.",
    verdict: "strong",
    citationIds: ["info-standard-2025"],
  },
  {
    claim: "Made in Australia from imported ingredients",
    meaning: "Substantially processed in Australia, but the seafood itself is imported. Read carefully.",
    verdict: "weak",
    citationIds: ["industry-dept-cool"],
  },
  {
    claim: "Packed in Australia",
    meaning: "Only packaging happened locally — seafood can be 100% imported.",
    verdict: "weak",
  },
  {
    claim: "Imported / Country: Thailand (or other)",
    meaning: "Honest origin disclosure — not necessarily a bad thing, but compare to local options.",
    verdict: "ok",
  },
  {
    claim: "Sulphite-treated / Contains sulphites",
    meaning: "Common preservative on imported prawns. Mandatory disclosure under FSANZ rules.",
    verdict: "warning",
    citationIds: ["fsanz-residues"],
  },
  {
    claim: "Glazed (with water)",
    meaning: "Frozen seafood often has water glaze — declared weight should be drained weight.",
    verdict: "ok",
  },
  {
    claim: "Snapper (no AFNS species name)",
    meaning: "If a fishmonger or restaurant sells 'snapper' without the AFNS approved name, beware substitution.",
    verdict: "warning",
    citationIds: ["aff-fish-names-standard", "amcs-dna"],
  },
  {
    claim: "Wild caught",
    meaning: "Species was caught from natural waters. Common on Spencer Gulf prawns, MSC-certified WRL, Coral Trout.",
    verdict: "ok",
  },
  {
    claim: "Farmed",
    meaning: "Species was raised in aquaculture. Australian salmon, barramundi, oysters and pearls are farmed.",
    verdict: "ok",
  },
  {
    claim: "MSC-certified",
    meaning: "Marine Stewardship Council standard — independent third-party assessment of fishery sustainability.",
    verdict: "strong",
    citationIds: ["msc-registry"],
  },
  {
    claim: "ASC-certified",
    meaning: "Aquaculture Stewardship Council — equivalent to MSC for farmed product.",
    verdict: "strong",
  },
];

const verdictStyle: Record<LabelClaim["verdict"], React.CSSProperties> = {
  strong: { background: "rgba(30,158,128,0.10)", borderColor: "rgba(30,158,128,0.45)" },
  ok: { background: "rgba(80,140,200,0.08)", borderColor: "rgba(80,140,200,0.35)" },
  weak: { background: "rgba(255,200,80,0.10)", borderColor: "rgba(255,200,80,0.5)" },
  warning: { background: "rgba(201,83,47,0.10)", borderColor: "rgba(201,83,47,0.4)" },
};
const verdictLabel: Record<LabelClaim["verdict"], string> = {
  strong: "Strong",
  ok: "OK",
  weak: "Weak",
  warning: "Warning",
};

export default function LabelGuidePage() {
  const allCitationIds = Array.from(
    new Set(claims.flatMap((c) => c.citationIds ?? [])),
  );
  return (
    <PageShell>
      <EntityHero
        eyebrow="Consumer guide"
        title="How to read a seafood label"
        lede="Decode every common origin claim, certification and additive — and know what changes 1 July 2026."
        back={{ href: "/", label: "Home" }}
      />
      <section className="entity-body">
        <div className="entity-body-inner">
          <h2>The 30-second version</h2>
          <ol>
            <li><strong>Look for &lsquo;Product of Australia&rsquo;</strong> — strongest origin claim.</li>
            <li><strong>Beware &lsquo;Made in Australia from imported ingredients&rsquo;</strong> — seafood is imported.</li>
            <li><strong>Insist on AFNS species names</strong> (e.g. &lsquo;King George whiting&rsquo;, not just &lsquo;whiting&rsquo;).</li>
            <li><strong>Sulphite warnings</strong> usually signal imported prawns.</li>
            <li>From <strong>1 July 2026</strong>, restaurants and fishmongers must show country of origin on cooked seafood too. <Citation id="coolfi-standard" /></li>
          </ol>

          <h2 style={{ marginTop: "3rem" }}>Every claim, decoded</h2>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            {claims.map((c) => (
              <div
                key={c.claim}
                style={{
                  border: "1px solid",
                  borderRadius: 6,
                  padding: "0.8rem 1rem",
                  ...verdictStyle[c.verdict],
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  <strong>{c.claim}</strong>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      padding: "0.1rem 0.5rem",
                      borderRadius: 999,
                      border: "1px solid currentColor",
                    }}
                  >
                    {verdictLabel[c.verdict]}
                  </span>
                </div>
                <p style={{ margin: "0.4rem 0 0" }}>
                  {c.meaning}
                  {c.citationIds &&
                    c.citationIds.map((id) => <Citation key={id} id={id} />)}
                </p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "3rem" }}>What changes 1 July 2026</h2>
          <p>
            The Cool-Fi (Cooked Fish) Information Standard extends Country of Origin Labelling to
            cooked seafood at fishmongers, takeaways, restaurants and clubs. Operators must
            display whether each cooked seafood item is{" "}
            <strong>Australian</strong>, <strong>Imported</strong>, or <strong>Mixed</strong>.
            <Citation id="coolfi-standard" />
          </p>
          <p>
            See our <Link href="/operators">Operators guide</Link> for a compliance checklist
            and menu examples.
          </p>

          <h2 style={{ marginTop: "3rem" }}>Helpful next reads</h2>
          <ul>
            <li><Link href="/glossary">Seafood glossary</Link> — every label term defined.</li>
            <li><Link href="/myths">Myths vs Facts</Link> — common misconceptions corrected.</li>
            <li><Link href="/find-australian">Find Australian</Link> — fishmonger scripts and apps.</li>
            <li><Link href="/labelling">Labelling Standard 2025</Link> — packaged-food rules.</li>
          </ul>

          {allCitationIds.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>Sources</h2>
              <CitationList ids={allCitationIds} />
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}
