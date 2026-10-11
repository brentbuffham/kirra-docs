# Move

Drags holes, whole drawings or drawing vertices to a new position, in 2D or 3D. What it moves
depends on the **H / K / V** switch on the **Select** toolbar.

---

## Move something

1. Choose **H** (holes), **K** (whole drawings) or **V** (vertices) on the Select toolbar.
2. Click **Move** on the **Modify** toolbar. The status line reads *"Move Tool Activated (2D
   mode)"* or *"(3D mode)"*.
3. Press on the item and drag it. If items are already selected, dragging moves them all.
4. Release to drop. Repeat for the next item; switch the tool off when done.

You do not need to select first — pressing on a hole, drawing or vertex picks it and drags it.
Pressing on empty space clears the selection.

---

## What moves

| Switch | Press on | Moves |
|---|---|---|
| **H** | A hole | That hole, or every selected hole |
| **K** | A drawing | The whole drawing, or every selected drawing |
| **V** | A vertex | That vertex. Pressing a vertex already in the selection drags the whole selection |

Points on surface-connector trunks can be dragged in any mode.

---

## Other ways to use it

| Method | Result |
|---|---|
| **Shift** + press (V) | Keeps the existing selection and adds to it |
| **Shift** + click (3D, K or V) | Adds to the selection without dragging |
| Hold **S** while dragging drawing points | Lets them snap to other points of the same drawing (normally they ignore their own drawing) |
| **Alt** + drag (3D) | Orbits the camera instead of moving |
| Snap on | Holes snap to drawings and surfaces (never to other holes); a vertex takes the height it snaps to |

---

## When holes land on holes

If a moved hole ends up on top of another hole in the same blast, **Hole Coincidence** opens:
*"Moved hole(s) now sit on top of existing holes in the same blast."* It lists each pair and the
distance between them. Click **Keep** to keep the move, or **Revert** to put them back.

---

## Undo

Every drop is one **Ctrl+Z** step.

---

## Related

- [Selection & Snapping](../working-in-kirra/selection-and-snapping.md)
- [Transform KAD](transform.md) — move and rotate by exact amounts
- [Modify Toolbar](modify-tools.md)
