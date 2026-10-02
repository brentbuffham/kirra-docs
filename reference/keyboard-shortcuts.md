# Keyboard Shortcuts & Mouse Controls

Quick reference for keyboard shortcuts and mouse controls in Kirra Design.

---

## Hold Keys

These keys work only while you hold them down. Release the key to return to normal behaviour.

| Key | Action |
|-----|--------|
| **S** (hold) | Self-snap — while moving KAD points, let them snap to their own entity (normally the dragged points are excluded from snapping) |
| **F** (hold) | Focus mode for the hole bearing tool — each selected hole points at the cursor, instead of all holes taking the first hole's bearing |
| **Shift** (hold) | Add to the selection when clicking |

---

## Actions

| Shortcut | Action |
|----------|--------|
| **Ctrl+Z** (Cmd+Z on Mac) | Undo |
| **Ctrl+Y** (Cmd+Y on Mac) | Redo |
| **Escape** (first press) | Cancel the current step and clear the selection |
| **Escape** (second press) | Exit the active tool and return to **Pointer Select** |
| **Backspace** / **Delete** | Delete the selected KAD objects, vertices or holes (asks you to confirm; deleting holes offers **Renumber**) |
| **Backspace** / **Delete** | While drawing KAD, remove the last drawn point |

A dialog that uses the keyboard keeps its own Escape, and Delete / Backspace do nothing while a blocking dialog is open.

---

## Tool Keys

| Tool | Key | Action |
|------|-----|--------|
| **Trunk Branch Connect** (Connect toolbar) | **Enter** or **Escape** | Finish the trunk |
| | **Backspace** / **Delete** | Remove the last trunk segment |
| | Double-click or right-click | Finish the trunk |
| **Connectors Remove** (Connect toolbar) | **Backspace** / **Delete** | Remove the highlighted tie under the cursor |
| **Roads and Ramps** (KAD toolbar) | **Space** (hold) | Snap the next point to a whole-metre elevation |
| | **Enter** or **Escape** | Finish the ramp |
| | **Backspace** / **Delete** | Remove the last segment |
| | Right-click | Finish the ramp |

For mesh editing keys, see [Mesh Editing & Clean Mesh](../surfaces/mesh-editing.md).

---

## 2D Mouse Controls

| Action | Result |
|--------|--------|
| **Scroll wheel** | Zoom in/out |
| **Click + drag** | Pan (default mode) |
| **Alt + Shift + drag** | Rotate the 2D view |
| **Alt + Shift + double-click** | Reset the 2D rotation to north-up |
| **Click** | Select single entity |
| **Shift + click** | Add to selection |

---

## 3D Mouse Controls

| Action | Result |
|--------|--------|
| **Click + drag** | Pan |
| **Alt + drag** | Orbit camera |
| **Alt + Shift + drag** | Camera roll |
| **Scroll wheel** | Zoom |
| **Right-click** | Context menu (no camera movement) |

---

## Section Plane

Available while a section plane is enabled.

| Action | Result |
|--------|--------|
| **Page Up** | Step the slice forward |
| **Page Down** | Step the slice back |
| **Shift + Page Up** | Step forward to an exact multiple of the step |
| **Shift + Page Down** | Step back to an exact multiple of the step |
| **Esc** | Cancel a section point pick |
| **Right-click** | Cancel a section point pick |

Step multiples are measured from the position the section was created at, so a
stepped traverse keeps landing on the same grid.

---

## Related Topics

- [Interface Tour](../getting-started/interface-tour.md)
- [Editing Holes](../blast-design/editing-holes.md)
- [Mesh Editing & Clean Mesh](../surfaces/mesh-editing.md)
