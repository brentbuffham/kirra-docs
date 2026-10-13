# Kirra — Help & User Guide

Welcome to the official documentation for **Kirra**, a web-based blasting pattern design application developed by [Brent Buffham](https://blastingapps.com) for the mining, quarrying, and construction industries.

---

## I want to…

| I want to | Start here |
|---|---|
| Learn Kirra on a first blast, click by click | [Your First Blast](getting-started/first-blast.md) |
| Plan a shot from an empty workspace to a printed plan | [Plan a Shot, Start to Finish](tasks/plan-a-shot.md) |
| Get a survey pickup or design surface ready to design on | [Prepare a Surface for Design](tasks/prepare-a-surface.md) |
| Review a blast before it is signed off | [Check a Blast Before Firing](tasks/check-a-blast.md) |
| Bring in a design from other software or a drill rig | [Bring In a Design from Another System](tasks/bring-in-a-design.md) |
| Record what was drilled and loaded, and re-fit the charging | [After Drilling and Charging](tasks/after-drilling.md) |
| Back up a job, or move it to another computer | [Starting, Saving & Projects](working-in-kirra/starting-and-saving.md) |
| Find a file format | [Supported File Formats](reference/supported-formats.md) |

---

## Products

| Product | Description |
|---------|-------------|
| **[Kirra Design](https://kirra-design.com)** | The core blast design application — 2D/3D pattern layout, hole management, surface tools, charging, timing, 20+ import/export formats, blast analytics, and flyrock modelling |
| **[Kirra Scheduler](https://github.com/brentbuffham/KirraScheduler)** | A companion scheduling tool for planning and sequencing blast events with Gantt charts, equipment management, and 3D playback |

### Kirra App Presentation ISEE April 2026

<p align="left">
  <a href="ISEE-presentation/kirra-presentation.html">
    <img src="ISEE-presentation/icons/Kirra-Icon-App512x512.png" alt="Kirra App Presentation" width="128" height="128">
  </a>
</p>

---

## Release Notes

- [Release Notes](release-notes.md) — what changed in each version, newest first

---

## Kirra Design

### Getting Started
- [Overview — What Kirra Does](getting-started/overview.md)
- [Interface Tour — Menus, Toolbars, and Panels](getting-started/interface-tour.md)
- [Your First Blast — Step-by-Step Walkthrough](getting-started/first-blast.md)

### Working in Kirra
- [Starting, Saving & Projects](working-in-kirra/starting-and-saving.md) — the start-up prompts, how work is saved, KAP / KAT projects, Record Actuals
- [Workspaces](working-in-kirra/workspaces.md) — ten separate stores; open, name and clear them
- [Data Explorer](working-in-kirra/data-explorer.md) — the tree: show, hide, lock, select, and every right-click item
- [Display Options](working-in-kirra/display-options.md) — the 31 label buttons and their right-click settings
- [Selection & Snapping](working-in-kirra/selection-and-snapping.md) — H / K / V, shapes, modifier keys, snap targets
- [Views & Navigation](working-in-kirra/views-and-navigation.md) — 2D and 3D, mouse controls, toolbars
- [Settings](working-in-kirra/settings.md) — theme, language, and every Settings field with its default

### Task Guides
- [Plan a Shot, Start to Finish](tasks/plan-a-shot.md) — template, pattern, ground, charge, tie, check, print, export
- [Prepare a Surface for Design](tasks/prepare-a-surface.md) — import, repair, trim, contour and assign heights
- [Check a Blast Before Firing](tasks/check-a-blast.md) — positions, rows, timing, powder factor, vibration, flyrock
- [Bring In a Design from Another System](tasks/bring-in-a-design.md) — import, check, fix rows and numbering, send on
- [After Drilling and Charging](tasks/after-drilling.md) — record actuals, re-fit charging, hand back the as-built

### Blast Hole Design
- [Holes Toolbar](blast-design/holes-toolbar.md) — index of every button, with links
  - [Pattern in Polygon](blast-design/pattern-in-polygon.md) · [Holes Along Line](blast-design/holes-along-line.md) · [Holes Along Polyline](blast-design/holes-along-polyline.md) · [Add Hole](blast-design/adding-holes.md) · [Add Pattern](blast-design/add-pattern.md)
  - [Pattern Templates](blast-design/pattern-templates.md) · [Renumber Holes](blast-design/renumber-holes.md) · [Reorder Rows](blast-design/reorder-rows.md) · [Coincident Holes Check](blast-design/coincident-holes-check.md) · [Convert Holes to KAD Points](blast-design/holes-to-kad-points.md) · [Insert Holes](blast-design/insert-holes.md)
- [Pattern Generation](blast-design/pattern-generation.md) — choosing a pattern tool, elevations, hole naming
- [Editing Holes](blast-design/editing-holes.md)

### Charging
- [Charging Overview](charging/overview.md)
- [Deck Builder](charging/deck-builder.md)
- Buttons: [Product Manager](charging/product-manager.md) · [Reapply Charging](charging/reapply-charging.md) · [Remove Charges](charging/remove-charges.md)
- [Harness Wire Assignment](charging/harness-wire-assignment.md)
- [Products CSV Reference](charging/products-csv.md)
- [Deck Builder Formula Guide & Examples](charging/Deck%20Builder%20Formula%20Guide%20Examples.md) — variables, functions, PPV/SDoB examples

### Timing & Firing
- [Connect Toolbar](blast-design/connect-toolbar.md) — index of every control, with links
  - [Tie Connect](blast-design/tie-connect.md) · [Tie Connect Multi](blast-design/tie-connect-multi.md) · [Tie Connect Continuous](blast-design/tie-connect-continuous.md) · [Trunk Branch Connect](blast-design/trunk-branch-connect.md) · [Connectors Remove](blast-design/connectors-remove.md)
  - [Initiation Points](blast-design/initiation-points.md) · [Connector Settings](blast-design/connector-settings.md) · [Temporal Mesh](blast-design/temporal-mesh.md) · [Bake Delay](blast-design/bake-delay.md)
- [Timing Sequences](blast-design/timing-sequences.md)
- [Electronic Timing Constructs](blast-design/electronic-timing-constructs.md) — timing surfaces and **firing groups**
- [Timing Contours, First Movement and Relief](blast-design/timing-contours.md) — isochrones, what counts as one shot, colours and labels

### Surfaces
- [Surfaces Toolbar](surfaces/surfaces-toolbar.md) — every surface button and its extra methods
  - Build: [Triangulate](surfaces/triangulate.md) · [Extrude KAD to Solid](surfaces/extrude-kad-to-solid.md) · [Contour Surface](surfaces/contours.md)
  - Combine: [Which Boolean?](surfaces/boolean-csg.md) · [Solid Boolean](surfaces/solid-boolean.md) · [Trimesh Boolean](surfaces/trimesh-boolean.md) · [Surface Intersection](surfaces/surface-intersection.md)
  - Cut and repair: [Clip Surface](surfaces/clip-surface.md) · [Solid Horizon Slice](surfaces/solid-horizon-slice.md) · [Clean Mesh](surfaces/clean-mesh.md) · [Mesh Editing](surfaces/mesh-editing.md)
- [Importing Surfaces](surfaces/importing-surfaces.md)
- [Surface Gradients](surfaces/gradients.md)
- [Compare Surfaces](surfaces/compare-surfaces.md) — design vs survey deviation heat map

### Geology — Block Models
- [Importing Block Models](block-models/importing-block-models.md) — Datamine, Vulcan CSV and BMF, Micromine
- [The Load Block Model Dialog](block-models/load-block-model-dialog.md) — colour, bench slices, cut-offs and limits
- [Export a Section and Build Solids](block-models/export-and-solids.md) — CSV sections and one closed solid per class

### Blast Analytics
- [Analyse Toolbar](analysis/analyse-toolbar.md) — every button, and which tool answers which question
- [Voronoi Cells](analysis/voronoi.md) — powder factor, mass, timing and more, hole by hole
- [PPV Voronoi Modes (A – F)](analysis/ppv-voronoi-modes.md) — vibration per hole against your monitors
- [Monitor Points & Seed Library](analysis/monitor-points.md)
- [Site Law Regression](analysis/site-law-regression.md) — fit K and B from monitoring records
- [Blast Analysis Shader](analysis/overview.md) — vibration, damage and pressure models over the ground
- [PPV & Vibration Models](analysis/ppv-models.md) — every shader model's settings
- [Time Window Dialog — IDI, Spectrum, Synthesis, Forward Array, Detune, Constrain](analysis/time-window.md)
- [Blast Animation](analysis/blast-animation.md)
- [Blast Quality — attribute distributions and row-assignment checks](analysis/blast-quality.md)
- [Flyrock Modelling](analysis/flyrock.md)
- [Blast Statistics & Voronoi](analysis/statistics-voronoi.md)

### Printing
- [Print from Template (XLSX)](printing/xlsx-templates.md) — the PDF Print dialog, Kirra Inbuilt and your own templates
- [Print Formula Reference](printing/pdf-print.md) — cells, aggregation, maps, legends
- [Template Examples](printing/template-examples.md) — worked XLSX templates for advanced print formulas
- [Example Template Downloads](printing/examples/README.md) — the downloadable XLSX example files
- [Claude Print Template Skill — Install & Use](printing/print-skill.md) — optional AI helper for building templates; [download](printing/KirraDesign-USER-Print-Skill.zip)

### Importing Data
- [The Import Dialog](importing/import-dialog.md) — every format, drag and drop, and the checks on import
- [CSV Import](importing/csv-formats.md) — Kirra's hole CSVs, Custom CSV and Measured Data
- [Blast Design Formats](importing/blast-formats.md) — CBLAST, ShotPlus, Davey BPD, DetNet, Paradigm Terra
- [DXF Import](importing/dxf.md)
- [Surpac STR / DTM](importing/surpac-dtm-str.md) — holes, strings and surfaces
- [Other CAD Formats](importing/cad-formats.md) — Geometry CSV, DWG, Vulcan, Micromine, Deswik, 12d
- [3D Mesh (OBJ / GLTF / GLB)](importing/3d-mesh.md)
- [Surfaces and Point Clouds](importing/surfaces-and-point-clouds.md) — GeoTIFF, point clouds, LAS, Vulcan .00t, Datamine
- [Transform (Reproject) Import](importing/transform-import.md)
- [Other Formats](importing/other-formats.md) — Kirra files, telemetry, Epiroc, Wenco, KML, Shapefile, legacy

### Exporting Data
- [CSV Export](exporting/csv-export.md)
- [DXF Export](exporting/dxf-export.md)
- [GLTF / GLB Export](exporting/gltf-export.md)
- [GeoTIFF Export](exporting/geotiff-export.md)
- [Other Formats (IREDES, AQM, KML)](exporting/other-formats.md)

### KAD Drawing Tools
- [KAD Toolbar](kad/kad-toolbar.md) — every drawing button and its extra methods
- [Drawing Basics](kad/drawing-basics.md) — finish, undo, layers, height and snapping
- [Points, Lines, Polygons and Circles](kad/points-lines-polygons.md) — including placement modes
- [KAD Text](kad/text.md) · [Roads and Ramps](kad/roads-and-ramps.md)
- [Modify Toolbar](kad/modify-tools.md) — every editing button and its extra methods
  - Holes: [Move](kad/move.md) · [Hole Bearing](kad/hole-bearing.md) · [Assign Surface and Assign Grade](kad/assign-surface-grade.md)
  - Shapes: [Transform](kad/transform.md) · [Offset](kad/offset.md) · [Radii](kad/radii.md) · [Router-Chamfer](kad/router-chamfer.md) · [Reorder Points](kad/reorder-points.md)
  - Cut and combine: [Clip-KAD](kad/clip-kad.md) · [KAD Boolean](kad/boolean.md) · [Join and Split](kad/join-split.md)
  - Lines: [Extend Line](kad/extend-line.md) · [Grade Line](kad/grade-line.md) · [Simplify RDP](kad/simplify.md) · [Snap Objects to Surface](kad/snap-to-surface.md)
- [Drawing Points, Lines, and Polygons](kad/drawing-tools.md) — entity types, properties and statistics
- [Extrude, Boolean, and Section Plane](kad/advanced-tools.md)
- [Layer Organisation](kad/layer-organisation.md) — where generated output lands and how it is named

### Formula Engine
- [Formula Engine Overview](formula-help/formula-engine.md) — three `fx:` engines (charging, print, blast group); when to use which
- [Blast Group Formulas](formula-help/blast-group-formulas.md) — Assign Group predicates (boolean)
- [Claude Formula Skill — Install & Use](formula-help/formula-skill.md) — optional AI helper; [download zip](formula-help/kirra-formula.zip)
- Charging formulas: [Deck Builder Formula Guide](charging/Deck%20Builder%20Formula%20Guide%20Examples.md) (under Charging) · Print formulas: [Print Formula Reference](printing/pdf-print.md) (under Printing)

### Reference
- [Select Toolbar](reference/select-toolbar.md) — button-by-button reference
- [Supported File Formats](reference/supported-formats.md) — full import/export matrix
- [Hole Properties](reference/hole-properties.md)
- [Coordinate System](reference/coordinate-system.md)
- [3D View & Orbit Focus](reference/3d-tools.md)
- [Section Views](reference/section-views.md) — Section Plane, Hole Section View and the Deck Builder section
- [Keyboard Shortcuts & Mouse Controls](reference/keyboard-shortcuts.md)
- [Blasting Glossary — Kirra in Every Language](reference/blasting-glossary.md) — the blasting terms in all eight language editions
- [JavaScript pitfalls — zero vs falsy & import zoom](reference/javascript-pitfalls.md) *(contributors)*
- [FAQ](reference/faq.md)

---

## Kirra Scheduler

- [Quick Start](scheduler/quick-start.md)
- [Gantt Chart](scheduler/gantt-chart.md)
- [Blast Overview](scheduler/blast-overview.md)
- [Pattern Library](scheduler/pattern-library.md)
- [Equipment Management](scheduler/equipment.md)
- [Drill Blocks](scheduler/drill-blocks.md)
- [Dependencies](scheduler/dependencies.md)
- [Pattern Preparation](scheduler/pattern-preparation.md)
- [Explosive Forecast](scheduler/explosive-forecast.md)
- [Conformance](scheduler/conformance.md)
- [3D Playback](scheduler/3d-playback.md)
- [Import & Export](scheduler/import-export.md)
- [Theming](scheduler/theming.md)

---

## Documentation freshness

These guides were **checked against the Kirra Design source tree** at:

| Field | Value |
|--------|--------|
| **Kirra app version** | **1.1.32.358** |
| **Git commit** | `d723d9f2` |
| **Commit date** | 2026-10-13 (author timezone +0800) |
| **Coverage** | **52 of 52** import/export formats · **83 of 83** toolbar tools |

The coverage figures come from an automated check that builds its checklist **from the
source itself** — every registered file format and every toolbar button — and then looks
for each one by name across these pages.

Read it for what it is: a **presence** check. It tells you whether a feature is
documented *at all*. It does not promise that a page which exists has kept up with the
latest behaviour.

Use this block to judge whether the docs may be ahead of or behind your installed build. The version you are running is shown in the title of the welcome dialog that opens when Kirra starts (for example **Kirra - v1.1.32.358**).

---

## About

- [About Kirra & Licensing](about.md)

---

> **Kirra Licence v1.0** — Kirra Design is free for mining, quarrying, construction, and research use. Commercial software integration requires written permission from Brent Buffham. See [About](about.md) for details.
