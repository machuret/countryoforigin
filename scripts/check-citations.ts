/**
 * Citation integrity check.
 *
 * Walks src/data/*.ts looking for `citationIds: ["..."]` arrays and
 * `<Citation id="..." />` inline references in src/**, then verifies every
 * referenced id exists in citations.ts.
 *
 * Usage:  npx tsx scripts/check-citations.ts
 * Exits non-zero if any unknown id is referenced.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { citations } from "../src/data/citations";

const KNOWN = new Set(citations.map((c) => c.id));
const ROOT = join(__dirname, "..", "src");

const patterns: RegExp[] = [
  // citationIds: ["a", "b"]
  /citationIds\s*:\s*\[([^\]]+)\]/g,
  // <Citation id="foo" />
  /<Citation\s+id=["']([^"']+)["']/g,
  // id="cite-foo" link references
  /cite-([a-z0-9-]+)/g,
];

const issues: { file: string; id: string; line: number }[] = [];

function scanFile(path: string) {
  const src = readFileSync(path, "utf-8");
  const lines = src.split("\n");
  lines.forEach((line, i) => {
    patterns.forEach((rx) => {
      rx.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = rx.exec(line)) !== null) {
        // m[1] may be a list of quoted ids or a single id
        const raw = m[1];
        const ids = raw.includes('"') || raw.includes("'")
          ? raw.match(/["']([^"']+)["']/g)?.map((s) => s.slice(1, -1)) ?? []
          : [raw];
        ids.forEach((id) => {
          if (!id) return;
          if (!KNOWN.has(id)) {
            issues.push({ file: path.replace(ROOT, "src"), id, line: i + 1 });
          }
        });
      }
    });
  });
}

// Skip citations.ts itself — its docstring contains example ids.
const SKIP_FILES = new Set(["citations.ts"]);

function walk(dir: string) {
  readdirSync(dir).forEach((entry) => {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(tsx?|md)$/.test(entry) && !SKIP_FILES.has(entry)) scanFile(p);
  });
}

walk(ROOT);

if (issues.length > 0) {
  console.error(`\n✗ Found ${issues.length} unknown citation id(s):\n`);
  issues.forEach((i) => {
    console.error(`  ${i.file}:${i.line}  →  ${i.id}`);
  });
  console.error(`\nFix: add an entry to src/data/citations.ts or correct the id.\n`);
  process.exit(1);
}

console.log(`✓ All citation references valid (${KNOWN.size} ids known).`);
