# Surface Contours

Kirra generates elevation contour lines (isolines) at regular intervals on loaded surfaces. Contour lines are created as KAD polyline entities that appear in both 2D and 3D views.

> *Screenshot coming soon -- contour lines on a surface*

---

## How to Generate Contours

1. Right-click a surface in the TreeView
2. Select **Generate Contours**
3. Configure the contour settings:
   - **Contour interval** -- spacing between contour lines (e.g., 2m, 5m, 10m)
   - **Colour** -- colour for the contour polylines
   - **Line width** -- thickness of the contour lines
   - **Target layer** -- KAD layer for the output entities
4. Click **Generate**
5. Contour polylines appear as KAD entities in the TreeView and on both 2D/3D views

---

## Use Cases

- **Design visualisation** -- See elevation changes across the blast area
- **Volume estimation** -- Use contour spacing to estimate cut/fill volumes
- **Surface analysis** -- Identify ridges, valleys, and slope changes
- **Export** -- Contour lines can be exported as DXF polylines for use in CAD software

---

## Related Topics

- [Importing Surfaces](importing-surfaces.md)
- [Surface Gradients](gradients.md)
- [DXF Export](../exporting/dxf-export.md)
