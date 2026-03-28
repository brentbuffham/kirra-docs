# Print Formula Reference

Kirra's XLSX template system uses `fx:` prefixed formulas to populate cells with blast data, statistics, graphics, and calculated values. This page is the complete reference for every formula, variable, display code, and render token available.

All formulas are entered in XLSX cells with the `fx:` prefix. Standard Excel formulas (`=`) are preserved in XLSX output but ignored in PDF output.

---

## Table of Contents

- [Scalar Variables](#scalar-variables)
- [Per-Hole Iterated Fields](#per-hole-iterated-fields)
- [Field Aliases](#field-aliases)
- [Indexed Access](#indexed-access)
- [Filter Directive](#filter-directive)
- [Aggregation Functions](#aggregation-functions)
- [Group Functions](#group-functions)
- [Math and Rounding Functions](#math-and-rounding-functions)
- [String Functions](#string-functions)
- [Date Functions](#date-functions)
- [Conditional and Logic Functions](#conditional-and-logic-functions)
- [Connector Functions](#connector-functions)
- [Product and Charging Functions](#product-and-charging-functions)
- [Summary Functions](#summary-functions)
- [Render Tokens](#render-tokens)
- [Display Codes for mapView and legend](#display-codes-for-mapview-and-legend)
- [Voronoi Metric Codes](#voronoi-metric-codes)
- [Legend Codes](#legend-codes)
- [Worked Examples](#worked-examples)

---

## Scalar Variables

Direct values that resolve without iteration. Use them on their own or inside expressions.

| Formula | Description | Example Result |
|---------|-------------|----------------|
| `fx:blastName` | User-entered blast name | `Shot 42` |
| `fx:designer` | User-entered designer name | `J. Smith` |
| `fx:date` | Current date (dd/mm/yyyy) | `28/03/2026` |
| `fx:time` | Current time (hh:mm:ss) | `14:30:00` |
| `fx:datetime` | Current date and time | `28/03/2026, 14:30:00` |
| `fx:paperSize` | Paper size | `A3` |
| `fx:orientation` | Page orientation | `landscape` |
| `fx:printScale` | Calculated print scale | `500` |
| `fx:holeCount` | Total visible holes | `142` |
| `fx:drillMetres` | Total drill metres (sum of all hole lengths) | `1927.3` |
| `fx:totalMass` | Total explosive mass (kg) | `4250.0` |
| `fx:totalVolume` | Total volume (m3) | `12500.0` |
| `fx:totalSurfaceArea` | Total surface area (m2) | `8400.0` |
| `fx:powderFactor` | Overall powder factor (kg/m3) | `0.34` |
| `fx:entityCount` | Number of entities | `2` |
| `fx:entityNames` | Comma-separated entity names | `Pattern_01, Pattern_02` |
| `fx:entityName` | First entity name | `Pattern_01` |
| `fx:surfaceCount` | Number of loaded surfaces | `3` |
| `fx:kadCount` | Number of loaded KAD drawings | `1` |

### Per-Entity Scalar Variables

When multiple entities are loaded, per-entity statistics are available using the entity name as a prefix. Non-alphanumeric characters in entity names are replaced with `_`.

| Formula Pattern | Description |
|-----------------|-------------|
| `fx:Pattern_01_holeCount` | Hole count for entity Pattern_01 |
| `fx:Pattern_01_drillMetres` | Drill metres for entity Pattern_01 |
| `fx:Pattern_01_expMass` | Explosive mass for entity Pattern_01 |
| `fx:Pattern_01_volume` | Volume for entity Pattern_01 |
| `fx:Pattern_01_surfaceArea` | Surface area for entity Pattern_01 |
| `fx:Pattern_01_burden` | Burden for entity Pattern_01 |
| `fx:Pattern_01_spacing` | Spacing for entity Pattern_01 |
| `fx:Pattern_01_minFiringTime` | Minimum firing time for entity Pattern_01 |
| `fx:Pattern_01_maxFiringTime` | Maximum firing time for entity Pattern_01 |

---

## Per-Hole Iterated Fields

Fields that reference individual hole properties. Use with `[i]` for aggregation, `[N]` for specific holes, or `[++]`/`[--]`/`[+>]` for auto-incrementing tables.

### Hole Geometry

| Field | Description | Unit |
|-------|-------------|------|
| `holeID[i]` | Hole ID | text |
| `entityName[i]` | Entity name per hole | text |
| `holeLength[i]` | Hole length (collar to toe) | m |
| `holeDiameter[i]` | Hole diameter | mm |
| `holeAngle[i]` | Hole angle from vertical (0 = vertical) | deg |
| `holeBearing[i]` | Hole bearing from north (clockwise) | deg |
| `benchHeight[i]` | Bench height (collar Z to grade Z, absolute) | m |
| `burden[i]` | Burden | m |
| `spacing[i]` | Spacing | m |
| `subdrillAmount[i]` | Subdrill amount (grade Z to toe Z, deltaZ) | m |
| `subdrillLength[i]` | Subdrill length (grade XYZ to toe XYZ, vector distance) | m |
| `holeType[i]` | Hole type (Production, Presplit, Buffer, etc.) | text |

### Collar / Toe / Grade Coordinates

| Field | Description | Unit |
|-------|-------------|------|
| `startX[i]` | Collar X (easting) | m |
| `startY[i]` | Collar Y (northing) | m |
| `startZ[i]` | Collar Z (elevation) | m |
| `endX[i]` | Toe X (easting) | m |
| `endY[i]` | Toe Y (northing) | m |
| `endZ[i]` | Toe Z (elevation) | m |
| `gradeX[i]` | Grade X (easting) | m |
| `gradeY[i]` | Grade Y (northing) | m |
| `gradeZ[i]` | Grade Z (elevation) | m |

### Timing and Connectivity

| Field | Description | Unit |
|-------|-------------|------|
| `timingDelay[i]` | Timing delay | ms |
| `holeTime[i]` | Timing delay (alias) | ms |
| `fromHoleID[i]` | Connected-from hole ID | text |
| `connectorCurve[i]` | Connector curve value | number |
| `rowID[i]` | Row ID | text |
| `posID[i]` | Position ID | text |
| `color[i]` | Hole colour hex code | text |
| `visible[i]` | Hole visibility flag | boolean |

### Charging Fields

These fields are derived from the loaded charging data (`window.loadedCharging`), not directly from hole properties.

| Field | Description | Unit |
|-------|-------------|------|
| `totalMass[i]` | Total explosive mass per hole | kg |
| `chargeLength[i]` | Total explosive column length per hole | m |
| `firstChargeTop[i]` | Depth from collar to top of first explosive deck (geometric uncharged zone) | m |
| `stemLength[i]` | Stemming length (sum of Stemming/StemGel/DrillCuttings deck lengths only) | m |
| `deckCount[i]` | Total deck count per hole | count |
| `explosiveDeckCount[i]` | Explosive deck count per hole (COUPLED + DECOUPLED) | count |
| `primerCount[i]` | Primer count per hole | count |
| `powderFactor[i]` | Powder factor per hole: mass / (burden x spacing x benchHeight) | kg/m3 |
| `productName[i]` | Name of the first (primary) explosive product | text |
| `airLength[i]` | Air deck total length per hole | m |
| `inertLength[i]` | Total inert deck length per hole (all non-explosive decks) | m |
| `waterLength[i]` | Water deck total length per hole | m |
| `spacerCount[i]` | Count of spacer decks per hole | count |

> **Note:** `firstChargeTop[i]` and `stemLength[i]` are different values.
> - `firstChargeTop` = depth from collar to top of first explosive (includes air, water, spacers above the charge).
> - `stemLength` = sum of physical stemming material only (Stemming, StemGel, DrillCuttings deck lengths).

### Measured Fields

| Field | Description | Unit |
|-------|-------------|------|
| `measuredMass[i]` | Measured mass | kg |
| `measuredLength[i]` | Measured length | m |
| `measuredComment[i]` | Measured comment | text |

---

## Field Aliases

Many fields have short aliases and long aliases that resolve to the same hole property. Use whichever is clearest for your template.

| Short Alias | Long Alias | Resolves To |
|-------------|------------|-------------|
| `holeLength` | `holeLengthCalculated` | `holeLengthCalculated` |
| `startX` | `startXLocation` | `startXLocation` |
| `startY` | `startYLocation` | `startYLocation` |
| `startZ` | `startZLocation` | `startZLocation` |
| `endX` | `endXLocation` | `endXLocation` |
| `endY` | `endYLocation` | `endYLocation` |
| `endZ` | `endZLocation` | `endZLocation` |
| `gradeX` | `gradeXLocation` | `gradeXLocation` |
| `gradeY` | `gradeYLocation` | `gradeYLocation` |
| `gradeZ` | `gradeZLocation` | `gradeZLocation` |
| `diameter` | `holeDiameter` | `holeDiameter` |
| `angle` | `holeAngle` | `holeAngle` |
| `bearing` | `holeBearing` | `holeBearing` |
| `timingDelay` | `timingDelayMilliseconds` | `timingDelayMilliseconds` |
| `holeTime` | `timingDelayMilliseconds` | `timingDelayMilliseconds` |
| `holeId` | `holeID` | `holeID` |
| `rowId` | `rowID` | `rowID` |
| `posId` | `posID` | `posID` |
| `fromHoleId` | `fromHoleID` | `fromHoleID` |
| `color` | `colorHexDecimal` | `colorHexDecimal` |
| `air` | `airLength` | Air deck length |
| `waterDeckLength` | `waterLength` | Water deck length |
| `spacers` | `spacerCount` | Spacer deck count |

---

## Indexed Access

Access individual holes by position, or auto-iterate through holes for tabular output.

| Syntax | Description | Example |
|--------|-------------|---------|
| `field[N]` | Access the Nth visible hole (1-based index) | `fx:holeLength[3]` returns the 3rd hole's length |
| `field[++]` | Auto-increment per row: row 1 = hole 1, row 2 = hole 2, etc. Blank beyond hole count | `fx:holeID[++]` |
| `field[--]` | Auto-decrement per row: row 1 = last hole, row 2 = second-last, etc. | `fx:holeID[--]` |
| `field[+>]` | Grid-increment per cell: left-to-right, then top-to-bottom. Auto-paginates across sheets | `fx:holeID[+>]` |

### Excel Integration with `[N]`

You can combine `[N]` with standard Excel cell references to build dynamic index lookups:

```
="fx:holeID["&$A1&"]"
```

If cell A1 contains `5`, this evaluates to `fx:holeID[5]`, returning the 5th hole's ID.

### Auto-Pagination with `[+>]`

When a `[+>]` table has more holes than cells, Kirra automatically creates additional pages (sheets) to hold all the data. Each subsequent sheet continues from where the previous one left off.

### Out-of-Range Behaviour

When `[N]`, `[++]`, or `[--]` references a hole index beyond the visible hole count, the cell resolves to blank. Entire rows that are completely beyond the hole count are hidden (zero height) in the PDF output.

Use `ignore()` to prevent a row from being hidden when its index is out of range:

```
fx:ignore(holeID[++])
```

---

## Filter Directive

Pre-filter which holes are included in `[++]`, `[--]`, and `[+>]` tables. Place the filter formula in any cell on the same sheet (typically above the table).

| Example | Description |
|---------|-------------|
| `fx:filter(holeAngle > 0)` | Only angled holes |
| `fx:filter(holeType == "Production")` | Only Production holes |
| `fx:filter(holeDiameter >= 200)` | Only holes with diameter >= 200mm |
| `fx:filter(holeDiameter >= 200 && holeAngle < 15)` | Combined AND condition |
| `fx:filter(holeType == "Production" \|\| holeType == "Buffer")` | Combined OR condition |

**Supported operators:** `>`, `<`, `>=`, `<=`, `==`, `!=`

**Logical operators:** `&&` (AND), `||` (OR)

The filter cell itself displays: `Filter: <expression> (N holes)` showing how many holes passed.

---

## Aggregation Functions

Aggregate across all visible holes using `field[i]` notation.

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `sum(field[i])` | Sum of all values | `fx:sum(holeLength[i])` | `1927.35` |
| `count(field[i])` | Count of non-null values | `fx:count(holeID[i])` | `142` |
| `avg(field[i])` | Average (mean) | `fx:avg(holeDiameter[i])` | `165.0` |
| `min(field[i])` | Minimum value | `fx:min(startZ[i])` | `98.2` |
| `max(field[i])` | Maximum value | `fx:max(startZ[i])` | `143.6` |
| `median(field[i])` | Median value | `fx:median(holeLength[i])` | `13.5` |
| `stdev(field[i])` | Standard deviation (sample) | `fx:stdev(holeLength[i])` | `1.23` |
| `unique(field[i])` | Count of unique values | `fx:unique(holeType[i])` | `3` |
| `countif(field[i], val)` | Count where field equals val | `fx:countif(holeType[i], "Production")` | `85` |
| `sumif(sumF[i], condF[i], val)` | Sum field where condition field equals val | `fx:sumif(holeLength[i], holeType[i], "Production")` | `1150.5` |
| `join(field[i], sep)` | Join all values as a string | `fx:join(holeID[i], ", ")` | `H001, H002, H003...` |
| `uniqueList(field[i], sep)` | Join unique values as a string | `fx:uniqueList(entityName[i])` | `Pattern_01, Pattern_02` |

### Composing Aggregations

Aggregation results can be used inside other functions:

```
fx:round(avg(holeLength[i]), 1)          → 13.6
fx:"Total: " & sum(holeLength[i]) & "m"  → Total: 1927.35m
fx:if(holeCount > 100, "Large", "Small")  → Large
```

---

## Group Functions

Group holes by a field and compute per-group statistics. All return formatted strings.

| Function | Description | Example |
|----------|-------------|---------|
| `sortCount(field[i], sep, limit)` | Count per unique value, sorted by count descending | `fx:sortCount(holeType[i], ", ")` |
| `groupCount(field[i], sep, order)` | Group and count. Order: `desc` (default), `asc`, `alpha` | `fx:groupCount(holeType[i], "\n", "desc")` |
| `groupSum(sumF[i], grpF[i], sep)` | Sum a numeric field grouped by another field | `fx:groupSum(holeLength[i], entityName[i], "\n")` |
| `groupAvg(valF[i], grpF[i], sep)` | Average grouped by another field | `fx:groupAvg(holeDiameter[i], holeType[i], "\n")` |
| `groupMin(valF[i], grpF[i], sep)` | Min grouped by another field | `fx:groupMin(holeLength[i], holeType[i], "\n")` |
| `groupMax(valF[i], grpF[i], sep)` | Max grouped by another field | `fx:groupMax(startZ[i], holeType[i], "\n")` |
| `groupTable(grpF[i], fmt, sep, order)` | Multi-field per-group format with inline tokens | See below |

### groupTable Format Tokens

`groupTable` accepts a format string with inline tokens that compute per-group:

| Token | Description |
|-------|-------------|
| `{key}` | Group key value (e.g. "Production") |
| `{count}` | Count of holes in group |
| `{sum:field}` | Sum of field within group |
| `{avg:field}` | Average of field within group |
| `{min:field}` | Minimum of field within group |
| `{max:field}` | Maximum of field within group |
| `{median:field}` | Median of field within group |

**Example:**

```
fx:groupTable(holeType[i], "{key}: {count} holes, dia={avg:holeDiameter}mm, len={sum:holeLength}m", "\n")
```

**Result:**

```
Production: 85 holes, dia=165.0mm, len=1150.5m
Buffer: 42 holes, dia=127.0mm, len=525.0m
Presplit: 15 holes, dia=89.0mm, len=251.8m
```

### Group Function Examples

**sortCount** — quick frequency table:

```
fx:sortCount(holeType[i], ", ")
→ Production: 85, Buffer: 42, Presplit: 15
```

**groupSum** — drill metres per entity:

```
fx:groupSum(holeLength[i], entityName[i], "\n")
→ Pattern_01: 1234.5
   Pattern_02: 692.8
```

**groupAvg with custom separator:**

```
fx:groupAvg(holeDiameter[i], holeType[i], " | ", "alpha")
→ Buffer: 127.0 | Presplit: 89.0 | Production: 165.0
```

---

## Math and Rounding Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `round(value, n)` | Round to n decimals. Negative n rounds to tens/hundreds | `fx:round(1927.35, 1)` | `1927.4` |
| `roundup(value, n)` | Round up (ceiling at n decimals) | `fx:roundup(1927.31, 1)` | `1927.4` |
| `rounddown(value, n)` | Round down (floor at n decimals) | `fx:rounddown(1927.39, 1)` | `1927.3` |
| `ceil(value)` | Ceiling (round up to integer) | `fx:ceil(12.1)` | `13` |
| `floor(value)` | Floor (round down to integer) | `fx:floor(12.9)` | `12` |
| `abs(value)` | Absolute value | `fx:abs(-5)` | `5` |
| `sqrt(value)` | Square root | `fx:sqrt(9)` | `3` |
| `pow(base, exp)` | Power | `fx:pow(2, 3)` | `8` |
| `pi()` | Pi constant | `fx:pi()` | `3.14159...` |
| `log(value)` | Natural logarithm (ln) | `fx:log(10)` | `2.302...` |
| `log10(value)` | Base-10 logarithm | `fx:log10(100)` | `2` |
| `min(a, b, ...)` | Minimum of arguments (or array) | `fx:min(5, 3, 8)` | `3` |
| `max(a, b, ...)` | Maximum of arguments (or array) | `fx:max(5, 3, 8)` | `8` |

### Negative Decimal Rounding

When `n` is negative, rounding happens at tens, hundreds, etc.:

```
fx:round(1927.35, -1)   → 1930
fx:round(1927.35, -2)   → 1900
```

---

## String Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `&` | String concatenation (converted to `+` internally) | `fx:"Total: " & holeCount & " holes"` | `Total: 142 holes` |
| `upper(text)` | Convert to uppercase | `fx:upper("hello")` | `HELLO` |
| `lower(text)` | Convert to lowercase | `fx:lower("HELLO")` | `hello` |
| `trim(text)` | Trim leading/trailing whitespace | `fx:trim(entityName)` | `Pattern_01` |
| `left(text, n)` | Left N characters | `fx:left("Hello World", 5)` | `Hello` |
| `right(text, n)` | Right N characters | `fx:right("Hello World", 5)` | `World` |
| `mid(text, start, length)` | Substring from start position for length characters | `fx:mid("Hello World", 6, 5)` | `World` |
| `len(text)` | String length | `fx:len("Hello")` | `5` |
| `text(value, fmt)` | Format a number. `fmt` = `"0.00"`, `"0.0"`, `"0"` | `fx:text(3.14159, "0.00")` | `3.14` |
| `fixed(value, n)` | Fixed decimal places | `fx:fixed(3.14159, 1)` | `3.1` |

### Concatenation Examples

```
fx:"Blast: " & blastName & " (" & holeCount & " holes)"
→ Blast: Shot 42 (142 holes)

fx:"PF = " & fixed(powderFactor, 2) & " kg/m³"
→ PF = 0.34 kg/m³

fx:upper(entityName) & " — " & date
→ PATTERN_01 — 28/03/2026
```

---

## Date Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `today()` | Today's date (dd/mm/yyyy locale) | `fx:today()` | `28/03/2026` |
| `today(offset)` | Today plus/minus N days | `fx:today(-1)` | `27/03/2026` |
| `now()` | Current date and time | `fx:now()` | `28/03/2026, 14:30:00` |
| `dateformat(fmt)` | Custom formatted date | `fx:dateformat("DD/MM/YYYY")` | `28/03/2026` |

### dateformat Tokens

| Token | Description | Example |
|-------|-------------|---------|
| `YYYY` or `yyyy` | 4-digit year | `2026` |
| `MM` | 2-digit month (zero-padded) | `03` |
| `DD` or `dd` | 2-digit day (zero-padded) | `28` |
| `hh` or `HH` | 2-digit hour (24h, zero-padded) | `14` |
| `mm` | 2-digit minute (zero-padded) | `30` |
| `ss` | 2-digit second (zero-padded) | `00` |

**Examples:**

```
fx:dateformat("YYYY-MM-DD")          → 2026-03-28
fx:dateformat("DD/MM/YYYY hh:mm")    → 28/03/2026 14:30
fx:dateformat("YYYY")                → 2026
```

---

## Conditional and Logic Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `if(cond, trueVal, falseVal)` | If condition is true, return trueVal; otherwise falseVal | `fx:if(holeCount > 100, "Large", "Small")` | `Large` |
| `isnumber(value)` | Returns true if value is a finite number | `fx:isnumber(holeCount)` | `true` |
| `isblank(value)` | Returns true if value is null, undefined, or empty string | `fx:isblank(designer)` | `false` |
| `ignore(value)` | Pass-through that prevents row hiding when index is out of range | `fx:ignore(holeID[++])` | value or empty |

### Nested Conditionals

```
fx:if(powderFactor > 0.5, "HIGH", if(powderFactor > 0.3, "OK", "LOW"))
→ OK
```

### ignore() — Keeping Rows Visible

Normally, rows with `[++]` or `[+>]` that reference holes beyond the hole count are hidden. Wrap in `ignore()` to keep the row visible with a blank value:

```
fx:ignore(holeID[++])
```

---

## Connector Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `connectorList(sep)` | List all connector delay groups with counts, sorted by delay | `fx:connectorList(", ")` | `25ms x 42, 42ms x 38, 67ms x 12` |
| `connectorList("\n")` | Same but newline-separated (for multi-line cells) | `fx:connectorList("\n")` | One group per line |
| `connectorCount()` | Total number of connectors | `fx:connectorCount()` | `92` |
| `connectorCount(delay)` | Count of connectors with a specific delay (ms) | `fx:connectorCount(25)` | `42` |

---

## Product and Charging Functions

| Function | Description | Example | Result |
|----------|-------------|---------|--------|
| `productList(sep)` | List all charged products with total mass, sorted by mass descending | `fx:productList(", ")` | `ANFO Heavy: 2450.0kg, Emulsion: 1800.5kg` |
| `productMass(name)` | Total mass (kg) of a specific product across all visible holes | `fx:productMass("ANFO Heavy")` | `2450.0` |
| `productCount()` | Count of unique product names across all holes | `fx:productCount()` | `3` |
| `productCount(name)` | Count of holes that use a specific product | `fx:productCount("ANFO Heavy")` | `85` |

---

## Summary Functions

Pre-built multi-line summaries that group data by entity and hole type.

### blastSummary(sep, indent)

Two-level grouped summary: entity name then hole type. Shows geometry statistics.

| Parameter | Default | Description |
|-----------|---------|-------------|
| `sep` | `"\n"` | Line separator |
| `indent` | `"  "` | Indent string for nested levels |

**Example:** `fx:blastSummary()`

**Output:**

```
Blast Name: Pattern_01
  Hole Type: Production
    Holes: 85
    Pattern: B:3.5m x S:4.0m x AvBH:12.0m
    Diameter: 165mm
    Angle: min:0 deg max:12 deg
    Subdrill: min:0.8m max:1.2m
    Total Meters: 1150.5m
  Hole Type: Buffer
    Holes: 42
    Pattern: B:2.8m x S:3.2m x AvBH:12.0m
    Diameter: 127mm
    ...
```

### chargeSummary(sep, indent)

Two-level grouped charging summary: entity name then hole type. Shows charging statistics.

| Parameter | Default | Description |
|-----------|---------|-------------|
| `sep` | `"\n"` | Line separator |
| `indent` | `"  "` | Indent string for nested levels |

**Example:** `fx:chargeSummary()`

**Output:**

```
Blast Name: Pattern_01
  Hole Type: Production
    Charged: 85 of 85 holes
    Depth to First Charge: avg:3.5m  min:3.0m  max:4.0m
    Charge Length: avg:8.5m  min:7.8m  max:9.2m
    Total Mass: 4250.0 kg (avg:50.0 kg/hole)
    Powder Factor: avg:0.34 kg/m³
    Products: ANFO Heavy: 2450.0kg, Emulsion: 1800.5kg
    Primers: 170 (Pentex 400g x 170)
```

---

## Render Tokens

Render tokens produce **graphics** (images), not text. The merged cell area in the XLSX determines the image dimensions. Place one render token per merged cell region.

### Map View

| Formula | Description |
|---------|-------------|
| `fx:mapView` | Map view with default raster rendering |
| `fx:mapView(r)` | Raster map (holes, surfaces, images, KADs) |
| `fx:mapView(r, 300)` | Raster map at 300 DPI (default is 200) |
| `fx:mapView(v)` | Vector map (crisp scalable lines and text) |
| `fx:mapView(v, 8)` | Vector map with 8pt label font size |

### Map View with Display Codes

Append display codes after the mode and font/DPI to control **exactly** what appears on the map. When display codes are specified, only those items are drawn (whitelist mode). When omitted, the current screen display settings are used.

| Formula | Description |
|---------|-------------|
| `fx:mapView(r, hid, len)` | Raster showing only hole IDs and lengths |
| `fx:mapView(v, 8, hid, len, tie)` | Vector 8pt with hole IDs, lengths, and connectors |
| `fx:mapView(r, hid, len, vor.sdb.mm)` | Raster with hole IDs, lengths, and Voronoi SDoB (min-max legend) |
| `fx:mapView(v, hid, dia, ang, chg)` | Vector with IDs, diameters, angles, and charge columns |

See [Display Codes for mapView and legend](#display-codes-for-mapview-and-legend) for the full code list.

### Other Render Tokens

| Formula | Description |
|---------|-------------|
| `fx:northArrow` | North arrow graphic |
| `fx:scale` | Scale bar + scale text combined |
| `fx:scaleBar` | Scale bar graphic only |
| `fx:scaleText` | Scale text only (e.g. `1:500`) |
| `fx:logo` | User logo image |
| `fx:qrcode` | QR code graphic |
| `fx:connectorCount` | Connector count table (graphical) |

### Section Views

| Formula | Description |
|---------|-------------|
| `fx:holeSection("Pattern_01", "H001")` | Single hole charging cross-section |
| `fx:sectionView("Pattern_01", "H001", "H010")` | Multi-hole bench cross-section between two holes |

Section view arguments can use scalar variables or indexed references:

```
fx:holeSection(entityName, holeID[1])
fx:sectionView(entityName, holeID[1], holeID[10])
```

### Legend

| Formula | Description |
|---------|-------------|
| `fx:legend(vor.pfd, h)` | Legend for PF Designed, horizontal layout |
| `fx:legend(vor.sdb.fx, v)` | Legend for SDoB, fixed range, vertical layout |
| `fx:legend(slp, h)` | Slope angle legend, horizontal |
| `fx:legend(rel, v)` | Burden relief legend, vertical |

See [Legend Codes](#legend-codes) for all options.

---

## Display Codes for mapView and legend

These 3-letter codes control what elements appear on the printed map. Use them as additional arguments in `mapView()` or as the first argument in `legend()`.

### Hole Label Codes

| Code | Display Element | Description |
|------|----------------|-------------|
| `hid` | Hole ID | Hole identifier label |
| `len` | Hole Length | Hole length value |
| `dia` | Diameter | Hole diameter value |
| `ang` | Angle | Hole angle from vertical |
| `ber` | Bearing | Hole bearing from north |
| `dip` | Dip | Hole dip (mast angle) |
| `sub` | Subdrill | Subdrill amount |
| `typ` | Hole Type | Hole type label |
| `rap` | Row/Pos ID | Row and Position ID labels |
| `xlc` | X Coordinate | Collar X (easting) value |
| `ylc` | Y Coordinate | Collar Y (northing) value |
| `zlc` | Z Coordinate | Collar Z (elevation) value |

### Timing and Connectivity Codes

| Code | Display Element | Description |
|------|----------------|-------------|
| `tie` | Connectors | Timing connector lines between holes |
| `del` | Delay Value | Delay value labels on connectors |
| `htm` | Initiation Time | Hole initiation (firing) time label |
| `dtm` | Downhole Timing | Downhole timing display |
| `fmv` | First Movement | First movement vector display |

### Charging and Mass Codes

| Code | Display Element | Description |
|------|----------------|-------------|
| `chg` | Charges | Charge column display on holes |
| `hkg` | Mass per Hole | Total mass label per hole |
| `dkg` | Mass per Deck | Mass label per deck |

### Measured Data Codes

| Code | Display Element | Description |
|------|----------------|-------------|
| `mln` | Measured Length | Measured length value |
| `mms` | Measured Mass | Measured mass value |
| `mcm` | Measured Comment | Measured comment text |
| `mwt` | Measured Water | Measured water value |

### Surface and Analysis Codes

| Code | Display Element | Description |
|------|----------------|-------------|
| `con` | Contour | Surface contour lines |
| `slp` | Slope Map | Slope angle overlay |
| `rel` | Burden Relief | Burden relief overlay |
| `kpt` | KAD Point ID | KAD drawing point IDs |

---

## Voronoi Metric Codes

Voronoi codes control which metric is displayed when Voronoi cells are rendered. Use as display codes in `mapView()` or as legend codes in `legend()`.

Each Voronoi code has three variants:
- **Base** (e.g. `vor.pfd`) — uses current screen legend setting
- **`.fx` suffix** (e.g. `vor.pfd.fx`) — forces fixed-range legend
- **`.mm` suffix** (e.g. `vor.pfd.mm`) — forces min-max (data-range) legend

| Code | Metric | Unit |
|------|--------|------|
| `vor.pfd` | Powder Factor — Designed | kg/m3 |
| `vor.pfm` | Powder Factor — Measured | kg/m3 |
| `vor.dms` | Design Mass | kg |
| `vor.mms` | Measured Mass | kg |
| `vor.vol` | Cell Volume | m3 |
| `vor.are` | Cell Area | m2 |
| `vor.dln` | Design Length | m |
| `vor.mln` | Measured Length | m |
| `vor.hft` | Hole Firing Time | ms |
| `vor.sdb` | Scaled Depth of Burial (SDoB) | m/kg^1/3 |

### Voronoi Examples

```
fx:mapView(r, hid, vor.pfd.fx)         → Raster map with hole IDs and PF Designed (fixed legend)
fx:mapView(v, 8, hid, len, vor.sdb.mm) → Vector 8pt, IDs, lengths, SDoB (min-max legend)
fx:legend(vor.pfd.fx, h)               → Horizontal PF Designed legend (fixed range)
fx:legend(vor.sdb.mm, v)               → Vertical SDoB legend (min-max range)
```

---

## Legend Codes

The `legend()` render token accepts a display/metric code and an orientation.

**Syntax:** `fx:legend(code, orientation)`

| Orientation | Value |
|-------------|-------|
| Horizontal | `h` (default) |
| Vertical | `v` |

### Available Legend Types

| Code | Legend Type | Bands |
|------|------------|-------|
| `slp` or `slope` | Slope Angle | 0-5, 5-7, 7-9, 9-12, 12-15, 15-17, 17-20, 20+ degrees |
| `rel` or `relief` | Burden Relief | <4, 4-7, 7-10, 10-13, 13-16, 16-19, 19-22, 22-25, 25-30, 30-40, 40+ |
| `vor.pfd` | PF Designed | Continuous gradient 0 to max |
| `vor.pfm` | PF Measured | Continuous gradient 0 to max |
| `vor.dms` | Design Mass | Continuous gradient |
| `vor.mms` | Measured Mass | Continuous gradient |
| `vor.vol` | Cell Volume | Continuous gradient |
| `vor.are` | Cell Area | Continuous gradient |
| `vor.dln` | Design Length | Continuous gradient |
| `vor.mln` | Measured Length | Continuous gradient |
| `vor.hft` | Hole Firing Time | Continuous gradient |
| `vor.sdb` | SDoB | Continuous gradient |

All Voronoi legend codes support `.fx` (fixed range) and `.mm` (min-max range) suffixes.

---

## Worked Examples

### Example 1 — Title Block

| Cell | Formula | Result |
|------|---------|--------|
| B2 | `fx:blastName` | `Shot 42` |
| B3 | `fx:designer` | `J. Smith` |
| B4 | `fx:dateformat("DD/MM/YYYY")` | `28/03/2026` |
| B5 | `fx:"1:" & printScale` | `1:500` |
| B6 | `fx:holeCount & " holes"` | `142 holes` |
| B7 | `fx:round(drillMetres, 1) & "m"` | `1927.4m` |
| B8 | `fx:fixed(powderFactor, 2) & " kg/m³"` | `0.34 kg/m³` |

### Example 2 — Per-Hole Data Table

| Column A | Column B | Column C | Column D | Column E |
|----------|----------|----------|----------|----------|
| `fx:holeID[++]` | `fx:round(holeLength[++], 1)` | `fx:holeDiameter[++]` | `fx:round(startZ[++], 2)` | `fx:holeType[++]` |

Each row auto-fills with the next hole. Rows beyond the hole count are hidden.

### Example 3 — Statistics Summary

| Cell | Formula | Result |
|------|---------|--------|
| C10 | `fx:sum(holeLength[i])` | `1927.35` |
| C11 | `fx:round(avg(holeLength[i]), 1)` | `13.6` |
| C12 | `fx:min(holeLength[i]) & " - " & max(holeLength[i])` | `11.2 - 16.8` |
| C13 | `fx:sortCount(holeType[i], ", ")` | `Production: 85, Buffer: 42, Presplit: 15` |

### Example 4 — Charging Report

| Cell | Formula | Result |
|------|---------|--------|
| D10 | `fx:round(sum(totalMass[i]), 1) & " kg"` | `4250.0 kg` |
| D11 | `fx:productList("\n")` | `ANFO Heavy: 2450.0kg` (newline) `Emulsion: 1800.5kg` |
| D12 | `fx:round(avg(firstChargeTop[i]), 1) & "m avg stem"` | `3.5m avg stem` |
| D13 | `fx:connectorList(", ")` | `25ms x 42, 42ms x 38` |

### Example 5 — Map with Specific Labels and Voronoi

A merged cell spanning B15:J45 contains:

```
fx:mapView(r, hid, len, vor.sdb.mm)
```

This renders a raster map showing only:
- Hole IDs
- Hole lengths
- Voronoi cells coloured by Scaled Depth of Burial with a min-max legend range

### Example 6 — Multiple Map Views on Different Sheets

**Sheet 1 — Overview map:**

```
fx:mapView(v, 8, hid, tie, del)
```

Vector map at 8pt font showing hole IDs, connector ties, and delay values.

**Sheet 2 — Charging detail:**

```
fx:mapView(r, hid, chg, hkg)
```

Raster map showing hole IDs, charge columns, and mass per hole.

**Sheet 3 — Voronoi analysis:**

```
fx:mapView(r, hid, vor.pfd.fx)
```

Raster map showing hole IDs and Voronoi PF Designed with fixed-range legend.

### Example 7 — Filtered Table (Production Holes Only)

```
fx:filter(holeType == "Production")
```

Then in the table rows below:

| A | B | C |
|---|---|---|
| `fx:holeID[++]` | `fx:round(holeLength[++], 1)` | `fx:round(totalMass[++], 1)` |

Only Production holes appear in the table.

### Example 8 — Grouped Summary Table

```
fx:groupTable(holeType[i], "{key}: {count} holes, {sum:holeLength}m drilled, avg dia {avg:holeDiameter}mm", "\n")
```

**Result:**

```
Production: 85 holes, 1150.5m drilled, avg dia 165.0mm
Buffer: 42 holes, 525.0m drilled, avg dia 127.0mm
Presplit: 15 holes, 251.8m drilled, avg dia 89.0mm
```

### Example 9 — Conditional Formatting with if()

```
fx:if(powderFactor > 0.5, "WARNING: High PF", "PF OK: " & fixed(powderFactor, 2) & " kg/m³")
```

### Example 10 — Grid Layout with `[+>]`

A 3-column x 10-row grid where each cell holds one hole ID:

| A | B | C |
|---|---|---|
| `fx:holeID[+>]` | `fx:holeID[+>]` | `fx:holeID[+>]` |
| `fx:holeID[+>]` | `fx:holeID[+>]` | `fx:holeID[+>]` |
| ... | ... | ... |

Fills left-to-right, top-to-bottom: cell A1 = hole 1, B1 = hole 2, C1 = hole 3, A2 = hole 4, etc. Auto-paginates to additional sheets if there are more holes than cells.

---

## Related Topics

- [Template Examples](template-examples.md) — Downloadable example templates with detailed walkthroughs
- [Print from Template (XLSX)](xlsx-templates.md) — Template workflow and output formats
- [Blast Statistics](../analysis/blast-statistics.md)
- [Charging Overview](../charging/overview.md)
- [Voronoi Analysis](../analysis/voronoi.md)
