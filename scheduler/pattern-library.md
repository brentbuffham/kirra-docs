# Pattern Library

The **PATTERN LIBRARY** tab manages drill and blast pattern definitions. Patterns define the geometric and explosive parameters for different hole types. They can be created manually, imported from CSV, or exported for sharing across teams.

> *Screenshot coming soon*

---

## Pattern Card Grid

Patterns are displayed as a grid of cards. Each card shows:

| Property | Description |
|---|---|
| Pattern ID | Unique identifier (e.g., "PROD-229-12", "BUFF-165-12") |
| Type | Hole type badge (PRODUCTION, BUFFER, BATTER, ORE, WASTE, PRESPLIT, etc.) |
| Bench Height | Design bench height in metres |
| Diameter | Hole diameter in mm |
| Burden | Burden distance in metres |
| Spacing | Spacing distance in metres |
| Powder Factor | Explosive consumption in kg/bcm |
| Sub-drill | Sub-drill depth in metres |
| Stemming | Stemming height in metres |
| Hole Angle | Angle from horizontal in degrees (90 = vertical) |

### Card Actions

Each card has three action buttons:

- **Edit** -- Open the pattern editor dialog
- **Copy** -- Duplicate the pattern with a "-COPY" suffix on the ID
- **Gantt** -- Toggle visibility in the Gantt sidebar palette (hidden patterns are dimmed)

### Drag and Drop

Pattern cards are draggable. Drag a card onto a blast row in the [Blast Overview](blast-overview.md) tab to assign that pattern to a blast.

---

## Add / Edit / Copy Dialog

The pattern dialog provides fields for all pattern properties:

- **Pattern ID** -- Must be unique across the library
- **Type** -- Dropdown with standard types, plus a CUSTOM option for a custom type name
- **Bench Height** (m), **Diameter** (mm), **Burden** (m), **Spacing** (m)
- **Powder Factor** (kg/bcm), **Sub-drill** (m), **Stemming** (m)
- **Hole Angle** (degrees from horizontal, default 90 = vertical)

---

## CSV Import / Export

### Export Template

Click **Export Template** to download a blank CSV with example rows and comments explaining each column. Lines starting with `#` are ignored on import.

### Export Pattern Library

Click **Export Library** to download the current patterns as a CSV file.

### Import Patterns

Click **Import CSV** to load patterns from a CSV file. The importer:

1. Skips blank lines and comment lines (starting with `#`)
2. Detects the header row by looking for "Pattern ID"
3. Validates each row for required fields and numeric values
4. Replaces the current pattern library with the imported patterns
5. Shows a success/warning message with import counts

**Note:** Importing replaces all existing patterns. Export your current library first if you want to keep it.

---

## Hole Types

The following standard types are supported, each with a distinct colour:

| Type | Description |
|---|---|
| PRODUCTION | Standard production blast holes |
| BUFFER | Buffer row holes (typically smaller diameter) |
| BATTER | Batter (wall control) holes |
| STAB | Stabilisation holes |
| FACE | Face holes |
| CONTOUR | Contour holes |
| TOE | Toe holes |
| RAMP | Ramp holes |
| SUMP | Sump holes |
| ORE | Ore zone holes |
| WASTE | Waste zone holes |
| PRESPLIT | Pre-split holes (line drill) |
| CUSTOM | Any custom type name |

---

## Gantt Palette Integration

Patterns marked as visible appear in the Gantt sidebar palette. From the palette, they can be dragged onto blast rows to assign patterns without switching tabs.

---

## Related Topics

- [Blast Overview](blast-overview.md) -- Drag patterns onto blasts for assignment
- [Gantt Chart](gantt-chart.md) -- Patterns appear in the sidebar palette
- [Import & Export](import-export.md) -- CSV template exports

---
