# Epiroc iRedes XML Import

Kirra can import drill hole data exported from Epiroc drill rigs and fleet management systems in the **iRedes XML** format. This allows you to bring in as-drilled survey data directly into a Kirra blast design.

---

## What is iRedes?

iRedes is the Epiroc standard for exchanging drill and blast data between field equipment (drill rigs, loaders) and office planning software. The XML file contains:

- Hole locations (collar Easting/Northing/Elevation)
- As-drilled depth and geometry (bearing, inclination)
- Drill rig identification and timestamp
- Optional planned vs. as-drilled comparison data

---

## Importing an Epiroc iRedes XML File

1. Click **File → Import** or press `Ctrl+I`
2. Select **Epiroc iRedes (XML)** from the format list
3. Browse to your `.xml` file and click **Open**
4. The **iRedes Import** dialog opens

---

## iRedes Import Dialog

| Option | Description |
|--------|-------------|
| **Use planned data** | Import the planned hole positions and geometry |
| **Use as-drilled data** | Import the as-drilled positions and geometry (recommended for production blasts) |
| **Import both** | Import planned and as-drilled as separate layers for comparison |
| **Assign delays from XML** | If the iRedes file contains timing data, import delay assignments |
| **Coordinate system** | Select the coordinate system embedded in the file, or override with the project system |

Click **Import** to proceed.

---

## Field Mapping

Kirra maps iRedes fields to Kirra hole properties as follows:

| iRedes Field | Kirra Field |
|---|---|
| `HoleId` | Hole ID |
| `CollarEasting` | Easting |
| `CollarNorthing` | Northing |
| `CollarElevation` | Elevation (collar) |
| `PlannedDepth` / `DrillDepth` | Depth |
| `HoleBearing` | Bearing |
| `HoleDip` | Inclination |
| `HoleDiameter` | Diameter |
| `SubDrill` | Subdrill |
| `PatternRow` | Row |
| `PatternColumn` | Column |

Any iRedes fields not mapped above are stored as custom attributes on the hole.

---

## Planned vs. As-Drilled Comparison

When both planned and as-drilled data are imported:

- **Planned holes** are displayed with a dashed outline
- **As-drilled holes** are displayed as solid symbols
- Deviations between the two are shown in the **Statistics** panel
- Use **View → Colour by Deviation** to shade holes by positional error

---

## Common Issues

| Issue | Solution |
|-------|---------|
| File fails to parse | Confirm the file is a valid iRedes XML schema; open in a text editor to check for corruption |
| Coordinates appear wrong | Check the coordinate system embedded in the XML vs. your project setting |
| Missing depth data | Ensure the rig has completed the as-drilled survey and uploaded to the fleet system |
| Duplicate Hole IDs | Use the **Overwrite existing** or **Skip duplicate IDs** import option |

---

## Exporting Back to Epiroc Format

After blast design and timing in Kirra, export back to Epiroc XML with the blast package included. See [Epiroc XML Export](../exporting/epiroc-xml.md).

---

## Related Topics

- [CSV Formats](csv-formats.md)
- [DXF Import](dxf.md)
- [Epiroc XML Export](../exporting/epiroc-xml.md)
