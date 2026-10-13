# Tie Connect Multi

Ties a whole line of holes in two clicks. Every hole near the straight line between the first and
last hole is tied in order, each fed by the one before it — a row tie-up in one go.

---

## Before you start

- Pick a connector product chip, or type a **Delay Amount** — see
  [Connector Settings](connector-settings.md).
- Set **Connect Distance (m)** — how far off the line a hole may sit and still be tied in.
  Default **2.0**.

---

## Tie a line of holes

1. Click **Tie Connect Multi** on the **Connect** toolbar.
2. Click the **first** hole of the line.
3. Click the **last** hole. Every hole within **Connect Distance** of the line between them is tied,
   in order of distance from the first hole.
4. The tool stays on — click the first hole of the next line, or click the button again to finish.

A capture zone the width of **Connect Distance** follows the cursor after the first click, so you
can see which holes the line will take.

---

## Which holes are tied

| Rule | Detail |
|---|---|
| **Within the zone** | Holes between the two clicked holes, no further than **Connect Distance** from the line |
| **Visible and unlocked only** | Hidden or locked holes are never tied |
| **Same blast** | Only holes in the blast (or blasts) of the two holes you clicked. Copies of a pattern stacked on the same spot are left alone |
| **Order** | Nearest the first hole first. Each hole is fed from the one before it |

Every tie in the line takes the current **Delay Amount**, **Connector Color** and product.

---

## Special clicks

| Click | Result |
|---|---|
| The **same hole twice** | That hole becomes an **initiation point** |
| A trunk run, with a first hole already clicked | That hole is **re-attached** to the trunk |
| A trunk run, with a **CC** (cord connector) chip selected | The connector is **placed inline** on the trunk |
| A trunk vertex as the first click (2D only) | The line starts from the trunk's last hole, drawn from that vertex |

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| A hole in the row was skipped | It sits further off the line than **Connect Distance**, or is hidden or locked | Raise **Connect Distance**, or tie it with [Tie Connect](tie-connect.md) |
| A hole in the next row was tied too | **Connect Distance** is wider than the row offset | Lower **Connect Distance** below about half the burden |
| No firing times | Nothing upstream is an initiation point | Click the first hole twice |
| A wrong tie | Ties are not undone with **Ctrl+Z** | Remove it with [Connectors Remove](connectors-remove.md) |

---

## Other ways to use it

| Method | Result |
|---|---|
| [Tie Connect Continuous](tie-connect-continuous.md) | Several lines in one chain, without lifting the pen |
| [Trunk Branch Connect](trunk-branch-connect.md) | The same line kept as a trunk with branches |
| Data Explorer → right-click holes → **Reset Connections** | Clears the surface ties to start again |

---

## Related

- [Tie Connect](tie-connect.md)
- [Connector Settings](connector-settings.md)
- [Timing Sequences](timing-sequences.md)
- [Connect Toolbar](connect-toolbar.md)
