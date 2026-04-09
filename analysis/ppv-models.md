# PPV & Vibration Models

Kirra provides **seven** vibration-focused models in the analytics dialog (plus separate damage/energy models below), from empirical site laws through VOD-ramp **Temporal Lifecycle** to full time-domain **Blair Heavy**. This page summarises each model and its key parameters.

For **which models can show wave interference** (constructive/destructive), see the table in [Blast Analytics Overview](overview.md) (section **Wave collision and interference**).

> *Screenshot coming soon -- PPV overlay on blast pattern*

---

## 1. PPV Site Law

The simplest model. Computes Peak Particle Velocity using the empirical scaled-distance law.

**Formula:** PPV = K x (D / Q^n)^(-b)

| Parameter | Default | Description |
|-----------|---------|-------------|
| K | 1140 | Site constant (calibrated from blast monitoring) |
| b | 1.6 | Site exponent (attenuation slope, typical 1.5-2.0) |
| n | 0.5 | Charge weight exponent (0.5 = square-root scaling) |
| Cutoff Distance | 1.0 m | Minimum distance to avoid singularity |
| Target PPV | 0 mm/s | Black contour line at this value (0 = disabled) |

**MIC Bin Mode:** When the Time Window parameter is set to a value greater than 0, the model switches to Maximum Instantaneous Charge bin mode. Fixed-width bins group holes by firing time, and each bin's combined charge mass is used instead of individual hole masses. Essential for accurate near-field PPV prediction.

---

## 2. PPV Per-Deck

Per-deck variant of the **scaled-distance site law**. Instead of treating each hole as a single point charge, this model evaluates PPV separately for each charged deck using that deck's own mass and position (top / centre / base sampling in the shader).

**Superposition:** Like **PPV Site Law**, this path does **not** synthesise time-domain waveforms. It does **not** display constructive/destructive interference — it is **not** a coherent phase model. For coherent superposition, use **Blair Heavy**.

**Advantages over PPV Site Law:**
- Multi-deck holes show per-deck influence zones
- Air gaps between decks are naturally excluded
- Each deck uses its own mass, not the total hole mass

**Contrast with Temporal Lifecycle:** **PPV Per-Deck** does **not** propagate a detonation front along the column at VOD from the primer. If you need burn-front timing along the explosive column, use **Temporal Lifecycle** or **Blair Heavy**.

Same parameters as PPV Site Law, with an additional max display distance setting.

---

## 3. Heelan Original

Physics-based model implementing Heelan's (1953) analytical solution for radiation from a cylindrical charge. Divides each charge column into discrete elements and computes P-wave and SV-wave contributions with directional radiation patterns.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Rock Density | 2700 kg/m3 | Rock mass density |
| P-Wave Velocity | 4500 m/s | From seismic testing |
| S-Wave Velocity | 2600 m/s | From seismic testing |
| VOD | 5500 m/s | Fallback when no product VOD assigned |
| Elements | 20 | Charge discretisation count (max 64) |
| Q_p | 50 | P-wave attenuation factor (0 = elastic) |
| Q_s | 30 | S-wave attenuation factor (0 = elastic) |

**Features:**
- Supports angled holes (uses collar-to-toe axis)
- Reads actual charge column bounds from charging data
- Per-hole VOD from assigned explosive products
- Viscoelastic attenuation

---

## 4. Scaled Heelan

Bridges the empirical site law with Heelan's directional radiation patterns. Each element's waveform peak is given by the site law constants K and b, while retaining directional behaviour from the Heelan model. Developed by Blair & Minchinton (2006).

Same parameters as PPV Site Law plus rock velocity parameters from Heelan Original.

**Best for:** Compliance prediction with directional accuracy at sites with calibrated K and b values.

---

## 5. Blair Lite (Scaled Heelan 90%)

Same energy summation approach as Scaled Heelan but uses Blair's (2015) improved radiation patterns:

- P-wave radiation is non-zero on the hole axis (unlike pure Heelan)
- S-wave velocity is derived from P-wave velocity and Poisson's ratio (instead of separate input)
- Primer-aware element ordering
- Near-axial regularisation

