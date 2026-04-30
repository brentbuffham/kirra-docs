# Supported File Formats

A complete reference of every file format Kirra can read (import) and write
(export), grouped by category to mirror the **File** menu.

This page is the canonical "what does Kirra support?" cheat-sheet. For
walkthroughs of individual formats, see the per-format pages under
[Importing Data](../importing/csv-formats.md) and
[Exporting Data](../exporting/csv-export.md).

> **Source of truth:** every entry below is registered in
> `src/fileIO/init.js`. If a format isn't registered there, it isn't
> supported — even if a parser/writer file exists on disk.

---

## At a glance

- **24 importers** active (parsers)
- **30 exporters** active (writers — CSV variants count separately)
- **Disabled / not registered:** Deswik DUF (`.duf`), Orica SPF writer,
  DetNet `.vs3` binary

> **Status legend used in the tables below**
>
> - **Yes** — registered and verified against real third-party files.
> - **Yes (untested)** — registered and runs without errors, but has not
>   yet been round-tripped against the vendor's own software. Treat
>   output as preliminary and please report back if you exchange files
>   successfully or unsuccessfully.
> - **Yes (experimental)** — registered but with known coverage gaps;
>   see the row's notes.
> - **—** — not supported in that direction.

---

## Blasting

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Blast Hole CSV | `.csv` | Yes | Yes | Auto-detects 4 / 7 / 9 / 12 / 14 / 20 / 25 / 30 / 32 / 35 column variants on import. Export presets: 12-col, 14-col, 35-col (all data), Actual (measured), and All-Columns (dynamic). |
| Custom CSV | `.csv`, `.txt` | Yes | Yes | Field-mapping with smart row detection on import; user-defined column order on export. |
| Orica ShotPlus SPF | `.spf` | Yes | — | ZIP archive containing XML blast data. SPF export is not implemented. |

See: [CSV Formats](../importing/csv-formats.md) ·
[CSV Export](../exporting/csv-export.md)

---

## CAD

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Kirra KAD | `.kad`, `.txt` | Yes | Yes | Native Kirra format — point, line, poly, circle, text. |
| DXF (ASCII) | `.dxf` | Yes | — | Reads POINT, LINE, POLYLINE, CIRCLE, ELLIPSE, TEXT, 3DFACE. |
| DXF (Binary) | `.dxf` | Yes | Yes | About 25% smaller and 5x faster than ASCII. |
| DXF Holes | `.dxf` | — | Yes | Compact 2-layer format for blast holes. |
| DXF KAD | `.dxf` | — | Yes | KAD drawings (points, lines, polygons, circles, text). |
| DXF Vulcan | `.dxf` | — | Yes | 3D POLYLINE with Vulcan XData tags. ASCII and Binary variants. |
| DXF 3DFACE | `.dxf` | — | Yes | Surface triangles. |
| DWG | `.dwg` | Yes (experimental) | — | R2010 / R2013 / R2018 only. Decodes POLYLINE_3D/2D, VERTEX_3D/2D, 3DFACE, LWPOLYLINE, MTEXT. R2007 and earlier are not supported. LINE / POINT / CIRCLE / ARC / TEXT / INSERT decoders are TODO. |

See: [DXF Import](../importing/dxf.md) ·
[DXF Export](../exporting/dxf-export.md)

---

## GIS

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| ESRI Shapefile | `.shp` (in/out), `.zip` (out) | Yes | Yes | Point, PolyLine, Polygon, including Z variants. Export bundles `.shp / .shx / .dbf / .prj` as a ZIP. |
| GeoTIFF (raster) | `.tif`, `.tiff` | Yes | — | Elevation rasters and RGB / RGBA imagery. |
| GeoTIFF Imagery export | `.png`, `.pgw` | — | Yes | PNG plus ESRI world file. |
| GeoTIFF Elevation export | `.xyz`, `.csv` | — | Yes | XYZ point cloud derived from raster elevation. |
| KML / KMZ | `.kml`, `.kmz` | Yes | Yes | Google Earth — blast holes and geometry. |

See: [GeoTIFF Export](../exporting/geotiff-export.md) ·
[Other Import Formats](../importing/other-formats.md)

---

## Point Cloud / LiDAR

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| ASPRS LAS | `.las`, `.laz` (in) / `.las` (out) | Yes | Yes | LAS versions 1.2, 1.3, 1.4. |
| Point Cloud (generic) | `.csv`, `.xyz`, `.txt`, `.pts`, `.ptx` | Yes | — | Auto-detects optional RGB / intensity columns. |
| Point Cloud XYZ export | `.xyz`, `.txt` | — | Yes | `X Y Z` or `X Y Z R G B`. |
| Point Cloud CSV export | `.csv` | — | Yes | `X,Y,Z` or `X,Y,Z,R,G,B`. |
| Point Cloud PTS export | `.pts` | — | Yes | Count header, `X Y Z I R G B`. |
| Point Cloud PTX export | `.ptx` | — | Yes | Leica scanner single-scan layout. |

---

