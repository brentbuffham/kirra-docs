# Other Export Formats

Kirra supports a wide range of export formats beyond CSV, DXF, GLTF, and GeoTIFF.

---

## IREDES XML (Epiroc)

Export drill plans to IREDES XML format for transfer to Epiroc drill rigs. Includes hole geometry, pattern definitions, and machine settings.

> **Coordinate Note:** IREDES uses X for Northing and Y for Easting. Kirra handles the swap automatically on export.

---

## MineStar AQM (Caterpillar)

Export blast hole data to Cat MineStar Activity Queue Manager CSV format. Supports dynamic column ordering -- you specify which columns to include and their order in the export dialog.

---

## Orica CBLAST CSV

Export blast hole data in CBLAST format with 4 records per hole (HOLE, PRODUCT, DETONATOR, STRATA) for Orica systems.

---

## Maptek Vulcan ARCH_D

Export blast holes and CAD linework to a Vulcan design archive (`.arch_d`).
Vulcan creates **real blast holes** from the file -- load it with
**Load Archive**, tick *Only list BLAST layers*, and pick the layer.

Each hole carries its ID, collar, grade and toe, sub-drill, dip, bearing, burden
and spacing. Holes with sub-drill export with three points (collar, grade, toe);
holes without export with two.

**Three things the file does not carry.** Each is quick to set right, and knowing
when saves re-exporting:

| | What to do |
|---|---|
| **Burden & spacing** | Check and correct these **in Kirra, before exporting**. They come from Kirra's row detection and can be wrong on a curved or irregular pattern. |
| **Drill rig** | None is assigned. Assign one **in Vulcan, after Load Archive**. |
| **Colours** | Palette indices, and every Vulcan project can define its own palette. |

> **Why no drill rig?** Vulcan stores no hole diameter -- it stores a rig *name*,
> and resolves that against the receiving project's `specifications.dab`. A name
> invented by Kirra would resolve to nothing, so none is written. Maptek's own
> BlastLogic leaves a placeholder for the same reason.

**Default appearance.** Holes arrive as a filled red circle (palette index 33)
with the hole ID above in light grey (243) and the hole length below in dark
grey (229), at 0.8 cm on a 1:100 map scale. CAD linework maps its Kirra colour
to the nearest index in Vulcan's standard palette. If your project uses a
different palette, recolour in Vulcan after loading.

> **Multiple hole intervals.** A Vulcan hole can carry several intervals -- one
> per row of its *Hole Intervals* grid. Kirra's model is collar, grade and end,
> so a hole imported with more than one interval keeps the last (the bench floor)
> and the others are discarded. Re-exporting such a hole will not restore them.

---

## Surpac DTM / STR

Export surfaces to Surpac format (paired `.dtm` and `.str` files). Kirra automatically deduplicates shared vertices and writes both files with matching base filenames.

---

## KML / KMZ (Google Earth)

Export blast patterns and geometry to Google Earth format. Holes are exported as Placemarks with ExtendedData, along with polylines and polygons.

---

## Shapefile (ESRI)

Export blast data to ESRI Shapefile format. Produces a ZIP archive containing `.shp`, `.shx`, `.dbf`, and `.prj` files.

---

## Point Cloud (XYZ, PTS, PTX, CSV)

Export point data in various text formats:

| Format | Extension | Description |
|--------|-----------|-------------|
| XYZ | `.xyz` | Space-separated X Y Z with optional R G B |
| CSV | `.csv` | Comma-separated X,Y,Z with optional R,G,B |
| PTS | `.pts` | Count header + X Y Z I R G B |
| PTX | `.ptx` | Leica scanner format |

---

## LAS (LiDAR)

Export point data to ASPRS LAS format.

---

## KAP (Kirra App Project)

Save a complete Kirra project as a `.kap` file (ZIP archive containing all blast holes, surfaces, drawings, images, charging, products, and settings). Use this for full project backup and sharing.

---

## KAD (Kirra App Drawing)

Export KAD drawing entities (points, lines, polygons, circles, text) to Kirra's native `.kad` format.

---

## Wenco NAV

Export to Wenco NAV ASCII format for fleet management integration.

---

## Epiroc Surface Manager

Export coordinate files in Epiroc Surface Manager format (`.geofence`, `.hazard`, `.sockets`).

---

## Related Topics

- [CSV Export](csv-export.md)
- [DXF Export](dxf-export.md)
- [GLTF/GLB Export](gltf-export.md)
- [GeoTIFF Export](geotiff-export.md)
