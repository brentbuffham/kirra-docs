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

1. Click **File > Import**
2. Select your mesh file (`.obj`, `.ply`, `.gltf`, or `.glb`)
3. For OBJ files with textures, Kirra prompts for the MTL file and texture images
4. The mesh appears in the TreeView and 3D view

---

## OBJ with Textures

To import a textured OBJ mesh (e.g., from drone photogrammetry):

1. Select the `.obj` file
2. Kirra prompts for the `.mtl` material file
3. Kirra prompts for texture images (JPG/PNG) referenced by the MTL
4. The mesh loads with textures applied

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