| Parameter | Default | Description |
|-----------|---------|-------------|
| K | 1140 | Site constant |
| B | 1.6 | Site exponent |
| P-Wave Velocity | 4500 m/s | |
| Poisson's Ratio | 0.25 | S-wave velocity derived from this |
| VOD | 5500 m/s | Fallback |

---

## 6. Temporal Lifecycle (VOD ramp) (`temporal_lifecycle`)

GPU model that treats detonation as a **continuous ramp** propagating from the **primer** along the charge column at **VOD**, rather than firing each deck as a simultaneous point source. At an observation point, P-wave arrivals from positions along the charge occur at different times (Mach-cone style behaviour when VOD exceeds rock P-wave speed).

**Per-primer data:** The shader uses a **primer texture** (`uPrimerData`) together with the deck texture. Each primer row carries **deck index**, **primer fraction** along that deck (top toward base), **delay**, and **VOD**, so multiple primers per hole can drive separate burn fronts. Deck row 2 packs `primerFrac` in the fractional part of the auxiliary channel for primer-aware ordering (see `TemporalLifeCycleModel.js` in the Kirra source).

**Superposition:** Contributions are still combined with **incoherent (RMS) energy summation** — same limitation as Scaled Heelan family on GPU: **no** coherent interference fringes. The model shows **when** energy arrives from the moving detonation front under **`uDisplayTime`** filtering, not wave cancellation.

**Time Interaction:** Supported — use **Interact** to animate firing time and watch the sequence evolve.

---

## 7. Blair Heavy (Time-Domain)

Full **coherent** time-domain waveform superposition model — the **only** analytics path that superposes waveforms with **phase** so that **constructive and destructive interference** can appear in the result. **Runs on CPU via Web Workers** (not GPU), computing PPV on a 3D voxel grid for truly volumetric output. Uses multiple workers based on your computer's processor count.

| Parameter | Default | Description |
|-----------|---------|-------------|
| K | 700 | Site constant (gamma x SITEK) |
| B | 1.5 | Site exponent |
| Charge Exponent | 0.7 | |
| Gamma | 0.0455 | Waveform scaling factor |
| Poisson's Ratio | 0.25 | |
| Rock Density | 2500 kg/m3 | |
| P-Wave Velocity | 6000 m/s | |
| VOD | 5279 m/s | Fallback |
| Bandwidth | 10000 | Hz-like waveform parameter |
| Pulse Order | 6 | Waveform shape parameter |
| Elements per Deck | 12 | |

**Key differences from other models:**
- Coherent superposition — phases can cancel or reinforce (unlike GPU RMS models)
- Time-domain waveform synthesis with P/S arrival times
- Primer location controls detonation front direction and cumulative mass ordering
- Results are exported to GLB for safe persistence in IndexedDB
- Does not support time interaction or real-time updates

---

## Damage and Energy Models

### 8. Non-Linear Damage (Holmberg-Persson)

Computes cumulative damage index based on PPV threshold for crack initiation.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Rock UCS | 120 MPa | Unconfined Compressive Strength |
| Rock Tensile | 12 MPa | Typically UCS/10 |
| PPV Critical | 700 mm/s | Threshold for new crack initiation |
| K_hp | 700 | Holmberg-Persson site constant |
| Alpha | 0.8 | Charge length exponent |
| Beta | 1.4 | Distance exponent |

**Output:** Damage Index (0-1). Values approaching 1.0 indicate significant damage.

### 9. Jointed Rock Damage

Combines intact rock fracture with joint-controlled failure. Evaluates both dynamic stress against tensile strength and Mohr-Coulomb failure on joints.

Additional parameters: joint set angle, joint cohesion, joint friction angle.

**Output:** Damage Ratio (values > 1.0 = failure).

### 10. Borehole Pressure

Computes borehole wall pressure and its attenuation with distance from each charged deck.

**Formula:** P(R) = Pb x (a / R)^alpha

Where Pb = rho_e x VOD^2 / 8 (borehole wall pressure).

**Output:** MPa. Best for near-field wall damage assessment and presplit design.

### 11. Volumetric Powder Factor

Per-deck powder factor analysis. Each charged deck contributes its mass within a spherical volume at the observation distance.

**Output:** kg/m3 on a log scale.

---

## Related Topics

- [Analytics Overview](overview.md)
- [Flyrock Modelling](flyrock.md)
- [Charging Overview](../charging/overview.md)
