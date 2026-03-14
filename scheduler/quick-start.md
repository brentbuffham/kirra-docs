# Quick Start

This guide walks you through using Kirra Scheduler for the first time -- from opening the app to having a working drill and blast schedule.

---

## Step 1: Open the App

Open Kirra Scheduler in your browser. On first launch, a startup dialog asks:

- **Load Example Data** -- Populates the scheduler with sample blasts, drill rigs, MPUs, ancillary equipment, and personnel so you can explore immediately.
- **Start From Scratch** -- Begins with an empty schedule. Choose this when you want to set up your own site-specific data from the start.

> *Screenshot coming soon*

If you choose "Load Example Data", you will see the **Gantt Schedule** tab with some example blasts already loaded. Take a moment to look around:

- The **header** at the top shows the app logo, a colourblind toggle (CB), a light/dark theme toggle, and an Export button.
- The **tab bar** lets you switch between views: Gantt Schedule, Blast Overview, Pattern Library, Explosive Forecast, Conformance, Equipment, and Import / DXF.
- The **stats cards** show totals for blasts, volume, explosive, drill meters, and effective rig hours.

---

## Step 2: Set Up Your Equipment

Before scheduling, define what equipment you have available.

1. Click the **EQUIPMENT** tab.
2. You will see five sections: **Drill Fleet**, **MPU Fleet** (loading trucks), **Ancillary Equipment** (dozers, graders, excavators, loaders, rollers), **Personnel**, and **Maintenance Schedule**.
3. Click **Add Drill** to add each of your drill rigs. For each rig, enter:
   - A name and ID (e.g., "PV271-01")
   - Rig type (e.g., "PV271" or "D65")
   - Minimum and maximum hole diameter it can drill (in mm)
   - Penetration rate in metres per hour (m/hr)
4. If a drill has upcoming maintenance, add the date range and reason. The scheduler will warn you if drilling is planned during maintenance.
5. Add your MPUs (emulsion loading trucks) with their daily loading capacity in kg. You can assign **multiple MPUs** to a single blast -- the scheduler sums their rates to calculate loading duration.
6. Add your ancillary equipment (dozers, graders, loaders, excavators, rollers) for pattern preparation work. These are assigned to blasts in the **Pattern Preparation** section of the blast form.
7. Add your personnel with their roles and drill certifications.

> *Screenshot coming soon*

**Tip:** See the [Equipment](equipment.md) page for full details on each equipment type.

---

## Step 3: Add Your First Blast

1. Switch to the **GANTT SCHEDULE** tab.
2. Click the **+ Add Blast** button in the settings bar.
3. Fill in the blast details:
   - **Name** -- Give it a unique name (e.g., "S4_226_410_V1")
   - **Pattern Preparation** (optional) -- Set a prep start date, duration (days), and assign ancillary equipment (excavators, loaders, dozers, graders, rollers) for floor prep work before drilling
   - **Drill Start** -- When drilling should begin
   - **Start Time** -- What time of day drilling starts (e.g., 06:00)
   - **D65 / PV Meters** -- How many metres of each hole type need to be drilled
   - **Volume and Explosive Mass** -- The blast's volume (bcm) and expected explosive (kg)
   - **Assigned Drills** -- Which rigs will work on this blast (multi-select)
   - **Assigned MPUs** -- Which loading trucks to use (multi-select). Assigning multiple MPUs proportionally reduces loading time by summing their daily rates.
4. Click **Save**. The blast appears on the Gantt chart and the dependency engine automatically calculates the loading start and blast date.

Repeat for each blast in your schedule.

> *Screenshot coming soon*

**Tip:** If you already have blast data in Kirra Blast Design, you can import it directly. See Step 7.

---

## Step 4: Configure the Schedule Settings

Above the Gantt chart you will find the **settings bar**. Adjust these to match your site:

| Setting | What It Does |
|---|---|
| **Plan Start** | The first date shown on the timeline |
| **Gantt Weeks** | How many weeks to display |
| **Rig Hours** | Scheduled operating hours per day (typically 24 for continuous ops) |
| **Availability** | What fraction of the time is the rig available (e.g., 0.85 = 85%) |
| **Utilisation** | What fraction of available time is the rig actually drilling (e.g., 0.75 = 75%) |

These three values combine into **Effective Hours/Day** (shown on the stats card). This is used to convert penetration rates into actual metres drilled per day:

> Effective m/day per rig = Pen Rate (m/hr) x Rig Hours x Availability x Utilisation

---

## Step 5: Set Up Dependencies

Dependencies control the cascade between drilling, loading, and blasting. In the settings bar:

| Setting | What It Means |
|---|---|
| **Drill % for Load** | How much drilling must be done before loading can start. Set to 0% to allow loading immediately, or 80% to require most drilling complete first. |
| **Drill % for Blast** | How much drilling must be done before the blast can fire. Usually 100%. |
| **Min Lead Days** | Minimum gap between loading completion and blast date (e.g., 1 day for safety checks). |

Click **Recalc Dates** after changing these. The loading and blasting dates will automatically adjust.

See the [Dependencies](dependencies.md) page for a full explanation of the dependency engine.

---

## Step 6: Work With the Gantt Chart

The Gantt chart has four collapsible sections -- **PATTERN PREP**, **DRILLING**, **LOADING**, and **BLASTING**. Here is how to interact with it:

