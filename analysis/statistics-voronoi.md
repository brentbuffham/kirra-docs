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

Voronoi cells divide the blast into one patch of ground per hole, and colour each by powder
factor, mass, volume, area, length, firing time, SDoB, stemming or predicted vibration.

The full guide — how to show the cells, every display choice, how cells are built and
trimmed, the legend ranges and printing — is in **[Voronoi Cells](voronoi.md)**. The six
vibration displays are covered in **[PPV Voronoi Modes](ppv-voronoi-modes.md)**.

---

## Related Topics

- [Voronoi Cells](voronoi.md)
- [PPV Voronoi Modes](ppv-voronoi-modes.md)
- [Blast Analysis Shader](overview.md)
- [Charging Overview](../charging/overview.md)
- [Print to PDF](../printing/pdf-print.md)
