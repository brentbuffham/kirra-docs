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

### Kirra Gantt Project (.kgp)

Click **Export** in the header and select **Kirra Gantt Project**. This saves the complete scheduler state as a single file:

- All blast records with dates, assignments, drill blocks, and drill rates
- Equipment fleet (drills, MPUs, ancillary, personnel)
- Pattern library
- Dependency settings and application configuration
- Maintenance windows and personnel roster
- Surface and solid geometry (for 3D playback round-trip)

The `.kgp` file can be re-imported to fully restore the scheduler to its saved state.

### CSV Export

Click **Export** and select **CSV** to download a spreadsheet-friendly summary of all blasts with key metrics (name, dates, metres, volume, explosive mass, assignments).

---

## File Formats Summary

| Extension | Format | Direction | Description |
|---|---|---|---|
| `.dxf` | AutoCAD DXF | Import | Blast hole collar points grouped by layer |
| `.json` | Kirra config | Import | Charge configurations from Kirra App |
| `.json` / `.kirra` | Kirra project | Import | Full project with holes, surfaces, solids, polygons |
| `.kap` | Kirra Application Project | Import | ZIP archive with surfaces, holes, drawings, configs |
| `.kgp` | Kirra Gantt Project | Import / Export | Full scheduler state (round-trip) |
| `.csv` | Spreadsheet | Export | Blast summary table |

---

## Related Topics

- [Quick Start](quick-start.md) -- Steps 7 and 9 cover importing and exporting
- [3D Playback](3d-playback.md) -- Uses spatial data from KAP and Kirra project imports
- [Equipment](equipment.md) -- Equipment definitions are included in KGP exports
- [Dependencies](dependencies.md) -- Dependency settings are preserved in KGP exports
