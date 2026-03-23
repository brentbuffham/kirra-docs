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

The Section Plane tool slices all 3D geometry along a user-defined plane, revealing internal structure.

### How to Use

1. Click **Section Plane** in the Surface toolbar
2. Position the section plane by entering coordinates or dragging the handles
3. Adjust the orientation (horizontal, vertical, or angled)
4. Geometry on one side of the plane is hidden, showing the cross-section

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
