# Pattern Generation

Kirra can automatically generate blast patterns in several geometric configurations. Pattern generation is the fastest way to lay out a new blast from scratch when you know your burden, spacing, and bench geometry.

---

## Choosing a Pattern Method

| Method | Best For | Tool |
|--------|----------|------|
| **Rectangular Grid** | Standard bench blasting with uniform rows | Holes toolbar → **Add Pattern** |
| **Polygon Pattern** | Irregular blast boundaries, pit edges, complex shapes | Holes toolbar → **Pattern in Polygon** |
| **Line Pattern** | Single-row presplit, buffer, or production lines | Holes toolbar → **Holes Along Line** |
| **Polyline Pattern** | Curved or multi-segment rows following an existing line | Holes toolbar → **Holes Along PolyLine** |

See the [Holes Toolbar](holes-toolbar.md) reference for each button.

> *Screenshot coming soon*

---

## Rectangular Grid Pattern

Creates a regular grid of blast holes with uniform burden and spacing. This is the most common pattern type for bench blasting.

**Tool:** Holes toolbar → **Add Pattern** (dialog: **Add a Pattern?**)

### Parameters

| Parameter | Description |
|-----------|-------------|
| **Template** | Fill the form from a saved [pattern template](pattern-templates.md) |
| **Blast Name** | Name of the blast (entity) the holes are created in |
| **Numerical Names** | Ticked: holes are numbered 1, 2, 3 … Unticked: row-letter names (A1, A2 … B1, B2 …) |
| **Orientation** | Pattern orientation in degrees |
| **Start X** / **Start Y** / **Start Z** | Pattern origin — X and Y come from your click |
| **Use Grade Z** / **Grade Elevation (m)** / **Length (m)** | Set holes by grade elevation, or by length |
| **Diameter (mm)** | Hole diameter |
| **Type** | Hole type (free text, e.g. Production) |
| **Angle (°)** | Angle from vertical (0 = vertical) |
| **Hole Pivot Location** | Whether the clicked point is the collar, the grade or the toe |
| **Bearing (°)** | Direction of the hole angle (0 = North, clockwise) |
| **Subdrill (m)** | Vertical distance below grade (positive = downhole) |
| **Offset** | Row stagger — Staggered = -0.5 or 0.5, Square = -1, 0, 1 |
| **Burden (m)** | Distance between rows |
| **Spacing (m)** | Distance between holes within a row |
| **Rows** | Number of rows |
| **Holes Per Row** | Holes in each row |
| **Row Direction** | **Return (Forward Only)** or **Serpentine (Forward & Back)** |

The dialog remembers the values you last used.

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

1. Click **Add Pattern** on the [Holes toolbar](holes-toolbar.md)
2. Click on the canvas to place the pattern start point (the click snaps to nearby objects)
3. In the **Add a Pattern?** dialog, enter the blast name, rows, holes per row, burden and spacing
4. Enter the hole specifications (grade or length, subdrill, angle, bearing, diameter, type)
5. Click **Confirm** — holes appear immediately on the canvas

### Hole Naming

With **Numerical Names** ticked, holes are numbered sequentially (1, 2, 3 …). Unticked, they take row-letter names — the letter is the row and the number the position (A1, A2 … B1, B2 …).

The **Starting Hole ID** field accepts both numbers and alphanumeric seeds. Type `500` to start at 500, or `A1` to start an alphabetical series (`A1, A2, A3 …`) — the letter prefix is preserved and the trailing number increments. If the blast already has holes in the same series, new holes continue from the highest existing ID + 1; switching to a new prefix starts a fresh series.

---

## Polygon Pattern

Fills a polygon boundary with holes at the specified burden and spacing. Holes that fall outside the boundary are automatically excluded.

**Tool:** Holes toolbar → **Pattern in Polygon**

### Two modes — right-click the button

Right-click **Pattern in Polygon** to choose how the rows run. Choosing a mode also switches the tool on.

| Mode | Button colour | Rows |
|---|---|---|
| **Straight Rows** | Red | A straight grid at the bearing you set, trimmed to the polygon |
| **Along Polyline** | Amber | Every row follows a reference line — a crest, a toe, or the polygon's own edge — stepped out by the burden |

Hover the button to see which mode is set.

![Pattern in Polygon right-click menu](../screenshots/PatternInPolygonMenu.png)

### Steps — Straight Rows

1. Click **Pattern in Polygon** on the [Holes toolbar](holes-toolbar.md)
2. Click the polygon to fill
3. Click the pattern start point, then the end point — this sets the row direction
4. Click the reference point
5. Enter the burden, spacing and hole properties, then click **Confirm**

### Steps — Along Polyline

1. Right-click **Pattern in Polygon** and choose **Along Polyline** — the button turns amber
2. Click the polygon to fill
3. Click the reference line — a drawn line, or the polygon's own edge
4. Click the start point on that line, then the end point. The chosen stretch is highlighted in amber, and its direction sets the hole numbering order
5. Enter the burden, spacing and hole properties, then click **Confirm**

Rows are placed on both sides of the reference line until the polygon is filled. Each hole's bearing is set square to its own row, so the bearing field is greyed out in this mode.

![Generate Pattern in Polygon — Along Polyline dialog](../screenshots/PatternInPolygonDialog.png)

![Along Polyline pattern — rows follow the red reference line round the bend](../screenshots/PatternInPolygonAlongPolyline.png)

### Settings in the right-click menu

