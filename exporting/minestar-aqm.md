# MineStar AQM Export

Kirra supports exporting blast designs to the **Caterpillar MineStar Terrain AQM** (Autonomous Quality Management) format. This allows blast hole positions and attributes to be sent to MineStar for integration with autonomous and semi-autonomous drill rigs managed by the MineStar system.

---

## What is MineStar AQM?

MineStar Terrain AQM is the Caterpillar system for managing drill plans, as-drilled data, and blast designs across a mine site fleet. The AQM format allows Kirra blast designs to be imported into Terrain, where they can be dispatched to drill rigs and tracked through execution.

---

## Exporting to MineStar AQM

1. Click **File → Export** or press `Ctrl+E`
2. Select **MineStar AQM** from the format list
3. Configure export options (see below)
4. Choose a save location and filename
5. Click **Export**

---

## What Gets Exported

| AQM Field | Kirra Source |
|---|---|
| `HoleId` | Hole ID |
| `Easting` | Collar Easting |
| `Northing` | Collar Northing |
| `Elevation` | Collar elevation |
| `PlannedDepth` | Depth |
| `HoleBearing` | Bearing |
| `HoleAngle` | Inclination |
| `HoleDiameter` | Diameter |
| `Bench` | Bench / project name |
| `Pattern` | Pattern ID (set in export options) |
| `FloorElevation` | Toe elevation (calculated) |

---

## Export Options

| Option | Description |
|--------|-------------|
| **Site code** | MineStar site identifier (provided by your MineStar administrator) |
| **Bench name** | Bench or pit identifier for this blast |
| **Pattern ID** | AQM pattern reference identifier |
| **Include charged status** | Mark holes as charged if charge data exists in Kirra |
| **Coordinate system** | Confirm the coordinate system to embed in the AQM header |

---

## Workflow — Sending to MineStar Terrain

1. Export the AQM file from Kirra
2. In MineStar Terrain, open the **Blast Design** module
3. Use **Import → AQM Blast Plan** to load the file
4. Verify hole positions on the Terrain map
5. Dispatch the plan to drill rigs as required

Consult your MineStar Terrain system documentation for site-specific import steps.

---

## Related Topics

- [Kirra CSV Export](kirra-csv.md)
- [DXF Export](dxf-export.md)
- [Epiroc XML Export](epiroc-xml.md)
- [Hole Properties Reference](../reference/hole-properties.md)
