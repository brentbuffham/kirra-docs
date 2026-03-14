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
