# Clean Mesh

Finds and repairs the faults that stop a surface working as a solid — open edges, crossing and
overlapping triangles, unwelded points and mixed-up normals. Use it before a volume, a boolean, a
clip or a slice, and whenever a surface imported from another package behaves oddly.

![Clean Mesh on an open cave mesh — the Open Edges row with its patch method and Patch all](../screenshots/CleanMeshDialog.png)

---

## Check and repair a surface

1. Click **Clean Mesh** on the **Surface** toolbar. The **Clean Mesh** dialog opens on the first
   visible surface, switches the view to 3D, and runs a check.
2. Choose the surface from the list, or click the target button and click it in the 3D view.
3. Tick the faults you want to look for under **Diagnostics**, then click **Check**. Each row
   shows a count, and the faults are highlighted in 3D. Hover over a row's name for what it
   finds.
4. Click the button on a row to repair that fault. Kirra re-checks afterwards.
5. Click **Close** when the counts are where you want them.

Repairs change the surface in place and are saved straight away. Each repair is one step you can
undo with **Ctrl+Z** and redo with **Ctrl+Y**. On a surface of more than 500,000 triangles a repair
**cannot be undone** — the status bar says so — so keep a copy or export it first.

> **Tip:** When the surface is not closed, an orange banner reads *"Priority: Close the solid to
> achieve a valid volume"*. Deal with **Open Edges** first: several remove buttons stay disabled
> until it is fixed, with the tip *"Fix open edges first. Removing triangles may break
> topology."*

---

## Diagnostics

| Row | On by default | Repair | What it finds (the row's hover text) |
|---|---|---|---|
| **Open Edges** | Yes | Patch method + **Patch all**, and **Patch** per loop | Edges used by only one triangle. They join into loops (closed rings, such as a hole, which can be patched) and seams (runs that do not close, such as a crack between sheets). A closed solid has none |
| **Non-Manifold** | No | **Remove** | Edges shared by three or more triangles, such as fins or doubled sheets. **Remove** deletes the triangles that make those edges non-manifold |
| **Co-linear XY Triangles** | No | **Remove** | Triangles that are a line when seen from above (vertical faces). Normal on the walls of a solid; a fault on a 2.5D surface such as topography |
| **Zero Area Degenerate** | No | **Remove** | Triangles with no area: their corners lie on one line or one point. **Remove** can open holes; **Weld** usually removes them safely |
| **Crossing Tris** | No | **Remove** | Pairs of triangles that cut through each other. **Remove** deletes the smaller triangle of each pair, which opens holes |
| **Coincident Overlaps** | No | **Resolve** | Triangles lying on top of each other in the same plane: a fold or a doubled sheet. **Crossing Tris** cannot find these. **Resolve** cuts along the fold, or removes the extra sheet when it cannot |
| **T-Junctions** | No | **Resolve** | A corner sitting on the middle of another triangle's edge without splitting it: a hidden crack. **Resolve** splits those edges so the triangles meet |
| **XY Overlapping Tris** | No | **Remove** | Triangles that overlap when seen from above. A fault on a 2.5D surface; normal on a solid |
| **Unwelded Verts** | Yes | **Weld** | Corners at the same place (within the **Tolerance**) that are separate points, so their triangles do not join. **Weld** merges them |

**Tolerance:** sets the weld distance — default 0.0012 m. It is remembered in this browser and
used only by Clean Mesh.

Open the arrow on a row to list each fault. Click an item to zoom to it; its own repair button
fixes only that one, after showing a before-and-after with **Apply** or **Cancel**.

### Patch open edges

The **Open Edges** row patches holes with the same repair as [Edit Mesh](mesh-editing.md#find-and-patch-open-loops).

- The list beside the row name is the **patch method**: **Auto**, **Fair**, **Fan**, **Centroid**
  or **Vertex fan**. Auto tries Fair, then Fan, Centroid and Vertex fan, and uses the first that
  works. Fair suits holes in cave or rock walls; Fan suits flat cuts such as drive ends.
- **Patch all** patches every loop of up to 50 edges with that method. Bigger loops, such as a
  surface's outer edge, stay open: patch them one by one.
- Open the arrow on the row to list each **Loop** and **Seam**, with its edge count and position.
  Each loop has its own method list and **Patch** button. A seam (a run that does not close)
  cannot be patched this way and keeps its own fix button.

After a patch the status line says what happened, for example *"Patched: n triangles added."*, or
which loops could not be patched — *"n loops not patched: …"*. Each patch is one **Ctrl+Z** step,
unless the surface is too large to undo (over 500,000 triangles), which the message says.

Some repairs check first and warn when they would open the mesh or remove a lot —
**Continue** or **Cancel**.

---

## Tools and normals

| Control | What it does |
|---|---|
| **Edit Mesh** | Opens [Edit Mesh](mesh-editing.md) on this surface, to fix triangles by hand. It also has its own button on the Surface toolbar |
| **Resolve Winding** | Re-cuts triangles that fold through each other |
| **Show Normals** | Draws the direction each triangle faces |
| **In** / **Out** | Points every normal into or out of a closed solid |
| **Flip** | Reverses every triangle of an open surface |
| **Align** | Makes the triangles of an open surface face the same way |
| **Orient** | Fixes winding across the whole mesh and reports the volume |

**In** and **Out** appear only for closed solids; **Flip** and **Align** only for open surfaces.

**Stats** at the foot of the dialog lists points, edges and faces, whether the surface is
**Closed**, the open edges and the volume. A volume is only reliable when **Closed** reads **Yes**.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| *"No editable surfaces loaded."* | No surface, or only textured meshes | Clean Mesh does not edit textured OBJ meshes |
| **Closed** reads **No** | The surface has open edges, so its volume is unreliable | Patch the open loops on the **Open Edges** row, or in **Edit Mesh** |
| *"No open loops of up to 50 edges to patch - patch bigger loops one by one."* | Every hole is bigger than **Patch all** takes | Open the row's list and **Patch** each loop |
| A seam will not patch | A seam does not close into a loop | **Weld** at 0.001–0.002 m first, or repair it in **Edit Mesh** |
| Lighting looks patchy | Triangles face different ways | **Orient**, or **Align** on an open surface |
| A boolean or slice fails on this surface | Open edges or crossing triangles | Clear every row, then try again |

---

## Other ways to use it

| Method | Result |
|---|---|
| Right-click a surface → **Clean** in its properties | Opens Clean Mesh on that surface |
| The ⚠ volume badge on a solid in the tree → **Clean** | Opens Clean Mesh from the **Unreliable Volume** warning |
| One item's own repair button | Fixes a single fault, with a before-and-after |

---

## Related

- [Mesh Editing](mesh-editing.md) — fix triangles by hand
- [Clip Surface](clip-surface.md)
- [Solid Horizon Slice](solid-horizon-slice.md)
- [Trimesh Boolean](trimesh-boolean.md)
- [Surfaces Toolbar](surfaces-toolbar.md)
