# Template Examples

This page walks through practical XLSX template examples that demonstrate Kirra's advanced print formula features. Each example is a focused template you can download, open in Excel, and use as a starting point for your own reports.

Download the example templates from the [examples/](examples/) folder.

---

## Table of Contents

- [Example 1 — Voronoi Metric Showcase](#example-1--voronoi-metric-showcase)
- [Example 2 — Hole Section Grid with Pagination](#example-2--hole-section-grid-with-pagination)
- [Example 3 — Multi-Map View Layout](#example-3--multi-map-view-layout)
- [Example 4 — Charging Report](#example-4--charging-report)
- [Example 5 — Hole Data Table](#example-5--hole-data-table)
- [Building Your Own Templates](#building-your-own-templates)

---

## Example 1 — Voronoi Metric Showcase

**File:** [examples/Voronoi-Showcase.xlsx](examples/Voronoi-Showcase.xlsx)

**Purpose:** Demonstrates all 10 Voronoi metric codes across three legend modes (default, fixed, min-max), each with a paired legend and map view.

### Layout

The sheet is a grid with 10 columns (one per Voronoi metric) and 6 rows (3 legend mode groups, each with a legend cell and a map view cell).

Each column pair looks like this:

| Cell | Formula | What it does |
|------|---------|--------------|
| Legend cell | `fx:legend(vor.pfd, v)` | Vertical legend for PF Designed |
| Map cell | `fx:mapView(r, 100, vor.pfd)` | Raster map at 100 DPI coloured by PF Designed |

### All 10 Metrics

| Code | Metric | Unit |
|------|--------|------|
| `vor.pfd` | Powder Factor Designed | kg/m3 |
| `vor.pfm` | Powder Factor Measured | kg/m3 |
| `vor.mms` | Measured Mass | kg |
| `vor.dms` | Design Mass | kg |
| `vor.vol` | Cell Volume | m3 |
| `vor.are` | Cell Area | m2 |
| `vor.mln` | Measured Length | m |
| `vor.dln` | Design Length | m |
| `vor.hft` | Hole Firing Time | ms |
| `vor.sdb` | Scaled Depth of Burial | m/kg^1/3 |

### Three Legend Modes

The grid repeats three times, one group per legend mode:

**Group 1 — Default (uses screen setting):**

```
fx:legend(vor.pfd, v)      fx:mapView(r, 100, vor.pfd)
fx:legend(vor.pfm, v)      fx:mapView(r, 100, vor.pfm)
...
```

**Group 2 — Fixed range (`.fx` suffix):**

```
fx:legend(vor.pfd.fx, v)   fx:mapView(r, 100, vor.pfd.fx)
fx:legend(vor.pfm.fx, v)   fx:mapView(r, 100, vor.pfm.fx)
...
```

Fixed range uses a predefined scale (e.g. PF always 0-3 kg/m3). Good for comparing across different blasts with a consistent colour scale.

**Group 3 — Min-max range (`.mm` suffix):**

```
fx:legend(vor.pfd.mm, v)   fx:mapView(r, 100, vor.pfd.mm)
fx:legend(vor.pfm.mm, v)   fx:mapView(r, 100, vor.pfm.mm)
...
```

Min-max range stretches the colour scale to fit the actual data range. Best for maximising visual contrast within a single blast.

### Key Takeaway

The `.fx` / `.mm` suffix on any Voronoi code controls whether the legend uses a fixed or data-driven range. This works identically in both `mapView()` and `legend()`.

---

## Example 2 — Hole Section Grid with Pagination

**File:** [examples/HoleSection-Grid.xlsx](examples/HoleSection-Grid.xlsx)

**Purpose:** Demonstrates `[+>]` grid pagination with hole section render tokens, filter directives, and math functions wrapping indexed fields.

### Layout

The sheet has a repeating band structure across columns. Each band contains three rows:

| Row | Column A | Column B ... |
|-----|----------|-------------|
| 1 | `fx:holeId[+>]` | `fx:holeId[+>]` |
| 2 | `fx:floor(holeAngle[+>])` | `fx:floor(holeAngle[+>])` |
| 3 (tall) | `fx:holeSection(entityName, holeId[+>])` | `fx:holeSection(entityName, holeId[+>])` |

At the top of the sheet, a filter directive limits which holes appear:

```
fx:filter(holeAngle > 0)
```

### How It Works

**Step 1 — Filter:** `fx:filter(holeAngle > 0)` pre-filters the visible holes to only those with an angle greater than zero (angled holes only). This filter applies to all `[+>]` and `[++]` cells on the sheet.

**Step 2 — Grid Increment `[+>]`:** Unlike `[++]` which increments per row, `[+>]` increments per cell, filling left-to-right then top-to-bottom. If there are 10 columns and 5 band-rows, that's 50 holes per page.

**Step 3 — Math on Indexed Fields:** `fx:floor(holeAngle[+>])` demonstrates wrapping an indexed field reference inside a math function. The `[+>]` resolves to a hole index first, then `floor()` rounds down the angle value. Any function can wrap an indexed field this way:

```
fx:round(holeLength[+>], 1)
fx:upper(holeType[+>])
fx:if(holeAngle[+>] > 10, "ANGLED", "VERTICAL")
```

**Step 4 — Render Tokens with Dynamic Arguments:** `fx:holeSection(entityName, holeId[+>])` passes the scalar `entityName` variable and a dynamically indexed `holeId` value as arguments to the `holeSection` render token. The merged cell area determines the cross-section image size.

**Step 5 — Auto-Pagination:** When there are more filtered holes than grid cells on the sheet, Kirra automatically creates additional pages. Each page continues from where the previous one left off.

### Formulas Used

| Formula | Feature Demonstrated |
|---------|---------------------|
| `fx:filter(holeAngle > 0)` | Filter directive with comparison operator |
| `fx:holeId[+>]` | Grid-increment indexed access |
| `fx:floor(holeAngle[+>])` | Math function wrapping indexed field |
| `fx:holeSection(entityName, holeId[+>])` | Render token with scalar + indexed arguments |

---

## Example 3 — Multi-Map View Layout

**File:** [examples/MultiMap-Views.xlsx](examples/MultiMap-Views.xlsx)

**Purpose:** Demonstrates multiple map views on a single page, each with different display codes showing different information.

### Layout

The sheet is divided into four quadrants, each containing a single large merged cell with a `mapView` formula:

| | Left Half | Right Half |
|---|-----------|------------|
| **Top** | `fx:mapView(v, 10, hid, len)` | `fx:mapView(v, 5, vor.are)` |
| **Bottom** | `fx:mapView(v, 8, tie, htm)` | `fx:mapView(v, 12, dia, ang)` |

### What Each Quadrant Shows

**Top-Left — Hole IDs and Lengths:**

```
fx:mapView(v, 10, hid, len)
```

- `v` = vector rendering (crisp scalable lines)
- `10` = 10pt label font size
- `hid` = show hole ID labels
- `len` = show hole length values

**Top-Right — Voronoi Cell Area:**

```
fx:mapView(v, 5, vor.are)
```

- `v` = vector rendering
- `5` = 5pt font (smaller labels for dense patterns)
- `vor.are` = Voronoi cells coloured by cell area (m2)

**Bottom-Left — Connectors and Initiation Time:**

```
fx:mapView(v, 8, tie, htm)
```

- `v` = vector rendering
- `8` = 8pt font
- `tie` = draw connector lines between holes
- `htm` = show hole initiation (firing) time labels

**Bottom-Right — Diameter and Angle:**

```
fx:mapView(v, 12, dia, ang)
```

- `v` = vector rendering
- `12` = 12pt font (larger for readability)
- `dia` = show hole diameter values
- `ang` = show hole angle values

### Combining Display Codes

You can mix any number of display codes in a single `mapView`. Some powerful combinations:

| Formula | Shows |
|---------|-------|
| `fx:mapView(v, 10, hid, len, tie, del)` | IDs, lengths, connectors, delay values |
| `fx:mapView(r, hid, chg, hkg)` | Raster with IDs, charge columns, mass per hole |
| `fx:mapView(v, 8, hid, chg, vor.sdb.mm)` | IDs, charges, and Voronoi SDoB with min-max legend |
| `fx:mapView(r, 300, hid, len, dia, ang, sub)` | High-DPI raster with full geometry labels |
| `fx:mapView(v, 10, tie, del, htm, fmv)` | Timing-focused: connectors, delays, initiation time, first movement |

### Display Code Quick Reference

**Hole labels:** `hid` `len` `dia` `ang` `ber` `dip` `sub` `typ` `rap` `xlc` `ylc` `zlc`

**Timing:** `tie` `del` `htm` `dtm` `fmv`

**Charging:** `chg` `hkg` `dkg`

**Measured:** `mln` `mms` `mcm` `mwt`

**Surfaces:** `con` `slp` `rel` `kpt`

**Voronoi:** `vor.pfd` `vor.pfm` `vor.dms` `vor.mms` `vor.vol` `vor.are` `vor.dln` `vor.mln` `vor.hft` `vor.sdb` (each with optional `.fx` or `.mm` suffix)

See [Print Formula Reference](pdf-print.md#display-codes-for-mapview-and-legend) for the full table with descriptions.

---

## Example 4 — Charging Report

**File:** [examples/Charging-Report.xlsx](examples/Charging-Report.xlsx)

**Purpose:** Demonstrates charging summary functions, product breakdowns, and grouped statistics for blast documentation.

### Sheet 1 — Summary Page

| Cell | Formula | Description |
|------|---------|-------------|
| B2 | `fx:blastName` | Blast name |
| B3 | `fx:designer` | Designer |
| B4 | `fx:dateformat("DD/MM/YYYY")` | Formatted date |
| B5 | `fx:holeCount & " holes"` | Hole count with label |
| B6 | `fx:round(drillMetres, 1) & "m"` | Total drill metres |
| B7 | `fx:round(sum(totalMass[i]), 1) & " kg"` | Total explosive mass |
| B8 | `fx:fixed(powderFactor, 2) & " kg/m\u00B3"` | Overall powder factor |
| B10 | `fx:productList("\n")` | All products with total mass (newline-separated) |
| B12 | `fx:connectorList("\n")` | All connector delays with counts |

### Sheet 1 — Grouped Statistics

| Cell | Formula | Description |
|------|---------|-------------|
| D2 | `fx:groupTable(holeType[i], "{key}: {count} holes, {sum:holeLength}m drilled", "\n")` | Per-type summary |
| D4 | `fx:groupTable(entityName[i], "{key}: {count} holes, PF={avg:powderFactor} kg/m\u00B3", "\n")` | Per-entity summary |
| D6 | `fx:sortCount(holeType[i], "\n")` | Hole type frequency |

### Sheet 1 — Pre-Built Summaries

| Cell | Formula | Description |
|------|---------|-------------|
| F2 | `fx:blastSummary()` | Full geometry summary (entity/type grouped) |
| F20 | `fx:chargeSummary()` | Full charging summary (entity/type grouped) |

### Sheet 2 — Per-Hole Charging Table

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| `fx:holeID[++]` | `fx:round(holeLength[++], 1)` | `fx:round(totalMass[++], 1)` | `fx:round(chargeLength[++], 1)` | `fx:round(firstChargeTop[++], 1)` | `fx:productName[++]` |

Header row (not formulas): Hole ID, Length (m), Mass (kg), Charge (m), Stem (m), Product

### Formulas Used

| Formula | Feature Demonstrated |
|---------|---------------------|
| `fx:blastSummary()` | Pre-built multi-line geometry summary |
| `fx:chargeSummary()` | Pre-built multi-line charging summary |
| `fx:productList("\n")` | Product mass breakdown |
| `fx:connectorList("\n")` | Connector delay breakdown |
| `fx:groupTable(...)` | Grouped statistics with inline format tokens |
| `fx:totalMass[++]` | Per-hole charging field in auto-increment table |
| `fx:productName[++]` | Per-hole product name in auto-increment table |

---

## Example 5 — Hole Data Table

**File:** [examples/HoleData-Table.xlsx](examples/HoleData-Table.xlsx)

**Purpose:** Demonstrates per-hole tabular output with `[++]` auto-increment, aggregation functions, conditional formatting, and filtered tables.

### Sheet 1 — Full Hole Table

**Header row (plain text):**

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Hole ID | Length (m) | Diameter (mm) | Angle (deg) | Bearing (deg) | Collar Z (m) | Toe Z (m) | Type |

**Data rows (formulas):**

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| `fx:holeID[++]` | `fx:round(holeLength[++],1)` | `fx:holeDiameter[++]` | `fx:round(holeAngle[++],1)` | `fx:round(holeBearing[++],0)` | `fx:round(startZ[++],2)` | `fx:round(endZ[++],2)` | `fx:holeType[++]` |

Rows beyond the hole count are automatically hidden.

### Sheet 1 — Footer Aggregations

Below the data rows, add summary cells:

| Cell | Formula | Description |
|------|---------|-------------|
| A-footer | `fx:"Total: " & count(holeID[i]) & " holes"` | Total count |
| B-footer | `fx:round(sum(holeLength[i]), 1)` | Total drill metres |
| C-footer | `fx:round(avg(holeDiameter[i]), 0)` | Average diameter |
| D-footer | `fx:round(avg(holeAngle[i]), 1)` | Average angle |
| F-footer | `fx:round(min(startZ[i]), 2) & " - " & round(max(startZ[i]), 2)` | Collar Z range |
| G-footer | `fx:round(min(endZ[i]), 2) & " - " & round(max(endZ[i]), 2)` | Toe Z range |
| H-footer | `fx:sortCount(holeType[i], ", ")` | Type frequency count |

### Sheet 2 — Filtered Production Holes

Same table structure but with a filter at the top:

```
fx:filter(holeType == "Production")
```

Only Production holes appear. The footer aggregations automatically reflect the filtered subset.

### Sheet 3 — Measured Data Table

| A | B | C | D |
|---|---|---|---|
| `fx:holeID[++]` | `fx:round(measuredLength[++], 1)` | `fx:round(measuredMass[++], 1)` | `fx:measuredComment[++]` |

### Formulas Used

| Formula | Feature Demonstrated |
|---------|---------------------|
| `fx:holeID[++]` | Per-row auto-increment |
| `fx:round(holeLength[++], 1)` | Math wrapping auto-increment field |
| `fx:filter(holeType == "Production")` | Filter directive for table subset |
| `fx:sum(holeLength[i])` | Aggregation in footer |
| `fx:sortCount(holeType[i], ", ")` | Frequency count in footer |
| `fx:min(startZ[i]) & " - " & max(startZ[i])` | Concatenated range with aggregations |

---

## Building Your Own Templates

### Step-by-Step

1. Open Excel (or any spreadsheet editor)
2. Design your layout — use merged cells for map views, borders for tables, standard formatting for headers
3. Type `fx:` formulas into cells where you want dynamic data
4. Save as `.xlsx`
5. In Kirra: **File > Print > Print from Template** > Import your XLSX
6. Generate PDF or populated XLSX output

### Tips

- **Merged cells for render tokens:** `mapView`, `legend`, `holeSection`, `sectionView`, `northArrow`, `scale`, `logo`, and `qrcode` all render into the merged cell area. Make the merge the size you want the image.
- **Font size in mapView:** The second argument to `mapView(v, N)` controls label font size in points. Use smaller sizes (5-8pt) for dense patterns, larger (10-14pt) for sparse patterns or small paper.
- **DPI for raster:** `mapView(r, 300)` sets the raster DPI. Higher DPI = sharper image but slower generation. Default is 200.
- **Multiple mapViews per page:** Each mapView renders independently. Use different display code combinations to show different aspects of the same blast on one page.
- **Test with the Kirra Inbuilt first:** The built-in template uses the same engine. Verify your data loads correctly before building complex custom templates.

### Common Patterns

**Title block + map + statistics + legend:**

```
Sheet 1:
  Row 1-3: fx:blastName, fx:designer, fx:dateformat("DD/MM/YYYY")
  Row 4-25 (merged): fx:mapView(v, 10, hid, len, tie, del)
  Row 26 (merged): fx:legend(vor.pfd.fx, h)
  Row 27: fx:round(drillMetres, 1) & "m total"
  Row 28: fx:fixed(powderFactor, 2) & " kg/m³"
  Sidebar (merged): fx:northArrow
  Sidebar (merged): fx:scale
```

**Per-hole data with auto-pagination:**

```
Sheet 1:
  Row 1: Headers (plain text)
  Row 2+: fx:holeID[++], fx:round(holeLength[++],1), fx:holeDiameter[++], ...
  Last rows: fx:sum(holeLength[i]), fx:avg(holeDiameter[i]), ...
```

**Comparison maps (same blast, different views):**

```
Sheet 1: fx:mapView(v, 10, hid, len)           — Design view
Sheet 2: fx:mapView(r, hid, chg, hkg)          — Charging view
Sheet 3: fx:mapView(r, hid, vor.pfd.fx)        — PF analysis view
Sheet 4: fx:mapView(v, 8, tie, del, htm)        — Timing view
```

---

## Related Topics

- [Print Formula Reference](pdf-print.md) — Complete list of all variables, functions, display codes, and render tokens
- [Print from Template (XLSX)](xlsx-templates.md) — Template workflow, output formats, and the Kirra Inbuilt template
