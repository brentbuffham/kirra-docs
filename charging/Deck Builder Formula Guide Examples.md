# Deck Builder Formula Guide & Examples

A complete reference for the Deck Builder formula engine — every variable, every function, every operator, with worked mining examples grouped by use case.

---

## Why formulas?

A blast rule applied to one hole becomes mechanical when applied to a pattern of 300 holes. Hole lengths vary, stand-off distances vary, ground conditions vary. Kirra's formula engine lets a single rule template re-evaluate itself per hole — so a stemming depth of "back off enough room for 25 kg of ANFO" or "stay under 4 mm/s at the monitor" becomes one formula that produces the right number for every hole automatically.

## Where formulas live

Formulas can be typed into any of these fields in the Deck Builder dialog:

- **Top Depth** of any deck
- **Base Depth** of any deck
- **Length** of any deck
- **Primer Depth** of any primer
- **Mass (kg)** of any deck *(after Plan B — currently number-only)*
- **Swap predicates** *(boolean-only, see "Two evaluators" below)*

## The `fx:` prefix

Every formula starts with one of two prefixes:

- **`fx:`** — the production form. Excel and Google Sheets won't try to evaluate it as a spreadsheet formula on CSV round-trip. **Always use `fx:` for anything that may be exported.**
- **`=`** — legacy / internal form. Still works but Excel will mangle it on CSV import. Avoid for new work.

## Two evaluators

Kirra has two formula evaluators that share the same syntax but differ in return type:

| Evaluator | Returns | Used for |
|---|---|---|
| `evaluateFormula` | **number** | Top/Base/Length/Mass/Primer Depth fields |
| `evaluateFormulaBoolean` | **boolean** | Swap predicates, conditional rule gates |

Boolean evaluator accepts string equality (e.g. `holeType == "Production"`); numeric evaluator coerces every variable to a number. Same operators, same indexed variables, same ternary syntax in both.

---

## Quick Reference

### Variables

| Group | Variable | Type | Notes |
|---|---|---|---|
| Hole geometry | `holeLength` | m | calculated length, collar→toe |
| | `holeDiameter` | mm | as drilled |
| | `holeX` | m | collar X (UTM easting) |
| | `holeY` | m | collar Y (UTM northing) |
| Charge totals | `chargeLength` | m | sum of all explosive (COUPLED/DECOUPLED) deck lengths |
| | `chargeTop` | m | top of shallowest charge deck |
| | `chargeBase` | m | base of deepest charge deck |
| | `firstChargeTop` | m | top of shallowest charge deck |
| Inert totals | `stemLength` | m | sum of stemming (INERT/Stemming) deck lengths |
| | `inertLength` | m | sum of all INERT deck lengths |
| | `airLength` | m | sum of INERT/Air deck lengths |
| | `waterLength` | m | sum of INERT/Water deck lengths |
| Indexed | `deckBase[N]` | m | base depth of deck N (1-based, 1 = deepest) |
| | `deckTop[N]` | m | top depth of deck N |
| | `deckLength[N]` | m | length of deck N |
| | `chargeBase[N]` | m | base depth of charge-only deck N |
| | `chargeTop[N]` | m | top depth of charge-only deck N |
| | `chargeLength[N]` | m | length of charge-only deck N |

Undefined indexed variables resolve to `0` — use `> 0` as the "does this deck exist?" test.

### Functions

| Function | Signature | Returns | Notes |
|---|---|---|---|
| `massLength` | `(kg, density)` or `(kg, "Product")` | m | Length needed to hold a given mass at the hole's current diameter |
| `sdobStem` | `(targetSDoB, density)` or `(targetSDoB, "Product")` | m | Stem length for a target Chiappetta Scaled Depth of Burial |
| `sdobKg` | `(targetSDoB, density)` or `(targetSDoB, "Product")` | kg | **Inverse of `sdobStem`** — deck mass that achieves the target SDoB at the current hole length and diameter |
| `ppvKG` | `(monitorX, monitorY, targetPPV, K, b)` | kg | Max instantaneous charge at this hole that keeps PPV under target at the monitor — uses site law `PPV = K · (D/√Q)^(−b)` |
| `Math.min` | `(a, b, ...)` | number | Standard JS Math |
| `Math.max` | `(a, b, ...)` | number | |
| `Math.abs` | `(x)` | number | |
| `Math.round` | `(x)` | number | |
| `Math.ceil` | `(x)` | number | |
| `Math.floor` | `(x)` | number | |
| `Math.sqrt` | `(x)` | number | |
| `Math.PI` | (constant) | number | π |

