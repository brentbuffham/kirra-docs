# PPV Voronoi Modes (A / B / C / E)

New in **v1.0.75**. Per-hole Voronoi PPV analysis with receptor-aware monitor points, four output modes, and matching 2D + 3D overlays.

This is **not** the same tool as the [Blast Analytics shaders](overview.md). The shader suite paints a per-pixel physics model (Heelan, Blair, Temporal Lifecycle, Blair Heavy). This tool paints the **Voronoi cell of each hole** using the empirical scaled-distance site law evaluated against one or more **monitor points** (receptors). It's designed for on-the-fly compliance review against multiple receivers, and it runs in real time as you move holes or edit charging.

> `[SCREENSHOT NEEDED: Voronoi Options dialog open on mode A (PPV — Max), showing the Global Blast-Side Settings section and one Monitor Points card]`

---

## When to use which mode

| Mode | Dropdown label | What each cell shows | Use it when... |
|------|----------------|----------------------|----------------|
| **A** | **PPV — Max (mode A)** | Peak PPV predicted at the cell centroid from the whole pattern | You want a spatial heatmap of the blast itself (independent of monitor locations) |
| **B** | **PPV — Dominant Hole (mode B)** | The hole's impact at the **binding monitor** (the enabled monitor that is most stressed), normalised against the worst offender at that monitor | You are trying to identify **which hole to redesign first** |
| **C** | **PPV — Compliance (mode C)** | The **worst compliance ratio** this single hole produces across all enabled monitors — `max(thisHolePPVatMonitor / monitorTarget)` | You need a go/no-go, hole-by-hole, against every receptor at once |
| **E** | **PPV — Max Allowable Charge (mode E)** | The largest charge this hole could hold while keeping **every** enabled monitor below its target | You are backsolving a charge budget per hole under multiple constraints |

---

## Opening the dialog

The Voronoi PPV controls live in the **Voronoi Options** dialog.

1. In the display toolbar, **right-click** the Voronoi display toggle label. `[VERIFY: toolbar button tooltip]`
2. In the **Voronoi Display** dropdown at the top, choose one of the four PPV modes listed above.

When a PPV mode is selected the dialog expands to reveal **Global Blast-Side Settings**, **Monitor Points**, and a collapsible **How to read this legend** guide. Switching back to a non-PPV mode (Powder Factor, Mass, Volume, etc.) hides those sections.

---

## Global Blast-Side Settings

These settings are **blast-wide**. They affect every enabled monitor equally.

