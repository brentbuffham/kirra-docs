# Kirra Formula Engine

Kirra uses the **`fx:`** prefix for formulas in three separate places. The syntax looks similar, but the **engines are not interchangeable** — a print-template function in a charge deck field returns errors or nonsense, and charging variables do not work in blast-group predicates.

This page is the hub: which engine to use, where to find the full reference for each, and how to get AI help writing formulas.

---

## Three engines (pick one)

| Engine | Where the formula lives | Returns | Full reference |
| --- | --- | --- | --- |
| **Charging** | Deck Builder — deck top/base/length/mass, primer depth, swap predicates | Number (or boolean for swaps) | [Deck Builder Formula Guide & Examples](../charging/Deck%20Builder%20Formula%20Guide%20Examples.html) |
| **Print template** | Cells in an XLSX print template (reports, maps, tables) | Text, number, or render token | [Print Formula Reference](../printing/pdf-print.md) |
| **Blast group** | **Assign Group** dialog — Formula field (hole selection) | Boolean (true = include hole) | [Blast Group Formulas](blast-group-formulas.md) |

### Quick routing

| You want to… | Engine | Example |
| --- | --- | --- |
| Size stemming or charge length per hole | Charging | `fx:holeLength - 3.5` |
| Limit charge mass from PPV or SDoB | Charging | `fx:massLength(ppvKG(…), 0.82)` |
| Put total drill metres on a report | Print template | `fx:round(sum(holeLength[i]), 1)` |
| Draw a map or legend on a sheet | Print template | `fx:mapView(r, hid, len)` |
| Tag all holes shorter than 2 m | Blast group | `fx:holeLength < 2` |
| Tag Production holes with burden ≥ 4.5 m | Blast group | `fx:holeType == "Production" && burden >= 4.5` |

### The `fx:` prefix

- **`fx:`** — use for anything that may be exported (CSV charging, templates). Excel will not treat it as a spreadsheet formula on round-trip.
- **`=`** — legacy in charging and blast group only. Avoid for new work; print templates should always use `fx:`.

### What formulas cannot do (any engine)

A formula is **one expression evaluated once** per context (per deck per hole for charging; per cell for print; per hole for blast group). There are **no loops** and **no goal-seek**. If you need “reduce charge until PPV is under 4 mm/s”, that is a design workflow, not a single `fx:` line.

Powder factor, burden, spacing, and volume are **not** charging-formula variables — you cannot drive a deck length directly from pattern PF today.

---

## Charging engine

Used in the [Deck Builder](../charging/deck-builder.md), charge rule templates, and Custom CSV charging columns.

**Typical fields:** deck top, base, length, mass (`m:` or `fx:` mass expression), primer depth, swap predicates (boolean).

**Power functions:** `massLength`, `sdobStem`, `sdobKg`, `ppvKG`, indexed deck/charge depths (`deckBase[2]`, `chargeDensity[N]`, etc.).

**Start here:** [Deck Builder Formula Guide & Examples](../charging/Deck%20Builder%20Formula%20Guide%20Examples.html) — variables, functions, PPV/SDoB patterns, CSV round-trip notes.

Related: [Charging Overview](../charging/overview.md), [Products CSV](../charging/products-csv.md).

---

## Print template engine

Used in **File → Print → Print from Template** and custom XLSX layouts.

**Typical uses:** blast metadata (`fx:holeCount`), per-hole tables (`fx:holeID[++]`), aggregations (`fx:sum(holeLength[i])`), grouping (`fx:groupTable(...)`), graphics (`fx:mapView`, `fx:legend`, `fx:northArrow`).

**Start here:** [Print Formula Reference](../printing/pdf-print.md) — complete variable and function list.

Related: [Print from Template (XLSX)](../printing/xlsx-templates.md), [Template Examples](../printing/template-examples.md).

---

## Blast group engine

Used when creating or refreshing a blast group in the **Assign Group** dialog. The formula must evaluate to **true** or **false** for each hole.

**Only** comparisons and logical operators on hole properties — **no** `sum()`, `mapView()`, `ppvKG()`, or other engine-specific functions.

**Start here:** [Blast Group Formulas](blast-group-formulas.md).

---

## AI help — Claude Formula Skill

If you use **Claude** (browser, Desktop, or Code), you can install the **Kirra Formula** skill so it routes requests to the correct engine and traces formulas against Kirra source conventions.

- **Install and verify:** [Formula Skill — Install & Use](formula-skill.md)
- **Download bundle:** [kirra-formula.zip](kirra-formula.zip) (for claude.ai / Desktop Skills upload)

The skill covers all three engines. It does not replace these reference pages — it helps you *write* formulas that match them.

---

## Related topics

- [Deck Builder](charging/deck-builder.md)
- [Charging Overview](charging/overview.md)
- [Print from Template (XLSX)](../printing/xlsx-templates.md)
- [FAQ](../reference/faq.md)

---

> **Kirra Licence v1.0** — Kirra Design is free for mining, quarrying, construction, and research use. Commercial software integration requires written permission from Brent Buffham. See [About](../about.md) for details.
