# 3D Playback

The **3D Playback** tab provides a 3D visualisation of pit shell surfaces, blast boundaries, drill holes, and equipment. It supports day-by-day schedule animation showing which blasts are being drilled, loaded, or fired on any given date.

> *Screenshot coming soon*

---

## Getting Spatial Data

The 3D view requires surface geometry to be imported. There are three ways to load spatial data:

### 1. Kirra Application Project (.kap)

The primary workflow. Go to the **IMPORT / DXF** tab and drop a `.kap` file exported from the Kirra App. The file contains:

- **Surfaces** -- Triangulated pit shells with full vertex geometry
- **Blast Holes** -- Grouped by entity name, matched to scheduled blasts
- **Drawings** -- Polygon boundaries matched to blasts
- **Charge Configs** -- Imported into the scheduler's charge configuration library

### 2. Kirra Scheduler Project (.kgp)

If surfaces were previously imported and saved as part of a `.kgp` project file, they are restored automatically when the project is loaded.

### 3. Kirra Project (.kirra / .json)

Kirra project files also carry surface and solid geometry. The importer preserves the full geometry for 3D rendering.

See the [Import / Export](import-export.md) page for details on each file format.

---

## Scene Layout

The 3D Playback view is divided into a sidebar with controls and the main 3D viewport.

### Sidebar Controls

| Section | Controls |
|---|---|
| **Surfaces** | Per-surface visibility checkbox and opacity slider (0 - 100%) |
| **Blast Layers** | Toggle visibility of blast boundaries, drill holes, and blast labels |
| **Equipment** | Toggle visibility of drill/MPU models and equipment labels |
| **Display** | Wireframe overlay toggle, ground grid toggle |

### Camera Presets

Three buttons in the top-right corner of the viewport:

| Button | View |
|---|---|
| **Top** | Plan view looking straight down |
| **Iso** | Isometric view at 45 degrees |
| **3D** | Perspective view from a lower angle |

### Timeline Controls

The bottom bar provides playback controls:

| Control | Action |
|---|---|
| **\|<** / **>\|** | Jump to first / last day |
| **<** / **>** | Step one day backward / forward |
| **Play / Pause** | Animate through the schedule day by day |
| **Scrubber** | Drag to jump to any day |
| **Speed** | 1x, 2x, 5x, 10x playback speed |

> *Screenshot coming soon*

---

## Coordinate System

The 3D scene uses a **Z-up** coordinate system matching mining conventions:

- **X** = Easting (metres)
- **Y** = Northing (metres)
- **Z** = Elevation (metres)

Mining coordinates are typically large UTM values (6-7 digits). To maintain precision, the scene automatically subtracts a local origin (the centroid of all spatial data) from all coordinates before rendering. This is the same approach used by the Kirra App's 2D canvas.

---

## Surface Rendering

Surfaces are rendered as 3D meshes with vertex colours based on elevation. The colour gradient maps from the lowest to highest elevation:

| Elevation | Colour |
|---|---|
| Low (0%) | Blue |
| 33% | Green |
| 66% | Yellow |
| High (100%) | Red |

Each surface can be independently shown or hidden, and its opacity adjusted using the sidebar slider.

---

## Blast Geometry

Each blast with polygon data is rendered as a coloured outline with a semi-transparent fill. The colour changes based on the blast's phase for the current day in the timeline:

| Phase | Colour | Meaning |
|---|---|---|
| Drilling | Blue | Blast is currently being drilled |
| Loading | Amber/gold | Blast is being loaded with explosive |
| Blast Day | Red | Blast fires today |
| Completed | Grey | Blast has already been fired |
| Scheduled | Light grey | Blast is scheduled but not yet started |

---

## Equipment Models

Placeholder 3D models are displayed for drill rigs and MPUs:

- **Drill** -- Tracked base, cab, mast, and drill string
- **MPU** -- Chassis, cab, emulsion tank, and wheels

Equipment is placed at the centroid of the blast they are assigned to for the current day. You can toggle equipment visibility and labels using the sidebar controls.

---

## Performance Notes

- Large `.kap` files (80 MB+ of surface data) may take 30-60 seconds to import and parse in the browser. This is expected for production mine site data.
- The 3D scene is only created when you first click the 3D Playback tab, avoiding unnecessary overhead when not in use.
- The render loop only runs while the Playback tab is visible.

---

## Related Topics

- [Quick Start](quick-start.md) -- Step 8 covers viewing in 3D
- [Import / Export](import-export.md) -- How to import spatial data for 3D
- [Gantt Chart](gantt-chart.md) -- The schedule that drives the 3D timeline
- [Theming](theming.md) -- Theme settings also apply to the 3D interface
