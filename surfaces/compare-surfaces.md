# Compare Surfaces

**Compare Surfaces** colours one surface by how far it sits from another — the design-versus-survey reconciliation question. Where is the wall **fat** (rock left standing), and where is it **overdug**?

It is the equivalent of a cloud-to-mesh distance, built for pit reconciliation rather than general inspection.

Open it from the **Surface** toolbar.

---

## What it measures

You pick two surfaces:

| Role | Meaning |
|------|---------|
| **Reference** | The design — the pit shell, the plan, the shape you meant to dig |
| **Measured** | The survey — the as-built pickup you want to judge |

Kirra computes a **signed distance** at every vertex of the *measured* surface and paints that surface with it. The reference is not modified or coloured.

The sign is the part to get right:

| Sign | Colour | Meaning |
|------|--------|---------|
| Negative | Cool end of the ramp | **Fat / underdug** — the survey sits *inside* the design, rock left standing |
| Zero | Ramp midpoint | **On design** |
| Positive | Red end | **Overdug** — the survey sits *outside* the design |

Vertices that fall outside the comparison range are painted **grey** and take no part in the statistics.

---

## Choosing the direction

**Deviation measured** offers three options, and the right one depends on what you are looking at.

| Option | Use it for | How it works |
|--------|-----------|--------------|
| **Horizontal (walls)** | Batters, faces, any near-vertical surface | Casts a ray horizontally, along the vertex's outward direction |
| **Vertical (floors)** | Benches, floors, any near-horizontal surface | Casts a ray straight up and down, nearer hit wins |
| **Minimum distance** | Anywhere neither direction applies | The exact nearest point on the reference |

**Horizontal** is the default, and it matters more than it looks. On a near-vertical wall a vertical drop is meaningless — two surfaces a metre apart horizontally can share an elevation, so a vertical measurement reads zero on a wall that is a metre out.

The reverse is equally true. A horizontal ray on a flat bench points nowhere useful.

> **Note:** Each direction falls back where it does not apply. A floor measured with **Horizontal**, or a wall measured with **Vertical**, falls back to the minimum-distance answer for those vertices and flags them. The map stays complete — a pit floor reads as *measured by another means*, not as a hole in the picture.
>
> So a mixed pit is measured end to end whichever direction you pick. Choose the one that suits the ground you actually care about.

---

## Comparison range

**Compare within (m)** is the control that makes the tool usable on real data, and it is worth understanding rather than leaving alone.

A survey pickup usually covers far more ground than the design does. Measured on a real pair — a 500,330-vertex survey against a pit shell — only about **21%** of the survey lay within 5 m of the design. The rest was surrounding topography, 100 m to 800 m away.

Without a cutoff every number is true and the picture is worthless: the colour range stretches to fit ±726 m, and the ±1 m of wall detail the whole exercise is about washes out to nothing.

Beyond this range a vertex is **out of scope, not wrong**. Its value is still recorded — you may want to know how far that is — but it is excluded from the statistics and the colour range, and painted neutral grey.

---

## Colour range

**Zero always lands on the ramp's midpoint.** On *Spectrum* that puts on-design at green, with fat running to blue and overdug to red. On *Diverging* it puts on-design at white.

This is deliberate. Fitting the ramp to the raw minimum and maximum would paint whatever the mean happened to be as "on design", which is exactly the reading you cannot afford to get wrong.

By default the range fits the data, symmetrically about zero. The 98th percentile of the absolute deviation is used rather than the maximum, so one survey spike cannot flatten the entire map to a single colour.

### Holding a scale across several comparisons

**Target min (m)** and **Target max (m)** override the automatic range.

- Leave both blank to fit the data.
- Set **both** to hold one scale across several comparisons, so two pits can be read against each other.
- Give **only one** end and Kirra mirrors it, keeping zero in the middle.

---

## Picking surfaces from the view

Each surface row has a pick button. Click it, then click a surface in the **3D view** to select it — useful when the list is long or the names are similar.

---

## Reading the result

The measured surface is recoloured in place, with a legend showing the range. Alongside it you get the minimum, maximum and mean deviation across the vertices that were in scope.

Settings persist between sessions, so the range and ramp you settled on are still there next time.

> **Note:** Re-run after editing geometry. The deviation values are tied to the measured surface's vertex ordering, so if that surface is later clipped, booleaned or decimated, the stored values describe an ordering that no longer exists.
>
> Kirra detects this and falls back to the surface's normal elevation ramp rather than painting a convincing map of nothing. Run **Compare Surfaces** again to restore it.

---

## Exporting

Exports carry the deviation colours. A compared surface exported as GLB, or baked to GLB/OBJ, bakes the deviation colouring at export time — no extra image is generated and nothing is stored on the surface itself.

---

## See also

- [Mesh Editing & Clean Mesh](mesh-editing.md) — repairing a surface before comparing it
- [Surface Gradients](gradients.md) — the colour ramps available
- [Importing Surfaces](importing-surfaces.md) — getting the survey and design in
