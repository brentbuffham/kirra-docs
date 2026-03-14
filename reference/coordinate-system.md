# Coordinate System

This page explains how Kirra handles spatial coordinates, bearings, inclinations, and elevations.

---

## Coordinate Axes

Kirra uses UTM-style real-world coordinates:

| Axis | Direction |
|------|-----------|
| **X** | East-West (meters east) |
| **Y** | North-South (meters north) |
| **Z** | Elevation (meters altitude) |

---

## Canvas Display

The Kirra canvas uses:

- **Y-up** is North (+ve)
- **Y-down** is South (-ve)
- **West** is X (-ve)
- **East** is X (+ve)

Data values can be very large (e.g., UTM coordinates). Kirra translates coordinates based on the data centroid for display.

---

## Bearing Convention

Bearing is measured **clockwise from North**:

| Bearing | Direction |
|---------|-----------|
| 0° | North |
| 90° | East |
| 180° | South |
| 270° | West |

---

## Hole Angle vs. Dip (Mast Angle)

| Convention | Vertical | Horizontal |
|------------|----------|------------|
| **Hole Angle** | 0° = vertical (straight down) | 90° = horizontal |
| **Dip (Mast Angle)** | 90° = vertical | 0° = horizontal |

> **Note:** Other systems use different conventions. For example, Surpac uses -90 for vertical down. Always verify your source data when importing.

---

## 3D Rendering

The Three.js 3D view uses a **local origin** offset from the data centroid. This avoids floating-point precision issues when working with large UTM values. Z elevations are never transformed or scaled.

---

## Related Topics

- [Hole Properties Reference](hole-properties.md)
- [Surpac DTM / STR Import](../importing/surpac-dtm-str.md)
- [DXF Import](../importing/dxf.md)
- [CSV Formats](../importing/csv-formats.md)
