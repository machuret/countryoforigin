/**
 * Content audit.
 *
 * Walks every data domain and produces audit/CONTENT_AUDIT.md — a per-record
 * worklist of completeness + sourcing flags. Read-only: never mutates data.
 *
 * Heuristics:
 *   - 🚨  hard problem (numeric claim, no source; or empty required slot)
 *   - 🔶  soft problem (editorial-only provenance; missing optional deep slot)
 *   - ✅  fully cited / complete
 *
 * Usage:  npx tsx scripts/audit-content.ts
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { species } from "../src/data/species/records";
import { speciesDeep } from "../src/data/species/deep";
import { industries } from "../src/data/industries/records";
import { industriesDeep } from "../src/data/industries/deep";
import { states } from "../src/data/areas/states";
import { regions } from "../src/data/areas/regions";
import { areasDeep } from "../src/data/areas/deep";
import { comparisons } from "../src/data/comparisons/records";
import { comparisonsDeep } from "../src/data/comparisons/deep";
import { recipes } from "../src/data/content/recipes";
import { faqs } from "../src/data/content/faq";
import { myths } from "../src/data/content/myths";

const OUT_DIR = join(__dirname, "..", "audit");
const OUT_FILE = join(OUT_DIR, "CONTENT_AUDIT.md");

type Row = Record<string, string | number | boolean>;

function check(b: boolean) {
  return b ? "✅" : "—";
}
function flag(level: "ok" | "soft" | "hard") {
  return level === "hard" ? "🚨" : level === "soft" ? "🔶" : "✅";
}

function table(headers: string[], rows: Row[]): string {
  const head = `| ${headers.join(" | ")} |`;
  const sep = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = rows
    .map(
      (r) =>
        `| ${headers
          .map((h) => String(r[h] ?? "—"))
          .join(" | ")} |`,
    )
    .join("\n");
  return [head, sep, body].join("\n");
}

/* ---------- SPECIES ---------- */

const speciesRows: Row[] = species.map((s) => {
  const deep = speciesDeep[s.slug] ?? {};
  const nutCount = s.nutrition?.length ?? 0;
  const cites = s.citationIds?.length ?? 0;
  const hasMercury = !!deep.mercury;
  const hasAnti = !!deep.antibiotics;
  const hasPrice = !!deep.priceRange;
  const hasProdHist = !!deep.productionHistory?.length;
  const hasLook = !!deep.lookAlikes?.length;
  const hasOps = !!deep.keyOperators?.length;
  const hasHist = !!deep.history?.length;
  const hasMedia = !!deep.mediaWatch?.length;
  const hasRegs = !!deep.regulations;
  const hasGear = !!deep.gear?.length;
  const hasSupply = !!deep.supplyChain?.length;
  const hasStock = !!deep.stockStatus;

  // FLAGS
  const flags: string[] = [];
  if (nutCount > 0 && cites === 0)
    flags.push("🚨 numeric nutrition w/ 0 citations");
  if (deep.mercury?.provenance === "editorial")
    flags.push("🔶 editorial mercury");
  if (deep.antibiotics?.provenance === "editorial")
    flags.push("🔶 editorial antibiotics");
  if (deep.priceRange?.provenance === "editorial")
    flags.push("🔶 editorial price");
  if (!hasMercury) flags.push("🔶 no mercury data");
  if (!hasStock) flags.push("🔶 no stock status");
  if (!hasProdHist) flags.push("🔶 no production history");
  if (!hasOps) flags.push("🔶 no key operators");
  if (!hasHist) flags.push("🔶 no history timeline");

  return {
    slug: `\`${s.slug}\``,
    nut: nutCount,
    cites,
    stock: check(hasStock),
    prodHist: check(hasProdHist),
    gear: check(hasGear),
    Hg: check(hasMercury),
    abx: check(hasAnti),
    price: check(hasPrice),
    supply: check(hasSupply),
    look: check(hasLook),
    regs: check(hasRegs),
    ops: check(hasOps),
    hist: check(hasHist),
    media: check(hasMedia),
    flags: flags.join("<br>") || "✅",
  };
});

/* ---------- INDUSTRIES ---------- */

