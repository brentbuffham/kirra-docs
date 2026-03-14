# Hole Properties Reference

This page describes every field in the blast hole data structure in Kirra.

---

## Core Properties

| Field | Description |
|-------|-------------|
| **entityName** | Name or group identifier |
| **entityType** | Always `"hole"` |
| **holeID** | Unique hole identifier |
| **startXLocation, startYLocation, startZLocation** | Collar (top) coordinates |
| **endXLocation, endYLocation, endZLocation** | Toe (bottom) coordinates |
| **gradeXLocation, gradeYLocation, gradeZLocation** | Floor elevation point |
| **subdrillAmount** | Vertical distance (deltaZ) from grade to toe — positive = downhole |
| **subdrillLength** | Vector distance from grade XYZ to toe XYZ — positive = downhole |
| **benchHeight** | DeltaZ from collar to grade (always absolute) |
| **holeDiameter** | Diameter in mm (default 115) |
| **holeType** | `"Production"`, `"Presplit"`, `"Undefined"`, etc. |
| **holeLengthCalculated** | Distance from collar XYZ to toe XYZ |
| **holeAngle** | Angle from vertical (0° = vertical, 90° = horizontal) |
| **holeBearing** | Bearing from north (clockwise) |
| **fromHoleID** | Timing connection source hole |
| **timingDelayMilliseconds** | Delay in milliseconds |
| **colorHexDecimal** | Display colour |
| **measuredLength, measuredMass, measuredComment** | Field measurements |
| **burden, spacing** | Design parameters |
| **rowID, posID** | Pattern position identifiers |
| **visible** | Display toggle |

---

## Key Geometry Formulas

| Formula | Description |
|---------|-------------|
| **HoleLength** | `√(ΔX² + ΔY² + ΔZ²)` — distance from collar to toe |
| **VerticalDrop** | `StartZ - EndZ = BenchHeight + SubdrillAmount` |
| **HoleAngle** | `arccos(VerticalDrop / HoleLength)` — angle from vertical |
| **HoleBearing** | `atan2(ΔX, ΔY)` — bearing from north |

---

## Related Topics

- [Adding Holes](../blast-design/adding-holes.md)
- [Editing Holes](../blast-design/editing-holes.md)
- [Coordinate System](coordinate-system.md)
- [CSV Formats](../importing/csv-formats.md)
