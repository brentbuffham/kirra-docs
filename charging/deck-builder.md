# Deck Builder

The Deck Builder is Kirra's visual tool for designing charge columns. It provides a drag-and-drop interface for stacking explosive decks, stemming layers, spacers, and primers into a complete charge design. You can apply the design to individual holes or save it as a reusable rule.

---

## Opening the Deck Builder

There are several ways to open the Deck Builder:

- In the **Charging tab**, click **Deck Builder**
- Select a hole, then right-click and choose **Edit Charge**
- Go to **Charging tab > New Rule** to create a reusable design

> *Screenshot coming soon*

---

## Deck Builder Layout

The Deck Builder dialog has three main panels:

| Panel | Description |
|-------|-------------|
| **Product Palette** (left) | Displays all loaded products. Drag a product onto the Section View to add a deck. |
| **Section View** (centre) | Interactive 2D cross-section of the hole showing all decks from collar to toe. Click to select a deck; drag deck boundaries to resize. |
| **Formula Builder** (right) | Drag-and-drop formula construction for setting deck lengths and primer positions. |

---

## Adding Decks

### By Dragging from the Product Palette

1. Locate the product you want in the Product Palette (left panel)
2. Drag it onto the Section View at the desired position
3. The deck appears in the hole cross-section with a default length
4. Adjust the length as needed (see below)

### By Type

1. Click **Add Deck** and choose the deck type: Inert, Coupled, Decoupled, or Spacer
2. Select a product from the dropdown
3. Enter the deck length or formula
4. The deck is added to the charge column

---

## Configuring Deck Properties

Select any deck in the Section View to edit its properties:

| Property | Description |
|----------|-------------|
| **Product** | The explosive or stemming product (from your products database) |
| **Length** | Deck length in metres, or a formula, or a mass value |
| **Scaling Mode** | How the deck adapts when applied to different hole lengths |
| **Swap Conditions** | Optional product substitution rules for wet, damp, or reactive holes |

### Setting Deck Length

You can set the length of a deck in four ways:

| Method | How to Enter | Example |
|--------|-------------|---------|
| **Fixed length** | Type a number in metres | `3.5` |
| **Formula** | Type a formula starting with `fx:` | `fx:holeLength - 3.5` |
| **Mass** | Type `m:` followed by kilograms | `m:50` (50 kg) |
| **Drag** | Drag the deck boundary in the Section View | Visual resize |

> **Note:** Dragging a deck boundary in the Section View overrides any formula on that deck. Use formulas for designs that need to adapt to different hole sizes.

### Scaling Modes

Each deck has a scaling mode that controls how it behaves when applied to holes of different lengths:

| Mode | Badge | Behaviour |
|------|-------|-----------|
| **Proportional** | (none) | Deck length scales proportionally with hole length (default) |
| **Fixed Length** | **F** (blue) | Deck keeps its exact length regardless of hole depth |
| **Fixed Mass** | **M** (orange) | Deck recalculates length to maintain the same explosive mass at different diameters |
| **Variable** | **VR** (green) | Formula is re-evaluated for each hole (set automatically for formula-based decks) |

---

## Using the Formula Builder

The Formula Builder panel provides a drag-and-drop interface for creating deck length and primer depth formulas.

### Variable Chips

Drag or click these variable chips to insert them into the formula bar:

| Variable | Description |
|----------|-------------|
| `holeLength` | Total hole length from collar to toe (metres) |
| `holeDiameter` | Hole diameter (millimetres) |
| `benchHeight` | Vertical distance from collar to grade (metres) |
| `subdrillLength` | Distance from grade to toe along the hole (metres) |
| `holeX` | Hole collar X coordinate — easting (metres) |
| `holeY` | Hole collar Y coordinate — northing (metres) |
| `chargeBase` | Depth to the base of the deepest charge deck (metres) |
| `chargeTop` | Depth to the top of the deepest charge deck (metres) |
| `chargeLength` | Length of the deepest charge deck (metres) |
| `stemLength` | Depth to the top of the first charge deck (metres) |
| `deckBase[N]` | Base depth of any deck at position N (works for all deck types) |
| `deckTop[N]` | Top depth of any deck at position N |
| `deckLength[N]` | Length of any deck at position N |

