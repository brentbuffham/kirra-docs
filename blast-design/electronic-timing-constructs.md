# Electronic Timing Constructs

**Electronic Timing** builds a **temporal mesh**: a triangulated surface in plan view where **Z represents firing time in milliseconds**, not ground elevation. You draw one or two **timing contours** (polylines or sampled Bézier curves), set timing parameters, then assign **electronic detonators** in the charging design so their fire times follow that surface.

This workflow is separate from **connector timing** (`fromHoleID`, `timingDelayMilliseconds`, visible arrows between collars). Electronic timing writes **primer detonator** fields for initiators marked **Electronic** in the charge design.

> **Availability:** The **Electronic Timing** toolbar control is part of the `experimental-electronics` UI group. From **v1.0.46**, that group is **shown automatically** when loaded charging data includes at least one **Electronic** detonator on any hole (`hasAnyElectronicCharging` in `kirra.js`); it stays **hidden** when no electronic detonators are present. There is no separate global “enable experimental electronics” toggle. Visibility is refreshed when charging is loaded with the project.

---

## Quick reference glossary

| Term | Meaning |
|------|---------|
| **Timing construct** | One complete temporal mesh: stored geometry, generated mesh, visibility, assigned holes, and parameters. |
| **Timing contour** | User-drawn polyline (or Bézier control structure); every vertex on that contour shares the same time at the **ridge** (relief mode) or lies on a fixed-time boundary (range mode). |
| **Contour polyline** | Connected chain of segments forming one continuous contour. |
| **Contour vertex** | Point where two segments meet; offset geometry uses **interior** vertex logic (bisector / mitre). |
| **Relief** | Rate of change of time with distance (**ms/m**). Treat it as a “velocity” of the timing wave along the offset direction, not acceleration. |
| **Bisector** | At an interior vertex, the direction used to place a single **mitre** offset point from the two adjacent segment normals. |
| **Mitre join** | One offset point along the bisector ray (normal case). |
| **Mitre limit** | Maximum mitre distance as a multiple of offset distance (implementation uses **3×** the strip offset). |
| **Mitre clamping** | When the geometric mitre distance would exceed the limit, it is capped to avoid blow-outs and preserve vertex count. |
| **Collapse** | Adjacent offset vertices converge; strip generation stops for that direction. |
| **Strip** | One offset copy of the contour at a given perpendicular distance; assigned a single time value for that row of the mesh. |
| **Quad strip** | Corresponding points on two adjacent strips form quads, split into two triangles each. |
| **Self-intersection** | Offset polylines can fold back on themselves at large offsets or sharp corners. |
| **Smooth temporal mesh** | When enabled, the generator **subdivides** the triangulated temporal mesh (two midpoint passes) then applies **Laplacian smoothing** in **X, Y, and Z** (time). **Smoothing strength** is controlled by a numeric field (fractional passes supported, e.g. `1` = one full pass blend toward neighbours). |
| **Bézier handle** | Per-knot `cpIn` / `cpOut` control points; handles are collinear with independent lengths when editing. |
| **Timing Relief tool** | One contour plus explicit **start time** and **relief (ms/m)** → offset strips in both time directions. |
| **Time Range tool** | Two contours plus **Line 1** and **Line 2** times → stitched mesh; effective relief is derived between the boundaries. |
| **Manual offset (`timeOffsetMs`)** | Extra milliseconds added in the **Electronic Timing** dialog with **+** / **−** (per selected holes’ **Electronic** detonators). Cleared by **Apply & Reset Offsets** (on re-apply) or **Reset Selected Hole Offsets**. |
| **Loading-stage offset (`offsetDelayMs`)** | Set in **Deck Builder** for the detonator; **always kept** when you apply timing or reset manual offsets — it is not the same field as `timeOffsetMs`. |

---

## How it fits with charging and connectors

1. **Charge the holes** with at least one **Electronic** detonator on primers that should follow the mesh.
2. **Create a timing construct** and draw geometry (see below).
3. **Assign holes** to the construct (only assigned holes are considered when applying times).
4. Use **Apply & Keep Offsets** or **Apply & Reset Offsets** to re-sample times from the temporal surface at each assigned hole’s **collar XY** and write electronic detonator fields (including a link back to the construct id). See **Apply timing and offsets** below.

Connector-based hole-to-hole delays and electronic mesh times can coexist in one project; they address different initiation models.

---

## Opening the Electronic Timing dialog

When the Blast Holes toolbar shows the control (see **Availability** above): toggle **Electronic Timing**. The dialog is a **dockable FloatingDialog** titled **Electronic Timing** (default size about 340×680 px).

Closing the dialog deactivates drawing mode and removes draw-complete listeners.

