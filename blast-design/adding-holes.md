# Adding Blast Holes

Kirra gives you several ways to add blast holes to your design — from placing individual holes one at a time to importing entire patterns from CSV files. This page covers manual hole placement and the properties every hole carries.

---

## Activating the Add Hole Tool

1. Click the **Add Hole** button on the [Holes toolbar](holes-toolbar.md)
2. Click on the canvas where the hole should go. The click snaps to nearby objects — the status bar shows what it snapped to
3. The **Add a hole to the Pattern?** dialog opens with the clicked position filled in

---

## The Add Hole Dialog

The dialog sets the properties of the new hole. It remembers the values you last used, so they become your defaults for the next hole.

| Field | Description | First-use value |
|-------|-------------|-----------------|
| **Template** | Fill the form from a saved [pattern template](pattern-templates.md) | — |
| **Blast Name** | The blast (entity) the hole is added to | — |
| **Use Custom Hole ID** / **Hole ID** | Type your own hole ID instead of the next number | Off |
| **Location X** / **Location Y** | Collar position, from your click | Click position |
| **Collar Z RL (m)** | Collar elevation | Snapped Z, or 0 |
| **Delay** / **Delay Colour** / **Connector Curve (°)** | Timing delay and how its connector is drawn | 0 / red / 0 |
| **Hole Type** | Free text classification | Production |
| **Diameter (mm)** | Hole diameter | 115 |
| **Bearing (°)** | Drill azimuth (0 = North, clockwise) | 0 |
| **Dip/Angle (°)** | Drill angle from vertical (0 = vertical) | 0 |
| **Subdrill (m)** | Vertical distance below grade (positive = downhole) | 0 |
| **Use Grade Z** / **Grade Z RL (m)** / **Length (m)** | Set the hole by grade elevation, or by length | Length |
| **Burden (m)** / **Spacing (m)** | Stored on the hole for analysis | 3.0 / 3.5 |

---

## Placing Holes on the Canvas

1. Fill in the dialog, then click **Single** to place this one hole, or **Multiple** to place it and keep the settings
2. In **Multiple** mode, each further click on the canvas places another hole with the same settings — no dialog
3. Click the **Add Hole** button again to finish

Every tool that adds holes checks for a hole already at the same position in the same blast and warns you before placing a duplicate.

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
| **Hole Diameter** | Diameter in millimetres (115 mm on first use of the Add Hole dialog) |
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

- **Click** a placed hole (with **Pointer Select** on) to select it
- **Right-click** a hole to open the **Edit Hole** dialog — edit its properties and click **Apply**, or use the **Hide**, **Delete**, **Insert** and **Assign Blast** buttons
- See [Editing Holes](editing-holes.md) for moving, bulk editing and deleting

> *Screenshot coming soon*

---

## Hole ID Numbering

Kirra gives each new hole the next number in its blast. To use your own ID instead, tick **Use Custom Hole ID** in the Add Hole dialog and type it in **Hole ID**.

To renumber an entire selection, use **Renumber Holes** on the [Holes toolbar](holes-toolbar.md).

---

## Switching Back to Selection Mode

Click the **Add Hole** button again, or click **Pointer Select** on the Select toolbar, to stop placing holes. Accidentally placed holes can be removed by selecting them and pressing `Delete` or `Backspace`.

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

You can control which hole labels appear on the canvas with the display toggle buttons along the bottom of the workspace. Hover over a button to see its name. They include:

- Hole ID, Hole Type
- Hole Length, Hole Diameter, Hole Subdrill
- Hole Angle, Hole Dip, Hole Bearing
- Delay Value, Hole Time, Ties
- Row and Position
- Hole X / Y / Z Location

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
