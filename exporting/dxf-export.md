# DXF Export

Kirra exports blast designs and drawings to AutoCAD DXF format for use in CAD packages, mine planning software, and survey systems.

> *Screenshot coming soon*

---

## Export Options

Kirra provides several DXF export variants:

| Export Type | Description |
|-------------|-------------|
| **DXF Holes** | Compact 2-layer format with COLLAR (point entities) and TRACK (3D polyline from collar to toe) layers |
| **DXF KAD** | KAD drawing entities exported with entity-per-layer naming. Points become POINT, lines become POLYLINE, polygons become closed POLYLINE, circles become CIRCLE, text becomes TEXT |
| **DXF Vulcan** | 3D POLYLINE with Vulcan XData tags (hole diameter, hole ID) for direct import into Vulcan mine planning software |
| **DXF 3DFACE** | Surface triangles exported as 3DFACE entities -- one entity per triangle |
| **Binary DXF** | Binary encoding of any of the above -- 25% smaller file size, 5x faster to process |

---

## How to Export

1. Click **File > Export**
2. Select the DXF export variant you need
3. Choose a save location and filename
4. The DXF file is downloaded

---

## DXF Holes Layers

| Layer | Content |
|-------|---------|
| `COLLAR` | POINT entities at collar positions |
| `TRACK` | 3D POLYLINE from collar to toe |

---

## DXF KAD Layers

Each KAD entity creates its own layer named after the entity. DXF colour codes are converted from Kirra hex colours.

---

## Coordinate System

Exported coordinates use the project coordinate system with no transformation applied. Ensure your receiving software uses the same datum and projection.

---

## Related Topics

- [DXF Import](../importing/dxf.md)
- [CSV Export](csv-export.md)
- [GLTF/GLB Export](gltf-export.md)
