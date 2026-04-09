# JavaScript pitfalls — numbers at zero and import viewport

This page is for **contributors and integrators** who work on Kirra’s source. End users rarely hit these issues directly, but they explain occasional wrong elevations or “invisible after import” confusion when conventions are broken.

---

## Ongoing: falsy checks on numeric values

JavaScript treats **`0` as falsy**. Patterns such as `value || fallback` are unsafe whenever the value may legitimately be **zero** (ground level, sea level, northing/easting offsets, timing delays in milliseconds, angles, diameters, and so on).

**Symptom when wrong:** geometry or selection logic uses a **fallback** (for example centroid Z) when the real value was **0**, so entities appear at the wrong height, highlights miss the true position, or calculations silently drift.

**Safer patterns:**

- Explicit null/undefined checks: `value != null ? value : fallback` (allows `0`).
- Nullish coalescing where supported: `value ?? fallback` (only replaces `null`/`undefined`, not `0`).
- Avoid `value || fallback` for numbers unless both sides are intentionally non-negative and `0` cannot occur, or the fallback is also `0` (e.g. `x || 0` when `0` means “same as zero”).

Kirra’s in-repo developer guide (`CLAUDE.md` in the Kirra repository) documents this under **CRITICAL: No Falsy-Zero for Numeric Values**. Releases **1.0.58+** tightened handling in several hot paths (including 3D selection and DXF-related Z handling); **this class of bug is not “finished”** — new code must stay vigilant whenever numeric defaults use `||`.

---

## Import paths and `zoomToFitAll()`

After **any** file import commits data and calls `drawData()`, the viewport should **fit the new content** so the user is not zoomed to empty space or an old extent.

**Rule:** every import path should call **`zoomToFitAll()`** after data is loaded and drawn, in the same async flow where `drawData()` runs after globals are updated.

**Why it’s easy to miss:** imports are implemented as named functions, nested callbacks, FileManager delegates, or inline handlers tied to CSS classes — the correct place is always **after** `drawData()` for that load, not only in one central wrapper.

**Documented exceptions:** if zoom is intentionally skipped (for example, import only updates attributes on existing holes with no new geometry), the code must include an explanatory comment, e.g.  
`// zoomToFitAll not needed: <reason>`

**Enforcement:** static analysis in `src/__tests__/import-zoom-to-fit-pattern.test.js` scans `kirra.js` for required patterns. Extending or adding import flows should keep tests green.

**Related:** `KAPParser.js` may call `window.zoomToFitAll()` when present, so project open paths stay consistent with other imports.

---

## See also

- [Coordinate system](coordinate-system.md) — world vs local XY, Z conventions
- [3D view & orbit focus](3d-tools.md) — camera and framing behaviour
