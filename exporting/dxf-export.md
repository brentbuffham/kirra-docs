# DXF Export

Kirra can export your blast design to AutoCAD DXF format for use in CAD packages, mine planning software, or survey systems.

---

## Exporting to DXF

1. Click **File → Export** or press `Ctrl+E`
2. Select **DXF** from the format list
3. Configure export options (see below)
4. Choose a save location and filename
5. Click **Export**

---

## What Gets Exported

Kirra exports the following elements to DXF, each on its own layer:

| DXF Layer | Content |
|-----------|---------|
| `KIRRA_HOLES` | Hole collar positions as POINT or CIRCLE entities |
| `KIRRA_LABELS` | Hole IDs as TEXT entities adjacent to each hole |
| `KIRRA_TOE` | Toe positions as POINT entities (if toe data exists) |
| `KIRRA_CONNECTIONS` | Timing connector lines between holes |
| `KIRRA_BOUNDARY` | Imported boundary or design strings |
| `KIRRA_SURFACE` | Surface contour lines (if surface data is loaded) |

---

## Export Options

| Option | Description |
|--------|-------------|
| **DXF version** | Select DXF format version: R14, 2000, 2004, 2010, or 2018 |
| **Holes as** | POINT, CIRCLE (scaled to diameter), or BLOCK INSERT |
| **Include labels** | Export hole ID text labels |
| **Include toe positions** | Add toe point entities on the `KIRRA_TOE` layer |
| **Include timing connectors** | Draw lines between connected holes on the `KIRRA_CONNECTIONS` layer |
| **Include surface** | Export loaded DTM contours or STR strings |
| **Colour by delay** | Assign DXF colour codes to holes based on their timing delay group |
| **Layer name prefix** | Prefix all Kirra layers with a custom string (useful when merging with existing DXF files) |

---

## Circle Radius Scaling

When holes are exported as CIRCLE entities, the radius is set to half the hole diameter in the same units as the project coordinates. If your DXF coordinate units are metres and the hole diameter is 102 mm, the exported circle radius will be `0.051 m`.

---

## Coordinate System

Exported coordinates use the project coordinate system as set in **Project → Settings → Coordinate System**. No coordinate transformation is applied on export — ensure your receiving system uses the same datum and projection.

---

## Using the DXF in Other Software

| Software | Notes |
|---------|-------|
| AutoCAD / Civil 3D | Open directly; all layers visible immediately |
| Surpac | Import as a DXF string file; holes appear as string points |
| Maptek Vulcan | Use the standard DXF import; map `KIRRA_HOLES` layer to points |
| MineStar | Use in conjunction with the AQM export for blast data |
| GIS (QGIS, ArcGIS) | Import as DXF layer; ensure coordinate system is set correctly |

---

## Related Topics

- [DXF Import](../importing/dxf.md)
- [Kirra CSV Export](kirra-csv.md)
- [Epiroc XML Export](epiroc-xml.md)
