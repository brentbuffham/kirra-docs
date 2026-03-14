# Frequently Asked Questions

---

## General

### What is Kirra?
Kirra is a desktop blast design application for mining engineers and drill-and-blast contractors. It covers the full workflow from importing drill data through pattern design, charging, timing, analysis, and export to production systems.

### What operating systems does Kirra support?
Kirra runs on **Windows 10 (64-bit) and later**. macOS and Linux are not currently supported.

### Is Kirra free?
Kirra Design is a commercial application distributed under the **Kirra Licence**. See [About](../about.md) for licensing details. **Kirra Scheduler** is publicly available at no cost.

### Where can I download Kirra?
Visit [blastingapps.com](https://blastingapps.com) for the latest release download and licence information.

---

## Installation

### Where are project files stored?
Project files (`.kirra`) can be saved anywhere on your computer. Kirra does not enforce a specific save location.

### Where is the products database stored?
The global products CSV is at `%APPDATA%\Kirra\products.csv`. A project-specific path can be set in **Project → Settings → Charging → Products File**.

### Can I move my Kirra installation to another PC?
Yes — install Kirra on the new machine and copy your project files and products CSV. Re-activate your licence on the new machine via **Help → Licence Manager**.

---

## Importing Data

### What CSV formats does Kirra accept?
Kirra accepts 4, 7, 9, 12, and 14 column CSV formats. See [CSV Formats](../importing/csv-formats.md) for full details.

### My CSV import shows coordinates in the wrong location — what happened?
Usually a coordinate system mismatch or transposed Easting/Northing columns. Check your column mapping in the import wizard and verify the project coordinate system in **Project → Settings → Coordinate System**.

### Can Kirra import from Deswik, Maptek Vulcan, or other mine planning packages?
If those packages export DXF or CSV, Kirra can read them. See [DXF Import](../importing/dxf.md) and [CSV Formats](../importing/csv-formats.md).

### Why do some holes from my DXF import not appear?
DXF holes are imported from POINT, CIRCLE, or BLOCK INSERT entities. Check that the layer containing your holes is set to *Holes* (not *Ignore*) in the DXF import dialog, and that the entities are the correct type.

---

## Blast Design

### Can I design angled drill holes?
Yes. Set **Bearing** (azimuth, clockwise from North) and **Inclination** (degrees from vertical) on each hole. Kirra calculates the toe position automatically.

### How do I renumber holes after rearranging the pattern?
Select the holes to renumber (or `Ctrl+A` for all), then go to **Pattern → Renumber**. Choose the sort order and prefix.

### Can I undo an accidental deletion?
Yes — press `Ctrl+Z` to undo. Kirra supports unlimited undo/redo within a session.

---

## Charging

### How do I add my site's explosives products?
Edit the products CSV at `%APPDATA%\Kirra\products.csv` or use the built-in editor at **Project → Settings → Charging → Products**. See [Products CSV](../charging/products-csv.md).

### Does Kirra calculate explosive mass automatically?
Yes. Once you set the product and deck length in the [Deck Builder](../charging/deck-builder.md), mass is calculated from hole diameter, length, and product density.

### Can I apply the same charge design to many holes at once?
Yes — save a design as a template and use [Charge Rules](../charging/charge-rules.md) to auto-assign it based on hole properties (depth, diameter, etc.), or manually apply the template to selected holes.

---

## Timing

### What timing sequences does Kirra support?
Kirra supports manual delay assignment, along-row sequencing, and echelon (V/chevron) patterns. Custom tie-in connectors can be added for complex surface delay networks.

### What is the difference between Delay and Firing Time?
**Delay** is the programmed delay on the detonator. **Firing Time** is the calculated absolute time the hole fires, which includes any surface connector delays added between the initiation point and the hole.

### Kirra is flagging duplicate delays — is that a problem?
Two holes sharing an identical firing time means they fire simultaneously. This may be intentional (e.g., row firing) or a design error. Review the flagged holes and adjust delays as needed.

---

## Analysis

### What does the Voronoi analysis show?
It divides the blast area into one region per hole, showing the rock area (or volume) each hole is responsible for breaking. Useful for checking pattern evenness and calculating powder factor.

### The powder factor field in Statistics shows blank — why?
Powder factor requires Voronoi volume data. Open the Voronoi panel (**Shift+V**), set the bench height and rock density, and run the analysis. The powder factor in Statistics will then populate.

---

## Export

### Can I re-import a Kirra CSV that I previously exported?
Yes — Kirra recognises its own CSV layout and maps all columns automatically on import.

### Does the Epiroc XML export include charge data?
Yes, if charge data is present in the project. Enable **Include charge data** in the export dialog.

### Can I add our company logo to PDF reports?
Yes — go to **Project → Settings → Company Details** and upload a logo (PNG or SVG). It will appear in the PDF title block.

---

## Support

### Where do I report bugs or request features?
Visit [blastingapps.com](https://blastingapps.com) or the [Kirra Scheduler GitHub repository](https://github.com/brentbuffham/kirrascheduler) (for Kirra Scheduler issues).

### Is there a community forum?
Check [blastingapps.com](https://blastingapps.com) for community links and update announcements.
