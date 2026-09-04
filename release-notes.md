# Kirra Release Notes

Generated from the Kirra source history. Newest first.

## Release v1.1.31.40

_2026-09-04_

**Bug Fix**

- Grade elevation no longer gains a zero when a hole is edited
- Hole values stored as text are corrected when a project loads

## Release v1.1.31.39

_2026-09-04_

**Feature**

- Pattern template charging: model and applier (groundwork)

## Release v1.1.31.38

_2026-09-04_

**Feature**

- Analysis can now be run on only the visible holes

**Bug Fix**

- Replacing a project now replaces its pattern templates too

## Release v1.1.31.37

_2026-09-04_

**Feature**

- Renumber Holes previews the numbering as you type

**Bug Fix**

- Alphanumeric row names now work in Pattern in Polygon
- Inserting a hole no longer renames the rows behind it
- Serpentine patterns number from the end the row starts at
- Row Reorder now follows the serpentine setting
- Holes along a line keep one row letter
- Charging and hole label settings follow renumbered holes
- Inserting holes can now be undone in one step
- Grade elevation no longer grows extra zeros when edited
- Pattern direction arrow stays correct on a rotated view
- A zero subdrill is kept instead of becoming one metre
- Renumber now explains and checks the starting value
- Warning messages no longer show corrupted characters

## Release v1.1.31.36

_2026-09-03_

**Feature**

- Choose exactly which charge decks and primers to import
- Map charge columns from a flat file with any column names
- Split one packed column into depth, detonator and booster

**Bug Fix**

- A warning now appears when skipping a deck leaves a gap
- Button icons appear instantly instead of loading in

## Release v1.1.31.35

_2026-09-03_

**Feature**

- Vector plan coordinate precision is now adjustable in Settings

**Bug Fix**

- Vector plans are far smaller and open much faster
- Hidden drawing layers no longer appear on printed plans

## Release v1.1.31.34

_2026-09-02_

**Feature**

- Imported geometry colouring takes upper and lower limits
- Value-coloured geometry now shows a colour scale

**Bug Fix**

- Imported charging now saves and survives a reload
- An empty project can no longer erase saved charging
- Starting fresh now clears charging properly
- Timing contours return correctly when reopening a project
- Timing contours no longer sweep between separate blasts
- Editing one blast no longer recalculates every other blast
- Analysis legend disappears when the analysis is deleted
- Analysis legend follows the legend button
- Analysis shading no longer hides the surfaces beneath it
- Large Vulcan design databases now import instead of failing

## Release v1.1.31.33

_2026-08-31_

**Feature**

- Text to Poly now offers stroke centrelines or true letter outlines
- Converted text is grouped into a folder per line
- Each converted stroke is named for its line, position and letter

**Bug Fix**

- Multi-line text now converts as separate lines, not one run
- Converted text now keeps the label's rotation
- World-sized labels convert at their real height in metres

## Release v1.1.31.32

_2026-08-30_

**Bug Fix**

- Despike no longer creates a spike far below the surface

## Release v1.1.31.31

_2026-08-30_

**Feature**

- Despike can target spikes between a minimum and maximum height
- The spike height is set with a two-handle range slider, in metres

**Bug Fix**

- Despike no longer creates a huge spike above an upper limit

## Release v1.1.31.30

_2026-08-30_

**Feature**

- The legend names the design a survey was compared against

**Bug Fix**

- The legend now reports deviation in metres, not elevations
- The legend bar matches the colour ramp the comparison used

## Release v1.1.31.29

_2026-08-30_

**Feature**

- Compare a survey surface against a design as a deviation heat map
- Deviation shows in plan view and in 3D alike
- Choose the colour ramp and a fixed target range for a comparison
- A comparison is remembered and reopens with the project

**Bug Fix**

- Hiding one image no longer leaves its eye showing visible
- The Images folder now shows when only some images are hidden

## Release v1.1.31.28

_2026-08-29_

**Bug Fix**

- The KAD draw buttons now turn their tool off, not just dark

## Release v1.1.31.27

_2026-08-29_

**Feature**

- Draw buttons are colour-coded by placement mode

## Release v1.1.31.26

_2026-08-29_

History not available at the moment.

## Release v1.1.31.25

_2026-08-29_

History not available at the moment.

## Release v1.1.31.24

_2026-08-29_

**Feature**

- A new line keeps the mode; the button resets it

## Release v1.1.31.23

_2026-08-29_

**Bug Fix**

- Placement mode is per activation, and resets to standard

## Release v1.1.31.22

_2026-08-29_

**Bug Fix**

- The placement-mode maths, ahead of the osline tool

## Release v1.1.31.21

_2026-08-29_

**Bug Fix**

- Text imported from DXF and DWG now keeps its rotation

## Release v1.1.31.20

_2026-08-29_

**Feature**

- Reorder KAD now works on points objects, not just lines and polygons

## Release v1.1.31.19

_2026-08-28_

**Bug Fix**

- Despike now finds pyramids and tents by height above their surroundings
- The spike threshold is set in metres instead of a statistical score
- Repaired points land on the local slope, not a flat average

## Release v1.1.31.18

_2026-08-28_

History not available at the moment.

## Release v1.1.31.17

_2026-08-28_

**Bug Fix**

- The Despike tab opens again

## Release v1.1.31.16

_2026-08-28_

**Bug Fix**

- Despike now behaves predictably — more removal always removes more
- Despike removes spikes while touching only a few percent of the surface
- Despike no longer flattens crests and benches along with the spikes

## Release v1.1.31.15

_2026-08-28_

**Bug Fix**

- Despike now shows how many spikes it will remove before you commit
- Despike controls read in plain words and metres instead of ring counts

## Release v1.1.31.14

_2026-08-28_

**Feature**

- Regularise now lives in a Smoothing dialog alongside a new Despike tool
- Detect reports how many spikes would move before you commit

## Release v1.1.31.13

_2026-08-28_

**Bug Fix**

- The despike engine, and the 1-ring test that could never have worked

## Release v1.1.31.12

_2026-08-28_

**Bug Fix**

- Rotated multi-line text now exports to DXF without the lines stacking

## Release v1.1.31.11

_2026-08-28_

History not available at the moment.

## Release v1.1.31.10

_2026-08-28_

History not available at the moment.

## Release v1.1.31.9

_2026-08-28_

**Feature**

- A formula group warns in amber when it matches no holes
- Clicking a group's warning opens Edit Group

## Release v1.1.31.8

_2026-08-28_

**Feature**

- Right-click a group and choose Edit Group to change everything about it
- Groups can be renamed, and switched between manual and formula-driven
- The formula shows how many holes it matches as you type

## Release v1.1.31.7

_2026-08-28_

**Feature**

- Formula blast groups now update themselves as holes change

**Bug Fix**

- A broken group formula no longer empties the group
- Holes can no longer be hand-added to a formula-driven group

## Release v1.1.31.6

_2026-08-28_

**Bug Fix**

- Regularise now uses Australian spelling throughout
- An existing Regularized folder is renamed, not duplicated
- Regularise is now visibly disabled on a closed solid, with the reason

## Release v1.1.31.5

_2026-08-25_

**Feature**

- Clean Mesh now re-cuts coplanar folds instead of deleting them
- Fold repair reports open edges and folds before and after

## Release v1.1.31.4

_2026-08-25_

**Bug Fix**

- Delete the CSV dialog stubs that held the globals

## Release v1.1.31.3

_2026-08-25_

**Bug Fix**

- Timing dialog now states one consistent assigned-hole count
- Timing dialog explains holes listed but missing from the file

## Release v1.1.31.2

_2026-08-25_

**Bug Fix**

- Release notes page now updates with every version
- Release Notes button matches the other dialog buttons
- Release Notes button opens the published page

## Release v1.1.31.1

_2026-08-25_

**Bug Fix**

- Timing mesh now updates as you tie the blast, no reload needed
- Timing mesh follows charging delay edits

## Release v1.1.30

_2026-08-24_

**Feature**

- Desktop installers published for Windows, Mac and Linux

## Release v1.1.20.523

_2026-08-24_

**Bug Fix**

- Section view controls now fit in two tidy columns instead of wrapping
- Section view input boxes are the size they were meant to be

## Release v1.1.20.522

_2026-08-24_

**Feature**

- The section view can look along any bearing, not just the hole's

## Release v1.1.20.521

_2026-08-24_

History not available at the moment.

## Release v1.1.20.520

_2026-08-24_

History not available at the moment.

## Release v1.1.20.519

_2026-08-24_

**Bug Fix**

- Printed sections now match the screen when measuring from telemetry
- Printed sections honour the wide search angle instead of ignoring it
- Exported burden lines follow the measurement shown in the panel

## Release v1.1.20.518

_2026-08-24_

**Feature**

- The hole section panel now remembers your settings between sessions

**Bug Fix**

- Section view opens framed on the hole instead of mostly empty ground

## Release v1.1.20.517

_2026-08-24_

**Feature**

- Section view can show the surveyed hole beside the designed one
- Burden can be measured from the drilled hole instead of the design

**Bug Fix**

- Telemetry import dialog now fits its form without scrolling

## Release v1.1.20.516

_2026-08-24_

History not available at the moment.

## Release v1.1.20.515

_2026-08-24_

**Feature**

- Import downhole surveys and see the real drilled hole path
- Surveyed paths land on their own Telemetry layer, one line per hole

## Release v1.1.20.514

_2026-08-24_

**Bug Fix**

- The plan to ingest surveyed hole paths

## Release v1.1.20.513

_2026-08-24_

**Feature**

- Hidden runs of a burden path draw dashed, so depth is readable

## Release v1.1.20.512

_2026-08-24_

**Feature**

- Widen the 3D search to 120 degrees for corner holes
- Export KADs moved to the footer

## Release v1.1.20.511

_2026-08-24_

**Bug Fix**

- Burden paths are now visible in the 3D view

## Release v1.1.20.510

_2026-08-24_

**Feature**

- Burden paths show their warning colours on the plan

**Bug Fix**

- Burden paths now appear immediately on the hole you select

## Release v1.1.20.509

_2026-08-24_

**Feature**

- Burden paths draw on the 2D plan and in 3D

**Bug Fix**

- Turning on 3D Dist now takes effect immediately
- A ray striking the collar's own ground is no longer a burden

## Release v1.1.20.508

_2026-08-24_

**Feature**

- Export burden and 3D distance paths to KAD

**Bug Fix**

- The collar no longer reports a meaningless zero 3D distance

## Release v1.1.20.507

_2026-08-24_

**Feature**

- Print a hole section and its Burden Table to PDF
- Printing several selected holes gives a page each

**Bug Fix**

- The Burden Table no longer lags a change behind

## Release v1.1.20.506

_2026-08-23_

**Bug Fix**

- The burden numbers panel is now called the Burden Table

## Release v1.1.20.505

_2026-08-23_

**Feature**

- Minimum 3D distance to the face, in any forward direction
- Burden ladder shown as a table beside the section
- Every burden marker is labelled with its distance

**Bug Fix**

- The Hole Section button warns when no hole is selected

## Release v1.1.20.504

_2026-08-23_

**Feature**

- The RL sample origin is now settable

## Release v1.1.20.503

_2026-08-23_

**Bug Fix**

- Hole Section Tool is wide enough for all its controls

## Release v1.1.20.502

_2026-08-23_

**Bug Fix**

- Section tool spinners now step by sensible round amounts

## Release v1.1.20.501

_2026-08-23_

History not available at the moment.

## Release v1.1.20.500

_2026-08-23_

**Bug Fix**

- Burden is now measured perpendicular to the hole, not level

## Release v1.1.20.499

_2026-08-23_

**Feature**

- Hole section measures burden to the face down the hole
- Burden coloured against an adjustable minimum
- Sample interval anchored to collar, toe or round elevations

## Release v1.1.20.498

_2026-08-23_

**Feature**

- Charges rescale as the hole geometry changes

**Bug Fix**

- Undoing a hole edit now restores its charging too

## Release v1.1.20.497

_2026-08-23_

**Feature**

- Hole section shows decks, stemming and primers in the hole

## Release v1.1.20.496

_2026-08-23_

**Feature**

- Hole section draws the hole at its real diameter
- Choose how many decimal places the hole section shows

**Bug Fix**

- Hole section now follows dark and light mode

## Release v1.1.20.495

_2026-08-23_

**Bug Fix**

- Hole section edits now follow the same rules as Edit Hole

## Release v1.1.20.494

_2026-08-23_

**Feature**

- Hole section now shows grade and toe levels
- Angling a hole keeps its floor and deepens the hole
- Subdrill length shown alongside subdrill depth

## Release v1.1.20.493

_2026-08-23_

**Feature**

- Section view reaches further in front of the hole than behind

## Release v1.1.20.492

_2026-08-23_

**Feature**

- Hole Section Tool now lives in the Analyse toolbar

## Release v1.1.20.491

_2026-08-23_

**Feature**

- Hole section now shows the ground surface profile
- Choose which surface the section is cut against
- Section length either side of the hole is adjustable

## Release v1.1.20.490

_2026-08-23_

**Feature**

- New Hole Section Tool shows one hole and its properties
- Edit hole angle, dip, collar and length with live preview
- Step through holes by row, number or name

**Bug Fix**

- Applying a hole angle change now moves the toe with it
- Imported charging data no longer overwritten by a queued save

## Release v1.1.20.489

_2026-08-23_

**Feature**

- Plans now open in a preview before you save them

**Bug Fix**

- Saving a plan reliably asks where to put it

## Release v1.1.20.488

_2026-08-23_

**Bug Fix**

- Plans now centre on the print frame you positioned, not the screen

## Release v1.1.20.487

_2026-08-22_

**Bug Fix**

- Background images now print correctly on rotated plans

## Release v1.1.20.486

_2026-08-22_

**Bug Fix**

- Vector plans no longer drop text near the edge of the frame

## Release v1.1.20.485

_2026-08-22_

**Bug Fix**

- Raster plans now print text rotated as it appears on screen
- Drawing text on rotated vector plans is now the correct size

## Release v1.1.20.484

_2026-08-22_

**Bug Fix**

- Vector plans no longer draw a wireframe over surfaces

## Release v1.1.20.483

_2026-08-22_

**Bug Fix**

- Surface elevation limits are kept when the project is reopened

## Release v1.1.20.482

_2026-08-22_

**Bug Fix**

- Loading a project no longer risks a half-saved previous project

## Release v1.1.20.481

_2026-08-22_

**Feature**

- Surface gradient limits and transparency are saved with the project

**Bug Fix**

- A surface set fully transparent no longer reloads solid

## Release v1.1.20.480

_2026-08-22_

**Bug Fix**

- Printed surfaces now use the gradient and elevation limits you chose
- Transparent surfaces no longer print solid

## Release v1.1.20.479

_2026-08-22_

**Bug Fix**

- Relief and slope colour changes are now kept when applied

## Release v1.1.20.478

_2026-08-22_

**Bug Fix**

- Relief maps now print the same values and colours as the screen

## Release v1.1.20.477

_2026-08-22_

**Bug Fix**

- Relief and slope colours now match between raster and vector plans
- Printed legends now follow the Slope and Relief colour settings

## Release v1.1.20.476

_2026-08-22_

**Bug Fix**

- Plans no longer print text spilling outside the map frame

## Release v1.1.20.475

_2026-08-22_

History not available at the moment.

## Release v1.1.20.474

_2026-08-22_

History not available at the moment.

## Release v1.1.20.473

_2026-08-22_

**Bug Fix**

- Template plans now print hole text rotated as it appears on screen
- Template plans now print Row and Position labels

## Release v1.1.20.472

_2026-08-22_

**Bug Fix**

- Printed hole text is now sized in real world units
- Raster and vector plans now print text at the same size
- Drawing text keeps its font when printed
- Drawing points now print in their own colour

## Release v1.1.20.471

_2026-08-22_

**Bug Fix**

- Hole label position and rotation settings now apply to printed plans

## Release v1.1.20.470

_2026-08-22_

**Bug Fix**

- Slope and relief maps no longer print outside the map frame
- Filled polygons now print filled on the raster plot

## Release v1.1.20.469

_2026-08-22_

History not available at the moment.

## Release v1.1.20.468

_2026-08-22_

**Bug Fix**

- Row and Position labels now print on both plot types

## Release v1.1.20.467

_2026-08-22_

**Bug Fix**

- Downhole timing now prints on both vector PDF layouts

## Release v1.1.20.466

_2026-08-22_

**Bug Fix**

- Release notes now read as plain factual statements

## Release v1.1.20.465

_2026-08-22_

**Bug Fix**

- Release notes link now opens the published page

## Release v1.1.20.464

_2026-08-22_

**Feature**

- Release notes now cover every version from 1.1.20

## Release v1.1.20.463

_2026-08-22_

**Feature**

- Update notice now links to the release notes

## Release v1.1.20.462

_2026-08-22_

**Feature**

- Release notes now published from the app history

**Bug Fix**

