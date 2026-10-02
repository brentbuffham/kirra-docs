# Harness wire assignment

Kirra can model **electronic initiation** products that use **surface / harness wire** (initiator type **SurfaceWire** in the product database). The **Harness Wire Assignment** tool lets you give each chain of holes a **path / channel** number, a **commander** (or equivalent firing-unit) number, a channel colour and a primer order. Field labels adapt to the electronic system named on your harness wire product.

---

## Prerequisites

1. **Product database** — Load products that include a **SurfaceWire** product linked to an electronic system. Without one, the dialog falls back to generic labels (**Channel** and **Commander**).
2. **Chain anchor holes** — The tool only works on **self-connected** holes: the hole a surface-wire or connector chain starts from. If you click any other hole, Kirra shows the warning *"Select a self-connected hole (chain anchor)"*.

---

## Using the tool

1. Click **Harness Wire Assignment (Channel / Commander)** in the **Connect** toolbar.
2. Click a **self-connected** hole in **2D** or **3D**. In 2D you can also click the first vertex of a trunk; Kirra uses the first hole on that trunk's chain.
3. The **Harness Wire Assignment** dialog shows the hole ID and the electronic system, with these fields:
   - **Path / channel** — a number, or a letter (A, B, C …) for systems that identify paths by letter. The label comes from the system (for example **Channel #**).
   - **Commander #** (or the system's firing-unit term) — shown when the system has a firing unit.
   - **Channel Colour** — the colour used to draw that channel.
   - **Primer Order** — **Top to Bottom** or **Bottom to Top**: the order detonators are numbered along the harness.
4. Click **Assign**. Kirra stores the values on the hole and checks them against the system's limits; any problems are shown as a validation warning.

---

## Related topics

- [Charging Overview](overview.md)
- [Products CSV Reference](products-csv.md)
- [Electronic Timing Constructs](../blast-design/electronic-timing-constructs.md) — separate from harness paths; both relate to electronic initiation
