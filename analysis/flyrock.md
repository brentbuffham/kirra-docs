# Flyrock Modelling

Kirra generates 3D flyrock shroud surfaces representing the ballistic envelope of flyrock hazards around blast holes. **Four** published models are available, and they will not agree with each other — that is expected, and reading the disagreement is part of using them.

> *Screenshot coming soon -- 3D flyrock shroud dome over blast pattern*

---

## ⚠️ Before you use these

> **There is a lot of difference between models. Use of these models is the user's responsibility, and it is on you to understand the repercussions.**

On one 246-hole test blast, the four models gave **132 / 176 / 232 / 248 m** for the same holes. A spread of about 2x is normal. They are independent empirical fits, not one model with four settings, and there is no setting that makes them agree.

Every model here produces an **indicative envelope with a stated factor of safety**, not a prediction. The authors themselves say so — McKenzie's own field validation found measured throw averaged **4.8x less** than predicted, with the absolute maximum measured at **56%** of predicted.

---

## Available Models

Each model uses a different subset of your blast data. **Inputs a model has no equation for are greyed out in the dialog**, so if a field is live, that model uses it.

| Model | Driven by | Ignores |
|---|---|---|
| Richards & Moore | K, burden, stemming, charge | rock density |
| Lundborg | hole diameter **only** | everything else |
| McKenzie | Scaled Depth of Burial | K, burden |
| Roth | rock density, burden, explosive VOD | K |

### 1. Richards & Moore (2004)

Three mechanisms — face burst, cratering and stem eject:

```
Face Burst = (K^2/g) x (sqrt(mass_per_metre) / burden)^2.6
Cratering  = (K^2/g) x (sqrt(mass_per_metre) / stemming)^2.6
Stem Eject = Cratering x sin(2 x theta)
```

**The K constant carries the rock type.** It is not a fudge factor — it is where rock enters this model, and because range scales as **K squared**, the choice is nearly a fourfold decision:

| Rock | K |
|---|---|
| Soft competent | 13.5 |
| Harder competent | 27 |
| Span of all published field data | 15 – 37 |

Measured site values run **15.4 – 21.9** across four limestone mines, and **28.3 in oxide vs 21.9 in sulphide within the same pit**. Calibrate K to your own measured throw where you can; do not trust a default.

> **Why there is no Stem Eject Angle setting.** The stem-eject distance is `cratering x sin(2θ)`, and `sin(2θ) ≤ 1` always, so it can never exceed cratering. The launch speed then divides the same `sin(2θ)` straight back out. No angle you could enter can change any result, so the field was removed rather than left as a dial that does nothing.

### 2. Lundborg (1974)

A diameter-only estimate, published for **two different situations** that differ by a factor of **6.5**:

```
Bench  (free face)      Lmax = 4.6 x diameter_mm^(2/3)
Crater (fully confined) Lmax = 30  x diameter_mm^(2/3)
```

**Both give metres.** Set the **Lundborg Condition** to *Bench* for a normal production blast — that is the default. *Crater* is for a fully confined charge or a misfire assessment.

For a 115 mm hole: bench **109 m**, crater **709 m**.

Lundborg also noted that cratering, and therefore flyrock ejection, is essentially eliminated once stemming exceeds **40 hole diameters**.

### 3. McKenzie (2009/2022)

Scaled Depth of Burial based, using the contributing charge mass:

```
SDoB      = (stemming + (m/2) x diameter_m) / cbrt(contributing_charge_kg)
Range     = 9.74 x SDoB^(-2.167) x diameter_mm^(2/3)
Fragment  = 3 x SDoB^(-2.167) x (2600 / rock_density) x diameter_mm^(2/3)
```

The two exponents apply to **separate terms** — `-2.167` to SDoB alone, `2/3` to the diameter alone.

**SDoB below 1.0 is the dangerous band**, and the range climbs steeply there, so this model reacts strongly to stemming and to almost nothing else.

#### The leading coefficient has been published three times

| Source | Coefficient |
|---|---|
| McKenzie 2009, 36th ISEE | 11 |
| McKenzie 2018, ISEE Australia | 10 |
| McKenzie 2022, Fragblast 13 | **9.74** — what Kirra uses |

The exponents are identical every time; only the constant moves. Kirra follows the most recent, which is also the version accompanied by the 30-hole field validation. Some published work uses 11, which is why those figures sit about **13% above** Kirra's for the same charge.

That 13% is small beside the model's own stated accuracy, so if you are comparing against a paper, check its date before assuming a discrepancy.

#### Rock density does not change McKenzie's range

> *"Particle density does not affect the maximum projection range of particles, but it does affect the size of particles which can achieve the maximum range."* — McKenzie (2009)

A denser fragment launches slower but carries better against air drag, and the two cancel. On McKenzie, **Rock Density changes the reported fragment size at the rim** and nothing else — a 400 m throw of gravel and a 400 m throw of a boulder are very different risks, and that is what the number is for.

If you want density to size the shroud itself, use **Roth**.

### 4. Roth (1979)

Derives the launch velocity from the **Gurney equation**, treating the burden rock as the mass being propelled. **The only model here in which rock density changes the throw.**

```
c/m   = charge_per_metre / (rock_density x burden^2)
v0    = 0.44 x VOD x sqrt(c/m)     ANFO
v0    = (VOD/3) x sqrt(c/m)        other explosives
Range = v0^2 / g
```

| Change | Effect on throw |
|---|---|
| Double the rock density | **halves** it |
| Double the burden | **quarters** it |
| Double the detonation velocity | **quadruples** it |

