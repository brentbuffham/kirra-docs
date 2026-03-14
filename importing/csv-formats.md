# CSV Import

Kirra supports multiple CSV layouts for importing blast hole data. The format is detected automatically based on the number of columns, or you can use the Custom CSV import to manually map columns.

> *Screenshot coming soon*

---

## How to Import a CSV

1. Click **File > Import** or press `Ctrl+I`
2. Select your `.csv` file and click **Open**
3. Kirra counts the columns and selects the matching format automatically
4. Review the preview and click **Finish**

If the automatic detection picks the wrong format, see [Custom CSV Import](#custom-csv-import) below.

---

## Kirra CSV (Native Format)

Kirra's own CSV format supports **10 column-count variants**, ranging from a simple 4-column collar list up to a comprehensive 40-column export containing every blast hole attribute. All variants use comma-separated values with an optional header row.

### 4-Column Format (Collar Only)

Creates placeholder holes with collar position only (zero-length holes).

| Column | Field | Description |
|--------|-------|-------------|
| 1 | Hole ID | Unique hole identifier |
| 2 | Easting | Collar X coordinate (metres) |
| 3 | Northing | Collar Y coordinate (metres) |
| 4 | Elevation | Collar Z coordinate (metres) |

**Example:**

```
H001,477750.5,6771850.2,335.0
H002,477755.5,6771850.2,335.0
```

### 7-Column Format (Collar + Toe)

Full 3D hole geometry with collar and toe coordinates.

| Column | Field | Description |
|--------|-------|-------------|
| 1 | Hole ID | Unique hole identifier |
| 2 | Collar Easting | Collar X |
| 3 | Collar Northing | Collar Y |
| 4 | Collar Elevation | Collar Z |
| 5 | Toe Easting | Toe X |
| 6 | Toe Northing | Toe Y |
| 7 | Toe Elevation | Toe Z |

**Example:**

```
H001,477750.5,6771850.2,335.0,477751.2,6771849.8,320.0
```

### 9-Column Format (+ Diameter + Type)

Adds hole diameter and hole type classification.

| Column | Field | Description |
|--------|-------|-------------|
| 1 | Hole ID | |
| 2-4 | Collar Easting, Northing, Elevation | |
| 5-7 | Toe Easting, Northing, Elevation | |
| 8 | Diameter | Hole diameter in millimetres |
| 9 | Hole Type | e.g. Production, Presplit, Buffer |

### 12-Column Format (+ Timing + Colour)

Adds timing connector information for sequence design.

| Column | Field | Description |
|--------|-------|-------------|
| 1 | Hole ID | |
| 2-4 | Collar Easting, Northing, Elevation | |
| 5-7 | Toe Easting, Northing, Elevation | |
| 8 | Diameter | millimetres |
| 9 | Hole Type | |
| 10 | From Hole | Timing connection source hole ID |
| 11 | Delay | Timing delay in milliseconds |
| 12 | Colour | Hex colour code (e.g. #FF0000) |

### 14-Column Format (Kirra Standard)

The recommended Kirra exchange format. Adds an entity (pattern) name and entity type.

| Column | Field | Description |
|--------|-------|-------------|
| 1 | Entity Name | Blast pattern name (e.g. Pattern_A) |
| 2 | Entity Type | Always "hole" |
| 3 | Hole ID | |
| 4-6 | Collar Easting, Northing, Elevation | |
| 7-9 | Toe Easting, Northing, Elevation | |
| 10 | Diameter | millimetres |
| 11 | Hole Type | |
| 12 | From Hole | Timing connection source |
| 13 | Delay | milliseconds |
| 14 | Colour | Hex colour code |

**Example:**

```
Pattern_A,hole,H001,477750.5,6771850.2,335.0,477751.2,6771849.8,320.0,115,Production,,0,#FF0000
Pattern_A,hole,H002,477755.5,6771850.2,335.0,477756.2,6771849.8,320.0,115,Production,H001,25,#FF0000
```

### 20-Column Format (Extended Attributes)

Adds grade coordinates, subdrill, bench height, and calculated hole length.

| Column | Field |
|--------|-------|
| 15-17 | Grade Easting, Northing, Elevation |
| 18 | Subdrill Amount |
| 19 | Bench Height |
| 20 | Hole Length (calculated) |

### 25-Column Format (With Geometry)

Adds angle, bearing, subdrill length, and measured fields.

| Column | Field |
|--------|-------|
| 21 | Hole Angle (degrees from vertical) |
| 22 | Hole Bearing (degrees from north) |
| 23 | Subdrill Length (along hole) |
| 24 | Measured Length |
| 25 | Measured Mass |

### 30-Column Format (Full Metadata)

Adds pattern grid references and connector properties.

| Column | Field |
|--------|-------|
| 26 | Row ID |
| 27 | Position ID |
| 28 | Burden |
| 29 | Spacing |
| 30 | Connector Curve |

### 32-Column Format (With Timestamps)

Adds timestamps for measured data.

| Column | Field |
|--------|-------|
| 31 | Measured Length Timestamp |
| 32 | Measured Mass Timestamp |

### 35-Column Format (Complete Data)

The most comprehensive format, adding comments, visibility, and condition data.

| Column | Field |
|--------|-------|
| 33 | Measured Comment |
| 34 | Measured Comment Timestamp |
| 35 | Visible |

---

## BMM CSV (Blast Movement Monitor)

The BMM format is used by Blast Movement Monitor systems to track rock movement during blasting. Kirra can import BMM CSV files containing monitor positions and displacement vectors.

To import a BMM CSV:

1. Click **File > Import**
2. Select your BMM `.csv` file
3. Kirra detects the BMM column layout and imports the data

---

## Custom CSV Import

If your CSV file uses a non-standard column order or field names, use the Custom CSV importer:

1. Click **File > Import**
2. Select your `.csv` or `.txt` file
3. When the import wizard appears, click **Custom Mapping**
4. Kirra displays the first few rows of your file as a preview
5. Use the drop-down on each column header to assign it to a Kirra field
6. The importer uses smart row detection to skip header rows and find the first data row automatically
7. Click **Apply Mapping** then **Finish**

Supported delimiters are auto-detected: comma, tab, semicolon, and space.

---

## Tips

- **Coordinate ordering** — Kirra expects Easting (X), Northing (Y), Elevation (Z). If your data uses a different order, use the Custom CSV mapping to re-assign columns.
- **Header rows** — Optional. If present, Kirra skips them automatically.
- **File encoding** — UTF-8 or ASCII. Other encodings may cause garbled text.
- **Decimal separator** — Period (`.`) only. Comma-decimal locales are not currently supported.
- **Units** — Coordinates in metres, diameter in millimetres, delays in milliseconds. Values must be bare numbers with no unit suffixes.

---

## Related Topics

- [CSV Export](../exporting/csv-export.md)
- [DXF Import](dxf.md)
- [Hole Properties Reference](../reference/hole-properties.md)
- [Coordinate System](../reference/coordinate-system.md)
