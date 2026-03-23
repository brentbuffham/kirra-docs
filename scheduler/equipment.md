# Equipment

The Equipment tab manages your drill rigs, Mobile Processing Units (MPUs), ancillary fleet, and personnel. Equipment assignments drive scheduling constraints and capacity calculations throughout Kirra Scheduler.

> *Screenshot coming soon*

---

## Overview

The Equipment tab displays four sections, each with a stat card at the top showing availability counts:

| Stat Card | Shows |
|---|---|
| Drill Fleet | Available / total drill rigs |
| MPU Fleet | Available / total MPUs |
| Ancillary Fleet | Available / total ancillary equipment |
| Personnel | Total crew members |

Each section has an **Add** button to create new entries, and each row has **Edit** and **Delete** actions.

---

## Drill Rigs

Drill rigs are the core equipment for scheduling. Each rig has the following properties:

| Property | Description |
|---|---|
| ID | Unique identifier (e.g., "PV271-01") |
| Name | Display name (e.g., "PV271 #1") |
| Type | Rig type (e.g., "D65", "PV271") |
| Min / Max Diameter | Hole diameter capability range in mm |
| Penetration Rate | Drilling speed in metres per hour (m/hr) |
| Status | Current availability status |
| Maintenance | Scheduled maintenance windows |

### Example Default Fleet

| ID | Type | Diameter Range | Pen Rate |
|---|---|---|---|
| D65-01 | D65 | 127 - 229 mm | 19 m/hr |
| D65-02 | D65 | 127 - 229 mm | 19 m/hr |
| PV271-01 | PV271 | 200 - 311 mm | 20 m/hr |
| PV271-02 | PV271 | 200 - 311 mm | 20 m/hr |
| PV271-03 | PV271 | 200 - 311 mm | 20 m/hr |
| PV271-04 | PV271 | 200 - 311 mm | 20 m/hr |

### Maintenance Windows

Maintenance periods block a drill from being scheduled. When a blast's drilling period overlaps with a drill's maintenance window:

- A warning icon appears on the Gantt row
- The affected date cells are shaded with a red tint
- The tooltip shows the maintenance details (e.g., "5000hr Service", "Track replacement")

Maintenance is defined as date ranges with a reason description.

---

## Mobile Processing Units (MPUs)

MPUs are emulsion loading trucks assigned to blasts for the loading phase. **Multiple MPUs can be assigned to a single blast** -- the scheduler sums their daily rates to calculate loading duration.

For example, 2 MPUs at 100,000 kg/day each = 200,000 kg/day combined, halving the loading time. Some mines run 5 or more MPUs on a single bench.

| Property | Description |
|---|---|
| ID | Unique identifier (e.g., "MPU-01") |
| Name | Display name (e.g., "MPU #1") |
| Type | Equipment type (e.g., "Emulsion") |
| Capacity | Truck capacity in kg |
| Loading Rate | Daily loading rate in kg/day |
| Maintenance | Scheduled maintenance windows |

MPUs are assigned via the blast form's multi-select dropdown when adding or editing a blast.

---

## Ancillary Equipment

Ancillary equipment is used during the **Pattern Preparation** phase before drilling begins. These machines prepare the bench floor so drill rigs can safely access the pattern.

| Property | Description |
|---|---|
| ID | Unique identifier (e.g., "DZ-01", "EX-01") |
| Name | Display name (e.g., "D9 Dozer #1") |
| Type | Equipment type: Dozer, Grader, Loader, Excavator, or Roller |
| Area Prep Rate | Preparation rate in square metres per day (m2/day) |
| Status | "available" or "demobilised" |
| Maintenance | Scheduled maintenance windows |

### Example Default Ancillary Fleet

| ID | Type | Rate (m2/day) |
|---|---|---|
| DZ-01 | Dozer | 8,000 |
| DZ-02 | Dozer | 8,000 |
| GR-01 | Grader | 12,000 |
| EX-01 | Excavator | 5,000 |
| LD-01 | Loader | 6,000 |
| RL-01 | Roller | 15,000 |

### Typical Prep Sequence

The floor preparation workflow on a mining bench typically follows this order:

| Step | Equipment | Task |
|---|---|---|
| 1 | **Excavator** | Pull the walls and remove overhanging material |
| 2 | **Loader** | Load out batter trims and debris |
| 3 | **Dozer** | Rough-prep the floor for drilling access |
| 4 | **Grader** | Grade the floor to a smooth surface |
| 5 | **Roller** | Compact the floor for final preparation |

Any or none of these can be assigned to a blast's prep phase depending on site conditions. See [Pattern Preparation](pattern-preparation.md) for full details.

Ancillary equipment is assigned via the blast form when adding or editing a blast.

---

## Personnel

Personnel are tracked with role and certification information:

| Property | Description |
|---|---|
| ID | Personnel ID |
| Name | Full name |
| Role | Job title (e.g., Drill Operator, Shot Firer, Blast Engineer, Loading Operator, Drill Offsider) |
| Certified Types | List of drill types they are certified to operate |

---

## CSV Import / Export

All equipment types support CSV import and export for sharing fleet definitions between projects and team members.

### Export Equipment Library

Click **Export Library** from the Equipment tab to download the current fleet (drills, MPUs, ancillary, personnel) as a CSV file. This captures all properties including maintenance windows.

### Export Equipment Template

Click **Export Template** to download a blank CSV with column headers and example rows. Use this to prepare equipment data in a spreadsheet before importing.

### Import Equipment

Click **Import CSV** and select a file to load equipment definitions. The importer:

1. Detects equipment type from the CSV structure (drill, MPU, ancillary, personnel)
2. Validates required fields
3. Replaces existing fleet of that type with the imported data
4. Reports success and import counts

---

## Crew Roles

Personnel are categorised by role, which determines their assignment options:

| Role | Description | Assignment |
|---|---|---|
| **Drill Operator** | Operates drill rigs | Assigned to drilling phase |
| **Drill Offsider** | Assists drill operators | Assigned to drilling phase |
| **Shot Firer** | Licensed to initiate blasts | Required for blasting phase |
| **Blast Engineer** | Designs blast patterns | Assigned to loading/blasting |
| **Loading Operator** | Operates MPU/loading trucks | Assigned to loading phase |
| **Field Tech** | General field support | Assigned to any phase |

Crew members with drill certifications can only be assigned to rigs matching their certified types. The sidebar palette on the Gantt chart includes crew chips that can be dragged onto phase rows for assignment.

---

## Related Topics

- [Quick Start](quick-start.md) -- Step 2 covers initial equipment setup
- [Gantt Chart](gantt-chart.md) -- Where equipment assignments appear on the schedule
- [Pattern Preparation](pattern-preparation.md) -- Assigning ancillary equipment for floor prep
- [Dependencies](dependencies.md) -- How drill rates and MPU rates affect schedule calculations
- [Drill Blocks](drill-blocks.md) -- Assigning different rigs to different blocks of a blast
- [Import & Export](import-export.md) -- Equipment CSV templates in the export menu
