# Adding Blast Holes

Kirra gives you several ways to add blast holes to your design — from placing individual holes one at a time to importing entire patterns from CSV files. This page covers manual hole placement and the properties every hole carries.

---

## Activating the Add Hole Tool

1. Click the **Add Hole** button in the toolbar, or press `A`
2. The cursor changes to a crosshair with a hole symbol
3. The left panel switches to the **Hole Defaults** form

---

## Setting Hole Defaults

Before placing holes, configure the default properties that every new hole will inherit. These defaults save you from re-entering the same values for each hole.

| Property | Description | Typical Value |
|----------|-------------|---------------|
| **Hole ID prefix** | Text prefix for auto-generated IDs (e.g. `H`, `BH`, `R1-`) | `H` |
| **Diameter** | Hole diameter in millimetres | 115 mm *[VERIFY: built-in default]* |
| **Bench Height** | Vertical distance from collar to grade (metres) | 10.0 m *[VERIFY]* |
| **Subdrill** | Vertical distance below grade (metres, positive = downhole) | 1.5 m *[VERIFY]* |
| **Bearing** | Drill azimuth in degrees (0 = North, clockwise) | 0 |
| **Angle** | Drill angle from vertical in degrees (0 = vertical, 90 = horizontal) | 0 |
| **Collar Elevation** | Default collar Z elevation; override per-hole as needed | 150.0 m *[VERIFY]* |
| **Hole Type** | Classification of the hole | Production |

Typical values above are illustrative — confirm the built-in defaults against the live Hole Defaults panel. The defaults are saved with the project and persist between sessions.

---

## Placing Holes on the Canvas

1. With the Add Hole tool active, click anywhere on the canvas to place a hole at that position
2. Each click places one hole and auto-increments the Hole ID
3. The hole immediately appears with the default properties set above
4. Continue clicking to place more holes

> **Tip:** Hold `Shift` while clicking to snap holes to the active grid.

> *Screenshot coming soon*

---

## Understanding Hole Properties

Every blast hole in Kirra carries a full set of geometric and operational properties. These are grouped into several categories:

### Geometry — Collar, Toe, and Grade

Each hole is defined by three key 3D points:

| Point | What It Represents |
|-------|-------------------|
| **Collar** (Start) | The top of the hole at the surface — Easting, Northing, and Elevation |
| **Toe** (End) | The bottom of the hole — the deepest point drilled |
| **Grade** (Floor) | Where the hole intersects the bench floor elevation |

The relationship between these points determines all other geometric properties:

- **Bench Height** = Collar Elevation minus Grade Elevation (always positive)
- **Subdrill Amount** = Grade Elevation minus Toe Elevation (positive = hole extends below the floor)
- **Hole Length** = 3D distance from Collar to Toe

For angled holes, the Grade point is automatically interpolated along the hole vector between the Collar and Toe.

### Orientation — Angle and Bearing

| Property | Convention | Range |
|----------|-----------|-------|
| **Angle** | Measured from vertical (0 = straight down, 90 = horizontal) | 0 to 90 degrees |
| **Bearing** | Compass direction measured clockwise from North | 0 to 359.99 degrees |

> **Note:** Different mining software uses different angle conventions. Kirra uses "angle from vertical" where 0 is straight down. Some systems like Surpac use -90 for vertical. Always verify the convention when importing data from other software.

### Dimensions

| Property | Description |
|----------|-------------|
| **Hole Diameter** | Diameter in millimetres *[VERIFY: default value]* |
| **Hole Length** | Calculated 3D distance from collar to toe (metres) |
| **Subdrill Length** | Vector distance along the hole from grade to toe (metres) |

### Timing and Initiation

| Property | Description |
|----------|-------------|
| **From Hole** | Which hole this one is connected to in the timing sequence |
| **Delay** | Time delay in milliseconds from the connected hole |
| **Connector Colour** | Colour of the timing connector line on the canvas |

### Measured Data

Kirra also stores actual field measurements alongside the design data:

| Property | Description |
|----------|-------------|
| **Measured Length** | Actual drilled depth (metres) |
| **Measured Mass** | Actual explosive mass loaded (kg) |
| **Measured Comment** | Field notes or observations |
| **Temperature** | Borehole temperature (if measured) |

All measured fields include timestamps for audit trail purposes.

---

## Hole Types

Each hole carries a type classification that controls its colour coding and how it is treated in reports and exports:

| Type | Typical Use |
|------|------------|
| **Production** | Standard production blast holes |
| **Presplit** | Pre-split perimeter holes for wall control |
| **Buffer** | Buffer holes between production and presplit rows |
| **Trim** | Trim or control holes |
| **Relief** | Relief holes for burn cuts or tunnel rounds |
| **Undefined** | Default — not yet classified |

Custom hole types are also supported. You can enter any name you like.

---

## Editing a Hole After Placement

- **Single click** a placed hole to select it and display its properties in the right panel
- Edit any field directly in the right panel; changes apply instantly
- **Right-click** a hole to open the context menu with options like Properties, Delete, and Select Row
- **Double-click** a hole to open the full Hole Properties dialog for detailed editing

> *Screenshot coming soon*

---

## Hole ID Numbering

Kirra auto-increments the numeric portion of the Hole ID. For example, with prefix `H`, holes are numbered `H001`, `H002`, `H003`, and so on. You can manually override any ID in the Hole Properties dialog or in the right panel.

To renumber an entire selection, use **Renumber Holes** on the [Holes toolbar](holes-toolbar.md).

---

## Switching Back to Selection Mode

Press `S` or click the **Select** tool in the toolbar to exit hole placement mode. Accidentally placed holes can be removed by selecting them and pressing `Delete` or `Backspace`.

---

## Coordinate System

Kirra uses UTM-style real-world coordinates:

| Axis | Direction |
|------|-----------|
| **X** | Easting (metres east, positive to the right) |
| **Y** | Northing (metres north, positive upward on the canvas) |
| **Z** | Elevation (metres altitude) |

> **IREDES Warning:** If you import or export IREDES XML files, be aware that the IREDES standard swaps X and Y (X = Northing, Y = Easting). Kirra handles this swap automatically during import and export.

---

## Display Options

You can control which hole labels appear on the canvas via the **View** menu:

- Hole ID
- Hole Type
- Diameter
- Length
- Angle and Bearing
- Timing Delay
- Row and Position numbers

Toggle these on and off as needed to keep the canvas readable.

### Hole Visualisation

| View | How Holes Appear |
|------|-----------------|
| **2D Canvas** | Circles at the collar position with timing connector lines |
| **3D View** | Cylinders from collar to toe, colour-coded by type or timing |

---

## Related Topics

- [Pattern Generation](pattern-generation.md) — generate grids, polygon, and line patterns automatically
- [Editing Holes](editing-holes.md) — select, move, and bulk-edit holes
- [Timing Sequences](timing-sequences.md) — assign initiation delays
- [Hole Properties Reference](../reference/hole-properties.md) — every field explained