All of JavaScript's `Math` namespace is available. Common ones are listed above; `Math.sin`, `Math.log`, etc. work too.

### Operators

| Group | Operators | Notes |
|---|---|---|
| Arithmetic | `+ - * /` `( )` | Standard precedence |
| Comparison | `< > <= >= == !=` | `==` does loose equality; use `==` not `===` for strings |
| Logical | `&& \|\| !` | AND, OR, NOT |
| Ternary | `condition ? then : else` | Chains right-to-left — add parens beyond two levels |

---

## Patterns

Worked examples grouped by use case. Every example follows the format:

> Deck[N] Field = `fx:formula`
>
> **Description:** what the formula does and when to reach for it.

### Pattern 1 — Constants & anchors

#### Example: Fixed Stem Length

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base = `fx:1.5`

**Description:** Hard-coded 1.5 m stem from collar. Useful as a default deck before any rule runs. The `fx:` prefix isn't strictly required for a constant, but using it consistently keeps the field's input mode unambiguous.

#### Example: Anchor to toe

> Deck[N] Base = `fx:holeLength`

**Description:** Whatever deck you place this on, its base = the hole's measured/calculated length. Use on the bottom-most deck to ensure the charge reaches the toe regardless of as-drilled length variation.

#### Example: Anchor to collar

> Deck[1] Top = `0`

**Description:** Top of the top deck is always the collar. A literal `0` is fine — no formula needed.

---

### Pattern 2 — Stem sizing

#### Example: Fixed percentage stem

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base = `fx:holeLength*0.3`

**Description:** Stem occupies 30 % of hole length. Bottom 70 % is available for charge. Auto-scales with hole length so deeper holes get longer stems proportionally.

#### Example: Capped percentage stem

> Deck[1] Base = `fx:Math.max(Math.min(holeLength*0.3,4.0),1.5)`

**Description:** Stem is 30 % of hole, but never less than 1.5 m and never more than 4.0 m. `Math.min` caps the upper bound; `Math.max` enforces the lower. Production-safe form when hole-length variation is wide.

#### Example: SDoB-targeted stem

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base = `fx:sdobStem(1.5,"ANFO")`

**Description:** Stem length sized so the Chiappetta Scaled Depth of Burial equals 1.5 for an ANFO charge filling the remainder. Higher SDoB (≈1.5–2.0) = more confined, finer fragmentation, lower airblast. Lower SDoB (≈1.0–1.2) = more cratering, higher airblast. The function reads ANFO's density from the loaded products catalog.

#### Example: SDoB with rounding for stemming-truck increment

> Deck[1] Base = `fx:Math.ceil(sdobStem(1.5,1.15)*10)/10`

**Description:** Same as above but rounded **up** to the nearest 0.1 m. Use when stemming is loaded by a truck that can only deliver in 100 mm increments — rounding down would under-stem.

#### Example: Long-hole 25×D rule vs SDoB for short holes

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base = `fx:Math.ceil((holeLength>holeDiameter*35/1000?holeDiameter*25/1000:sdobStem(1.5,0.82))*10)/10`

**Description:** Combines two industry rules of thumb in one formula:

1. **For long holes** (length > 35 × diameter) — apply the **25 × diameter** stem rule (a common production heuristic for tall benches). At 115 mm hole this kicks in past 4.025 m and gives a 2.875 m stem.
2. **For shorter holes** — fall back to a Chiappetta SDoB target of 1.5 with ANFO density 0.82, because the diameter rule under-stems short holes where confinement matters more.
3. **Round up to the nearest 0.1 m** (`Math.ceil(... * 10) / 10`) so the stemming truck's 100 mm increment always meets or exceeds the design — never under-stems.

