# Blast Quality

The **Blast Quality** dialog answers two questions about a blast you have loaded: *how consistent is it?* and *is anything filed in the wrong place?*

It shows a distribution of any hole attribute you choose, and lists holes whose **row assignment disagrees with where they actually sit**. Open it from the **Blast Quality** button on the toolbar, beside Time Window.

**It never changes your data.** Nothing in this dialog edits a row, a position, a burden or a spacing — it measures and it points. Corrections stay your decision.

---

## The two controls

| Control | Purpose |
|---|---|
| **Blast** | Which shot to report on. Every loaded blast is listed, and a shot with contradictions carries its count in brackets — so the dropdown doubles as a summary of where the problems are. Hidden when only one blast is loaded. |
| **Chart** | Which attribute to plot. Sixteen are available (see below). |

The report always covers **one blast at a time**. Two shots pooled into one histogram produce a distribution that describes neither — a 2.6 m pattern and a 7 m pattern average into nonsense — and row numbers restart at 1 in every blast, so "row 26" is meaningless until the shot is named.

---

## Reading the distribution

**Several peaks usually means several design zones.** A blast with a batter row, a buffer row and production holes legitimately carries three different spacings, and they appear as three separate peaks. That is the design, not a fault — and it is the main reason the chart is worth looking at.

A few details that make the chart honest:

- **The axis is set by the consistent holes.** One badly-filed hole with a 108 m spacing would otherwise stretch the scale until every other hole collapsed into a single bar.
- **Anything beyond that range goes in one overflow bar**, past a dotted line and labelled — it is a bucket, not a measurement.
- **Every non-empty bar draws at least 5 px**, so a bin holding one hole is still visible and still clickable. The hover always reports the **true count**.
- **Red bars contain a hole whose row is contradicted.**

**Click any bar to highlight those holes** on the 2D canvas and in 3D. Click a row in the list below to highlight that single hole. **Close** clears the highlight.

**Refresh** recomputes everything from the current holes — fix a row, press Refresh, and the finding disappears.

---

## What it flags

A hole is reported when **the nearest hole in its own row is more than 4× further away than a hole in another row**.

That is a contradiction between the row and the ground. A hole's nearest neighbour should be in its own row — that is what a row *means*. When a hole sits 2 m from a hole in another row while its own row's nearest member is 108 m away, the row assignment is wrong, and the burden and spacing calculated from it were measured across that gap.

Two things this deliberately does **not** do:

- **It does not flag unusual spacing.** Burden and spacing are often multi-modal by design, so there is no single "typical" value to deviate from. A check like that would flag every batter row on every well-designed blast.
- **It does not correct anything.** Fix the row in Kirra, then Refresh.

> **The numbers behind it are per-blast.** Burden and spacing are always measured within one shot, so a neighbouring blast — however close — can never affect a hole's figures or trigger a false report.

---

## The sixteen charts

**Geometry**

| Chart | Notes |
|---|---|
| Spacing | Distance to the nearest hole **in the same row** |
| Burden | Distance to the nearest hole in **another row** |
| **Nearest Neighbour** | Distance to the nearest hole, full stop |
| Hole Length, Bench Height, Subdrill | Subdrill is signed — upholes chart below zero |
| Diameter, Angle, Bearing | Angle follows Kirra's convention: 0° is vertical |
| Collar RL, Grade RL, Toe RL | |

**Nearest Neighbour is the most robust health measure here.** Spacing and burden both depend on which row a hole was filed into, so a row mistake moves them. Nearest neighbour owes nothing to rows, ordering or bookkeeping — on a healthy pattern it sits at the smaller of burden and spacing, and a spread or a low tail is drilling reality.

**Area**

| Chart | Notes |
|---|---|
| Area (Cell) | The hole's clipped Voronoi cell — its real area of influence |
| Cell ÷ B×S | Actual influence area ÷ design burden × spacing |

**Cell ÷ B×S reads 1.0 when the design matches the ground.** Below 1 is a clipped or crowded hole; above 1 is a hole carrying more ground than it was designed for. It needs a real burden *and* spacing on the hole, and reports nothing otherwise rather than returning a number that only looks like a ratio.

> **Both area charts need the shot ticked in Voronoi Options.** Voronoi cells are only built for shots selected there. If the chart is empty it will tell you so — tick the blast, then Refresh.

**Charging and measured**

| Chart | Notes |
|---|---|
| Charge Mass, Powder Factor | Powder factor follows the blast's selected volume method, so it matches the printed plan |
| Measured Mass, Measured Length | |
| Stemming | Total inert deck length |

> **Zero means "no data" for these.** An uncharged hole or one never measured up is left off the chart rather than drawn at zero — otherwise every uncharged hole piles into a spike that buries the real distribution. An entirely uncharged blast shows an empty chart.

---

## Related

- [Analyse Toolbar](analyse-toolbar.md)
- [Statistics and Voronoi](statistics-voronoi.md) — Voronoi cells, area bases, powder factor
- [Time Window](time-window.md)