const industriesRows: Row[] = industries.map((i) => {
  const deep = industriesDeep[i.slug] ?? {};
  const flags: string[] = [];
  if (!deep.workforce) flags.push("🔶 no workforce");
  if (!deep.economicImpact) flags.push("🔶 no economic impact");
  if (!deep.topProducers?.length) flags.push("🔶 no producers");
  if (!deep.associations?.length) flags.push("🔶 no associations");
  if (!deep.reports?.length) flags.push("🔶 no reports");
  if (!deep.timeline?.length) flags.push("🔶 no timeline");
  if (!deep.regulation) flags.push("🔶 no regulation");
  if (!deep.certifications?.length) flags.push("🔶 no certifications");
  if (!deep.challenges?.length) flags.push("🔶 no challenges");

  return {
    slug: `\`${i.slug}\``,
    workforce: check(!!deep.workforce),
    econ: check(!!deep.economicImpact),
    producers: deep.topProducers?.length ?? 0,
    associations: deep.associations?.length ?? 0,
    reports: deep.reports?.length ?? 0,
    timeline: deep.timeline?.length ?? 0,
    regs: check(!!deep.regulation),
    certs: deep.certifications?.length ?? 0,
    challenges: deep.challenges?.length ?? 0,
    flags: flags.join("<br>") || "✅",
  };
});

/* ---------- AREAS ---------- */

const allAreas = [...states, ...regions];
const areasRows: Row[] = allAreas.map((a) => {
  const deep = areasDeep[a.slug] ?? {};
  const flags: string[] = [];
  if (!deep.catchVolume) flags.push("🔶 no catch volume");
  if (!deep.topSpecies?.length) flags.push("🔶 no top species");
  if (!deep.fleet) flags.push("🔶 no fleet data");
  if (!deep.keyPorts?.length) flags.push("🔶 no ports");
  if (!deep.processors?.length) flags.push("🔶 no processors");
  if (!deep.history?.length) flags.push("🔶 no history");
  if (!deep.economicValue) flags.push("🔶 no economic value");
  if (!deep.tourismHooks?.length) flags.push("🔶 no tourism");

  return {
    slug: `\`${a.slug}\``,
    type: a.type,
    catch: check(!!deep.catchVolume),
    topSp: deep.topSpecies?.length ?? 0,
    fleet: check(!!deep.fleet),
    ports: deep.keyPorts?.length ?? 0,
    procs: deep.processors?.length ?? 0,
    hist: deep.history?.length ?? 0,
    econ: check(!!deep.economicValue),
    tour: deep.tourismHooks?.length ?? 0,
    flags: flags.join("<br>") || "✅",
  };
});

/* ---------- COMPARISONS ---------- */

const comparisonsRows: Row[] = comparisons.map((c) => {
  const deep = comparisonsDeep[c.slug] ?? {};
  const cites = c.citationIds?.length ?? 0;
  const flags: string[] = [];
  if (cites === 0) flags.push("🔶 no citationIds");
  if (deep.carbon && !deep.carbon.citationId)
    flags.push("🚨 carbon claim w/ no source");
  if (deep.jobs && !deep.jobs.citationId)
    flags.push("🚨 jobs claim w/ no source");
  if (deep.freshnessDays && !deep.freshnessDays.citationId)
    flags.push("🚨 freshness claim w/ no source");
  if (deep.welfare && !deep.welfare.citationId)
    flags.push("🔶 welfare unsourced");
  if (deep.mislabellingRisk && !deep.mislabellingRisk.citationId)
    flags.push("🔶 mislabelling unsourced");
  if (deep.traceability && !deep.traceability.citationId)
    flags.push("🔶 traceability unsourced");

  return {
    slug: `\`${c.slug}\``,
    metrics: c.metrics?.length ?? 0,
    carbon: check(!!deep.carbon),
    jobs: check(!!deep.jobs),
    fresh: check(!!deep.freshnessDays),
    welfare: check(!!deep.welfare),
    mislabel: check(!!deep.mislabellingRisk),
    trace: check(!!deep.traceability),
    cites,
    flags: flags.join("<br>") || "✅",
  };
});

/* ---------- RECIPES (editorial inventory) ---------- */

const recipesRows: Row[] = recipes.map((r) => {
  const flags: string[] = [];
  if (!r.tips?.length) flags.push("🔶 no tips");
  if (!r.pairing) flags.push("🔶 no pairing");
  if ((r.method?.length ?? 0) < 4) flags.push("🔶 thin method");
  if ((r.ingredients?.length ?? 0) < 5) flags.push("🔶 thin ingredients");
  return {
    slug: `\`${r.slug}\``,
    species: r.speciesSlug,
    diff: r.difficulty,
    ingr: r.ingredients?.length ?? 0,
    method: r.method?.length ?? 0,
    tips: r.tips?.length ?? 0,
    pairing: check(!!r.pairing),
    flags: flags.join("<br>") || "✅",
  };
});

/* ---------- FAQ + MYTHS ---------- */

