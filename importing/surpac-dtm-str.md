# Surpac DTM / STR Import

Kirra imports Surpac surface files as triangulated 3D surfaces. The Surpac format uses a paired-file system: an STR file containing vertex coordinates and a DTM file containing triangle topology.

> *Screenshot coming soon*

---

## How to Import

1. Click **File > Import**
2. Select **both** your `.dtm` and `.str` files together
3. Both files must share the same base filename (e.g., `terrain.dtm` + `terrain.str`)
4. The surface appears in the TreeView and is visible in both 2D and 3D views

---

## File Pair

| File | Contains | Example |
|------|----------|---------|
| `.str` (String) | Unique vertex coordinates (X, Y, Z) | `terrain.str` |
| `.dtm` (Digital Terrain Model) | Triangle connectivity (which vertices form each triangle) | `terrain.dtm` |

Both files are required -- the DTM references vertex positions defined in the STR.

---

## Coordinate Order

> **Important:** Surpac files store coordinates as **Northing (Y), Easting (X), Elevation (Z)** -- the opposite of the typical X, Y, Z convention. Kirra handles this swap automatically on import and export.

---

## STR File Format

The STR file stores unique 3D vertices with 1-based indexing:

```
filename, dd-Mmm-yy,,description
0, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000
32000, Y1, X1, Z1,
32000, Y2, X2, Z2,
...
0, 0.000, 0.000, 0.000, END
```

- String number `32000` indicates surface vertices
- Each vertex appears exactly once (no duplicates)
- Terminated by an END marker

---

## DTM File Format

The DTM file defines how vertices connect to form triangles:

```
filename.str,
0, 0.000, 0.000, 0.000, END
OBJECT, 1,
TRISOLATION, 1, neighbours=no,validated=true,closed=no
1, 2, 3, 1, 0, 0, 0,
2, 3, 4, 1, 0, 0, 0,
...
END
```

Each triangle line contains: Triangle ID, Vertex 1, Vertex 2, Vertex 3, and three neighbour references (0 = boundary edge).

---

## After Import

Once imported, the surface is available for:

- Gradient colouring (elevation, hillshade, scientific colour maps)
- Boolean operations with other surfaces
- Grade control (apply surface elevation to blast holes)
- Contour generation
- GeoTIFF export
- Blast analytics overlay

---

## Exporting Back to Surpac

You can export surfaces back to Surpac format via **File > Export > Surpac DTM (Surfaces)**. Kirra generates both `.dtm` and `.str` files with vertex deduplication and proper 1-based indexing.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Missing files" error | Both .dtm and .str files must be selected together and share the same base filename |
| Surface appears empty | Check that the DTM file references valid vertex indices from the STR file |
| Coordinates look wrong | Verify your Surpac files use the expected Northing/Easting order |

---

## Related Topics

- [Importing Surfaces](../surfaces/importing-surfaces.md)
- [Surface Gradients](../surfaces/gradients.md)
- [Coordinate System](../reference/coordinate-system.md)
