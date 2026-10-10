# Supported File Formats

A complete reference of every file format Kirra can read (import) and write
(export), grouped by category. To reach them, click the **Import Export Print**
button (file icon) in the menu bar and choose **Import** or **Export** — or use
**File Management** in the left sidenav. The Import and Export dialogs group
formats into the tabs **Kirra**, **Blasts**, **Drawings / CAD**,
**Surfaces / Mesh**, **Geology**, **Miscellaneous** and **Legacy**.

This page is the canonical "what does Kirra support?" cheat-sheet. For
walkthroughs of individual formats, see the per-format pages under
[Importing Data](../importing/csv-formats.md) and
[Exporting Data](../exporting/csv-export.md).

---

## At a glance

- **31 importers** and **39 exporters** in Kirra's file registry (CSV and DXF variants count separately)
- **Plus formats with their own importers:** Kirra KAP / KAT projects, Vulcan `.00t` triangulations (read and write), Vulcan design databases, Datamine surfaces, block models (Datamine, Vulcan CSV, Vulcan BMF) and borehole telemetry
- **Read-only (import only) — vendor write withheld by policy:** Deswik DUF (`.duf`)
- **Not supported:** Orica SPF export, DetNet `.vs3` binary

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
| Blast Hole CSV | `.csv`, `.txt` | Yes | Yes | Import accepts 4 / 7 / 9 / 12 / 14 / 29 / 30 / 31 / 32 / 35 column files. Export presets: 4 / 7 / 9 / 12 / 14 / 30 / 32 / 35 columns. |
| Measured Data | `.csv` | Yes | Yes | Measured mass, length and comment for existing holes. |
| Custom CSV | `.csv`, `.txt` | Yes | Yes | Field-mapping with smart row detection on import; user-defined column order on export. |
| Charging CSV | `.csv` | — | Yes | Charging Summary, Charging Detail, Charging Primers or Charging Timing. |
| Orica ShotPlus SPF | `.spf` | Yes | — | ZIP archive containing XML blast data. SPF export is not implemented. |
| Paradigm Terra | `.blst` | Yes | — | Holes, monitors and annotations. |
| Borehole Telemetry | `.csv`, `.txt` | Yes | — | Downhole survey (depth / heading / inclination) turned into hole paths. On the **Miscellaneous** tab. |

See: [CSV Formats](../importing/csv-formats.md) ·
[CSV Export](../exporting/csv-export.md)

---

## CAD

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Kirra KAD | `.kad`, `.txt` | Yes | Yes | Native Kirra format — point, line, poly, circle, text. |
| Kirra KAP | `.kap` | Yes | Yes | Complete project — the blast, drawings, surfaces, imagery, every library and your work settings. |
| Kirra KAT | `.kat` | Yes | Yes | Site template — everything in a KAP except the blast (libraries and work settings). |
| DXF | `.dxf` | Yes | Yes | Import reads POINT, LINE, POLYLINE, CIRCLE, ELLIPSE, TEXT, 3DFACE, and auto-detects ASCII or binary DXF. Export writes one ASCII DXF holding any mix of blast holes (standard 2-layer or Vulcan-tagged), KAD drawings and 3DFACE surfaces. |
| DXF Surface (3DFACE) | `.dxf` | — | Yes | One `.dxf` per visible surface. On the **Surfaces / Mesh** tab. |
| Geometry CSV | `.csv`, `.txt` | Yes | Yes | Custom x,y,z or id,x,y,z CSV — points, lines, polygons, circles, text (boretrack, MWD, survey strings). |
| DWG | `.dwg` | Yes (experimental) | — | R2010 / R2013 / R2018 only — drawings, 3DFACE meshes and MTEXT. R2007 and earlier are not supported. |
| Transform (reproject CRS) | `.dxf`, `.csv`, `.kad`, `.obj`, point clouds | Yes | — | DXF, Geometry CSV, KAD, OBJ and point cloud imports with a source → target coordinate reprojection. |

See: [DXF Import](../importing/dxf.md) ·
[DXF Export](../exporting/dxf-export.md)

---

