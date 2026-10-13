# Connectors Remove

Deletes one tie at a time — a hole-to-hole tie, an extra cord feed, or a branch to a trunk. Use it
to correct a tie-up without resetting the whole blast.

---

## Remove a tie

1. Click **Connectors Remove** on the **Connect** toolbar. Connector display is switched on.
2. Hover over a tie. The tie a click would remove is highlighted, and the cursor changes to a
   pointer.
3. Click the tie line, or press **Delete** / **Backspace** to remove the highlighted tie.
4. The tool stays on. Click the button again to finish.

Click on the line itself — a click on empty ground reads *"No tie under the cursor — click on the
connector line itself."* The pick reaches about 10 pixels either side of a line. Works in 2D and 3D.

---

## What each kind of tie does when removed

| Tie | Result |
|---|---|
| An **extra feed** on a hole (cord ties can feed a hole from several directions) | Only that feed goes |
| A hole's **main tie**, with another feed still reaching the hole | The other feed becomes the main tie |
| A hole's **main tie**, with nothing else feeding it | The hole is left tied to itself, delay 0 ms |
| A **branch** to a trunk | The hole is taken off the trunk, and its tie goes with it |

> **Warning:** A hole tied to itself is an **initiation point** — it fires at 0 ms. After removing
> its last tie, re-tie the hole, or the blast has an extra starting point. Removing a tie also
> changes the times of every hole downstream of it.

Hidden holes and hidden ties are never picked.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| *"No tie under the cursor — click on the connector line itself."* | The click missed the line | Zoom in, hover until the tie highlights, then click |
| A hole now fires at 0 ms | Its only tie was removed, so it is self-tied | Re-tie it with [Tie Connect](tie-connect.md) |
| **Ctrl+Z** does not bring the tie back | Tie edits are not on the undo list | Re-tie it with [Tie Connect](tie-connect.md) |

---

## Other ways to use it

| Method | Result |
|---|---|
| **Delete** / **Backspace** while hovering | Removes the highlighted tie |
| Data Explorer → right-click holes → **Reset Connections** | Clears every surface tie on the selected holes at once |
| [Self Connect Add IP](initiation-points.md) on an initiation point | Removes the initiation point instead of a tie |
| Tie the hole again with [Tie Connect](tie-connect.md) | Replaces its tie without removing it first |

---

## Related

- [Tie Connect](tie-connect.md)
- [Initiation Points](initiation-points.md)
- [Timing Sequences](timing-sequences.md)
- [Connect Toolbar](connect-toolbar.md)
