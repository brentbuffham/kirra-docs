# Trunk Branch Connect

Lays a **trunk line** through open ground. Every hole in its swath is tied into the chain, and a
**branch** is drawn from each hole out to the trunk. The firing order is the same as a
[Tie Connect Continuous](tie-connect-continuous.md) run — the difference is that the trunk is kept
as its own line on the plan.

---

## Before you start

The trunk is made of the connector product you have selected:

| Selected chip | Trunk laid |
|---|---|
| **UNDEF** (nothing selected) or **HW** | Harness wire — named `HARN_TRUNK_…` |
| **DC** | Detonating cord — named `CORD_TRUNK_…` |
| **CC** | Refused — a cord connector is spliced into a line, not laid as one |

With a **CC** chip selected Kirra says *"A cord connector is spliced into a line, not laid as one.
Lay the trunk with a cord product, then place the connector on it."* Lay the cord first, then place
the connector with [Tie Connect](tie-connect.md).

Set **Connect Distance (m)** — the half-width of the swath. Default **2.0**. See
[Connector Settings](connector-settings.md).

---

## Lay a trunk

1. Select a connector product chip.
2. Click **Trunk Branch Connect** on the **Connect** toolbar. Connector display is switched on.
3. Click to place trunk vertices. Clicks do **not** snap to holes — the trunk follows the ground
   you click. A click right on a collar picks that hole — unless the hole is hidden or locked.
4. Holes within **Connect Distance** of each new segment are tied in as you go, in order along the
   trunk. A green swath follows the cursor so you can see what the next segment will take.
5. Finish with **Enter**, **Escape**, **double-click** or **right-click**. The status bar reads
   *"Trunk … complete. Click to start another."*

The tool stays on for the next trunk. A vertex placed on open ground takes its height from the
collars around it.

---

## Keys while drawing

| Key | Action |
|---|---|
| **Enter** / **Escape** | Finish the current trunk |
| **Backspace** / **Delete** | Remove the last segment. Holes it tied go back to self-connected |
| **Ctrl+Z** | Ignored while a trunk is part-drawn — use **Backspace** |

Once the trunk is finished, **Ctrl+Z** undoes the whole trunk in one step.

---

## Joining trunks

| First click lands on | Result |
|---|---|
| The free **end** of an existing trunk of the same kind | That trunk is continued: *"Continuing … — click to extend."* A cord trunk can be continued from either end |
| Part-way along a **cord** trunk, with a cord product | A node is added there and the new run is **knotted** to it — signal passes both ways through a knot |
| Part-way along a **harness** trunk | The new run branches from that trunk |

A later click on another cord trunk knots the run to that one too, so cord runs build into a network.

---

## What you get

- A trunk line, named in sequence per blast — for example `HARN_TRUNK_001_…`.
- Each captured hole tied to the hole before it, with the current **Delay Amount**, colour and
  product.
- A branch from each hole to its point on the trunk, coloured by the hole's downhole detonator
  product (or the hole colour if the hole is not charged).
- Moving the trunk later moves the branches with it.

A tie that would loop the chain back on itself is refused: *"… tie(s) would have looped the chain
back on itself — skipped."*

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| The trunk refuses to start | A **CC** chip is selected | Pick a **DC** or **HW** chip, or **UNDEF** |
| The trunk grabbed a hole you did not aim at | The click landed on a collar | Click a little further from the hole |
| The trunk has no firing times | Nothing upstream is an initiation point | Use [Self Connect Add IP](initiation-points.md) on the first hole, or on a cord run |
| Holes in the next row were tied | **Connect Distance** is wider than the gap between rows | Lower it, or walk the trunk down the middle of the gap |

---

## Other ways to use it

| Method | Result |
|---|---|
| Right-click a trunk | **Add Initiation**, **Remove Initiation**, **Add Node**, **Remove Node**, **Close Loop** / **Open Loop** (cord only), **Properties** and more |
| [Tie Connect](tie-connect.md) on a trunk run | Re-attach a hole to the trunk, or place a cord connector inline |
| [Connectors Remove](connectors-remove.md) on a branch | Takes that hole off the trunk |
| Data Explorer → right-click a trunk → **Convert to Hole Ties** | Turns the trunk into ordinary hole-to-hole ties |

---

## Related

- [Tie Connect Continuous](tie-connect-continuous.md)
- [Initiation Points](initiation-points.md)
- [Connector Settings](connector-settings.md)
- [Harness Wire Assignment](../charging/harness-wire-assignment.md)
- [Connect Toolbar](connect-toolbar.md)