| Setting | Mode | Default | What it does |
|---|---|---|---|
| **Min ratio / Max ratio** | Along Polyline | 0.8 / 1.2 | Keeps every step along a row between these multiples of the spacing. Holes that are too close are removed, and long steps get evenly placed extra holes. A gap where a row leaves the polygon is never filled. 0 turns it off |
| **Extra ratio** | Both | 0 | At each end of a row, tries one more hole this multiple of the spacing past the last hole. It is kept only if it falls inside the polygon. 0 turns it off |
| **Stagger round bends** | Along Polyline | Per segment | **Per segment** keeps spacing and stagger exact on every straight, and the min/max range tidies each bend. **Along row** keeps spacing exact along every row, but the stagger drifts round bends |
| **Inserted** | Along Polyline | Amber triangle | How holes added by the min/max range are marked |
| **Extra** | Both | Cyan diamond | How the extra row-end holes are marked |

The same values appear in the pattern dialog, so changing one changes both.

### Marked holes

Holes that Kirra adds or moves to fit the polygon are marked so you can review them:

- **Inserted** holes come from the min/max spacing range
- **Extra** holes are the additional holes at the row ends

For each, pick a **shape**, a **colour**, or both. Choose **Unchanged** for the shape, or untick the colour, to leave that part alone. The mark is saved with the hole, appears on screen and in prints, and can be changed afterwards like any other hole colour or shape.

![Marked holes — amber triangles were inserted by the spacing range, cyan diamonds are extra row-end holes](../screenshots/PatternInPolygonMarkedHoles.png)

### Edge Handling

- Holes are included if their collar position falls inside the polygon
- A concave polygon can split a row into pieces; the pieces stay in the same row
- Round an inside bend, rows close up — the min ratio thins them out
- Perimeter holes can be detected for presplit applications

### Use Cases

- Irregular blast boundaries following pit design
- Curved benches and ramps, with rows following the crest (Along Polyline)
- Selective blast areas within a larger pattern

---

## Line Pattern

Creates a single straight row of holes between two points.

**Tool:** Holes toolbar → Holes Along Line

### Steps

1. Click **Holes Along Line** on the [Holes toolbar](holes-toolbar.md)
2. Click the start point, then the end point on the canvas — the **Generate Holes Along Line** dialog opens
3. Enter the **Spacing (m)** between holes — the number of holes follows from the line length
4. Set hole properties (collar elevation, grade or length, subdrill, angle, diameter, type)
5. Tick **Bearings are 90° to Row**, or untick it and enter a **Hole Bearing (°)**
6. Click **OK**

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

**Tool:** Holes toolbar → **Holes Along PolyLine**

### Steps

1. Draw the path first as a KAD line or polyline (or use a polygon edge)
2. Click **Holes Along PolyLine** on the [Holes toolbar](holes-toolbar.md)
3. Click the line to select it, then click a vertex or point along it for the start, and another for the end — the **Generate Holes Along Polyline** dialog opens
4. Enter the hole spacing along the path (metres) and the hole properties
5. Click **OK**

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
| **Bearings are 90° to Segment** (ticked) | Each hole is set square to its local segment of the path |
| **Hole Bearing (°)** (checkbox unticked) | All holes use the bearing you type |
| **Reverse Direction** | Places the holes in the opposite direction along the path |

### Use Cases

- Curved presplit lines following pit contours
- Non-linear buffer rows
- Complex perimeter patterns along bench edges

> *Screenshot coming soon*

---

## Collar and Grade Elevation

Every pattern dialog sets elevations the same way:

| Field | Description |
|-------|-------------|
| **Collar Elevation (m)** (or **Start Z** in Add Pattern) | Collar Z for every hole |
| **Use Grade Z** ticked | Enter **Grade Elevation (m)** — each hole runs from the collar to that floor, plus subdrill |
| **Use Grade Z** unticked | Enter **Length (m)** instead |

To drape collars onto a terrain surface after generating, use **Assign Surface (Collar)** on the [Modify toolbar](../kad/modify-tools.md#assign-surface-collar).

---

## Common Settings for All Patterns

All pattern dialogs share these hole-level settings: **Template**, **Blast Name**, **Numerical Names**, the starting hole ID, **Burden (m)**, **Spacing (m)**, **Subdrill (m)**, the hole angle, **Hole Pivot Location** (except the line tools), the bearing, **Diameter (mm)**, the hole type, and **Row Direction** (pattern tools).

| Setting | Description |
|---------|-------------|
| **Starting Hole ID** | First ID in the sequence — number (`500`) or alphanumeric seed (`A1`); auto-continues from existing same-series holes |

---

## Modifying a Generated Pattern

After generation, holes behave like any manually placed hole. You can:

- Move holes with the **Move** tool on the [Modify toolbar](../kad/modify-tools.md#move)
- Bulk-edit properties by right-clicking a selection (the **Edit Hole** dialog)
- Add or delete holes
- Renumber IDs with **Renumber Holes**, or reassign rows with **Reorder Rows**, on the [Holes toolbar](holes-toolbar.md)

See [Editing Holes](editing-holes.md).

---

## Duplicate Detection

Naming a blast the same as an existing one adds the new holes to it, and Kirra checks them for duplicate and overlapping holes. If a new hole would land on an existing hole in the same blast, a warning lets you **Ignore** (place anyway), **Skip** (place only the non-clashing holes), **Skip All**, or **Cancel**. See [Editing Holes → Hole coincidence](editing-holes.md#hole-coincidence).

---

## Pattern Statistics

After pattern creation, the Data Explorer shows a summary beside each blast — the hole count, total drilled length and blast volume, for example `(330, 1900.0m, 13951.8m³)`.

---

## Related Topics

- [Adding Holes](adding-holes.md) — place individual holes manually
- [Editing Holes](editing-holes.md) — selection, movement, and property editing
- [Timing Sequences](timing-sequences.md) — assign initiation delays after pattern creation
- [Interface Tour](../getting-started/interface-tour.md) — canvas navigation
