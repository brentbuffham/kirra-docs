# Pattern Generation

Kirra lays out a new blast from your burden, spacing and bench geometry with four pattern tools on
the [Holes toolbar](holes-toolbar.md). This page helps you choose one and covers what they share.
Each tool has its own guide with every field and default.

---

## Choosing a Pattern Method

| Method | Best for | Tool |
|--------|----------|------|
| **Rectangular grid** | Standard bench blasting with uniform rows | [Add Pattern](add-pattern.md) |
| **Polygon** | Irregular blast boundaries, pit edges, curved benches | [Pattern in Polygon](pattern-in-polygon.md) |
| **Straight line** | Single-row presplit, buffer, trim or production rows | [Holes Along Line](holes-along-line.md) |
| **Polyline** | Rows that follow a crest, toe or design line | [Holes Along Polyline](holes-along-polyline.md) |

For a few holes by hand, use [Add Hole](adding-holes.md). To add a hole to an existing row, use
[Insert Holes](insert-holes.md).

---

## Pattern layouts

**Rectangular grid** — rows one burden apart, holes one spacing apart along each row:

```
Rows (Burden direction)
 |
 v
 *  *  *  *  *   <-- Row 1
 *  *  *  *  *   <-- Row 2
 *  *  *  *  *   <-- Row 3
    --> Spacing
```

**Straight line** — the number of holes follows from the line length and the spacing:

```
Start --> *  *  *  *  *  *  * <-- End
          |<-- Spacing -->|
```

**Polyline** — the spacing is measured along the line, round each bend:

```
        *--*--*
       /       \
      *         *--*--*
     /               \
    *                 *
```

**Polygon** — a straight grid trimmed to the polygon (**Straight Rows**), or rows that follow a
reference line stepped out by the burden (**Along Polyline**). See
[Pattern in Polygon](pattern-in-polygon.md).

---

## Collar and Grade Elevation

Every pattern dialog sets elevations the same way:

| Field | Description |
|-------|-------------|
| **Collar Elevation (m)** (or **Start Z** in Add Pattern) | Collar Z for every hole |
| **Use Grade Z** ticked | Enter **Grade Elevation (m)** — each hole runs from the collar to that floor, plus subdrill |
| **Use Grade Z** unticked | Enter **Length (m)** instead |

To drape collars onto a terrain surface after generating, use **Assign Surface (Collar)** on the
[Modify toolbar](../kad/assign-surface-grade.md#assign-surface-collar).

---

## Hole Naming

- **Numerical Names** ticked numbers the holes (1, 2, 3 …). Unticked, they take row-letter names —
  the letter is the row and the number the position (A1, A2 … B1, B2 …).
- **Pattern in Polygon**, **Holes Along Line** and **Holes Along Polyline** have a
  **Starting Hole ID**: a number (`500`) or an alphanumeric seed (`A1`). New holes continue past any
  higher ID of the same series already in the blast.
- **Add Pattern** has no Starting Hole ID. Its numbers continue from the highest numeric hole ID
  already loaded. See [Add Pattern](add-pattern.md).

To change the names afterwards, use [Renumber Holes](renumber-holes.md) or
[Reorder Rows](reorder-rows.md).

---

## Templates

Every pattern dialog, and the Add Hole dialog, has a **Template** list at the top. Picking a template
fills the form from a saved [pattern template](pattern-templates.md) — burden, spacing, hole
settings, text setup and charging.

---

## Duplicate Detection

Naming a blast the same as an existing one adds the new holes to it, and Kirra checks them for
holes on top of each other. If a new hole would land on an existing hole in the same blast, a
warning lets you **Ignore** (place anyway), **Skip** (leave that hole out), **Skip All** or
**Cancel**. See [Editing Holes → Hole coincidence](editing-holes.md#hole-coincidence).

To check a new pattern against **another** blast or a drawing, use
[Coincident Holes Check](coincident-holes-check.md).

---

## Modifying a Generated Pattern

After generation, holes behave like any manually placed hole. You can:

- Move holes with the **Move** tool on the [Modify toolbar](../kad/move.md)
- Bulk-edit properties by right-clicking a selection (the **Edit Hole** dialog)
- Add holes with [Add Hole](adding-holes.md) or [Insert Holes](insert-holes.md), or delete them
- Renumber with [Renumber Holes](renumber-holes.md), or re-row with [Reorder Rows](reorder-rows.md)

See [Editing Holes](editing-holes.md).

---

## Pattern Statistics

After pattern creation, the Data Explorer shows a summary beside each blast — the hole count, total
drilled length and blast volume, for example `(330, 1900.0m, 13951.8m³)`.

---

## Related Topics

- [Holes Toolbar](holes-toolbar.md) — every button, with links
- [Pattern Templates](pattern-templates.md) — save and reuse pattern settings
- [Editing Holes](editing-holes.md) — selection, movement and property editing
- [Timing Sequences](timing-sequences.md) — tie and time the blast after creating it
