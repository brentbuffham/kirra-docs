# Tie Connect

Ties one hole to another — the target fires the tie's delay after the source. The toolbar button
is **Tie Connect / Cord Inline / Reconnect to Trunk**, because the same tool also splices a cord
connector into a trunk and moves a hole onto a trunk.

---

## Before you start

- Pick a connector product chip, or type a **Delay Amount** — see
  [Connector Settings](connector-settings.md). With **UNDEF** lit, ties carry no product.
- The blast needs an [initiation point](initiation-points.md) somewhere upstream, or the tied
  holes have no firing time.

---

## Tie two holes

1. Click **Tie Connect / Cord Inline / Reconnect to Trunk** on the **Connect** toolbar.
2. Click the **source** hole — the one that fires first.
3. Click the **target** hole. A tie is drawn from source to target and firing times recalculate.
4. The tool stays on. Click the next source hole, or click the button again to finish.

The tie takes the current **Delay Amount**, **Connector Color** and product. Tying a hole that
already has a tie replaces it — except with a cord product, which can feed a hole from more than
one direction and adds the new tie instead.

---

## Special clicks

| Click | Result |
|---|---|
| The **same hole twice** | That hole becomes an **initiation point**: *"Hole … is now an initiation point."* |
| A trunk run, with a source hole already clicked | The held hole is **re-attached** to that trunk |
| A trunk run, with a **CC** (cord connector) chip selected | The connector is **placed inline** on the trunk: *"Placed connector on …"* |
| A trunk vertex, with nothing held (2D only) | The tie starts from the trunk's last hole, drawn from the vertex you clicked |

A click that lands on a hole always counts as the hole, even where a trunk runs past it.

---

## What you get

- The target hole's **From Hole** becomes the source, and its delay becomes the tie's delay.
- A tie made with a product also adds the product's signal travel time.
- A hole that sat on a trunk is taken off it — its branch is replaced by the new tie.
- A hole that carried a [harness path](../charging/harness-wire-assignment.md) loses it. A path
  belongs to the hole a chain starts at, and this hole is now part-way along one.
- Hole times, timing contours and the time chart update straight away.

Works in 2D and 3D.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| The tied holes show no time | Nothing upstream is an initiation point | Click the first hole twice, or use [Self Connect Add IP](initiation-points.md) |
| The tie draws as a plain arrow | **UNDEF** is lit — no product | Pick a product chip before tying |
| *"Trunk-to-trunk connection is not supported yet — start from a hole."* | The tie started from a trunk vertex and then a trunk was clicked | Start from a hole |
| *"Trunk … has no holes on it yet."* | The trunk vertex clicked has no holes tied along it | Start from a hole |
| A wrong tie | Ties are not undone with **Ctrl+Z** | Remove it with [Connectors Remove](connectors-remove.md) |

---

## Other ways to use it

| Method | Result |
|---|---|
| [Tie Connect Multi](tie-connect-multi.md) | A whole line of holes in two clicks |
| [Tie Connect Continuous](tie-connect-continuous.md) | A zig-zag run through holes or open ground |
| Right-click a hole → **Edit Hole** → **Surface Product**, **Delay**, **Delay Colour** | Change one hole's tie without redrawing it — see [Timing Sequences](timing-sequences.md#tie-display-settings) |
| Data Explorer → right-click holes → **Reset Connections** | Clears the surface ties on the selected holes |

---

## Related

- [Connector Settings](connector-settings.md)
- [Initiation Points](initiation-points.md)
- [Timing Sequences](timing-sequences.md)
- [Connect Toolbar](connect-toolbar.md)
