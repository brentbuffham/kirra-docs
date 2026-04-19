# Blast Analytics Overview

Kirra includes a GPU-accelerated blast analytics system that overlays vibration, damage, and energy predictions directly on your blast pattern. Most models run in real-time on the GPU via WebGL fragment shaders, enabling interactive what-if analysis as you move holes or adjust charges.

**Recent builds (e.g. v1.0.60):** shader code paths were tuned for **heavier multi-deck columns** and **large patterns** (loop limits and per-model iteration in GLSL, plus related dialog/helper updates). Very deep deck counts may still hit GPU static limits on some models — use **PPV Per-Deck**, **Temporal Lifecycle**, or **Blair Heavy** where per-deck fidelity or detonation timing along the column matters most.

> *Screenshot coming soon -- analytics dialog with model selection and parameter controls*

---

## Available Models

Kirra provides **11 analytics models** in the Blast Analysis dialog:

| # | Model | Output | Best For |
|---|-------|--------|----------|
| 1 | **PPV Site Law** | mm/s | Compliance prediction, comparison with monitoring data |
| 2 | **PPV Per-Deck** | mm/s | Multi-deck configurations, scaled-distance PPV per deck (no VOD burn front) |
| 3 | **Heelan Original** | mm/s | Physics-based directional vibration (Heelan 1953) |
| 4 | **Scaled Heelan** | mm/s | Site-calibrated directional vibration (Blair & Minchinton 2006) |
| 5 | **Blair Lite (Scaled Heelan 90%)** | mm/s | Updated Blair radiation patterns (Blair 2015) |
| 6 | **Temporal Lifecycle (VOD ramp)** | mm/s | Detonation as a ramp from **primer** along the charge at VOD; time animation of burn fronts (still **incoherent** RMS sum — not wave interference) |
| 7 | **Blair Heavy (Time-Domain)** | mm/s | Full **coherent** waveform synthesis — only path that can show constructive/destructive interference; runs on CPU |
| 8 | **Non-Linear Damage** | Damage Index 0-1 | Fragmentation, overbreak, damage zone mapping |
| 9 | **Jointed Rock Damage** | Damage Ratio | Structural assessment near joints, wall control |
| 10 | **Borehole Pressure** | MPa | Near-field wall damage, presplit design |
| 11 | **Volumetric Powder Factor** | kg/m3 | Energy distribution, fragmentation prediction |

---

## Wave collision and interference (what the shaders actually show)

**None of the GPU fragment shaders visualise classical wave collision** (constructive or destructive interference between overlapping P/S wave trains in the phase-coherent sense). What they implement instead is summarised below. **Blair Heavy (CPU)** is the only model that performs **true coherent superposition with phase**; it can produce cancellation and reinforcement in the time domain. **All GPU models** use **incoherent** summation (RMS / energy-style stacking): contributions **add energy**, they do **not** cancel like coherent interference fringes.

| Model | Superposition method | Shows collision / interference? |
|-------|----------------------|-------------------------------|
| **PPV**, **PPV Per-Deck** | Scaled distance — no waveform synthesis | No |
| **Heelan**, **Scaled Heelan** | Incoherent (RMS) sum of energies | No — RMS cannot cancel |
| **Blair Lite** (Scaled Heelan 90%), **+COH** path family | Incoherent (RMS) with directional radiation | No |
| **Temporal Lifecycle** | Incoherent (RMS) with **VOD ramp** from **primer**, time filtering (`uDisplayTime`) | No — shows **burn-front timing** and primer-relative ordering, **not** interference |
| **Blair Heavy** (Blair & Minchinton) | Full **time-domain** waveform synthesis | **Yes** — coherent superposition; phases can constructively or destructively combine |

For a deeper model-by-model read, see [PPV & Vibration Models](ppv-models.md).

---

## Per-cell Voronoi PPV (empirical, receptor-aware) — new in v1.0.75

Alongside the 11 shader models above, Kirra v1.0.75 adds a **per-hole Voronoi PPV** suite with four output modes (A/B/C/E) and user-configurable **monitor points** (receptors). This path is complementary to the shaders:

| | Shader analytics (this page) | Voronoi PPV modes |
|---|---|---|
| **Granularity** | Per-pixel over a surface / plane | Per Voronoi cell, one per hole |
| **Physics** | Site law, Heelan, Blair (Lite / Heavy), Temporal Lifecycle VOD ramp | Empirical scaled-distance law evaluated per deck |
| **Receptor-aware** | No — paints a spatial field | Yes — every cell is evaluated against every enabled monitor |
| **Multi-receptor compliance** | Not directly | Mode C collapses to pass/fail per hole across all monitors |
| **RMS timing window** | Temporal Lifecycle / Blair Heavy | Mode A only (configurable coherence window, optional P-wave arrival-time gate) |
| **Runs on** | GPU (or CPU Workers for Blair Heavy) | CPU, real-time |

The four Voronoi PPV modes are:

- **Mode A — PPV Max** — cells coloured by peak PPV at the cell centroid from the whole pattern
- **Mode B — Dominant Hole** — cells coloured by each hole's impact at the binding monitor
- **Mode C — Compliance** — cells coloured by the worst per-monitor ratio (`thisHolePPV / monitorTarget`)
- **Mode E — Max Allowable Charge** — cells show the largest charge each hole could hold and still keep every monitor below its target

