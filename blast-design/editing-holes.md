# Editing Holes

Once holes are placed on the canvas — whether manually added, imported, or generated — you can select, move, and modify them individually or in bulk.

---

## Selecting Holes

### Single Selection
- Click any hole symbol on the canvas
- The hole highlights in the selection colour (default: orange)
- Properties appear in the right panel

### Multi-Selection
| Method | How |
|--------|-----|
| **Box select** | Click and drag a rectangle — all holes inside are selected |
| **Ctrl+Click** | Add or remove individual holes from the current selection |
| **Select All** | Press `Ctrl+A` to select every hole in the project |
| **Select by Row** | Right-click a hole → **Select Row** to select all holes in that row |
| **Select by Property** | Use **Edit → Find & Select** to filter holes by depth, diameter, ID pattern, etc. |

---

## Moving Holes

### Drag to Move
1. Select one or more holes
2. Click and hold on a selected hole, then drag it to a new position
3. Release to drop at the new location

> **Tip:** Hold `Shift` while dragging to constrain movement to horizontal or vertical only.

### Move by Offset
1. Select the holes you want to move
2. Right-click → **Move by Offset** (or press `M`)
3. Enter delta Easting (dE) and delta Northing (dN) values
4. Click **Apply** — holes shift by exactly that amount

### Enter Coordinates Directly
1. Select a single hole
2. In the right panel, edit the **Easting** and **Northing** fields directly
3. Press `Enter` or `Tab` — the hole jumps to the new position

---

## Modifying Properties

### Individual Hole
1. Select the hole
2. Edit any field in the right panel: ID, Depth, Diameter, Bearing, Inclination, Subdrill, Elevation, or custom attributes
3. Changes apply immediately

### Bulk Edit
1. Select two or more holes
2. The right panel shows a **bulk-edit form**
3. Fields that differ across the selection show `(mixed)` — type a value to override all of them
4. Fields left blank remain unchanged
5. Press `Enter` or click **Apply**

---

## Deleting Holes

1. Select the holes to remove
2. Press `Delete` (or right-click → **Delete**)
3. Undo with `Ctrl+Z` if needed

---

## Rotating Selected Holes

1. Select the holes
2. Click **Pattern → Rotate**, or right-click → **Rotate Selection**
3. Enter the rotation angle in degrees (positive = clockwise)
4. Choose the **pivot point**: centroid of selection, or click a custom point on the canvas
5. Click **Apply**

---

## Mirroring Selected Holes

1. Select the holes
2. Click **Pattern → Mirror**, or right-click → **Mirror Selection**
3. Choose axis: **Horizontal** (flip North/South) or **Vertical** (flip East/West)
4. Click **Apply**

---

## Renumbering Holes

1. Select the holes to renumber (or press `Ctrl+A` for all)
2. Click **Pattern → Renumber**
3. Set the prefix, start number, and sort order (by row, by easting, by northing, or by current number)
4. Click **Apply** — Hole IDs are updated throughout the project, including any charge and timing references

---

## Undo / Redo

All editing operations support unlimited undo/redo:
- `Ctrl+Z` — undo the last action
- `Ctrl+Y` or `Ctrl+Shift+Z` — redo

---

## Related Topics

- [Hole Properties Reference](../reference/hole-properties.md) — every field explained
- [Pattern Generation](pattern-generation.md) — generate patterns automatically
- [Timing Sequences](timing-sequences.md) — assign initiation delays
