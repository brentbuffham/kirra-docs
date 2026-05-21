# CSV Import

Kirra reads blast holes from CSV files using its **BlastHole CSV** family — a set of preset column layouts dispatched on column count. Choose your preset in the Import dialog or use **Custom CSV** if your file does not match a preset.

> *Source of truth: the Kirra wiki [BlastHole CSV Format](https://github.com/brentbuffham/Kirra/wiki/BlastHole-CSV-Format) page is generated from the parser in `src/fileIO/TextIO/BlastHoleCSVParser.js`.*

---

## How to Import a CSV

1. Open the **Left Sidenav** (☰ in the App Navigation Bar)
2. Under **File Management**, click **Import**
3. In the Import dialog, stay on the **Kirra** tab
4. Choose **Holes CSV / TXT (preset columns)** and pick the column-count preset from the dropdown (default **14 Column**)
5. Click **Open** and select your `.csv` file

![Import dialog — Kirra tab](../screenshots/filemanager1.png)
*The Holes CSV / TXT row shows the active column-count preset (14 in this screenshot).*

If your file does not match any preset, switch to **Custom CSV** on the **Blasts** tab — see [Custom CSV Import](#custom-csv-import) below.

---

## BlastHole CSV — eight preset variants

The parser dispatches strictly on column count. Pick the preset that matches your file exactly.

| Cols | Layout | Carries |
|------|--------|---------|
| **4** | `holeID, X, Y, Z` | Collar only — toe defaults to collar (dummy holes) |
| **7** | + `endX, endY, endZ` | Collar → toe vector |
| **9** | + `holeDiameter, holeType` | Diameter (mm) and hole type |
| **12** | + `fromHoleID, delay, color` | Tying / delay / colour (single entity) |
| **14** | `entityName, entityType, …` (rest as 12-col) | Multi-entity grouping — **recommended round-trip format** |
| **30** | 14 + grade, subdrill, bench, length, angle, bearing, time, measured-* | Full design + as-drilled data |
| **32** | 30 + `rowID, posID` | Row / position bookkeeping |
| **35** | 32 + `burden, spacing, connectorCurve` | **Complete** — every parsed field |

---

## 4-Column (Collar Only)

Creates collar-only holes — toe coordinates default to the collar position.

| Column | Field |
|--------|-------|
| 1 | `holeID` |
| 2 | `X` — collar Easting (m) |
| 3 | `Y` — collar Northing (m) |
| 4 | `Z` — collar Elevation (m) |

```
H001,477750.5,6771850.2,335.0
H002,477755.5,6771850.2,335.0
```

---

## 7-Column (Collar + Toe)

Full 3D hole geometry — collar plus toe.

| Column | Field |
|--------|-------|
| 1 | `holeID` |
| 2-4 | Collar `X / Y / Z` |
| 5-7 | Toe `endX / endY / endZ` |

```
H001,477750.5,6771850.2,335.0,477751.2,6771849.8,320.0
```

---

## 9-Column (+ Diameter + Type)

Adds hole diameter and hole-type classification.

| Column | Field |
|--------|-------|
| 1 | `holeID` |
| 2-4 | Collar `X / Y / Z` |
| 5-7 | Toe `endX / endY / endZ` |
| 8 | `holeDiameter` (mm) |
| 9 | `holeType` — e.g. `Production`, `Buffer`, `Presplit`, `Trim` |

---

## 12-Column (+ Timing + Colour)

Adds the timing connection back to its source hole, the delay, and a display colour.

| Column | Field |
|--------|-------|
| 1 | `holeID` |
| 2-4 | Collar `X / Y / Z` |
| 5-7 | Toe `endX / endY / endZ` |
| 8 | `holeDiameter` (mm) |
| 9 | `holeType` |
| 10 | `fromHoleID` — upstream hole in the timing chain |
| 11 | `delay` — milliseconds relative to `fromHoleID` |
| 12 | `color` — `#RRGGBB` hex, or a named colour like `red` / `blue` |

> **`fromHoleID` form:** in legacy single-entity files, just the holeID (e.g. `H001`). In multi-entity files (14-col), use `entityName:::holeID` (e.g. `Pattern_A:::H001`).

---

## 14-Column (Kirra Standard — Recommended)

Same fields as 12-col but prefixed with the entity name (blast pattern) and entity type. This is the recommended round-trip format.

| Column | Field |
|--------|-------|
| 1 | `entityName` — blast pattern name (e.g. `Pattern_A`) |
| 2 | `entityType` — `hole` for blast holes |
| 3 | `holeID` |
| 4-6 | Collar `X / Y / Z` |
| 7-9 | Toe `endX / endY / endZ` |
| 10 | `holeDiameter` (mm) |
| 11 | `holeType` |
| 12 | `fromHoleID` — use the `entityName:::holeID` form |
| 13 | `delay` (ms) |
| 14 | `color` |

```
Pattern_A,hole,H001,477750.5,6771850.2,335.0,477751.2,6771849.8,320.0,115,Production,,0,#FF0000
Pattern_A,hole,H002,477755.5,6771850.2,335.0,477756.2,6771849.8,320.0,115,Production,Pattern_A:::H001,25,#FF0000
```

---

## 30-Column (Full Design + As-Drilled)

Adds grade-point coordinates, subdrill, bench height, calculated length, hole orientation, hole timing, and the measured / as-drilled fields.

Columns 1-14 are the 14-col layout. Columns 15-30 add:

| Column | Field |
|--------|-------|
| 15-17 | Grade `X / Y / Z` |
| 18 | `subdrill` — **vertical** delta-Z (m), **not** along the hole vector |
| 19 | Bench height |
| 20 | Hole length (calculated) |
| 21 | `holeAngle` — angle from vertical (`0` = vertical) |
| 22 | `holeBearing` — azimuth clockwise from North |
| 23 | `timingDelayMilliseconds` — absolute fire time *[VERIFY: vs relative]* |
| 24-30 | Measured / as-drilled fields *[VERIFY: full per-column list — measured length, mass, comment, etc.]* |

> **`subdrill` convention:** Vertical delta-Z, not along-hole. Grade is computed from subdrill on read and re-derived on write.

> **`timingDelayMilliseconds` literals:** Accepts `na`, `n/a`, `null`, and `nan` (case-insensitive) and converts them to `NaN` — the harness-wire / null-connector convention.

---

## 32-Column (+ Row / Position)

30-column layout plus row and position bookkeeping.

| Column | Field |
|--------|-------|
| 31 | `rowID` |
| 32 | `posID` |

---

## 35-Column (Complete)

Full lossless export — every field the parser recognises.

| Column | Field |
|--------|-------|
| 33 | `burden` (m) |
| 34 | `spacing` (m) |
| 35 | `connectorCurve` |

For a full project save, prefer **KAP** — it carries every project state (charging, timing constructs, drawings, surfaces, layers) instead of just the holes.

---

## Header rows

A header row is **detected only when all of columns 3-5 (collar X/Y/Z) on the first row are non-numeric**. If your file has a header that doesn't match this rule, the parser may treat it as a data row.

If you have an unusual header layout, use **Custom CSV** instead — it does header-driven field mapping.

---

## Custom CSV Import

If your CSV does not match a preset (different column order, different field names, extra columns), use **Custom CSV** on the **Blasts** tab of the Import dialog.

![Import dialog — Blasts tab](../screenshots/filemanager2.png)
*Custom CSV is the first entry on the Blasts tab — "Pick your own column order, units, and custom fields".*

1. Left Sidenav → **Import**
2. **Blasts** tab → **Custom CSV** → click **Open**
3. Choose your `.csv` or `.txt` file
4. Map the columns to Kirra fields in the wizard *[VERIFY: full wizard walkthrough — screenshot needed]*
5. Confirm to import

Custom CSV uses **smart row detection** to find the first data row — it skips header rows and any non-numeric preamble.

---

## Round-trip fidelity

| Round trip | Preserves | Loses |
|------------|-----------|-------|
| 14 → import → 14 | name, ID, collar/toe, diameter, type, tying, delay, colour | grade point, subdrill, measured fields, row/pos |
| 12 → import → 12 | as 14, except `entityName` is auto-assigned `BLAST_<hex>` | grade, subdrill, measured, row/pos |
| 35 → import → 14 → 35 | re-derives grade from subdrill (small rounding drift) | `rowID`, `posID`, `burden`, `spacing`, `connectorCurve` |
| 35 → import → 35 | everything the parser knows about | nothing |

For lossless round-trip across Kirra sessions, prefer **35-col** export — or [KAP](#) for the full project.

---

## Edge cases and parser quirks

- **Strict column count.** A 9-col file is unambiguous, but a hand-crafted file with the wrong count will parse as the wrong variant. Stick to the documented variants.
- **Embedded commas in quoted strings.** The parser uses `String.split(",")` — not an RFC-4180 tokeniser. Embedded commas inside quoted strings are not safe. If you need that, use Custom CSV.
- **BOM.** UTF-8 BOM is stripped by the browser's `FileReader`.
- **Locale numbers.** `parseFloat()` only — comma-decimal locales (`12,5`) are **not** supported. Use period as the decimal separator.
- **Missing fields.** Sensible defaults: `holeDiameter = 0`, `holeType = "Undefined"`, `delay = 0`, `color = "red"`.

---

## Tips

- **Coordinate order** — Kirra expects Easting (X), Northing (Y), Elevation (Z). For other orders, use Custom CSV.
- **File encoding** — UTF-8 or ASCII. Other encodings may produce garbled text.
- **Decimal separator** — Period (`.`) only.
- **Units** — Coordinates in metres, diameter in millimetres, delays in milliseconds. Bare numbers, no unit suffixes.

---

## Related topics

- [CSV Export](../exporting/csv-export.md)
- [DXF Import](dxf.md)
- [Hole Properties Reference](../reference/hole-properties.md)
- [Coordinate System](../reference/coordinate-system.md)
- [Supported File Formats](../reference/supported-formats.md) — full import / export matrix