## GIS

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| ESRI Shapefile | `.shp` (in/out), `.zip` (out) | Yes | Yes | Point, PolyLine, Polygon, including Z variants. Export bundles `.shp / .shx / .dbf / .prj` as a ZIP. |
| GeoTIFF (raster) | `.tif`, `.tiff` | Yes | — | Elevation rasters and RGB / RGBA imagery. |
| GeoTIFF export | `.tif` + `.prj` | — | Yes | Coloured image of each visible surface, as shown in Kirra. |
| Elevation GeoTIFF export | `.tif` + `.prj` | — | Yes | Single-band elevation raster of each visible surface. |
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
| Wavefront OBJ | `.obj` | Yes | Yes | Vertices, faces, UVs, normals, materials. Export writes one `.obj` per visible surface; **Baked OBJ** keeps textures and materials (OBJ + MTL + images). |
| PLY | `.ply` | Yes | — | ASCII and Binary. Vertices, faces, normals, colours. |
| glTF / GLB | `.gltf`, `.glb` (in) / `.glb` (out) | Yes | Yes | Meshes, textures, materials. Export is GLB only — one per visible surface, or **Baked GLB** with textures. |
| Vulcan Triangulation | `.00t` | Yes | Yes | Maptek Vulcan triangulated surface (single file). One `.00t` per visible surface on export. |
| Datamine Surface | `.dm` (pt + tr) | Yes | — | Datamine wireframe — select both the points and triangles `.dm` files. |

See: [3D Mesh Import](../importing/3d-mesh.md) ·
[GLTF / GLB Export](../exporting/gltf-export.md)

---

