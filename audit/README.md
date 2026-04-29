# Content Audit

This folder is the home of the **content validation worklist** for the site.

## Files

- **`CONTENT_AUDIT.md`** — auto-generated per-record completeness report. **Do not edit by hand.** Re-run `npm run audit` after any data change.

## Commands

```bash
npm run audit          # Regenerate CONTENT_AUDIT.md, print summary
npm run audit:ci       # Same, but exits non-zero if any 🚨 hard flag exists
npm run check:citations  # Validate every citationId against citations DB
```

## Symbols

- ✅ present / fully cited
- — missing (informational)
- 🔶 **soft gap** — record could be deeper, but no false claim is being made
- 🚨 **hard problem** — record asserts a numeric fact without a source, or is structurally invalid (e.g. a non-food product carrying nutrition data)

`audit:ci` only fails on 🚨.

## Worklist (Phase 2)

Walk records in this order, fixing 🚨 first:

1. **Comparisons** — 8 records claim freshness/carbon/jobs as numeric facts without `citationId`. Either add a citation or downgrade the claim to qualitative.
2. **FAQ** — 1 entry has no `citationIds` (Q4: Australian-only fishmongers list). Acceptable as editorial, but tag accordingly.
3. **Myths** — 2 entries have no `citationIds`. Same treatment as FAQ.
4. **Soft gaps** in species — 8 species missing deep data: rocklobster, western-rock-lobster, king-george-whiting, mahi-mahi, coral-trout, mud-crab, blue-swimmer-crab, spanner-crab.
5. **Areas** — 60 area records, most with no deep data. Triage by GVP / catch-tonnage importance.
6. **Industries** — 5 records, several missing workforce / economicImpact / topProducers / etc.

## Adding new content

When you add a record:

1. Cite numeric claims via `citationId` or `citationIds` referencing an entry in `src/data/citations/records.ts`.
2. Mark provenance on metric fields: `"primary"` (gov / peer-reviewed), `"estimate"` (extrapolated from primary), `"editorial"` (curator's best knowledge — show in UI as such).
3. For non-food products, set `productType: "non-food-byproduct"` and **omit** `nutrition`, `mercury`, `antibiotics`, `priceRange` unless an edible by-product has cited data.
4. Re-run `npm run audit` and confirm the record is ✅ or only 🔶.

## Schema discriminator

Species now carry an optional `productType` field:

| value | examples |
|---|---|
| `finfish` (default) | barramundi, snapper, salmon |
| `crustacean` | prawns, lobster, crab |
| `mollusc` | oysters, mussels, scallops, abalone |
| `cephalopod` | calamari, octopus |
| `non-food-byproduct` | pearls |

UI renders nutrition / contaminant blocks **only** when the record actually carries them. Non-food entries see a "Not a food product" callout instead.
