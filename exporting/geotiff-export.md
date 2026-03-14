# GeoTIFF Export

Export surfaces as georeferenced raster images for use in GIS software such as QGIS, ArcGIS, and Global Mapper.

> *Screenshot coming soon*

---

## How to Export

1. Load a surface with a gradient applied
2. Click **File > Export > Export Images as GeoTIFF**
3. Configure the export settings (see below)
4. Click **Export**
5. The GeoTIFF file is downloaded

---

## Export Settings

| Setting | Description |
|---------|-------------|
| **EPSG Code** | Coordinate reference system for the output file (e.g., EPSG:32755 for UTM Zone 55S) |
| **Resolution Mode** | Controls the output pixel density (see table below) |

### Resolution Modes

| Mode | Description | Typical Use |
|------|-------------|-------------|
| **Screen** | Uses the cached 2D canvas resolution | Quick preview |
| **DPI** | User-specified dots per inch (e.g., 300 DPI for print) | Print-quality reports |
| **Pixels-per-metre** | Direct specification (e.g., 10 px/m) | Engineering precision |
| **Full** | Maximum resolution export | Maximum detail |

> **Tip:** Higher resolution produces larger files and takes longer to export. Choose based on your final use -- screen display, printing, or archival.

---

## What Gets Exported

The GeoTIFF contains:

- **Raster data**: RGB pixels rendered from the surface gradient (elevation colours, hillshade, scientific colour maps, or texture)
- **Geotransform**: Maps pixel coordinates to real-world coordinates
- **CRS metadata**: The EPSG code you selected

The gradient visible in Kirra at the time of export is preserved in the GeoTIFF.

---

## Use Cases

- **GIS integration** -- Import into QGIS or ArcGIS as a base layer
- **Reporting** -- Generate high-resolution surface images for blast reports
- **Archive** -- Document pre/post-blast surface conditions with embedded coordinates

---

## Related Topics

- [Surface Gradients](../surfaces/gradients.md)
- [Importing Surfaces](../surfaces/importing-surfaces.md)
- [CSV Export](csv-export.md)
