# Layer Organisation

Kirra files everything it generates into a predictable place in the TreeView, so you can
find, hide, or delete a tool's output in one click instead of hunting through a flat list.

---

## How the TreeView nests

The **Drawings** branch is three levels deep:

```
Boundaries          ← layer          (the discipline)
  └─ Radii          ← sub-layer      (the tool that made it)
      └─ Polygons   ← type folder    (Points / Lines / Polygons / Circles / Texts)
          └─ Blast01_Radii_300m_k3f9
```

Every level has its own eyeball, so you can hide all of `Boundaries` in one click, or
just the `Radii` inside it, or just the polygons inside that.

**Surfaces are only two levels** — layer, then the surface itself. There is no
sub-layer for surfaces.

---

## Where each tool puts its output

### Boundaries — outlines around something

| Tool | Lands in |
|------|----------|
| Radii | `Boundaries → Radii` |
| Create Blast Boundary | `Boundaries → Blasts` |
| Coincident Hole Detector (radii option) | `Boundaries → Coincidence` |
| Surface Footprint (Ceiling / Floor / Edge) | `Boundaries → Footprints` |

### Design — what you draw or derive to build the plan

| Tool | Lands in |
|------|----------|
| Offset KAD | `Design → Offsets` |
| Ramp Tool | `Design → Ramps` |
| Text to Poly | `Design → Conversions` |
| Circle to Polygon | `Design → Conversions` |
| Convert Surface to Faces / Edges / Points | `Design → Conversions` |

### Analysis — what you derive to interrogate the design

| Tool | Lands in |
|------|----------|
| Surface Contours | `Analysis → Contours` |
| KAD Boolean | `Analysis → Booleans` |
| Surface Intersection | `Analysis → Intersections` |

### Surfaces

| Tool | Lands in |
|------|----------|
| Triangulate | `Triangulated` |
| Clip Surface | `Clipped` |
| Trimesh Boolean, Solid CSG | `Booleans` |
| Slice | `Slices` |
| Blast analysis shaders | `Analysis` |
| Flyrock shroud | `Flyrock` |
| Extrude KAD | `Extruded` |
| Regularize | `Regularized` |

---

## Two tools that deliberately do *not* follow this

- **Split KAD Lines** and **Join KAD Lines** keep the result wherever the original
  entity was. They modify your geometry rather than generating new output, so moving it
  would lose your organisation.
- **The KAD drawing tools** (Point, Line, Polygon, Circle, Text) go into the **active
  drawing layer** — the one you named when you first drew in this session. That setting
  exists for hand-drawing, and generators leave it alone.

---

## Entity naming

Generated entities are named:

```
Source_Kind_parameter_uid

Blast01_Radii_300m_k3f9
Crest_Offset_5m_p7q1
Pit_Contour_RL640_001_a4zz
Blast01_Boundary_x2m8
```

| Part | What it tells you |
|------|-------------------|
| **Source** | What it was made from — the blast, surface, or entity name |
| **Kind** | What it is — `Radii`, `Offset`, `Boundary`, `Contour` |
| **parameter** | The setting that defined the run — `300m` radius, `RL640` elevation |
| **uid** | Four random characters, so two runs never collide |

If you select holes from more than one blast, the source reads `Selection` rather than
picking one blast's name.

The Radii tool adds its rotation and starburst settings when they are not at their
defaults — `Blast01_Radii_300m_R45_S50_k3f9` is a 300 m radius, rotated 45°, at 50%
starburst.

---

## Running a tool twice

Both runs go into the **same** sub-layer. There is only ever one `Boundaries → Radii`
folder, no matter how many times you run the tool — the entity names keep the runs apart.

If you want a run separated out, use **Move to Layer** afterwards.

Importing the same file twice behaves differently on purpose: `site.dxf` and
`site.dxf_2` become separate layers, so a re-import never merges into the old one.

---

## Choosing your own sub-layer

Three tools let you name the sub-layer yourself, because their output often needs
splitting by purpose:

| Tool | Field | Default |
|------|-------|---------|
| Surface Contours | **Sub-layer Name** | `Contours` |
| KAD Boolean | **Sub-layer Name** | `Booleans` |
| Surface Intersection | **Sub-layer Name** | `Intersections` |

Type `PitShell` into Surface Contours and the output lands in `Analysis → PitShell`
instead of `Analysis → Contours`. The top-level layer stays `Analysis` either way.

---

## Older projects

Projects saved before this change keep their existing layers — you may see `CONTOUR`,
`RAMP`, `BOOLS`, `SURF-IX`, `CoincidenceRadii`, or `Clipped Surfaces` alongside the new
names. Nothing was moved or renamed in your saved work.

New output from those tools uses the new layers, so a long-running project can end up
with both. Use **Move to Layer** to consolidate if you want them together.

---

## Exporting

Layer and sub-layer are part of your **project**, not the drawing file.

- **KAP** (project archive) keeps the full tree — layers, sub-layers, everything.
- **KAD** (drawing CSV) does not. Export a KAD and re-import it and every entity lands
  in one flat layer.

Use KAP when the organisation matters.

---

## Related Topics

- [Modify Toolbar](modify-tools.md) — the Radii, Offset, and Boolean tools
- [KAD Toolbar](kad-toolbar.md) — button-by-button reference
- [Surface Contours](../surfaces/contours.md)
- [Interface Tour](../getting-started/interface-tour.md)
