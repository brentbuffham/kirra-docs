# PDF / Print Export

Kirra can generate professional PDF reports and print-ready plan sheets from your blast design. PDF output is suitable for site safety briefs, blast documentation, regulatory submissions, and archive records.

---

## Generating a PDF Report

1. Click **File → Export** or press `Ctrl+E`
2. Select **PDF / Print** from the format list
3. Configure report options (see below)
4. Choose a save location and filename
5. Click **Export** (or click **Print** to send directly to a printer)

---

## Report Types

| Report Type | Contents |
|-------------|---------|
| **Blast Plan Sheet** | Scaled plan view of the blast with hole labels, timing, and legend |
| **Hole Data Summary** | Tabular list of all holes with key properties (ID, Easting, Northing, Depth, Delay, Charge) |
| **Charge Summary** | Per-hole charge deck table with product, mass, and stemming |
| **Timing Sequence** | Timing diagram with firing order and delay breakdown |
| **Full Package** | All of the above combined in a single PDF document |

---

## Plan Sheet Options

| Option | Description |
|--------|-------------|
| **Scale** | Set the printed map scale (e.g., 1:500, 1:1000, or auto-fit) |
| **Paper size** | A4, A3, A2, A1, Letter, or custom |
| **Orientation** | Portrait or landscape |
| **North arrow** | Show or hide a north arrow on the plan |
| **Scale bar** | Show or hide a graphical scale bar |
| **Legend** | Include a colour/symbol legend for timing or charge colouring |
| **Title block** | Enter project name, blast ID, designer name, date, and revision |
| **Colour scheme** | Default, colour-by-timing, colour-by-charge, or black-and-white |
| **Show labels** | Hole IDs, delay numbers, both, or none |

---

## Tabular Report Options

| Option | Description |
|--------|-------------|
| **Columns to include** | Select which hole property columns appear in the table |
| **Sort order** | By Hole ID, by Row/Column, by Easting, or by firing time |
| **Rows per page** | Control page breaks in long tables |
| **Include totals row** | Append a totals row showing summed depth, mass, etc. |

---

## Title Block

The title block appears at the bottom or side of each plan sheet. Fields:

| Field | Source |
|-------|--------|
| **Project** | Entered manually in the export dialog |
| **Blast ID** | From project settings |
| **Designed by** | Entered manually |
| **Date** | Auto-populated from the current date (editable) |
| **Revision** | Entered manually |
| **Company** | Set in **Project → Settings → Company Details** |
| **Logo** | Upload a company logo PNG/SVG in **Project → Settings → Company Details** |

---

## Printing Directly

Click **Print** in the export dialog to send the report directly to a connected printer without saving to PDF first. Page setup options (paper size, orientation, margins) apply to both PDF and direct print.

---

## Related Topics

- [Blast Statistics](../analysis/blast-statistics.md)
- [Timing Sequences](../blast-design/timing-sequences.md)
- [Charging Overview](../charging/overview.md)
