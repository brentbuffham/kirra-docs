# Surface Contours

Kirra generates elevation contour lines (isolines) at regular intervals on loaded surfaces. Contour lines are created as KAD polyline entities that appear in both 2D and 3D views.

> *Screenshot coming soon -- contour lines on a surface*

---

## How to Generate Contours

1. Click the **Contour Surface** button on the Surface toolbar — the **Surface Contours** dialog opens
2. Choose the **Surface**, or click the pick button and click it on the canvas
3. Configure the contour settings:
   - **Contour Interval (m)** -- vertical spacing between contour lines (default 5)
   - **Start From** -- **Min (up)**, **Max (down)**, **Zero** or **Custom**; levels are the **Starting Origin (m)** plus whole multiples of the interval (for example 617, 619, 621 …)
   - **Min Elevation (m)** / **Max Elevation (m)** -- the range to contour
   - **Vertex Spacing (m)** -- simplification tolerance; 0 keeps every vertex (default 0)
   - **Close Polylines** -- close the contours into polygons (default off)
   - **Color** -- colour for the contour polylines
   - **Line Width** -- thickness of the contour lines in pixels (default 2)
   - **Sub-layer Name** -- folder under `Analysis` for the output (default `Contours`)
4. Click **Generate**
5. Contour polylines appear as KAD entities in the Data Explorer and in both the 2D and 3D views

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
