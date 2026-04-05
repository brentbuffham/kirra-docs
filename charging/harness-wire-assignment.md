# Harness wire assignment

Kirra can model **electronic initiation** products that use **surface / harness wire** (product type **HarnessWire**, initiator type **SurfaceWire** in the product database). The **Harness Wire Assignment** tool lets you assign **path/channel** and **commander / programming unit / blaster** identifiers to holes that act as **chain anchors** (self-connected timing), using labels that adapt to the selected **electronic system** specification.

> **Availability:** The toolbar control uses the same **experimental electronics** styling as Electronic Timing (`harnessAssignBtn` in `index.html`). It may be hidden until that experimental UI is enabled in your theme or build.

---

## Prerequisites

1. **Product database** — Load products that include **SurfaceWire** entries with an **`electronicSystemId`** pointing at a known harness specification (see `HarnessElectronicSystemSpecs.js` in the Kirra source).
2. **Chain anchor holes** — The tool only operates on **self-connected** holes (holes that are the start of a surface-wire / connector chain). If you click a hole that is not a chain anchor, Kirra shows a warning toast.

---

## Using the tool

1. Enable **Harness Wire Assignment** on the floating toolbar (experimental electronics section).
2. Click a valid **self-connected** hole in **2D** or **3D**.
3. A **FloatingDialog** opens with fields built from `createEnhancedFormContent`:
   - **Path / channel** — Numeric **or** letter input (e.g. **A, B, C** for systems that use letter paths such as some Davey Bickford specs).
   - **Commander / PU / Blaster** — Shown when the electronic system defines a firing-unit term; labels come from the spec (`pathChannelTerm`, `firingUnitTerm`).
4. Confirm to store **`systemPathNumber`** / letter mapping and **`systemUnitNumber`** on the hole (and related validation hooks).

Colours for channel visualisation use **`ChannelColorHelper`**. Bulk validation can use **`HarnessValidationHelper`** (validate assignments against the same spec matrix).

---

## Reference data

Vendor limits (max detonators per path, delay ranges, export formats such as BPD, etc.) live in **`HarnessElectronicSystemSpecs.js`**. Example product rows for import can be generated via **`buildHarnessWireSystemExampleProducts()`** (see unit tests in `HarnessElectronicSystemSpecs.test.js`).

---

## Related topics

- [Charging Overview](overview.md)
- [Products CSV Reference](products-csv.md)
- Kirra wiki: [Harness Wire Assignment](https://github.com/brentbuffham/Kirra/wiki/Harness-Wire-Assignment) (implementation map)
- [Electronic Timing Constructs](../blast-design/electronic-timing-constructs.md) — separate from harness paths; both relate to electronic initiation