Open the Voronoi Options dialog, pick a PPV mode, and add monitors with **+ Add Monitor** or **Pick from KAD points**. Full reference: **[PPV Voronoi Modes](ppv-voronoi-modes.md)**.

---

## How to Use

### Opening the Dialog

Access the Blast Analysis Shader from the Surface toolbar. The dialog presents:

| Field | Description |
|-------|-------------|
| **Analytics Model** | Select from the 11 models listed above (including **Temporal Lifecycle**) |
| **Render On** | Choose a loaded surface or "Generate Analysis Plane" for a flat rectangle |
| **Blast Pattern** | Filter to a specific entity or "All Blast Holes" |
| **Apply Mode** | "Overlay on Original" or "Create Duplicate Surface" |
| **Bake as Texture** | UV-map the result as a persistent texture on the surface |
| **Analysis Plane Distance** | Padding (m) around blast extent when using the generated plane (default 200m) |

Each model has an expandable **Model Parameters** section for tuning site constants and rock properties.

### Typical Workflow

1. Load blast holes and (optionally) a surface
2. Assign charging to holes (recommended for accurate results)
3. Open the Blast Analysis Shader dialog
4. Select a model and adjust parameters to match your site calibration data
5. Click **Apply Analysis** to render the overlay
6. Drag holes or modify charges to see the shader update in real-time (GPU models)

> **Note:** Blair Heavy runs as a one-shot CPU computation via Web Workers. A progress dialog shows completion status. It does not support real-time hole-drag updates.

---

## Render Modes

| Mode | Description |
|------|-------------|
| **Analysis Plane** | Flat rectangle covering the blast extent with configurable padding. Uses the drawing RL elevation. Good for quick overview. |
| **Surface Overlay** | Applies the shader directly to an existing loaded surface. The original is hidden. |
| **Duplicate Surface** | Creates a copy of the surface with the shader applied. Original remains untouched. |
| **Baked Texture** | Renders to a persistent UV-mapped texture saved to IndexedDB. Visible in 2D and 3D without the shader running. |

---

## Time Interaction

Timing-capable models (including **Temporal Lifecycle**) support animated playback via the **Interact** button — the shader advances **`uDisplayTime`** so you see which decks/holes have fired by that instant. This is **not** the same as displaying wave interference; for coherent superposition use **Blair Heavy** (one-shot CPU run, no Interact slider).

Controls:

| Control | Description |
|---------|-------------|
| **Time Slider** | Drag to set display time -- only holes fired by this time are shown |
| **Play** | Animate from current position to end at real-time speed |
| **Pause** | Stop at current position |
| **Reset** | Return to time 0 |
| **Generate** | Create a permanent surface at the current time slice |

Double-click Play to cycle through 1x, 2x, and 5x speed.

> **Note:** Blair Heavy does not support time interaction.

---

## Colour Ramps

| Ramp | Colours | Used By |
|------|---------|---------|
| PPV | Green-yellow-orange-red | PPV, Scaled Heelan |
| Jet | Blue-cyan-green-yellow-red | Heelan Original, Blair Heavy |
| Damage | Blue-green-yellow-red-dark red | Non-Linear Damage, Jointed Rock |
| Pressure | Blue-green-yellow-orange-red | Borehole Pressure |
| Spectrum | Blue-cyan-green-yellow-red-magenta | Powder Factor |
| Viridis | Purple-teal-green-yellow | General scientific |
| Compliance | Green-yellow-red | Pass/fail assessments |
| Grey | Black-white | Greyscale output |

---

## Charging Awareness

When charging data is assigned to holes, the analytics models use:
- Actual charge column positions (top and base of explosive decks)
- Individual deck masses
- Per-deck VOD (velocity of detonation) from assigned products
- Stemming length from the top explosive deck depth

When no charging data exists, models estimate the charged length as 70% of hole depth.

---

## Transparency

You can adjust the transparency of an analysis mesh after it has been generated without re-running the analysis. The mesh is preserved and only the visual opacity changes. This applies to both GPU shader overlays and CPU-generated results (Blair Heavy).

---

## GLB Export and Persistence

Analysis surfaces can be exported to GLB format for archiving or use in external 3D viewers. Blair Heavy results are automatically exported to GLB and persisted to IndexedDB, so they survive page reloads without needing to recompute the CPU model.

When reloading a project, analysis meshes from previous sessions are automatically restored from their GLB representation in IndexedDB.

---

## Analysis Plane Elevation

When using the **Generate Analysis Plane** render mode, the flat analysis plane is placed at the **Drawing RL** (reduced level) elevation. For 2D baked images on existing mesh surfaces, a flat bake plane is created at the Drawing RL to produce a flattened overhead view.

---

## Limitations

- Blair Heavy runs on CPU -- expect 10-60 seconds for typical grids
- Maximum 512 holes per analysis (GPU texture constraint)
- Maximum 2048 decks per analysis
- Maximum 64 charge elements per hole for Heelan/Scaled Heelan models

---

## Related Topics

- [PPV & Vibration Models](ppv-models.md)
- [PPV Voronoi Modes (A/B/C/E) — per-cell, receptor-aware](ppv-voronoi-modes.md)
- [Flyrock Modelling](flyrock.md)
- [Blast Statistics & Voronoi](statistics-voronoi.md)
- [Charging Overview](../charging/overview.md)