## 3D Mesh

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Wavefront OBJ | `.obj` | Yes | Yes | Vertices, faces, UVs, normals, materials. |
| Wavefront MTL | `.mtl` | — | Yes | Companion material file (textures, normals). |
| PLY | `.ply` | Yes | — | ASCII and Binary. Vertices, faces, normals, colours. |
| glTF / GLB | `.gltf`, `.glb` (in) / `.glb` (out) | Yes | Yes | Meshes, textures, materials. Export is GLB only. |

See: [3D Mesh Import](../importing/3d-mesh.md) ·
[GLTF / GLB Export](../exporting/gltf-export.md)

---

## Mining Software

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| MineStar AQM | `.csv` | — | Yes | Dynamic column ordering. |
| Maptek Vulcan ARCH_D | `.arch_d` | Yes | Yes (untested) | Design file — blast holes, lines, text. **Export has not yet been round-tripped against Vulcan** — please verify before relying on it for production. |
| Surpac STR | `.str` | Yes | Yes | Strings — blast holes and KAD entities. |
| Surpac DTM | `.dtm` | Yes | Yes | Digital Terrain Model — point cloud. |
| Surpac Surface (DTM + STR) | `.dtm`, `.str` | Yes | — | Triangulated surface from a DTM + STR pair. |
| Epiroc Surface Manager | `.geofence`, `.hazard`, `.sockets`, `.txt` | Yes | Yes | Y, X coordinate files. |
| Epiroc IREDES XML | `.xml` | Yes | Yes | Drill plan exchange. |
| CBLAST | `.csv` | Yes | Yes | 4 records per hole: HOLE, PRODUCT, DETONATOR, STRATA. |
| Deswik DUF | `.duf` | — | — | Currently disabled in the registry — not yet verified against real `.duf` files. |

See: [Surpac DTM / STR](../importing/surpac-dtm-str.md) ·
[Other Import Formats](../importing/other-formats.md) ·
[Other Export Formats](../exporting/other-formats.md)

---

## Electronic Timing

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Davey Bickford BPD | `.bpd` | Yes | Yes | XML blast plan. CRC validated on load. |
| Orica i-kon IKN | `.ikn` | — | Yes (untested) | ZIP wrapper around `TimingPlan.xml`. **Export has not yet been verified against an Orica i-kon logger / SHOTPlus** — treat as preliminary. |
| DetNet DigiShot 4G CSV | `.csv` (out) / `.parvs3` (in) | Yes | Yes | Same schema both directions. The `.parvs3` extension is used on import to avoid colliding with other CSV parsers. |
| DetNet ViewShot Text | `.vxt` | Yes | Yes | ASCII companion to `.vs3`. **`.vs3` binary is intentionally not supported** — re-save to `.vxt` from ViewShot before importing. |

See: [Electronic Timing Constructs](../blast-design/electronic-timing-constructs.md)

---

## Fleet Management

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Wenco NAV ASCII | `.nav` | Yes | Yes | TEXT, POINT, LINE entities. |

---

## Untested exports — please verify before production use

These formats are registered and produce files without errors, but they
**have not yet been round-tripped against the vendor's own software**
in real-world testing. The output may be subtly off (units, axis
swaps, missing metadata, header quirks) until someone exchanges a file
end-to-end.

| Format | Direction | What still needs verification |
|---|---|---|
| Maptek Vulcan ARCH_D (`.arch_d`) | Export | Re-import in Vulcan to confirm hole geometry, layer name, and any vendor-specific Attr templates are preserved. |
| Orica i-kon IKN (`.ikn`) | Export | Load into an Orica i-kon logger / SHOTPlus and verify the `TimingPlan.xml` schema, hole IDs, and delays are accepted. |
| **Other formats may also be untested** | — | If you successfully (or unsuccessfully) exchange a file with a third-party system, please open an issue on the Kirra repo so this list can be kept honest. |

If you are documenting a new format and you have not yet verified it
against the vendor's tooling, mark it **"Yes (untested)"** in the
matrix above rather than plain **"Yes"**.

---

## Disabled or partial formats

These formats have parser/writer source on disk but are **not registered**
in the FileManager, so they will not appear in any registry-driven UI:

| Format | Status |
|---|---|
| Deswik DUF (`.duf`) | Reader/writer incomplete — untested against real `.duf` files. UI buttons hidden in `index.html`. |
| Orica ShotPlus SPF writer | SPF read works; write is not implemented. |
| DetNet `.vs3` binary | Binary layout is not fully reverse-engineered and ViewShot rejects round-tripped exports. Use `.vxt` instead. |

---

## How extensions resolve when there is overlap

Some extensions (notably `.csv` and `.dxf`) are claimed by multiple
parsers. Kirra resolves these with a combination of:

1. **The menu entry the user clicked** — e.g. *File → Import → CBLAST*
   forces the CBLAST parser regardless of the file's contents.
2. **Header sniffing** — for the generic CSV importer, the column count
   and header row decide which Blast Hole CSV variant is used (4 / 7 / 9
   / 12 / 14 / 20 / 25 / 30 / 32 / 35 columns).
3. **Magic-byte detection** — DXF auto-detects ASCII vs Binary on the
   first read.

If you want a specific parser to run, choose the matching menu item
rather than dragging the file onto the canvas.
