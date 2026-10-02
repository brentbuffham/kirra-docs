# Trimesh Boolean & Solid Boolean

Kirra provides tools for combining, subtracting, and intersecting surfaces and solids. These operations enable pit shell manipulation, surface clipping, and design surface combination directly within the application.

![Building triangulations for boolean operation](../screenshots/build-triangulations.png)
*Building triangulations during a surface boolean operation -- splitting triangles along the intersection boundary.*

![Completed solid after boolean merge](../screenshots/completed-solid.png)
*The completed solid after merging the kept regions from a boolean operation.*

---

## Trimesh Boolean

Performs boolean operations on two triangulated surfaces. It works on open surfaces (such as a topography and a pit design) as well as closed solids.

### Access

Click the **Trimesh Boolean** button in the **Surface** toolbar. You need at least 2 loaded surfaces.

### Step 1 — Select Surfaces

The **Trimesh Boolean — Select Surfaces** dialog asks for:

| Field | Description |
|-------|-------------|
| **Surface A** / **Surface B** | The two surfaces to combine. Use the pick button beside each list to click a surface in the view instead. |
| **Result Gradient** | Colour gradient for the result: Default, Hillshade, Viridis, Turbo, Parula, Cividis or Terrain. |
| **Use BMS Pipeline (shared vertex pool)** | On by default. Quick Boolean needs this option on. |
| **Split & Pick** / **Quick Boolean** | Choose how you will pick the result after the split (see below). |

Click **Split**. Kirra finds where the surfaces intersect, splits triangles along that line, and classifies each piece as inside or outside the other surface. If the surfaces do not overlap, Kirra reports that no intersection was found.

### Step 2a — Split & Pick

The **Trimesh Boolean — Pick Regions** dialog lists every region with its colour and triangle count. Each region is labelled by its surface, side (in or out) and number.

1. Toggle each region on or off to choose what to keep. **Invert All** flips every region.
2. If a region is misclassified, use **Reclassify**: left-click to select triangles, Shift+left-click to multi-select, and right-click to reassign them.
3. Set the cleanup options (below).
4. Click **Apply** to merge the kept regions into a new surface.

### Step 2b — Quick Boolean

The **Trimesh Boolean — Quick Boolean** dialog offers one-click operations with a preview:

| Operation | Result |
|-----------|--------|
| **Union** | Outside parts of both surfaces |
| **Intersect** | Inside parts of both surfaces |
| **A − B** | Surface A with Surface B cut out |
| **B − A** | Surface B with Surface A cut out |

Pick an operation, check the preview, then click **Apply**. Use **Adjust in Split & Pick →** to fine-tune the regions by hand.

### Cleanup Options

| Option | Default | Description |
|--------|---------|-------------|
| **Close** | Close Solid | **Close Solid**: weld, then cap small pinhole loops only (recommended). **Clean & Weld**: weld the seam, resolve T-junctions and drop degenerate triangles; outer boundaries stay open. **Weld Only**: merge and weld at the tolerance, with no repair. |
| **Weld** | 0.001 m | Vertices closer than this distance are merged. |
| **Remove Degenerate** | On | Removes near-zero-area triangles. |
| **Remove Slivers** | Off | Removes needle-thin triangles below the ratio (default 0.01). |
| **Clean Crossings** | Off | Fixes edges shared by three or more triangles. |
| **Remove Overlapping** | Off | Removes internal walls and near-duplicate triangles within the tolerance (default 0.5). |

---

## Solid Boolean

Boolean operations on closed, watertight 3D solids.

### Access

Click the **Solid Boolean** button in the **Surface** toolbar. You need at least 2 loaded surfaces. The dialog is titled **Solid Boolean (CSG)**.

### Fields

| Field | Description |
|-------|-------------|
| **Mesh A** / **Mesh B** | The two solids. Use the pick button to click a surface in the 3D view. A status line tells you whether both meshes are closed solids with outward normals. |
| **Repair result mesh** | Ticked automatically when either mesh is open. Reveals **Close Mode** (**Weld Only** or **Close by Stitching**), **Snap Tol.** (default 0) and **Stitch Tol.** (default 1.0, stitching only). |
| **Operation** | Union (A + B), Intersect (A ∩ B), Subtract (A - B) — the default, Reverse Subtract (B - A), or Difference (A △ B / XOR). |
| **Result Gradient** | Default, Hillshade, Viridis, Turbo, Parula, Cividis or Terrain. |

Click **Execute** to run the operation. For best results use closed solids with outward-facing normals.

---

## Surface Intersection

Computes the intersection lines where two surfaces meet, producing KAD polyline entities.

### Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| Vertex Spacing (m) | 1.0 | Simplification tolerance (0 = keep all vertices) |
| Close Polygons | On | Create closed polylines |
| Color | Yellow | Colour of result polylines |
| Line Width | 3 | Thickness of output lines |
| Sub-layer Name | `Intersections` | Folder under `Analysis` for the output |

The dialog remembers your last settings.

### Where the output lands

`Analysis → Intersections`, named `<surfaceA>_<surfaceB>_Intersect_<uid>`. See
[Layer Organisation](../kad/layer-organisation.md).

### Access

Click the **Surface Intersection** button in the **Surface** toolbar. Requires at least 2 loaded surfaces.

---

## Extrude KAD to Solid

Extrudes a closed KAD polygon vertically to create a 3D solid mesh. Useful for creating pit shells, bench outlines, or exclusion zone volumes from 2D design boundaries.

The dialog asks for **Depth (m) +ve=up, -ve=down** (default -10), **Steps** (default 1) and **Solid Color**. If a closed polygon is selected, it is used automatically.

### Access

Click the **Extrude KAD to Solid** button in the **Surface** toolbar. Requires at least 1 closed KAD polygon.

---

## KAD Boolean

Performs 2D boolean operations on closed KAD polygons: Union (A + B), Intersect (A ∩ B), Difference (A - B) and XOR (A △ B). Useful for combining or subtracting design boundaries.

### Access

Click the **KAD Boolean** button in the **Modify** toolbar. Requires at least 2 closed KAD polygons.

---

## Section Plane

Creates a cross-section cutting plane through loaded surfaces for visualisation of subsurface geometry and design verification.

### Access

Click the **Section Plane** button in the **Select** toolbar.

---

## Related Topics

- [Importing Surfaces](importing-surfaces.md)
- [Mesh Editing & Clean Mesh](mesh-editing.md)
- [Surface Gradients](gradients.md)
- [Layer Organisation](../kad/layer-organisation.md) — where generated surfaces and KAD land
