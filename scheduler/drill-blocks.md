# Drill Blocks

Drill blocks allow a single blast's drilling to be split into multiple independently-scheduled segments. Each block can have its own start date, assigned drill rigs, and per-drill penetration rates.

> *Screenshot coming soon*

---

## Why Split Drilling into Blocks?

In practice, a large blast may be drilled in stages for several reasons:

- Different sections of the pattern drilled by different rigs
- Scheduled around equipment maintenance windows
- Phased to allow partial loading to begin early
- Sequential blocks when rig availability is limited

---

## Creating Blocks

1. Right-click a blast name in the **DRILLING** section of the Gantt chart
2. Select **Split Drill**
3. The blast is divided into two blocks (A and B) with a 50/50 metre allocation
4. Each block inherits the blast's assigned drills and uses the equipment default penetration rates

To add more blocks after the initial split, right-click again and select **Add Block**.

---

## Block Properties

Each block has the following properties:

| Property | Description |
|---|---|
| Label | Letter identifier (A, B, C, ...) |
| Drill Start | Start date for this block |
| Start Time | Start time of day (e.g., "06:00") |
| Drill Days | Automatically calculated from metres and rates |
| Metres | Drill metres allocated to this block |
| Assigned Drills | Which drill rigs are assigned to this block |
| Drill Rates | Per-drill penetration rates in m/hr |

---

## Editing Blocks

Click the pencil icon on a block sub-row, or right-click and select **Edit Block**, to open the block editor. The editor allows you to:

- Change the start date and time
- Adjust the metres allocation (the editor shows remaining metres available)
- Assign or unassign drill rigs via checkboxes
- Set per-drill penetration rates (m/hr)
- See a live preview of the calculated drill days based on current settings

> *Screenshot coming soon*

---

## How Drill Days Are Calculated

The number of drilling days for a block is based on the total metres, assigned rigs, and effective operating hours:

1. **Effective hours per day** = Rig Hours x Availability x Utilisation
2. **Metres per day** = Sum of (each assigned drill's penetration rate x effective hours)
3. **Drill days** = Metres allocated to the block / metres per day (rounded up)

**Example:** With default settings (24 hours x 0.85 availability x 0.75 utilisation = 15.3 effective hours) and a single drill at 20 m/hr, one rig produces about 306 m/day.

---

## How Blocks Affect the Blast Schedule

When blocks are modified, the parent blast automatically updates:

- **Drill start** is set to the earliest block start date
- **Drill days** spans from the earliest start to the latest block end
- **Assigned drills** is the combined set of all drills across all blocks

---

## Dependency Awareness

The dependency engine uses the **latest-ending block** to determine when drilling is considered complete. This affects:

- When loading can start (based on the "Drill % for Load" threshold)
- When the blast can fire (based on the "Drill % for Blast" threshold)
- Maintenance warnings, which are checked per-block against each block's specific drill assignments

Dependency connectors on the Gantt chart anchor to the last-ending block's row.

---

## Gantt Display

Block sub-rows appear in the DRILLING section with:

- An indented blast name prefixed with the block label: `[A] S4_226_410_V1`
- Independent drill bars that can be dragged individually
- Per-block assigned drill IDs and metres shown in the Info column

---

## Merging Blocks

To return to a single-schedule blast:

1. Right-click the blast name in the DRILLING section
2. Select **Merge Blocks**

This combines all blocks back into a single drilling schedule:

- The drill start is set to the earliest block start
- Drill days are recalculated from the total metres using effective hours
- All drill assignments from every block are combined

---

## Related Topics

- [Quick Start](quick-start.md) -- Step 6 covers splitting drilling into blocks
- [Gantt Chart](gantt-chart.md) -- How blocks appear on the chart
- [Equipment](equipment.md) -- Managing drill rigs and their rates
- [Dependencies](dependencies.md) -- How blocks interact with the dependency engine
