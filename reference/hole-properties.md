# Hole Properties Reference

This page describes every field that can be assigned to a blast hole in Kirra.

---

## Core Properties

| Field | Units | Description |
|-------|-------|-------------|
| **Hole ID** | — | Unique identifier for the hole within the project. Can contain letters, numbers, and hyphens. Maximum 32 characters. |
| **Easting** | m | East coordinate of the hole collar in the project coordinate system. |
| **Northing** | m | North coordinate of the hole collar in the project coordinate system. |
| **Elevation** | m | Collar elevation (height above datum). |
| **Depth** | m | Planned drill depth from collar to the bottom of the drilled hole. Does not include subdrill. |
| **Subdrill** | m | Additional drilling below the design toe elevation. Subdrill is part of the total drill depth (i.e., total drill depth = depth + subdrill). |
| **Diameter** | mm | Nominal borehole diameter. |
| **Bearing** | degrees | Azimuth of the drill direction measured clockwise from North (0° = North, 90° = East, 180° = South, 270° = West). Vertical holes use a bearing of 0. |
| **Inclination** | degrees | Drill angle measured from **vertical**. 0° = vertical; 90° = horizontal. A typical angled hole might be inclined at 15°–25° from vertical. |

---

## Calculated Fields (Read-Only)

These values are calculated automatically by Kirra and cannot be edited directly.

| Field | Description |
|-------|-------------|
| **Toe Easting** | Easting coordinate of the hole bottom, calculated from collar Easting, depth, bearing, and inclination. |
| **Toe Northing** | Northing coordinate of the hole bottom. |
| **Toe Elevation** | Elevation of the hole bottom. |
| **True Depth (m)** | Straight-line length of the hole from collar to toe. |
| **Horizontal Offset (m)** | Horizontal distance between collar and toe (zero for vertical holes). |

---

## Pattern Position Fields

| Field | Description |
|-------|-------------|
| **Row** | Row number or label within the blast pattern (e.g., `1`, `A`, `ROW1`). Assigned automatically during pattern generation or set manually. |
| **Column** | Column number within the row. |

---

## Timing Fields

| Field | Units | Description |
|-------|-------|-------------|
| **Delay** | ms | Assigned initiation delay from the blast signal. |
| **Firing Time** | ms | Calculated absolute firing time (may differ from Delay when tie-in connectors add surface delays). |

---

## Charge Fields

| Field | Units | Description |
|-------|-------|-------------|
| **Charge Length** | m | Total loaded explosive column length. |
| **Stemming Length** | m | Inert fill length above the charge column. |
| **Explosive Mass** | kg | Total explosive mass for the hole (sum across all decks). |
| **Product** | — | Primary explosive product name (first/main deck product). |
| **Deck Count** | — | Number of charge decks in the hole. |

---

## Custom Attributes

Kirra supports up to 10 custom text or numeric attributes per hole. Custom attributes are defined in **Project → Settings → Custom Attributes** and appear in:
- The right panel (hole properties)
- The Hole Editor dialog
- CSV import/export column mapping
- PDF charge sheets

---

## Editing Fields

- **Right panel** — edit the selected hole(s) directly; bulk-edit applies values to all selected holes
- **Hole Editor** — double-click a hole; provides a complete form with all fields visible at once
- **CSV Import** — values are read from the import file during the import wizard
- **Bulk offset** — use right-click → **Move by Offset** for coordinate adjustments

---

## Validation Rules

| Field | Validation |
|-------|-----------|
| Hole ID | Must be unique within the project; no spaces |
| Depth | Must be > 0 |
| Diameter | Must be > 0 |
| Bearing | Must be 0–360 |
| Inclination | Must be 0–90 |
| Subdrill | Must be ≥ 0 |
| Stemming + Charge | Must equal hole depth (validated when charge is applied) |

---

## Related Topics

- [Adding Holes](../blast-design/adding-holes.md)
- [Editing Holes](../blast-design/editing-holes.md)
- [Coordinate System](coordinate-system.md)
- [CSV Formats](../importing/csv-formats.md)