### Move a Schedule

Click and drag any bar left or right to shift its dates. Drilling bars will cascade changes to loading and blasting. If you drag a loading or blast bar to a date that breaks a dependency, a warning triangle will appear.

### Edit a Blast

Click the small pencil icon to the left of any blast name, or right-click and select **Edit Blast**.

### Split Drilling into Blocks

For large blasts where you want to schedule different rigs at different times:

1. Right-click the blast name in the DRILLING section
2. Select **Split Drill** -- this creates two blocks (A and B) splitting the meters 50/50
3. Each block gets its own row with its own bar that you can drag independently
4. Click the pencil icon on a block row to open the **Block Editor** where you can:
   - Reassign specific drills to each block
   - Set per-drill penetration rates
   - Adjust how many metres each block covers
   - Change start dates and times
5. To add more blocks, right-click again and select **Add Block**
6. To undo the split, right-click and select **Merge Blocks**

See the [Drill Blocks](drill-blocks.md) page for full details.

### Collapse Sections

Click any section header (PATTERN PREP, DRILLING, LOADING, BLASTING) to hide or show its rows. Useful when you only want to focus on one phase.

### Scroll the Timeline

Hold **Shift** or **Alt** while scrolling the mouse wheel to scroll the chart sideways.

> *Screenshot coming soon*

See the [Gantt Chart](gantt-chart.md) page for a complete reference.

---

## Step 7: Import Data from Kirra

If you use Kirra Blast Design, you can import your project directly:

### Option A: Kirra Project (.kirra / .json)

1. Click the **IMPORT / DXF** tab
2. In the **Kirra Scheduler Project Import** section, drag and drop your `.kirra` or `.json` project file
3. The importer will extract your blast holes, group them by entity name, and calculate drill meters, hole types, and explosive estimates
4. Surfaces and solids are preserved for 3D playback
5. A preview dialog shows the imported blasts -- review them and click **Confirm** to add them to your schedule
6. Switch back to the Gantt tab and assign drills, set dates, and adjust as needed

### Option B: Kirra Application Project (.kap)

1. Click the **IMPORT / DXF** tab
2. In the **Kirra Application Project (.kap)** section, drag and drop your `.kap` file
3. The importer extracts surfaces (pit shells), blast holes, drawings, and charge configurations
4. The import log shows progress and a summary of what was loaded
5. Switch to the **3D PLAYBACK** tab to see your pit shell surfaces rendered in 3D

See the [Import / Export](import-export.md) page for all supported formats.

---

## Step 8: View in 3D

After importing spatial data (surfaces from a `.kap` or `.kirra` file):

1. Click the **3D PLAYBACK** tab
2. The pit shell surfaces render with elevation-gradient colouring
3. Use the sidebar to toggle surface visibility and adjust opacity
4. Click **Top**, **Iso**, or **3D** for camera presets
5. Use the timeline controls at the bottom to step through the schedule day by day

> *Screenshot coming soon*

See the [3D Playback](3d-playback.md) page for full details on the 3D viewer.

---

## Step 9: Export Your Schedule

Click the **Export** button in the header. Two formats are available:

- **Kirra Gantt Project (.kgp)** -- Saves the complete scheduler state, including spatial data for 3D playback. Can be re-imported to fully restore the schedule.
- **CSV** -- A spreadsheet-friendly summary of all blasts with key metrics.

See the [Import / Export](import-export.md) page for details on each format.

---

## Tips

- **Dark mode / Light mode** -- Click the sun/moon icon in the header to switch. Your preference is remembered. See [Theming](theming.md).
- **Colourblind mode** -- Click the **CB** button for a deuteranopia-safe palette that replaces red/green with magenta/blue.
- **Dependency connectors** -- Green arrows between sections show the dependency chain. They turn red if a dependency is breached.
- **Maintenance warnings** -- If a drill is scheduled during its maintenance window, the affected dates are highlighted red and a warning icon appears.
- **Blast Overview tab** -- Shows a summary table of all blasts with key metrics, useful for a quick check before printing or sharing.
- **Explosive Forecast tab** -- Shows projected explosive consumption across your schedule.
- **3D Playback** -- Import a `.kap` file from the Kirra App to see your pit shell surfaces in 3D. The timeline lets you animate the schedule day by day.
- **KAP files** -- These are ZIP archives containing data. They can be large (80 MB+ surfaces) so import may take 30-60 seconds for production sites.

---

## Related Topics

- [Gantt Chart](gantt-chart.md)
- [Equipment](equipment.md)
- [Drill Blocks](drill-blocks.md)
- [Dependencies](dependencies.md)
- [Pattern Preparation](pattern-preparation.md)
- [3D Playback](3d-playback.md)
- [Import / Export](import-export.md)
- [Theming](theming.md)

---

## Contributing

Kirra Scheduler is an open-source project and contributions are welcome. If you would like to help:

1. Clone the repository from [GitHub](https://github.com/brentbuffham/KirraScheduler)
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Create a feature branch, make your changes, and open a pull request

Areas where help is especially needed include: pattern preparation dependency integration, ancillary equipment scheduling conflict detection, undo/redo support, Gantt print/PDF export, crew rostering, automated testing, and accessibility improvements.

For questions, feature requests, or to discuss contributions, open an issue on the [GitHub repository](https://github.com/brentbuffham/KirraScheduler).
