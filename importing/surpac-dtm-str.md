# Surpac DTM / STR Surface Import

Kirra can import digital terrain models (DTMs) and string files from Surpac to provide surface elevation data for blast designs. Imported surfaces are used for collar elevation setting, subgrade calculations, and 3D visualisation.

---

## Supported File Types

| Format | Extension | Description |
|--------|-----------|-------------|
| Surpac DTM | `.dtm` | Triangulated surface mesh |
| Surpac STR | `.str` | String/polyline data (bench edges, topo contours, design strings) |

---

## Importing a Surpac DTM

1. Click **File → Import → Surface (Surpac DTM)**
2. Browse to your `.dtm` file and click **Open**
3. The surface loads as a translucent mesh overlay on the canvas
4. Kirra uses the surface to:
   - Calculate **toe elevation** for holes by projecting the hole bottom onto the surface
   - Provide elevation colouring in 3D view
   - Drive **subgrade** calculations relative to the seam surface

### DTM Display Options
- Toggle DTM visibility: **View → Surfaces → [surface name]**
- Adjust transparency and colour ramp in **View → Surface Display Settings**
- Multiple DTMs can be loaded simultaneously (e.g., bench top and bench floor)

---

## Importing a Surpac STR

1. Click **File → Import → Strings (Surpac STR)**
2. Browse to your `.str` file and click **Open**
3. The **STR Import** dialog shows each string (segment group) in the file
4. For each string, set the **Import as** type:
   - **Bench boundary** — use as a polygon for hole clipping or reference
   - **Contour** — display as a contour line overlay
   - **Design string** — use as a source line for the Along Polyline pattern generator
   - **Ignore** — do not import this string

5. Click **OK** to load the selected strings

---

## Using Surfaces for Collar Elevation

When a DTM is loaded, Kirra can automatically assign collar elevations to imported or generated holes:

1. Go to **Project → Settings → Surface Settings**
2. Enable **Auto-assign collar elevation from DTM**
3. Select the DTM to use from the drop-down
4. Click **Apply** — collar elevations are updated for all holes by projecting their Easting/Northing position onto the loaded surface

To update collar elevations after moving holes, use **Pattern → Recalculate Elevations from Surface**.

---

## Limitations

- Kirra reads Surpac DTM version 3 and later
- Very large DTM files (> 500,000 triangles) may slow rendering — consider clipping the DTM to the project area in Surpac before import
- STR files with arcs are approximated as polylines on import

---

## Related Topics

- [CSV Formats](csv-formats.md) — alternative hole data source
- [Pattern Generation](../blast-design/pattern-generation.md) — using imported strings as pattern boundaries
- [Coordinate System](../reference/coordinate-system.md) — ensuring DTM and project coordinates match