### Operator Chips

Drag or click operator chips: `+`, `-`, `*`, `/`, `(`, `)`, `?`, `:`, `&&`, `||`, and comparison operators.

### Building a Formula

1. Click on a deck to select it, then click **Edit** on the length field
2. In the Formula Builder, drag variable and operator chips into the formula bar (or type directly)
3. The formula bar shows a **live preview** of the calculated value
4. Click **Apply to Field** to set the formula on the selected deck

### Example: Stemming that is 30% of hole length

1. Drag `holeLength` into the formula bar
2. Drag `*` operator
3. Type `0.3`
4. The formula bar shows: `fx:holeLength * 0.3` with a preview like `= 3.60 m`
5. Click **Apply to Field**

### Custom Functions

The Formula Builder includes function chips that you can click or drag into the formula bar. These functions use the hole's properties (diameter, length, position) automatically.

#### massLength(kg, density)

Calculates the deck length required to hold a given mass of explosive at the hole's diameter.

| Parameter | Description |
|-----------|-------------|
| `kg` | Target mass in kilograms |
| `density` | Density in g/cc, or a product name in quotes |

```
fx:chargeTop[4] - massLength(50, 0.85)    // 50 kg ANFO above deck 4
fx:chargeTop[4] - massLength(50, "ANFO")  // Same, using product lookup
```

#### sdobStem(targetSDoB, density)

Calculates the stemming length required to achieve a target Scaled Depth of Burial. This is the Chiappetta SDoB formula used in flyrock risk assessment, solved in reverse to give you the stemming.

| Parameter | Description |
|-----------|-------------|
| `targetSDoB` | Target SDoB value in m/kg^(1/3) (typical: 1.2 to 1.8) |
| `density` | Explosive density in g/cc |

```
fx:sdobStem(1.5, 1.2)                    // Stem for SDoB 1.5, emulsion 1.2 g/cc
fx:sdobStem(1.8, 0.85)                   // Stem for SDoB 1.8, ANFO 0.85 g/cc
fx:Math.max(sdobStem(1.5, 1.2), 2.5)     // SDoB stem with a 2.5 m minimum
```

Use this as the **base depth** of a stemming deck. The charge deck below it fills the remainder of the hole. Each hole in the blast gets a stemming length tailored to its diameter and depth.

**Typical SDoB targets:**

| SDoB | Risk Level |
|------|------------|
| < 0.8 | Very high flyrock risk |
| 0.8 – 1.2 | High — review stemming |
| 1.2 – 1.8 | Normal blast conditions |
| 1.8 – 2.5 | Well-confined |
| > 2.5 | Over-confined |

#### ppvKG(monitorX, monitorY, targetPPV, K, b)

Calculates the Maximum Instantaneous Charge (MIC) in kilograms that keeps vibration below a target at a monitor location. The function uses the hole's collar coordinates (`holeX`, `holeY`) to compute the distance to the monitor point.

| Parameter | Description |
|-----------|-------------|
| `monitorX` | Monitor easting (metres) |
| `monitorY` | Monitor northing (metres) |
| `targetPPV` | PPV target in mm/s |
| `K` | Site constant from vibration regression |
| `b` | Site exponent from vibration regression |

```
fx:ppvKG(500000, 6000000, 5, 1140, 1.6)   // MIC (kg) for 5 mm/s at monitor
```

Each hole in the blast gets a different MIC because each hole is a different distance from the monitor. Holes closer to the monitor are allowed less charge; holes further away get more.

To convert the MIC to a charge column length, combine with `massLength`:

```
fx:deckBase[1] + massLength(ppvKG(500000, 6000000, 5, 1140, 1.6), 1.2)
```

This sets the charge deck base to: stemming base + the column length that holds the PPV-limited charge mass at 1.2 g/cc.

---

## Adding Primers

Primers are detonator assemblies positioned at specific depths within the charge column.

