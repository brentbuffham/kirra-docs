# Drawing Basics

How every KAD drawing tool behaves — starting and finishing a drawing, correcting a mistake,
where new points get their height, and how snapping helps. The tools themselves are in
[Points, Lines, Polygons and Circles](points-lines-polygons.md), [KAD Text](text.md) and
[Roads and Ramps](roads-and-ramps.md).

---

## The drawing settings

The top of the **KAD** toolbar sets what the next drawing looks like.

| Control | Default | What it sets |
|---|---|---|
| **Elevation Z** | 200 | The height of new points when nothing is snapped. Remembered in this browser |
| **KAD Color** | Grey `#777777` | Colour of new points, lines and shapes. A change mid-drawing colours the points that follow |
| **Point and Line Size** | 1 | Line width and point size. Any positive number |
| **Circle Radius (m)** | 10 | Radius of the next circle |

---

## One drawing = one entity

Each time you start drawing, Kirra makes **one** new entity, and every click adds to it — more
points to a point set, more vertices to a line, more circles to a circle set. It is named after
its type, for example `lineObject3_a3k7`.

### Which layer

The first time you draw in a session, Kirra asks **Choose Drawing Layer**:
*"Pick an existing layer or create a new one. New drawings go to this layer. You can change
layers later in the TreeView."*

- **Layer** — an existing layer, or **+ New Layer...**
- **New Layer Name** — default **Drawings**, used with **+ New Layer...**
- **OK** carries on; **Cancel** places nothing.

You are not asked again while an active layer is set. See [Layer Organisation](layer-organisation.md).

---

## Finish, undo, cancel

| Do this | While drawing |
|---|---|
| **Right-click** the canvas | Finishes the current drawing — *"Entity finished. Click to start new …"*. The tool stays on |
| **Right-click** again (nothing in progress) | Turns the drawing tool off — *"Drawing tools cancelled"* |
| **Escape** | The same as right-click. A second **Escape** straight away also returns to the Select Pointer |
| **Backspace** or **Delete** | Removes the last point of the current drawing |
| **Ctrl+Z** (**Cmd+Z**) | Undoes the last point placed — one press per point. **Ctrl+Y** or **Ctrl+Shift+Z** redoes |

There is no double-click to finish — use right-click or **Escape**.

> **Note:** **Backspace** is not an undo step. **Ctrl+Z** is.

### Too few points

A line needs 2 points and a polygon 3. If you finish with fewer, **Invalid Entity** asks what to
do — for example *"Polygons require at least 3 points. Do you want to discard this single point
or convert to a point object?"* Click **Convert** to keep it as a simpler type, or **Discard**.
A drawing with no points at all is dropped without asking.

---

## Height of each new point

Kirra decides the Z of each point in this order:

1. **A snap** — the point takes the snapped height (a hole collar, a drawing vertex, a surface).
2. **A section work plane** — in 3D with a [section plane](../reference/section-views.md) active,
   the point lands on that plane.
3. **Elevation Z** — otherwise the toolbar's elevation.

In 3D the click is projected onto a level plane at **Elevation Z**, unless a snap or a work plane
takes over.

---

## Snapping

With **Snap** on (top bar), each click jumps to the nearest thing within the snap radius: hole
collars, grades and toes, drawing vertices — including the drawing you are making — points along
lines and polygon edges (with their height worked out along the line), and surface points. The
status line says what you snapped to, for example *"Snapped to …"*. Hidden and locked items are
never snapped to. See [Selection & Snapping](../working-in-kirra/selection-and-snapping.md#snapping).

---

## The distance readout

After the first point, a small readout follows the cursor with **Dist:** (metres) and **Brg:**
(degrees) from the last point, and a dashed line shows the next segment.

---

## Placement modes

Right-click the **Add KAD Point**, **Add KAD Line** or **Add KAD Polygon** button to choose how
each click places a point — on the cursor, between two clicks, at a set distance and bearing, or
traced along an existing line or polygon (**T** turns Trace on and off while you draw). See
[Placement modes](points-lines-polygons.md#placement-modes).

---

## Related

- [Points, Lines, Polygons and Circles](points-lines-polygons.md)
- [KAD Text](text.md)
- [Roads and Ramps](roads-and-ramps.md)
- [KAD Toolbar](kad-toolbar.md)
- [Modify Toolbar](modify-tools.md)
