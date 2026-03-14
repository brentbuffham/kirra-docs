# Epiroc XML Export

Kirra exports blast designs to the **Epiroc iRedes XML** format, allowing you to send charge plans and timing data to Epiroc's Surface Manager and compatible loaders.

---

## Exporting to Epiroc XML

1. Click **File → Export** or press `Ctrl+E`
2. Select **Epiroc XML (iRedes)** from the format list
3. Configure export options (see below)
4. Choose a save location and filename
5. Click **Export**

---

## What Gets Exported

The iRedes XML export includes:

| iRedes Element | Kirra Source |
|---|---|
| `HoleId` | Hole ID |
| `CollarEasting`, `CollarNorthing`, `CollarElevation` | Collar coordinates |
| `ToeEasting`, `ToeNorthing`, `ToeElevation` | Calculated toe coordinates |
| `PlannedDepth` | Depth |
| `HoleBearing` | Bearing |
| `HoleDip` | Inclination |
| `HoleDiameter` | Diameter |
| `Delay` | Timing delay (ms) |
| `FiringTime` | Absolute firing time (ms) |
| `DeckCount` | Number of charge decks |
| `Deck[n].ExplosiveProduct` | Product name from the Kirra products database |
| `Deck[n].ExplosiveMass` | Explosive mass (kg) |
| `Deck[n].StemLength` | Stemming length (m) |

---

## Export Options

| Option | Description |
|--------|-------------|
| **iRedes version** | Select iRedes schema version (3.x or 4.x) |
| **Include charge data** | Export deck-loaded charge plan |
| **Include timing** | Export delay and firing time data |
| **Include planned geometry** | Export planned hole geometry alongside as-drilled (for comparison workflows) |
| **Coordinate reference system** | Embed the project CRS in the XML header |
| **Blast ID** | Set the blast event identifier (defaults to the project name) |
| **Mine code** | Optional mine site identifier required by some fleet systems |

---

## Workflow — Sending to Surface Manager

1. Export the iRedes XML from Kirra
2. Copy or transfer the file to the Epiroc Surface Manager host
3. In Surface Manager, use **Import Blast Plan** to load the XML
4. Assign the plan to the appropriate loader(s)
5. The loader receives the charge and timing plan wirelessly

Refer to your Epiroc Surface Manager documentation for site-specific import procedures.

---

## Schema Compatibility

| iRedes Version | Compatible Epiroc Systems |
|---|---|
| 3.x | SmartROC, FlexiROC (older firmware) |
| 4.x | SmartROC D65, T45 (current firmware), Surface Manager 3+ |

If you are unsure which version to use, consult your Epiroc field service representative or check the firmware version on your drill rigs.

---

## Related Topics

- [Epiroc iRedes Import](../importing/epiroc-iredes.md)
- [Kirra CSV Export](kirra-csv.md)
- [Timing Sequences](../blast-design/timing-sequences.md)
- [Charging Overview](../charging/overview.md)
