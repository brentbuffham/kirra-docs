# Flyrock Modelling

Kirra generates 3D flyrock shroud surfaces representing the ballistic envelope of flyrock hazards around blast holes. Three empirical models are available to predict maximum throw distances and launch velocities.

> *Screenshot coming soon -- 3D flyrock shroud dome over blast pattern*

---

## Available Models

### 1. Richards & Moore (2004)

Empirical model with three distinct flyrock mechanisms:

| Mechanism | Governed By | Description |
|-----------|-------------|-------------|
| **Face Burst** | Burden | Horizontal projection of rock from the free face |
| **Cratering** | Stemming length | Vertical projection from the collar area |
| **Stem Eject** | Stemming + angle | Angled projection of stemming material |

**Formula (clearance distances):**

```
Face Burst = (K^2 / g) x (sqrt(W) / B)^2.6 x FoS
Cratering  = (K^2 / g) x (sqrt(W) / St)^2.6 x FoS
Stem Eject = Cratering_base x sin(2 x theta) x FoS
```

Where W = mass per metre (kg/m), B = burden, St = stemming, K = flyrock constant, FoS = factor of safety.

| Parameter | Default | Description |
|-----------|---------|-------------|
| Flyrock Constant (K) | 20 | Empirical coefficient (typical range 14-30) |
| Factor of Safety (FoS) | 2 | Safety multiplier (1-5) |
| Stem Eject Angle | 80 deg | Launch angle for stemming material (30-90 deg) |

> **Note (v1.0.11 fix):** A bug was corrected where the Factor of Safety was being applied twice -- once in the base distance calculation and again in the clearance distance. FoS is now applied exactly once at the clearance stage.

### 2. Lundborg (1975/1981)

Simple diameter-based upper-bound estimate:

```
Lmax = 260 x d^(2/3)    (d in inches)
```

Conservative, requires only hole diameter. Useful as a quick sanity check.

### 3. McKenzie (2009/2022)

Scaled Depth of Burial (SDoB) based prediction with contributing charge mass:

```
Range = 9.74 x (diameter_mm / SDoB^2.167)^(2/3)
```

Most sophisticated model -- accounts for stemming, charge confinement, and contributing charge length.

---

## 3D Shroud Generation

The flyrock shroud is generated using the **Chernigovskii ballistic envelope** -- the maximum altitude a projectile can reach at any horizontal distance for any launch angle:

```
altitude(d) = (V^4 - g^2 x d^2) / (2 x g x V^2)
```

This creates a parabolic dome above each hole. The shroud surface is built by:

1. Computing per-hole flyrock parameters from charging data
2. Creating a regular XY grid over the blast extent plus padding
3. Computing maximum envelope altitude at each grid point
4. Triangulating the grid and culling triangles outside the envelope

---

## Configuration

| Parameter | Default | Description |
|-----------|---------|-------------|
| Algorithm | Richards & Moore | Flyrock calculation method |
| Rock Density | 2600 kg/m3 | Rock mass density (1500-4000) |
| Grid Resolution | 40 | XY grid cell count (10-100, higher = smoother) |
| End Angle | 85 deg | Face steepness culling threshold |
| Transparency | 0.5 | Shroud opacity (0-1) |

---

## How to Use

1. Load blast holes with charging data assigned
2. Click the **Flyrock Shroud** button in the Surface toolbar
3. Select your algorithm and adjust parameters
4. Click **Generate** to create the 3D shroud
5. The semi-transparent dome appears over the blast pattern

The shroud is visible from both sides, rendered after the terrain for correct layering, and can be toggled on/off.

---

## Example Calculation (Richards & Moore)

For a 115mm hole, 12m bench height, 2m stemming, 3.6m burden, 1m subdrill, 1.2 kg/L explosive density, K=20, FoS=2:

- Charge length = 12 + 1 - 2 = 11m
- Mass per metre = 12.47 kg/m
- Face Burst = 78.2m (clearance)
- Cratering = 331.6m (clearance)
- Stem Eject = 113.4m (clearance)
- Maximum envelope height = 82.9m
- Maximum envelope radius = 165.8m

---

## Related Topics

- [Analytics Overview](overview.md)
- [PPV & Vibration Models](ppv-models.md)
- [Charging Overview](../charging/overview.md)
