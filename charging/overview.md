# Charging Overview

The Kirra Charging module lets you design explosive charge decks for each hole in your blast, calculate total explosive mass, and produce charge sheets for the shotfirer. Charges are defined using your own explosives product database and can be applied individually or as templates across multiple holes.

---

## What the Charging Module Does

| Capability | Description |
|-----------|-------------|
| **Deck design** | Build multi-deck charge columns with boosters, bulk explosive, and stemming layers |
| **Product database** | Maintain a CSV-based catalogue of your site's explosive products |
| **Charge templates** | Save and reuse charge designs across patterns |
| **Charge rules** | Automatically assign charge designs based on hole depth, diameter, or custom rules |
| **Mass calculation** | Automatic calculation of explosive mass per deck and per hole |
| **Export** | Include charge data in Kirra CSV, Epiroc XML, and PDF reports |

---

## Opening the Charging Panel

Press `C`, or go to **View → Charging Panel**, or click the **Charging** button in the toolbar.

---

## Charging Workflow

1. **Set up your product database** — import or create an explosives products CSV so Kirra knows the density and properties of each product ([Products CSV](products-csv.md))
2. **Build a charge template** (or design deck-by-deck) — use the Deck Builder to stack explosive layers, boosters, and stemming ([Deck Builder](deck-builder.md))
3. **Apply charges to holes** — apply a template to selected holes, or use charge rules to auto-assign based on hole properties ([Charge Rules](charge-rules.md))
4. **Review mass calculations** — verify explosive mass, stemming lengths, and deck counts in the Charging panel summary table
5. **Export** — charge data is automatically included in Kirra CSV, Epiroc XML, and PDF exports

---

## Charging Panel Layout

| Section | Description |
|---------|-------------|
| **Hole list** | Shows all holes and their current charge status (charged / not charged) |
| **Deck view** | Visual stack of the charge column for the selected hole |
| **Mass summary** | Calculated explosive mass per deck and total for the selected hole |
| **Template list** | Saved charge templates available in the project |

---

## Charge Column Terminology

| Term | Meaning |
|------|---------|
| **Deck** | One layer in the charge column (e.g., bulk ANFO, emulsion, air deck) |
| **Booster** | A primer or booster unit placed at the bottom of a deck to initiate it |
| **Stemming** | Inert fill (drill cuttings, crushed stone) above the charge column |
| **Air deck** | A deliberate void between charge decks, used to modify fragmentation |
| **Column length** | Total length of the loaded section (hole depth minus stemming) |
| **Charge factor** | kg of explosive per tonne or per cubic metre of rock |

---

## Mass Calculation

Kirra calculates explosive mass for each deck using:

```
Mass (kg) = Deck Length (m) × π × (Diameter (m) / 2)² × Product Density (kg/m³) × Coupling Factor
```

- **Coupling factor** defaults to 1.0 (fully coupled) and can be adjusted per deck
- Product density is read from the [Products CSV](products-csv.md)
- Results are shown in the Charging panel and included in all charge exports

---

## Related Topics

- [Deck Builder](deck-builder.md)
- [Charge Rules](charge-rules.md)
- [Products CSV](products-csv.md)
- [PDF Export — Charge Summary](../exporting/pdf-print.md)