The `holeDiameter * 35 / 1000` converts mm to metres in-line, so the threshold scales with diameter automatically. Same for `holeDiameter * 25 / 1000`. This is a real production stem rule used at several Pilbara iron-ore operations — one formula replaces three pages of look-up tables.

---

### Pattern 3 — Charge-length from mass

#### Example: Fixed-mass charge by number

> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Length = `fx:massLength(25,0.82)`
> Deck[2] Base = `fx:holeLength`

**Description:** A 25 kg ANFO deck anchored to the toe. `massLength` converts kg to metres using the hole's current diameter and the supplied density. At 115 mm hole, 25 kg ≈ 2.93 m.

#### Example: Fixed-mass charge by product name

> Deck[2] Length = `fx:massLength(25,"ANFO")`

**Description:** Identical to the above but density is looked up from the product catalog. If site changes ANFO density spec from 0.82 → 0.85, the formula adapts automatically. **Always prefer the product-name form** unless you specifically need to lock the density.

#### Example: Powder-factor-driven charge length

> Deck[2] Length = `fx:massLength(holeLength*holeDiameter*holeDiameter*0.0008,"ANFO")`

**Description:** Reverse-calculates deck length for a target powder factor. The `holeLength * holeDiameter² * 0.0008` term approximates a 0.8 kg/m³ powder factor; substitute your target. Pair with a stem deck above and let the charge fit the remaining hole.

---

### Pattern 4 — PPV compliance (`ppvKG`)

The `ppvKG` function returns the maximum charge mass (kg) at this hole that keeps PPV at the monitor below the target, using the site law `PPV = K · (D/√Q)^(−b)`.

Below are **seven progressive variants** of the same compliance goal — same monitor `(36153.16, 156036.286)`, same target `4 mm/s`, same site constants `K=1140, b=1.6`. Increasing complexity from basic to production-grade.

