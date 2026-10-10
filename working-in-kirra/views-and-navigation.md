# Views & Navigation

Kirra has a **2D** plan view and a **3D** view of the same data, in the same coordinates.
This page covers moving around both, and arranging the toolbars.

---

## Switch between 2D and 3D

Click **Toggle 2D/3D** in the top bar. The button is tinted blue in 2D and red in 3D.

![Top bar](../screenshots/HeaderBar.png)
*The top bar. From the left: ☰, the Kirra logo, Import Export Print, Select Language, Help,
Reload, Go Back, Toggle Toolbars, Toggle 2D/3D, Snap, Toggle Dark Mode.*

Switching view does not change your data.

---

## Move around in 2D

| Do this | Result |
|---------|--------|
| Drag | Pan |
| Scroll wheel | Zoom (towards the cursor) |
| **Alt** + **Shift** + drag | Rotate the plan view |
| **Alt** + **Shift** + double-click | Put north back at the top |

A north arrow shows how far the plan is rotated.

## Move around in 3D

| Do this | Result |
|---------|--------|
| Drag | Pan |
| **Alt** + drag | Orbit |
| **Alt** + **Shift** + drag | Roll the camera |
| Scroll wheel | Zoom — towards the cursor while **Cursor Zoom** is on |
| Right-click | The right-click menu (the camera does not move) |

Change the zoom direction, orbit style, damping and lighting on the **3D** tab of
[Settings](settings.md#3d-tab).

---

## Zoom and reset buttons

The **Select** toolbar has **Zoom In**, **Zoom Out** and **Reset View**, and in 3D
**Orbit Focus** — click a point to orbit around it. See
[Select Toolbar](../reference/select-toolbar.md) and
[3D View & Orbit Focus](../reference/3d-tools.md).

After an import Kirra zooms to fit **everything** loaded, so a small import far from other
data can look tiny — hide the other data, or zoom in.

---

## Arrange the toolbars

Kirra's tools sit on eight floating toolbars — Select, Holes, Surface, Workspace, Analyse,
KAD, Modify and Connect.

| Do this | Result |
|---------|--------|
| Drag a toolbar's title bar | Moves it |
| Click **−** in its title bar | Docks it as a tab on the right edge of the window |
| Click a tab on the right edge | Brings that toolbar back |
| Click **Toggle Toolbars** in the top bar | Docks every toolbar to the right edge; click again to fan them all out to their default places |

> **Tip:** If a toolbar has gone off-screen or two are stacked on each other, click
> **Toggle Toolbars** twice.

---

## The information overlay

The text in the bottom-left corner reports what is loaded, the cursor position, and the
version. See [Interface Tour — Information Overlay](../getting-started/interface-tour.md#information-overlay).

---

## Related

- [Selection & Snapping](selection-and-snapping.md)
- [Keyboard Shortcuts & Mouse Controls](../reference/keyboard-shortcuts.md)
- [Section Views](../reference/section-views.md)
