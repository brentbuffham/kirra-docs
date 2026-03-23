# Import / Export

The **IMPORT / DXF** tab provides four import workflows. Export is available via the **Export** button in the header.

> *Screenshot coming soon*

---

## Import Workflows

### 1. DXF Blast Hole Import

Drop a `.dxf` file containing blast hole collar points. The parser extracts point entities and groups them by layer name to create blast records.

**Supported data:** 3D point entities from AutoCAD DXF files.

**Layer naming convention:**

```
BLASTNAME-HOLETYPE{[Burden][Spacing][BenchHt][Subdrill][Diameter]}
```

**Example:** `S4_226_413-PRODUCTION{[4.5][5.2][12][1.5][0.311]}`

---

### 2. Kirra Charge Config Import

Drop a `.json` file exported from the Kirra Blast Design application containing charge configurations and blast settings.

---

### 3. Kirra Scheduler Project Import (.kgp / .kirra / .json)

Drop a project file to restore or import blast data:

| Extension | Behaviour |
|---|---|
| `.kgp` | **Full restore** -- Replaces all scheduler state (blasts, equipment, patterns, dependencies, surfaces, solids). This is the native Kirra Scheduler project format. |
| `.kirra` / `.json` | **Kirra App import** -- Extracts blast holes, polygon boundaries, surfaces (full geometry), solids (full geometry), and charge configurations. |

#### Blast Hole Grouping (from .kirra / .json)

Holes are grouped by entity name. For each group, the importer:

- Calculates total drill metres from each hole's calculated length
- Classifies holes by diameter:
  - D65: diameter <= 165 mm
  - PV: diameter > 165 mm
- Calculates the percentage split between D65 and PV metres
- Summarises hole types with counts, diameters, and drill metres

#### Surface Geometry

Kirra project imports preserve the full surface and solid geometry for 3D rendering in the [3D Playback](3d-playback.md) tab.

After parsing, a preview dialog shows the imported blasts and lets you confirm before adding them to the schedule.

---

### 4. Kirra Application Project (.kap)

Drop a `.kap` file exported from the Kirra App. KAP is the Kirra App's native project archive format -- a ZIP file containing structured data.

#### What's Inside a KAP File

A `.kap` file is a ZIP archive containing:

| Content | Description |
|---|---|
| Manifest | Version, project name, content counts |
| Holes | Blast holes (full data model) |
| Drawings | Entity pairs for polygon boundaries |
| Surfaces | Triangulated surfaces with full vertex geometry |
| Products | Explosive products |
| Charging | Per-hole charging data |
| Configs | Charge configurations |
| Layers | Drawing and surface layer organisation |
| Textures | OBJ texture files (if any) |
| Images | GeoTIFF imagery files (if any) |

#### What Gets Imported

| Data | Usage in Scheduler |
|---|---|
| **Surfaces** | 3D pit shell rendering in [3D Playback](3d-playback.md) |
| **Blast Holes** | Grouped by entity name, matched to existing scheduled blasts |
| **Drawings** (polygons) | Blast boundary outlines for the 3D view |
| **Charge Configs** | Merged into the scheduler's configuration library |
| Products, charging, layers | Not imported (not needed for scheduling) |

#### Performance

KAP files can be large. A typical mine-site project may have 80 MB+ of uncompressed surface data (compressed to around 12 MB in the ZIP). Parsing takes 30-60 seconds in the browser due to decompression and processing.

---

## Export

The **Export** button in the header opens a dropdown menu with the following options:

### Kirra Gantt Project (.kgp)

Saves the complete scheduler state as a single JSON file:

- All blast records with dates, assignments, drill blocks, and drill rates
- Equipment fleet (drills, MPUs, ancillary, personnel)
- Pattern library
- Dependency settings and application configuration
- Maintenance windows and personnel roster
- Conformance data (targets and actuals)
- Product library
- Surface and solid geometry (for 3D playback round-trip)

The `.kgp` file can be re-imported to fully restore the scheduler to its saved state.

### Schedule Spreadsheet (.csv)

A spreadsheet-friendly summary of all blasts with columns for: name, status, mode, surface area, volume, explosive mass, drill meters, hole count, hole types, dates, assignments, load rate, dependency settings, predecessor, and drill/load progress.

### Pattern Library Template (.csv)

A blank CSV template with example rows for defining site-specific blast patterns. See [Pattern Library](pattern-library.md) for details on the import/export workflow.

### Pattern Library (.csv)

Exports the current pattern library as a CSV file.

### Equipment Library Template (.csv)

A blank CSV template for defining drill rigs, MPUs, ancillary equipment, and personnel.

### Equipment Library (.csv)

Exports the current equipment fleet as a CSV file.

### Calendar Export (iCal / CSV)

From the Blast Calendar sub-tab of the [Blast Overview](blast-overview.md), a calendar export dialog offers two modes:

- **Per-phase** -- One event per phase per blast (Prep, Drill, Load, Blast)
- **Per-blast** -- One event per blast spanning its full date range

And two formats:

- **iCal (.ics)** -- Standard calendar format for Outlook, Google Calendar, Apple Calendar
- **Calendar CSV (.csv)** -- Phase-by-phase or per-blast schedule for spreadsheet apps

---

## File Formats Summary

| Extension | Format | Direction | Description |
|---|---|---|---|
| `.dxf` | AutoCAD DXF | Import | Blast hole collar points grouped by layer |
| `.json` | Kirra config | Import | Charge configurations from Kirra App |
| `.json` / `.kirra` | Kirra project | Import | Full project with holes, surfaces, solids, polygons |
| `.kap` | Kirra Application Project | Import | ZIP archive with surfaces, holes, drawings, configs |
| `.kgp` | Kirra Gantt Project | Import / Export | Full scheduler state (round-trip) |
| `.csv` | Schedule spreadsheet | Export | Blast summary table with all metrics |
| `.csv` | Pattern template | Export | Blank pattern template for CSV import |
| `.csv` | Pattern library | Export | Current pattern definitions |
| `.csv` | Equipment template | Export | Blank equipment template for CSV import |
| `.csv` | Equipment library | Export | Current fleet definitions |
| `.csv` | Calendar CSV | Export | Schedule for calendar / spreadsheet apps |
| `.ics` | iCal | Export | Calendar events for Outlook / Google Calendar |

---

## Related Topics

- [Quick Start](quick-start.md) -- Steps 7 and 9 cover importing and exporting
- [3D Playback](3d-playback.md) -- Uses spatial data from KAP and Kirra project imports
- [Equipment](equipment.md) -- Equipment definitions are included in KGP exports
- [Dependencies](dependencies.md) -- Dependency settings are preserved in KGP exports
- [Pattern Library](pattern-library.md) -- Pattern CSV import/export
- [Blast Overview](blast-overview.md) -- Calendar export from Blast Calendar sub-tab
- [Conformance](conformance.md) -- Actuals CSV import and API integration