- Release note text no longer shows internal wording

## Release v1.1.20.461

_2026-08-22_

**Bug Fix**

- Hole text is now the same size in 2D and 3D

## Release v1.1.20.460

_2026-08-22_

**Bug Fix**

- 3D hole text now scales with zoom like 2D

## Release v1.1.20.459

_2026-08-22_

**Feature**

- The Text tab becomes a real table, populated with real defaults

## Release v1.1.20.458

_2026-08-21_

**Bug Fix**

- Pattern Templates get a Text tab, like the Edit Hole dialog

## Release v1.1.20.457

_2026-08-21_

**Feature**

- Pattern templates carry a text setup, stamped at creation

## Release v1.1.20.456

_2026-08-21_

**Bug Fix**

- The live 2D canvas draws world-sized hole labels

## Release v1.1.20.455

_2026-08-21_

**Bug Fix**

- World-size labels by default, and tiny text culls

## Release v1.1.20.454

_2026-08-21_

**Feature**

- One builder, two backends, the same picture

## Release v1.1.20.453

_2026-08-21_

**Bug Fix**

- A harness that can tell raster from vector

## Release v1.1.20.452

_2026-08-21_

**Bug Fix**

- The plan to make raster and vector the same picture

## Release v1.1.20.451

_2026-08-20_

History not available at the moment.

## Release v1.1.20.450

_2026-08-20_

**Feature**

- Raster prints now draw trunk lines and connectors

## Release v1.1.20.449

_2026-08-20_

**Bug Fix**

- The unit rule written down, and reels left to the author

## Release v1.1.20.448

_2026-08-20_

**Bug Fix**

- Only one connector can now exist between two holes
- Directional connectors now correctly stop signal travelling backwards

## Release v1.1.20.447

_2026-08-20_

**Bug Fix**

- Initiation Point of hole no longer deletes the cord that fed it

## Release v1.1.20.446

_2026-08-20_

History not available at the moment.

## Release v1.1.20.445

_2026-08-20_

History not available at the moment.

## Release v1.1.20.444

_2026-08-20_

**Feature**

- Surface bill of materials added for cord, wire and connectors
- Cord and wire reported in metres, connectors counted each

## Release v1.1.20.443

_2026-08-20_

**Feature**

- The printed page, brought back into line with the app

## Release v1.1.20.442

_2026-08-20_

**Bug Fix**

- Maptek Vulcan export now writes coordinates in the correct columns
- Vulcan line colours and patterns now export correctly

## Release v1.1.20.441

_2026-08-19_

**Feature**

- Initiation Point tool added for marking where a blast starts

## Release v1.1.20.440

_2026-08-19_

History not available at the moment.

## Release v1.1.20.439

_2026-08-19_

History not available at the moment.

## Release v1.1.20.438

_2026-08-19_

History not available at the moment.

## Release v1.1.20.437

_2026-08-18_

**Bug Fix**

- The drag shows the actual blast hole

## Release v1.1.20.436

_2026-08-18_

**Bug Fix**

- Selecting a folder selects what is in it, not what is drawn

## Release v1.1.20.435

_2026-08-18_

**Bug Fix**

- The drag dots, sized and coloured to be seen

## Release v1.1.20.434

_2026-08-18_

**Bug Fix**

- Dragging a hole in 3D now shows what is being moved

## Release v1.1.20.433

_2026-08-18_

**Bug Fix**

- The last five per-hole redraw storms

## Release v1.1.20.432

_2026-08-18_

**Bug Fix**

- The sliders that never got the second half of the fix

## Release v1.1.20.431

_2026-08-17_

**Feature**

- Active layer now honoured, with sub-layer support

## Release v1.1.20.430

_2026-08-17_

**Feature**

- Active layer is now shown in the interface

## Release v1.1.20.429

_2026-08-17_

**Feature**

- The imports that were landing in Ungrouped

## Release v1.1.20.428

_2026-08-17_

**Feature**

- Four tree row states, one visual grammar

## Release v1.1.20.427

_2026-08-17_

**Feature**

- A selection you cannot see now signposts its way down

## Release v1.1.20.426

_2026-08-17_

**Bug Fix**

- 3D snap was gated on a flag that never clears

## Release v1.1.20.425

_2026-08-16_

**Feature**

- The bulk hole edit redrew the whole scene once per hole

## Release v1.1.20.424

_2026-08-16_

**Bug Fix**

- A bulk hole edit can no longer freeze the tab

## Release v1.1.20.423

_2026-08-16_

**Feature**

- Prune trunks and connections whose blast has no holes

## Release v1.1.20.422

_2026-08-16_

**Feature**

- The KAD layer rule, stated across all four categories

## Release v1.1.20.421

_2026-08-16_

**Bug Fix**

- Trunks from one project no longer leak into the next

## Release v1.1.20.420

_2026-08-16_

**Feature**

- A duplicated KAD entity stays on its source layer

## Release v1.1.20.419

_2026-08-16_

**Feature**

- 2D text turns with the view again

## Release v1.1.20.418

_2026-08-16_

**Bug Fix**

- Vulcan labels read the right way up, and the tree keeps up

## Release v1.1.20.417

_2026-08-15_

**Bug Fix**

- Status messages are now visible again

## Release v1.1.20.416

_2026-08-15_

**Bug Fix**

- The Vulcan layer picker says what to tick

## Release v1.1.20.415

_2026-08-15_

**Feature**

- Resizable dialogs give the extra height to the list

## Release v1.1.20.414

_2026-08-15_

**Feature**

- A dialog layout audit, and the four faults it found

## Release v1.1.20.413

_2026-08-15_

**Bug Fix**

- Dialog footer buttons size to their label, app-wide

## Release v1.1.20.412

_2026-08-15_

**Feature**

- The Vulcan layer picker gets its buttons back

## Release v1.1.20.411

_2026-08-15_

**Bug Fix**

- Generated drawings find their own shelf, and keep their name

## Release v1.1.20.410

_2026-08-15_

**Bug Fix**

- Vulcan holes get their real bore, from the rig library

## Release v1.1.20.409

_2026-08-15_

**Bug Fix**

- Vulcan design databases open in Kirra, blasts and all

## Release v1.1.20.408

_2026-08-14_

**Bug Fix**

- Replace is undoable, and bake keeps its scope after the prep

## Release v1.1.20.407

_2026-08-14_

**Feature**

- Bake asks about the holes it cannot bake, instead of skipping them

## Release v1.1.20.406

_2026-08-14_

**Bug Fix**

- Zh_CN catches up: the cord and circuit UI, from the T/CSEB standard

## Release v1.1.20.405

_2026-08-14_

History not available at the moment.

## Release v1.1.20.404

_2026-08-14_

**Feature**

- Comp-geo skill: camera orbit frames and the up-vector

## Release v1.1.20.403

_2026-08-14_

**Bug Fix**

- 3D turntable rotation now matches Maptek Vulcan behaviour

## Release v1.1.20.402

_2026-08-14_

**Bug Fix**

- Drag up and Z follows the mouse; the sign was backwards

## Release v1.1.20.401

_2026-08-14_

History not available at the moment.

## Release v1.1.20.400

_2026-08-14_

**Bug Fix**

- The turntable goes over the top; no Z limit

## Release v1.1.20.399

_2026-08-14_

**Bug Fix**

- The Z-up turntable is the default orbit

## Release v1.1.20.398

_2026-08-14_

**Feature**

- Turntable orbit: Z-up, fixed pivot, no roll

## Release v1.1.20.397

_2026-08-14_

**Bug Fix**

- The save finishes in the background, and the app stays usable

## Release v1.1.20.396

_2026-08-14_

History not available at the moment.

## Release v1.1.20.395

_2026-08-14_

History not available at the moment.

## Release v1.1.20.394

_2026-08-14_

History not available at the moment.

## Release v1.1.20.393

_2026-08-14_

**Bug Fix**

- The save reports itself, and the fallback message gets to the point

## Release v1.1.20.392

_2026-08-14_

**Bug Fix**

- Revert the Save-later prompt; the progress-panel flow is back

## Release v1.1.20.391

_2026-08-14_

**Bug Fix**

- Batch surface export builds first, then asks where to save

## Release v1.1.20.390

_2026-08-14_

**Bug Fix**

- Put the save stream back where it was, and slice the write

## Release v1.1.20.389

_2026-08-14_

**Bug Fix**

- A save that did not happen stops reporting success

## Release v1.1.20.388

_2026-08-14_

**Bug Fix**

- Exports stop failing: a stale write stream, and a big .00t

## Release v1.1.20.387

_2026-08-14_

**Feature**

- The converted blast gets one initiation point, not two

## Release v1.1.20.386

_2026-08-14_

**Feature**

- Prove the conversion survives being applied, not just planned

## Release v1.1.20.385

_2026-08-14_

**Feature**

- Convert to hole ties now matches the hand-tied twin exactly

## Release v1.1.20.384

_2026-08-13_

**Feature**

- Convert to hole ties: no tie longer than the pattern spacing

## Release v1.1.20.383

_2026-08-13_

History not available at the moment.

## Release v1.1.20.382

_2026-08-13_

**Feature**

- Convert to hole ties: shape from adjacency, time from the solve

## Release v1.1.20.381

_2026-08-13_

**Feature**

- Surfaces keep their individuality on export

## Release v1.1.20.380

_2026-08-13_

History not available at the moment.

## Release v1.1.20.379

_2026-08-13_

History not available at the moment.

## Release v1.1.20.378

_2026-08-13_

**Feature**

- Bake will not run across blasts unasked; network icon

## Release v1.1.20.377

_2026-08-13_

History not available at the moment.

## Release v1.1.20.376

_2026-08-13_

**Feature**

- Convert to hole ties keeps the relays, or says why it cannot

## Release v1.1.20.375

_2026-08-13_

**Feature**

- Network properties

## Release v1.1.20.374

_2026-08-13_

**Feature**

- Data Explorer groups trunks by network

## Release v1.1.20.373

_2026-08-12_

**Feature**

- Trunk networks

## Release v1.1.20.372

_2026-08-12_

**Bug Fix**

- A harness path can no longer haunt a hole

## Release v1.1.20.371

_2026-08-12_

**Feature**

- Cord trunks now print

## Release v1.1.20.370

_2026-08-12_

**Feature**

- Trunk properties now report the whole circuit

## Release v1.1.20.369

_2026-08-12_

**Feature**

- An inline delay now cuts the cord trunk

## Release v1.1.20.368

_2026-08-12_

**Feature**

- Cord runs that touch are now tied

## Release v1.1.20.367

_2026-08-12_

**Bug Fix**

- A run can no longer be knotted to itself

## Release v1.1.20.366

_2026-08-12_

**Feature**

- New KAD text keeps its line breaks

## Release v1.1.20.365

_2026-08-12_

**Feature**

- Trunk right-click menu works in 3D

## Release v1.1.20.364

_2026-08-12_

**Bug Fix**

- Trunk colour and width belong to the product

## Release v1.1.20.363

_2026-08-12_

**Feature**

- Trunk properties dialog + Data Explorer highlight

## Release v1.1.20.362

_2026-08-12_

**Feature**

- Undo/redo for trunk operations

## Release v1.1.20.361

_2026-08-11_

**Bug Fix**

- Backspace no longer resurrects ties; lattice hide-rule

## Release v1.1.20.360

_2026-08-11_

**Bug Fix**

- Reconnect hole-to-trunk works again

## Release v1.1.20.359

_2026-08-11_

**Feature**

- Dragging a trunk node snaps to other runs

## Release v1.1.20.358

_2026-08-11_

**Bug Fix**

- Regression test locking the primary-vs-record decision

## Release v1.1.20.357

_2026-08-11_

**Feature**

- The initiation-point gesture works in Multi and Continuous

## Release v1.1.20.356

_2026-08-11_

**Feature**

- Click a hole twice to make it an initiation point

## Release v1.1.20.355

_2026-08-11_

**Bug Fix**

- Hole-to-hole tools work again; Reset really resets

## Release v1.1.20.354

_2026-08-11_

**Bug Fix**

- Trunk targeting works in 3D; trunk hide/show is wired

## Release v1.1.20.353

_2026-08-11_

**Bug Fix**

- Delete Tie works in 3D; the capture stadium shows in 3D

## Release v1.1.20.352

_2026-08-11_

**Bug Fix**

- 3D nodes are true screen-space points; the house is filled

## Release v1.1.20.351

_2026-08-11_

History not available at the moment.

## Release v1.1.20.350

_2026-08-11_

**Bug Fix**

- Trunk edits recalculate; knots snap; nodes are targets

## Release v1.1.20.349

_2026-08-11_

History not available at the moment.

## Release v1.1.20.348

_2026-08-11_

**Bug Fix**

- Knot two existing runs, and a house means what it says

## Release v1.1.20.347

_2026-08-11_

**Bug Fix**

- The closing leg of a loop is cord like any other

## Release v1.1.20.346

_2026-08-11_

**Feature**

- The knot: cord tied to cord, and the lattice

## Release v1.1.20.345

_2026-08-11_

**Bug Fix**

- Confirmation dialogs fit their text

## Release v1.1.20.344

_2026-08-11_

**Bug Fix**

- Deleting a trunk now removes all of its connections

## Release v1.1.20.343

_2026-08-11_

**Bug Fix**

- Self-connecting trunks, and the bridging det's second head

## Release v1.1.20.342

_2026-08-11_

History not available at the moment.

## Release v1.1.20.341

_2026-08-11_

**Bug Fix**

- Branches now reach the nearest point on the trunk

## Release v1.1.20.340

_2026-08-11_

**Feature**

- The cord trunk is now a timed circuit; a splice really splices

## Release v1.1.20.339

_2026-08-11_

**Bug Fix**

- Inline connectors now contribute their delay on every edge

## Release v1.1.20.338

_2026-08-11_

**Bug Fix**

- Initiation points, trunk nodes, and removable inline delays

## Release v1.1.20.337

_2026-08-10_

**Bug Fix**

- Drop the product-cleared notice; the undef chip says it

## Release v1.1.20.336

_2026-08-11_

**Bug Fix**

- Undef chip shows which connector product is in force

## Release v1.1.20.335

_2026-08-11_

**Bug Fix**

- One bow tie size, and the node/edge spine

## Release v1.1.20.334

_2026-08-11_

**Bug Fix**

- Trunks draw at the same weight as every other product

## Release v1.1.20.333

_2026-08-11_

**Bug Fix**

- Trunk & Branch no longer draws interholes on top of itself

## Release v1.1.20.332

_2026-08-11_

**Bug Fix**

- The missing 3D connections, and no arrows on cord

## Release v1.1.20.331

_2026-08-10_

**Bug Fix**

- 2D/3D parity for cord connectors, loops and extra feeds

## Release v1.1.20.330

_2026-08-10_

**Feature**

- Trunk tool continues an existing trunk, Illustrator pen-style

## Release v1.1.20.329

_2026-08-10_

**Feature**

- A click anywhere along a trunk, not just on its corners

## Release v1.1.20.328

_2026-08-10_

**Feature**

- Re-attach a branch to a trunk

## Release v1.1.20.327

_2026-08-10_

**Feature**

- Cord trunks can close on themselves (a loop)

## Release v1.1.20.326

_2026-08-10_

**Bug Fix**

- Cord travel along the trunk, and inline DRC delays applied

## Release v1.1.20.325

_2026-08-10_

**Bug Fix**

- Inline DRCs on a trunk, branch removal, and the missing tree refresh

## Release v1.1.20.324

_2026-08-10_

**Feature**

- Trunk & Branch accepts cord and bell wire

## Release v1.1.20.323

_2026-08-10_

**Bug Fix**

- Icon test: public/icons is the served location
- Connectors Remove tool: take out one tie

## Release v1.1.20.322

_2026-08-10_

**Bug Fix**

- Timing: real minimum path, and stop rounding away cord burn

## Release v1.1.20.321

_2026-08-10_

**Feature**

- A hole can hold many connections: every tie tool, product-driven

## Release v1.1.20.320

_2026-08-10_

**Feature**

- Connector symbols: bow tie for a DRC, half-arrow for a bridging det

## Release v1.1.20.319

_2026-08-10_

**Feature**

- Connection records: a hole can hold more than one link

## Release v1.1.20.318

_2026-08-09_

**Feature**

- Warn when a typed delay or colour drops the connector product

## Release v1.1.20.317

_2026-08-09_

**Feature**

- Detonating cord draws no direction arrow

## Release v1.1.20.316

_2026-08-09_

**Feature**

- Bidirectional connectors emit a reverse timing edge

## Release v1.1.20.315

_2026-08-09_

**Feature**

- Surface Cord Connector product type + bidirectional flag

## Release v1.1.20.314

_2026-08-09_

**Feature**

- Blast groups: the same three KAP failures as trunks

## Release v1.1.20.313

_2026-08-09_

**Feature**

- KAP round-trip for Trunk & Branch trunks

## Release v1.1.20.312

