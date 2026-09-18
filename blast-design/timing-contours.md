# Timing Contours, First Movement and Relief

Kirra draws **isochrones** over a blast — lines joining collars that fire at the
same moment. They are the quickest way to see whether a shot fires the way you
drew it, and they are computed from the same resolved fire times the animation and
the vibration shaders use.

The same machinery feeds four displays that all share one rule about what a "shot"
is:

| Display | Shows |
|---|---|
| **Contours** | iso-time lines across the pattern |
| **First Movement** | arrows pointing the way each area moves |
| **Burden Relief** | how much has already moved before a hole fires |
| **Slope** | the timing gradient over the pattern |

---

## Turning them on

Each has its own toggle on the **display toolbar** along the bottom of the window.
Click to turn a display on or off.

**Right-click a display toggle to open its quick-adjust popover.** This is where
the settings below live — they are not in the Settings dialog.

---

## What counts as one shot — the firing event

> **This is the part that surprises people, and it changed in v1.1.32.32.**

An interpolated field is drawn over a **firing event**, not over a blast name. Two
patterns that fire together are **one field**, so contours run straight through the
join instead of stopping dead at it.

Kirra decides this from **structure only**, never geometry:

1. **Same blast** — a blast is never split.
2. **Same applied timing construct** — this is what joins two blasts.
3. **A surface-network link** — a tie or harness run crossing between them.

Anything connected by those rules is one field.

**A blast is never divided**, even if you put its constructs in different firing
groups — a firing group can only ever *join*.

Two things deliberately do **not** merge blasts:

- **Being close together.** Superseded design versions sit at zero distance from
  the version that replaced them, so a distance rule would blend a live shot with
  an old one.
- **Firing at a similar time.** Two unrelated shots can overlap in time and still
  be separate shots.

> **Hidden blasts are not calculated, and they do not block anything else from
> being calculated.** Hide a blast and it contributes nothing to any field. Hide
> *part* of a blast and the field is still computed from every hole that fires —
> it is only *drawn* over the holes you can see, so the picture never invents a
> wavefront where holes used to be.

---

## Contour quick-adjust

Right-click the **Contours** toggle.

### Interval (ms)

The vertical slider on the left. Sets the spacing between iso-lines.

A short interval on a long shot gives you a dense plot; a long interval gives you
bands you can count across a bench. The labels follow whatever you choose.

### Display (ms) — Fire Time or Surface

| Option | Uses |
|---|---|
| **Fire Time** *(default)* | the **ultimate** detonation time — surface delay plus everything downhole |
| **Surface** | the **connector arrival** time only |

For a design with no downhole timing the two are the same. For electronic or
multi-deck designs they are not, and **Fire Time is the one that matches what
comes out of the ground.**

### Colours

Two wells. **A contour line is one line in two colours** — each iso-line is drawn
as a dash run that alternates between them along its length. That is what keeps it
readable on both the dark canvas and a white printed page, so both wells matter.

**Reset** restores the shipped yellow and magenta. It only resets the colours in
*this* popover.

### Labels

| Control | Does |
|---|---|
| **Size** | label font size, 6–32 px |
| **Count** | how many labels each contour line carries, 0–10 |

**Count** is the spacing control. The default of **2** is the long-standing
behaviour — a label about a third and two thirds of the way along each line.
Raise it on a wide plan, drop it to **0** to hide labels entirely on a dense one.

---

## First Movement quick-adjust

Right-click the **First Movement** toggle.

- **Size** — arrow size.
- **Colour** — arrow colour, with its own **Reset**.

The arrows are an indication of movement direction, not a modelled throw.

---

## Where the settings are kept

Colours, label size and label count are **saved in your browser** and survive a
reload. They are per-machine, not part of the project file, so two people opening
the same KAP can have different plot colours without disagreeing about the design.

---

## They print, too

Everything above applies to the **printed plan** as well as the screen — raster
print, the inbuilt vector plot, and an XLSX template map view all read the same
settings. If you set a 250 ms interval and green contours, that is what comes out
of the PDF.

> Fixed in v1.1.32.36: the interval slider previously drove the 2D canvas only, so
> 3D and every printed plan silently fell back to their own default. If you have
> older plans that disagree with the screen, that is why.

---

## Related topics

- [Electronic Timing Constructs](electronic-timing-constructs.md) — building the
  timing surface, and firing groups
- [Timing Sequences](timing-sequences.md) — connector timing and tie-ups
- [Connect Toolbar](connect-toolbar.md) — surface connectors and harness wire
- [Analytics Overview](../analysis/overview.md) — what else reads fire times
