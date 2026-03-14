# Timing Sequences

Timing assigns each hole an initiation delay — the time in milliseconds from the blast signal to the hole's detonation. Correct timing controls fragmentation, vibration, and flyrock. Kirra provides several tools to configure and visualise timing across your blast pattern.

---

## Opening the Timing Panel

Press `T`, or go to **View → Timing Panel**, or click the **Timing** button in the toolbar.

---

## Timing Concepts

| Term | Meaning |
|------|---------|
| **Delay** | Milliseconds from the initiation signal to detonation for a given hole |
| **Inter-hole delay** | Time between consecutive holes in the same row |
| **Inter-row delay** | Time between consecutive rows |
| **Tie-in** | A connector linking two surface connections or detonators |
| **Connector** | An electronic or non-electric link between detonators |
| **Firing time** | The absolute calculated time a hole fires |

---

## Applying an Automatic Timing Sequence

### Along Row
Holes fire in sequence along each row, row by row.

1. In the Timing panel, select **Along Row**
2. Enter **Inter-hole delay** (ms) and **Inter-row delay** (ms)
3. Choose row direction: **Left to Right**, **Right to Left**, **Bottom to Top**, or **Top to Bottom**
4. Click **Apply Timing**

### Echelon (V or Chevron)
Holes fire in a diagonal wave across the pattern, producing a V or chevron shape.

1. Select **Echelon**
2. Enter inter-hole and inter-row delays
3. Set echelon angle
4. Click **Apply Timing**

### Manual
Assign delays hole-by-hole.

1. Select **Manual**
2. Click each hole on the canvas and enter its delay in the right panel (or the Timing panel input field)
3. Kirra validates that no two holes have identical non-zero delays (configurable in Project Settings)

---

## Colour Coding by Delay

Activate **View → Colour by Timing** to shade holes on the canvas by their firing delay. Earlier-firing holes appear in cooler colours (blue/green) and later-firing holes in warmer colours (orange/red). The legend is shown in the bottom-left of the viewport.

---

## Timing Diagram

Open **View → Timing Diagram** for a graphical timeline showing each hole's firing time as a bar chart or Gantt-style view.

- Hover over a bar to highlight the corresponding hole on the canvas
- Click a bar to select that hole
- The diagram updates live as you edit delays

---

## Tie-Ins and Connectors

### What They Are
Tie-ins are surface delay elements connecting detonating cord or electronic detonator networks at the surface. Connectors link individual detonators.

### Adding a Tie-In
1. In the Timing panel, click **Add Tie-In**
2. Click the first hole on the canvas, then the second hole — a connector line is drawn between them
3. Enter the tie-in delay (ms)
4. Kirra recalculates all downstream firing times automatically

### Viewing Connections
Enable **View → Show Connections** to display tie-in lines on the canvas. Lines are colour-coded by delay type.

### Deleting Connections
Select the tie-in line on the canvas and press `Delete`, or right-click → **Remove Tie-In**.

---

## Validating Timing

Kirra automatically flags potential timing issues:

| Warning | Meaning |
|---------|---------|
| **Duplicate delay** | Two or more holes fire at exactly the same time |
| **Negative delay** | A tie-in calculation results in a negative firing time |
| **Unassigned hole** | One or more holes have no delay assigned |

Warnings appear in the **Import Log** panel and as yellow indicators on the affected holes.

---

## Exporting Timing Data

Timing information is included in all export formats:
- **Kirra CSV** — includes a `Delay (ms)` and `Firing Time (ms)` column
- **Epiroc XML** — maps to the iRedes timing fields
- **PDF report** — includes a timing summary table

---

## Related Topics

- [Pattern Generation](pattern-generation.md) — generate your pattern first
- [Editing Holes](editing-holes.md) — select and modify holes
- [Epiroc XML Export](../exporting/epiroc-xml.md) — timing in the iRedes format