_2026-08-09_

**Bug Fix**

- Convert to Hole Ties icon + label, and the resume note

## Release v1.1.20.311

_2026-08-09_

**Bug Fix**

- Self-connect marker: 2D/3D parity

## Release v1.1.20.309

_2026-08-09_

**Bug Fix**

- House icon: selection changes colour only

## Release v1.1.20.308

_2026-08-09_

**Feature**

- 3D trunk vertices: highlight, and a drag that tracks

## Release v1.1.20.307

_2026-08-09_

**Feature**

- 3D: drop the duplicate zigzag, and move trunk vertices

## Release v1.1.20.306

_2026-08-09_

**Feature**

- Trunk & Branch in 3D, and Convert to hole-to-hole ties

## Release v1.1.20.305

_2026-08-08_

**Feature**

- Trunk endpoints are pseudo-holes for the tie tools

## Release v1.1.20.304

_2026-08-08_

**Bug Fix**

- Trunk & Branch: branches stay perpendicular to the trunk

## Release v1.1.20.303

_2026-08-08_

**Feature**

- Trunk & Branch: move a vertex, harness-coloured preview

## Release v1.1.20.302

_2026-08-08_

**Bug Fix**

- Trunk & Branch: house symbol, real selection, tree, undo

## Release v1.1.20.301

_2026-08-08_

**Feature**

- Trunk & Branch: vertices, arrowheads, path colour, backspace

## Release v1.1.20.299

_2026-08-08_

**Bug Fix**

- Trunk & Branch: ties overwrite, so harness wire works

## Release v1.1.20.298

_2026-08-08_

**Feature**

- Trunk & Branch rebuilt on the Continuous methodology

## Release v1.1.20.297

_2026-08-08_

**Bug Fix**

- Reset Connections now clears every connection

## Release v1.1.20.296

_2026-08-08_

**Feature**

- Trunk & Branch: trunk storage + geometry (steps 1-2)

## Release v1.1.20.295

_2026-08-08_

**Feature**

- Continuous Tie: click free space, not just holes

## Release v1.1.20.294

_2026-08-06_

**Bug Fix**

- DXF: singular points sharing a name are one object

## Release v1.1.20.293

_2026-08-06_

History not available at the moment.

## Release v1.1.20.292

_2026-08-06_

**Bug Fix**

- KAD points: read the display toggles once per frame

## Release v1.1.20.291

_2026-08-06_

**Feature**

- ISIS P1+P2: record walk, layer scan, .isix index

## Release v1.1.20.290

_2026-08-06_

History not available at the moment.

## Release v1.1.20.289

_2026-08-05_

**Feature**

- Preset Library : share presets as json

## Release v1.1.20.288

_2026-08-05_

**Feature**

- Preset Library : presets in the CSV import dialog

## Release v1.1.20.287

_2026-08-05_

**Feature**

- Preset Library : presets in the CSV export dialog

## Release v1.1.20.286

_2026-08-05_

**Feature**

- Preset Library : the preset bar control

## Release v1.1.20.285

_2026-08-05_

**Feature**

- Preset Library : the generic named-preset store

## Release v1.1.20.284

_2026-08-05_

**Bug Fix**

- KAD vector-print parity, elevation draw order, fx:title/fx:comment

## Release v1.1.20.283

_2026-08-05_

**Feature**

- KAD Text dialog is tabbed, and the format settings persist

## Release v1.1.20.282

_2026-08-04_

**Feature**

- KAD Text dialog: size mode, font family and bearing at creation

**Bug Fix**

- Follow-up

## Release v1.1.20.281

_2026-08-04_

**Feature**

- 2D KAD linework: batched stroking (step 1 of the draw-loop pass)

## Release v1.1.20.280

_2026-08-04_

**Feature**

- Roboto added as a third bundled family

## Release v1.1.20.279

_2026-08-04_

**Bug Fix**

- Hole label defaults: "All labels" is no longer the easy click

## Release v1.1.20.278

_2026-08-04_

History not available at the moment.

## Release v1.1.20.277

_2026-08-04_

**Feature**

- Font is now a per-entity property (it was being discarded)

## Release v1.1.20.276

_2026-08-04_

**Feature**

- Anton wired into 2D and 3D; one font, one baseline, one size

## Release v1.1.20.275

_2026-08-04_

History not available at the moment.

## Release v1.1.20.274

_2026-08-04_

**Feature**

- Add Anton (ofl) font dependency

## Release v1.1.20.273

_2026-08-04_

**Bug Fix**

- 2D world text renders its true metre height

## Release v1.1.20.272

_2026-08-04_

**Bug Fix**

- Cache polygon fills; stop triangulating in the draw loop

## Release v1.1.20.271

_2026-08-04_

**Bug Fix**

- Fix: filled polygons froze the renderer

## Release v1.1.20.270

_2026-08-04_

**Feature**

- World (metres) is the default for new text; bulk text sizing

## Release v1.1.20.269

_2026-08-04_

**Bug Fix**

- Fix: text Size Mode / Height / Bearing did nothing

## Release v1.1.20.268

_2026-08-04_

**Feature**

- Unified Text System : world-scaled KAD text

## Release v1.1.20.267

_2026-08-04_

**Feature**

- Bulk "Fill Polygons" on a multi-polygon selection

## Release v1.1.20.266

_2026-08-04_

**Bug Fix**

- Fill opacity is a percent in the UI

## Release v1.1.20.265

_2026-08-04_

**Feature**

- KAD polygon fill (2D + 3D + print)

## Release v1.1.20.264

_2026-08-04_

**Bug Fix**

- Renumber Holes: guard row zone against other patterns & invisible holes

## Release v1.1.20.263

_2026-08-04_

History not available at the moment.

## Release v1.1.20.260

_2026-08-03_

**Feature**

- Dropdown arrows never sit on the text

## Release v1.1.20.259

_2026-08-03_

**Bug Fix**

- Fix tiled chevrons on the export panel dropdown

## Release v1.1.20.258

_2026-08-03_

**Feature**

- Select dropdown arrows visible in dark mode

## Release v1.1.20.257

_2026-08-03_

**Feature**

- Dialog icon buttons and selects follow the theme live

## Release v1.1.20.256

_2026-08-03_

**Bug Fix**

- STR export column list grows with the dialog

## Release v1.1.20.255

_2026-08-03_

**Feature**

- STR export column list uses Edit Mesh icon buttons

## Release v1.1.20.254

_2026-08-03_

**Bug Fix**

- DXF exports open in Vulcan again, and hole geometry stops drifting

## Release v1.1.20.253

_2026-08-02_

**Feature**

- KAD highlight alpha honoured, no more three.Color warnings

## Release v1.1.20.252

_2026-08-02_

**Feature**

- Tell the user when a new build has been deployed

## Release v1.1.20.251

_2026-08-02_

**Bug Fix**

- Move the remaining Kirra skills into the repo

## Release v1.1.20.250

_2026-08-02_

**Bug Fix**

- Move kirra-formula and kirra-timing-vars into the repo

## Release v1.1.20.249

_2026-08-02_

**Bug Fix**

- Bring every skill back in step with the engine

## Release v1.1.20.248

_2026-08-01_

**Bug Fix**

- Record why null-time holes are skipped, with the measured cases

## Release v1.1.20.247

_2026-08-01_

**Feature**

- Fire-time consumers route through the canonical resolver

## Release v1.1.20.246

_2026-08-01_

History not available at the moment.

## Release v1.1.20.245

_2026-08-01_

**Bug Fix**

- Excel-style = in formulas, and cautions that only fire on real faults

## Release v1.1.20.244

_2026-08-01_

**Feature**

- Report holes referencing a deleted timing construct

## Release v1.1.20.243

_2026-08-01_

**Bug Fix**

- Guard every destructive action in Electronic Timing

## Release v1.1.20.242

_2026-08-01_

**Bug Fix**

- Confirmation dialogs grow to fit their message

## Release v1.1.20.241

_2026-08-01_

History not available at the moment.

## Release v1.1.20.240

_2026-08-01_

**Feature**

- Confirm before deleting a timing construct

## Release v1.1.20.239

_2026-08-01_

**Feature**

- Script to package the user print skill for kirra-docs

## Release v1.1.20.238

_2026-08-01_

**Bug Fix**

- Formula reference drift test survives version bumps

## Release v1.1.20.237

_2026-08-01_

**Feature**

- Print Reference Pack: template + user skill + generated formula reference

## Release v1.1.20.236

_2026-08-01_

**Feature**

- Hole Properties: pick a surface tie product instead of re-tying

## Release v1.1.20.235

_2026-08-01_

**Feature**

- Harness path formulas, and the formula reference fills its dialog

## Release v1.1.20.234

_2026-08-01_

**Feature**

- Print templates: real firing time, and cautions for electronic blasts

## Release v1.1.20.233

_2026-08-01_

**Feature**

- Print templates: multi-line cells stay in their cell

## Release v1.1.20.232

_2026-07-30_

**Feature**

- Offset displays colour by magnitude: blue at 0, red at max, mirrored

## Release v1.1.20.231

_2026-07-30_

**Feature**

- Downhole Timing: five modes, one offset each

## Release v1.1.20.230

_2026-07-29_

**Feature**

- Downhole Timing display: choose times, offsets, or both

## Release v1.1.20.229

_2026-07-29_

**Bug Fix**

- Reconcile assignments button: prune deleted holes and adopt missing ones on demand

## Release v1.1.20.228

_2026-07-29_

**Bug Fix**

- Timing constructs reconcile on load: existing files repair themselves

## Release v1.1.20.227

_2026-07-29_

**Bug Fix**

- Inserted holes join their inherited timing construct; deleted holes stop counting

## Release v1.1.20.226

_2026-07-28_

**Feature**

- Boundary fallback uses the set burden/spacing; the default only covers blank fields

## Release v1.1.20.225

_2026-07-28_

History not available at the moment.

## Release v1.1.20.224

_2026-07-28_

History not available at the moment.

## Release v1.1.20.223

_2026-07-27_

History not available at the moment.

## Release v1.1.20.222

_2026-07-27_

History not available at the moment.

## Release v1.1.20.221

_2026-07-27_

History not available at the moment.

## Release v1.1.20.220

_2026-07-27_

History not available at the moment.

## Release v1.1.20.219

_2026-07-27_

**Bug Fix**

- Icon warm-cache: js-created icons no longer render blank

## Release v1.1.20.218

_2026-07-25_

**Feature**

- Move tool 3D snap: index narrowing + two pre-existing bugs

## Release v1.1.20.217

_2026-07-25_

**Bug Fix**

- Fix shipped corridor bug + index KAD segments

## Release v1.1.20.216

_2026-07-25_

**Bug Fix**

- 2D/3D button: same size as every other menubar button

## Release v1.1.20.215

_2026-07-25_

**Bug Fix**

- Move the Snap toggle to the header, styled as a menubar button

## Release v1.1.20.214

_2026-07-25_

**Feature**

- Wire the snap index into the 3D KAD vertex path

## Release v1.1.20.213

_2026-07-25_

History not available at the moment.

## Release v1.1.20.212

_2026-07-25_

**Bug Fix**

- Tree build is now awaitable; KAP import waits for it

## Release v1.1.20.211

_2026-07-25_

**Feature**

- KAP import: build the tree inside the progress dialog

## Release v1.1.20.210

_2026-07-25_

**Feature**

- KAP import: saves awaited with progress, tree built last

## Release v1.1.20.209

_2026-07-25_

History not available at the moment.

## Release v1.1.20.208

_2026-07-25_

**Feature**

- Snap: kill the 246-second intersection scan; gate snap during arcball coast

## Release v1.1.20.207

_2026-07-25_

**Bug Fix**

- Snap reaches every visible vertex and segment: caps removed

## Release v1.1.20.206

_2026-07-25_

**Feature**

- 3D snap: hoist per-point screen projection

## Release v1.1.20.205

_2026-07-25_

**Bug Fix**

- Null driver: drop undefined blocks at load, for all block models

## Release v1.1.20.204

_2026-07-25_

**Bug Fix**

- BMF: decode the voxel-grouped block order for regularised models

## Release v1.1.20.203

_2026-07-25_

**Bug Fix**

- Docs: vendor-sourced answers on .bdf/.bif and empty variables

## Release v1.1.20.202

_2026-07-25_

**Bug Fix**

- BMF: full parity audit with bmf.rs; ported what was missing

## Release v1.1.20.201

_2026-07-25_

**Bug Fix**

- BMF: grid can live at the model level

## Release v1.1.20.200

_2026-07-25_

History not available at the moment.

## Release v1.1.20.199

_2026-07-25_

**Bug Fix**

- BMF: upper-case attribute names so colour schemas match

## Release v1.1.20.198

_2026-07-25_

**Bug Fix**

- BMF: Vulcan's geometry vars are not data attributes

## Release v1.1.20.197

_2026-07-25_

History not available at the moment.

## Release v1.1.20.196

_2026-07-25_

**Feature**

- BMF increments 4+5: geometry + .bmf import wired

## Release v1.1.20.195

_2026-07-25_

**Feature**

- BMF increment 3: page-table value decode

## Release v1.1.20.194

_2026-07-25_

**Feature**

- BMF dictionaries + empty markers + attribute-select preview

## Release v1.1.20.193

_2026-07-25_

**Feature**

- BMF increment 2: ascii metadata + schema, windowed

## Release v1.1.20.192

_2026-07-25_

**Bug Fix**

- Axis Lock naming now matches the motion

## Release v1.1.20.191

_2026-07-25_

**Bug Fix**

- Momentum works in arcball mode; clearer wheel + speed labels

## Release v1.1.20.190

_2026-07-25_

**Bug Fix**

- Orbit drag speed, viewport-sized ball, working spin lock

## Release v1.1.20.189

_2026-07-25_

**Feature**

- Arcball orbit: the grab point rolls the view like a basketball

## Release v1.1.20.188

_2026-07-25_

History not available at the moment.

## Release v1.1.20.187

_2026-07-25_

**Feature**

- Unlimited continuous orbit: rotate the up-vector, not clamp the pitch

## Release v1.1.20.186

_2026-07-25_

**Feature**

- BMF parser increment 1: TBMS2.0 container

## Release v1.1.20.185

_2026-07-25_

History not available at the moment.

## Release v1.1.20.184

_2026-07-25_

**Feature**

- Duplicated surface now joins its source's layer

## Release v1.1.20.183

_2026-07-25_

**Bug Fix**

- Surface rename re-keys identity (same fix as KAD)

## Release v1.1.20.182

_2026-07-24_

**Bug Fix**

- Fix KAD tree-vs-model name divergence (the 630-end bug)

## Release v1.1.20.181

_2026-07-24_

**Feature**

- Line/Polygon Statistics: coloured xlsx (majority colour)

## Release v1.1.20.180

_2026-07-24_

**Feature**

- Surface Statistics: Save xlsx with cell colours

## Release v1.1.20.179

_2026-07-24_

**Bug Fix**

- Clip dialog: fix blank surface name on 🎯 pick of a duplicate

## Release v1.1.20.178

_2026-07-24_

**Feature**

- Clip Dissect: cycle face colours like Slices

## Release v1.1.20.177

_2026-07-24_

**Bug Fix**

- Clip Dissect: true 2D arrangement (bounded cuts)

## Release v1.1.20.176

_2026-07-24_

**Feature**

- Clip Dissect: wire worker + helper + Batch UI

## Release v1.1.20.175

_2026-07-24_

**Feature**

- Clip Dissect: pure divide-by-cutters engine

## Release v1.1.20.174

_2026-07-24_

**Feature**

- Clip Batch: 🎯 drives the dropdown, ＋ Add commits

## Release v1.1.20.173

_2026-07-24_

**Feature**

- Clip Batch: continuous 🎯 auto-add + circle-plus/minus icons

## Release v1.1.20.172

_2026-07-24_

**Feature**

- Clip batch dissect: wire the Batch tab UI

## Release v1.1.20.171

_2026-07-24_

**Feature**

- Clip batch dissect: polygon orchestration engine

## Release v1.1.20.170

_2026-07-24_

**Feature**

- Clip Surface/Solid: Single/Batch tab shell

## Release v1.1.20.169

_2026-07-24_

History not available at the moment.

## Release v1.1.20.168

_2026-07-23_

**Bug Fix**

- Clean Mesh per-issue actions: wire all trays + re-close

## Release v1.1.20.167

_2026-07-23_

**Bug Fix**

- Clean Mesh: per-issue actions (fix one defect at a time)

## Release v1.1.20.166

_2026-07-23_

**Feature**

- Clean Mesh T-Junction Resolve: auto-clean orphan slivers

## Release v1.1.20.165

_2026-07-23_

**Bug Fix**

- Duplicate surface: name from display name + 4-char uid

## Release v1.1.20.164

_2026-07-23_

**Feature**

- Bump trimesh-boolean 0.6.4 → 0.6.5 (T-junction near-edge snap)

## Release v1.1.20.163

