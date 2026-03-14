# Products CSV Reference

Kirra uses a ZIP-based file format for charge configurations. The ZIP contains a products database and one or more charge rules — everything needed to define how holes are loaded. This page documents the file format, column definitions, deck syntax, and the complete formula reference.

---

## File Structure

A Kirra charge configuration is distributed as a ZIP file containing:

```
kirra-charging-config.zip
+-- products.csv          Product definitions (explosives, stemming, detonators, spacers)
+-- chargeConfigs.csv     Charge rule configurations (transposed format)
+-- README.txt            Quick-start instructions
```

---

## How to Import a Charge Configuration

1. Go to **File > Import Charging Config** (or use the Charging tab > Import Config)
2. Select the ZIP file
3. Kirra reads the products and charge rules into memory
4. Products appear in the Deck Builder's Product Palette
5. Charge rules appear in the Charging tab dropdown

---

## How to Export a Charge Configuration

1. Go to **File > Export Charging Config** (or Charging tab > Export Config)
2. Kirra downloads a ZIP file named `kirra-charging-config.zip`
3. Open the CSV files in Excel, LibreOffice Calc, or a text editor to review and modify
4. To re-import after editing, re-ZIP all files and import the ZIP

---

## products.csv — Product Definitions

The products file defines every explosive, stemming, detonator, booster, and spacer product available to the charging system.

### Required Columns

| Column | Description | Example |
|--------|-------------|---------|
| `ProductName` | Display name used in the Deck Builder and reports | `ANFO`, `Emulsion 70/30` |
| `Type` | Product category | `Explosive`, `Booster`, `Stemming`, `Detonator`, `Spacer` |
| `Density` | Bulk density in g/cc | `0.85`, `1.15` |

### Optional Columns

| Column | Description | Example |
|--------|-------------|---------|
| `VOD` | Velocity of detonation (m/s) | `4500` |
| `RWS` | Relative Weight Strength (% vs ANFO) | `100`, `127` |
| `RBS` | Relative Bulk Strength | `100`, `141` |
| `LengthMm` | Product length in mm (for spacers and cartridges) | `230` |
| `Colour` | Hex colour for display in the Deck Builder | `#FFA500` |
| `Supplier` | Product supplier name | `Orica` |
| `Notes` | Free-text notes | `Standard bulk ANFO` |

### Example

```
ProductName,Type,Density,VOD,RWS,Colour,Notes
ANFO,Explosive,0.85,4500,100,#FFA500,Standard bulk ANFO
Emulsion 70/30,Explosive,1.15,5200,127,#FF4500,70% emulsion 30% ANFO blend
Heavy ANFO 50/50,Explosive,1.00,4900,114,#FF6600,50% emulsion blend
Stemming,Stemming,1.60,,,,Crushed aggregate
GB230MM,Spacer,,,,,230mm gas bag
BS400G,Booster,1.50,,,,400g PETN booster
GENERIC-MS,Detonator,,,,,Non-electric millisecond detonator
```

---

## chargeConfigs.csv — Charge Rules

Charge rules are stored in a **transposed** format where rows are fields and columns are individual configurations. This makes it easy to add new rules by adding columns.

### Layout

```
Type,Description,Field,[1],[2],[3]
code,Charge config code,configCode,STNDFS,AIRDEC,MULTDEC
text,Human-readable name,configName,Standard Single Deck,Air Deck,Multi Deck
text,Description,description,Single deck,Gas bag air deck,Custom layout
number,Primer interval,primerInterval,0,0,0
deck,Inert decks,inertDeck,{1,3.5,Stemming,FL},{1,3.5,Stemming,FL},{1,3.5,Stemming,FL};{5,fx:holeLength-3.5,Stemming,VR}
deck,Coupled decks,coupledDeck,{2,fx:holeLength-3.5,ANFO,VR},{2,fx:holeLength-3.5,ANFO,VR},{2,fx:holeLength-7,ANFO,VR};{4,2.0,ANFO,FL}
deck,Decoupled decks,decoupledDeck,,,
deck,Spacer decks,spacerDeck,,{3,GB230MM},{3,GB230MM}
primer,Primers,primer,{1,fx:chargeBase-0.3,Det{GENERIC-MS},HE{BS400G}},{1,fx:chargeBase-0.3,Det{GENERIC-MS},HE{BS400G}},{1,fx:deckBase[4]-0.3,Det{GENERIC-MS},HE{BS400G}}
```

