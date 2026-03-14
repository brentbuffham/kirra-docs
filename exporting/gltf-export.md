# GLTF / GLB Export

Kirra exports surfaces and analysis results to GLB (binary GLTF) format for use in 3D viewers, Blender, and other mesh tools.

> *Screenshot coming soon*

---

## How to Export

1. Click **File > Export**
2. Select **GLB** from the format list
3. Choose the surface(s) to export
4. The `.glb` file is downloaded

---

## What Gets Exported

| Surface Type | Export Content |
|-------------|---------------|
| **Analysis surfaces** | Mesh geometry with baked shader texture and UV coordinates |
| **Regular surfaces** | Mesh geometry with elevation-based vertex colours |

---

## Analysis Surface Persistence

The GLB format is used internally by Kirra to persist blast analysis results (particularly from the Blair Heavy CPU model) to IndexedDB. This prevents browser crashes on page reload for heavy computation results -- the mesh is saved as a GLB blob and restored directly without re-running the analysis.

---

## Compatibility

GLB files exported from Kirra can be opened in:

- Blender
- Windows 3D Viewer
- Three.js-based applications
- Any software supporting the Khronos GLTF 2.0 standard

---

## Related Topics

- [3D Mesh Import](../importing/3d-mesh.md)
- [Blast Analytics](../analysis/overview.md)
- [DXF Export](dxf-export.md)
