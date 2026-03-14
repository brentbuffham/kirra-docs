# Kirra CSV Export

The Kirra CSV format is the primary file format for saving and transferring blast designs between Kirra installations. It stores all hole data, charge information, and timing in a single structured CSV file.

---

## Exporting to Kirra CSV

1. Click **File → Export** or press `Ctrl+E`
2. Select **Kirra CSV** from the format list
3. Configure export options (see below)
4. Choose a save location and filename
5. Click **Export**

---

## File Structure

The Kirra CSV file uses a standard comma-delimited format with a header row. The columns included depend on the data present in the project.

### Core Columns (always present)

| Column | Description |
|--------|-------------|
| `HoleID` | Unique identifier for the hole |
| `Easting` | Collar Easting (m) |
| `Northing` | Collar Northing (m) |
| `Elevation` | Collar elevation (m) |
| `Depth` | Planned drill depth (m) |
| `Bearing` | Drill azimuth (degrees, 0 = North) |
| `Inclination` | Drill angle from vertical (degrees) |
| `Diameter` | Hole diameter (mm) |
| `Subdrill` | Subdrill length (m) |

### Optional Columns (included when data exists)

| Column | Description |
|--------|-------------|
| `Row` | Pattern row reference |
| `Column` | Pattern column reference |
| `ToeEasting` | Toe Easting (m) |
| `ToeNorthing` | Toe Northing (m) |
| `ToeElevation` | Toe elevation (m) |
| `Delay_ms` | Assigned initiation delay (ms) |
| `FiringTime_ms` | Calculated absolute firing time (ms) |
| `ChargeLength` | Total loaded charge length (m) |
| `ExplosiveMass_kg` | Total explosive mass (kg) |
| `StemLength` | Stemming length (m) |
| `Product` | Explosive product name |
| `Description` | Free-text note on the hole |

---

## Export Options

| Option | Description |
|--------|-------------|
| **Include charge data** | Add charging columns to the export |
| **Include timing data** | Add delay and firing time columns |
| **Include toe coordinates** | Calculate and add toe XYZ columns |
| **Decimal places** | Number of decimal places for coordinate and measurement values (default: 3) |
| **Delimiter** | Comma (`,`) or semicolon (`;`) |
| **Include header row** | Output column headers in the first row (recommended) |

---

## Re-importing a Kirra CSV

A Kirra CSV can be re-imported into Kirra using the **CSV Import** workflow (see [CSV Formats](../importing/csv-formats.md)). Kirra will auto-detect the Kirra CSV layout and map all columns automatically.

---

## Example Output

```csv
HoleID,Easting,Northing,Elevation,Depth,Bearing,Inclination,Diameter,Subdrill,Delay_ms,FiringTime_ms
H001,354210.500,6728340.200,415.000,12.500,180.0,0.0,102,1.000,0,0
H002,354220.500,6728340.200,415.100,12.500,180.0,0.0,102,1.000,42,42
H003,354230.500,6728340.200,415.050,12.500,180.0,0.0,102,1.000,84,84
```

---

## Related Topics

- [CSV Formats (Import)](../importing/csv-formats.md)
- [DXF Export](dxf-export.md)
- [Epiroc XML Export](epiroc-xml.md)
