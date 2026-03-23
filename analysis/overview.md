# Blast Analytics Overview

Kirra includes a GPU-accelerated blast analytics system that overlays vibration, damage, and energy predictions directly on your blast pattern. Most models run in real-time on the GPU via WebGL fragment shaders, enabling interactive what-if analysis as you move holes or adjust charges.

> *Screenshot coming soon -- analytics dialog with model selection and parameter controls*

---

## Available Models

Kirra provides **10 analytics models**:

| # | Model | Output | Best For |
|---|-------|--------|----------|
| 1 | **PPV Site Law** | mm/s | Compliance prediction, comparison with monitoring data |
| 2 | **PPV Per-Deck** | mm/s | Multi-deck configurations, individual deck contributions |
| 3 | **Heelan Original** | mm/s | Physics-based directional vibration (Heelan 1953) |
| 4 | **Scaled Heelan** | mm/s | Site-calibrated directional vibration (Blair & Minchinton 2006) |
| 5 | **Blair Lite (Scaled Heelan 90%)** | mm/s | Updated Blair radiation patterns (Blair 2015) |
| 6 | **Blair Heavy (Time-Domain)** | mm/s | Full waveform synthesis -- highest fidelity, runs on CPU |
| 7 | **Non-Linear Damage** | Damage Index 0-1 | Fragmentation, overbreak, damage zone mapping |
| 8 | **Jointed Rock Damage** | Damage Ratio | Structural assessment near joints, wall control |
| 9 | **Borehole Pressure** | MPa | Near-field wall damage, presplit design |
| 10 | **Volumetric Powder Factor** | kg/m3 | Energy distribution, fragmentation prediction |

---

## How to Use

### Opening the Dialog

Access the Blast Analysis Shader from the Surface toolbar. The dialog presents:

| Field | Description |
|-------|-------------|
| **Analytics Model** | Select from the 10 models listed above |
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

Timing-capable models support animated playback via the **Interact** button:

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
- [Flyrock Modelling](flyrock.md)
- [Blast Statistics & Voronoi](statistics-voronoi.md)
- [Charging Overview](../charging/overview.md)