_2026-07-23_

**Bug Fix**

- Fix mojibake em-dash in T-Junction resolve dialogs

## Release v1.1.20.162

_2026-07-23_

History not available at the moment.

## Release v1.1.20.161

_2026-07-23_

**Feature**

- Clean Mesh: T-Junction hole-free Resolve button

## Release v1.1.20.160

_2026-07-23_

**Feature**

- Clean Mesh: T-Junction detection + navigation

## Release v1.1.20.159

_2026-07-23_

**Feature**

- Bump trimesh-boolean 0.6.1 → 0.6.4 (published to npm)

## Release v1.1.20.158

_2026-07-21_

History not available at the moment.

## Release v1.1.20.157

_2026-07-21_

**Bug Fix**

- Visibility: back to the aggregate model + ghost-only hidden rows

## Release v1.1.20.152

_2026-07-21_

**Bug Fix**

- Visibility: tri-state (amber) container eyes aggregate from children

## Release v1.1.20.151

_2026-07-21_

**Bug Fix**

- Visibility: individual flag = single source of truth; stop KAP flip

## Release v1.1.20.150

_2026-07-21_

**Bug Fix**

- Mesh Edit: kill 3–5s Loop Select freeze (gate self-intersection scan)

## Release v1.1.20.149

_2026-07-21_

**Bug Fix**

- Simplify: register in 3D click dispatch (fix repeated-use in 3D)

## Release v1.1.20.148

_2026-07-21_

**Bug Fix**

- Simplify: adopt simplify-js library for the xy rdp path

## Release v1.1.20.147

_2026-07-21_

**Bug Fix**

- Simplify tool: 10mm tolerance steps (3dp), [Cancel][Create Copy][Apply]

## Release v1.1.20.146

_2026-07-21_

**Bug Fix**

- Simplify (rdp) Modify tool: lines/polys, 3D-aware + Z modes, live preview

## Release v1.1.20.145

_2026-07-21_

History not available at the moment.

## Release v1.1.20.144

_2026-07-21_

**Feature**

- Clean Mesh Check runs off-thread (no freeze on big meshes)

## Release v1.1.20.143

_2026-07-20_

**Feature**

- Clip commit path: preserve surface layer + notify open dialogs on replace

## Release v1.1.20.142

_2026-07-20_

**Bug Fix**

- Surface-layer reconcile guard + mesh-edit timing probe

## Release v1.1.20.141

_2026-07-20_

**Bug Fix**

- 3D: sticky local origin (fix hole-import origin shift,/)

## Release v1.1.20.140

_2026-07-19_

**Feature**

- Data Explorer: panel width = 20% of window (was fixed 444px)

## Release v1.1.20.139

_2026-07-19_

**Bug Fix**

- 3D: deferred repaint on 2D→3D switch (fixes blank-until-redraw)

## Release v1.1.20.138

_2026-07-19_

**Bug Fix**

- Surface tree swatch opens the gradient dropdown (Surface Properties)

## Release v1.1.20.137

_2026-07-19_

History not available at the moment.

## Release v1.1.20.136

_2026-07-19_

History not available at the moment.

## Release v1.1.20.135

_2026-07-19_

History not available at the moment.

## Release v1.1.20.134

_2026-07-19_

**Bug Fix**

- Vulcan .00t: read the colour appearance block on import (round-trip)

## Release v1.1.20.133

_2026-07-19_

**Bug Fix**

- Clean Mesh: Resolve Winding + Fill/redraw fixes; retire Weld All/Fix All

## Release v1.1.20.132

_2026-07-18_

**Bug Fix**

- Fix i18n-basic-view test after dictionary moved to a module

## Release v1.1.20.131

_2026-07-18_

History not available at the moment.

## Release v1.1.20.130

_2026-07-18_

**Bug Fix**

- Mesh Edit: self-intersection + Loop overlays refresh on edit (were stale)

## Release v1.1.20.129

_2026-07-18_

**Feature**

- Loop Select: pick an existing loop (not draw one); separate Fill button

## Release v1.1.20.128

_2026-07-18_

History not available at the moment.

## Release v1.1.20.127

_2026-07-18_

History not available at the moment.

## Release v1.1.20.126

_2026-07-18_

**Bug Fix**

- Loop Select: L shortcut + Face/Vertex/Loop mutually exclusive

## Release v1.1.20.125

_2026-07-18_

**Feature**

- Mesh Edit: Loop Select mode (fill a loop / clip a loop)

## Release v1.1.20.124

_2026-07-18_

**Bug Fix**

- Mesh Edit auto-repair fills only the void, never spans the mesh

## Release v1.1.20.123

_2026-07-18_

**Bug Fix**

- Clip by Fold Keep/Delete dialog compact (no dead space)

## Release v1.1.20.122

_2026-07-18_

History not available at the moment.

## Release v1.1.20.121

_2026-07-18_

**Feature**

- Clip by Fold: Delete/Keep dialog, framed as a plan-view hole punch

## Release v1.1.20.120

_2026-07-18_

**Bug Fix**

- Clip by Fold stays in Mesh Edit (re-enters on the cleaned piece)

## Release v1.1.20.119

_2026-07-18_

History not available at the moment.

## Release v1.1.20.118

_2026-07-18_

**Feature**

- Clip by Fold: click a self-intersection loop, clip the solid by it

## Release v1.1.20.117

_2026-07-18_

**Feature**

- Edit Mesh: "Show Self intersection polygons"

## Release v1.1.20.116

_2026-07-17_

**Feature**

- Tree Sort at every grouping level; blast holes default 0-9,A-Z

## Release v1.1.20.115

_2026-07-17_

History not available at the moment.

## Release v1.1.20.114

_2026-07-17_

**Feature**

- Weld tolerance is settable per tool, not hard-coded

## Release v1.1.20.113

_2026-07-17_

History not available at the moment.

## Release v1.1.20.112

_2026-07-17_

History not available at the moment.

## Release v1.1.20.111

_2026-07-16_

**Bug Fix**

- Coincident overlaps: exact plane predicate + sliver gate (kills phantom sites)

## Release v1.1.20.110

_2026-07-16_

**Bug Fix**

- Repair buttons now assess the damage (or state the benefit) first

## Release v1.1.20.109

_2026-07-16_

**Feature**

- Coincident Overlaps: group the drawer by site, not by pair

## Release v1.1.20.108

_2026-07-16_

**Feature**

- Coincident (coplanar) overlap detection: the defect Crossing Tris cannot see

## Release v1.1.20.107

_2026-07-16_

History not available at the moment.

## Release v1.1.20.106

_2026-07-16_

**Bug Fix**

- Solid Slice: 'Close Post Repair Steps' checkbox (guarded)

## Release v1.1.20.105

_2026-07-16_

**Bug Fix**

- Fix stuck zoom flag wedging snap off (time-based, self-clearing)

## Release v1.1.20.104

_2026-07-16_

**Bug Fix**

- Also suppress KAD snap during wheel-zoom

## Release v1.1.20.103

_2026-07-16_

**Bug Fix**

- Temp-disable KAD snap during view ops (orbit/rotate/pan)

## Release v1.1.20.102

_2026-07-16_

History not available at the moment.

## Release v1.1.20.101

_2026-07-16_

**Bug Fix**

- Surface footprint off the main thread (fixes Page Unresponsive)

## Release v1.1.20.100

_2026-07-16_

History not available at the moment.

## Release v1.1.20.99

_2026-07-16_

History not available at the moment.

## Release v1.1.20.98

_2026-07-15_

**Bug Fix**

- Refine two zh_CN hole slider labels to proper mining terms

## Release v1.1.20.97

_2026-07-15_

**Bug Fix**

- Correct three zh_CN blast-hole slider labels (native review)

## Release v1.1.20.96

_2026-07-15_

**Feature**

- Localise the toolbar tool-button tooltips (57 tools × 6 languages)

## Release v1.1.20.95

_2026-07-15_

**Feature**

- Localise the 10 remaining display on/off toggle tooltips

## Release v1.1.20.94

_2026-07-15_

History not available at the moment.

## Release v1.1.20.93

_2026-07-15_

**Feature**

- Menubar language dropdown portals above the dockview canvas

## Release v1.1.20.92

_2026-07-15_

**Feature**

- Toolbar reset button is now a toggle + single-row 4px layout

## Release v1.1.20.85

_2026-07-15_

**Bug Fix**

- DUF: OPFS random-access parse, no size cap

## Release v1.1.20.84

_2026-07-15_

**Feature**

- DUF large-file import: raise worker decompression cap + halve peak

## Release v1.1.20.83

_2026-07-15_

History not available at the moment.

## Release v1.1.20.82

_2026-07-15_

**Bug Fix**

- Surface Statistics Colour column: gradient surfaces show a ramp swatch

## Release v1.1.20.81

_2026-07-15_

**Bug Fix**

- Surface Statistics: colour cell falls back to (never blank)

## Release v1.1.20.80

_2026-07-15_

**Bug Fix**

- Colour-cell contrast (wcag) + sanitise style.background

## Release v1.1.20.79

_2026-07-15_

**Bug Fix**

- Surface Statistics: Colour column (hillshade colour swatch)

## Release v1.1.20.78

_2026-07-15_

History not available at the moment.

## Release v1.1.20.77

_2026-07-15_

**Bug Fix**

- Triangle-limit guards reference Settings + "Adjust Settings" button

## Release v1.1.20.76

_2026-07-15_

History not available at the moment.

## Release v1.1.20.75

_2026-07-15_

History not available at the moment.

## Release v1.1.20.74

_2026-07-15_

History not available at the moment.

## Release v1.1.20.73

_2026-07-15_

History not available at the moment.

## Release v1.1.20.72

_2026-07-15_

History not available at the moment.

## Release v1.1.20.71

_2026-07-15_

**Bug Fix**

- Retire old Surface Boolean tool

## Release v1.1.20.70

_2026-07-15_

History not available at the moment.

## Release v1.1.20.69

_2026-07-15_

History not available at the moment.

## Release v1.1.20.68

_2026-07-14_

**Bug Fix**

- DUF: restore 4 output-contract behaviours the record-framed rewrite dropped

## Release v1.1.20.67

_2026-07-14_

**Bug Fix**

- Language selector moved to left-nav accordion (above File Management)

## Release v1.1.20.66

_2026-07-14_

**Bug Fix**

- .00t export: resolve surface colour from the right field (hillshade + case)

## Release v1.1.20.65

_2026-07-14_

History not available at the moment.

## Release v1.1.20.64

_2026-07-14_

**Bug Fix**

- .00t colour: write the Vulcan header marker so colour sticks

## Release v1.1.20.63

_2026-07-14_

**Bug Fix**

- .00t export: use the standard file-save system (drop directory picker)

## Release v1.1.20.62

_2026-07-14_

**Feature**

- .00t export: gradient surfaces export as neutral grey

## Release v1.1.20.61

_2026-07-14_

**Feature**

- .00t export: batch all visible surfaces, each in its app colour

## Release v1.1.20.60

_2026-07-14_

History not available at the moment.

## Release v1.1.20.59

_2026-07-14_

History not available at the moment.

## Release v1.1.20.58

_2026-07-14_

**Feature**

- .00t: wire Vulcan .00t surface export into File Management

## Release v1.1.20.57

_2026-07-14_

History not available at the moment.

## Release v1.1.20.56

_2026-07-14_

**Bug Fix**

- .00t: stale orphan page no longer steals a live page slot

## Release v1.1.20.55

_2026-07-14_

History not available at the moment.

## Release v1.1.20.54

_2026-07-14_

History not available at the moment.

## Release v1.1.20.53

_2026-07-14_

History not available at the moment.

## Release v1.1.20.52

_2026-07-14_

**Feature**

- Clip Solid review work to main (web deploy)

## Release v1.1.20.51

_2026-07-13_

**Feature**

- Solid Slice: per-band cyclic hillshade colours

## Release v1.1.20.50

_2026-07-13_

**Bug Fix**

- Solid Slice: cdt open-edge cap with tread removal + Top/Bottom plates

## Release v1.1.20.49

_2026-07-13_

**Feature**

- Solid Slice: signed coincident-level nudge (+ experimental coplanar cap)

## Release v1.1.20.48

_2026-07-13_

**Bug Fix**

- Start Fresh clears layer definitions too

## Release v1.1.20.47

_2026-07-13_

**Feature**

- B3: indexed edge census kills the multi-million-tri oom

## Release v1.1.20.46

_2026-07-13_

**Feature**

- B2a: render path handles indexed-only surfaces

## Release v1.1.20.45

_2026-07-13_

**Bug Fix**

- Adopt standing rule: runtime code never reaches main unverified

## Release v1.1.20.44

_2026-07-13_

**Bug Fix**

- Dev version bump

## Release v1.1.20.43

_2026-07-12_

**Bug Fix**

- Live checkpoint (bvh detach fix); resume:/ quarantined, redo the day 1-by-1

## Release v1.1.20.42

_2026-07-10_

History not available at the moment.

## Release v1.1.20.41

_2026-07-10_

History not available at the moment.

## Release v1.1.20.40

_2026-07-10_

History not available at the moment.

## Release v1.1.20.39

_2026-07-10_

History not available at the moment.

## Release v1.1.20.38

_2026-07-09_

History not available at the moment.

## Release v1.1.20.37

_2026-07-09_

History not available at the moment.

## Release v1.1.20.36

_2026-07-09_

History not available at the moment.

## Release v1.1.20.35

_2026-07-09_

History not available at the moment.

## Release v1.1.20.34

_2026-07-09_

History not available at the moment.

## Release v1.1.20.33

_2026-07-09_

**Feature**

- Ramp wall: split bridge-slash toe lines on U-turns

## Release v1.1.20.32

_2026-07-09_

**Feature**

- Ramp wall datum: anchor to true road-profile envelope

## Release v1.1.20.31

_2026-07-09_

**Feature**

- Ramp low-wall fold trim (extend-back to T-junction)

## Release v1.1.20.30

_2026-07-09_

**Feature**

- Ramp wall: continuous level benches (coupled drop + join); stage Clipper nesting

## Release v1.1.20.29

_2026-07-08_

History not available at the moment.

## Release v1.1.20.28

_2026-07-08_

**Feature**

- Ramp: lines survive commit + Bezier self-intersection clip

## Release v1.1.20.27

_2026-07-07_

**Bug Fix**

- Ramp live preview: freeze the wall datum to committed points

## Release v1.1.20.26

_2026-07-07_

**Bug Fix**

- Ramp bend-blend: windrow no longer deletes the low wall on curves

## Release v1.1.20.25

_2026-07-07_

**Bug Fix**

- Ruler/protractor: red-label shadow only on dark gray

## Release v1.1.20.24

_2026-07-07_

**Feature**

- Unify ruler/protractor panels with the datatip style (Kirra palette)

## Release v1.1.20.23

_2026-07-07_

**Bug Fix**

- Fix ruler/protractor panel position source (follow the measured point)

## Release v1.1.20.22

_2026-07-07_

**Bug Fix**

- Smooth ruler + protractor hud panels (kill the jitter)

## Release v1.1.20.21

_2026-07-07_

**Feature**

- Ramp dialog remembers last-used settings

## Release v1.1.20.20

_2026-07-07_

**Feature**

- Ramp walls: nested cross-section + berm tapers into the toe

## Release v1.1.20.19

_2026-07-07_

**Bug Fix**

- Ramp wall corner blend: smooth bezier fillet (no residual bevel)

## Release v1.1.20.18

_2026-07-07_

**Feature**

- Ramp Wall tab: Corner Blend (%) control

## Release v1.1.20.17

_2026-07-07_

**Feature**

- Ramp walls: round elbows at joins + split at bend-blend gaps

## Release v1.1.20.16

_2026-07-07_

**Feature**

- Ramp wall benches tie back into the ramp at daylight

## Release v1.1.20.15

_2026-07-06_

**Feature**

- Ramp wall bend blend (curvature-aware taper at tight bends)

## Release v1.1.20.14

_2026-07-06_

**Bug Fix**

- Ramp wall benches are level (fixed-RL shelves, not ramp-relative)

## Release v1.1.20.13

_2026-07-06_

**Feature**

- Ramp walls: two datum RLs (High→top, Low→bottom, inverted)

## Release v1.1.20.12

_2026-07-06_

**Bug Fix**

- Fix ramp Low walls never generating (direction from High/Low)

## Release v1.1.20.11

_2026-07-06_

**Feature**

- Ramp Low-High Wall dialog tab + wiring

## Release v1.1.20.10

_2026-07-06_

**Bug Fix**

- Fix snapping to a Z=0 line (falsy-zero)

## Release v1.1.20.9

_2026-07-06_

**Feature**

- Ramp Tool crossfall (transverse camber)

## Release v1.1.20.8

_2026-07-06_

**Feature**

- 2D top-down stays in sync with 3D mesh edits

## Release v1.1.20.7

_2026-07-06_

**Feature**

- Ramp Tool anchor mode (edge rides the clicks)

