# DXF Import

Kirra imports AutoCAD DXF files (both ASCII and binary formats) and converts them into blast holes and KAD drawing entities.

> *Screenshot coming soon*

---

## How to Import

1. Click **File > Import**
2. Select your `.dxf` file
3. Kirra auto-detects whether the file is ASCII or binary DXF
4. Entities are imported and appear in the TreeView

---

## Supported DXF Entity Types

| DXF Entity | Imported As | Notes |
|------------|-------------|-------|
| POINT | KAD point or blast hole collar | Auto-detected based on attributes |
| LINE | KAD line (2-point polyline) | |
| POLYLINE | KAD line or polygon | Open = line, closed = polygon |
| LWPOLYLINE | KAD line or polygon | Lightweight polyline variant |
| CIRCLE | KAD circle | |
| ELLIPSE | KAD polyline | Approximated as arc segments |
| TEXT / MTEXT | KAD text entity | |
| 3DFACE | Surface triangles | Imported as triangulated surface |

---

## Layer Handling

- Each DXF layer becomes a separate entity in Kirra
- The layer name becomes the `entityName`
- DXF colour codes are converted to hex colours

---

## Binary DXF

Kirra automatically detects binary DXF files (identified by their header bytes). Binary DXF files are approximately 25% smaller and parse up to 5x faster than ASCII DXF.

---

## 3DFACE Surface Import

DXF files containing large numbers of 3DFACE entities (surface triangles) are imported using a spatial-hash vertex deduplication algorithm for fast performance. This handles files with 100,000+ triangles efficiently.

---

## Coordinate System

Full 3D coordinates (X, Y, Z) are preserved on import. No coordinate transformation is applied -- ensure your DXF uses the same coordinate system as your project.

---

## Related Topics

- [DXF Export](../exporting/dxf-export.md)
- [CSV Import](csv-formats.md)
- [Coordinate System](../reference/coordinate-system.md)
