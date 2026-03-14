# DXF Import

Kirra can import AutoCAD DXF files to bring in hole locations, bench boundaries, surface contours, and design geometry. Both 2D and 3D DXF files are supported.

---

## Accessing the DXF Import

1. Click **File → Import** or press `Ctrl+I`
2. Select **DXF** as the file type
3. Browse to your `.dxf` file and click **Open**
4. The **DXF Import** dialog opens — see below for layer options

---

## DXF Import Dialog

The dialog shows a list of all layers found in the DXF file. For each layer you can:

| Control | Description |
|---------|-------------|
| **Import as** | Set the entity type: *Holes*, *Boundary*, *Surface Contour*, *Design Line*, or *Ignore* |
| **Colour** | Preview colour of the layer as it will appear in Kirra |
| **Point count** | Number of point or block entities found in this layer |

Click **OK** to import the selected layers.

---

## Importing Hole Locations from DXF

Holes are read from **POINT** entities, **BLOCK INSERT** entities (block references), or **CIRCLE** entities in the DXF:

- **POINT / BLOCK INSERT** — each entity becomes one hole; the XYZ position becomes the collar coordinate
- **CIRCLE** — the centre of each circle becomes the collar, and the radius is used to infer hole diameter if the **Infer diameter from circle radius** option is checked

### Hole ID Assignment
- If the layer contains **TEXT** or **MTEXT** entities near each hole, Kirra can attempt to match them as Hole IDs — enable **Match labels to holes** in the import options
- Otherwise, Kirra auto-assigns IDs based on the import prefix set in **Project → Settings → Import Defaults**

### Depth, Bearing, and Inclination
DXF does not natively store drill geometry. After import, Kirra will assign default depth, bearing, and inclination from **Project → Settings → Import Defaults**. Edit individual holes afterwards in the right panel.

---

## Importing Boundaries and Lines

Layers set to **Boundary** are loaded as closed polygons overlaid on the canvas. They can be used as:
- Visual reference
- Clip boundaries for pattern generation (see [Pattern Generation](../blast-design/pattern-generation.md))

Layers set to **Design Line** are loaded as open polylines for use with the **Along Polyline** pattern generator.

---

## Supported DXF Versions

| DXF Version | Support |
|-------------|---------|
| R12 / R14 | ✅ Full |
| 2000 / 2004 | ✅ Full |
| 2007 / 2010 | ✅ Full |
| 2013 / 2018 | ✅ Full |
| Binary DXF | ✅ Supported |

---

## Coordinate Systems

DXF files do not always embed coordinate system metadata. If your DXF is in a local mine grid, the coordinates are used as-is. If the file is in a projected system (e.g., UTM), ensure your Kirra project's coordinate system matches — set it in **Project → Settings → Coordinate System**.

---

## Common Issues

| Issue | Solution |
|-------|---------|
| No holes appear after import | Check that the hole layer is set to *Holes* and that entities are POINT or BLOCK INSERT types |
| Holes appear in the wrong location | Coordinate system mismatch — verify project settings |
| Import fails with "unsupported entity" warning | Some advanced DXF entities (e.g., SPLINE) are not supported; convert to POLYLINE in CAD first |
| Text labels not matched | Enable **Match labels to holes** and ensure text is on the same layer or a designated label layer |

---

## Related Topics

- [CSV Formats](csv-formats.md)
- [DXF Export](../exporting/dxf-export.md)
- [Pattern Generation — Polygon and Polyline](../blast-design/pattern-generation.md)
