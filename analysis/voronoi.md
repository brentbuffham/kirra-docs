# Voronoi Analysis

The Voronoi analysis tool calculates the rock volume (or area) associated with each blast hole by dividing the bench into regions — one per hole — where every point in a region is closer to that hole than to any other. This is used to estimate rock fragmentation burden and calculate powder factors.

---

## Opening Voronoi Analysis

Press `Shift+V`, or go to **Analysis → Voronoi**, or click the **Voronoi** button in the toolbar.

---

## What Voronoi Shows

Each hole's **Voronoi cell** represents the volume of rock that hole is primarily responsible for breaking. Smaller cells indicate tighter patterns; larger cells indicate areas that may be under-drilled or have wider spacing.

The overlay on the canvas shows each hole surrounded by a coloured polygon. The colour scale (configurable) indicates:
- **Area** — the 2D surface area of the Voronoi cell (m²)
- **Volume** — the estimated 3D rock volume of the cell (m³), calculated using bench height
- **Powder factor** — explosive mass ÷ rock mass for each cell (kg/t)

---

## Voronoi Settings

Open the settings from the panel header or **Analysis → Voronoi Settings**:

| Setting | Description |
|---------|-------------|
| **Bench height (m)** | Height of rock column for volume calculation. Set manually or derived from collar and toe elevations |
| **Rock density (t/m³)** | In-situ rock density for mass and powder factor calculations (default: 2.7 t/m³) |
| **Clip to boundary** | Restrict cells to a loaded blast boundary polygon — prevents edge cells from extending to infinity |
| **Colour scale** | Choose the metric to colour cells by: area, volume, or powder factor |
| **Colour ramp** | Select a colour gradient (e.g., green → red for low → high values) |
| **Show values** | Display numeric values inside each Voronoi cell |

---

## Interpreting the Results

| Observation | Implication |
|-------------|-------------|
| Uniform cell sizes | Even burden and spacing across the pattern |
| Large cells at pattern edges | Edge holes have more rock to break — consider buffer holes |
| Very small cells | Possible double-ups or over-drilling in that area |
| High powder factor cells | Holes with less rock volume relative to explosive charge — potential over-explosion |
| Low powder factor cells | Holes with large volumes and less explosive — potential underbreak or coarse fragmentation |

---

## Using Voronoi for Powder Factor

Once the Voronoi analysis is run with bench height and rock density set:

1. Each hole receives a calculated **powder factor** (kg/t and kg/m³)
2. The **Blast Statistics** panel's *Powder factor* fields are populated
3. Hover over any hole on the canvas to see its individual powder factor in the tooltip

---

## Exporting Voronoi Data

Click **Export** in the Voronoi panel to save cell data as:
- **CSV** — HoleID, Cell Area (m²), Cell Volume (m³), Powder Factor (kg/t), Powder Factor (kg/m³)
- **DXF** — Voronoi polygon layer for use in CAD or GIS

---

## Related Topics

- [Blast Statistics](blast-statistics.md) — powder factor summary
- [PPV Analytics](ppv-analytics.md) — vibration prediction
- [Charging Overview](../charging/overview.md)
