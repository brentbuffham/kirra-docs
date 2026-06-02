# Blast Group Formulas

Blast groups let you tag holes by a **predicate** — a formula that returns **true** or **false** for each hole. The formula is entered in the **Formula** field of the **Assign Group** dialog. Holes where the expression is true become members of the group.

This is the **blast group** formula engine. It shares the `fx:` prefix with charging and print templates but is **not** the same evaluator. Do not use print functions (`sum`, `groupTable`, `mapView`) or charging functions (`ppvKG`, `massLength`, `chargeBase`) here.

See the [Formula Engine](formula-engine.md) hub for all three engines.

---

## Prefix

Always write **`fx:`** for new predicates (for example `fx:holeLength < 2`). Legacy **`=`** is still accepted internally but should not be used — spreadsheets may misinterpret a leading `=`.

The result **must be boolean**. If the formula has a syntax error or unknown variable, Kirra shows an error and the group is not created or updated.

---

## Variables

Each hole is evaluated with its own properties. You can use **formal** names or **short aliases**.

### Formal names

| Variable | Meaning |
| --- | --- |
| `holeLength` / `holeLengthCalculated` | Collar-to-toe length (m) |
| `holeDiameter` | Diameter (mm) |
| `holeType` | Hole type string |
| `holeAngle`, `holeBearing` | Angle (° from vertical), bearing (°) |
| `benchHeight`, `subdrillAmount`, `subdrillLength` | Bench and subdrill (m) |
| `burden`, `spacing` | Pattern metrics (m) |
| `startX`, `startY`, `startZ`, `endX`, `endY`, `endZ`, `gradeZ` | Coordinates / grade Z |
| `timingDelayMilliseconds` | Hole delay (ms) |
| `measuredLength`, `measuredMass` | Measured values |

### Short aliases

| Alias | Maps to |
| --- | --- |
| `length`, `depth` | Hole length |
| `diameter` | `holeDiameter` |
| `type` | `holeType` |
| `angle`, `bearing` | `holeAngle`, `holeBearing` |
| `bench`, `subdrill` | `benchHeight`, `subdrillAmount` |
| `delay` | `timingDelayMilliseconds` |
| `rowID`, `posID` | Row / position IDs |

If a name is not recognised, fix the spelling or use a formal name from the table above.

---

## Operators

- **Comparison:** `<` `>` `<=` `>=` `==` `!=`
- **Logical:** `&&` `||` `!`
- **Parentheses:** `( )`
- **String equality:** `fx:holeType == "Production"` (quote string literals)

This engine exposes **no functions** — only operators on variables. Use `&&` and `||` for combining conditions (not print-template string `&` concatenation).

---

## Examples

```
fx:holeLength > 2
fx:subdrill <= 0
fx:holeType == "Production"
fx:holeType != "Batter"
fx:diameter == 115 && length > 8
fx:burden >= 4 && (spacing >= 5 || spacing < 10)
fx:(type == "Production" || type == "Presplit") && depth < 3
fx:holeType == "Production" && burden >= 4.5
fx:depth < 3
```

---

## Common mistakes

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Error dialog, group not saved | Syntax error or unknown variable | Check parentheses and variable names |
| No holes selected | Wrong type comparison (number vs string) | Quote `holeType` and similar strings |
| Used `sum()` or `ppvKG()` | Wrong engine | Use [Print Formula Reference](../printing/pdf-print.md) or [Deck Builder Formula Guide](../charging/Deck%20Builder%20Formula%20Guide%20Examples.html) |

---

## Related topics

- [Formula Engine](formula-engine.md)
- [Deck Builder Formula Guide & Examples](../charging/Deck%20Builder%20Formula%20Guide%20Examples.html)
- [Print Formula Reference](../printing/pdf-print.md)
- [Formula Skill — Install & Use](formula-skill.md)
