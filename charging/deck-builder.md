# Deck Builder

The Deck Builder is the visual tool in Kirra for designing individual charge columns. Use it to stack explosive layers, boosters, and stemming into a complete charge deck design, either for a single hole or as a reusable template.

---

## Opening the Deck Builder

In the **Charging Panel**, either:
- Select a hole and click **Edit Charge**, or
- Click **New Template** to create a reusable design without applying it to a specific hole

---

## Deck Builder Interface

The Deck Builder shows a vertical schematic of the hole:

```
┌──────────────────────┐  ← Collar (top)
│  ████ Stemming ████  │  ← Stemming zone
│  ████   200 mm  ████ │
├──────────────────────┤
│  ░░░░ ANFO  ░░░░░░░  │  ← Deck 1: bulk explosive
│  ░░░░ 4.5 m  ░░░░░░  │
│  ░░░░ 52.4 kg ░░░░░  │
├──────────────────────┤
│  ▲▲▲▲ Booster ▲▲▲▲  │  ← Booster at toe
└──────────────────────┘  ← Toe (bottom)
```

Each segment is colour-coded by product type.

---

## Adding a Stemming Layer

1. Click **Add Layer → Stemming**
2. Enter the stemming length (m)
3. Stemming is always placed at the top of the column (collar end)
4. Kirra validates that stemming plus charge length does not exceed hole depth

---

## Adding a Charge Deck

1. Click **Add Layer → Explosive Deck**
2. Select the **Product** from your product database (populated from your [Products CSV](products-csv.md))
3. Enter the **Deck Length** (m)
4. Kirra automatically calculates the mass based on hole diameter, length, and product density
5. Repeat to add multiple decks (multi-deck designs)

### Air Deck
1. Click **Add Layer → Air Deck**
2. Enter the air deck length (m)
3. Air decks appear as an empty (white) section in the column schematic

---

## Adding a Booster / Primer

1. Click **Add Layer → Booster**
2. Select the booster product
3. Set placement: **Toe**, **Base of Deck**, or **Top of Deck**
4. Kirra adds the booster mass to the deck total

---

## Editing Layers

- **Drag** layers up or down the column to reorder them
- **Double-click** a layer to edit its product or length
- **Right-click → Delete** to remove a layer

---

## Layer Coupling Factor

Each explosive deck has an optional **coupling factor** (0–1) to account for air-coupled or cartridged explosive:

- `1.0` — fully coupled (bulk explosive filling the borehole)
- `< 1.0` — partially coupled (cartridge or airgap; reduces effective mass)

Set the coupling factor in the **deck properties** panel on the right side of the Deck Builder.

---

## Saving as a Template

Click **Save as Template** at the top of the Deck Builder to save the current design as a named charge template. Templates are stored with the project and can be applied to other holes via the Charging Panel or [Charge Rules](charge-rules.md).

---

## Applying to the Current Hole

Click **Apply** to save the charge design to the currently selected hole. The Charging Panel updates immediately with the new mass and deck count.

---

## Summary Table

The Deck Builder displays a summary at the bottom:

| Field | Value |
|-------|-------|
| Total charge length (m) | Sum of all explosive + booster deck lengths |
| Total stemming (m) | Sum of all stemming layers |
| Total hole use (m) | Charge + stemming; must equal hole depth |
| Total explosive mass (kg) | Sum of all deck masses |
| Charge factor (kg/t) | Calculated from rock density and Voronoi volume (if available) |

---

## Related Topics

- [Charging Overview](overview.md)
- [Charge Rules](charge-rules.md)
- [Products CSV](products-csv.md)
