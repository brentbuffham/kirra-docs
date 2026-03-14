# Pattern Generation

Kirra can automatically generate blast patterns in several geometric configurations. Pattern generation is the fastest way to lay out a new blast from scratch when you know your burden, spacing, and bench geometry.

---

## Opening the Pattern Generator

Click **Pattern → Generate** in the menu bar, or press `G`, or click the **Generate Pattern** button in the toolbar.

---

## Pattern Types

### Rectangular (Square / Staggered)

Generates a regular grid of holes.

| Parameter | Description |
|-----------|-------------|
| **Burden** | Row-to-row spacing (metres), measured perpendicular to the free face |
| **Spacing** | Hole-to-hole spacing within a row (metres) |
| **Rows** | Number of rows |
| **Holes per row** | Number of holes in each row |
| **Stagger** | Offset every second row by half the spacing (staggered pattern) |
| **Orientation** | Bearing of the first row (degrees) |
| **Start point** | Easting / Northing of the first hole collar |

**Steps:**
1. Select **Rectangular** from the pattern type list
2. Enter burden, spacing, rows, and holes per row
3. Toggle stagger on/off
4. Set orientation and start point, or click **Pick on Canvas** to click a start location
5. Click **Preview** to see the result before committing
6. Click **Generate** to place the holes

---

### Polygon Pattern

Fills an arbitrary polygon boundary with holes at the specified burden and spacing.

**Steps:**
1. Select **Polygon** from the pattern type list
2. Either:
   - **Draw boundary** — click on the canvas to trace the polygon outline, then double-click to close it, or
   - **Import boundary** — load the polygon from a DXF layer or CSV boundary file
3. Enter burden and spacing
4. Set orientation (row bearing inside the polygon)
5. Click **Preview**, then **Generate**

> **Tip:** Holes that fall outside the polygon boundary are automatically excluded.

---

### Along Line

Generates a single row of holes spaced along a drawn or imported line.

**Steps:**
1. Select **Along Line** from the pattern type list
2. Either:
   - **Draw line** — click two or more points on the canvas to define the line, or
   - **Import line** — load from a DXF layer or CSV
3. Enter hole spacing (metres)
4. Set offset (perpendicular distance from the line to hole collars, for face holes)
5. Click **Generate**

---

### Along Polyline

Similar to Along Line but follows a multi-segment polyline. Useful for curved faces or contoured bench edges.

**Steps:**
1. Select **Along Polyline**
2. Draw or import the polyline
3. Enter hole spacing and any perpendicular offset
4. Click **Generate**

---

## Common Settings

All pattern types share these settings:

| Setting | Description |
|---------|-------------|
| **Default Depth** | Planned drill depth for all generated holes |
| **Default Diameter** | Hole diameter (mm) |
| **Default Subdrill** | Subdrill (m) |
| **Default Bearing** | Drill azimuth (degrees) |
| **Default Inclination** | Drill angle from vertical (degrees) |
| **ID Prefix** | Prefix for generated Hole IDs (e.g., `R`, `B`, `H`) |
| **Start number** | First number in the auto-generated ID sequence |

---

## Modifying a Generated Pattern

After generation, holes behave like any manually placed hole. You can:
- Select and drag individual holes
- Bulk-edit properties via the right panel
- Add or delete holes
- Rotate or mirror the entire pattern with **Pattern → Rotate** / **Mirror**
- Renumber IDs with **Pattern → Renumber**

---

## Related Topics

- [Adding Holes](adding-holes.md) — place individual holes manually
- [Editing Holes](editing-holes.md) — selection, movement, and property editing
- [Interface Tour](../getting-started/interface-tour.md) — canvas navigation
