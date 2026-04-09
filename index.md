# Kirra — Help & User Guide

Welcome to the official documentation for **Kirra**, a web-based blasting pattern design application developed by [Brent Buffham](https://blastingapps.com) for the mining, quarrying, and construction industries.

---

## Documentation freshness

These guides were **reviewed against the Kirra Design source tree** at:

| Field | Value |
|--------|--------|
| **Kirra app version** | **1.0.58** (`package.json` / `package-lock.json`) |
| **Git commit** | `4f4339e20fe33c9be5c3e8283b28ec2850c2322f` (short: `4f4339e2`) |
| **Commit date** | 2026-04-09 (author timezone +0800) |

Use this block to judge whether the docs may be ahead of or behind your installed build. For the live app version in use, check **Help → About** (or your deployment’s `package.json`).

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

## Kirra Design

### Getting Started
- [Overview — What Kirra Does](getting-started/overview.md)
- [Interface Tour — Menus, Toolbars, and Panels](getting-started/interface-tour.md)
- [Your First Blast — Step-by-Step Walkthrough](getting-started/first-blast.md)

### Blast Hole Design
- [Adding Holes](blast-design/adding-holes.md)
- [Editing Holes](blast-design/editing-holes.md)
- [Pattern Generation](blast-design/pattern-generation.md)
- [Pattern Templates](blast-design/pattern-templates.md)
- [Timing Sequences](blast-design/timing-sequences.md)
- [Electronic Timing Constructs](blast-design/electronic-timing-constructs.md)

### Surfaces
- [Importing Surfaces](surfaces/importing-surfaces.md)
- [Surface Gradients](surfaces/gradients.md)
- [Surface Boolean & CSG](surfaces/boolean-csg.md)
- [Mesh Editing & Clean Mesh](surfaces/mesh-editing.md)
- [Surface Contours](surfaces/contours.md)

### Importing Data
- [CSV Formats](importing/csv-formats.md)
- [DXF Import](importing/dxf.md)
- [Surpac DTM / STR](importing/surpac-dtm-str.md)
- [OBJ / PLY / GLTF / GLB](importing/3d-mesh.md)
- [Other Formats (IREDES, KML, LAS, Shapefile)](importing/other-formats.md)

### Exporting Data
- [CSV Export](exporting/csv-export.md)
- [DXF Export](exporting/dxf-export.md)
- [GLTF / GLB Export](exporting/gltf-export.md)
- [GeoTIFF Export](exporting/geotiff-export.md)
- [Other Formats (IREDES, AQM, KML)](exporting/other-formats.md)

### Printing
- [Print to PDF](printing/pdf-print.md)
- [Print from Template (XLSX)](printing/xlsx-templates.md)

### Charging
- [Charging Overview](charging/overview.md)
- [Deck Builder](charging/deck-builder.md)
- [Harness Wire Assignment](charging/harness-wire-assignment.md)
- [Products CSV Reference](charging/products-csv.md)

### Blast Analytics
- [Analytics Overview](analysis/overview.md)
- [PPV & Vibration Models](analysis/ppv-models.md)
- [Flyrock Modelling](analysis/flyrock.md)
- [Blast Statistics & Voronoi](analysis/statistics-voronoi.md)

### KAD Drawing Tools
- [Drawing Points, Lines, and Polygons](kad/drawing-tools.md)
- [Extrude, Boolean, and Section Plane](kad/advanced-tools.md)
- [Modify Toolbar](kad/modify-tools.md)

### Reference
- [Hole Properties](reference/hole-properties.md)
- [Coordinate System](reference/coordinate-system.md)
- [3D View & Orbit Focus](reference/3d-tools.md)
- [Keyboard Shortcuts & Mouse Controls](reference/keyboard-shortcuts.md)
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

## About

- [About Kirra & Licensing](about.md)

---

> **Kirra Licence v1.0** — Kirra Design is free for mining, quarrying, construction, and research use. Commercial software integration requires written permission from Brent Buffham. See [About](about.md) for details.