### How to Add a Primer

1. Click **Add Primer** in the Deck Builder
2. Set the primer depth using a fixed value (in metres) or a formula
3. Select the **Detonator** product
4. Select the **Booster** product (or choose "None" for detonating cord)

### Primer Depth Formulas

Primer depth formulas work the same as deck length formulas. Common patterns:

| Formula | What It Does |
|---------|-------------|
| `fx:chargeBase - 0.3` | Places the primer 0.3 m above the base of the deepest charge deck |
| `fx:deckBase[4] - 0.3` | Places the primer 0.3 m above the deck at position 4 (any deck type) |
| `fx:holeLength * 0.95` | Places the primer at 95% of hole depth |

### Multiple Primers

For multi-deck configurations, you can add multiple primers targeting different decks. Each primer has its own depth formula:

- Primer 1: `fx:deckBase[8] - 0.3` (targets the bottom charge deck)
- Primer 2: `fx:deckBase[4] - 0.3` (targets the upper charge deck)

---

## Swap Conditions (Product Substitution)

Each deck can carry swap rules that automatically substitute the product when certain hole conditions are met.

### Setting Swap Conditions

1. Select a deck in the Section View
2. In the deck properties panel, find the **Swap Conditions** field
3. Enter rules using condition codes:

| Code | Condition | Example |
|------|-----------|---------|
| `w` | Wet hole | Swap ANFO to water-resistant ANFO |
| `d` | Damp hole | Swap ANFO to emulsion |
| `r` | Reactive ground | Swap to a reactive-ground-safe product |
| `t` | Temperature threshold | Swap if borehole temperature exceeds a limit |

### How Swap Conditions Work

When a charge rule is applied to a hole:

1. Kirra checks the hole's condition flags (wet, damp, reactive, temperature)
2. If a condition matches a swap rule on a deck, the product is substituted
3. The original product name is recorded for reference
4. Per-hole overrides take priority over deck-level rules

---

## Deck Order

Decks are ordered from collar (top) to toe (bottom) using a position number. The Section View displays this visually:

```
Collar (0 m)
  +-------------------+
  |  Position 1       |  Stemming (Inert, Fixed Length)
  +-------------------+
  |  Position 2       |  ANFO (Coupled, Formula)
  +-------------------+
  |  Position 3       |  Gas Bag (Spacer)
  +-------------------+
  |  Position 4       |  ANFO (Coupled, Fixed Length)
  +-------------------+
  |  Position 5       |  Stemming (Inert, Formula)
  +-------------------+
Toe (hole length)
```

Position numbers do not need to be sequential — gaps are allowed. The engine sorts all decks by position number to determine the collar-to-toe order.

---

## Saving as a Rule

1. After designing your charge column, click **Save as Rule**
2. Enter a rule name and description
3. Set the scaling mode for each deck (Proportional, Fixed Length, Fixed Mass)
4. Review and edit primer depth formulas if needed (indexed formulas are auto-generated based on deck positions)
5. Click **Save** — the rule appears in the charge configuration list

Saved rules can be applied to any selection of holes and are included when you export charge configurations.

---

## Applying a Charge Design to Holes

### To the Current Hole

Click **Apply** in the Deck Builder to save the charge design to the currently selected hole.

### To Multiple Holes

1. Close the Deck Builder
2. Select the holes you want to charge
3. In the Charging tab, choose the saved rule from the dropdown
4. Click **Apply to Selected**
5. Kirra evaluates all formulas for each hole and generates the charge columns

---

## Previewing the Charge Column

The Section View in the Deck Builder shows a live preview of the charge design, including:

- Colour-coded deck types
- Deck lengths and masses
- Product names
- Scaling mode badges (F, M, VR)
- Primer positions with depth labels

As you change formulas or drag deck boundaries, the preview updates in real time.

---

## Related Topics

- [Charging Overview](overview.md) — introduction to the charging system
- [Products CSV Reference](products-csv.md) — CSV format and formula reference
- [Charge Rules](charge-rules.md) — automatic charge assignment
