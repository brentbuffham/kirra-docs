# CSV Export

Kirra exports blast hole data to CSV in several column formats, from compact 12-column exports to comprehensive all-data exports.

> *Screenshot coming soon*

---

## How to Export

1. Click **File > Export**
2. Select one of the CSV export formats
3. Choose a save location and filename
4. The CSV file is downloaded

---

## Export Formats

| Format | Columns | Best For |
|--------|---------|----------|
| **12-Column** | ID, collar XYZ, toe XYZ, diameter, type, from-hole, delay, colour | CAD import, basic data exchange |
| **14-Column (Kirra Standard)** | Entity name, entity type + 12-column fields | Kirra round-trip, sharing designs |
| **35-Column (All Data)** | Complete export with grade, subdrill, bench height, geometry, measured data, timestamps, visibility | Full backup, detailed reporting |
| **Actual Data** | Measured/actual fields only | As-built documentation |
| **All Columns (Dynamic)** | Only columns that contain data | Flexible export, avoids empty columns |
| **Custom CSV** | User-defined column order | Matching downstream system requirements |

---

## 14-Column Format (Recommended)

The 14-column Kirra Standard format is the recommended exchange format:

| Column | Field |
|--------|-------|
| 1 | Entity Name (pattern name) |
| 2 | Entity Type (always "hole") |
| 3 | Hole ID |
| 4-6 | Collar Easting, Northing, Elevation |
| 7-9 | Toe Easting, Northing, Elevation |
| 10 | Diameter (mm) |
| 11 | Hole Type |
| 12 | From Hole (timing source) |
| 13 | Delay (ms) |
| 14 | Colour (hex) |

---

## Tips

- **Coordinate units:** Metres (Easting, Northing, Elevation)
- **Diameter:** Millimetres
- **Delays:** Milliseconds
- **File encoding:** UTF-8

---

## Related Topics

- [CSV Import](../importing/csv-formats.md)
- [DXF Export](dxf-export.md)
- [Hole Properties Reference](../reference/hole-properties.md)
