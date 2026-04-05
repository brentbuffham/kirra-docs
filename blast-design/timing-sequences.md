# Timing Sequences

Timing controls the order and delay between hole detonations in a blast. Correct timing is essential for fragmentation, vibration management, and flyrock control. Kirra provides tools to design, visualise, and validate timing sequences across your entire blast pattern.

---

## Key Concepts

| Term | Meaning |
|------|---------|
| **Delay** | Milliseconds from the initiation signal to a hole's detonation |
| **Inter-hole delay** | Time between consecutive holes in the same row |
| **Inter-row delay** | Time between consecutive rows |
| **From Hole** | The hole that triggers the current hole (the timing connection source) |
| **Connector** | A line drawn on the canvas showing the timing link between two holes |
| **Firing time** | The absolute calculated time a hole fires, accounting for all upstream delays |

---

## The Connect Tool

The primary way to build a timing sequence is the **Connect** tool. It links holes together to define the firing order.

### How to Connect Holes

1. Activate the Connect tool from the toolbar or the Timing panel
2. Click the **source hole** (the hole that fires first)
3. Click the **target hole** (the hole that fires after the source, with a specified delay)
4. A connector line appears between the two holes on the canvas
5. Enter the delay in milliseconds when prompted
6. Repeat for additional connections

Each connection sets two properties on the target hole:

| Property | What It Stores |
|----------|---------------|
| **From Hole** | The ID of the source hole (the hole it is connected from) |
| **Delay** | The time delay in milliseconds between the source and target |

### Viewing Connections

Enable **View > Show Connectors** (or press `Ctrl+C`) to display connector lines on the canvas. Lines are colour-coded to help you trace the firing sequence visually.

### Deleting a Connection

Select the connector line on the canvas and press `Delete`, or right-click a hole and choose **Remove Connection**.

> *Screenshot coming soon*

---

## Automatic Timing Sequences

Instead of connecting holes one at a time, you can apply automatic timing patterns to an entire selection.

### Row-by-Row (Along Row)

Holes fire in sequence along each row, then advance to the next row.

1. Select the holes to time (or select the entire entity)
2. In the Timing panel, choose **Along Row**
3. Enter the **Inter-hole delay** (e.g. 42 ms) and **Inter-row delay** (e.g. 25 ms)
4. Choose the row direction: Left to Right, Right to Left, Bottom to Top, or Top to Bottom
5. Click **Apply Timing**

### Echelon (Diagonal)

Holes fire in a diagonal wave across the pattern, producing smooth face movement. This is ideal for production bench blasting.

1. Select the holes
2. Choose **Echelon**
3. Enter inter-hole and inter-row delays
4. Set the echelon angle
5. Click **Apply Timing**

### V-Cut (Chevron)

Holes fire from the centre outward in a V-shape, creating relief for the burden. This is well suited to confined blasts or tunnel rounds.

1. Select the holes
2. Choose **V-Cut**
3. Enter delays
4. Click **Apply Timing**

### Manual Timing

Assign delays hole-by-hole for full control:

1. Select **Manual** mode
2. Click each hole on the canvas and enter its delay in the right panel or the Timing panel input field
3. Set the **From Hole** connection for each hole

---

## Timing Flow Across a Pattern

Timing sequences build up from the first hole in the chain. Each hole's absolute firing time is calculated by summing the delays along the connection chain from the initiation point:

```
Hole A (0 ms)  -->  Hole B (42 ms)  -->  Hole C (84 ms)
                         |
                         v
                    Hole D (67 ms)  -->  Hole E (109 ms)
```

In this example:
- Hole A fires at 0 ms
- Hole B fires 42 ms after Hole A (absolute time: 42 ms)
- Hole C fires 42 ms after Hole B (absolute time: 84 ms)
- Hole D fires 25 ms after Hole B (inter-row delay; absolute time: 67 ms)
- Hole E fires 42 ms after Hole D (absolute time: 109 ms)

---

## Colour Coding by Delay

Activate **View > Colour by Timing** to shade holes on the canvas according to their firing delay:

- Earlier-firing holes appear in cooler colours (blue, green)
- Later-firing holes appear in warmer colours (orange, red)
- A colour legend is shown in the bottom-left of the viewport

This gives you an instant visual check of the firing sequence across the entire pattern.

---

## Connector Display Options

| Setting | Description |
|---------|-------------|
| **Show Connectors** | Toggle connector lines on or off (`Ctrl+C`) |
| **Show Timing Values** | Display the delay value on each connector line (`Ctrl+T`) |
| **Connector Curve** | Adjust the curve amount on connector lines (0 = straight) |
| **Connector Colour** | Each hole's connector colour is stored individually and can be set per-hole |

---

## Validating Timing

Kirra automatically checks for common timing problems:

| Warning | What It Means |
|---------|--------------|
| **Unassigned hole** | One or more holes have no timing connection (orphaned) |
| **Circular reference** | A hole's timing chain loops back to itself |
| **Duplicate delay** | Two or more holes fire at exactly the same time |
| **Negative delay** | A calculation produces a negative firing time |

Warnings appear as indicators on the affected holes and in the log panel.

### Manual Checks

- Look for crossed connector lines — they often indicate incorrect firing order
- Verify that the timing sequence flows logically from the free face inward
- Check total blast duration (very long blasts may cause vibration concerns)

---

## Editing Timing After Assignment

### Change a Single Connection

1. Right-click the target hole
2. Choose **Edit Timing** (or double-click the connector line)
3. Modify the delay in milliseconds
4. Optionally change the From Hole reference
5. Kirra recalculates all downstream firing times

### Clear All Timing

Go to **Timing > Clear All Timing** to remove all timing connections and delays from the selected holes or the entire pattern.

---

## Exporting Timing Data

Timing information is included in all standard export formats:

| Format | Timing Data Included |
|--------|---------------------|
| **Kirra CSV** | From Hole, Delay (ms), and total Firing Time columns |
| **Epiroc XML** | Maps to the IREDES timing fields |
| **PDF Report** | Timing summary table and connector diagram |
| **DXF** | Connector lines exported as LINE entities |

---

## Electronic timing constructs (optional)

For **electronic detonators** in the charging design, you can build a **temporal mesh** (time as Z) from drawn contours and assign firing times by **XY interpolation** at the collar. That system is separate from connector delays and is documented in:

- [Electronic Timing Constructs](electronic-timing-constructs.md)

---

## Related Topics

- [Pattern Generation](pattern-generation.md) — generate your pattern before assigning timing
- [Editing Holes](editing-holes.md) — select and modify holes
- [Adding Holes](adding-holes.md) — place individual holes manually
