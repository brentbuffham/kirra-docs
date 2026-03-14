# Charge Rules

Charge Rules allow Kirra to automatically assign charge designs to holes based on hole properties — avoiding the need to manually apply templates hole-by-hole across large blasts. Rules are processed in priority order and the first matching rule wins.

---

## What Are Charge Rules?

A charge rule is a condition–action pair:

- **Condition** — criteria that a hole must meet (e.g., depth range, diameter, row)
- **Action** — the charge template to apply when the condition is met

Example:
> *If hole depth ≥ 15 m AND diameter = 102 mm → apply template "ANFO Standard Deep"*

---

## Opening Charge Rules

In the Charging Panel, click **Rules** (or go to **View → Charge Rules**).

---

## Creating a Rule

1. Click **New Rule**
2. Give the rule a **Name** (e.g., "Deep holes >15m")
3. Add one or more **Conditions**:

| Condition Field | Operator Options |
|-----------------|-----------------|
| Depth (m) | `=`, `<`, `>`, `≤`, `≥`, `between` |
| Diameter (mm) | `=`, `<`, `>`, `≤`, `≥` |
| Row | `=`, `contains` |
| Hole ID | `starts with`, `contains`, `ends with` |
| Custom attribute | `=`, `contains`, `is set` |

4. Set the **logical operator** between conditions: **AND** (all must match) or **OR** (any must match)
5. Select the **Template to apply** from the drop-down list of saved templates
6. Click **Save Rule**

---

## Rule Priority

Rules are evaluated from top to bottom. The **first matching rule** is applied and no further rules are tested for that hole.

To change priority:
- Drag rules up or down in the rules list
- Higher rules = higher priority

---

## Applying Rules to Holes

Once rules are defined:

1. Select the holes to process (or press `Ctrl+A` for all)
2. Click **Apply Rules** in the Charging Panel
3. Kirra evaluates each selected hole against the rules in order
4. Matching holes receive the specified charge template
5. A summary shows how many holes were charged and how many had no matching rule

### Options
| Option | Description |
|--------|-------------|
| **Skip already-charged holes** | Don't overwrite holes that already have a charge design |
| **Overwrite existing charges** | Replace existing charge designs if a rule matches |
| **Report unmatched holes** | Show a list of holes that no rule matched |

---

## Manually Overriding a Rule-Assigned Charge

After applying rules, you can still manually edit any hole's charge design in the [Deck Builder](deck-builder.md). Manual edits are preserved — re-running rules will skip that hole if **Skip already-charged holes** is enabled.

---

## Example Rule Set

| Priority | Name | Condition | Template |
|----------|------|-----------|---------|
| 1 | Shallow holes | Depth `<` 10 m | ANFO Short |
| 2 | Standard holes | Depth `between` 10–18 m | ANFO Standard |
| 3 | Deep holes | Depth `>` 18 m | ANFO Standard Deep |
| 4 | Large diameter | Diameter `≥` 152 mm | Emulsion Deck |

---

## Related Topics

- [Deck Builder](deck-builder.md)
- [Charging Overview](overview.md)
- [Products CSV](products-csv.md)
