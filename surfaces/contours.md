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
   - **Sub-layer Name** -- folder under `Analysis` for the output (default `Contours`)
4. Click **Generate**
5. Contour polylines appear as KAD entities in the TreeView and on both 2D/3D views

---

## Where the Contours Land

Contours are filed in `Analysis → Contours` and named
`<surface>_Contour_RL<elevation>_<seq>_<uid>` -- for example `Pit_Contour_RL640_001_a4zz`.
Every ring at the same elevation shares the `RL` value, so sorting the folder by name
groups each elevation together.

Type a different **Sub-layer Name** to split a run out -- `PitShell` files the output in
`Analysis → PitShell` instead. The top-level layer stays `Analysis` either way.

See [Layer Organisation](../kad/layer-organisation.md).

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
- [Layer Organisation](../kad/layer-organisation.md)
- [DXF Export](../exporting/dxf-export.md)
