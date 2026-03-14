# Adding Holes Manually

Kirra allows you to place individual blast holes directly on the canvas without importing a file. This is useful for adding isolated holes to an existing pattern, designing small patterns by hand, or placing service holes.

---

## Activating the Add Hole Tool

1. Click the **Add Hole** button in the toolbar, or press `A`
2. The cursor changes to a crosshair with a hole symbol
3. The left panel switches to the **Hole Defaults** form

---

## Setting Hole Defaults

Before placing holes, set the default properties that every new hole will inherit:

| Property | Description |
|----------|-------------|
| **Hole ID prefix** | Text prefix for auto-generated IDs (e.g., `H`, `BH`, `R1-`) |
| **Diameter** | Hole diameter in millimetres |
| **Depth** | Planned drill depth in metres |
| **Subdrill** | Subdrill length in metres (added below the design toe) |
| **Bearing** | Drill azimuth in degrees (0° = North) |
| **Inclination** | Drill angle from vertical in degrees (0° = vertical) |
| **Elevation (collar)** | Default collar elevation; override per-hole as needed |

These defaults are saved with the project and persist between sessions.

---

## Placing Holes

1. With the Add Hole tool active, click anywhere on the canvas to place a hole at that position
2. Each click places one hole and auto-increments the Hole ID
3. The hole immediately appears with the default properties set above
4. Continue clicking to place more holes

> **Tip:** Hold `Shift` while clicking to place holes that snap to the active grid.

---

## Editing a Hole After Placement

- **Single click** on a placed hole to select it and display its properties in the right panel
- Edit any field directly in the right panel; changes apply instantly
- **Double-click** on a hole to open the full **Hole Editor** dialog for detailed editing

---

## Switching Back to Selection Mode

Press `S` or click the **Select** tool in the toolbar to exit hole placement mode. Accidentally placed holes can be removed by selecting them and pressing `Delete`.

---

## Hole ID Numbering

Kirra auto-increments the numeric portion of the Hole ID suffix. For example, with prefix `H`, holes are numbered `H001`, `H002`, `H003`, etc. You can manually override any ID in the Hole Editor or via the right panel.

To renumber an entire selection, use **Pattern → Renumber**.

---

## Related Topics

- [Pattern Generation](pattern-generation.md) — generate grids and polygon patterns automatically
- [Editing Holes](editing-holes.md) — select, move, and bulk-edit holes
- [Hole Properties Reference](../reference/hole-properties.md) — every field explained
