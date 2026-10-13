# Tie Connect Continuous

Builds a chain run by run, the way a shotfirer walks the bench. Click on holes or on open ground
between rows; every hole along each run is tied into one chain.

---

## Before you start

- Pick a connector product chip, or type a **Delay Amount** — see
  [Connector Settings](connector-settings.md).
- Set **Connect Distance (m)** — the half-width of each run's capture zone. Default **2.0**.

---

## Tie a chain

1. Click **Tie Connect Continuous** on the **Connect** toolbar. Connector display is switched on.
2. Click where the chain starts:
   - **a hole** — it becomes the head of the chain, so you can carry on from an existing tie-up;
   - **open ground** — the run starts there, and the first hole it reaches becomes the head.
3. Keep clicking, on holes or on open ground. Each click lays a run from the last click; every
   hole within **Connect Distance** of it is tied in, in order along the run.
4. End the chain with **Escape**, **right-click** or **double-click**. The tool stays on — the next
   click starts a new chain.

The last hole reached is the head for the next run. A run that reaches no holes still moves the
chain on, so you can step around an obstacle without breaking it. A capture zone follows the
cursor so you can see what the next run will take.

---

## Rules

| Rule | Detail |
|---|---|
| **Order** | Along the run, not by distance from the head — the head can be metres off the run |
| **No loops** | A hole tied earlier in the same chain is not tied again where two runs overlap |
| **Free start** | A chain started on open ground leaves its first hole untied. Make it an initiation point separately |
| **Ties** | Each takes the current **Delay Amount**, **Connector Color** and product. A cord product adds a feed; others replace the hole's tie |

---

## Special clicks

| Click | Result |
|---|---|
| The **chain head** again | It becomes an **initiation point**, and the chain ends: *"Hole … is now an initiation point — run ended."* |
| A trunk run, with a chain running | The head hole is **re-attached** to that trunk |
| A trunk run, with a **CC** (cord connector) chip selected | The connector is **placed inline** on the trunk |

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Holes in the next row were tied | **Connect Distance** is wider than the gap between rows | Lower it, or walk the run down the middle of the gap |
| The chain has no firing times | Its first hole is not an initiation point | Click the head again, or use [Self Connect Add IP](initiation-points.md) |
| A run went the wrong way | The chain head moved to the last hole reached | End the chain and start again from the hole you want |
| A wrong tie | Ties are not undone with **Ctrl+Z** | Remove it with [Connectors Remove](connectors-remove.md) |

---

## Other ways to use it

| Method | Result |
|---|---|
| [Trunk Branch Connect](trunk-branch-connect.md) | The same firing order, with the run kept as a trunk and a branch drawn to each hole |
| [Tie Connect Multi](tie-connect-multi.md) | One straight line at a time |
| **Escape**, **right-click**, **double-click** | End the current chain |

---

## Related

- [Tie Connect](tie-connect.md)
- [Connector Settings](connector-settings.md)
- [Timing Sequences](timing-sequences.md)
- [Connect Toolbar](connect-toolbar.md)