## Release v1.1.20.6

_2026-07-05_

History not available at the moment.

## Release v1.1.20.5

_2026-07-05_

History not available at the moment.

## Release v1.1.20.4

_2026-07-05_

**Bug Fix**

- Request a render frame when a surface mesh is first added (3D)

## Release v1.1.20.3

_2026-07-05_

**Feature**

- Fold analysis + textured surface branches onto the transparency helper

## Release v1.1.20.2

_2026-07-05_

**Bug Fix**

- Fix 3D surface transparency not applying until a gradient change

## Release v1.1.20.1

_2026-07-05_

**Feature**

- Clip Surface spatial pre-classification (15-min clip → seconds)

## Release v1.1.20

_2026-07-05_

**Feature**

- Tauri desktop build (2D GPU surface pipeline)

## Release v1.1.14.46

_2026-07-01_

History not available at the moment.

## Release v1.1.14.45

_2026-06-30_

History not available at the moment.

## Release v1.1.14.44

_2026-06-30_

History not available at the moment.

## Release v1.1.14.43

_2026-06-30_

History not available at the moment.

## Release v1.1.14.42

_2026-06-30_

History not available at the moment.

## Release v1.1.14.41

_2026-06-30_

History not available at the moment.

## Release v1.1.14.40

_2026-06-30_

History not available at the moment.

## Release v1.1.14.39

_2026-06-30_

History not available at the moment.

## Release v1.1.14.38

_2026-06-30_

History not available at the moment.

## Release v1.1.14.37

_2026-06-30_

History not available at the moment.

## Release v1.1.14.36

_2026-06-30_

History not available at the moment.

## Release v1.1.14.35

_2026-06-30_

History not available at the moment.

## Release v1.1.14.34

_2026-06-30_

History not available at the moment.

## Release v1.1.14.33

_2026-06-30_

History not available at the moment.

## Release v1.1.14.32

_2026-06-30_

History not available at the moment.

## Release v1.1.14.31

_2026-06-30_

History not available at the moment.

## Release v1.1.14.30

_2026-06-30_

History not available at the moment.

## Release v1.1.14.29

_2026-06-29_

History not available at the moment.

## Release v1.1.14.28

_2026-06-29_

History not available at the moment.

## Release v1.1.14.27

_2026-06-29_

History not available at the moment.

## Release v1.1.14.26

_2026-06-29_

History not available at the moment.

## Release v1.1.14.25

_2026-06-29_

History not available at the moment.

## Release v1.1.14.24

_2026-06-29_

History not available at the moment.

## Release v1.1.14.23

_2026-06-29_

History not available at the moment.

## Release v1.1.14.22

_2026-06-29_

History not available at the moment.

## Release v1.1.14.21

_2026-06-29_

History not available at the moment.

## Release v1.1.14.20

_2026-06-29_

History not available at the moment.

## Release v1.1.14.19

_2026-06-29_

History not available at the moment.

## Release v1.1.14.18

_2026-06-29_

History not available at the moment.

## Release v1.1.14.17

_2026-06-28_

History not available at the moment.

## Release v1.1.14.16

_2026-06-28_

History not available at the moment.

## Release v1.1.14.15

_2026-06-28_

History not available at the moment.

## Release v1.1.14.14

_2026-06-27_

History not available at the moment.

## Release v1.1.14.13

_2026-06-27_

History not available at the moment.

## Release v1.1.14.12

_2026-06-27_

History not available at the moment.

## Release v1.1.14.11

_2026-06-27_

History not available at the moment.

## Release v1.1.14.10

_2026-06-27_

History not available at the moment.

## Release v1.1.14.9

_2026-06-27_

History not available at the moment.

## Release v1.1.14.8

_2026-06-27_

History not available at the moment.

## Release v1.1.14.7

_2026-06-27_

History not available at the moment.

## Release v1.1.14.6

_2026-06-27_

History not available at the moment.

## Release v1.1.14.5

_2026-06-27_

History not available at the moment.

## Release v1.1.14.4

_2026-06-27_

History not available at the moment.

## Release v1.1.14.3

_2026-06-27_

History not available at the moment.

## Release v1.1.14.2

_2026-06-27_

History not available at the moment.

## Release v1.1.14.1

_2026-06-27_

History not available at the moment.

## Release v1.1.14

_2026-06-27_

History not available at the moment.

## Release v1.1.13

_2026-06-27_

History not available at the moment.

## Release v1.1.12

_2026-06-27_

History not available at the moment.

## Release v1.1.11

_2026-06-27_

History not available at the moment.

## Release v1.1.10

_2026-06-27_

**Feature**

- Tauri desktop build

## Release v1.1.3

_2026-06-27_

History not available at the moment.

## Release v1.1.2

_2026-06-26_

History not available at the moment.

## Release v1.1.1

_2026-06-26_

History not available at the moment.

## Release v1.1.0

_2026-06-26_

**Bug Fix**

- Milestone desktop release (Tauri build)

## Release v1.0.300

_2026-06-25_

History not available at the moment.

## Release v1.0.295.97

_2026-06-25_

History not available at the moment.

## Release v1.0.295.96

_2026-06-25_

**Bug Fix**

- DUF: revert invented layer/colour work; no-colour → gray

## Release v1.0.295.95

_2026-06-25_

**Bug Fix**

- DUF: by-layer entities get a colour, not white

## Release v1.0.295.94

_2026-06-25_

**Feature**

- DUF: layer-aware import (step 1)

## Release v1.0.295.93

_2026-06-25_

**Bug Fix**

- DUF: detect closed rings whose closed-field isn't at -9

## Release v1.0.295.92

_2026-06-25_

**Feature**

- Import/Export: DUF in CAD, gis → Miscellaneous

## Release v1.0.295.91

_2026-06-25_

**Feature**

- Import/Export dialog: compact 2-line format cards

## Release v1.0.295.90

_2026-06-24_

**Bug Fix**

- DUF: fix closed polygons that closed onto the 2nd vertex

## Release v1.0.295.89

_2026-06-24_

**Bug Fix**

- DUF: closed rings (gap fix) + per-entity colour

## Release v1.0.295.88

_2026-06-24_

**Bug Fix**

- DUF: drop origin symbol/glyph definitions (clutter fix)

## Release v1.0.295.87

_2026-06-24_

**Feature**

- Lone .str drag-drop: ask holes vs geometry

**Bug Fix**

- Move-tool 2D snap parity + bearing tool progressive rotation & independence

## Release v1.0.295.86

_2026-06-24_

**Feature**

- Deswik DUF: large-file scratch-disk + worker import path

## Release v1.0.295.85

_2026-06-24_

**Feature**

- Deswik DUF parser: working marker-based linework import

## Release v1.0.295.84

_2026-06-24_

**Feature**

- Block-model colourise icon + design plans

## Release v1.0.295.83

_2026-06-24_

**Feature**

- Hole label-override list mirrors the display toggle buttons

## Release v1.0.295.82

_2026-06-24_

**Feature**

- 3D support for the hole bearing/rotate tool

## Release v1.0.295.81

_2026-06-24_

**Bug Fix**

- Fix: Surpac/Deswik DTM connections wrong on multi-string STR

## Release v1.0.295.80

_2026-06-24_

**Feature**

- Selection: plain-click clears/swaps + shift seeds multi from single

## Release v1.0.295.79

_2026-06-23_

**Bug Fix**

- Fix: dev block-model persist crashed on huge models

## Release v1.0.295.78

_2026-06-23_

**Feature**

- Snap KAD to block cell corners/edges (3D draw path)

## Release v1.0.295.77

_2026-06-23_

**Bug Fix**

- Fix: Wire-only block style vanished with bench slice off

## Release v1.0.295.76

_2026-06-23_

**Feature**

- Block model load: null-driver empty-cell skip + sectioned select dialog

## Release v1.0.295.75

_2026-06-23_

**Bug Fix**

- Block-model schema builder: fix falsy-zero, allow negative bands

## Release v1.0.295.74

_2026-06-23_

**Feature**

- Datamine .dm: support single-precision (Surpac) files

## Release v1.0.295.73

_2026-06-23_

**Bug Fix**

- Block model dialog: Display/Limits tabs, Remove fix, Kirra-red accents

## Release v1.0.295.72

_2026-06-23_

**Feature**

- Block model transparent render: exposed-shell wireframe

## Release v1.0.295.71

_2026-06-22_

**Bug Fix**

- Discrete/Categories panel chips refresh on schema change

## Release v1.0.295.70

_2026-06-22_

**Bug Fix**

- Fix colour swatches not sticking (jscolor fires no dom events)

## Release v1.0.295.69

_2026-06-22_

**Bug Fix**

- Live-refresh Modify on schema edits + lowercase hex rule

## Release v1.0.295.68

_2026-06-22_

**Feature**

- Colour schemas: named parent → per-attribute children

## Release v1.0.295.67

_2026-06-22_

**Feature**

- Discrete intervals show/hide panel in block-model Modify

## Release v1.0.295.66

_2026-06-22_

History not available at the moment.

## Release v1.0.295.65

_2026-06-22_

**Feature**

- Load dialog: Colour-by Gradient/Schema toggle + scheme legend

## Release v1.0.295.64

_2026-06-22_

**Feature**

- Schema editor: 3 type modes (Ranges / Discrete / Categorical)

## Release v1.0.295.63

_2026-06-22_

**Feature**

- Block-model schemes: 'discrete' kind (integers as categories)

## Release v1.0.295.62

_2026-06-22_

**Bug Fix**

- Fix colour swatch read (rgb value → grey) in scheme editor

## Release v1.0.295.61

_2026-06-22_

**Feature**

- Block Model Schema Colours dialog (create/save/assign/import/export)

## Release v1.0.295.60

_2026-06-22_

**Feature**

- Block-model colour schemes: numeric bands/interval support

## Release v1.0.295.59

_2026-06-22_

**Feature**

- Dev-only block-model session persistence (test aid)

## Release v1.0.295.58

_2026-06-22_

**Feature**

- Block-model colour schemes Step 1 (engine + scheme model)

## Release v1.0.295.57

_2026-06-21_

**Bug Fix**

- Honest Performance Monitor fps / frame-time

## Release v1.0.295.56

_2026-06-21_

**Feature**

- Find / Select / Zoom tool (chip query builder)

## Release v1.0.295.55

_2026-06-21_

**Bug Fix**

- Remove BMF decode code (bloat); keep "not supported" + findings

## Release v1.0.295.54

_2026-06-21_

**Feature**

- Park BMF import (work in progress); mark 00T wip too

## Release v1.0.295.53

_2026-06-20_

**Feature**

- BMF : grades in the app via attribute-picker

## Release v1.0.295.52

_2026-06-20_

**Feature**

- BMF : paged-data decoder (grades)

## Release v1.0.295.51

_2026-06-20_

**Feature**

- Vulcan BMF (TBMS2.0) block-model import (: geometry)

## Release v1.0.295.50

_2026-06-20_

**Feature**

- Block model: spatial limit (inside a closed solid)

## Release v1.0.295.49

_2026-06-20_

**Feature**

- Block model: spatial limit (below/above a surface)

## Release v1.0.295.48

_2026-06-20_

**Feature**

- Block model: spatial limit (box range)

## Release v1.0.295.47

_2026-06-20_

History not available at the moment.

## Release v1.0.295.46

_2026-06-19_

**Feature**

- Orbit focus: allow landing on Trimesh Boolean split previews

## Release v1.0.295.45

_2026-06-19_

**Feature**

- Use published trimesh-boolean 0.5.9

## Release v1.0.295.44

_2026-06-19_

**Feature**

- Trimesh reclassify: edge-distance sliver pick + highlight-as-guard

## Release v1.0.295.43

_2026-06-19_

**Feature**

- Trimesh reclassify: screen-space fallback to select thin slivers

## Release v1.0.295.42

_2026-06-19_

**Bug Fix**

- Trimesh boolean dialog: ghost opacity + reclassify-hidden render fix

## Release v1.0.295.41

_2026-06-19_

**Feature**

- Trimesh boolean: worker watchdog (no infinite freeze)

## Release v1.0.295.40

_2026-06-19_

History not available at the moment.

## Release v1.0.295.39

_2026-06-19_

History not available at the moment.

## Release v1.0.295.38

_2026-06-19_

**Feature**

- Transform tool: add Scale (X/Y/Z + Uniform)

## Release v1.0.295.37

_2026-06-19_

**Feature**

- Text → Poly: vectorise KAD text to polylines (context menu)

## Release v1.0.295.36

_2026-06-18_

**Feature**

- Footprint Edge: guard closed solids with an info popup

## Release v1.0.295.35

_2026-06-18_

**Feature**

- Footprint Ceiling/Floor = true orthographic shadow (clipper union)

## Release v1.0.295.34

_2026-06-18_

**Feature**

- Footprint: clean outline (boundary-first + rdp), no staircase

## Release v1.0.295.33

_2026-06-18_

**Feature**

- Footprint Ceiling/Floor: true plan-view silhouette

## Release v1.0.295.32

_2026-06-18_

History not available at the moment.

## Release v1.0.295.31

_2026-06-18_

History not available at the moment.

## Release v1.0.295.30

_2026-06-18_

**Feature**

- Clean dialog: visible markers for Zero Area + Unwelded

## Release v1.0.295.29

_2026-06-18_

**Feature**

- Clean dialog: Unwelded Verts cluster drawer

## Release v1.0.295.28

_2026-06-18_

**Feature**

- Clean dialog: zoom drawers for Crossing + xy Overlapping

## Release v1.0.295.27

_2026-06-18_

**Feature**

- Clean dialog: per-defect zoom drawers

## Release v1.0.295.26

_2026-06-17_

**Feature**

- Identify .gmdlb as Deswik geomodel-block; rename parser

## Release v1.0.295.25

_2026-06-17_

**Feature**

- .gmdlb block-model decode (read-only)

## Release v1.0.295.24

_2026-06-17_

**Feature**

- Cblast: guard Int64-min no-value sentinel

**Bug Fix**

- Block model category panel: fix row font size + height

## Release v1.0.295.23

_2026-06-17_

**Feature**

- Block model: multi-select category filter panel

## Release v1.0.295.22

_2026-06-17_

**Feature**

- Block model: category cut-off for categorical attributes

## Release v1.0.295.21

_2026-06-17_

**Feature**

- Block model hover datatip (opt-in)

## Release v1.0.295.20

_2026-06-17_

**Feature**

- Block model select: untick all attributes by default

## Release v1.0.295.19

_2026-06-17_

**Feature**

- Block model: cut-off above (two-sided cut-off band)

## Release v1.0.295.18

_2026-06-17_

**Feature**

- Block-model icons: cube (Geology) + cube-wireframe

## Release v1.0.295.17

_2026-06-17_

**Bug Fix**

- Dropped CSVs always ask (never auto-route to block model)

## Release v1.0.295.16

_2026-06-17_

**Feature**

- Geology tab in Import/Export panels

## Release v1.0.295.15

_2026-06-17_

**Feature**

- Large CSV block models stream like .dm (OPFS + worker)

## Release v1.0.295.14

_2026-06-17_

History not available at the moment.

## Release v1.0.295.13

_2026-06-17_

**Feature**

- [Block] button in the unrecognised-CSV chooser

## Release v1.0.295.12

_2026-06-17_

**Feature**

- Route Vulcan block-model CSV to the geology viewer

## Release v1.0.295.11

_2026-06-17_

History not available at the moment.

## Release v1.0.295.10

_2026-06-17_

**Feature**

- Raise block render cap + section clipping for blocks

## Release v1.0.295.9

_2026-06-16_

**Bug Fix**

- Block outlines as a subtle occluded border

## Release v1.0.295.8

_2026-06-16_

**Feature**

- Block Model viewer (geology)

## Release v1.0.295.7

_2026-06-16_

**Bug Fix**

- DWG import: fix text decode, null-Z sentinel, KAD-only centroid

## Release v1.0.295.6

_2026-06-15_

**Feature**

- Phase B/B3+B4: large Geometry CSV streams via OPFS + worker

## Release v1.0.295.5

_2026-06-15_

**Feature**

- Phase B/B2: worker-safe CSV byte-to-rows reader

## Release v1.0.295.4

_2026-06-15_

**Feature**

- Geometry CSV point cloud: fixed colour or per-point rgba

## Release v1.0.295.3

_2026-06-15_

**Feature**

- Geometry CSV: footer-rows skip + head/tail preview

## Release v1.0.295.2

_2026-06-15_

**Feature**

- Geometry CSV tables: reusable css + report-section support

## Release v1.0.295.1

_2026-06-15_

**Bug Fix**

- Geometry CSV preview tables react to light/dark toggle

## Release v1.0.295

_2026-06-15_

**Bug Fix**

- Geometry CSV circles: radius only, ghosted fixed input

## Release v1.0.294

_2026-06-15_

**Feature**

- Geometry CSV in File Management + readable previews

## Release v1.0.293

