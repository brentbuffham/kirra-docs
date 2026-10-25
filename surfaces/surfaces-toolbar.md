# Surfaces Toolbar

The **Surface** toolbar builds, cuts, combines and repairs triangulated surfaces and solids.
Open it from its tab on the right edge of the window.

![Labelled Surface toolbar](../screenshots/SurfacesToolbar.png)

---

## The controls

| Control | What it does | Other ways to use it | Guide |
|---|---|---|---|
| **Triangulate** | Builds a surface from visible points, lines and holes | Select a polygon first to clip to it | [Triangulate](triangulate.md) |
| **Surface Intersection** | Draws the line where two surfaces cross | Pick each surface in 3D | [Surface Intersection](surface-intersection.md) |
| **Solid Boolean** | Union, intersect or subtract two closed solids | Normals button fixes an input | [Solid Boolean](solid-boolean.md) |
| **Trimesh Boolean** | Splits two surfaces and keeps the pieces you choose | **Quick Boolean** tab; **Reclassify** | [Trimesh Boolean](trimesh-boolean.md) |
| **Extrude KAD to Solid** | Pushes a closed polygon into a solid | Select the polygon first | [Extrude KAD to Solid](extrude-kad-to-solid.md) |
| **Contour Surface** | Contour lines at a set interval | **Custom** start for bench RLs | [Contour Surface](contours.md) |
| **Clean Mesh** | Finds and repairs mesh faults | Right-click a surface → **Clean** | [Clean Mesh](clean-mesh.md) |
| **Clip Surface** | Cuts a surface or solid with a polygon | **Batch** tab for many cutters | [Clip Surface](clip-surface.md) |
| **Solid Horizon Slice** | Cuts a solid into horizontal bands | **By count** for equal bands | [Solid Horizon Slice](solid-horizon-slice.md) |

### Point-cloud tools

Below the second divider are the tools that work on [point clouds](point-clouds.md):

| Control | What it does | Other ways to use it | Guide |
|---|---|---|---|
| **Mesh and Cloud Alignment** | Moves a scan or mesh onto the grid, or onto another scan or mesh | **Pick ICP**, **Manual** and **Scanner Controls** tabs | [Mesh and Cloud Alignment](mesh-cloud-alignment.md) |
| **Facets and Joint Sets** | Finds the flat facets of a rock wall in a cloud and groups them into joint sets, on a stereonet | Cloud's right-click menu → **Cloud Tools** ▸ **Facets and Joint Sets…** | [Facets and Joint Sets](facets-joint-sets.md) |
| **Void Mesh** | Opens Triangulate with its **3D mesh (caves, voids)** method chosen | **Triangulate** → **Method** | [3D Triangulate](triangulate-3d.md) |

Not sure which boolean to use? See [Which Boolean?](boolean-csg.md)

---

## Working with one surface

Right-click a surface on the canvas — or choose **Properties** from its menu in the tree — to
open its properties. There you set the **Transparency**, **Color Gradient** and elevation
limits, see its area and volume, and reach **Check**, **Clean** and **Smoothing**.

The tree's surface menu adds **Convert to…** (faces, edges or points as KAD), **Footprint…**,
**Normals…** and **Statistics**. See [Importing Surfaces](importing-surfaces.md#surface-properties)
and [Surface Gradients](gradients.md).

---

## Elsewhere

| Tool | Toolbar | Guide |
|---|---|---|
| **Compare Surfaces** — colour a survey by its distance from the design | Analyse | [Compare Surfaces](compare-surfaces.md) |
| **Edit Mesh** — fix triangles by hand | Opened from **Clean Mesh** | [Mesh Editing](mesh-editing.md) |
| **KAD Boolean** — booleans on polygons | Modify | [KAD Boolean](../kad/boolean.md) |

---

## Related

- [Importing Surfaces](importing-surfaces.md)
- [Surface Gradients](gradients.md)
- [Mesh Editing](mesh-editing.md)
- [Point Clouds](point-clouds.md)
