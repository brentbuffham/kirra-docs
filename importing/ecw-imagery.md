# ECW Imagery

ERDAS ECW (`.ecw`) is a compressed format for large orthophotos and aerial images. A mine-wide
ECW is often more than 100,000 pixels across and several gigabytes. Kirra never loads the whole
file: it shows a downsampled overview of the whole image, then decodes the area on screen at
full detail as you zoom in.

ECW imagery sits in **Images** in the [Data Explorer](../working-in-kirra/data-explorer.md),
alongside GeoTIFFs.

---

## Import an ECW

1. Open the Import dialog and choose the **Surfaces / Mesh** tab.
2. On the **ECW (ERDAS)** row, click **Open** and pick the `.ecw` file.

![Import dialog, Surfaces / Mesh tab, with the ECW (ERDAS) row under GeoTIFF / Image](../screenshots/ImportECWRow.png)

You can also drop a `.ecw` onto the canvas.

Kirra reads the file in the background and shows its progress in **Importing ECW**, so the rest
of the app keeps working. Click **Cancel** to stop the import. When it finishes, the whole image
appears and the view zooms to fit it. A multi-gigabyte ECW usually takes a few seconds.

**Latitude / longitude files.** If the ECW is in latitude and longitude, Kirra asks for the
coordinate system to convert it to, in **Coordinate System Conversion Required**, exactly as for a
GeoTIFF (see [GeoTIFF / Image](surfaces-and-point-clouds.md#geotiff--image)). Mine grid and other
projected ECWs import without asking.

**If the import fails**, Kirra says why in **ECW Import Error**:

| Message | Meaning |
|---|---|
| Not an ECW file. | The file is not an ECW, even if it is named `.ecw`. |
| ECW version 3 is not supported yet. | Kirra reads ECW version 2 files. |
| The ECW file is damaged or truncated. | The file is incomplete, for example a copy that did not finish. |

---

## Full detail when you zoom in

The first picture you see is an overview, at most 4096 pixels across for the whole image. Zoom
in and, a moment after the view stops moving, Kirra decodes just the area on screen at the
resolution you are looking at, and draws it over the overview. Pan and it decodes the new area;
zoom out and it goes back to the overview.

This works in 2D and in 3D, including a tilted 3D view. Prints of a zoomed-in view use the same
detail, so they are as sharp as the screen.

An ECW that was converted from latitude and longitude at import shows the overview only.

---

## Transparent background

ECW files have no transparency. The area outside the photo is stored as near-black, which would
otherwise hide everything under the image. Kirra makes those pixels see-through, and you can
change how dark a pixel has to be.

Right-click the image on the canvas to open its menu:

![Image menu for an ECW: Transparency, Z Elevation, Transparent background and Black at or below](../screenshots/ECWImageMenu.png)

- **Transparent background**: tick it to make the dark border see-through, untick it to keep
  black as black.
- **Black at or below (0-255)**: a pixel becomes see-through when its red, green and blue are all
  at or below this value. The ECW border is usually 0 to 2, so the default of 3 is safe. Raise it
  only if a dark fringe remains; a higher value also removes deep shadow. It is greyed out while
  the box is unticked.

Click **Ok** to apply. Kirra re-reads the ECW, so the change takes a moment on a large file.

---

## Clip an ECW to a polygon

To hide the imagery outside an area, such as a pit outline or a lease boundary:

1. Draw the area as a closed KAD polygon.
2. Right-click the image and click **Clip…**.
3. In **Clip Image to Polygon**, choose the polygon in **Clip polygon**, or click the target
   button beside it and click the polygon on the canvas.
4. To leave a hole in the clipped image, choose a second polygon in **Hole (optional)**.
5. Click **Apply**.

![Clip Image to Polygon with AUS-CLIP-POLY chosen as the clip polygon](../screenshots/ClipImageDialog.png)

Everything outside the polygon is hidden, in 2D, 3D, prints and the saved project. Zooming in
stays clipped.

![World image clipped to an outline of Australia](../screenshots/ECWClippedAustralia.png)

Kirra refuses a hole that would give the wrong result:

| Message | Fix |
|---|---|
| Choose a clip polygon first. | Choose a polygon in **Clip polygon**. |
| The hole cannot be the clip polygon itself | Choose a different polygon for the hole. |
| The hole must lie completely inside the clip polygon. | Use a hole that is fully inside the outline. |

**To remove the clip**, right-click the image, click **Clip…**, then **Remove Clip**.

Clip is available for ECW images only, and only while the ECW is connected (see below).

---

## After a reload: Reconnect

Kirra saves the overview with your project, but never the `.ecw` itself, which can be gigabytes.
After the page is reloaded, or when a project is opened on another computer, the image shows the
saved overview (including any clip). Full detail, clipping and the transparent background need
the original file again.

The Data Explorer marks the image with a warning:

![Data Explorer: World.ecw marked with an amber warning](../screenshots/DataExplorerECWReconnect.png)

To reconnect, click the warning, or right-click the image and click **Reconnect**, then pick the
`.ecw`. The image menu says the same thing while the file is not connected:

![Image menu with the amber banner and the Reconnect button](../screenshots/ECWReconnectBanner.png)

The file can have moved or been renamed, but it must be the same ECW. Kirra checks its size and
position, and refuses a different file with *This is not the same ECW as ...*. Once reconnected,
the warning goes, and your transparent background and clip settings come back with it.

---

## In the Data Explorer

ECW images have their own icon under **Images**; GeoTIFFs keep theirs.

![Data Explorer with World.ecw under Images](../screenshots/DataExplorerECW.png)

---

## Related topics

- [Surfaces and Point Clouds](surfaces-and-point-clouds.md) (GeoTIFF / Image)
- [The Import Dialog](import-dialog.md)
- [Data Explorer](../working-in-kirra/data-explorer.md)
- [Other Import Formats](other-formats.md) (KAP projects)
