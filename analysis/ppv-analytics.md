# PPV Analytics — Vibration Prediction Shader

The PPV Analytics tool in Kirra provides a predicted **Peak Particle Velocity (PPV)** vibration map for a selected measurement point. It shades holes on the canvas by their estimated contribution to ground vibration at that point, helping you identify and manage vibration risk.

---

## Opening PPV Analytics

Press `Shift+P`, or go to **Analysis → PPV Analytics**, or click the **PPV** button in the toolbar.

---

## What is PPV?

**Peak Particle Velocity** (mm/s) is the standard measure of blast-induced ground vibration. Regulatory limits and structure damage thresholds are typically expressed in mm/s PPV at the nearest sensitive receiver.

Kirra uses the empirical scaled-distance formula to predict PPV:

```
PPV = K × (D / √Q)^(-n)
```

Where:
- `D` = distance from hole to measurement point (m)
- `Q` = maximum instantaneous charge (MIC) in kg — the largest charge mass firing within any 8 ms window
- `K` = site-specific attenuation constant (default: 1140)
- `n` = site-specific slope (default: 1.6)

> **Note:** The default K and n values are generic and should be replaced with site-specific constants determined from monitoring data.

---

## Setting the Measurement Point

1. In the PPV Analytics panel, click **Set Receiver Point**
2. Click the location on the canvas (or enter Easting/Northing coordinates directly)
3. Kirra draws a marker at the receiver point

You can add multiple receiver points and switch between them using the drop-down list.

---

## Configuring the PPV Model

Click **Settings** in the PPV Analytics panel:

| Parameter | Description |
|-----------|-------------|
| **K** | Site attenuation constant (amplitude factor) |
| **n** | Site slope (attenuation exponent) |
| **MIC window (ms)** | Maximum instantaneous charge window (default: 8 ms) |
| **Limit (mm/s)** | PPV limit line to display on the chart — holes above this threshold are flagged |

---

## Canvas Shader

When PPV mode is active, holes on the canvas are shaded by the predicted PPV at the selected receiver:

| Colour | Meaning |
|--------|---------|
| Green | PPV well below limit |
| Yellow | PPV approaching limit |
| Red | PPV exceeds the set limit |

The legend is shown in the bottom-left corner of the viewport with the PPV scale in mm/s.

---

## PPV Chart

The PPV Analytics panel also shows a **bar chart** of predicted PPV contributions over time (ms), grouped by the timing sequence. Peaks in the chart indicate moments when simultaneous (or near-simultaneous) hole firing produces the highest combined vibration at the receiver.

Use the timing design to spread firing times and flatten the PPV chart if peaks exceed the site limit.

---

## Distance Rings

Enable **View → PPV Contours** to display concentric rings around the receiver point showing iso-PPV lines at user-defined intervals (e.g., 5 mm/s, 10 mm/s, 25 mm/s).

---

## Limitations

- The PPV model is empirical and approximate — it does not account for local geology, topography, or waveform interference
- Results should always be validated against actual monitoring data
- This tool is a guide for design decision-making, not a compliance tool

---

## Related Topics

- [Blast Statistics](blast-statistics.md) — summary statistics
- [Timing Sequences](../blast-design/timing-sequences.md) — adjust timing to reduce PPV peaks
- [Voronoi Analysis](voronoi.md) — rock distribution analysis
