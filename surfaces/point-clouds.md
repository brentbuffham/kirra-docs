# Point Clouds

A **point cloud** is a scan or survey kept as millions of plain points: no triangles, no
drawing objects, just each point's position and whatever the scanner recorded about it
(colour, intensity, classification, return number and, if you asked for it, GPS time).

Kirra keeps a point cloud as its own kind of data, labelled **Point Cloud (KAD Cloud Entity - Increased Point Capability)** on the
import dialogs. It draws in 2D and 3D, prints, saves with your project and can be exported to
LAS. LAS and LAZ files import this way by default, so a survey of tens of millions of points
opens without being thinned to a drawing-object limit.

---

## Bring a point cloud in

Use the import row for your file, or drag the file onto Kirra:

| File | Row | Opens |
|------|-----|-------|
| `.las` / `.laz` | **LAS Point Cloud** (Surfaces / Mesh tab) | **Import LAS Point Cloud** |
| `.xyz` / `.txt` / `.csv` / `.pts` / `.ptx` / text `.ply` | **Point Cloud** (Surfaces / Mesh tab) | **Import Point Cloud** |

In both dialogs, set **Import As:** to **Point Cloud (KAD Cloud Entity - Increased Point Capability)**. It is the default for every
LAS and LAZ file, and for a text cloud with more than 1,000,000 points. A smaller text cloud
still defaults to **Surface (triangulated mesh)**, as it always has, so choose
**Point Cloud (KAD Cloud Entity - Increased Point Capability)** yourself if you want a cloud.

