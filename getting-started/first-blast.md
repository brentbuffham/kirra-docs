# Your First Blast — Step-by-Step Walkthrough

This guide walks you through creating a complete blast design from scratch — from opening Kirra for the first time to exporting a production-ready file.

---

## Before You Start

Make sure you have:
- Kirra installed and licensed (see [Overview](overview.md))
- Hole survey data (CSV, DXF, or other supported format) **or** bench coordinates to generate a pattern manually

---

## Step 1 — Open Kirra

Launch Kirra from the Start Menu or desktop shortcut. You'll be greeted by the main workspace:

- **Left panel** — toolbox and pattern generation controls
- **Central canvas** — the blast design viewport
- **Right panel** — hole properties and selection details
- **Bottom bar** — coordinates, status, and zoom level

See [Interface Tour](interface-tour.md) for a full description of every panel.

---

## Step 2 — Set Up Your Coordinate System

Before placing any holes, set the coordinate reference for your project:

1. Go to **Project → Settings → Coordinate System**
2. Enter the easting/northing origin (if working in local mine grid, leave at `0, 0`)
3. Confirm the Z datum (metres above sea level or bench elevation)
4. Click **Apply**

---

## Step 3 — Import or Generate Your Pattern

### Option A — Import Existing Drill Data
1. Click **File → Import** (or press `Ctrl+I`)
2. Select the file type: CSV, DXF, Surpac STR, or Epiroc iRedes
3. Browse to your file and click **Open**
4. Map columns to Kirra fields in the import wizard
5. Click **Finish** — holes appear on the canvas

See the [Importing](../importing/csv-formats.md) section for format-specific guidance.

### Option B — Generate a New Pattern
1. Select **Pattern → Generate** from the toolbar or menu
2. Choose a pattern type: **Rectangular**, **Staggered**, **Polygon**, or **Along Line**
3. Enter your burden, spacing, and hole count (or draw a boundary)
4. Click **Generate** — holes are placed on the canvas

See [Pattern Generation](../blast-design/pattern-generation.md) for full details.

---

## Step 4 — Review and Edit Hole Properties

1. Click any hole on the canvas to select it (it highlights in the selection colour)
2. The **right panel** shows all properties: depth, diameter, bearing, inclination, subdrill, etc.
3. Edit values directly in the panel or double-click the hole to open the **Hole Editor**
4. To edit multiple holes, drag a selection box or use `Ctrl+Click`, then edit from the panel (bulk-edit applies to all selected holes)

See [Editing Holes](../blast-design/editing-holes.md) for selection and bulk-edit options.

---

## Step 5 — Assign Timing

1. Open the **Timing** panel (menu: **View → Timing Panel** or shortcut `T`)
2. Select an initiation sequence method: **Manual**, **Along Row**, or **Echelon**
3. Enter your inter-hole and inter-row delay values (milliseconds)
4. Click **Apply Timing** — each hole receives a calculated firing time
5. Use the **Timing Diagram** view to visually verify the sequence

See [Timing Sequences](../blast-design/timing-sequences.md) for advanced tie-in and connector options.

---

## Step 6 — Build Your Charge Deck (Optional)

1. Open the **Charging** panel (menu: **View → Charging Panel** or shortcut `C`)
2. Select one or more holes
3. Click **Apply Charge Template** and choose a pre-built deck template, or build manually using the Deck Builder
4. Review the explosive mass, stemming length, and VOD per hole

See [Charging Overview](../charging/overview.md) for the full charging workflow.

---

## Step 7 — Run Analysis (Optional)

- **Statistics** — open **Analysis → Blast Statistics** to see total holes, metres, explosive mass, and timing spread
- **Voronoi** — open **Analysis → Voronoi** to visualise rock volume per hole
- **PPV** — open **Analysis → PPV Analytics** to shade the pattern by predicted peak particle velocity

---

## Step 8 — Export Your Blast

1. Click **File → Export** (or press `Ctrl+E`)
2. Select the export format: Kirra CSV, DXF, Epiroc XML, MineStar AQM, or PDF
3. Configure any format-specific options in the export dialog
4. Choose a save location and click **Export**

See the [Exporting](../exporting/kirra-csv.md) section for format-specific guidance.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Open Kirra |
| 2 | Set coordinate system |
| 3 | Import drill data or generate a pattern |
| 4 | Review and edit hole properties |
| 5 | Assign timing sequences |
| 6 | Build charge decks *(optional)* |
| 7 | Run analysis *(optional)* |
| 8 | Export the blast package |

---

*Next: [Interface Tour →](interface-tour.md)*