#### Example: PPV Mass to be Compliant #1 (baseline two-deck)

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base = `fx:holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82))`
> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`

**Description:** At the monitor location calculate the stemming depth of the product to get 4 mm/s, link the top of the charge column to the bottom of the stemming deck, and the bottom of the charge to the `holeLength`. Canonical two-deck PPV-bounded design — every hole sizes its charge based on its own distance from the monitor.

#### Example: PPV Mass to be Compliant #2 (named-monitor form — Phase 2)

> Deck[1] Base = `fx:holeLength-(massLength(ppvMKG("MON-01",4.0),0.82))`

**Description:** Same as #1 but the monitor coordinates and `(K, b)` are stored on a named monitor entity `"MON-01"` in the project. `ppvMKG(monitorName, targetPPV)` is a **Phase 2 function** (not yet shipped). Until then, use #1's literal-coordinate form.

#### Example: PPV Mass to be Compliant #3 (minimum-stem safety floor)

> Deck[1] Base = `fx:Math.max(holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82)),2.0)`

**Description:** Same PPV math as #1, but the stem is never shorter than 2.0 m even if the PPV calculation allows a longer charge. `Math.max` wins when the PPV-limited stem would be below 2.0 m — safer for stem retention at the cost of a marginally more conservative charge.

#### Example: PPV Mass to be Compliant #4 (stem capped both ways)

> Deck[1] Base = `fx:Math.min(Math.max(holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82)),2.0),holeLength-1.0)`

**Description:** Combines #3's minimum-stem (2.0 m) with a maximum-stem cap of `holeLength − 1.0` so the charge column is always at least 1.0 m long. Guards against the edge case where a very deep hole + tight PPV target leaves less than 1 m of explosive — a charge too short to detonate reliably.

#### Example: PPV Mass to be Compliant #5 (density picked by hole depth)

> Deck[1] Base = `fx:holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),holeLength>8?1.15:0.82))`

**Description:** Ternary lives **inside** the density argument of `massLength`. Deep holes (>8 m) use emulsion density 1.15; shallow holes use ANFO at 0.82. Pair with a swap rule on Deck 2 to ensure the product matches the density used here.

#### Example: PPV Mass to be Compliant #6 ("if charge below exists" ternary)

> Deck[1] Base = `fx:deckBase[2]>0?deckBase[2]-0.3:holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82))`

**Description:** *"If a second charge deck exists, sit the stem 0.3 m above it. Otherwise, size the stem so the PPV-limited charge fits between the stem base and the toe."* Pattern: **if something exists and you want THAT number → use it; else use the formula number.** Uses `> 0` as the "does it exist?" test because undefined indexed variables resolve to `0`.

#### Example: PPV Mass to be Compliant #7 (nested ternary — full coverage)

> Deck[1] Base =
> ```
> fx:deckBase[2]>0
>   ? Math.max(deckBase[2]-0.3,2.0)
>   : (holeLength>8
>       ? Math.min(holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),1.15)),holeLength-1.0)
>       : Math.max(holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82)),1.5))
> ```

**Description:** Three-way branch:

1. **Second charge exists** → sit stem 0.3 m above it, but never closer than 2.0 m to the collar.
2. **No second charge, hole deep (>8 m)** → use emulsion (1.15), with stem capped to leave at least 1.0 m of charge.
3. **No second charge, hole shallow** → use ANFO (0.82), with stem at least 1.5 m.

Production-grade form — every edge case from #3–#6 collapsed into one formula. Once verified against site data it becomes a rule template applied across an entire pattern.

---

### Pattern 5 — Multi-deck chains (decked charges)

#### Example: Two charges separated by air deck

> Deck[1] Type = INERT (Stemming), Top = `0`, Base = `fx:holeLength*0.3`
> Deck[2] Type = COUPLED (ANFO), Top = `fx:deckBase[1]`, Base = `fx:deckBase[1]+2.0`
> Deck[3] Type = INERT (Air), Top = `fx:deckBase[2]`, Base = `fx:deckBase[2]+1.5`
> Deck[4] Type = COUPLED (ANFO), Top = `fx:deckBase[3]`, Base = `fx:holeLength`

**Description:** Stem (30 %) + upper charge (2.0 m fixed) + air gap (1.5 m) + lower charge (fills remainder to toe). Each deck's top references the previous deck's base — moving the stem ripples the whole chain. Used to limit peak particle velocity at depth while still loading the bottom of the hole.

#### Example: Charge plus water deck (wet holes)

> Deck[1] Type = INERT (Stemming), Top = `0`, Base = `fx:holeLength-chargeLength-1.0`
> Deck[2] Type = COUPLED (Emulsion), Top = `fx:deckBase[1]`, Base = `fx:holeLength-1.0`
> Deck[3] Type = INERT (Water), Top = `fx:deckBase[2]`, Base = `fx:holeLength`

**Description:** Water deck at the toe to dampen toe burden in wet holes. Note `chargeLength` in the stem formula self-references the sum of all charge decks — Kirra resolves this through the dependency graph as the layout is computed.

---

### Pattern 6 — Primer placement

#### Example: Primer 0.3 m above bottom charge

> Primer[1] Depth = `fx:chargeBase[1]-0.3`

**Description:** Standard primer position — 0.3 m up from the base of the deepest charge deck. Booster sits inside the explosive column, not at the actual toe (avoid contact with toe water / cuttings).

#### Example: Two primers in a decked charge

> Primer[1] Depth = `fx:chargeBase[1]-0.3`
> Primer[2] Depth = `fx:chargeBase[2]-0.3`

**Description:** One primer per charge deck. Primer[1] = bottom charge, Primer[2] = upper charge. Each automatically tracks its respective deck as the layout changes.

#### Example: Optional second primer (conditional)

> Primer[1] Depth = `fx:chargeBase[1]-0.3`
> Primer[2] Depth = `fx:chargeBase[2]>0?chargeBase[2]-0.3:0`

**Description:** Primer[2] only places if a second charge deck exists. Otherwise depth = 0, which the rule engine treats as "skip this primer". Use when a rule template should support both single-deck and decked-charge holes.

---

### Pattern 7 — Conditional / ternary

#### Example: Different stem rule by hole length

> Deck[1] Base = `fx:holeLength<5?holeLength*0.4:2.0`

**Description:** Short holes (<5 m) get a 40 % stem; longer holes get a fixed 2.0 m stem. The breakpoint formalises a rule-of-thumb that crews used to apply by eye.

#### Example: Different product density by hole condition

> Deck[2] Length = `fx:massLength(25,waterLength>0?1.25:0.82)`

**Description:** If the hole has any water deck above this charge (`waterLength > 0`), use emulsion density (1.25); otherwise ANFO (0.82). Combines the rule "wet holes need emulsion" with the mass-to-length conversion in one expression.

#### Example: Bench-floor vs PPV-bound (whichever wins)

> Deck[2] Top = `fx:Math.min(holeLength-massLength(ppvKG(36153.16,156036.286,4,1140,1.6),0.82),holeLength*0.5)`

**Description:** Charge top sits at whichever is shallower — the PPV-limited length, or 50 % of hole length. Useful when a regulatory PPV cap is sometimes more permissive than the production powder-factor target; this formula always picks the more restrictive limit.

---

### Pattern 8 — Boolean predicates (swap rules)

These use **`evaluateFormulaBoolean`** — they return true/false and gate swap actions in rule templates.

#### Example: Swap to water-resistant product if hole is wet

> Deck[2] Swap Condition = `holeType=="Wet"||waterLength>0`

**Description:** If the hole is tagged Wet OR has any measured water column, swap the deck product (configured in the rule template). String equality uses `==` (not `===`). Compatible with both `swap` template rules and `applyChargeRule` conditional branches.

#### Example: Swap based on hole depth class

> Deck[2] Swap Condition = `holeLength>10&&holeType=="Production"`

**Description:** Swap only fires when both conditions hold — deep AND production-class. Use `&&` (AND), `||` (OR), `!` (NOT) freely in predicates.

---

### Pattern 9 — Combining everything

#### Example: Production rule template (real-world)

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base = `fx:Math.max(sdobStem(1.5,"ANFO"),holeLength-(massLength(ppvKG(36153.16,156036.286,4,1140,1.6),"ANFO")))`
> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`
> Primer[1] Depth = `fx:chargeBase[1]-0.3`

