# Coordinate System

This page explains how Kirra handles spatial coordinates, and the conventions used for bearings, inclinations, and elevations.

---

## Coordinate Axes

Kirra uses a standard **right-hand Cartesian** coordinate system:

| Axis | Direction |
|------|-----------|
| **X (Easting)** | Positive to the East |
| **Y (Northing)** | Positive to the North |
| **Z (Elevation)** | Positive upward |

All hole locations are stored and displayed as Easting, Northing, Elevation (E, N, Z) in metres.

---

## Coordinate Reference System (CRS)

Kirra does not perform coordinate transformation internally. You must ensure that all data (holes, surfaces, DXF files) are in a consistent coordinate system before loading them into the same project.

### Setting the Project CRS

1. Go to **Project → Settings → Coordinate System**
2. Enter a description (e.g., `MGA2020 Zone 54`, `Mine Local Grid`, `UTM Zone 50S`)
3. Optionally set the **False Easting** and **False Northing** offset if working in a local mine grid offset from a geodetic origin
4. Click **Save**

The CRS description is embedded in export files (e.g., Epiroc XML, MineStar AQM) where the format supports it.

---

## Bearing Convention

Kirra uses **azimuth** for drill bearing, measured **clockwise from North**:

| Bearing (degrees) | Direction |
|-------------------|-----------|
| 0° | North |
| 90° | East |
| 180° | South |
| 270° | West |
| 360° | North (same as 0°) |

This matches the standard surveying convention used across the mining industry.

> **Dip vs. Bearing (Surpac convention):** Surpac STR files may use a different convention (dip direction). Check your source data and convert if necessary.

---

## Inclination Convention

Kirra measures inclination as the **angle from vertical**:

| Inclination (degrees) | Drill Direction |
|-----------------------|-----------------|
| 0° | Straight down (vertical) |
| 15° | Slightly inclined |
| 25° | Typical production blast angle |
| 90° | Horizontal |

> **DIP convention:** Some software (e.g., Surpac, Datamine) records inclination as **dip from horizontal**, where 90° = vertical. If importing from such a source, subtract from 90° to convert: `Kirra inclination = 90° − source dip`.

---

## Elevation and Datum

- All elevations in Kirra are in **metres above datum** (AHD for Australian projects, or the site datum)
- Collar elevation is the survey elevation at the hole collar
- Toe elevation is calculated downward from the collar using depth, bearing, and inclination

### Bench Elevation
For bench blasting, the collar elevation typically equals the bench crest elevation, and the toe elevation is approximately the bench floor elevation minus subdrill.

---

## Local Mine Grid vs. Geodetic Coordinates

Many mine sites use a **local mine grid** — a rotated, translated, or scaled coordinate system specific to the site. Kirra works with whatever coordinates you provide. Ensure that:

1. All imported files (CSV, DXF, DTM) use the same grid
2. Export files intended for external systems (GPS, fleet management) are transformed to the required coordinate system before or after export using your mine survey tools

---

## Canvas Display

The Kirra canvas displays Easting on the horizontal axis and Northing on the vertical axis. North is always up. The bottom-left corner of the canvas shows the current cursor position in E/N/Z as you move the mouse.

---

## Related Topics

- [Hole Properties Reference](hole-properties.md)
- [Surpac DTM / STR Import](../importing/surpac-dtm-str.md)
- [DXF Import](../importing/dxf.md)
- [CSV Formats](../importing/csv-formats.md)
