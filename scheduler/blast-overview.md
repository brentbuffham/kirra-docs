# Blast Overview

The **BLAST OVERVIEW** tab provides a summary table and calendar view of all scheduled blasts. It supports drag-and-drop pattern assignment from the Pattern Library and displays depth profile visualisations for blasts with imported 3D solid data.

> *Screenshot coming soon*

---

## Sub-Tabs

The Blast Overview tab has two sub-tabs:

| Sub-Tab | Description |
|---|---|
| **Table** | Data table with all blasts, patterns, metrics, and depth profiles |
| **Calendar** | Month-grid calendar view showing blast dates |

---

## Stats Cards

Four stats cards display above the table:

| Card | Colour | Description |
|---|---|---|
| Active Blasts | Blue | Number of blasts with status "active" |
| Total Volume | Amber | Sum of all blast volumes in bcm |
| Total Explosive | Red | Sum of all blast explosive mass in kg |
| Total Holes | Purple | Sum of all holes across all blast hole types |

---

## Blast Table

The table displays one row per blast with these columns:

| Column | Description |
|---|---|
| Blast Name | Name with dependency warning icon if applicable |
| Status | Badge: active (blue), fired (red), planned (teal) |
| Mode | "Auto" (from Kirra import) or "Manual" |
| Pattern | Pattern code reference |
| Patterns | Hole type badges (PRODUCTION, BUFFER, PRESPLIT) |
| Volume (bcm) | Blast volume |
| Exp. (kg) | Explosive mass |
| PF (kg/bcm) | Calculated powder factor |
| Drill (m) | Total drill meters |
| Depth Profile | Mini bar chart from 3D solid depth binning |
| Drill Start | Scheduled drill start date |
| Load Start | Loading start date |
| Blast Date | Blast fire date |
| Deps | Dependency summary (e.g., "0%->L 100%D->B") |

### Interactions

- **Double-click** any row to open the blast editor
- **Drag and drop** a pattern card from the [Pattern Library](pattern-library.md) tab onto a blast row to assign it

---

## Pattern Assignment via Drag and Drop

Patterns from the [Pattern Library](pattern-library.md) can be dragged onto blast rows. When dropped, an allocation dialog appears with:

| Field | Description |
|---|---|
| % Block | Percentage of the blast this pattern covers (first pattern defaults to 100%) |
| Number of Holes | Calculated from % Block and surface area, or entered manually |
| Hole Depth (m) | When **Use Block Depth** is off: `benchHt / sin(angle) + subdrill`. When on: `(Volume / Area) / sin(angle) + subdrill` |
| Drill Meters | Calculated: holes x depth (read-only) |
| Explosive Mass (kg) | Calculated from PF x burden x spacing x effective bench height x holes (read-only). Effective bench height = `Volume / Area` when Use Block Depth is on, otherwise the pattern bench height |
| Line Drill | Yes/No (defaults to Yes for PRESPLIT and BUFFER types) |
| Hole Type | From the pattern definition (read-only) |

### Live Recalculation

- Changing **% Block** recalculates the number of holes from the blast's surface area
- When **Use Block Depth** is enabled, hole depth uses the **average block depth** derived from `Volume / Surface Area` instead of the pattern bench height. This gives an accurate average bench height from the 3D solid geometry, preventing overestimation that occurs when using the maximum or pattern-defined depth
- The formula is: **Drill Meters = (Volume / Area + Subdrill) x Number of Holes** (adjusted for hole angle)
- Drill meters and explosive mass update live as values change

### Multi-Pattern Assignment

A blast can have multiple patterns assigned (e.g., PRODUCTION + BUFFER + PRESPLIT). Each pattern gets a percentage of the block. Subsequent patterns default to 0% Block for manual adjustment.

---

## Depth Profile

When 3D blast solids have been imported (via `.kap` or `.kirra` files), the depth profile column shows a compact horizontal bar chart. This visualisation comes from vertical ray-casting through the blast solid geometry, showing the distribution of hole depths across the blast footprint.

---

## Blast Calendar

The Calendar sub-tab shows a month-grid view with blast dates plotted on their respective days.

---

## Related Topics

- [Gantt Chart](gantt-chart.md) -- The main scheduling Gantt view
- [Pattern Library](pattern-library.md) -- Drill and blast pattern definitions
- [Conformance](conformance.md) -- Planned vs actual tracking

---
