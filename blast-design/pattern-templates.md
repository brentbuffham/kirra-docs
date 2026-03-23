# Pattern Templates

Pattern Templates allow you to save and reuse sets of pattern generation parameters. Instead of entering the same burden, spacing, diameter, and hole type values each time you create a pattern, you can store them as named templates and apply them with a single click.

---

## Why Use Templates?

On a typical mine site, you might use a small number of standard pattern configurations repeatedly -- for example:

- **Production 229mm** -- Burden 5.0 m, Spacing 6.0 m, 229 mm diameter, 1.5 m subdrill
- **Buffer 165mm** -- Burden 3.5 m, Spacing 4.0 m, 165 mm diameter, 1.0 m subdrill
- **Presplit 89mm** -- Spacing 1.2 m, 89 mm diameter, 0.5 m subdrill, 0 degree angle

Pattern Templates let you define these once and reuse them across your projects.

---

## Opening the Template Manager

Access the Pattern Templates dialog from the **Holes** toolbar panel. Click the **Pattern Templates** button to open the manager.

---

## Template Properties

Each template stores the following parameters:

| Property | Description | Default |
|----------|-------------|---------|
| **Template Name** | Unique name to identify the template | Required |
| **Blast Name** | Default entity/blast name prefix | (empty) |
| **Hole Type** | Classification (Production, Presplit, Buffer, etc.) | Production |
| **Diameter (mm)** | Hole diameter in millimetres | 115 |
| **Burden (m)** | Distance between rows | 3.0 |
| **Spacing (m)** | Distance between holes within a row | 3.3 |
| **Subdrill (m)** | Vertical distance below grade | 1.0 |
| **Hole Angle (deg)** | Angle from vertical (0 = vertical) | 0 |
| **Offset (m)** | Stagger offset for alternating rows | 0 |
| **Row Direction** | Direction for row numbering (return, forward, reverse) | return |
| **Collar Elevation** | Default collar Z value (optional) | (none) |
| **Grade Elevation** | Default grade Z value (optional) | (none) |

---

## Managing Templates

The template manager dialog shows a table of all saved templates with columns for Name, Type, Diameter, Burden x Spacing, Subdrill, Angle, and Row Direction.

### Add

Click **Add** to create a new template. Fill in the template name and parameters, then click **Save**.

### Edit

Select a template in the table and click **Edit** (or double-click the row) to modify its parameters.

### Duplicate

Select a template and click **Duplicate** to create a copy with "Copy of" prefixed to the name. Useful for creating variations of existing templates.

### Delete

Select a template and click **Delete**. A confirmation dialog appears before the template is removed.

---

## Applying a Template

When you open a pattern generation dialog (Add Pattern, Polygon Pattern, etc.), a template dropdown appears at the top. Select a template to populate all the dialog fields with the template values. You can then adjust individual values before generating the pattern.

---

## CSV Import / Export

Templates can be shared between projects and team members via CSV files.

### Export CSV

Click **Export CSV** to download all current templates as a comma-separated file. The CSV includes a header row and one row per template.

### Export Template

Click **Export Template** to download a blank CSV with example rows and column headers. This is useful for creating templates in a spreadsheet before importing.

### Import CSV

Click **Import CSV** to load templates from a CSV file. The importer:

1. Reads the CSV header row
2. Parses each data row into a template
3. Detects conflicts with existing templates (same name)
4. Prompts you to choose how to handle conflicts: skip, overwrite, or rename

### CSV Column Format

| Column | Type | Description |
|--------|------|-------------|
| `templateName` | Text | Unique template name |
| `blastName` | Text | Default blast/entity name |
| `holeType` | Text | Hole type classification |
| `holeDiameterMm` | Number | Diameter in mm |
| `burdenM` | Number | Burden in metres |
| `spacingM` | Number | Spacing in metres |
| `subdrillM` | Number | Subdrill in metres |
| `holeAngleDeg` | Number | Angle from vertical in degrees |
| `offsetM` | Number | Row offset in metres |
| `rowDirection` | Text | Row direction (return, forward, reverse) |
| `collarElevation` | Number | Collar Z (optional, leave blank for none) |
| `gradeElevation` | Number | Grade Z (optional, leave blank for none) |

---

## Persistence

Templates are saved to **IndexedDB** in the browser, alongside your blast holes, surfaces, and other project data. They persist across browser sessions and page reloads. Templates are also included in KAP project exports so they can be shared as part of a complete project file.

---

## Related Topics

- [Pattern Generation](pattern-generation.md) -- Generate patterns using templates
- [Adding Holes](adding-holes.md) -- Place individual holes manually
- [Editing Holes](editing-holes.md) -- Modify hole properties after creation
