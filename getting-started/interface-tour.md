# Interface Tour

This page walks through every panel, toolbar, and control in the Kirra workspace so you can find what you need quickly.

---

## Workspace Layout

```
┌─────────────────────────────────────────────────────┐
│                    Menu Bar                         │
├──────────────────────────────────────────────────── │
│                    Toolbar                          │
├──────────┬──────────────────────────┬───────────────┤
│          │                          │               │
│  Left    │      Canvas / Viewport   │  Right Panel  │
│  Panel   │                          │  (Properties) │
│          │                          │               │
├──────────┴──────────────────────────┴───────────────┤
│                  Status Bar                         │
└─────────────────────────────────────────────────────┘
```

---

## Menu Bar

| Menu | Key Items |
|------|-----------|
| **File** | New, Open, Save, Import, Export, Print, Recent Files |
| **Edit** | Undo, Redo, Select All, Delete, Find Hole |
| **View** | Toggle panels, Zoom controls, Fullscreen |
| **Pattern** | Generate, Rotate, Mirror, Renumber |
| **Analysis** | Statistics, Voronoi, PPV Analytics |
| **Project** | Settings, Coordinate System, Units |
| **Help** | Documentation, About, Check for Updates |

---

## Toolbar

The main toolbar sits below the menu bar and provides one-click access to the most common actions:

| Icon / Label | Action | Keyboard Shortcut |
|---|---|---|
| **New** | Create a new blast | `Ctrl+N` |
| **Open** | Open an existing blast file | `Ctrl+O` |
| **Save** | Save the current blast | `Ctrl+S` |
| **Import** | Import holes from file | `Ctrl+I` |
| **Export** | Export the blast package | `Ctrl+E` |
| **Select** | Switch to selection tool | `S` |
| **Add Hole** | Place a hole manually | `A` |
| **Generate Pattern** | Open pattern generator | `G` |
| **Timing** | Open timing panel | `T` |
| **Charging** | Open charging panel | `C` |
| **Zoom In / Out** | Adjust viewport scale | `+` / `-` |
| **Fit to Screen** | Fit all holes in viewport | `F` |
| **Undo / Redo** | Step back or forward | `Ctrl+Z` / `Ctrl+Y` |

---

## Left Panel — Toolbox

The left panel contains collapsible sections:

### Pattern Tools
- **Generate** — opens the pattern generation dialog
- **Add Hole** — click-to-place single holes on the canvas
- **Rotate Pattern** — rotate selected holes around a pivot
- **Mirror Pattern** — flip selected holes horizontally or vertically
- **Renumber** — re-sequence hole IDs across the selection

### Layer Controls
- Toggle visibility of hole labels, timing numbers, charge information, and surface data overlays

### Display Options
- Switch between **plan view** (top down) and **section view**
- Adjust hole symbol size and label density

---

## Central Canvas — Viewport

The viewport is the main working area where holes are displayed and edited.

### Navigation
| Action | How |
|--------|-----|
| Pan | Hold middle mouse button and drag, or hold `Space` + drag |
| Zoom | Scroll wheel, or `+` / `-` keys |
| Fit all holes | Press `F` |
| Select hole | Left-click on hole symbol |
| Multi-select | Drag a selection box, or `Ctrl+Click` |
| Deselect | Click empty canvas area |

### Hole Symbols
Holes are drawn as circles (or triangles for angled holes) coloured by:
- **Default** — grey outline
- **Selected** — highlighted in the selection colour (default: orange)
- **By delay** — colour-coded by timing delay when the timing palette is active
- **By charge** — colour-coded by explosive product when the charge palette is active
- **By PPV** — shaded by predicted vibration when PPV mode is active

### Snap and Grid
- Enable the **snap grid** from the View menu or the toolbar grid toggle
- Set grid spacing in **Project → Settings → Grid**

---

## Right Panel — Properties

The right panel shows details for the currently selected hole(s).

### Single Hole Selected
Displays all fields for that hole: ID, Easting, Northing, Elevation (collar), Depth, Diameter, Bearing, Inclination, Subdrill, and any custom fields. Values are directly editable.

### Multiple Holes Selected
Shows a **bulk-edit form**. Fields left blank are unchanged; entering a value applies it to all selected holes.

### No Selection
Shows project-level summary: total holes, total metres, and bench area.

---

## Bottom Status Bar

| Element | Shows |
|---------|-------|
| Cursor position | Live Easting / Northing / Elevation at the cursor |
| Zoom level | Current viewport scale (e.g., `1:500`) |
| Selection count | Number of currently selected holes |
| Project status | Unsaved changes indicator (`*`) and last save time |

---

## Floating Panels

The following panels can be opened from the **View** menu or toolbar and can be docked or floated:

| Panel | Shortcut | Purpose |
|-------|----------|---------|
| **Timing** | `T` | View and edit delay assignments and firing sequence |
| **Charging** | `C` | Build and apply charge deck designs |
| **Statistics** | `Shift+S` | Summary table of blast KPIs |
| **Voronoi** | `Shift+V` | Rock volume per hole visualisation |
| **PPV Analytics** | `Shift+P` | Vibration prediction shader |
| **Import Log** | — | Warnings and errors from the last import operation |

---

*Next: [Adding Holes →](../blast-design/adding-holes.md)*
