# Importing Surfaces

Kirra supports importing 3D surfaces from multiple formats. Surfaces are used for terrain visualisation, grade control, blast analytics overlays, boolean operations, contour generation, and GeoTIFF export.

![Surface triangulation in 2D view](../screenshots/triangulationIn2d.png)
*An imported surface displayed in the 2D canvas view with triangulation visible.*

![Surface triangulation in 3D view](../screenshots/triangulationin3D.png)
*The same surface in the 3D view showing elevation colouring.*

---

## Supported Surface Formats

| Format | Extensions | Source |
|--------|-----------|--------|
| **Surpac DTM/STR** | `.dtm` + `.str` | Surpac, Vulcan, MineSight |
| **Wavefront OBJ** | `.obj` (+ `.mtl` + textures) | Photogrammetry, CAD, Blender |
| **PLY** | `.ply` | 3D scanners, photogrammetry |
| **GLTF/GLB** | `.gltf`, `.glb` | 3D viewers, Blender, analysis persistence |
| **DXF 3DFACE** | `.dxf` | AutoCAD triangulated surfaces |
| **Vulcan triangulation** | `.00t` | Maptek Vulcan |
| **Datamine surface** | `.dm` (points + triangles) | Datamine |

---

## How to Import

1. Open the **Import** dialog — click the file icon in the header bar and choose **Import**, or open **File Management** in the side navigation and click **Import**
2. Find your format:
   - **Surfaces / Mesh** tab — **OBJ / GLTF** (also accepts `.ply`), **Vulcan .00t Triangulation**, **Datamine Surface**, point clouds and GeoTIFF images
   - **Drawings / CAD** tab — **Surpac** (`.str` / `.dtm`) and **DXF**
3. Select your surface file(s)
   - For Surpac: select both `.dtm` and `.str` together
   - For OBJ with textures: select the `.obj`, `.mtl` and texture images together (Ctrl+click, or Cmd+click on Mac)
4. The surface appears in the Data Explorer and in both the 2D and 3D views
5. The surface is saved in your browser and persists across sessions

You can also drag surface files from your file manager straight onto the canvas.

---

## After Import

Once imported, you can:

- **Apply gradients** -- Change the colour scheme (elevation, hillshade, viridis, texture, etc.)
- **Adjust transparency** -- Set surface opacity
- **Set elevation limits** -- Clamp colour mapping to a specific Z range
- **Right-click in 3D** -- Access surface properties, gradient options, and context menu
- **Apply grade control** -- Use the surface elevation to set blast hole grade positions
- **Run blast analytics** -- Overlay vibration or damage models on the surface
- **Generate contours** -- Create elevation contour lines as KAD polylines
- **Boolean operations** -- Combine, subtract, or intersect surfaces

---

## Surface Properties

| Property | Description |
|----------|-------------|
| Name | Filename or user-defined name |
| Visible | Show/hide toggle |
| Gradient | Colour scheme (default, hillshade, viridis, texture, etc.) |
| Transparency | Opacity level (0 = invisible, 1 = solid) |
| Min Limit | Minimum elevation for colour mapping |
| Max Limit | Maximum elevation for colour mapping |

Access surface properties by right-clicking the surface in the Data Explorer or in the 3D view.

![Surface context menu in 3D](../screenshots/surfacesContext.png)
*Right-click a surface in the 3D view to access properties, gradient options, and more.*

---

## Related Topics

- [Surface Gradients](gradients.md)
- [Solid and Trimesh Boolean](boolean-csg.md)
- [Mesh Editing](mesh-editing.md)
- [Contours](contours.md)
- [Surpac DTM/STR Import](../importing/surpac-dtm-str.md)
- [3D Mesh Import](../importing/3d-mesh.md)
