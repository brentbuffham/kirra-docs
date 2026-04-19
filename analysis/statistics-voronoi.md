# Blast Statistics & Voronoi Analysis

Kirra provides real-time blast statistics and Voronoi analysis to help you verify your design before export.

> *Screenshot coming soon -- statistics panel and Voronoi overlay*

---

## Blast Statistics

The Blast Statistics panel displays a live summary of your blast design. It updates automatically whenever holes are added, deleted, moved, or edited.

### Pattern Summary

| Statistic | Description |
|-----------|-------------|
| Total Holes | Count of all holes in the project |
| Charged Holes | Holes with a charge design assigned |
| Uncharged Holes | Holes with no charge design |
| Pattern Area | Convex hull area of all collar positions (m2) |
| Average Burden | Mean distance between rows (m) |
| Average Spacing | Mean distance between holes within rows (m) |
| B/S Ratio | Burden-to-spacing ratio |

### Drilling Summary

| Statistic | Description |
|-----------|-------------|
| Total Drill Metres | Sum of planned depths across all holes |
| Average Depth | Mean hole depth (m) |
| Min / Max Depth | Shallowest and deepest holes |
| Average Diameter | Mean hole diameter (mm) |
| Total Subdrill | Sum of subdrill across all holes (m) |

### Charging Summary

| Statistic | Description |
|-----------|-------------|
| Total Explosive Mass | Sum of all explosive deck masses (kg and tonnes) |
| Average Charge per Hole | Mean explosive mass per hole (kg) |
| Total Stemming | Sum of stemming lengths (m) |
| Average Stemming Length | Mean stemming per hole (m) |
| Powder Factor (kg/t) | Explosive mass per tonne of rock (requires Voronoi volume) |
| Powder Factor (kg/m3) | Explosive mass per cubic metre of rock (requires Voronoi volume) |
| Products Breakdown | Table showing total mass by explosive product type |

### Timing Summary

| Statistic | Description |
|-----------|-------------|
| Total Initiation Time | Time from first to last hole firing (ms) |
| Average Inter-hole Delay | Mean delay between sequential holes (ms) |
| Unassigned Holes | Holes with no delay value |
| Duplicate Delays | Holes sharing identical firing times |
| Min / Max Delay | Earliest and latest firing times (ms) |

---

## Voronoi Analysis

Voronoi diagrams partition space into cells -- one per hole -- where each cell contains all points closer to that hole than any other. This enables per-hole rock volume and powder factor calculations.

### What Voronoi Shows

- Per-hole area and volume assignments
- Burden/spacing distribution visualisation
- Gaps and clustering in the pattern
- Load balancing across the blast

### How It Works

1. Delaunay triangulation of hole collar positions
2. Voronoi diagram constructed from the triangulation
3. Edge cells are clipped to the blast boundary (convex hull, user polygon, or surface outline)
4. Cell area calculated for each hole
5. Rock volume = cell area x bench height
6. Powder factor = explosive mass / rock volume

### How to Access

Open the Voronoi overlay from the Analysis section of the toolbar. All holes must have bench height set for volume calculations to work.

---

---

## Voronoi PPV Modes

In addition to the area / volume / powder-factor metrics above, the Voronoi dropdown in v1.0.75+ can colour cells by one of four **PPV modes**: Max PPV, Dominant Hole, Compliance, or Max Allowable Charge. These modes evaluate the empirical scaled-distance site law against user-defined monitor points rather than rock-volume geometry. See **[PPV Voronoi Modes](ppv-voronoi-modes.md)** for the full reference.

---

## Related Topics

- [Analytics Overview](overview.md)
- [PPV Voronoi Modes (A/B/C/E)](ppv-voronoi-modes.md)
- [Charging Overview](../charging/overview.md)
- [Print to PDF](../printing/pdf-print.md)
