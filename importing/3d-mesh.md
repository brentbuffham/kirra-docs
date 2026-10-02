# 3D Mesh Import (OBJ / PLY / GLTF / GLB)

Kirra imports 3D mesh files for surface visualisation, including textured models from aerial surveys, photogrammetry, and CAD exports.

> *Screenshot coming soon*

---

## Supported Formats

| Format | Extensions | Features |
|--------|-----------|----------|
| **Wavefront OBJ** | `.obj` | Vertices, faces, UVs, normals, materials (via MTL file), texture images |
| **PLY** | `.ply` | ASCII and binary, vertices, faces, normals, per-vertex RGB colours |
| **GLTF** | `.gltf` | JSON-based GL Transmission Format with indexed geometry and scene hierarchy |
| **GLB** | `.glb` | Binary variant of GLTF (single file, no external references) |

---

## How to Import

1. Click the **Import Export Print** button (file icon) in the menu bar and choose **Import** — or open the left sidenav (☰) and click **Import** under **File Management**
2. In the **Import** dialog, open the **Surfaces / Mesh** tab and click **Open** on the **OBJ / GLTF** row
3. Kirra reminds you to select all related files at once. Select your mesh file (`.obj`, `.ply`, `.gltf`, or `.glb`) — for a textured OBJ, also select its `.mtl` file and texture images (Ctrl+click, or Cmd+click on Mac)
4. The mesh appears in the TreeView and 3D view

---

## OBJ with Textures

To import a textured OBJ mesh (e.g., from drone photogrammetry):

1. Open the **OBJ / GLTF** import as above
2. In the file picker, select the `.obj` file, the `.mtl` material file and the texture images (JPG/PNG) referenced by the MTL — all together
3. The mesh loads with textures applied

**What gets stored:**
- OBJ geometry as text
- MTL material definitions
- Texture images as binary blobs
- Material properties (ambient, diffuse, specular, shininess, texture mapping)

All data is saved to IndexedDB and the textured mesh is rebuilt when you reload the page.

---

## PLY Files

PLY (Stanford Polygon Format) supports both ASCII and binary encoding. Kirra imports vertices, faces, normals, and per-vertex RGB colours. Common source: 3D scanners and photogrammetry software.

---

## GLTF / GLB Files

GLTF (GL Transmission Format) is the Khronos standard for 3D asset exchange. Kirra imports both the JSON-based `.gltf` and the binary `.glb` variants.

**Import features:**
- Indexed and non-indexed geometry
- World transforms from the scene node hierarchy
- Material properties

**GLB is also used internally** by Kirra to persist blast analysis results (Blair Heavy CPU model) to IndexedDB for safe reload.

---

## Viewing Imported Meshes

After import, you can:

- Switch between gradient modes (elevation, hillshade, texture, scientific colour maps)
- Adjust transparency
- Set elevation limits for colour mapping
- Right-click the surface in 3D for properties and gradient options
- Use the mesh in boolean operations, contour generation, and blast analytics

---

## Related Topics

- [Importing Surfaces](../surfaces/importing-surfaces.md)
- [Surface Gradients](../surfaces/gradients.md)
- [GLTF / GLB Export](../exporting/gltf-export.md)