## Mining Software

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| MineStar AQM | `.csv` | — | Yes | Dynamic column ordering. |
| Maptek Vulcan ARCH_D | `.arch_d` | Yes | Yes (untested) | Design file — blast holes, lines, text. **Export has not yet been round-tripped against Vulcan** — please verify before relying on it for production. |
| Maptek Vulcan Design Database | `.dgd.isis` | Yes (read-only) | — | Pick the layers to load; blasts import with their Vulcan hole attributes. Export back to Vulcan through ARCH_D. |
| Surpac STR | `.str` | Yes | Yes | Strings — blast holes and KAD entities. |
| Surpac DTM | `.dtm` | Yes | Yes | Digital Terrain Model — point cloud. |
| Surpac Surface (DTM + STR) | `.dtm`, `.str` | Yes | Yes | Triangulated surface from a DTM + STR pair. Export writes one pair per visible surface. |
| Micromine STR | `.str` | Yes | Yes | Micromine Extended Data strings — polylines, rings and points. Text is not exported. Not the same format as a Surpac `.str`. |
| 12d Archive | `.12da`, `.12daz` | Yes | — | 12d Solutions text interchange — TINs, trimeshes, strings and polylines. |
| Epiroc Surface Manager | `.geofence`, `.hazard`, `.sockets`, `.txt` | Yes | Yes | Y, X coordinate files. |
| Epiroc IREDES XML | `.xml` | Yes | Yes | Drill plan exchange. |
| CBLAST | `.csv` | Yes | Yes | 4 records per hole: HOLE, PRODUCT, DETONATOR, STRATA. |
| Datavis DBS *(legacy)* | `.sgf` | Yes | — | Datavis Drill & Blast Software blast, a format no longer in use — supplied to view historic files. Imports holes with their subdrill, decks, primers, boosters and downhole detonators; the products go to the Product Manager. The files hold no surface ties. On the **Legacy** tab. See [Other Import Formats](../importing/other-formats.md#datavis-dbs-legacy). |
| ShotPlan 3 *(legacy)* | `.xel` | Yes | Yes | SHOTPlan v3.0 blast plan, a DOS-era format no longer in use — supplied to view historic files. Imports holes, dummy holes, surface ties with their delays, benches, boundary and text. Export writes holes and ties only. See [Other Import Formats](../importing/other-formats.md#shotplan-3-legacy). |
| Deswik DUF | `.duf` | Yes (read-only) | — | Linework import, verified 2026-06-24 against a matching `.str` / `.dtm` pair (100% of STR points found byte-exact in the DUF). Export is intentionally withheld — DUF is a paid-software (Deswik) format. |

See: [Surpac DTM / STR](../importing/surpac-dtm-str.md) ·
[Other Import Formats](../importing/other-formats.md) ·
[Other Export Formats](../exporting/other-formats.md)

---

## Electronic Timing

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Davey Bickford BPD | `.bpd` | Yes | Yes | Blast plan. Coordinates in latitude / longitude need a projection on import. |
| Orica i-kon IKN | `.ikn` | — | Yes (untested) | ZIP wrapper around `TimingPlan.xml`. **Export has not yet been verified against an Orica i-kon logger / SHOTPlus** — treat as preliminary. |
| DetNet DigiShot 4G / ParVS3 | `.parvs3` | Yes | Yes | CSV-formatted, same layout both directions. The `.parvs3` extension keeps it apart from other CSV formats. |
| DetNet ViewShot Text | `.vxt` | Yes | Yes | ASCII companion to `.vs3`. **`.vs3` binary is intentionally not supported** — re-save to `.vxt` from ViewShot before importing. |

Electronic timing exports use the **Electronic Timing** row on the **Blasts** tab of the Export dialog. It picks **Davey BPD**, **Orica IKN** or **DetNet CSV** from your blast's detonator system; you can override the choice in the row's dropdown.

See: [Electronic Timing Constructs](../blast-design/electronic-timing-constructs.md)

---

## Fleet Management

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Wenco NAV ASCII | `.nav` | Yes | Yes | TEXT, POINT, LINE entities. |

---

## Geology (Block Models)

| Format | Extensions | Import | Export | Notes |
|---|---|:---:|:---:|---|
| Datamine block model | `.dm` | Yes | — | Large files are streamed. Export shows as **Coming soon**. |
| Vulcan CSV block model | `.csv`, `.txt` | Yes | Yes | Vulcan CSV with its Model Origin preamble. Large files are streamed. Exported from the Load Block Model dialog — see below. |
| Vulcan BMF block model | `.bmf` | Yes (read-only) | — | Vulcan native block model, regularised or sub-blocked. |
| Micromine block model | `.dat` | Yes | — | Micromine Extended Data block model, including rotated and sub-blocked models. Large files are streamed. |

Any loaded block model — whatever its source format — can be saved as a Vulcan CSV with
the **Export** button in the Load Block Model dialog, either whole or limited to a section.
The Export dialog's **Geology** tab still shows **Coming soon**. See
[Export a Section and Build Solids](../block-models/export-and-solids.md).

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
| **Other formats may also be untested** | — | If you successfully (or unsuccessfully) exchange a file with a third-party system, please tell us with the **Report** or **Request** button on the welcome dialog that opens when Kirra starts, so this list can be kept honest. |

If you are documenting a new format and you have not yet verified it
against the vendor's tooling, mark it **"Yes (untested)"** in the
matrix above rather than plain **"Yes"**.

---

## Disabled or partial formats

These formats are not available, or only in one direction:

| Format | Status |
|---|---|
| Deswik DUF export (`.duf`) | DUF **import** works (read-only). Export is intentionally not offered — DUF is a paid-software (Deswik) format. |
| Orica ShotPlus SPF writer | SPF read works; write is not implemented. |
| DetNet `.vs3` binary | Not supported. Save as `.vxt` in ViewShot and import that instead. |

---

## How extensions resolve when there is overlap

Some extensions (notably `.csv` and `.dxf`) are claimed by multiple
parsers. Kirra resolves these with a combination of:

1. **The Import dialog row you clicked** — e.g. the **CBLAST** row on the
   **Blasts** tab forces the CBLAST importer regardless of the file's contents.
2. **Column count** — for the Blast Hole CSV importer, the column count
   (and any header row) decides which variant is used (4 / 7 / 9 / 12 / 14
   / 29 / 30 / 31 / 32 / 35 columns).
3. **File signature** — DXF auto-detects ASCII vs Binary on the first read,
   and a dropped `.str` file is checked for the Micromine signature before
   it is treated as Surpac.

If you want a specific importer to run, choose the matching Import dialog
row rather than dragging the file onto the canvas.