> *Path-dependent values (site K, B, charge exponent, distance mode, target PPV) live **per monitor** — see [Monitor Points](#monitor-points) below.*

### Dominance

| Radio | Meaning |
|-------|---------|
| **Per Deck** *(recommended, default)* | Each deck contributes its own PPV using its own XYZ and Q. The "dominant hole" at any receptor is the one whose single-deck PPV is largest there. Matches the GPU shader, matches intuition ("9 kg at 30 m beats 10 kg at 50 m"), and is the physically correct definition for modern electronic detonators. |
| **Per Bin (legacy — reports only)** | Each time bin is collapsed into one super-charge at its Q-weighted centroid. Dominant hole = the largest-Q deck in the peak-firing bin. Included to reproduce older reports that pre-date per-deck analysis; **with ms-resolution timing it typically overstates peak PPV**. |

### Time bin (ms) — Per Bin only

Visible only when Dominance is set to **Per Bin**. Groups decks firing inside the same time window into one combined charge at the Q-weighted centroid.

- Default **0** — no binning, every deck stands alone.
- Typical legacy value **8 ms**.
- Larger bins inflate peak PPV because multiple decks add linearly inside a bin.

Per Deck mode ignores this setting.

### Contributor %

Sources below this percentage of the peak PPV are ignored when building the "contributors" list on each monitor and in cell tooltips. Default **20%**.

**Applies to both Per Deck and Per Bin.** This is reporting-only — it does not change the PPV calculation.

### Min scaled distance (m/kg^0.5)

Below this scaled distance, `SD = D / Q^chargeExponent`, the linear-superposition site law over-predicts and should not be used. The effective raw distance floor is charge-dependent: `D_min = SD_min * Q^e`. For example a 100 kg charge with `e = 0.5` gives a raw distance floor of 10 m.

Default **1.0 m/kg^0.5**, taken directly from Yang R & Scovira D S, 2007, "A Model for Near-Field Blast Vibration Based on Signal Broadening and Amplitude Attenuation", EXPLO Conference, Wollongong NSW, p 65 (Discussion).

### Superpose RMS with timing window (mode A only)

When ticked, Kirra combines multiple decks that **arrive close in time** at the receptor into a single quadrature (RMS) sum instead of taking the peak single deck.

- **Off (default)**: peak single-deck PPV. Most conservative.
- **On**: `sqrt(sum of squares)` over decks inside the coherence window.

Applies to **Mode A only**. Modes B, C, E are defined against the peak deck (USBM / ISEE compliance limits are against vector peak, not RMS) so RMS is deliberately not applied to them.

Two nested controls appear below:

**Coherence window (ms)** — only decks within ±(this value) ms of the peak deck's fire time contribute to the RMS sum; everything outside stays on the peak-pick path. Default **8 ms** (ISEE/Dowding classic). `0 ms` = only the peak deck (effectively disables RMS).

**Gate by P-wave arrival time** — when on (default), the coherence window checks **arrival time at the receptor** (`fireMs + D / Vp`) instead of source firing time. This is the physically correct gate: two decks firing 12 ms apart at the source can still arrive within a few ms of each other at a distant monitor whose path lengths differ. OFF matches older builds (source-time gate).

**P-wave velocity Vp (m/s)** — rock-mass P-wave velocity used for the arrival-time gate. Default **5000 m/s**. Typical ranges:

| Vp | Rock type |
|----|-----------|
| 1500–2000 m/s | Soft ground / weathered rock |
| 3000–4000 m/s | Competent sedimentary rock |
| 5000 m/s | Typical hard rock *(default)* |
| 5500–6500 m/s | Hard igneous / metamorphic |

Only used when both **Superpose RMS** and **Gate by P-wave arrival time** are on.

### Use Measured Mass over Design Mass

Global gate for the PPV null-cell rule. Applies to **all** PPV modes (A/B/C/E) in 2D and 3D.

- **Off (default)** — the designed charge is always used; cells paint from the charging data. Recommended during pattern design.
- **On** — a hole with `measuredMass == 0` is treated as having **no explosive loaded**, regardless of its designed charging. Its Voronoi cell renders as a **transparent wireframe** ("no data") and it contributes 0 PPV to every monitor. Recommended during QA/QC after loading, once measured-mass values have been entered.

Toggling this preference invalidates the Voronoi caches and repaints the map.

---

## Monitor Points

Monitors are the receptors. Every enabled monitor contributes to every PPV mode. Modes B, C, and E are defined **against the monitor set** — if you have zero enabled monitors, these modes have nothing to solve against and cells render as "no data".

Each monitor is its own card with its own site law, because **the geology between the blast and each receptor is usually different** (e.g. west monitor through shale ≠ east monitor through basalt).

> `[SCREENSHOT NEEDED: Monitor Points list with two cards — one PASS (green), one FAIL (red) — collapsed single-line status]`

### Card fields

**Header row:**

| Control | Purpose |
|---------|---------|
| Enable tick | Include this monitor in the evaluation |
| `#n` badge | Monitor index |
| Name | Free-text label shown on the 2D/3D overlay |
| Collapse chevron | Show/hide Location + Site Law body |
| `✕` | Remove monitor |

**Location** (three-column grid):

| Field | Unit | Notes |
|-------|------|-------|
| X (East) | m | |
| Y (North) | m | |
| Z (Elev) | m | Used only when **Distance** is 3D |

**Site Law** (five-column grid):

| Field | Default | Description |
|-------|---------|-------------|
| Site K | 1140 | Site constant (intercept) |
| Site B | 1.6 | Site exponent (attenuation slope) |
| Charge e | 0.5 | Charge weight exponent |
| Distance | 2D / 3D radio | `2D` ignores Z, `3D` includes Z |
| Target mm/s | 10 | Compliance target for this receptor |

**Status row** — mode-aware live result:

| Mode | Left-hand text | Badge |
|------|----------------|-------|
| A (RMS off) | `12.3 mm/s / target 10 — hole 42` | PASS / FAIL |
| A (RMS on) | `Peak 12.3 / RMS 14.1 mm/s / target 10 — hole 42 (N decks in 8 ms win)` | PASS / FAIL |
| B | `Dom: hole 42 @ 35.3 mm/s` | PASS / FAIL |
| C | `COMPLIANT @ 8.1 / target 10 — hole 42` | PASS / FAIL |
| E | `Allow Q: 42.0 kg (now 12.3 mm/s) — hole 42` | PASS / FAIL |

If the pattern has no charging data yet, the card shows "No charging data" instead.

### Actions

| Button | Behaviour |
|--------|-----------|
| **+ Add Monitor** | Adds a new monitor seeded at the data centroid with default site law |
| **Pick from KAD points** | Imports every visible KAD point entity as a monitor. Name becomes `entity#pointID`. KAD lines, polygons, and text are skipped. |

### Persistence

Monitors and global settings are persisted to `localStorage` (`kirra_ppvMonitors`, `kirra_ppvParams`) and survive a page reload. When the first monitor is added after an upgrade, older per-blast K/B/e defaults are migrated into the new per-monitor defaults automatically.

---

## How to read the cell colours

The dialog has a built-in, collapsible **How to read this legend** panel that switches with the mode. The summary below matches that panel.

### Mode A — Max PPV

Each Voronoi cell is coloured by the peak PPV predicted **at that cell's centroid** from the whole pattern. A spatial PPV heatmap of the blast itself, independent of where the monitors are.

| Swatch | Meaning |
|--------|---------|
| Blue | Low PPV (far from high-Q sources) |
| Green | Moderate PPV |
| Red | Peak PPV (biggest or closest source) |

**Tip.** "Superpose RMS" turns on timing-aware quadrature summation of decks that arrive within the coherence window. With "Gate by P-wave arrival time" on, decks can fire asynchronously at the source yet still sum coherently if their arrival times at the receptor overlap (path-length correction `D / Vp`).

### Mode B — Dominant Hole

Cells are coloured by **each hole's impact at the binding monitor** (the enabled monitor that is most stressed), normalised against the single worst-offending hole at that same monitor.

| Swatch | Meaning |
|--------|---------|
| Red (1.0) | The worst offender at the binding monitor. Redesign first. |
| Orange (0.75) | Producing ~75% of the worst hole's impact. Next in line. |
| Yellow (0.5) | Half the worst hole's impact. |
| Green (0.35) | Minor contributor. |
| Blue | Negligible at this monitor. |

**Workflow.** Fix the red hole, re-run; the new worst offender turns red; fix that; repeat. Toggle monitors on/off to see how the binding monitor (and therefore the red region) migrates.

### Mode C — Compliance

Cells are coloured by the worst compliance ratio this hole alone produces across all enabled monitors:

```
ratio = max over monitors (this_hole_PPV_at_monitor / monitor_target)
```

| Swatch | Range | Meaning |
|--------|-------|---------|
| Green | `< 0.9` | Comfortably compliant |
| Amber | `0.9 – 1.0` | Within 10% of a target — warning band |
| Red | `≥ 1.0` | This single hole exceeds a monitor's target — redesign or relocate |

**Tip.** If every cell is green while a monitor card shows **FAIL**, the failure is driven by the combined effect of many below-threshold holes, not one offender — check the monitor's total PPV on its status row.

### Mode E — Max Allowable Charge

Cells show the largest charge each hole can load **and still keep every enabled monitor below its target**. Pure inverse site law, per hole.

| Swatch | Meaning |
|--------|---------|
| Blue / low | Tightly constrained (usually close to a monitor) |
| Green / mid | Moderate headroom |
| Red / high | Plenty of headroom (far from all monitors) |

With two monitors on opposite sides, both constrain each hole and the smaller allowable charge wins. With one monitor, charge scales with distance from that monitor, so the heatmap reads as a clear distance-from-monitor permitted-charge map.

**Zero enabled monitors** → cells render as wireframe "no data" because there's nothing to solve against.

---

## No-data cells (wireframe only)

For any PPV mode, a cell renders as a transparent **wireframe only** (no fill colour) whenever the hole fails the charge check. The rule is:

- Hole has no entry in the charging system, **or**
- The hole's deck list has no COUPLED or DECOUPLED explosive decks, **or**
- The hole's total explosive mass is zero, **or**
- **Use Measured Mass over Design Mass** is on **and** `hole.measuredMass == 0`.

This keeps the map honest — uncharged holes don't paint a fake low-PPV colour that could be mistaken for a compliant result.

---

## 3D overlay

When any PPV mode is active, 3D adds the following for each enabled monitor:

- A coloured ring at the monitor XYZ (crosshair)
- A tieline from the monitor to its dominant hole
- A midpoint distance chip (e.g. `47.3 m`) in Hershey vector text
- A trailing status chip (e.g. `EU1#1 (A): 12.3 mm/s / target 10 PASS`) in Hershey vector text

Status colours match the 2D monitor cards: green on PASS, red on FAIL, amber when there is no data yet.

> `[SCREENSHOT NEEDED: 3D view showing a PPV-coloured Voronoi cell layer with two monitors — one PASS tieline in green, one FAIL tieline in red, crosshair rings visible]`

Toggling charging edits, timing edits, or monitor changes updates both the 2D and 3D overlays in lock-step.

---

## Dark / Light theme

The dialog is theme-reactive. Flipping Dark ↔ Light in the main app immediately rebuilds the open dialog in the matching theme, preserving your current mode selection and monitor list.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Every cell is wireframe on a loaded blast | No charging assigned, or **Use Measured Mass** is on with `measuredMass = 0` across the pattern | Assign charging, or turn off the Measured Mass switch |
| Modes B / C / E show all wireframe | No enabled monitors | Add a monitor or re-enable one |
| "Superpose RMS" has no visible effect | Only the peak deck falls inside the coherence window (RMS == peak) | Widen the coherence window, or confirm your inter-hole delays are shorter than the window |
| Monitor card says `No charging data` | Pattern has no charging entries yet | Assign at least one hole to the charging system |
| Mode switch leaves the map unchanged | Cached metrics not invalidated | Change any global setting once (e.g. toggle RMS off/on) to force a cache bump |

---

## Related Topics

- [Analytics Overview](overview.md)
- [PPV & Vibration Models (shader suite)](ppv-models.md)
- [Blast Statistics & Voronoi (area / volume / powder factor)](statistics-voronoi.md)
- [Charging Overview](../charging/overview.md)

---

## References

- Yang, R. & Scovira, D.S. (2007). *A Model for Near-Field Blast Vibration Based on Signal Broadening and Amplitude Attenuation*. EXPLO Conference, Wollongong NSW, p 65 (Discussion).
- ISEE / Dowding — classic 8 ms coherence window convention for quadrature superposition of blast-hole contributions.
