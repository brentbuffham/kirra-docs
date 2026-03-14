# Dependencies

The dependency engine automatically calculates loading start dates and blast dates based on configurable thresholds and constraints. It runs whenever the Gantt chart is updated or when you click **Recalc Dates**.

> *Screenshot coming soon*

---

## The Dependency Chain

The scheduling phases cascade in this order:

**Pattern Prep** --> **Drilling** --> **Loading** --> **Blasting**

Pattern Preparation is an optional phase set manually by the planner. The remaining phases (Drilling, Loading, Blasting) cascade automatically based on configurable completion percentages.

---

## Global Settings

These settings are found in the Gantt settings bar and apply to all blasts unless individually overridden:

| Setting | Default | Description |
|---|---|---|
| **Drill % for Load** | 0% | Percentage of drilling that must be complete before loading can start. 0% means loading can start on the first drill day. |
| **Drill % for Blast** | 100% | Percentage of drilling that must be complete before blasting. |
| **Load % for Blast** | 100% | All loading must finish before blasting. Always 100%. |
| **Min Lead Days** | 0 | Minimum calendar days between loading completion and blast date (e.g., 1 day for safety checks). |
| **Enforce Sequence** | Off | When enabled, prevents manual date overrides that would breach dependencies. |

---

## Per-Blast Overrides

Each blast can override the global thresholds. When editing a blast, you can set custom values for:

- Drill % for Load
- Drill % for Blast
- Load % for Blast
- Min Lead Days
- Predecessor blast (see below)

If a custom value is not set, the blast uses the global setting.

---

## How Dates Are Calculated

For each blast, the engine calculates dates in this order:

1. **Sync blocks** -- If the blast has drill blocks, the blast-level drill start and drill days are derived from the blocks.
2. **Loading start** -- Calculated as the drill start plus the drill days multiplied by the "Drill % for Load" threshold. For blasts with blocks and a 100% threshold, the latest block end date is used.
3. **Predecessor check** -- If the blast has a predecessor, the engine validates that the predecessor's timing constraints are met.
4. **Manual override** -- If you have manually set a loading start date, your date is kept but a warning appears if it is earlier than the calculated earliest date.
5. **Loading days** -- Calculated from the blast's explosive mass divided by the combined daily rate of all assigned MPUs. For example, 2 MPUs at 100,000 kg/day each = 200,000 kg/day combined, halving the loading duration.
6. **Blast date** -- The later of two dates: the drill ready date and the load ready date, plus the min lead days.
7. **Manual blast override** -- If you have manually set a blast date, your date is kept but a warning appears if it breaches the dependency.
8. **Maintenance check** -- Warnings are flagged if any assigned drill's maintenance window overlaps the drilling period.

---

## Breach Warnings

When a manually set date violates a dependency threshold:

- A warning triangle icon appears in the Gantt Info column
- The tooltip shows the specific breach detail
- Dependency connectors change from green to red
- The warning persists until the conflict is resolved (either by adjusting dates or changing the threshold)

---

## Predecessor Types

You can link blasts together so that one must reach a certain stage before another can begin:

| Type | Constraint |
|---|---|
| **Blast before Drill** | The predecessor blast must fire before this blast's drilling starts |
| **Blast before Load** | The predecessor blast must fire before this blast's loading starts |
| **Drill before Drill** | The predecessor's drilling must finish before this blast's drilling starts |

---

## Drill Blocks and Dependencies

When a blast has drill blocks:

- The engine first syncs blast-level values from all blocks
- For 100% drill thresholds, the **latest-ending block** determines when drilling is considered complete
- Maintenance checks run per-block against each block's specific drill assignments
- Dependency connectors anchor to the last-ending block sub-row in the Gantt chart

---

## Practical Tips

- **Set Drill % for Load to 80%** if you want loading crews to begin as soon as most holes are drilled, without waiting for the last few holes.
- **Use Min Lead Days** to build in safety buffer between loading completion and the blast date.
- **Use Recalc Dates** after any changes to global settings to ensure all blasts are updated.
- **Check for red connectors** -- these indicate a dependency breach that needs attention.

---

## Related Topics

- [Quick Start](quick-start.md) -- Step 5 covers setting up dependencies
- [Gantt Chart](gantt-chart.md) -- Where dependency connectors are displayed
- [Drill Blocks](drill-blocks.md) -- How blocks interact with the dependency engine
- [Equipment](equipment.md) -- MPU rates and drill maintenance that affect calculations
- [Pattern Preparation](pattern-preparation.md) -- The optional prep phase before drilling
