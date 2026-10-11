# PPV & Vibration Models

The twelve models in the [Blast Analysis Shader](overview.md), with every setting under
**Model Parameters** and its default. Labels are as they appear in the dialog.

For which models can show waves reinforcing or cancelling, see
[Interference — what the models show](overview.md#interference--what-the-models-show).

---

## Site-law models

### Peak Particle Velocity (PPV)

The empirical scaled-distance law, one point charge per hole:

```
PPV = K × (D / Q^n) ^ −b
```

| Setting | Default | What it does |
|---|---|---|
| **Site Constant K** | 1140 | Site constant, from your monitoring |
| **Site Exponent b** | 1.6 | Attenuation slope, typically 1.5 – 2.0 |
| **Scaled Weight Exponent n** | 0.5 | Charge exponent (0.5 = square-root scaling) |
| **P-Wave Velocity (0 = instant)** | 0 m/s | Wave travel time; 0 treats arrival as instant |
| **Target PPV (0 = off)** | 0 mm/s | A target that splits the colour ramp — values under it use the reversed ramp |
| **MIC Bin Width (0 = per-hole)** | 0 ms | Above 0, holes firing in the same time bin are added into one charge (maximum instantaneous charge) |
| **Bin Offset** | 0 ms | Shifts where the bins start |

> **b must be greater than zero.** The slope describes vibration getting *weaker* with
> distance; zero or below describes it getting stronger, which no site law does. A fit from
> records taken at similar distances and charge sizes can return a negative slope.
> [Site Law Regression](site-law-regression.md) flags such a fit and will not apply it. **The
> fix is more spread, not more records** — add monitoring from a range of distances and
> charges.

### PPV (Per-Deck)

The same law worked out for each charged deck with its own mass and position, so air gaps
are left out and each deck has its own zone. It does not model the burn along the column —
use **Temporal Lifecycle** for that.

| Setting | Default |
|---|---|
| **Site Constant K**, **Site Exponent b**, **Scaled Weight Exponent n**, **P-Wave Velocity (0 = instant)**, **Target PPV (0 = off)** | As for PPV |
| **MIC Bin Width (0 = per-deck)** | 0 ms |
| **Bin Offset** | 0 ms |
| **Max Display Distance** | 200 m |
| **Min Distance** | 1.0 m |

---

## Heelan family

These divide each charge into elements and give each a directional radiation pattern, so the
vibration differs along and across the hole. They read the charge positions from the charging
and the VOD from the explosive products, and follow angled holes.

### Heelan Original (Blair & Minchinton 1996)

Heelan's solution for radiation from a cylindrical charge, with P and SV waves.

| Setting | Default |
|---|---|
| **Rock Density** | 2700 kg/m³ |
| **P-Wave Velocity** | 4500 m/s |
| **S-Wave Velocity** | 2600 m/s |
| **Fallback VOD** | 5500 m/s — used when a product has no VOD |
| **Pulse Bandwidth b** | 10000 1/s |
| **Charge Elements** | 20 (5 – 32) |
| **Quality Factor P** | 50 |
| **Quality Factor S** | 30 |
| **Target VPPV (0 = off)** | 0 |

### Scaled Heelan Fast (based on Blair & Minchinton)

Heelan's directional pattern, with each element's peak set by your site law. The dialog's
**Model Information** describes it as Kirra's own implementation.

| Setting | Default |
|---|---|
| **Site Constant K** | 1140 |
| **Site Exponent B** | 1.6 |
| **Charge Exponent A** | 0.8 |
| **Charge Elements** | 20 (5 – 32) |
| **P-Wave Velocity** | 4500 m/s |
| **S-Wave Velocity** | 2600 m/s |
| **P-Wave Weight** | 1.0 |
| **SV-Wave Weight** | 1.0 |
| **Target VPPV (0 = off)** | 0 |

### Blair Lite — Scaled Heelan 90% (Blair Radiation)

Scaled Heelan with Blair's radiation pattern: P-wave radiation is not zero along the hole, and
the S-wave speed comes from the P-wave speed and Poisson's ratio.

| Setting | Default |
|---|---|
| **Coherent Mode** | Off |
| **Site Constant K** | 1140 |
| **Site Exponent B** | 1.6 |
| **Charge Exponent A** | 0.8 |
| **Poisson's Ratio** | 0.25 |
| **Charge Elements** | 20 (5 – 64) |
| **P-Wave Velocity** | 4500 m/s |
| **Fallback VOD** | 5500 m/s |
| **P-Wave Weight** / **SV-Wave Weight** | 1 / 1 |
| **Min Distance** | 0.5 m |
| **Target VPPV (0 = off)** | 0 |

### Temporal Lifecycle (VOD Ramp)

Each charge detonates from its primer along the column at the explosive's VOD, instead of all
at once. Each primer carries its own deck, position and delay, so several primers in a hole
drive separate burn fronts. Contributions are added as energy — it shows **when** energy
arrives, not waves cancelling. Use **Interact** to watch it build.

| Setting | Default |
|---|---|
| **Site Constant K** | 1140 |
| **Distance Exponent B** | 1.6 |
| **Charge Exponent A** | 0.8 |
| **Integration Points** | 8 |
| **P-Wave Velocity** | 4500 m/s |
| **S-Wave Velocity** | 2600 m/s |
| **Fallback VOD** | 5500 m/s |
| **P-Wave Weight** / **SV-Wave Weight** | 1 / 1 |
| **Min Distance** | 0.5 m |
| **Toe Suppression** | 0.15 |
| **Subdrill Attenuation** | 0.5 |
| **Target VPPV (0 = off)** | 0 |

### Scaled Heelan (Blair & Minchinton, Time-Domain)

Full time-domain waveform synthesis — waves are added with their phase, so they can reinforce
or cancel. It runs in the background on the processor over a 3D grid, has
no **Interact**, and its result is saved with the surface.

| Setting | Default |
|---|---|
| **Site Constant K** | 700 |
| **Site Exponent B** | 1.5 |
| **Charge Exponent A** | 0.7 |
| **Gamma** | 0.0455 |
| **Poisson's Ratio** | 0.25 |
| **P-Wave Velocity** | 6000 m/s |
| **VOD (fallback)** | 5279 m/s |
| **Explosive Density (fallback)** | 1400 kg/m³ |
| **Bandwidth (B)** | 10000 |
| **DT Factor** | 0.125 |
| **Pulse Order (N)** | 6 |
| **Charge Elements** | 12 (4 – 27) |
| **Hole Diameter (fallback)** | 229 mm |
| **Max Time Steps** | 128 |
| **Time Stride** | 3 |
| **Max Display Distance** | 100 m |
| **Target VPPV (0 = off)** | 0 |

Above the parameters, **Display Time (ms):** picks one moment to show; −1 shows all decks.

### Ripple Tank — Forward Wave Field

Shows the P and S waves spreading from each hole as it fires, adding where they overlap —
bright where they reinforce, dark where they cancel. Positive is red, zero white, negative
blue. Use **Interact** to watch the fronts expand.

> **Warning:** The dialog describes it as an *"Educational visualisation — not a quantitative
> blast-prediction tool"*. It ignores geology, reflections and topography. Use it to build
> timing intuition, not for compliance or PPV reporting.

| Setting | Default | What it does |
|---|---|---|
| **Monitor Binding** | **Manual (use values below)** | Or take the settings from a [monitor](monitor-points.md) |
| **Wavelet Shape** | Ricker | **Ricker — physical single pulse (sharp)**, **Bell — smooth single wave (middle ground)**, **Damped — multi-crest wave-pool**, **Berlage — gradual onset + decay (seismic)**, **Measured — your bound monitor's recorded seed** |
| **Display Component** | **Combined P + S** | Or **P-wave only (compression front)**, **S-wave only (shear front)** |
| Site Constant K / Site Exponent B / **Charge Exponent n** | 1140 / 1.6 / 0.5 | |
| **P-Wave Velocity (cp)** / **S-Wave Velocity (cs)** | 5000 / 2600 m/s | |
| **P Visual Frequency (fP)** / **S Visual Frequency (fS)** | 100 / 60 Hz | |
| **# of Crest Waves** | 3 | |
| **S/P Amplitude Ratio** | 0.6 | |
| **Near-Field Cutoff** | 1.0 m | |
| **Wave-Front Rings** | Off | Draws the fronts as rings in 2D |

Settings that do not apply to the chosen wavelet or monitor are greyed out.

---

## Damage and energy models

### Holmberg-Persson Damage

Near-field PPV summed along each charged deck (Holmberg-Persson), compared with a critical PPV.
The output is in mm/s.

| Setting | Default |
|---|---|
| **H-P Constant K** | 700 |
| **H-P Alpha (α)** | 0.7 |
| **H-P Beta (β)** | 1.5 |
| **Charge Elements** | 20 |
| **Min Distance** | 0.3 m |
| **Critical PPV (0 = off)** | 700 mm/s |

### Jointed Rock Damage

Damage from intact-rock fracture, slip on a joint set (Mohr-Coulomb), or both. The output is a
damage ratio; above 1 means failure.

| Setting | Default |
|---|---|
| **Mechanism** | **Combined (worst of both)**; or **Intact tensile (rock fracture)**, **Joint shear-slip (Mohr-Coulomb)** |
| **H-P Constant K** / **H-P Alpha (α)** / **H-P Beta (β)** | 700 / 0.7 / 1.5 |
| **Rock Tensile Strength** | 10 MPa |
| **Rock Density** | 2700 kg/m³ |
| **P-Wave Velocity** | 4500 m/s |
| **Joint Set Angle** | 45° |
| **Joint Cohesion** | 0.1 MPa |
| **Joint Friction Angle** | 30° |
| **Charge Elements** | 20 |
| **Target Damage Ratio (0 = off)** | 0 |

### Borehole Pressure

Pressure on the borehole wall from each charged deck, falling with distance:
P(R) = Pb × (a / R)^α, where Pb = explosive density × VOD² / 8.

| Setting | Default |
|---|---|
| **Attenuation Exponent (α)** | 2.0 |
| **Fallback Explosive Density** | 1.2 kg/L |
| **Fallback VOD** | 5000 m/s |
| **Min Distance** | 0.3 m |
| **Max Display Distance** | 50 m |
| **Target Pressure (0 = off)** | 0 MPa |

### Volumetric Powder Factor

Explosive mass per volume of rock around each charged deck, on a log scale.

| Setting | Default |
|---|---|
| **Min Distance** | 0.3 m |
| **Max Display Distance** | 50 m |
| **Target PF (0 = off)** | 0 kg/m³ |

---

## Related

- [Blast Analysis Shader](overview.md)
- [PPV Voronoi Modes](ppv-voronoi-modes.md)
- [Site Law Regression](site-law-regression.md)
- [Flyrock Modelling](flyrock.md)
- [Charging Overview](../charging/overview.md)
