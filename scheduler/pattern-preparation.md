# Pattern Preparation

Pattern Preparation is an optional scheduling phase that appears **before drilling** in the Gantt chart. It represents the floor preparation work that must happen before drill rigs can safely access a blast pattern.

> *Screenshot coming soon*

---

## Why Pattern Prep?

In open-cut mining, the bench floor is rarely ready for drilling immediately after the previous blast fires. Common preparatory tasks include:

- Removing overhanging wall material
- Loading out batter trims and debris
- Rough-grading the floor for rig access
- Final grading and compaction

Neglecting to schedule this work is a common source of drilling delays. By giving Pattern Preparation its own Gantt phase, planners can see the full timeline and avoid scheduling conflicts with ancillary equipment.

---

## Typical Prep Sequence

The machines involved in floor preparation typically work in this order:

| Step | Equipment | Task |
|---|---|---|
| 1 | **Excavator** | Pull the walls and remove overhanging material |
| 2 | **Loader** | Load out batter trims and debris |
| 3 | **Dozer** | Rough-prep the floor for drilling access |
| 4 | **Grader** | Grade the floor to a smooth surface |
| 5 | **Roller** | Compact the floor for final preparation |

Not every blast needs all five steps. You can assign any combination of ancillary equipment (or none at all) depending on site conditions.

---

## Setting Up Pattern Prep

### Via the Blast Form

1. Open the blast form (click **+ Add Blast** or the pencil icon on an existing blast)
2. Scroll to the **Pattern Preparation** section
3. Set:
   - **Prep Start** -- The date floor prep begins
   - **Prep Days** -- How many calendar days the prep work will take
   - **Assigned Ancillary** -- Select ancillary equipment to assign from the multi-select list
4. Click **Save**

> *Screenshot coming soon*

---

## Gantt Chart Display

### Section

The **PATTERN PREP** section appears at the top of the Gantt chart, above DRILLING. It only shows rows for blasts that have a prep start date set.

### Bar Appearance

- Colour: **Teal**
- Spans from the prep start date to prep start + prep days

### Info Column

The Info column for PATTERN PREP rows displays:

- Assigned ancillary equipment IDs (comma-separated)
- Prep duration in days

### Interactions

- **Drag** -- Move the prep bar left or right to shift the prep start date
- **Resize** -- Drag the left edge to change the start date, or the right edge to change the duration in days

---

## Dependency Behaviour

Pattern Preparation is currently **not linked** to the automated dependency engine. The prep start and duration are set manually by the planner. The prep phase is intended as a visual planning aid -- it does not automatically cascade into drilling start dates.

**Tip:** When planning your schedule, ensure that drilling does not start until prep is complete. You can visually verify this on the Gantt chart by checking that the teal prep bar ends before the blue drill bar begins.

---

## Related Topics

- [Quick Start](quick-start.md) -- Step 3 covers adding pattern prep to a blast
- [Gantt Chart](gantt-chart.md) -- How prep bars appear and interact on the chart
- [Equipment](equipment.md) -- Managing ancillary equipment (dozers, graders, loaders, excavators, rollers)
- [Dependencies](dependencies.md) -- How the dependency engine works for later phases
