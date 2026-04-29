# Species coverage — gap & expansion plan

The current site profiles **25 species**, ~4% of Australia's ~600 edible
marine species. This file lists the next 25 to add (covering ~80% of
remaining national catch by tonnage) so a contributor can pick one and
ship a record without having to guess priorities.

> **Do not fabricate any of the deep-data fields** in `species/deep.ts`.
> Each new species needs a primary citation in `data/citations/records.ts`
> for its stockStatus, mercury, antibiotics, priceRange, regulations
> entries. The CI script `scripts/check-citations.ts` enforces this.

## Priority queue (ordered by AU search volume + national tonnage)

1. **Sand whiting** — *Sillago ciliata* — NSW/QLD beach-fished icon
2. **King George whiting** — *Sillaginodes punctatus* — SA/VIC/WA
3. **Mulloway** — *Argyrosomus japonicus* — NSW/SA estuarine sport-fish
4. **Garfish** — *Hyporhamphus melanochir* — SA/VIC/TAS, hauled-net
5. **Yellowtail Kingfish** — *Seriola lalandi* — NSW/SA aquaculture + wild
6. **Australian Bonito** — *Sarda australis* — NSW/QLD pelagic
7. **Trevally (silver / golden)** — *Pseudocaranx*
8. **Bream (yellowfin / black)** — *Acanthopagrus*
9. **Australian Bass** — *Macquaria novemaculeata* — eastern estuaries
10. **Morwong (Jackass / Crimson)** — *Nemadactylus*
11. **John Dory** — *Zeus faber* — NSW/VIC/TAS
12. **Redfish** — *Centroberyx affinis*
13. **Gurnard (red / latchet)** — *Chelidonichthys*
14. **Leatherjacket (ocean / yellow-finned)** — *Nelusetta ayraudi*
15. **Octopus (Maori / Common Sydney)** — *Octopus tetricus*
16. **Blue Swimmer Crab** — *Portunus armatus* — WA/QLD
17. **Mud Crab (giant / orange)** — *Scylla serrata*
18. **Mussels (Australian Blue)** — *Mytilus galloprovincialis* — TAS/SA/VIC
19. **Sea Urchin (long-spined / purple)** — *Centrostephanus rodgersii*
20. **Yabby / Marron / Redclaw** — freshwater crayfish trio
21. **Kingfish (Spanish, narrow-barred)** — *Scomberomorus commerson*
22. **Mahi Mahi** — *Coryphaena hippurus*
23. **Cobia** — *Rachycentron canadum*
24. **Sea Mullet** — *Mugil cephalus*
25. **Pipi / Cockle / Mussel** — surf-zone bivalves

## Workflow per new species

1. Add a `Species` record to `data/species/records.ts` with all required
   fields (slug, name, scientific, sourcing, summary, nutrition, tags,
   tagline, etc.). Match the depth of an existing record — see
   `barramundi` or `salmon` as the gold standard.
2. Add deep-data overlay to `data/species/deep.ts`. **Every numeric
   value MUST cite a `citationId`**. New citations go in
   `data/citations/records.ts`.
3. Add a comparison record in `data/comparisons/records.ts`. The slug
   convention is `<species>-aus-vs-imported`.
4. Optionally add a recipe in `data/content/recipes.ts`.
5. Run `npx tsx scripts/check-citations.ts` to verify all citation ids.
6. Run `npx next build` to confirm static generation.

## Recommended primary citations to seed first

If a new species has no primary citation, start from these government
sources (they cover almost every species in the queue above):

- **SAFS 2024** (`safs-2024`) — Status of Australian Fish Stocks
- **ABARES Fisheries Statistics 2023** (`abares-fisheries-stats`)
- **FSANZ Total Diet Study** (`fsanz-mercury-2024`)
- **GoodFish AMCS** (`goodfish-amcs`)

Each is already in `data/citations/records.ts`; just reference the id.
