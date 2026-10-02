# Print from Template (XLSX)

Kirra can generate formatted reports using custom XLSX spreadsheet templates. The template system reads your active blast data and populates fields, maps, and statistics into a professional layout. Use this when you need company-specific formats, multi-page reports, or data exported for further editing in Excel.

---

## How to Access

Click the **Import Export Print** button (file icon) in the menu bar and choose **Print** — or open the left sidenav (☰) and click **Print** under **Print Management**. Both open the **PDF Print** dialog.

![PDF Print dialog](../screenshots/PDFPrintDialog.png)
*The PDF Print dialog.*

The dialog's main fields are **Saved Template**, **Paper Size** and **Orientation** (**From Sheet** uses the custom template's own setting), **Print Preview**, **Blast Name**, **Designer**, **Title**, **Comment**, **Entity Filter** and **Output Format**. Footer buttons: **Save to Library**, **Formulas**, **Reference Pack**, **Delete**, **Help**, and **Print**.

---

## Template Options

### Kirra Inbuilt

The **Kirra Inbuilt** template is a built-in report format that requires no setup. It provides a title block, map zone, and a footer with north arrow, legend, and statistics, and supports:

- 2D and 3D views
- Voronoi overlays
- Surface clipping to the print boundary
- Paper size and orientation chosen in the dialog (XLSX output is not available)

Choose Kirra Inbuilt when you want a quick, standard report without creating a custom template.

### Custom XLSX Templates

Upload your own XLSX spreadsheet to create fully custom layouts. Your template can include:

- **Placeholder fields** — Cells that reference hole properties, pattern statistics, and project metadata
- **Formula cells** — Expressions that start with `fx:` and are evaluated against blast data
- **Render tokens** — Special placeholders for map views, legends, north arrows, and scale bars
- **Multiple sheets** — Each sheet becomes one page; multi-page templates use multiple sheets
- **Tabular layouts** — Tables of hole data, charge summaries, or timing sequences

---

Kirra print cells use the **`fx:`** print-template engine (not Deck Builder charging formulas). See the [Formula Engine](../formula-help/formula-engine.md) hub and the [Print Formula Reference](pdf-print.md) before mixing syntax from charge decks.

---

## Template Workflow

1. Choose **-- Select or Import --** in **Saved Template**, then click **Import Template (.xlsx)** (or pick a template you saved earlier)
2. Kirra reads cells, merged regions, styles, and images
3. **Evaluate** — Cells with the `fx:` prefix are evaluated against your blast data
4. **Output** — Choose PDF (raster or vector) or a populated XLSX spreadsheet

For large templates, Kirra uses a background process to parse the file. A progress dialog appears so the interface stays responsive.

---

## Reference Template

Click **Reference Pack** in the PDF Print dialog to download `Kirra-DesignPRINTReferenceTemplate.zip` — a starter template, the formula reference and the print skill — with examples of:

- Scalar variables (blast name, designer, date, hole count, drill metres, etc.)
- Iterated fields (hole length, diameter, coordinates per hole)
- Aggregation functions (sum, average, min, max)
- Render tokens for map views, legends, and north arrows

Use it as a starting point for your own custom templates.

---

## Example Templates

Downloadable example templates are available that demonstrate advanced features not covered by the basic reference template:

- **Voronoi Showcase** — All 10 Voronoi metric codes with paired legends across fixed, min-max, and default legend modes
- **Hole Section Grid** — `[+>]` grid pagination with `holeSection()` render tokens, `filter()` directives, and math-wrapped indexed fields
- **Multi-Map Views** — Multiple map views on one page with different display code combinations
- **Charging Report** — `blastSummary()`, `chargeSummary()`, `productList()`, `groupTable()`, and per-hole charging tables
- **Hole Data Table** — Per-row `[++]` tables with footer aggregations, filtered subsets, and measured data

See [Template Examples](template-examples.md) for detailed walkthroughs of each template, and [Print Formula Reference](pdf-print.md) for the complete list of all variables, functions, and display codes.

---

## Output Formats

| Format | Description |
|--------|-------------|
| **PDF Raster (High-Res Image)** | Pixel-based rendering; matches complex visuals exactly |
| **PDF Vector (Scalable)** | Scalable lines and text; smaller file size |
| **XLSX (Populated Spreadsheet)** | Populated spreadsheet; edit further in Excel (custom templates only) |

The XLSX output option is available only when using a custom template. Use it when you need to export data to Excel for further editing or reporting.

---

## Related Topics

- [Formula Engine](../formula-help/formula-engine.md) — three engines; print vs charging vs blast group
- [Print Formula Reference](pdf-print.md) — Complete list of all variables, functions, display codes, and render tokens
- [Template Examples](template-examples.md) — Downloadable example templates with detailed walkthroughs
- [Statistics & Voronoi](../analysis/statistics-voronoi.md)
- [Charging Overview](../charging/overview.md)
- [Interface Tour](../getting-started/interface-tour.md)