const faqRows: Row[] = faqs.map((f, idx) => ({
  n: idx + 1,
  category: f.category,
  q: f.q.length > 70 ? f.q.slice(0, 67) + "…" : f.q,
  cites: f.citationIds?.length ?? 0,
  flags: (f.citationIds?.length ?? 0) === 0 ? "🚨 no citationIds" : "✅",
}));

const mythRows: Row[] = myths.map((m, idx) => ({
  n: idx + 1,
  category: m.category,
  myth: m.myth.length > 70 ? m.myth.slice(0, 67) + "…" : m.myth,
  cites: m.citationIds?.length ?? 0,
  flags: (m.citationIds?.length ?? 0) === 0 ? "🚨 no citationIds" : "✅",
}));

/* ---------- HEADLINE STATS ---------- */

const speciesHardFlags = speciesRows.filter((r) =>
  String(r.flags).includes("🚨"),
).length;
const compHardFlags = comparisonsRows.filter((r) =>
  String(r.flags).includes("🚨"),
).length;
const faqHardFlags = faqRows.filter((r) =>
  String(r.flags).includes("🚨"),
).length;
const mythHardFlags = mythRows.filter((r) =>
  String(r.flags).includes("🚨"),
).length;

/* ---------- WRITE ---------- */

const md = `# Content Audit

_Auto-generated by \`scripts/audit-content.ts\`. Do not edit by hand — re-run the script._

Symbols: ✅ present · — missing · 🔶 soft gap · 🚨 hard problem (unsourced numeric claim or empty required field).

## Headline

| Domain | Records | 🚨 Hard flags |
|---|---|---|
| Species | ${species.length} | ${speciesHardFlags} |
| Industries | ${industries.length} | — |
| Areas | ${allAreas.length} | — |
| Comparisons | ${comparisons.length} | ${compHardFlags} |
| Recipes | ${recipes.length} | — |
| FAQ | ${faqs.length} | ${faqHardFlags} |
| Myths | ${myths.length} | ${mythHardFlags} |

## Species (${species.length})

\`nut\` = nutrition rows · \`cites\` = top-level citationIds count.

${table(
  [
    "slug",
    "nut",
    "cites",
    "stock",
    "prodHist",
    "gear",
    "Hg",
    "abx",
    "price",
    "supply",
    "look",
    "regs",
    "ops",
    "hist",
    "media",
    "flags",
  ],
  speciesRows,
)}

## Industries (${industries.length})

${table(
  [
    "slug",
    "workforce",
    "econ",
    "producers",
    "associations",
    "reports",
    "timeline",
    "regs",
    "certs",
    "challenges",
    "flags",
  ],
  industriesRows,
)}

## Areas (${allAreas.length})

${table(
  [
    "slug",
    "type",
    "catch",
    "topSp",
    "fleet",
    "ports",
    "procs",
    "hist",
    "econ",
    "tour",
    "flags",
  ],
  areasRows,
)}

## Comparisons (${comparisons.length})

${table(
  [
    "slug",
    "metrics",
    "carbon",
    "jobs",
    "fresh",
    "welfare",
    "mislabel",
    "trace",
    "cites",
    "flags",
  ],
  comparisonsRows,
)}

## Recipes (${recipes.length})

${table(
  ["slug", "species", "diff", "ingr", "method", "tips", "pairing", "flags"],
  recipesRows,
)}

## FAQ (${faqs.length})

${table(["n", "category", "q", "cites", "flags"], faqRows)}

## Myths (${myths.length})

${table(["n", "category", "myth", "cites", "flags"], mythRows)}

---

_Hard-flag glossary_

- **species 🚨 numeric nutrition w/ 0 citations** — record asserts AUS vs imported nutrition values without citing a source.
- **comparison 🚨 carbon/jobs/freshness claim w/ no source** — quantitative comparison metric missing \`citationId\`.
- **faq/myth 🚨 no citationIds** — answer presents fact without source.
`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, md);

const totalHard =
  speciesHardFlags + compHardFlags + faqHardFlags + mythHardFlags;
console.log(`✓ Wrote ${OUT_FILE}`);
console.log(
  `  species=${species.length} (🚨${speciesHardFlags})  industries=${industries.length}  areas=${allAreas.length}  comparisons=${comparisons.length} (🚨${compHardFlags})  recipes=${recipes.length}  faq=${faqs.length} (🚨${faqHardFlags})  myths=${myths.length} (🚨${mythHardFlags})`,
);
console.log(`  total hard flags: ${totalHard}`);

// CI mode: fail when any hard flag is present.
if (process.argv.includes("--ci") && totalHard > 0) {
  console.error(
    `\n✗ Audit failed: ${totalHard} hard flag(s). See audit/CONTENT_AUDIT.md.`,
  );
  process.exit(1);
}