**Description:** Stem is the **larger** of two competing requirements:

1. The Chiappetta SDoB target of 1.5 (fragmentation control)
2. The PPV-bounded stem that keeps the monitor under 4 mm/s (regulatory)

Whichever is more restrictive wins. The charge fills the remainder to the toe; primer is auto-placed 0.3 m above the toe in the explosive column. **One rule, every hole, full compliance.**

#### Example: SDoB-first with PPV fallback (ternary form)

> Deck[1] Type = INERT (Stemming)
> Deck[1] Top = `0`
> Deck[1] Base =
> ```
> fx:sdobStem(1.4,"ANFO") < holeLength-(massLength(ppvKG(36153.16,156036.286,4,1140,1.6),"ANFO"))
>   ? holeLength-(massLength(ppvKG(36153.16,156036.286,4,1140,1.6),"ANFO"))
>   : sdobStem(1.4,"ANFO")
> ```
> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`

**Description:** *"If the SDoB-1.4 stem is shorter than what PPV requires, the design isn't PPV-compliant — use the PPV-bounded stem instead. Otherwise the SDoB design is already conservative enough — use it."*

This is the ternary form of the `Math.max(...)` design above. Mathematically equivalent, but reads as a literal decision:

- **Compute both candidate stems.** SDoB target 1.4 gives one stem length; PPV-bounded mass gives another (via `holeLength − massLength(...)`).
- **Compare.** If the SDoB stem is shorter → it would leave more room for charge than PPV allows → not PPV-compliant → fall back to the PPV stem.
- **Else** → SDoB design is already PPV-safe → use SDoB.

Threshold `1.4` is the common minimum acceptable confinement for production benches — drop to `1.2` for casting designs where some cratering is desired; raise to `1.6` for noise-sensitive sites.

---

### Where do I put this formula? — Stem Base vs Mass field

A combined SDoB+PPV formula has two valid homes. Choose based on what you want to control directly:

| Field | What you control | When to use it | Example |
|---|---|---|---|
| **Stem Base** (Deck[1]) | Stem length directly | When site standards are written in terms of stem (mm or m) — most production rules | The SDoB-first example above |
| **Mass (kg)** (Deck[2]) | Charge mass directly | When site standards are written in terms of MIC (Maximum Instantaneous Charge in kg) — most regulatory PPV docs | See below |

**Stem Base form** (current workaround, works today):

> Deck[1] Base = `fx:Math.max(sdobStem(1.4,"ANFO"), holeLength-(massLength(ppvKG(...),"ANFO")))`
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`