The first three columns (`Type`, `Description`, `Field`) are metadata — do not change them. Each column after that is one charge rule.

### Field Reference

| Field | Type | Description |
|-------|------|-------------|
| `configCode` | code | Short identifier for the rule (e.g. `STNDFS`) |
| `configName` | text | Human-readable name shown in the Charging tab |
| `description` | text | Free-text description |
| `primerInterval` | number | Interval between primers in long charges (metres) |
| `inertDeck` | deck | Inert (stemming) deck entries |
| `coupledDeck` | deck | Coupled explosive deck entries |
| `decoupledDeck` | deck | Decoupled explosive deck entries |
| `spacerDeck` | deck | Spacer deck entries |
| `primer` | deck | Primer entries |

---

## Deck Entry Syntax

### Inert, Coupled, and Decoupled Decks

Each deck entry uses brace notation. Multiple decks are separated by semicolons.

```
{position, length, product, FLAG}
```

| Field | Description |
|-------|-------------|
| **position** | Deck order from collar (1 = top, higher numbers go deeper) |
| **length** | Deck length — see Length Modes below |
| **product** | Product name, must match a name in `products.csv` |
| **FLAG** | Optional scaling flag: `FL`, `FM`, `VR`, or `PR` |

### Spacer Decks

Spacers have no length field — the length comes from the product's defined length.

```
{position, product}
```

### Primer Entries

```
{number, depth, Det{detonator}, HE{booster}}
```

| Field | Description |
|-------|-------------|
| **number** | Primer number (1, 2, 3, etc.) |
| **depth** | Depth from collar in metres, or a formula |
| **Det{name}** | Detonator product name inside `Det{...}` |
| **HE{name}** | Booster product name inside `HE{...}`, or `HE{}` for no booster |

---

## Length Modes

There are four ways to specify deck length:

| Syntax | Mode | Description | Example |
|--------|------|-------------|---------|
| `3.5` | Fixed | Exact length in metres | `{1, 3.5, Stemming, FL}` |
| `fx:holeLength - 4` | Formula | Calculated from hole properties | `{2, fx:holeLength-4, ANFO, VR}` |
| `m:50` | Mass | Length calculated from 50 kg at hole diameter | `{4, m:50, ANFO, FM}` |
| (product) | Product | Length derived from the product definition (spacers) | `{3, GB230MM}` |

---

## Scaling Flags

| Flag | Name | Behaviour |
|------|------|-----------|
| `FL` | Fixed Length | Deck keeps its exact metre length regardless of hole length |
| `FM` | Fixed Mass | Deck recalculates length to maintain the same mass at different diameters |
| `VR` | Variable | Formula is re-evaluated for each hole (auto-set for formula decks) |
| `PR` | Proportional | Deck scales proportionally with hole length (default if no flag specified) |

---

## Formula Reference

All formulas use the `fx:` prefix. This avoids conflicts with spreadsheet formula parsing when editing in Excel.

### Hole Property Variables

These variables refer to properties of the hole being charged:

| Variable | Description |
|----------|-------------|
| `holeLength` | Total hole length in metres (collar to toe) |
| `holeDiameter` | Hole diameter in millimetres |
| `benchHeight` | Vertical distance from collar to grade (metres) |
| `subdrillLength` | Distance from grade to toe along the hole (metres) |
| `stemLength` | Depth to the top of the first charge deck (metres) |

### Deepest Charge Variables

These refer to the deepest charge deck in the configuration:

| Variable | Description |
|----------|-------------|
| `chargeBase` | Depth from collar to the base of the deepest charge deck |
| `chargeTop` | Depth from collar to the top of the deepest charge deck |
| `chargeLength` | Length of the deepest charge deck |

### Indexed Deck Variables (All Deck Types)

