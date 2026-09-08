# 3D View & Orbit Focus

Kirra's 3D view is a Three.js-powered 3D visualisation that renders blast holes, surfaces, KAD drawings, and GeoTIFF imagery in full 3D. It shares the same coordinate space as the 2D canvas -- no Z scaling or elevation transform is applied.

---

## Switching Between 2D and 3D

Click the **2D/3D toggle** button in the top bar to switch views. The 3D view uses the same data and coordinate system as 2D, but allows orbiting, elevation viewing, and surface draping.

---

## 3D Navigation

| Action | Control |
|--------|---------|
| **Pan** | Click and drag (default mode) |
| **Orbit** | Alt + drag |
| **Camera roll** | Alt + Shift + drag |
| **Zoom** | Scroll wheel -- zooms towards the mouse cursor position at the data Z centroid |
| **Context menu** | Right-click |

---

## Orbit Focus Tool

The **Orbit Focus** tool changes the orbit centre to any point you click in the 3D scene. By default, orbiting rotates around the centroid of all loaded data. With Orbit Focus, you can click on a specific blast hole, surface feature, or drawing to set that point as the new rotation centre.

### How to Use

1. Click the **Orbit Focus** button in the toolbar (or use the keyboard shortcut)
2. Click on any 3D object or position in the scene
3. The orbit centre moves to the clicked position
4. Orbiting now rotates around this new centre point

### When to Use

- Inspecting a specific area of a large blast pattern up close
- Rotating around a particular surface feature or bench edge
- Viewing a single hole from multiple angles
- Examining the intersection of surfaces at a specific location

The orbit centre persists until you click a new position or reset the view.

---

## 3D Settings Dialog

The **3D Settings** button opens a dialog for configuring Three.js rendering options. Available settings include:

| Setting | Description |
|---------|-------------|
| **Renderer** | Choose between different Three.js renderer modes (V1, V2, Performance) |
| **LOD Override** | Override the level-of-detail system for surface rendering |
| **Instanced Holes** | Use GPU instancing for blast hole rendering (better performance with large patterns) |
| **Simplification** | 3D mesh simplification threshold |

---

## Section Plane

A section is a **slice** through your design, not just a cut. You choose where the
slice sits, how thick it is, and then step it through the pattern to read the holes,
the bench and the surfaces it passes through.

Click **Section Plane** in the **Select** toolbar to open the dialog.

Turning **Enable** on switches the view to 3D. A section is a 3D construct, so in 2D
the controls would appear to do nothing.

### Choosing the plane

The **Plane** list offers five ways to define the slice:

| Option | What it does |
|---|---|
| **Two Points** | You click two points; the slice runs vertically through them |
| **Segment** | You click an existing line; the slice runs vertically along it |
| **XY (Elevation)** | A horizontal slice, stepping up and down |
| **YZ (East-West)** | A vertical slice, stepping east and west |
| **XZ (North-South)** | A vertical slice, stepping north and south |

### Sectioning along two points

1. Choose **Two Points**. The dialog prompts **Select start point of plane**.
2. Click the start point. The prompt changes to **Select end point of plane**.
3. Click the end point.

The view switches to 3D, turns to look along the section, and frames it to the line
you drew. Press **Esc** or right-click to cancel a pick.

### Sectioning along a line you have drawn

If you want the section in a particular place, draw a guideline there first, then
section along it:

1. Draw a line where you want the section.
2. Choose **Segment**.
3. Click that line.

The direction you drew the line in sets which way the view faces.

To pick again at any time, use the **pick** button beside the Plane list. Choosing the
same entry in the list again will not restart a pick.

### Slice thickness — Look Forward and See Behind

These two distances set how thick the slice is, measured from the section line:

- **Look Forward** — how far ahead of the line stays visible, in the direction you are looking.
- **See Behind** — how far behind the line stays visible.

Both are positive distances, and both default to **1**, giving a 2 metre slice.
Anything outside those two edges is hidden.

Setting **See Behind** to 0 makes the section line itself the back edge.

### Stepping the slice through the pattern

- **Position** is the offset of the slice from the section line. 0 sits on the line.
- **Step** is how far each step moves it. It also sets the spinner increment.
- The **«** and **»** buttons either side of Position step the slice back and forward.
- **Page Down** and **Page Up** do the same from the keyboard.
- Hold **Shift** with Page Up or Page Down to land on exact multiples of the step,
  measured from where the section was created.

Slice thickness and step are remembered between sessions.

### Other controls

- **Reverse** (beside the pick button) looks the other way along the section. This
  swaps which side is forward and which is behind.
- **Rotation** tilts the slice away from vertical.
- **Clip** chooses which categories the section applies to: Blasts, KAD, Surfaces,
  Images and Blocks.
- **Reset** returns the settings to their defaults without closing the dialog.

### Working inside a section

While a section is enabled, moving a hole keeps it **on the section plane**. The screen
is the plane, so a move has one degree of freedom in plan — along the line. Dragging up
or down will not push a hole sideways out of the slice.

### Notes

- **Surfaces read as a line.** A surface is a sheet. Slicing a near-horizontal sheet and
  viewing it end-on shows its cross-section, which has no thickness. This is expected:
  what you see is the profile where the surface crosses the section.
- The section line itself is a working aid. It is not saved with your design.

---

## Selection in 3D

3D selection uses a **fat ray cast** (cylinder) from the camera through the mouse position to infinity. This provides screen-space selection similar to the 2D canvas.

- The selection cylinder has a configurable radius (snap tolerance)
- All targets within the cylinder are evaluated
- Priority determines which target is selected: Collar > Grade > Toe for holes
- The cursor snaps to the selected target including its Z depth

### Polygon Selection

In 3D, polygon selection works in screen space:

1. Activate the polygon selection tool
2. Click points to define a selection boundary on screen
3. All objects whose screen projections fall inside the polygon are selected

---

## Coordinate Space

The 3D view uses the same centroid-shifted coordinate space as the 2D canvas:

- **X** = Easting (metres)
- **Y** = Northing (metres)
- **Z** = Elevation (metres, unchanged -- no Z transform)

Large UTM coordinates are shifted by subtracting the data centroid to maintain floating-point precision. The same XY transform used in 2D is applied in 3D -- no scaling is performed.

---

## Performance Tips

- Enable **Instanced Holes** for patterns with more than 500 holes
- Use the **Performance** renderer for large datasets
- Surfaces with many triangles benefit from the LOD system
- The 3D scene only renders when visible -- switching to 2D pauses the 3D render loop

---

## Related Topics

- [Interface Tour](../getting-started/interface-tour.md) -- Overview of the workspace including 3D controls
- [Surface Gradients](../surfaces/gradients.md) -- How surfaces are coloured in 3D
- [Keyboard Shortcuts](keyboard-shortcuts.md) -- Mouse and keyboard controls for 3D