Both `sdobStem(...)` and `holeLength - massLength(...)` return stem lengths in metres — they can be compared and `max`-ed directly. **No conversion needed**, which is why this is the canonical form.

**Mass field form** (cleaner after Mass-formula support ships):

> Deck[1] Type = INERT (Stemming), Top = `0`, Base = (any scaling — e.g. VR Variable)
> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`
> Deck[2] Mass = `fx:Math.min(ppvKG(...), sdobKg(1.4,"ANFO"))`

Where `sdobKg(targetSDoB, product)` would be a Phase 2 helper that returns the SDoB-compliant kg directly. **Until that helper exists, the Mass field can't naturally express SDoB constraints** — keep SDoB logic in the Stem Base, and put `fx:ppvKG(...)` alone in Mass if you want PPV-only mass control.

**Rule of thumb:**

- **One constraint?** Put it where the constraint is naturally expressed. PPV → Mass; SDoB → Stem Base.
- **Two constraints, both length-based (SDoB + a fixed-stem floor)?** Stem Base, with `Math.max(...)`.
- **Two constraints, one length + one mass (SDoB + PPV)?** Stem Base, convert PPV to a length via `holeLength - massLength(ppvKG(...), "Product")`.
- **Two constraints, both mass-based (PPV + powder factor cap)?** Mass field, with `Math.min(...)`.

The Pattern 9 examples above all sit in Stem Base because SDoB is fundamentally a stem-length rule. The Mass-field equivalents exist but require an inverse function (`sdobKg`) that's not yet in the engine.

---

## Common Pitfalls

**1. `holeLength(...)` is not a function call.**

❌ Wrong: `fx:holeLength(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82))`
This treats `holeLength` as a function and throws `TypeError: holeLength is not a function`.

✅ Correct: `fx:holeLength-massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82)`

**2. Case-sensitivity.** `holength` ≠ `holeLength`. Typos throw `ReferenceError` and the field stays blank.

**3. Indexed variables are 1-based, deepest first.** `deckBase[1]` is the deepest deck in the hole, `deckBase[2]` the next one up, etc. This matches the section-view ordering and is the opposite of insertion order in some rule engines.

**4. Undefined indexed variables resolve to `0`.** There is no `isDefined()` — use `> 0` as the existence test: `deckBase[2] > 0 ? ... : ...`.

**5. `ppvKG`'s first two args are the MONITOR, not the hole.** The function is bound to the hole's collar internally. Pass monitor UTM coordinates as `(x, y)`. If you want hole-to-hole modelling, pass another hole's coordinates.

**6. Use product names (`"ANFO"`) over literal densities (`0.82`).** Density spec changes at site happen — product-name lookups adapt; literal numbers don't.

**7. Ternaries chain right-to-left.** `a ? b : c ? d : e` parses as `a ? b : (c ? d : e)`. Add explicit parens for three-way branches — see PPV #7.

**8. The `fx:` prefix is CSV-safe; the `=` prefix is not.** Excel will treat `=…` as a formula on CSV import and may evaluate it incorrectly (or worse, as a security exploit vector). Always use `fx:` for anything that leaves Kirra.

**9. `chargeBase[N]` only counts COUPLED/DECOUPLED decks.** `deckBase[N]` counts everything including inert/stemming/air/water. Use the right one for what you mean.

**10. Outer parens are optional but harmless.** `fx:holeLength-massLength(...)` and `fx:holeLength-(massLength(...))` evaluate identically. Keep them if they help readability.

---

## Round-trip via CSV

When Custom CSV charging export/import is enabled, every formula string survives a round trip. A hole's `Deck[1] Base = "fx:holeLength-(massLength(ppvKG(36153.16,156036.286,4.0,1140,1.6),0.82))"` writes to the `deckBaseFormula[1]` column verbatim and reconstitutes on import. The evaluated metres land in the `deckBase[1]` column.

**Editing the evaluated number in CSV does not re-trigger the formula.** The imported number wins until the next "Apply Charge Rule" runs.

When the Mass field accepts formulas, PPV examples #1–#7 collapse to:

> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`
> Deck[2] Mass = `fx:ppvKG(36153.16,156036.286,4,1140,1.6)`