Use these to reference any deck by its position number. They work for inert, coupled, decoupled, and spacer decks.

| Variable | Description |
|----------|-------------|
| `deckBase[N]` | Base depth of the deck at position N |
| `deckTop[N]` | Top depth of the deck at position N |
| `deckLength[N]` | Length of the deck at position N |

### Indexed Charge Variables (Explosive Decks Only)

These only work for coupled and decoupled (explosive) decks:

| Variable | Description |
|----------|-------------|
| `chargeBase[N]` | Base depth of the charge deck at position N |
| `chargeTop[N]` | Top depth of the charge deck at position N |
| `chargeLength[N]` | Length of the charge deck at position N |

> **Tip:** Prefer `deckBase[N]` over `chargeBase[N]` when referencing other decks. `deckBase[N]` works for all deck types, so you can reference stemming layers, spacers, and charge decks with the same syntax.

### Math Functions

The following standard math functions are available in formulas:

- `Math.min(a, b)` — smaller of two values
- `Math.max(a, b)` — larger of two values
- `Math.abs(x)` — absolute value
- `Math.sqrt(x)` — square root
- `Math.round(x)` — round to nearest integer
- `Math.PI` — the constant pi (3.14159...)

### Conditional Expressions (Ternary)

Use ternary expressions for if/then/else logic:

```
condition ? valueIfTrue : valueIfFalse
```

Comparison operators: `<`, `>`, `<=`, `>=`, `==`, `!=`

Logical operators: `&&` (AND), `||` (OR), `!` (NOT)

### massLength() Function

Calculates the deck length needed to achieve a target mass at the hole's diameter:

```
massLength(massKg, density)
massLength(massKg, "ProductName")
```

Where `density` is in g/cc, or use a product name in quotes to look up the density automatically.

The formula used internally:

```
length = massKg / (density x 1000 x PI x (diameter / 2000)^2)
```

The result varies per hole because it uses each hole's diameter.

---

## 20 Practical Formula Examples

### Length Formulas (Deck Sizing)

| # | Formula | Description | Use Case |
|---|---------|-------------|----------|
| 1 | `fx:holeLength * 0.3` | 30% of hole length | Variable stemming |
| 2 | `fx:holeLength - 8` | Hole length minus 8 m | Leave 8 m for explosives |
| 3 | `fx:holeLength - 2` | Fill to 2 m from bottom | Bottom charge with toe gap |
| 4 | `fx:Math.min(holeLength * 0.4, 6)` | 40% of hole, max 6 m | Capped proportional |
| 5 | `fx:Math.max(holeLength - 4, 2)` | Hole minus 4 m, min 2 m | Ensure minimum charge |
| 6 | `fx:subdrillLength - 0.5` | Subdrill minus 0.5 m | Fill subdrill zone |
| 7 | `fx:benchHeight - 1` | Bench height minus 1 m | Charge to near-grade |
| 8 | `fx:(holeLength - 4) * 0.5` | Half of available charge zone | Even split after stemming |

### Mass Formulas (Fixed Mass Decks)

| # | Formula | Description | Use Case |
|---|---------|-------------|----------|
| 9 | `m:50` | 50 kg at hole diameter | Fixed mass, variable length |
| 10 | `m:30` | 30 kg at hole diameter | Smaller mass deck |
| 11 | `fx:chargeTop[4] - massLength(50, 0.85)` | 50 kg ANFO above deck 4 | Mass-aware spacing |
| 12 | `fx:chargeTop[4] - massLength(50, "ANFO")` | 50 kg using product lookup | Auto density lookup |
| 13 | `fx:holeLength - 2 - massLength(30, 1.2)` | 30 kg emulsion above 2 m toe | Mass with toe gap |

### Primer Depth Formulas

| # | Formula | Description | Use Case |
|---|---------|-------------|----------|
| 14 | `fx:chargeBase - 0.3` | 0.3 m above deepest charge | Standard primer offset |
| 15 | `fx:deckBase[4] - 0.3` | 0.3 m above deck at position 4 | Multi-deck targeting (any type) |
| 16 | `fx:holeLength * 0.95` | Primer at 95% depth | Deep primer positioning |
| 17 | `fx:Math.max(chargeTop + 1, chargeBase - 0.5)` | At least 1 m below charge top | Safety positioning |

