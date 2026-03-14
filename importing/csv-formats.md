# CSV Import Formats

Kirra supports several CSV layouts for importing hole data. The format is detected automatically by column count, or you can manually select it in the import wizard.

---

## Accessing the CSV Import

1. Click **File → Import** or press `Ctrl+I`
2. Select **CSV** as the file type
3. Browse to your file and click **Open**
4. Kirra detects the column count and pre-selects the matching format
5. Review the column mapping in the wizard and click **Finish**

---

## Supported Formats

### 4-Column Format

Minimal format for basic hole locations.

| Column | Field |
|--------|-------|
| 1 | Hole ID |
| 2 | Easting |
| 3 | Northing |
| 4 | Elevation (collar) |

**Example:**
```
H001,354210.5,6728340.2,415.0
H002,354220.5,6728340.2,415.1
```

---

### 7-Column Format

Adds depth and basic drill geometry.

| Column | Field |
|--------|-------|
| 1 | Hole ID |
| 2 | Easting |
| 3 | Northing |
| 4 | Elevation (collar) |
| 5 | Depth |
| 6 | Bearing |
| 7 | Inclination |

---

### 9-Column Format

Adds diameter and subdrill.

| Column | Field |
|--------|-------|
| 1 | Hole ID |
| 2 | Easting |
| 3 | Northing |
| 4 | Elevation (collar) |
| 5 | Depth |
| 6 | Bearing |
| 7 | Inclination |
| 8 | Diameter |
| 9 | Subdrill |

---

### 12-Column Format

Adds pattern row/column reference and a free-text description field.

| Column | Field |
|--------|-------|
| 1 | Hole ID |
| 2 | Easting |
| 3 | Northing |
| 4 | Elevation (collar) |
| 5 | Depth |
| 6 | Bearing |
| 7 | Inclination |
| 8 | Diameter |
| 9 | Subdrill |
| 10 | Row |
| 11 | Column |
| 12 | Description |

---

### 14-Column Format

Full format including toe coordinates.

| Column | Field |
|--------|-------|
| 1 | Hole ID |
| 2 | Easting (collar) |
| 3 | Northing (collar) |
| 4 | Elevation (collar) |
| 5 | Depth |
| 6 | Bearing |
| 7 | Inclination |
| 8 | Diameter |
| 9 | Subdrill |
| 10 | Row |
| 11 | Column |
| 12 | Easting (toe) |
| 13 | Northing (toe) |
| 14 | Elevation (toe) |

---

## File Requirements

- File encoding: **UTF-8** or **ASCII**
- Delimiter: **comma** (`,`) — tabs and semicolons are also accepted and auto-detected
- Header row: **optional** — if present, Kirra skips it automatically
- Decimal separator: **period** (`.`) — comma-decimal locales are not currently supported
- No units prefix in cells — values must be bare numbers

---

## Column Mapping Override

If Kirra misidentifies the format, or if your file uses a different column order:

1. In the import wizard, click **Manual Mapping**
2. Use the drop-down on each column to assign it to a Kirra field
3. Click **Apply Mapping** and review the preview table
4. Click **Finish**

---

## Import Options

| Option | Description |
|--------|-------------|
| **Skip duplicate IDs** | Ignore rows where the Hole ID already exists in the project |
| **Overwrite existing** | Replace existing holes that share the same Hole ID |
| **Append** | Add all imported holes even if IDs collide (IDs are suffixed with `-2`, `-3`, etc.) |

---

## Related Topics

- [DXF Import](dxf.md)
- [Kirra CSV Export](../exporting/kirra-csv.md)
- [Hole Properties Reference](../reference/hole-properties.md)
