# Which Boolean?

Kirra has two engines for combining surfaces and solids. They are complementary — when one
struggles with a pair, the other often succeeds.

| | [Solid Boolean](solid-boolean.md) | [Trimesh Boolean](trimesh-boolean.md) |
|---|---|---|
| Works on | Closed, watertight solids | Open surfaces **and** solids |
| Size | Small to medium — asks first over 60,000 triangles | Large meshes |
| Runs | In the foreground | In the background, with progress |
| You choose | One operation | The pieces to keep, or a quick operation |
| Fix the result | Repair options | Reclassify, close and cleanup options |
| Result layer | **Booleans** | **Booleans** |

**Use Solid Boolean** for two clean solids — extruded design volumes, a bench solid against a
pit shell.

**Use Trimesh Boolean** for anything open — a design against topography, a pit shell against a
pickup — and for large or messy meshes.

> Mesh booleans are a very difficult space to work in. Make your meshes as clean and
> watertight as you can — [Clean Mesh](clean-mesh.md) first — and if one engine fails, try the
> other on the same pair.

Kirra's earlier **Surface Boolean** tool has been retired. Notes or screenshots that mention it
no longer apply.

For booleans on KAD polygons rather than surfaces, see [KAD Boolean](../kad/boolean.md).

---

## Related

- [Solid Boolean](solid-boolean.md)
- [Trimesh Boolean](trimesh-boolean.md)
- [Clean Mesh](clean-mesh.md)
- [Surfaces Toolbar](surfaces-toolbar.md)
