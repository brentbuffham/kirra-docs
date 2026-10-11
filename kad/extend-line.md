# Extend Line to Boundary

Moves the end point of a line (or a polygon vertex) to where its segment meets another line — to
close a gap to a crest, a toe or a boundary.

---

## Extend a line

1. Click **Extend Line to Boundary** on the **Modify** toolbar. The status line reads *"Extend
   Line: Click near the ENDPOINT you want to extend"*.
2. Click near the end you want to move. The segment highlights in yellow as you hover.
3. Click the boundary segment to extend to. It highlights in cyan, with a dashed green preview
   and a target mark.
4. The point moves to the crossing — *"Extend Line: Done. Click another ENDPOINT to extend, or
   Escape to exit."* The tool stays on.

---

## How the crossing is found

- The point moves to where the two segments **would** cross if both carried on in a straight
  line. If that crossing is short of the current end, the line gets shorter.
- In plan the point keeps its height. With a [section plane](../reference/section-views.md#section-plane)
  active, the crossing is worked out in that plane and the height changes.
- The boundary can be any visible, unlocked line or polygon edge — even another segment of the
  same drawing.
- Parallel lines never cross: *"Extend Line: Lines are parallel - no intersection exists."*

---

## Other ways to use it

| Method | Result |
|---|---|
| **Right-click** after picking the end | Starts again — *"Extend Line: Reset."* |
| **Right-click** twice quickly | Ends the tool |
| **Escape** | Ends the tool |
| Works in 3D | Pick in either view |

---

## Undo

Each extend is one **Ctrl+Z** step.

---

## Related

- [Join and Split KAD Lines](join-split.md)
- [Grade Line](grade-line.md)
- [Modify Toolbar](modify-tools.md)