---

## Dialog sections (what each control does)

### Construct list

- **Dropdown** — Select an existing construct or **-- Select --** to clear the form.
- **New** — Creates a construct with the current name (made unique if needed), tool mode, curve type, colour, and initial parameter fields.
- **Delete** — Removes the construct from the project and database.

### Name, colour, visibility

- **Name** — Unique construct name; renaming runs when the field changes on an active selection.
- **Colour** — Contour / display colour (`#RRGGBB`).
- **Temporal Mesh** — Show or hide the shaded triangulated surface.
- **Contour Line** — Show or hide contour polylines and direction cues drawn with the construct.

### Tool and curve mode

- **Timing Relief** — Single contour workflow; parameters are **Start Time (ms)** and **Relief (ms/m)** on the main parameter form.
- **Time Range** — Two contours; **Range Parameters** expose **Line 1 Time**, **Line 2 Time**, and optional **Extra Pts** (Steiner-style density) per line.
- **Bezier** — When checked, relief mode uses Bézier knots and handles; the mesh generator samples the curve to a polyline before strip offset.
- **Smooth** — Enables post-processing on the generated mesh: **triangle subdivision** plus **Laplacian smooth** of vertex positions (including time as **Z**). Use the adjacent numeric field for **smoothing strength** (`smoothPasses` on the construct). Changing either triggers surface regeneration.

### Edit on canvas (dialog open)

With the **Electronic Timing** dialog open (and the draw tool idle), **hover and drag** contour **knots** and Bézier **handles** in 2D or 3D. The **ElectronicTimingEditTool** uses capture-phase mouse events so drags do not start a canvas pan; **C1 continuity** is enforced when moving one side of a handle pair.

### Drawing

- **Relief:** **Draw Polyline** — Click vertices on the 2D canvas or 3D view; **double-click** or **Enter** finishes (minimum two points). **Escape** cancels.
- **Range:** **Draw Line 1** / **Draw Line 2** — Same interaction; the mesh regenerates after **both** lines are complete.
- **Clear** — Removes the relief polyline **or** both range lines, depending on mode.

While drawing, canvas panning is suspended (`window.isElectronicTimingDrawActive`).

### Segments (Relief / sampled Bézier)

For each polyline segment between consecutive vertices:

- **Relief (ms/m)** — Per-segment rate (the top-level Relief field can set all segments at once when changed).
- **Direction (°)** — Bearing in degrees for the direction in which time **increases** (0° = North in Kirra’s bearing convention for this feature). **Flip** adds 180°.

### Holes

- **Assign selected** — Adds current selection to `assignedHoles` (combined id `entityName:::holeID`). Holes already on another construct are moved. Also runs interpolation immediately for feedback.
- **Remove selected** / **Clear all** — Unassign holes from this construct only.
- **Apply Timing** — Requires a generated surface; writes electronic detonator times for assigned holes and persists charging data to IndexedDB when available.

### Offset (ms)

With holes selected, **+** / **−** adjust `timeOffsetMs` on **Electronic** detonators (step from the numeric field, default 5 ms). `delayMs` is updated from interpolated time plus offset. Charging data is saved when the database handle exists.

### Time gradient

Colour stops define how **time** maps to colours on the canvas for construct visualisation (see `getTimingGradientStops()` export used by 2D/3D draw helpers). They do not change numerical firing times.

### Surface

- **Regenerate** — Re-runs surface generation from current geometry (useful after manual fixes or parameter tweaks).
- Status text shows triangle and vertex counts when a surface exists.

---

## Persistence

Constructs are stored in IndexedDB under the **`TIMING_CONSTRUCTS`** object store and held in memory in `window.loadedTimingConstructs` (a `Map`). See the wiki [IndexedDB Schema](https://github.com/brentbuffham/Kirra/wiki/IndexedDB-Schema) for the store description.

**KAP project files (v1.0.47+):** Exporting a **.kap** (ZIP) includes **`timingConstructs.json`** — an array of `[id, constructJSON]` pairs. Importing a KAP restores constructs into memory and saves them back to IndexedDB (`KAPParser.js` / `KAPWriter.js`). Use KAP for full project round-trips that include electronic timing geometry.

---

## Related topics

- [Timing Sequences](timing-sequences.md) — Connector-based firing order, auto-timing, and validation.
- [Charging Overview](../charging/overview.md) — Deck builder and electronic initiators.
- [Harness Wire Assignment](../charging/harness-wire-assignment.md) — SurfaceWire path/commander tool (separate from mesh timing).
- Kirra wiki: [Electronic Timing Constructs](https://github.com/brentbuffham/Kirra/wiki/Electronic-Timing-Constructs) — Source file map and implementation notes.
