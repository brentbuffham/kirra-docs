# Other Import Formats

Kirra supports a wide range of additional import formats beyond CSV, DXF, Surpac, and 3D meshes.

---

## IREDES XML (Epiroc)

Import drill plans from Epiroc drill rigs using the IREDES (Intelligent Rock Excavation Data Exchange Standard) XML format.

> **Coordinate Warning:** IREDES XML uses X for Northing and Y for Easting (opposite of standard convention). Kirra automatically swaps these on import.

---

## Orica ShotPlus SPF

Import blast hole data from Orica ShotPlus `.spf` files. The SPF format is a ZIP archive containing XML blast data. Import only -- export is not supported.

---

## Orica CBLAST CSV

Import CBLAST CSV files, which use 4 records per hole (HOLE, PRODUCT, DETONATOR, STRATA). Kirra parses the multi-record structure and consolidates it into standard blast hole objects.

---

## KML / KMZ (Google Earth)

Import blast holes and geometry from Google Earth KML or KMZ files. Supports Placemarks with ExtendedData, polylines, polygons, and 3D geometry with altitude.

---

## Shapefile (ESRI)

Import ESRI Shapefiles (`.shp` with accompanying `.shx`, `.dbf`, and `.prj` files). Supports Point, PolyLine, and Polygon geometry types with Z variants.

---

## LAS / LAZ (LiDAR Point Cloud)

Import ASPRS LAS LiDAR files (versions 1.2, 1.3, 1.4). Supports point classification, intensity, RGB, and GPS time.

---

## Point Cloud (XYZ, PTS, PTX, CSV)

Import point cloud files in various text formats:

| Format | Extension | Description |
|--------|-----------|-------------|
| XYZ | `.xyz`, `.txt` | Space-separated X Y Z with optional R G B |
| PTS | `.pts` | Count header + X Y Z Intensity R G B |
| PTX | `.ptx` | Leica scanner format |
| CSV | `.csv` | Comma-separated X,Y,Z with optional R,G,B |

---

## GeoTIFF Imagery

Import georeferenced raster images (`.tif`, `.tiff`). Supports:
- Single-band elevation rasters
- RGB/RGBA imagery (orthophotos, aerial images)
- Geotransform metadata for coordinate mapping

Imported images appear as draped layers in both the 2D and 3D views.

---

## KAP (Kirra App Project)

![Opening a KAP project file](../screenshots/openKAP-KirraApplicationProject.png)
*Opening a KAP (Kirra App Project) file loads the complete project.*

![KAP file compatibility warning](../screenshots/KAPwarning.png)
*Kirra may display a warning if the KAP file was created with a different version.*

Import a complete Kirra project from a `.kap` file. KAP is a ZIP archive containing:

| File | Contents |
|------|----------|
| `manifest.json` | Version, creation date, metadata |
| `holes.json` | All blast hole data |
| `drawings.json` | KAD drawing entities |
| `surfaces.json` | Surface points, triangles, and properties |
| `images.json` | GeoTIFF/imagery metadata |
| `products.json` | Explosive product definitions |
| `charging.json` | Charge configurations and deck data |
| `configs.json` | Application settings |
| `layers.json` | Layer definitions and visibility |
| `textures/` | Texture images for OBJ surfaces |
| `images/` | Imported GeoTIFF imagery |

---

## KAD (Kirra App Drawing)

Import Kirra's native drawing format (`.kad`). Contains point, line, polygon, circle, and text entities with coordinates, colours, and layer assignments.

---

## Wenco NAV

Import Wenco NAV ASCII files (`.nav`) containing TEXT, POINT, and LINE entities for fleet management integration.

---

## Epiroc Surface Manager

Import Epiroc Surface Manager coordinate files (`.geofence`, `.hazard`, `.sockets`, `.txt`). These use Y,X (Northing, Easting) coordinate ordering.

---

## Related Topics

- [CSV Import](csv-formats.md)
- [DXF Import](dxf.md)
- [Surpac DTM/STR](surpac-dtm-str.md)
- [3D Mesh Import](3d-mesh.md)