— no `massLength` wrapping, no arithmetic in the stem. The stem deck above auto-scales to fill the remainder when its Scaling Mode is set to VR (Variable). On product swap, the Mass cell shows the evaluated kg as a plain number so the user can edit it directly, or re-enter `fx:` to restore the formula.

---

## Pattern 10 — SDoB + PPV combined (Mass field with `sdobKg`)

The `sdobKg` function is the **inverse of `sdobStem`** — it returns the deck mass that achieves a target SDoB at the current hole length and diameter. Combined with `ppvKG` (which returns PPV-allowable mass), this gives the cleanest production-grade form: both constraints expressed as masses in one Mass-field expression.

#### Example: PPV-or-SDoB compliant — whichever is more restrictive

> Deck[1] Type = INERT (Stemming), Top = `0`, Base = (VR Variable scaling — auto-fills above charge)
> Deck[2] Type = COUPLED (ANFO)
> Deck[2] Top = `fx:deckBase[1]`
> Deck[2] Base = `fx:holeLength`
> Deck[2] Mass = `fx:Math.min(ppvKG(36153.16,156036.286,4,1140,1.6),sdobKg(1.4,"ANFO"))`

**Description:** *"Use the smaller of (a) the PPV-allowable mass for 4 mm/s at the monitor, or (b) the mass that gives an SDoB of 1.4 with ANFO."* Both constraints checked per-hole — every hole gets the more conservative limit automatically. The stem deck above auto-fills the remainder (set its Scaling Mode to VR, no formula needed).

#### Example: SDoB-only mass target

> Deck[2] Mass = `fx:sdobKg(1.5,"ANFO")`

**Description:** Sets the charge mass to whatever delivers a Chiappetta SDoB of 1.5 at this hole. Equivalent to the older Stem Base form `fx:sdobStem(1.5,"ANFO")` but expressed in kg instead of stem length. Use whichever side of the equation makes the design intent clearer.

#### Example: SDoB with truck-loadable rounding

> Deck[2] Mass = `fx:Math.round(sdobKg(1.5,"ANFO")/5)*5`

**Description:** Rounds the SDoB-target mass to the nearest 5 kg — useful when loading is hand-weighed or the truck dispenses in fixed increments. Use `Math.ceil(... / 5) * 5` if you must never under-charge.

---

## About Kirra-Design

Kirra is an open-source blasting pattern design application built by Brent Buffham as a gift to the open-cut blasting industry. The Deck Builder formula engine described here is one of several systems — alongside surface meshing, timing analysis, and harness-wire bake — that aim to put genuinely capable design tools into engineers' hands without six-figure license fees.

If this guide saved you time, consider supporting development at [buymeacoffee.com/kirradesign](https://buymeacoffee.com/kirradesign).

— *Brent Buffham, Kirra-Design*
