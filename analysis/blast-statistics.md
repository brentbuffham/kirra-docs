# Blast Statistics

The Blast Statistics panel gives you a real-time summary of your blast design's key performance indicators. Use it to verify the design before export, identify issues, and communicate blast parameters to approvers or site management.

---

## Opening Blast Statistics

Press `Shift+S`, or go to **Analysis → Blast Statistics**, or click the **Statistics** button in the toolbar.

---

## Statistics Panel Overview

The panel is organised into four sections: **Pattern Summary**, **Drilling Summary**, **Charging Summary**, and **Timing Summary**.

---

## Pattern Summary

| Statistic | Description |
|-----------|-------------|
| **Total holes** | Count of all holes in the project |
| **Charged holes** | Holes with a charge design assigned |
| **Uncharged holes** | Holes with no charge design |
| **Pattern area (m²)** | Convex hull area of all hole collar positions |
| **Average burden (m)** | Mean distance between rows |
| **Average spacing (m)** | Mean distance between holes within rows |
| **B/S ratio** | Burden-to-spacing ratio |

---

## Drilling Summary

| Statistic | Description |
|-----------|-------------|
| **Total drill metres (m)** | Sum of planned depths across all holes |
| **Average depth (m)** | Mean hole depth |
| **Min / Max depth (m)** | Shallowest and deepest holes |
| **Average diameter (mm)** | Mean hole diameter |
| **Total subdrill (m)** | Sum of subdrill across all holes |

---

## Charging Summary

| Statistic | Description |
|-----------|-------------|
| **Total explosive mass (kg)** | Sum of all explosive deck masses |
| **Total explosive mass (t)** | Same, in tonnes |
| **Average charge per hole (kg)** | Mean explosive mass per hole |
| **Total stemming (m)** | Sum of stemming lengths |
| **Average stemming length (m)** | Mean stemming per hole |
| **Powder factor (kg/t)** | Explosive mass per tonne of rock *(requires Voronoi volume)* |
| **Powder factor (kg/m³)** | Explosive mass per cubic metre of rock *(requires Voronoi volume)* |
| **Products breakdown** | Table showing total mass by explosive product type |

---

## Timing Summary

| Statistic | Description |
|-----------|-------------|
| **Total initiation time (ms)** | Time from first to last hole firing |
| **Average inter-hole delay (ms)** | Mean delay between sequentially numbered holes |
| **Holes unassigned** | Holes with no delay value |
| **Duplicate delays** | Holes sharing an identical firing time |
| **Min delay (ms)** | Earliest assigned firing time |
| **Max delay (ms)** | Latest assigned firing time |

---

## Exporting the Statistics

Click **Export Table** in the Statistics panel to save the summary as:
- **CSV** — for pasting into blast reports or spreadsheets
- **PDF** — formatted summary table (same content as the full PDF report's statistics page)

---

## Live Updates

The statistics panel updates automatically whenever holes are added, deleted, moved, or edited — including charge and timing changes. No manual refresh is required.

---

## Related Topics

- [Voronoi Analysis](voronoi.md) — per-hole rock volume (required for powder factor)
- [PPV Analytics](ppv-analytics.md) — vibration prediction
- [PDF Export](../exporting/pdf-print.md) — include statistics in a report
- [Charging Overview](../charging/overview.md)