Everything except rock density is taken from the holes and their charging — including detonation velocity, read from each product's VOD.

---

## Measuring the real burden to a free face

Kirra stores **one burden per hole**, and on a designed pattern that is the *row* burden — often the same number on every hole. Richards & Moore's face-burst term and Roth's `b` both want the **minimum burden from the loaded part of the hole to the open face**, which is a different quantity.

Set **Free Face Surface** to measure it. Rays are cast from the **loaded interval only** (rock beside stemming is not what a face burst throws) over a **120 degree fan**, so a second open face off to the side is still found.

### It can only tighten, never relax

A measurement is used **only where it is smaller** than the hole's own burden. Every way this can go wrong — the wrong surface, a hole whose bearing points away from the face — produces a burden that is too *large*, and a larger burden means a *smaller* shroud. So:

**A wrong surface can never shrink your exclusion zone.** It will instead give an obviously huge one, and above 3x the design-burden result Kirra names the surface in a warning.

### Reading the report

```
Free face: Bench (inside)
- 13 of 246 holes tightened (3.3-4.5 m)
- 233 measured looser - kept their own burden
```

A high *measured looser* count is normal — those are interior holes. A high *found no face* count means the surface does not cover your pattern.

Leave it as **None** and every hole keeps its stored burden.

---

## 3D Shroud Generation

The shroud is the **parabola of safety** — the highest a projectile can reach at any horizontal distance, for any launch angle:

```
altitude(d) = (V^4 - g^2 x d^2) / (2 x g x V^2)
```

So the dome **height is always half its radius**. The surface is built by:

1. Computing per-hole flyrock parameters from charging data
2. Creating a regular XY grid over the blast extent plus padding
3. Computing maximum envelope altitude at each grid point
4. Triangulating the grid and culling triangles outside the envelope

Each hole contributes its own dome and the shroud is their union, so **the worst hole sets the outer edge**.

> **The grid scales with the shroud.** Spacing is derived from the envelope size, so every shroud has roughly the same triangle count and looks similar when zoomed to fit. Judge size against your blast pattern, not against the screen.

---

## Configuration

| Parameter | Default | Description |
|---|---|---|
| Blast Pattern | All Blast Holes | Which holes to shroud |
| Algorithm | Richards & Moore | Which published model |
| Free Face Surface | None | Measure real burden to this surface |
| Lundborg Condition | Bench | Bench or crater — Lundborg only, 6.5x apart |
| Flyrock Constant K | 20 | Site constant — Richards & Moore only |
| Factor of Safety | 2 | Multiplies the clearance distance |
| Rock Density | 2.6 **g/cm3** | Water 1.0, granite ~2.6, iron ore 3.3-4.0 |
| Extend Below Collar | 0 m | Continue the dome below collar level |
| Grid Resolution | 40 | Mesh density only — does not change the size |
| End Angle | 85 deg | Trims the steep rim |
| Transparency | 0.5 | Display only |

> **Rock Density is in g/cm3**, the same unit Kirra uses for explosive density. Enter **2.6**, not 2600.

---

## How to Use

1. Load blast holes with charging data assigned (Deck Builder)
2. Click the **Flyrock Shroud** button in the Analyse toolbar
3. Choose an algorithm — greyed-out fields are ones that model cannot use
4. Optionally pick a **Free Face Surface** to measure real burdens
5. Click **Generate Shroud**
6. Read the completion report, which stays open until you close it

**To compare models fairly**, keep Factor of Safety, Extend Below Collar, Grid Resolution and End Angle identical between runs, and use FoS = 1 while comparing — then apply your real factor of safety once at the end.

---

## Setting the exclusion zone

Take the **largest** of the models you trust, then apply a factor of safety. Two published rules, and they differ a lot:

**Terrock** (Richards & Moore's own):
- x2 for plant and equipment
- x4 for personnel

**McKenzie**, risk-based, from 30 field-measured holes:
- x1.2 gives a risk comparable to a fatal lightning strike (about 1 in 10 million)
- x1.4 is roughly 100x safer again

Which your site accepts is a **risk decision, not a calculation**.

---

## Example Calculation (Richards & Moore)

115 mm hole, 12 m bench, 2 m stemming, 3.6 m burden, 1 m subdrill, 1.2 g/cm3 explosive, K = 20, FoS = 2:

- Charge length = 12 + 1 - 2 = **11 m**
- Mass per metre = **12.46 kg/m**
- Face burst = **77.5 m**
- Cratering = **357.5 m** (this governs)
- Dome radius = **178.7 m**
- Dome height = **89.4 m**

The same hole on the other models, at FoS = 1: Lundborg bench **109 m**, McKenzie **203 m** with a **63 mm** fragment at the rim.

---

## Troubleshooting

| Check | Symptom if wrong |
|---|---|
| Rock Density in g/cm3 (2.6, not 2600) | Roth enormous or tiny |
| Lundborg Condition set to Bench | Lundborg 6.5x everything else |
| Extend Below Collar = 0 when comparing | every dome inflated |
| K matches your site's rock | Richards & Moore alone is off |
| Factor of Safety equal across runs | everything scaled together |
| Free Face Surface is the blasting face | a warning appears, shroud several times too big |
| *found no face* count is high | the surface does not cover the pattern |

Shrouds **accumulate** — nothing removes a previous one, and the largest dominates the view. If a change appears to do nothing, check you are not looking at an older shroud.

---

## Related Topics

- [Analytics Overview](overview.md)
- [PPV & Vibration Models](ppv-models.md)
- [Charging Overview](../charging/overview.md)
