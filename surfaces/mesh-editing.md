# Mesh Editing & Clean Mesh

Kirra provides interactive mesh editing and automated mesh repair tools for loaded surfaces.

> *Screenshot coming soon -- Clean Mesh dialog with diagnostics*

---

## Mesh Edit Tool

The Mesh Edit tool allows direct manipulation of surface mesh geometry in the 3D view.

| Operation | Description |
|-----------|-------------|
| **Select Triangles** | Click or drag to select individual triangles via raycasting |
| **Delete Triangles** | Remove selected triangles from the surface |
| **Move Vertices** | Drag vertices to new positions |
| **Split Triangles** | Subdivide triangles at a point |
| **Flip Edges** | Swap the shared edge between adjacent triangles |
| **Extrude Edges** | Create new triangles by extruding boundary edges |
| **Weld Vertices** | Merge nearby vertices within tolerance |

### How to Use

1. Click the **Mesh Edit** button in the Surface tools panel
2. Click on triangles in the 3D view to select them
3. Use the edit operations from the tool panel
4. Changes are applied directly to the surface

---

## Clean Mesh

The Clean Mesh tool provides automated diagnostics and one-click repair for common mesh quality issues.

### How to Access

Right-click a surface in the TreeView and select **Clean Mesh**.

### Diagnostics

The dialog displays real-time statistics before and after each operation:

| Diagnostic | Description |
|------------|-------------|
| **Open Edges** | Boundary edges not shared by two triangles |
| **Non-Manifold** | Edges shared by more than two triangles |
| **Degenerate Tris** | Zero-area or near-zero-area triangles |
| **Crossing Tris** | Triangles that intersect other triangles in the same surface |
| **Overlapping Tris** | Near-duplicate triangles with opposing normals |
| **Unwelded Verts** | Vertices within snap tolerance that should be merged |

### Quick Fix Tools

| Tool | Description |
|------|-------------|
| **Edit Mesh** | Opens the interactive Mesh Edit tool |
| **Weld All** | Merges all vertices within snap tolerance |
| **Fix All** | Runs the full repair pipeline (degenerate removal, weld, crossing cleanup, overlap removal) |

### Normal Controls

| Operation | Description |
|-----------|-------------|
| **In** | Set normals to point inward |
| **Out** | Set normals to point outward |
| **Flip** | Reverses winding order of all triangles |
| **Align** | Propagates consistent winding from a seed triangle across the mesh |

Normal controls are also available from the TreeView context menu (right-click a surface).

### Individual Repair Operations

| Operation | Description |
|-----------|-------------|
| Remove Degenerate Triangles | Deletes zero-area and near-zero-area triangles |
| Remove Duplicate Triangles | Finds and removes triangles sharing the same vertices |
| Remove Self-Intersections | Detects and removes crossing triangles |
| Weld Vertices | Merges vertices within configurable tolerance |
| Remove Isolated Vertices | Cleans up orphaned vertices |
| Fix Winding Order | Ensures consistent triangle winding |
| Remove Sliver Triangles | Removes extremely thin triangles based on aspect ratio |

---

## Typical Mesh Repair Workflow

1. Import a surface
2. Right-click in TreeView > **Clean Mesh**
3. Review the diagnostics (open edges, non-manifold, degenerate, etc.)
4. Click **Fix All** for automated repair, or address issues individually
5. Use **Align** normals if lighting looks wrong
6. Verify diagnostics show improved counts

---

## Related Topics

- [Importing Surfaces](importing-surfaces.md)
- [Boolean & CSG](boolean-csg.md)
- [Surface Gradients](gradients.md)
