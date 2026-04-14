# Pattern Generation

Kirra can automatically generate blast patterns in several geometric configurations. Pattern generation is the fastest way to lay out a new blast from scratch when you know your burden, spacing, and bench geometry.

---

## Choosing a Pattern Method

| Method | Best For | Tool |
|--------|----------|------|
| **Rectangular Grid** | Standard bench blasting with uniform rows and columns | Holes toolbar → Add Pattern Block |
| **Polygon Pattern** | Irregular blast boundaries, pit edges, complex shapes | Holes toolbar → Add Pattern in Polygon |
| **Line Pattern** | Single-row presplit, buffer, or production lines | Holes toolbar → Holes Along Line |
| **Polyline Pattern** | Curved or multi-segment rows following contours | Holes toolbar → Holes Along Polyline |

See the [Holes Toolbar](holes-toolbar.md) reference for each button.

> *Screenshot coming soon*

---

## Rectangular Grid Pattern

Creates a regular grid of blast holes with uniform burden and spacing. This is the most common pattern type for bench blasting.

**Tool:** Holes toolbar → Add Pattern Block

### Parameters

| Parameter | Description | Typical Value |
|-----------|-------------|---------------|
| **Pattern Name** | Name for this group of holes | `Bench_150_North` |
| **Number of Rows** | Rows perpendicular to the free face | 5 to 10 |
| **Number of Columns** | Holes per row, parallel to the free face | 10 to 20 |
| **Burden** | Distance between rows (metres) | 5.0 m |
| **Spacing** | Distance between holes within a row (metres) | 6.0 m |
| **Collar Elevation** | Starting Z elevation for all holes (metres) | 150.0 m |
| **Bench Height** | Vertical distance from collar to grade (metres) | 10.0 m |
| **Subdrill** | Vertical distance below grade (metres, positive = downhole) | 1.5 m |
| **Hole Angle** | Angle from vertical (0 = vertical) | 0 degrees |
| **Hole Bearing** | Direction of hole angle (0 = North, clockwise) | 0 degrees |
| **Hole Diameter** | Diameter in millimetres | 115 mm *[VERIFY: typical value]* |
| **Hole Type** | Classification | Production |
| **First Hole Position** | Easting and Northing of the pattern origin | Site coordinates |

### Pattern Layout

```
Rows (Burden direction)
 |
 v
 *  *  *  *  *   <-- Row 1
 *  *  *  *  *   <-- Row 2
 *  *  *  *  *   <-- Row 3
    --> Spacing
```

### Steps

1. Click **Add Pattern Block** on the [Holes toolbar](holes-toolbar.md)
2. Enter the pattern name (e.g. `Bench_150`)
3. Set the starting position (Easting, Northing, Elevation)
4. Configure the number of rows and columns
5. Set burden and spacing distances
6. Enter hole specifications (bench height, subdrill, angle, bearing, diameter)
7. Click **Generate**
8. Holes appear immediately on the canvas

### Hole Naming

Generated holes are numbered sequentially: `H001`, `H002`, `H003`, etc. Row-based naming is also available: `R1-H01`, `R1-H02`, `R2-H01`, etc.

---

## Polygon Pattern

Fills an irregular polygon boundary with holes at the specified burden and spacing. Holes that fall outside the boundary are automatically excluded.

**Tool:** Holes toolbar → Add Pattern in Polygon

### Steps

1. Click **Add Pattern in Polygon** on the [Holes toolbar](holes-toolbar.md)
2. Define the boundary by clicking points on the canvas to trace the polygon outline, then double-click to close it. Alternatively, select an existing polygon from a DXF import.
3. Enter burden and spacing
4. Set collar elevation and hole properties (bench height, subdrill, angle, bearing, diameter)
5. Optionally enable stagger (offsets every second row by half the spacing)
6. Click **Preview** to review before committing
7. Click **Generate** — holes fill the polygon

### Edge Handling

- Holes are included if their collar position falls inside the polygon
- Fractional rows and columns at the edges are handled automatically
- Perimeter holes can be detected for presplit applications

### Use Cases

- Irregular blast boundaries following pit design
- Selective blast areas within a larger pattern
- Complex shapes that a simple grid cannot fill

> *Screenshot coming soon*

---

## Line Pattern

Creates a single straight row of holes between two points.

