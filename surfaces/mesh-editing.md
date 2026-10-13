# Mesh Editing

Edit Mesh fixes a surface triangle by hand — delete, flip, weld, move and insert triangles — in the 3D view.

Start it with **Edit Mesh** in the [Clean Mesh](clean-mesh.md) dialog.

---

## Mesh Edit Tool (Edit Mesh)

The **Mesh Edit** workflow edits **triangulated surfaces** you already have in Kirra (DTM/STR, OBJ without live texture-only path, generated meshes, etc.). It runs **only in the 3D view** and opens a dockable dialog titled **Mesh Edit** with a compact toolbar, plus an inline progress strip while the mesh is indexed.

### Requirements and limits

| Rule | Detail |
|------|--------|
| **3D view** | If the 3D view is not running, Kirra prompts you to switch to **3D**. |
| **Surface must have triangles** | Empty surfaces cannot be opened in mesh edit. |
| **Textured OBJ workflow** | **Textured OBJ meshes** are **not supported** for mesh edit — use non-textured triangulated surfaces. |
| **One surface at a time** | Starting mesh edit on another surface **cancels** the previous session. |
| **Persistence** | Structural edits are saved automatically; the Data Explorer refreshes after heavy operations. |

### How to start

1. Open the **Clean Mesh** dialog for the surface (the **Clean Mesh** button on the Surface toolbar, or right-click the surface and click **Clean**)
2. Click **Edit Mesh** to start mesh edit for that surface

On start, Kirra indexes the mesh and builds the wireframe and hover/selection overlays. Large meshes show a short **loading** progress while this happens.

### Selection modes

| Mode | Shortcut | Picking | Multi-select |
|------|-----------|---------|--------------|
| **Face** | **F** (when no sub-mode) | **Raycast** on the surface mesh — click a triangle | **Shift+click** adds a face (or takes out one already selected); **Ctrl+click** (**Cmd** on a Mac) removes it |
| **Vertex** | **V** | **Screen-space** nearest vertex within ~**20 px** (magenta points) | **Shift+click** adds a vertex (or takes out one already selected); **Ctrl+click** (**Cmd** on a Mac) removes it |

**Escape** — First clears an active **sub-mode**; then clears face or vertex selection; if nothing is selected, **exits Mesh Edit** entirely (same as **Close** on the dialog).

**Ctrl+A** (**Cmd+A** on macOS) — **Select all** faces (face mode) or **all unique vertices** (vertex mode).

### Toolbar actions (left to right)

| Control | What it does |
|---------|----------------|
| **Face / Vertex** | Switches between triangle picking and vertex picking (see shortcuts **F** / **V**). |
| **Delete** | **Face mode:** removes selected triangles (and removes orphaned points so 2D snapping does not see them). **Vertex mode:** deletes **every triangle that uses any selected vertex**. Can be undone and redone. |
| **Invert** | Swaps two corners of each selected triangle (**winding / normal flip**) for those faces only. |
| **Weld** | **Vertex mode only**, **2+** vertices — merges selected positions to their **centroid** and rewires triangles (**W**). |
| **Move** | **Vertex mode** — **M** toggles **move sub-mode**: pick a vertex, then **drag**; motion is constrained to an **adjacent plane** derived from neighbour triangles. |
| **Insert** | **I** — **Insert sub-mode:** pick **three** positions in the 3D view (raycast on mesh); **Enter** commits a **new triangle** when three picks are stored. |
| **Polygon select** | **P** — Click the corners of a **2D screen-space polygon** over the viewport and double-click to finish. In **face mode** it selects the triangles touching the polygon — right-click the button and choose **Select fully inside** to take only triangles wholly inside it (**Select Touching Tris** is the default). In **vertex mode** it selects the vertices inside. **Shift+double-click** adds to the selection; **Ctrl+double-click** (**Cmd** on a Mac) removes from it. Polygon Select stays on for the next polygon until you press **P** or click the button again. |
| **Clean orphan vertices** | Removes points not used by any triangle (scissors icon). |
| **Selection count** | Shows `N face(s)` or `N vert(s)`. |
| **Clear** | Clears the current selection (faces or vertices). |
| **Auto-repair** | Checkbox — after **delete**, optionally runs **boundary capping** to seal open loops. |
| **Normals** | Checkbox — toggles **normal arrows** overlay for inspection. |
| **Open Edges** | Checkbox — toggles **pink fat-line** overlay of boundary edges. |

### Keyboard summary

| Key | Action |
|-----|--------|
| **F** / **V** | Face / Vertex mode (when not in a sub-mode) |
| **Del** / **Backspace** | Delete selected faces or all triangles touching selected vertices |
| **Ctrl+A** | Select all (faces or vertices) |
| **W** | Weld (vertex mode, 2+ verts) |
| **M** | Toggle move sub-mode (vertex mode) |
| **I** | Toggle insert-triangle sub-mode |
| **P** | Toggle polygon-select sub-mode |
| **Enter** | Confirm insert when three picks are ready |
| **Escape** | Exit sub-mode → clear selection → close Mesh Edit |

### After editing

- **Undo / Redo** — Destructive edits (delete, invert, insert and so on) can be undone and redone.
- **Close** — The dialog **Close** button ends mesh edit and removes its overlays.

For automated repair — open edges, crossing triangles, welding and normals — use [Clean Mesh](clean-mesh.md).

## Related Topics

- [Importing Surfaces](importing-surfaces.md)
- [Clean Mesh](clean-mesh.md)
- [Which Boolean?](boolean-csg.md)
- [Surface Gradients](gradients.md)
