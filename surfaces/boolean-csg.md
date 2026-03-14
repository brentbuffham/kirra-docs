# Surface Boolean & CSG Operations

Kirra provides tools for combining, subtracting, and intersecting surfaces. These operations enable pit shell manipulation, surface clipping, and design surface combination directly within the application.

> *Screenshot coming soon -- boolean operation preview with colour-coded regions*

---

## Surface Boolean

Performs boolean operations (Union, Difference, Intersection) on two triangulated surfaces.

### How It Works

1. Select two surfaces (A and B) in the dialog
2. Kirra finds where the surfaces intersect
3. Triangles along the intersection boundary are split
4. Each region is classified as above, below, or outside the other surface
5. Colour-coded preview shows the regions
6. Toggle which regions to keep
7. Click **Merge** to combine the kept regions into a new surface

### Operations

| Operation | Result |
|-----------|--------|
| **Union** | Combined volume of both surfaces |
| **Difference** | Surface A minus the volume of B |
| **Intersection** | Only the overlapping region |

### Cleanup Pipeline

After merging, Kirra runs a configurable cleanup pipeline:

| Step | Description |
|------|-------------|
| Seam Deduplication | Merges vertices at the intersection boundary |
| Weld | Merges nearby vertices within snap tolerance |
| Degenerate Removal | Removes zero-area triangles |
| Sliver Removal | Removes extremely thin triangles (optional) |
| Crossing Cleanup | Removes self-intersecting triangles (optional) |
| Overlap Removal | Removes duplicate triangles with opposing normals (optional) |
| Stitch | Bridges unpaired boundary edges (optional) |

### Access

Click the **Surface Boolean** button in the Surface toolbar. Requires at least 2 loaded surfaces.

---

## Solid CSG

Constructive Solid Geometry (CSG) operations on closed watertight 3D solids. Supports union, subtract, and intersect operations.

Unlike the surface boolean (which works on open triangulated surfaces), Solid CSG requires both meshes to be closed solids.

### Access

Click the **Solid CSG** button in the Surface toolbar. Requires at least 2 loaded closed surfaces.

---

## Surface Intersection

Computes the intersection lines where two surfaces meet, producing KAD polyline entities.

### Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| Vertex Spacing | 1.0 m | Simplification tolerance (0 = keep all vertices) |
| Close Polygons | true | Create closed polylines |
| Colour | Yellow | Colour of result polylines |
| Line Width | 3 | Thickness of output lines |

### Access

Click the **Surface Intersection** button in the Surface toolbar. Requires at least 2 loaded surfaces.

---

## Extrude KAD to Solid

Extrudes a closed KAD polygon vertically to create a 3D solid mesh. Useful for creating pit shells, bench outlines, or exclusion zone volumes from 2D design boundaries.

### Access

Click the **Extrude KAD** button in the Surface toolbar. Requires at least 1 closed KAD polygon entity.

---

## KAD Boolean

Performs 2D boolean operations on KAD polygon entities (union, difference, intersection). Useful for combining or subtracting design boundaries.

### Access

Click the **KAD Boolean** button in the Surface toolbar. Requires at least 2 KAD polygon entities.

---

## Section Plane

Creates a cross-section cutting plane through loaded surfaces for visualisation of subsurface geometry and design verification.

### Access

Click the **Section Plane** button in the Surface toolbar. Requires at least 1 loaded surface.

---

## Related Topics

- [Importing Surfaces](importing-surfaces.md)
- [Mesh Editing & Clean Mesh](mesh-editing.md)
- [Surface Gradients](gradients.md)
