# Print to PDF

Kirra can generate professional PDF plan sheets directly from your current view. Use **Print to PDF** when you need blast documentation for site briefs, regulatory submissions, or archive records.

---

## How to Access

**File > Print > Print to PDF**

> *Screenshot: Print to PDF menu location*

---

## Two Rendering Modes

When you print to PDF, you choose how the content is rendered. Each mode suits different needs.

| Mode | Best For | Output |
|------|----------|--------|
| **Vector PDF** | Crisp lines and text, scalable graphics, smaller file size | Scalable vector drawing commands |
| **Raster PDF** | Pixel-perfect match to the screen, all visual effects (gradients, surfaces, images) | High-resolution image embedded in PDF |

**Vector PDF** is ideal when you need clean hole patterns, connectors, and KAD drawings that scale without loss of quality. Surfaces and images are rendered as a raster layer within the vector PDF.

**Raster PDF** is best when surfaces, gradients, or complex visuals must match exactly what you see on screen.

---

## Paper Size and Orientation

| Paper Size | Dimensions (Landscape) |
|------------|------------------------|
| A0 | 1189 × 841 mm |
| A1 | 841 × 594 mm |
| A2 | 594 × 420 mm |
| A3 | 420 × 297 mm |
| A4 | 297 × 210 mm |
| Letter | 11 × 8.5 in |
| Tabloid | 17 × 11 in |

**Orientation:** Portrait or Landscape

**Default:** A4 Landscape

Paper size and orientation are shared across all print modes, so your settings stay consistent whether you use Print to PDF or Print from Template.

---

## What Gets Printed

### 2D View

The 2D canvas view is printed with:

- Blast holes (collar, grade, toe, connectors)
- Surfaces (with gradient or texture)
- KAD drawings (points, lines, polygons, text)
- North arrow, scale bar, legend, and statistics in the footer
- Title block with blast name, date, scale, and designer

### 3D View

When you are in 3D mode, the current 3D view is rendered to PDF. The same paper size and orientation apply. A boundary overlay shows exactly what will appear on the page.

### Voronoi Overlay

If Voronoi cells are visible on the canvas, they can be included in the print output. Toggle Voronoi visibility before printing to control whether it appears.

### Surface Clipping

Surfaces are clipped to the print boundary so only the area within the map zone is rendered. This keeps the output clean and avoids overflow.

---

## Print Preview

Before printing, you can preview the output:

- **View > Print Preview** — or use the "Show Print Preview" checkbox in the print dialog
- A black boundary on the canvas shows exactly what will print (WYSIWYG)
- Works in both 2D and 3D modes

> *Screenshot: Print preview boundary on canvas*

---

## Print Dialog Options

When you choose **Print to PDF**, a dialog appears where you can:

- Enter a **file name** for the PDF
- Enter the **designer name** (appears in the title block)
- Select **Vector** or **Raster** output type

After confirming, the PDF is generated and saved to your chosen location.

---

## Related Topics

- [Print from Template (XLSX)](xlsx-templates.md)
- [Blast Statistics](../analysis/blast-statistics.md)
- [Voronoi Analysis](../analysis/voronoi.md)
- [Interface Tour](../getting-started/interface-tour.md)
