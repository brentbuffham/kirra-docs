# Surface Gradients

Kirra supports multiple gradient visualisation modes for surfaces, applied in both the 2D canvas and 3D views.

> *Screenshot coming soon -- comparison of gradient modes on the same surface*

---

## Available Gradients

| Gradient | Description | Best For |
|----------|-------------|----------|
| **Default** | Simple elevation-based blue-to-red | Quick visualisation |
| **Hillshade** | Lighting simulation for topographic relief | Terrain analysis, slope identification |
| **Viridis** | Perceptually uniform purple-teal-green-yellow | Scientific data, accessibility |
| **Turbo** | Rainbow-like high dynamic range | Maximum visual contrast |
| **Parula** | MATLAB-style blue-green-yellow | Engineering applications |
| **Cividis** | Colourblind-friendly blue-yellow | Accessibility |
| **Terrain** | Green-brown natural palette | Natural terrain appearance |
| **Texture** | Original OBJ texture map | Photo-realistic (requires textured OBJ import) |

---

## How to Change the Gradient

1. Right-click the surface in the TreeView or 3D view
2. Select **Surface Properties**
3. Choose a gradient from the dropdown
4. Click **Apply**
5. The surface updates in both 2D and 3D views

---

## Elevation Limits

By default, the gradient maps across the surface's full elevation range (minimum Z to maximum Z). You can narrow this range to improve contrast in a specific elevation band:

- **Min Limit** -- Elevations below this value are clamped to the gradient's lowest colour
- **Max Limit** -- Elevations above this value are clamped to the gradient's highest colour

Set these in the Surface Properties dialog.

---

## Hillshade Settings

The hillshade gradient simulates directional lighting on the surface:

- **Hillshade Colour** -- Base colour for the shading (default: grey)
- **Azimuth** -- Light direction, 0-360 degrees (default: 315 deg = northwest)
- **Altitude** -- Light angle above horizon, 0-90 degrees (default: 45 deg)

Hillshade is useful for visualising terrain features such as ridges, valleys, and slopes, and for checking DTM accuracy.

---

## Transparency

The transparency slider controls surface opacity:
- **0** = fully transparent (invisible)
- **1** = fully opaque (solid)

Transparency can be adjusted at any time, including after applying blast analytics overlays.

---

## Related Topics

- [Importing Surfaces](importing-surfaces.md)
- [GeoTIFF Export](../exporting/geotiff-export.md)
- [Blast Analytics](../analysis/overview.md)
