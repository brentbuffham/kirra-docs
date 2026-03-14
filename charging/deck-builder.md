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