### Conditional Formulas

| # | Formula | Result Example |
|---|---------|---------------|
| 18 | `fx:holeLength < 5 ? holeLength * 0.4 : 2.0` | 4 m hole -> 1.6 m; 8 m hole -> 2.0 m |
| 19 | `fx:holeDiameter < 150 ? m:30 : holeDiameter < 200 ? m:50 : m:75` | 115 mm -> 30 kg; 165 mm -> 50 kg; 250 mm -> 75 kg |
| 20 | `fx:subdrillLength > 1 ? (holeLength - subdrillLength) * 0.8 : holeLength * 0.7` | Adapts charge strategy based on subdrill |

---

## Swap Conditions (Product Substitution)

Each deck entry can include swap rules that automatically substitute products based on hole conditions.

### Syntax

Add `swap:` followed by pipe-separated rules at the end of a deck entry:

```
{2, fx:holeLength-3.5, ANFO, VR, swap:w{WR-ANFO}|r{Emulsion}|t{Emulsion,C>50}}
```

### Condition Codes

| Code | Condition | Example |
|------|-----------|---------|
| `w` | Wet hole | `w{WR-ANFO}` — swap to water-resistant ANFO |
| `d` | Damp hole | `d{Emulsion}` — swap to emulsion |
| `r` | Reactive ground | `r{Emulsion}` — swap to a reactive-safe product |
| `t` | Temperature threshold | `t{Emulsion,C>50}` — swap if temperature exceeds 50 degrees C |

### Temperature Thresholds

The `t` code supports temperature comparison:

```
t{ProductName, C>50}     Celsius greater than 50
t{ProductName, F>=122}   Fahrenheit greater than or equal to 122
t{ProductName, C<30}     Celsius less than 30
```

### How Swap Rules Are Evaluated

1. Per-hole overrides are checked first (the hole's own swap rule takes priority)
2. Deck-level swap rules are checked as a fallback
3. The first matching rule wins
4. If no conditions match, the original product is used

---

## Overlap Pattern (Decoupled Decks)

For decoupled (cartridge) decks where the number of packages varies along the column, an overlap pattern can be specified:

```
{3, 3.0, PKG75mm, FL, overlap:base=3;base-1=2;n=1;top=1}
```

| Key | Description |
|-----|-------------|
| `base` | Number of packages at the bottom position |
| `base-1` | Number of packages one position above the base |
| `n` | Default number for all middle positions |
| `top` | Number of packages at the top position |

---

## Round-Trip Editing Workflow

1. **Export** your charge configuration as a ZIP (Charging tab > Export Config)
2. **Open** `chargeConfigs.csv` in Excel or a text editor
3. **Edit** formulas, add new configurations (new columns), or change products
4. **Save** the CSV and re-ZIP all files
5. **Import** the updated ZIP back into Kirra
6. **Apply** the rules to your holes and verify in the Section View

> **Tip:** To add a new charge rule, simply copy an existing column in `chargeConfigs.csv` and modify the values. The new rule will appear in the Charging tab after import.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Formula shows an error | Check the syntax; make sure it starts with `fx:`; verify product names match `products.csv` |
| Decks overlap in the Section View | Check position numbers; ensure total lengths do not exceed hole length |
| Primer appears in the wrong position | Use `deckBase[N]` for referencing inert or spacer decks; `chargeBase[N]` only works for explosive decks |
| Mass is wrong after changing diameter | Use the `FM` (Fixed Mass) scaling flag on mass-based decks |
| Swap condition not applied | Make sure the hole has its conditions set (e.g. mark it as "wet" in hole properties) |
| CSV opens incorrectly in Excel | Ensure you save as CSV (UTF-8, comma-delimited); avoid letting Excel auto-format formula cells |

---

## Related Topics

- [Charging Overview](overview.md) — introduction to the charging system
- [Deck Builder](deck-builder.md) — visual charge column designer
- [Charge Rules](charge-rules.md) — automatic charge assignment