_2026-06-15_

**Feature**

- Custom Geometry CSV import: dialog + drop routing

## Release v1.0.292

_2026-06-15_

**Feature**

- Custom Geometry CSV parser + writer (core)

## Release v1.0.290

_2026-06-14_

History not available at the moment.

## Release v1.0.283

_2026-06-14_

**Feature**

- Row Reorder alphanumeric numbering (square + staggered)

## Release v1.0.282

_2026-06-13_

**Bug Fix**

- Pattern/hole reference points + grid-aligned alphanumeric numbering

## Release v1.0.281

_2026-06-13_

**Bug Fix**

- Pattern Starting Hole ID accepts alphanumeric (regression fix)

## Release v1.0.280

_2026-06-13_

History not available at the moment.

## Release v1.0.275.15

_2026-06-13_

History not available at the moment.

## Release v1.0.275.14

_2026-06-13_

History not available at the moment.

## Release v1.0.275.13

_2026-06-13_

History not available at the moment.

## Release v1.0.275.12

_2026-06-13_

**Bug Fix**

- PPV target is a ceiling: round-down + 0.5% safety margin

## Release v1.0.275.11

_2026-06-13_

History not available at the moment.

## Release v1.0.275.10

_2026-06-13_

History not available at the moment.

## Release v1.0.275.9

_2026-06-13_

History not available at the moment.

## Release v1.0.275.8

_2026-06-13_

History not available at the moment.

## Release v1.0.275.7

_2026-06-13_

History not available at the moment.

## Release v1.0.275.6

_2026-06-12_

**Bug Fix**

- Remove pre-repair checkbox (auto census handles it)

## Release v1.0.275.5

_2026-06-12_

History not available at the moment.

## Release v1.0.275.4

_2026-06-12_

History not available at the moment.

## Release v1.0.275.3

_2026-06-10_

History not available at the moment.

## Release v1.0.275.2

_2026-06-10_

**Bug Fix**

- DXF text object-name round-trip via kirra xdata (split ⇄ rejoin)

## Release v1.0.275.1

_2026-06-10_

**Bug Fix**

- DXF multi-line text exports as stacked text entities (no \P)

## Release v1.0.275.0

_2026-06-10_

**Feature**

- DXF text export escapes newlines to \P (valid for Vulcan et al.)

## Release v1.0.274.99

_2026-06-10_

**Feature**

- Surfaces group visibility: cascade + legend/export inheritance

## Release v1.0.274.98

_2026-06-10_

History not available at the moment.

## Release v1.0.274.97

_2026-06-10_

**Bug Fix**

- DXF import: preemptive multi-line repair; export: hidden Surfaces-group leak

## Release v1.0.274.96

_2026-06-10_

**Feature**

- Export visibility: parent cascade + DXF/shp/surface guards

## Release v1.0.274.95

_2026-06-10_

History not available at the moment.

## Release v1.0.274.94

_2026-06-09_

**Bug Fix**

- 3D vertex Move: exclude-self snap + global radius (wip); gate per-move logs

## Release v1.0.274.93

_2026-06-09_

**Bug Fix**

- Vertex highlight shows in the Move tool too (2D + 3D parity)

## Release v1.0.274.92

_2026-06-09_

**Bug Fix**

- Move tool vertex parity: plain-click replaces, 3D segment-grab

## Release v1.0.274.91

_2026-06-09_

**Bug Fix**

- 3D vertex segment-click nearest endpoint (clean, reuses existing code)

## Release v1.0.274.90

_2026-06-09_

**Bug Fix**

- 3D vertex mode: segment-click picks nearest vertex (2D/3D parity)

## Release v1.0.274.89

_2026-06-09_

**Feature**

- Vertex mode: show parent entity (2D+3D), segment-click picks nearest vertex

## Release v1.0.274.88

_2026-06-09_

**Feature**

- KAD highlight spec: 30% red verts, multi = lime only; Text→Poly backlog

## Release v1.0.274.87

_2026-06-09_

**Bug Fix**

- Interaction Contract : canvas→tree reverse-select highlight

## Release v1.0.274.86

_2026-06-09_

History not available at the moment.

## Release v1.0.274.85

_2026-06-09_

**Bug Fix**

- Fix convert-circles-to-polygons for drawn circles

## Release v1.0.274.84

_2026-06-09_

**Bug Fix**

- Contour origin (Start From: Min/Max/Zero/Custom) + form tooltips

## Release v1.0.274.83

_2026-06-08_

**Feature**

- Blast group show/hide with tri-state eyes + reload-persistent visibility

## Release v1.0.274.82

_2026-06-08_

**Bug Fix**

- 2D labels render on top of ties/arrows/contours

## Release v1.0.274.81

_2026-06-08_

**Bug Fix**

- Fix Enable-Compressible confirm dialog (wide, amber, Cancel/Apply)

## Release v1.0.274.80

_2026-06-08_

**Bug Fix**

- Compressible explosives opt-in; imports honour fixed-density mass

## Release v1.0.274.79

_2026-06-08_

**Feature**

- Stacked primer labels in charge section view

## Release v1.0.274.78

_2026-06-08_

**Bug Fix**

- SPF import links downhole detonators (rid-first product resolution)

## Release v1.0.274.77

_2026-06-07_

**Feature**

- Downhole trace line follows detonator product colour

## Release v1.0.274.76

_2026-06-07_

**Feature**

- Detonator markers coloured by product (parity with boosters)

## Release v1.0.274.75

_2026-06-07_

**Feature**

- Booster markers coloured by product (charge cross-section)

## Release v1.0.274.74

_2026-06-07_

**Bug Fix**

- Scope product delete-guard to live holes (stale-charging false positive)

## Release v1.0.274.73

_2026-06-07_

**Feature**

- Product Manager delete guard for in-use products

## Release v1.0.274.72

_2026-06-06_

**Bug Fix**

- Text tab Cancel reverts live-preview edits

## Release v1.0.274.71

_2026-06-06_

History not available at the moment.

## Release v1.0.274.70

_2026-06-06_

**Feature**

- Harness Path label + Product Manager bulk delete

## Release v1.0.274.69

_2026-06-06_

**Bug Fix**

- Undo of delete+renumber no longer duplicates hole IDs

## Release v1.0.274.68

_2026-06-06_

**Feature**

- Hole pick: closest-match, not first-in-array

## Release v1.0.274.67

_2026-06-06_

**Bug Fix**

- Fix 2D↔3D single-select highlight loss

## Release v1.0.274.66

_2026-06-06_

**Bug Fix**

- 3D highlight ring: 5px stroke for exact 2D parity [local]

## Release v1.0.274.65

_2026-06-06_

**Bug Fix**

- 3D highlight ring: thicker (~6px) stroke on the outside [local]

## Release v1.0.274.64

_2026-06-06_

History not available at the moment.

## Release v1.0.274.63

_2026-06-06_

**Bug Fix**

- 3D highlight: visual parity with 2D ring (exact pixel formula) [local]

## Release v1.0.274.62

_2026-06-06_

**Bug Fix**

- 3D selection highlight: screen-constant + low-poly [local]

## Release v1.0.274.61

_2026-06-06_

**Bug Fix**

- Per-hole text : 3D labels use the world-bearing model (match 2D) [local]

## Release v1.0.274.60

_2026-06-06_

**Bug Fix**

- Per-hole text: glyph rotates with the Shift+Alt scene affine [local]

## Release v1.0.274.59

_2026-06-06_

**Bug Fix**

- Per-hole text: defaults = Brent's captured layout [local

## Release v1.0.274.58

_2026-06-06_

**Feature**

- Per-hole text: rename Preview → Refresh (live preview is now automatic) [local]

## Release v1.0.274.57

_2026-06-06_

**Bug Fix**