The full list of options is on [Surfaces and Point Clouds](../importing/surfaces-and-point-clouds.md#las-point-cloud).
The ones that matter for a cloud:

- **Max Points:** (LAS) keeps this many points, spread evenly over the file. **0** keeps as many
  as the draw budget allows.
- **Tolerance (3D):** removes points closer than this, in 3D, to one already kept. **0** keeps
  every point.
- **Keep GPS time** (LAS) stores each point's GPS time so you can colour by time later. It costs
  8 bytes a point and is greyed out when the file's point format has no GPS time.

When the import finishes, Kirra says how many points it imported, and zooms to fit all your
data. If the file held more points than the draw budget, the message says so and that the points
were thinned evenly.

The cloud is named after the file, starting **Cloud_** (for example `Cloud_pit_scan`), with
`_2`, `_3` and so on added if the name is taken.

> **A cloud is saved with your work.** It comes back after a reload. If the browser has no room
> to store it, Kirra says **Point Cloud Not Saved**: the cloud stays open for that session but
> will not return after a reload.

### The draw budget

The most points Kirra reads and draws for one import is set on the **Performance** tab of
**Settings**: **Max Point-Cloud Points**, 30,000,000 by default. It uses about 24 bytes of memory
a point, so 30,000,000 points is roughly 720 MB. Lower it on a computer with little memory.
See [Settings](../working-in-kirra/settings.md#performance-tab).

A file with more points than the budget is thinned evenly across the whole file, not cut off.

---

## The Point Clouds folder

Each cloud is listed in the [Data Explorer](../working-in-kirra/data-explorer.md) under the
**Point Clouds** group, which sits between **Images** and **Geology**. Clouds are not on a
drawing layer, so layer controls do not touch them. The grey text on a row is the number of
points, for example `N=10,040,120`.

| Control | What it does |
|---------|--------------|
| **Eye** | Shows or hides the cloud. The eye on the **Point Clouds** group shows or hides every cloud |
| **Lock** | Locks the cloud. The lock on the **Point Clouds** group locks every cloud. A locked cloud cannot be deleted until you unlock it |

Right-click a cloud row:

| Item | What it does |
|------|--------------|
| **Rename** | Renames the cloud |
| **Properties** | Opens [Cloud Properties](#cloud-properties) |
| **Hide** / **Show** | Hides or shows the cloud |
| **Delete** | Deletes the cloud. Kirra asks first: **Delete Point Cloud** — *Delete 1 point cloud(s)? This cannot be undone.* |

> **Warning:** Deleting a point cloud cannot be undone with **Undo**. Export a
> [KAP project](../exporting/other-formats.md#kap-kirra-app-project) first if you may want it
> back.

**Sort…** on the **Point Clouds** group orders the rows in the tree only; your data does not
change.

A hidden cloud is not drawn in 2D or 3D, does not print and is not written to a LAS export.

---

## Cloud Properties

Right-click a cloud in the Data Explorer and choose **Properties**. **Cloud Properties** opens
with the cloud's current look. Every change shows on the canvas straight away.

- **OK** keeps the changes and saves them with the cloud.
- **Cancel**, the close button or **Escape** puts back the settings the cloud had when you
  opened the dialog.

The **Style** row at the top saves the dialog's settings as a named preset, so you can apply the
same look to another cloud. Use the buttons beside it to save a new preset, update the selected
one, delete it, or export and import presets as a file. Hidden classes are not part of a preset;
they belong to each cloud.

### Display

| Setting | Default | What it does |
|---------|---------|--------------|
| **Point size (px)** | 1 | The size of each point on screen, 1 to 10 pixels. Larger points are easier to see and slower to draw. 1 is the fastest |
| **Transparency** | 100% | A slider from 0% to 100% |

### Colour by

**Colour by** decides what colours each point. The list holds only the choices the cloud has data
for.

**Classification**, **Return number** and **GPS time** are listed only when the cloud holds that
column, and they are shown greyed out, with a short note, when every point has the same value
and so nothing could be told apart. The note reads, for example, *GPS time (all values are 0)*
or *Classification (all the same)*. **Intensity** is not checked this way. If a cloud's saved
choice has become unavailable, it stays selected, greyed out.

| Choice | Needs |
|--------|-------|
| **RGB (colour from the file)** | Colour in the file. The default for a cloud that has it |
| **Elevation** | Nothing. The default for a cloud without colour |
| **Intensity** | Intensity in the file |
| **Classification** | Classification in the file, with more than one value (otherwise greyed out with a note) |
| **Return number** | Return numbers in the file, with more than one value (otherwise greyed out with a note) |
| **GPS time** | **Keep GPS time** ticked at import. Greyed out with a note when every time is the same |
| **Single colour** | Nothing |

| Setting | When it is available | What it does |
|---------|----------------------|--------------|
| **Colour** | **Single colour** | The colour of every point |
| **Color Gradient** | Elevation, Intensity, Return number, GPS time | The colour ramp: **Default**, **Viridis**, **Turbo**, **Parula**, **Cividis** or **Terrain**. The same ramps as [surfaces](gradients.md) |

A setting that does not apply to the chosen **Colour by** is greyed out.

### Limits

| Setting | What it does |
|---------|--------------|
| **Limits** | **Min-Max (data)** stretches the ramp over the cloud's own values. **Fixed** uses your **Min** and **Max**, so several clouds can share one scale |
| **Max** | The top of the ramp when **Limits** is **Fixed**. Blank uses the highest value in the data |
| **Min** | The bottom of the ramp when **Limits** is **Fixed**. Blank uses the lowest value in the data |

**Limits**, **Max** and **Min** apply to the ramp choices only. **Max** and **Min** are active
only when **Limits** is **Fixed**; the blank box shows the data's own value.

### Classes

Shown for a cloud that holds more than one class; a cloud with a single class has nothing to
tell apart and no **Classes** group (unless that one class has been hidden, so it can be shown
again). One row for each class in the cloud, with:

- a tick box: untick it to hide that class,
- the class number (**Class 2**) and how many points it holds,
- a colour swatch: click it to change that class's colour. Classes start with a standard colour.

### From the library

| Setting | What it does |
|---------|--------------|
| **Tolerance (m, 3D)** | The distance used by **Remove duplicates** (default 0.01 m) |
| **Remove duplicates** (button at the foot of the dialog) | Keeps the first point and drops any point closer than the tolerance, in 3D, to one already kept. The result is a **new** cloud named `<name> (deduped)`. The original is not changed |

Kirra reports how many points it removed, or that none were within the tolerance. The dialog
stays open.

### Information

Read-only facts about the cloud: **Name**, **Points**, **Easting (X)**, **Northing (Y)**,
**Elevation (Z)** (each as a minimum to maximum), and **Attributes kept** (RGB, Intensity,
Classification, Return number, GPS time). A cloud read from a LAS file also lists the **File
format** (for example `LAS 1.2, format 3`), the **File CRS** when the file names one, and the
**Source file**.

---

## Legend

With the **Legend** display option on, a visible cloud coloured by **Elevation** gets a legend
entry like a surface, over the same range its points are coloured with.

---

## Printing

A visible point cloud prints with the rest of the plan, on the Kirra Inbuilt plot and in the map
cell of a template, in raster and vector PDF alike. It prints as one picture of the cloud seen
from above, in the same colours and point size as the screen.

On a very large page at a high resolution, Kirra lowers the cloud picture's resolution rather
than crop it. Everything else on the page keeps its own resolution.

---

## Coordinates and scans that start at 0, 0

**Kirra never moves a point cloud.** The cloud holds exactly the coordinates in the file.

A scan taken in its own scanner frame, with coordinates near 0, 0, brought into a project in
UTM therefore stays near 0, 0, a very long way from your design. When a new cloud lands
**100 km or more** from the data you already have, **Coordinate System Mismatch** asks what to do:

| Button | Result |
|--------|--------|
| **Ignore & Import** | Import the cloud where the file puts it |
| **Clean & Replace** | Clear the existing data, then import |
| **Cancel** | Stop. Nothing is added |

See [Checks on import](../importing/import-dialog.md#coordinate-check). The check runs only when
there is already data to compare with. To bring a scan onto your site grid, georeference it
before you import it.

---

## Taking a point cloud out of Kirra

| To | Do this |
|----|---------|
| Write a LAS file | Visible clouds are included in the [LAS export](../exporting/other-formats.md#las-lidar). Only the LAS export writes point clouds; the XYZ, CSV, PTS and PTX point-cloud exports do not |
| Keep it in a project | A [KAP project](../exporting/other-formats.md#kap-kirra-app-project) carries point clouds, and asks first because they can be large. A KAT template never does |

---

## What a point cloud is for

A point cloud is for looking at, colouring, printing and exporting. Selecting, snapping to and
editing individual points are not part of it. To work on points, import the file as **KAD points**
(up to 1,000,000 points) or as a **Surface** instead.

---

## Troubleshooting

**My text point cloud became a surface.**
A text cloud with 1,000,000 points or fewer defaults to **Surface (triangulated mesh)**. Choose
**Point Cloud (KAD Cloud Entity - Increased Point Capability)** in **Import As:**.

**I chose KAD points and got Too Many Points for KAD Points.**
KAD points carry more data per point and are limited to 1,000,000. Click **Use KAD Cloud** to
import the whole file as a point cloud, **Thin to 1,000,000 KAD points** to keep KAD points, or
**Cancel**. See
[Surfaces and Point Clouds](../importing/surfaces-and-point-clouds.md#too-many-points-for-kad-points).

**Colour by has no RGB, Intensity or GPS time.**
The file did not hold it. For GPS time, **Keep GPS time** may not have been ticked when you
imported; import the file again with it ticked.

**Classification, Return number or GPS time is greyed out in Colour by.**
Every point in the cloud has the same value (the note says *all values are 0* or *all the same*),
so colouring by it would show one colour. Choose another **Colour by**.

**The cloud is not on the screen after import.**
Check the eye on its row and on the **Point Clouds** group. If the cloud is 100 km or more from
your design, Kirra zooms out to take in both after the import, so your design looks small; see
[Coordinates and scans that start at 0, 0](#coordinates-and-scans-that-start-at-0-0).

**Point Cloud Not Saved.**
The browser has no room to store the cloud. It stays open for this session but will not return
after a reload. Export a KAP project, or free browser storage.

---

## Related

- [Surfaces and Point Clouds](../importing/surfaces-and-point-clouds.md) — the import dialogs
- [Data Explorer](../working-in-kirra/data-explorer.md)
- [Surface Gradients](gradients.md) — the colour ramps
- [Other Export Formats](../exporting/other-formats.md) — LAS and KAP
- [Settings](../working-in-kirra/settings.md#performance-tab) — Max Point-Cloud Points