**Tool:** Holes toolbar → Holes Along Line

### Steps

1. Click **Holes Along Line** on the [Holes toolbar](holes-toolbar.md)
2. Define the start point and end point by clicking on the canvas or entering coordinates
3. Enter the number of holes or the spacing between holes:
   - If you specify hole count, spacing is calculated automatically
   - If you specify spacing, hole count is calculated automatically
4. Set hole properties (collar elevation, bench height, subdrill, angle, bearing, diameter, type)
5. Click **Generate**

### Pattern Layout

```
Start --> *  *  *  *  *  *  * <-- End
          |<-- Spacing -->|
```

### Use Cases

- Presplit lines with tight spacing (1 to 2 metres)
- Buffer rows with intermediate spacing (3 to 4 metres)
- Single-row production blasts
- Test patterns

---

## Polyline Pattern

Creates a curved or multi-segment row of holes following a polyline path. This is ideal for contour-following patterns.

**Tool:** Holes toolbar → Holes Along Polyline

### Steps

1. Click **Holes Along Polyline** on the [Holes toolbar](holes-toolbar.md)
2. Click multiple points on the canvas to define the path, or select an existing polyline
3. Enter the hole spacing along the path (metres)
4. Set hole properties (collar elevation, bench height, subdrill, angle, bearing, diameter, type)
5. Click **Generate**

### Pattern Layout

```
        *--*--*
       /       \
      *         *--*--*
     /               \
    *                 *
```

### Bearing Options

| Option | Description |
|--------|-------------|
| **Follow Path** | Each hole is angled perpendicular to its local path segment |
| **Fixed Bearing** | All holes use the same bearing regardless of path direction |

### Use Cases

- Curved presplit lines following pit contours
- Non-linear buffer rows
- Complex perimeter patterns along bench edges

> *Screenshot coming soon*

---

## Collar Elevation Options

When generating any pattern type, you can set collar elevations in several ways:

| Mode | Description |
|------|-------------|
| **Constant Elevation** | All holes use the same Z value that you enter |
| **From Surface** | Collar Z is interpolated from a loaded terrain surface at each hole's Easting/Northing position |
| **From Grade + Bench** | Collar Z is calculated as Grade Elevation + Bench Height |

Using the **From Surface** mode enables adaptive patterns that follow terrain topography.

---

## Common Settings for All Patterns

All pattern types share these hole-level settings:

| Setting | Description |
|---------|-------------|
| **Default Depth / Bench Height** | Vertical bench height (metres) |
| **Default Subdrill** | Subdrill below grade (metres) |
| **Default Diameter** | Hole diameter (mm) |
| **Default Angle** | Drill angle from vertical (degrees) |
| **Default Bearing** | Drill azimuth (degrees) |
| **Default Hole Type** | Production, Presplit, Buffer, etc. |
| **ID Prefix** | Prefix for generated Hole IDs |
| **Start Number** | First number in the auto-generated ID sequence |

---

## Modifying a Generated Pattern

After generation, holes behave like any manually placed hole. You can:

- Select and drag individual holes to adjust positions
- Bulk-edit properties via the right panel
- Add or delete holes
- Rotate the entire pattern *[VERIFY: tool location — may be via right-click Rotate Selection or the Modify toolbar]*
- Mirror the pattern *[VERIFY: tool location]*
- Renumber IDs with **Renumber Holes** on the [Holes toolbar](holes-toolbar.md)

---

## Duplicate Detection

When creating or importing patterns with names that already exist:

1. Kirra checks for duplicate Hole IDs
2. It detects overlapping hole positions (within tolerance)
3. A warning is displayed listing the conflicts
4. You can choose to: Skip duplicates, Rename automatically, or Overwrite

---

## Pattern Statistics

After pattern creation, view statistics via **View > Pattern Statistics** *[VERIFY: menu path]* or by selecting the entity in the TreeView:

- Total hole count
- Total drilled length (sum of all hole lengths)
- Average burden and spacing
- Burden and spacing range (min, max, mean)
- Total rock volume

---

## Related Topics

- [Adding Holes](adding-holes.md) — place individual holes manually
- [Editing Holes](editing-holes.md) — selection, movement, and property editing
- [Timing Sequences](timing-sequences.md) — assign initiation delays after pattern creation
- [Interface Tour](../getting-started/interface-tour.md) — canvas navigation
