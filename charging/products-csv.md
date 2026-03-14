# Products CSV — Setting Up Your Explosives Database

Kirra uses a CSV-based explosives product database to power the Charging module. The products file defines the explosive and stemming products available when building charge decks.

---

## Locating the Products File

The products database file is stored at:

```
%APPDATA%\Kirra\products.csv
```

You can also set a custom path in **Project → Settings → Charging → Products File**.

---

## File Format

The products CSV uses comma-delimited values with a required header row.

### Required Columns

| Column | Description | Example |
|--------|-------------|---------|
| `ProductName` | Display name shown in the Deck Builder | `ANFO`, `Emulsion 70/30` |
| `Type` | Product category | `Explosive`, `Booster`, `Stemming` |
| `Density_kg_m3` | Bulk density in kg/m³ | `800`, `1150` |

### Optional Columns

| Column | Description | Example |
|--------|-------------|---------|
| `VOD_m_s` | Velocity of detonation (m/s) | `4500` |
| `RWS` | Relative Weight Strength (% vs. ANFO) | `100`, `127` |
| `RBS` | Relative Bulk Strength | `100`, `141` |
| `Colour` | Hex colour for display in the Deck Builder | `#FFA500` |
| `Supplier` | Product supplier name | `Orica`, `Dyno Nobel` |
| `Notes` | Free-text notes | `Bulk poured ANFO` |

---

## Example Products CSV

```csv
ProductName,Type,Density_kg_m3,VOD_m_s,RWS,RBS,Colour,Supplier,Notes
ANFO,Explosive,800,4500,100,100,#FFA500,Orica,Standard bulk ANFO
Emulsion 70/30,Explosive,1150,5200,127,141,#FF4500,Dyno Nobel,70% emulsion 30% ANFO blend
Heavy ANFO 50/50,Explosive,1000,4900,114,121,#FF6600,Orica,50% emulsion blend
Pentex Booster 400g,Booster,1500,,,,#FFFF00,Ensign-Bickford,400g PETN booster
Drill Cuttings,Stemming,1600,,,,,Site,Standard stemming
Crushed Stone,Stemming,1700,,,,,Site,6mm crushed aggregate stemming
```

---

## Adding or Editing Products

### In Kirra

1. Go to **Project → Settings → Charging → Products**
2. The built-in products editor shows a table of all products
3. Click **Add Row** to add a new product, or double-click an existing row to edit it
4. Click **Save** — changes are written back to the products CSV file

### Directly in a Text Editor or Spreadsheet

1. Open the products CSV file in Excel, LibreOffice Calc, or a text editor
2. Add or edit rows
3. Save as CSV (UTF-8, comma-delimited)
4. Restart Kirra or click **Reload Products** in **Project → Settings → Charging → Products**

---

## Product Types

| Type | Used For |
|------|---------|
| `Explosive` | Bulk explosive decks (ANFO, emulsion, blends) |
| `Booster` | Primer/booster units at the base of charge decks |
| `Stemming` | Inert material filling above the charge column |

> **Note:** Air decks are built-in to the Deck Builder and do not require a product entry.

---

## Sharing Products Across Projects

The products file is global by default (`%APPDATA%\Kirra\products.csv`). To use project-specific products:

1. Copy the products CSV to your project folder
2. In **Project → Settings → Charging → Products File**, click **Browse** and select the local file
3. Save the project — the local path is stored with the project file

---

## Related Topics

- [Charging Overview](overview.md)
- [Deck Builder](deck-builder.md)
- [Charge Rules](charge-rules.md)
