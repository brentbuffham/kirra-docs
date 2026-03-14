# Gantt Chart

The Gantt chart is the primary scheduling view in Kirra Scheduler. It displays all blasts across four collapsible sections: **PATTERN PREP**, **DRILLING**, **LOADING**, and **BLASTING**.

> *Screenshot coming soon*

---

## Layout

The chart is divided into a fixed left panel and a scrollable timeline on the right.

### Left Panel (Sticky Columns)

| Column | Description |
|---|---|
| **Blast** | Blast name with an inline pencil edit icon. For split blasts, block sub-rows show a `[A]` / `[B]` label prefix. |
| **Info** | Contextual data that changes depending on the section (see below). |

### Info Column by Section

| Section | Info Displayed |
|---|---|
| PATTERN PREP | Assigned ancillary equipment IDs, prep duration (days) |
| DRILLING | Assigned drill IDs, total meters, dependency/maintenance warning icons |
| LOADING | Assigned MPU IDs, explosive mass (kg), dependency warning icons |
| BLASTING | Volume (bcm) |

### Timeline (Date Columns)

One column per calendar day. Weekend columns are dimmed for easy identification.

---

## Bar Types

| Bar | Section | Colour | Description |
|---|---|---|---|
| Prep | PATTERN PREP | Teal | Spans from prep start to prep start + prep days |
| Drill | DRILLING | Blue | Spans from drill start to drill start + drill days |
| Load | LOADING | Gold/amber | Spans from load start to load start + load days |
| Milestone | BLASTING | Red diamond | Single-day blast event |
| Overlap | DRILLING | Blue/gold hatched | When loading starts before drilling finishes |

---

## Visual Indicators

- **Pattern Prep bars** -- Teal bars showing the floor preparation phase. Only appear for blasts that have prep data set.
- **Dependency connectors** -- Arrows from drill-end to load-start and load-end to blast-date. Green when dependencies are met, red when breached.
- **Warning triangle** -- Shown in the Info column when a dependency is breached or a drill is in maintenance during the scheduled period.
- **Start time label** -- On the first day of a drill bar, shows the scheduled start time (e.g., "06:00").
- **Dependency threshold markers** -- Small vertical lines on drill bars showing the percentage completion point where loading or blasting can begin.
- **Maintenance shading** -- Light red background on date cells where an assigned drill is in scheduled maintenance.

> *Screenshot coming soon*

---

## Interactions

### Drag to Reschedule

Click and drag any bar to shift its dates:

- **Pattern Prep bars** shift the prep start date. Only available for blasts that have prep data set.
- **Drilling bars** shift the drill start date. If the blast has blocks, all blocks shift together. Loading and blasting dates cascade automatically via the dependency engine.
- **Block bars** shift only that block's start date independently.
- **Loading bars** shift the load start date as a manual override. A warning appears if the new date breaches the drill completion threshold.
- **Blasting milestone** shifts the blast date as a manual override with breach warnings.

### Resize to Adjust Duration

Drag the left or right edge of any bar to adjust its start date or duration:

- **Pattern Prep bars** -- Resize to adjust the start date (left edge) or duration in days (right edge).
- **Drilling bars** -- Resize to adjust the start date or duration.

### Collapsible Sections

Click any section header (PATTERN PREP, DRILLING, LOADING, BLASTING) to collapse or expand its rows. The collapse state persists within the session. This is useful when you only need to focus on one phase at a time.

### Horizontal Scrolling

Hold **Shift + Scroll** or **Alt + Scroll** to scroll the Gantt timeline left and right.

### Context Menu (Right-Click)

Right-click any blast name to access:

- **Edit Blast** -- Open the blast editing form
- **Set Drilling / Loading / Fired status** -- Mark phases as complete
- **Split Drill** -- Creates two blocks (A and B) splitting the meters 50/50
- **Add Block** -- Add another block (if already split)
- **Edit Block** -- Opens the block editor for a specific block
- **Merge Blocks** -- Combines all blocks back to a single schedule
- **Duplicate** -- Create a copy of the blast
- **Remove** -- Delete the blast from the schedule

> *Screenshot coming soon*

---

## Related Topics

- [Quick Start](quick-start.md) -- Step-by-step guide to getting started
- [Drill Blocks](drill-blocks.md) -- Splitting drilling into independently-scheduled segments
- [Dependencies](dependencies.md) -- How dates cascade between phases
- [Pattern Preparation](pattern-preparation.md) -- The floor prep phase before drilling
- [Equipment](equipment.md) -- Managing your fleet