- Per-hole text: live preview on field change [local

## Release v1.0.274.56

_2026-06-06_

**Bug Fix**

- Per-hole text (2D): world-bearing positioning + centre rotation [local

## Release v1.0.274.55

_2026-06-06_

**Bug Fix**

- Per-hole text: world-bearing default table (, foundation)

## Release v1.0.274.54

_2026-06-06_

**Bug Fix**

- Fix double delete/renumber prompt (two keydown handlers fired)

## Release v1.0.274.53

_2026-06-06_

**Bug Fix**

- Delete blast: refresh immediately + skip renumber prompt for whole-pattern deletes

## Release v1.0.274.52

_2026-06-06_

History not available at the moment.

## Release v1.0.274.51

_2026-06-06_

**Bug Fix**

- Duplicate: same-blast xy coincidence gate on the target entity

## Release v1.0.274.50

_2026-06-06_

**Bug Fix**

- Fix 12d Archive import button + track insert-holes icon

## Release v1.0.274.49

_2026-06-06_

History not available at the moment.

## Release v1.0.274.48

_2026-06-05_

**Feature**

- Move tool: same-blast xy coincidence gate (Keep/Revert)

## Release v1.0.274.47

_2026-06-05_

**Feature**

- Insert Holes tool forces select pointer + hole mode

## Release v1.0.274.46

_2026-06-05_

**Bug Fix**

- Insert Holes tool: duplicate (same-blast xy) detection

## Release v1.0.274.45

_2026-06-05_

**Feature**

- Insert Holes tool (interactive, persistent, multi-hole)

## Release v1.0.274.44

_2026-06-05_

**Feature**

- Deleted-solid notice (assigned volume solid missing)

## Release v1.0.274.43

_2026-06-05_

**Bug Fix**

- Matcher: rounding number no longer corrupts tiers / grade landmark

## Release v1.0.274.42

_2026-06-05_

**Bug Fix**

- Deck Builder formula bar now shows the fx: prefix

## Release v1.0.274.41

_2026-06-05_

**Feature**

- Matcher: primer placement at grade / toe landmarks

## Release v1.0.274.40

_2026-06-05_

**Bug Fix**

- Matcher: "stemming length of N%" no longer self-references

## Release v1.0.274.39

_2026-06-05_

**Feature**

- Deck Builder layout: 50/50 chips↔section, taller resizable formula boxes

## Release v1.0.274.38

_2026-06-05_

**Feature**

- Matcher: multi-monitor PPV expanded from project monitors

## Release v1.0.274.37

_2026-06-05_

**Feature**

- Matcher: spelling "did you mean" suggestions (no auto-correct)

## Release v1.0.274.36

_2026-06-05_

**Bug Fix**

- Matcher honesty gate: ved/fragmentation + multi-monitor refuse

## Release v1.0.274.35

_2026-06-05_

**Feature**

- Matcher: "only if … is N" equality conditional

## Release v1.0.274.34

_2026-06-05_

**Feature**

- Matcher: explicit conditionals (if/when/then/else) + rounding

## Release v1.0.274.33

_2026-06-05_

**Feature**

- Matcher: tiered "% by hole-length band" + "length" synonym

## Release v1.0.274.32

_2026-06-05_

**Bug Fix**

- Matcher: "% of variable" shape + resizable Describe-it box

## Release v1.0.274.31

_2026-06-05_

**Feature**

- Natural-language → fx: matcher in the Deck Builder

## Release v1.0.274.30

_2026-06-05_

**Bug Fix**

- Text tab spinner steps (Rotation/Bearing 5°, Size 0.5)

## Release v1.0.274.29

_2026-06-05_

**Feature**

- Per-hole text modifiers: per-label (2D + 3D + vector print)

## Release v1.0.274.28

_2026-06-05_

**Feature**

- Per-hole text modifiers: 3D parity (offset + size)

## Release v1.0.274.27

_2026-06-05_

**Bug Fix**

- Per-hole text: tab-aware footer + Apply commits text

## Release v1.0.274.26

_2026-06-05_

**Feature**

- Per-hole text modifiers, (store + Text tab + 2D offset/size)

## Release v1.0.274.25

_2026-06-05_

**Feature**

- Toe-size slider on the Length right-click

## Release v1.0.274.24

_2026-06-04_

**Feature**

- Formula Builder upgrade (deck builder + formula chips)

## Release v1.0.274.23

_2026-06-04_

**Bug Fix**

- Slope/Relief editor: fix band-cross scramble + Reset stays open

## Release v1.0.274.22

_2026-06-04_

**Feature**

- Slope/Relief colour editor : legends read active bands

## Release v1.0.274.21

_2026-06-04_

**Bug Fix**

- Slope/Relief dialog: shared band boundaries + flex layout

## Release v1.0.274.20

_2026-06-04_

**Bug Fix**

- Slope/Relief dialog: fix oversized radio fonts

## Release v1.0.274.19

_2026-06-04_

**Feature**

- Slope/Relief colour editor (persistence + dialog conventions)

## Release v1.0.274.18

_2026-06-04_

**Feature**

- Slope/Relief colour editor, (the dialog)

## Release v1.0.274.17

_2026-06-04_

**Feature**

- Slope/Relief colour editor, (single colour source)

## Release v1.0.274.16

_2026-06-04_

**Feature**

- Pattern templates travel with the KAP project file

## Release v1.0.274.15

_2026-06-04_

**Bug Fix**

- Dead-code cleanup + reconcile tooltip/CSV powder factor

## Release v1.0.274.14

_2026-06-04_

**Feature**

- Pf-driven charging resolves in every formula context (Tier-2)

## Release v1.0.274.13

_2026-06-04_

**Feature**

- Charging feasibility safety-net for Apply to Selected (Tier-2)

## Release v1.0.274.12

_2026-06-04_

**Bug Fix**

- Edit Deck dialog polish

## Release v1.0.274.11

_2026-06-04_

**Feature**

- Charging: confirm deck scaling mode + soft advisory (Tier-2)

## Release v1.0.274.10

_2026-06-04_

**Bug Fix**

- Trimesh Boolean: hidden split stays hidden when reclassifying into it

## Release v1.0.274.9

_2026-06-04_

**Bug Fix**

- Trimesh Boolean: hidden regions stay hidden across reclassify

## Release v1.0.274.8

_2026-06-04_

**Bug Fix**

- Trimesh Boolean reclassify respects region visibility

## Release v1.0.274.7

_2026-06-04_

History not available at the moment.

## Release v1.0.274.6

_2026-06-04_

History not available at the moment.

## Release v1.0.274.5

_2026-06-04_

History not available at the moment.

## Release v1.0.274.4

_2026-06-03_

History not available at the moment.

## Release v1.0.274.3

_2026-06-03_

History not available at the moment.

## Release v1.0.274.2

_2026-06-03_

History not available at the moment.

## Release v1.0.274.1

_2026-06-03_

History not available at the moment.

## Release v1.0.274

_2026-06-03_

History not available at the moment.

## Release v1.0.273.76

_2026-06-03_

History not available at the moment.

## Release v1.0.273.75

_2026-06-02_

History not available at the moment.

## Release v1.0.273.74

_2026-06-02_

History not available at the moment.

## Release v1.0.273.73

_2026-06-02_

**Feature**

- Voronoi: Stemming Length metric

## Release v1.0.273.72

_2026-06-02_

**Bug Fix**

- Voronoi pf: geometric volume (cell area × bench height)

## Release v1.0.273.71

_2026-06-02_

**Bug Fix**

- Display quick-adjust: multi-slider popovers + fixes

## Release v1.0.273.69

_2026-06-01_

**Feature**

- Import/Export: tappable rows + wider buttons

## Release v1.0.273.68

_2026-06-01_

**Bug Fix**

- Mobile: hide stats overlay so it clears the toolbar

## Release v1.0.273.67

_2026-06-01_

**Feature**

- Mvar plan: archive Phase-5 byte-delta notes

## Release v1.0.273.66

_2026-06-01_

**Bug Fix**

- Vulcan ARCH_D writer: fixed-column txthed/polhed widths

## Release v1.0.273.65

_2026-05-31_

**Bug Fix**

- 2D view settings: remember state, apply on load, live redraw

## Release v1.0.273.64

_2026-05-31_

History not available at the moment.

## Release v1.0.273.63

_2026-06-01_

**Bug Fix**

- IOS: let .kap/.kad be picked in the Files browser

## Release v1.0.273.62

_2026-06-01_

**Bug Fix**

- Mobile: responsive dialogs + installable pwa

## Release v1.0.273.61

_2026-06-01_

**Bug Fix**

- Vulcan mvar: manage fixed-length stream + default to v3564

## Release v1.0.273.60

_2026-06-01_

**Feature**

- Vulcan ARCH_D export: add v3564 mvar template

## Release v1.0.273.59

_2026-06-01_

**Feature**

- Vulcan ARCH_D export: synthesise mvar blast holes

## Release v1.0.273.58

_2026-05-31_

**Bug Fix**

- Edit Hole [Multiple]: progress dialog on bulk apply

## Release v1.0.273.57

_2026-05-31_

History not available at the moment.

## Release v1.0.273.56

_2026-05-31_

**Bug Fix**

- Surface snap performance (spatial index)

## Release v1.0.273.55

_2026-05-31_

**Bug Fix**

- Hole bulk-edit performance (UI-freeze fix)

## Release v1.0.273.54

_2026-05-31_

History not available at the moment.

## Release v1.0.273.53

_2026-05-31_

**Bug Fix**

- 2D surfaces: close anti-aliasing seams in tiled render

## Release v1.0.273.52

_2026-05-31_

**Feature**

- Exports: progress dialog + eta, pick-destination-first save

## Release v1.0.273.51

_2026-05-31_

**Feature**

- 12d Archive: manifest selective-load + per-surface regrid

## Release v1.0.273.50

_2026-05-30_

History not available at the moment.

## Release v1.0.273.49

_2026-05-30_

History not available at the moment.

## Release v1.0.273.48

_2026-05-30_

History not available at the moment.

## Release v1.0.273.47

_2026-05-30_

History not available at the moment.

## Release v1.0.273.46

_2026-05-30_

History not available at the moment.

## Release v1.0.273.45

_2026-05-29_

**Feature**

- 12d Archive worker + progress dialog + .12daz support

## Release v1.0.273.44

_2026-05-29_

**Feature**

- 12d Archive byte-mode tokeniser (no more 1 gb string wall)

## Release v1.0.273.43

_2026-05-29_

**Feature**

- Add engineering geology + rock engineering reference PDF

## Release v1.0.273.42

_2026-05-29_

**Feature**

- Surface tile cache: crisp TINs at deep zoom (2D)

## Release v1.0.273.41

_2026-05-29_

**Feature**

- 12d Archive : Trimesh / primitive_3d decoder

## Release v1.0.273.40

_2026-05-29_

**Feature**

- 12d Archive : TIN decoder + C99 hex-float parser

## Release v1.0.273.39

_2026-05-29_

**Bug Fix**

- 12d Archive parser detects utf-16-le / utf-16-be / utf-8 BOM encoding

## Release v1.0.273.38

_2026-05-29_

**Bug Fix**

- Retain baked timing checkbox: explicit font-sizes, matching styling on both dialogs

## Release v1.0.273.37

_2026-05-29_

History not available at the moment.

## Release v1.0.273.36

_2026-05-29_

**Bug Fix**

- Deck Builder Apply paths: progress dialog + chunked async loop

## Release v1.0.273.35

_2026-05-29_

History not available at the moment.

## Release v1.0.273.34

_2026-05-29_

History not available at the moment.

## Release v1.0.273.33

_2026-05-29_

**Bug Fix**

- Startup welcome popup: no X button, modal backdrop

## Release v1.0.273.32

_2026-05-29_

History not available at the moment.

## Release v1.0.273.31

_2026-05-28_

History not available at the moment.

## Release v1.0.273.30

_2026-05-27_

**Bug Fix**

- Voronoi Mode A: Superpose rms no longer ghosted on mode switch

## Release v1.0.273.29

_2026-05-27_

**Bug Fix**

- Voronoi canvas-blit cache invalidates on visibility flip (2D)

## Release v1.0.273.28

_2026-05-27_

**Bug Fix**

- Voronoi honours Data Explorer visibility

## Release v1.0.273.27

_2026-05-26_

**Feature**

- Add 8 blast-vibration reference papers (private repo)

## Release v1.0.273.26

_2026-05-26_

**Feature**

- Extract button to footer + live theme switching

## Release v1.0.273.25

_2026-05-26_

History not available at the moment.

## Release v1.0.273.24

_2026-05-26_

**Feature**

- Spectral-division signature extraction (Li & Silva-Castro 2017)

## Release v1.0.273.23

_2026-05-26_

**Feature**

- Texcel waveform CSV parser

## Release v1.0.273.22

_2026-05-26_

**Feature**

- Gao 2015 near-field P-S correction

## Release v1.0.273.20

_2026-05-26_

History not available at the moment.

## Release v1.0.273.19

_2026-05-26_

**Bug Fix**

- Bump Pages actions to current majors

## Release v1.0.273.18

_2026-05-26_

**Bug Fix**

- Fix Pages deploy workflow (configure-pages@v5)

## Release v1.0.273.17

_2026-05-26_

**Feature**

- Seed tab + Synth control ghosting

## Release v1.0.273.15

_2026-05-25_

History not available at the moment.

## Release v1.0.273.14

_2026-05-25_

**Feature**

- Contract parity test + docs (steps 5 & 6 of plan)

## Release v1.0.273.13

_2026-05-25_

History not available at the moment.

## Release v1.0.273.12

_2026-05-25_

**Bug Fix**

- Points use the text mechanism (no size-changing overlay)

## Release v1.0.273.11

_2026-05-25_

**Bug Fix**

- Circles use the text mechanism verbatim

## Release v1.0.273.10

_2026-05-25_

**Bug Fix**

- Circles now use text's pattern: base-draw colour-shift, no overlay

## Release v1.0.273.9

_2026-05-25_

History not available at the moment.

## Release v1.0.273.8

_2026-05-25_

**Bug Fix**

- 3D circle vert marker + bright green parity fixes

## Release v1.0.273.7

_2026-05-25_

**Bug Fix**

- Circle parity: all selected paint green, no primary/sibling distinction

## Release v1.0.273.6

_2026-05-25_

**Bug Fix**

- Restore thin 3D circle overlay + segment endpoint parity

## Release v1.0.273.5

_2026-05-25_

**Bug Fix**

- 3D circle parity + text vertex marker visibility

## Release v1.0.273.4

_2026-05-25_

History not available at the moment.

## Release v1.0.273.3

_2026-05-25_

History not available at the moment.

## Release v1.0.273.2

_2026-05-25_

History not available at the moment.

## Release v1.0.273.1

_2026-05-25_

**Feature**

- Selection-highlight contract scaffold (no callers)

## Release v1.0.273

_2026-05-25_

**Feature**

- Rule engine mass slot accepts fx: formulas

## Release v1.0.272

_2026-05-25_

History not available at the moment.

## Release v1.0.271

_2026-05-24_

**Feature**

- Custom CSV charging round-trip + Mass field formulas

## Release v1.0.270

_2026-05-24_

**Bug Fix**

- Tauri desktop build (buries the failed 1.0.260 dispatch)

## Release v1.0.260.1

_2026-05-24_

**Bug Fix**

- Vitest fixes for the 1.0.258.1 resolver contract change (ci was failing)

## Release v1.0.260

_2026-05-23_

**Bug Fix**

- Tauri desktop build (Ripple Tank shader complete + KAD selection parity)

## Release v1.0.259.6

_2026-05-23_

**Bug Fix**

- Ripple Tank ring overlays clear unconditionally on shader removal

## Release v1.0.259.5

_2026-05-23_

**Feature**

- Blast Analysis Shader button auto-switches to 3D mode

## Release v1.0.259.4

_2026-05-23_

**Bug Fix**

- Ring overlays adapt to any colour ramp via double-stroke / dark contrast

## Release v1.0.259.3

_2026-05-23_

History not available at the moment.

## Release v1.0.259.2

_2026-05-23_

**Bug Fix**

- Ripple Tank S-wave dash pattern dialled to the middle ground

## Release v1.0.259.1

_2026-05-23_

**Bug Fix**

- Ripple Tank S-wave ring uses tighter dash pattern

## Release v1.0.259

_2026-05-23_

**Feature**

- Ripple Tank wave-front ring overlays + paired-highlight plan

## Release v1.0.258.4

_2026-05-23_

History not available at the moment.

## Release v1.0.258.3

_2026-05-23_

History not available at the moment.

## Release v1.0.258.2

_2026-05-23_

**Bug Fix**

- 2D KAD selection colour parity with 3D (green, not magenta)

## Release v1.0.258.1

_2026-05-23_

History not available at the moment.

## Release v1.0.258

_2026-05-23_

**Feature**

- Ripple Tank two-term P/S + display-component split + educational tooltips

## Release v1.0.257

_2026-05-23_

**Feature**

- Ripple Tank Berlage wavelet

## Release v1.0.256

_2026-05-23_

**Bug Fix**

- Ripple Tank measured wavelet polish: math fix + param ghosting

## Release v1.0.255

_2026-05-23_

**Feature**

- Ripple Tank measured-seed wavelet

## Release v1.0.254

_2026-05-23_

History not available at the moment.

## Release v1.0.253

_2026-05-23_

**Feature**

- Ripple Tank shader (commit 2/7): live time-control panel + animation loop

## Release v1.0.252

_2026-05-23_

**Feature**

- Ripple Tank shader (commit 1/7): scalar Ricker wave field + diverging ramp

## Release v1.0.251

_2026-05-23_

**Bug Fix**

- Pattern Templates + Print Settings + PDF Print: enable dockable + popout

## Release v1.0.249

_2026-05-23_

**Bug Fix**

- Deck Builder mismatch validation runs on every hole selection

## Release v1.0.248

_2026-05-23_

**Bug Fix**

- Section Plane dialog: fix Plane select collapsing to first character

## Release v1.0.247

_2026-05-23_

**Bug Fix**

- Data Explorer popout: hide the frame not the moved content

## Release v1.0.246

_2026-05-23_

**Feature**

- Data Explorer docks right by default + popout robustness for web

## Release v1.0.245

_2026-05-23_

**Feature**

- Deck Builder intent-log audit pass + larger mismatch warning dialog

## Release v1.0.244

_2026-05-23_

**Feature**

- Deck Builder fires product/deck-type mismatch warning on open

## Release v1.0.243

_2026-05-23_

**Bug Fix**

- Apply Changes captures deck-type and deck-product edits (multi-hole replay fix)

## Release v1.0.242

_2026-05-23_

History not available at the moment.

## Release v1.0.241

_2026-05-23_

**Bug Fix**

- Fa + Synthesis unified, contour update + bake-gate fixes, panel listener stacking

## Release v1.0.240

_2026-05-21_

**Bug Fix**

- Tauri desktop build (buries the partial 1.0.230 dispatches)

## Release v1.0.230

_2026-05-21_

**Bug Fix**

- Tauri build version bump

## Release v1.0.122.106

_2026-05-21_

**Bug Fix**

- 2D stadium preview for Continuous Connector

## Release v1.0.122.105

_2026-05-21_

**Bug Fix**

- Stadium zone preview for Continuous Connector (3D + 2D parity)

## Release v1.0.122.104

_2026-05-21_

**Feature**

- Continuous Connector tool

## Release v1.0.122.103

_2026-05-21_

**Bug Fix**

- Surface-only timing banner adopts the PPV pill style

## Release v1.0.122.102

_2026-05-21_

History not available at the moment.

## Release v1.0.122.101

_2026-05-21_

**Feature**

- Right-click Row/Pos display button → swap to Burden/Spacing

## Release v1.0.122.100

_2026-05-21_

**Bug Fix**

- Burden via nearest-out-of-row neighbour (kills pca approach)

## Release v1.0.122.99

_2026-05-21_

**Bug Fix**

- Row orientation from largest row, not whole-pattern pca (V1 burden bug)

## Release v1.0.122.98

_2026-05-21_

**Feature**

- SPF row detection: 3 improvements + missing icon

## Release v1.0.122.97

_2026-05-21_

History not available at the moment.

## Release v1.0.122.96

_2026-05-21_

**Bug Fix**

- Review Imported Products: chip layout switched to inline-block

## Release v1.0.122.95

_2026-05-21_

**Bug Fix**

- Review Imported Products dialog: button sizing fixes

## Release v1.0.122.94

_2026-05-21_

**Feature**

- Review Imported Products: confirm classifier guess on every newly-created product

## Release v1.0.122.93

_2026-05-21_

**Bug Fix**

- SPF tie-product fix: distinct delays no longer conflate to one product

## Release v1.0.122.92

_2026-05-21_

**Feature**

- SPF/vxt: batched unrecognised-products classification dialog

## Release v1.0.122.91

_2026-05-21_

**Bug Fix**

- Dark-mode icon pixellation root cause: image-rendering crisp-edges

## Release v1.0.122.90

_2026-05-21_

**Bug Fix**

- Dark-mode icon pixellation: full inversion instead of partial

## Release v1.0.122.89

_2026-05-21_

History not available at the moment.

## Release v1.0.122.88

_2026-05-21_

History not available at the moment.

## Release v1.0.122.87

_2026-05-21_

**Feature**

- Monitor Export: 'Include linked seeds?' prompt + zip bundle support on import

## Release v1.0.122.86

_2026-05-21_

**Feature**

- Seed Library: Export / Export Selected / Import + per-row checkbox

## Release v1.0.122.85

_2026-05-21_

**Feature**

- Monitor Points: Export Selected button

## Release v1.0.122.84

_2026-05-21_

**Feature**

- Clear db buttons for Monitors and Seed Library tabs

## Release v1.0.122.83

_2026-05-20_

**Bug Fix**

- Bump package + lock (Mode E first-paint fix)
- Mode E first-paint: stop wiping cells + suppress false no-data banner

## Release v1.0.122.82

_2026-05-20_

**Feature**

- Mode E async chunked precompute with progress dialog

## Release v1.0.122.81

_2026-05-20_

History not available at the moment.

## Release v1.0.122.77

_2026-05-20_

History not available at the moment.

## Release v1.0.122.76

_2026-05-20_

**Bug Fix**

- Mode F + Mode C amber deepened for yellow contrast

## Release v1.0.122.75

_2026-05-20_

History not available at the moment.

## Release v1.0.122.74

_2026-05-19_

History not available at the moment.

## Release v1.0.122.73

_2026-05-19_

History not available at the moment.

## Release v1.0.122.72

_2026-05-19_

History not available at the moment.

## Release v1.0.122.71

_2026-05-19_

History not available at the moment.

## Release v1.0.122.70

_2026-05-19_

History not available at the moment.

## Release v1.0.122.69

_2026-05-19_

**Bug Fix**

- Mode E: refresh dialog summary on mode change

## Release v1.0.122.68

_2026-05-19_

**Bug Fix**

- Mode E: fix no-data banner, badge cutoff, monitor tielines

## Release v1.0.122.67

_2026-05-19_

**Feature**

- Mode E: independent input-hash cache + cache-routed legend

## Release v1.0.122.66

_2026-05-19_

**Feature**

- Mode E: near-field clamp + monitor markers

## Release v1.0.122.65

_2026-05-19_

**Feature**

- Mode E multi-monitor + perf

## Release v1.0.122.64

_2026-05-19_

**Bug Fix**

- Mode E emergency perf fix

## Release v1.0.122.63

_2026-05-19_

**Feature**

- Mode E scaffold (single monitor)

## Release v1.0.122.62

_2026-05-19_

**Feature**

- Mode E : kill the Love-Factor fudge

## Release v1.0.122.61

_2026-05-19_

**Feature**

- Spinner steps + chart palette tweaks

## Release v1.0.122.60

_2026-05-18_

**Feature**

- + (opt 2) Love-wave per monitor

## Release v1.0.122.57

_2026-05-18_

**Bug Fix**

- Forward Array ↔ Synthesis pvs parity + peak markers

## Release v1.0.122.56

_2026-05-18_

**Feature**

- Forward Array reads monitor; Synthesis combines L/T/V

## Release v1.0.122.55

_2026-05-18_

**Feature**

- .2: Forward Array tab UI wired

## Release v1.0.122.54

_2026-05-18_

**Feature**

- Forward Array Synthesis math kernel

## Release v1.0.122.53

_2026-05-18_

**Bug Fix**

- Vxt String 1/2 order fix + Synthesis tab scaffold

## Release v1.0.122.52

_2026-05-17_

**Feature**

- Bake tri-mode + own chain walker + Temporal Mesh export

## Release v1.0.122.51

_2026-05-17_

History not available at the moment.

## Release v1.0.122.50

_2026-05-17_

**Bug Fix**

- Stemming label renders in print raster + vector

## Release v1.0.122.49

_2026-05-17_

**Bug Fix**

- Track hole-stemming.png icon (rename .png.png → .png)

## Release v1.0.122.48

_2026-05-17_

History not available at the moment.

## Release v1.0.122.47

_2026-05-17_

**Bug Fix**

- Stemming label at diameter's screen position

## Release v1.0.122.46

_2026-05-17_

**Feature**

- Stats overlay click-through + stemming btn id + menus upward

## Release v1.0.122.45

_2026-05-17_

**Feature**

- Stemming display 2D + right-click chooser menus

## Release v1.0.122.44

_2026-05-16_

**Feature**

- Stemming length display button + blst diagnostics

## Release v1.0.122.43

_2026-05-16_

**Feature**

- Vxt import: per-diameter booster selection

## Release v1.0.122.42

_2026-05-16_

History not available at the moment.

## Release v1.0.122.41

_2026-05-16_

**Feature**

- Vxt import: match VSDeck to product by name, not ID

## Release v1.0.122.40

_2026-05-16_

History not available at the moment.

## Release v1.0.122.39

_2026-05-16_

History not available at the moment.

## Release v1.0.122.38

_2026-05-16_

History not available at the moment.

## Release v1.0.122.37

_2026-05-16_

History not available at the moment.

## Release v1.0.122.36

_2026-05-16_

**Feature**

- Vxt export: row-grouped harness chains + product category

## Release v1.0.122.35

_2026-05-16_

**Feature**

- Paradigm primer at 50mm above toe (cast-bottom anchor)

## Release v1.0.122.34

_2026-05-16_

**Bug Fix**

- Clamp Paradigm primer inside bulk deck (short-bulk fix)

## Release v1.0.122.33

_2026-05-16_

History not available at the moment.

## Release v1.0.122.32

_2026-05-16_

History not available at the moment.

## Release v1.0.122.31

_2026-05-15_

**Feature**

- Bake Delay Connect button uses microwave icon

## Release v1.0.122.30

_2026-05-15_

**Feature**

- Bake Delay everywhere + precision audit + phantom guards

## Release v1.0.122.29

_2026-05-15_

**Feature**

- Detune/Constrain/Bake use round-to-nearest, not floor

## Release v1.0.122.28

_2026-05-15_

**Feature**

- Detune/Constrain warning rework + Bake Delay button

## Release v1.0.122.27

_2026-05-15_

History not available at the moment.

## Release v1.0.122.26

_2026-05-15_

History not available at the moment.

## Release v1.0.122.25

_2026-05-15_

**Feature**

- Global timing precision cap with ceil/floor

## Release v1.0.122.24

_2026-05-15_

History not available at the moment.

## Release v1.0.122.23

_2026-05-15_

History not available at the moment.

## Release v1.0.122.22

_2026-05-14_

**Feature**

- Vxt export: real charges + firing-chain order

## Release v1.0.122.21

_2026-05-14_

**Bug Fix**

- Fix vxt export: strings now connected, charges sized correctly

## Release v1.0.122.20

_2026-05-14_

**Bug Fix**

- Uniform docked title bar (container bg = tab bg)

## Release v1.0.122.19

_2026-05-14_

**Bug Fix**

- !important on dockview css-var assignments + kill tab-bar bottom border

## Release v1.0.122.18

_2026-05-14_

**Bug Fix**

- Fix dockview chrome in prod (!important + missing css vars)

## Release v1.0.122.17

_2026-05-14_

**Bug Fix**

- Revert Abyss theme, keep Replit base + gap:0

## Release v1.0.122.16

_2026-05-14_

**Feature**

- Reset Toolbars + non-spaced Abyss dockview theme

## Release v1.0.122.15

_2026-05-13_

**Feature**

- Kill dockview chrome residue after lazy init

## Release v1.0.122.14

_2026-05-13_

**Feature**

- DXF polyface meshes + Data Explorer Escape/overlap

## Release v1.0.122.13

_2026-05-13_

**Bug Fix**

- North arrow sign fix also in print pipeline

## Release v1.0.122.12

_2026-05-13_

**Bug Fix**

- North arrow rotation sign + bearing readout

## Release v1.0.122.11

_2026-05-13_

**Bug Fix**

- Tif drag-drop import

## Release v1.0.122.10

_2026-05-12_

**Feature**

- KAD selection via colour-shift, not overlay

## Release v1.0.122.9

_2026-05-12_

**Feature**

- Shp + LAS migrations + final sweep (/5)

## Release v1.0.122.8

_2026-05-12_

History not available at the moment.

## Release v1.0.122.7

_2026-05-12_

History not available at the moment.

## Release v1.0.122.6

_2026-05-12_

**Bug Fix**

- Dark-mode toolbar input text fix

## Release v1.0.122.5

_2026-05-12_

History not available at the moment.

## Release v1.0.122.4

_2026-05-12_

**Bug Fix**

- Point highlight parity + 3D multi-select fix

## Release v1.0.122.3

_2026-05-12_

**Feature**

- KML parser uses widget (/5)

## Release v1.0.122.2

_2026-05-12_

History not available at the moment.

## Release v1.0.122.1

_2026-05-12_

History not available at the moment.

## Release v1.0.122

_2026-05-12_

**Feature**

- KML/KMZ multi-geometry parse, progress, dark dropdown

## Release v1.0.121

_2026-05-12_

History not available at the moment.

## Release v1.0.120

_2026-05-11_

**Feature**

- Voronoi PPV no-data gate split + diagnosis dialog

## Release v1.0.110

_2026-05-10_

**Bug Fix**

- Release cut

## Release v1.0.109.24

_2026-05-10_

**Bug Fix**

- Tree right-click Properties + canvas right-click selection preservation

## Release v1.0.109.15

_2026-05-10_

History not available at the moment.

## Release v1.0.109.14

_2026-05-10_

**Feature**

- Product edit cascade to live charging + import disclosure

## Release v1.0.109.13

_2026-05-10_

History not available at the moment.

## Release v1.0.109.12

_2026-05-10_

**Bug Fix**

- Refresh Connect toolbar after every electronic-blast import

## Release v1.0.109.11

_2026-05-10_

**Bug Fix**

- Name-delay fallback for inventory trunkline colours

## Release v1.0.109.10

_2026-05-10_

**Bug Fix**

- SPF leadin promotion through blis dummy firing-unit node

## Release v1.0.109.9

_2026-05-10_

History not available at the moment.

## Release v1.0.109.8

_2026-05-10_

**Feature**

- SPF connector ↔ Product link (closes the loop both ways)

## Release v1.0.109.7

_2026-05-10_

**Feature**

- SPF product polish: density, colour, system, blend classify

## Release v1.0.109.6

_2026-05-10_

**Bug Fix**

- SPF product classifier fixes (Drill skip, harness as Initiator)

## Release v1.0.109.5

_2026-05-10_

History not available at the moment.

## Release v1.0.109.4

_2026-05-10_

**Feature**

- SPF primer placement

## Release v1.0.109.3

_2026-05-10_

**Feature**

- SPF deck builder

## Release v1.0.109.2

_2026-05-10_

**Feature**

- SPF product import + test scaffolding

## Release v1.0.109.1

_2026-05-10_

**Feature**

- SPF parser surfacing

## Release v1.0.108.30

_2026-05-10_

**Feature**

- Move Tool: V/K mode split for KAD entities

## Release v1.0.108.29

_2026-05-09_

**Bug Fix**

- Kill redundant dockview chrome scrollbars

## Release v1.0.108.28

_2026-05-09_

**Bug Fix**

- Make tool dialogs dockable

## Release v1.0.108.27

_2026-05-09_

**Bug Fix**

- Fix collapsed dialog content (display: block → flex)

## Release v1.0.108.26

_2026-05-09_

History not available at the moment.

## Release v1.0.108.25

_2026-05-09_

History not available at the moment.

## Release v1.0.108.24

_2026-05-09_

History not available at the moment.

## Release v1.0.108.23

_2026-05-09_

History not available at the moment.

## Release v1.0.108.22

_2026-05-09_

**Bug Fix**

- Fix flex min-height bug breaking tall-content dialogs

## Release v1.0.108.21

_2026-05-09_

History not available at the moment.

## Release v1.0.108.20

_2026-05-09_

History not available at the moment.

## Release v1.0.108.19

_2026-05-09_

History not available at the moment.

## Release v1.0.108.18

_2026-05-09_

History not available at the moment.

## Release v1.0.108.17

_2026-05-08_

**Bug Fix**

- Fix Vulcan-arch case mismatch breaking Linux ci

## Release v1.0.108.16

_2026-05-08_

**Bug Fix**

- Vulcan ARCH_D angled-hole import fix + diameter dialog rebuild

## Release v1.0.108.15

_2026-05-08_

**Feature**

- Mvar chunk detection works for any hole-name length

## Release v1.0.108.14

_2026-05-08_

**Bug Fix**

- Mvar rig→diameter decoder + parser fixes

## Release v1.0.108.13

_2026-05-08_

**Bug Fix**

- Cloudflare Web Analytics beacon

## Release v1.0.108.12

_2026-05-08_

History not available at the moment.

## Release v1.0.108.11

_2026-05-08_

**Bug Fix**

- Quiet picker-extension warn + propagate save cancel

## Release v1.0.108.10

_2026-05-08_

**Bug Fix**

- Save-As picker survives extensions Chrome rejects (.arch_d)

## Release v1.0.108.9

_2026-05-08_

**Bug Fix**

- Start mvar Link decoding (plan + diff tool, no prod change)

## Release v1.0.108.8

_2026-05-08_

**Bug Fix**

- Revert Kirra-authored Link template (would lie about design metadata)

## Release v1.0.108.7

_2026-05-08_

**Bug Fix**

- Vulcan ARCH_D writer emits blast-hole Link template

## Release v1.0.108.6

_2026-05-08_

**Bug Fix**

- Vulcan ARCH_D round-trip preserves "hole-lyness

## Release v1.0.108.5

_2026-05-07_

**Bug Fix**

- Stale-chunk safety net for dynamic imports

## Release v1.0.108.4

_2026-05-07_

**Feature**

- Vulcan import + writer + STR redraw + triangulation clip

## Release v1.0.108.3

_2026-05-07_

**Bug Fix**

- DWG R2018 large-file diagnostics enhancement

## Release v1.0.108.2

_2026-05-07_

**Bug Fix**

- DWG R2018 large-file: clean failure + preserved diagnostics

## Release v1.0.108.1

_2026-05-07_

History not available at the moment.

## Release v1.0.108

_2026-05-06_

**Bug Fix**

- Edge-docking primitive (drag dialogs onto each other)

## Release v1.0.107

_2026-05-06_

History not available at the moment.

## Release v1.0.106

_2026-05-06_

**Bug Fix**

- Edge-docking Step 5: canvas-no-scroll guard

## Release v1.0.105

_2026-05-06_

**Bug Fix**

- Toolbar off-screen redock + forget bad position

## Release v1.0.104

_2026-05-06_

**Bug Fix**

- Toolbar off-screen recovery + plan trim

## Release v1.0.103

_2026-05-06_

**Feature**

- Data Explorer memory + GPU footer

## Release v1.0.102

_2026-05-06_

**Feature**

- Bump for [zoom] diagnostic-trace build

## Release v1.0.101

_2026-05-06_

**Feature**

- Paradigm import: drop placeholder constructs, persist metadata
- Paradigm blst import + Electronic Timing Relief mode

## Release v1.0.100

_2026-05-02_

**Bug Fix**

- Release alignment with kirra-tauri
- Release alignment with kirra-tauri

## Release v1.0.99.35

_2026-05-02_

History not available at the moment.

## Release v1.0.99.34

_2026-05-02_

**Bug Fix**

- Surpac STR+DTM drop fix: dropdown value was wrong

## Release v1.0.99.33

_2026-05-02_

**Feature**

- CSV dialog button fit + Surpac/OBJ multi-file companion drops

## Release v1.0.99.32

_2026-05-02_

**Bug Fix**

- IREDES checksum: restore Epiroc Surface Manager compatibility

## Release v1.0.99.31

_2026-05-02_

History not available at the moment.

## Release v1.0.99.30

_2026-05-02_

History not available at the moment.

## Release v1.0.99.29

_2026-05-02_

History not available at the moment.

## Release v1.0.99.28

_2026-05-02_

History not available at the moment.

## Release v1.0.99.27

_2026-05-02_

**Bug Fix**

- Project Explorer: supported-icon for .nav .spf .vxt .bpd

## Release v1.0.99.26

_2026-05-02_

**Bug Fix**

- LAS / nav / SPF drop via file-input click simulation

## Release v1.0.99.25

_2026-05-02_

**Bug Fix**

- DWG drop: friendly error modal for unsupported versions

## Release v1.0.99.24

_2026-05-02_

History not available at the moment.

## Release v1.0.99.23

_2026-05-02_

History not available at the moment.

## Release v1.0.99.22

_2026-05-02_

**Feature**

- Drop dispatcher per-extension routing + KAP programmatic entry

## Release v1.0.99.21

_2026-05-02_

**Bug Fix**

- Drop opens Import dialog; popout reverts to friendly decline

## Release v1.0.99.20

_2026-05-01_

**Bug Fix**

- Tauri 1.0.100 smoke-test fixes (4 of 5

## Release v1.0.99.19

_2026-05-01_

**Feature**

- Temporal Mesh icon recoloured to black

## Release v1.0.99.18

_2026-05-01_

History not available at the moment.

## Release v1.0.99.17

_2026-05-01_

History not available at the moment.

## Release v1.0.99.16

_2026-05-01_

History not available at the moment.

## Release v1.0.99.15

_2026-05-01_

History not available at the moment.

## Release v1.0.99.14

_2026-05-01_

History not available at the moment.

## Release v1.0.99.13

_2026-05-01_

History not available at the moment.

## Release v1.0.99.12

_2026-05-01_

**Feature**

- Popout Refactor part 3: visibility events + plan close

## Release v1.0.99.11

_2026-05-01_

History not available at the moment.

## Release v1.0.99.10

_2026-05-01_

**Feature**

- Popout Refactor part 1: boot dispatcher + body-class hide

## Release v1.0.99.9

_2026-05-01_

**Feature**

- DWG 3DFACE encoding visibility (TF5a-followup closed)

## Release v1.0.99.8

_2026-05-01_

**Feature**

- DWG ellipse (0x23) decoder as KADPoly polyline

## Release v1.0.99.7

_2026-05-01_

**Feature**

- DWG arc (0x11) decoder as KADLine polyline

## Release v1.0.99.6

_2026-05-01_

**Feature**

- DWG single-line text (0x01) decoder

## Release v1.0.99.5

_2026-05-01_

**Feature**

- TF2: KAD entity visibility immediately rebuilds 3D

## Release v1.0.99.4

_2026-05-01_

**Bug Fix**

- Coincident Hole Detector polish: terminology + collapsible Tips

## Release v1.0.99.3

_2026-05-01_

**Bug Fix**

- Coincident Hole Detector enhancements: blast-points + radii

## Release v1.0.99.2

_2026-05-01_

**Feature**

- Coincident Hole Detector step 2/3: dialog UI + button wired

## Release v1.0.99.1

_2026-05-01_

**Feature**

- Coincident Hole Detector step 1/4: pure-logic helper + unit tests

## Release v1.0.99

_2026-05-01_

History not available at the moment.

## Release v1.0.98

_2026-05-01_

**Bug Fix**

- KAD line width drift fix (toolbar = source of truth)

## Release v1.0.97

_2026-05-01_

**Feature**

- Insert Before/After same-entity proximity check

## Release v1.0.96

_2026-05-01_

**Feature**

- Hole proximity helper extracted + same-entity scoping option

## Release v1.0.95

_2026-05-01_

**Feature**

- Holes CSV round-trip alignment + inline column bubble

## Release v1.0.94

_2026-04-30_

History not available at the moment.

## Release v1.0.93

_2026-04-30_

History not available at the moment.

## Release v1.0.91

_2026-04-28_

**Feature**

- Project Explorer + DWG decoder coverage + GPU verification

## Release v1.0.90

_2026-04-27_

**Feature**

- DWG parser end-to-end (R2010+)

## Release v1.0.89

_2026-04-26_

History not available at the moment.

## Release v1.0.88

_2026-04-26_

**Feature**

- Seed Wave library picker + per-monitor seed honor

## Release v1.0.87

_2026-04-26_

**Feature**

- DWG parser foundation (, console-only)

## Release v1.0.86

_2026-04-25_

**Bug Fix**

- Modify-tool fixes + Temporal Mesh universal/perf + grouping fallout

## Release v1.0.85

_2026-04-25_

**Bug Fix**

- Line Extension 2D Z preservation + 3D parity

## Release v1.0.84

_2026-04-25_

**Feature**

- Idi redesign + Seed Wave Blair-Minchinton + axis polish

## Release v1.0.83

_2026-04-24_

**Bug Fix**

- Gradient stop swatch polish

## Release v1.0.82

_2026-04-24_

**Feature**

- Unified Temporal Mesh + shared gradient editor

## Release v1.0.81

_2026-04-24_

**Feature**

- Time Window refresh + universal Temporal Mesh

## Release v1.0.80

_2026-04-22_

**Feature**

- Enhance File Management and Import Functionality

## Citations & References

Kirra's calculations draw on published work. Titles and authors only.

- Blast Vibration Monitoring and Control — Charles H. Dowding
- Flyrock Range and Fragment Size Prediction — Cameron K. McKenzie
- Flyrock Model Validation and Application — Cameron K. McKenzie
- Limitations of Electronic Delays for the Control of Blast Vibration and Fragmentation — D. P. Blair
- Spectral Control of Ground Vibrations Using Electronic Delay Detonators — D. P. Blair
- A Modified Holmberg-Persson Approach to Perimeter Blast Design — NIOSH
- Blasting Terminology, T/CSEB 0007-2019 — China Society of Engineering Blasting
- Open Design Specification for .dwg Files — Open Design Alliance

**With thanks for product support and reference material**

- Davey Bickford Enaex — electronic initiation product support
- Dyno Nobel — NONEL and PRIMACORD product documentation
- Maptek — Vulcan format reference files
- Orica — SHOTPlus format reference files
