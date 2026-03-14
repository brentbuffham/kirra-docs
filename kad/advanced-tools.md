# Extrude, Boolean, and Section Plane

These tools connect KAD drawings to surface operations, enabling you to create 3D geometry from 2D design boundaries.

> *Screenshot coming soon -- extruded polygon in 3D view*

---

## Extrude KAD to Solid

Extrudes a closed KAD polygon vertically to create a 3D solid mesh.

### How to Use

1. Draw a closed polygon using the KAD Polygon tool
2. Click the **Extrude KAD** button in the Surface toolbar
3. Select the polygon entity
4. Set the extrusion height (vertical distance)
5. Click **Extrude**
6. A 3D solid mesh is created from the polygon outline

### Use Cases

- Creating pit shell volumes from 2D outlines
- Building bench outline solids for volume calculations
- Generating exclusion zone meshes
- Creating design surfaces from plan-view boundaries

---

## KAD Boolean

Performs 2D boolean operations (Union, Difference, Intersection) on KAD polygon entities.

### How to Use

1. Draw or import two or more closed KAD polygons
2. Click the **KAD Boolean** button in the Surface toolbar
3. Select the two polygons
4. Choose the operation (Union, Difference, or Intersection)
5. Click **Apply**
6. A new polygon entity is created from the result

### Use Cases

- Combining design boundaries from different sources
- Subtracting exclusion zones from pattern boundaries
- Finding the overlap area between two designs

---

## Section Plane

Creates a cross-section cutting plane through loaded surfaces for subsurface visualisation and design verification.

### How to Use

1. Load one or more surfaces
2. Click the **Section Plane** button in the Surface toolbar
3. Define the section line (two points on the canvas)
4. The cross-section is displayed showing the cut profile through the surfaces

### Use Cases

- Verifying pit wall design against actual terrain
- Checking bench geometry at specific locations
- Visualising sub-surface layers

---

## Related Topics

- [Drawing Points, Lines, and Polygons](drawing-tools.md)
- [Surface Boolean & CSG](../surfaces/boolean-csg.md)
- [Importing Surfaces](../surfaces/importing-surfaces.md)
