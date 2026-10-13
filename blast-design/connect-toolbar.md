# Connect Toolbar

The **Connect** toolbar ties holes together and times the blast: surface ties, trunks,
initiation points, electronic timing, harness assignment and the temporal mesh. Open it from its
tab on the right edge of the window.

![Labelled Connect toolbar](../screenshots/ConnectToolbar.png)
*The Connect toolbar with all controls labelled.*

---

## The controls

Button names are the tooltips shown when you hover.

| Control | What it does | Other ways to use it | Guide |
|---|---|---|---|
| **Temporal Mesh** | Shows firing time as a coloured surface | Same switch in the Electronic Timing dialog | [Temporal Mesh](temporal-mesh.md) |
| **Gradient** | Colours, height and transparency of the temporal mesh; **Export Mesh** | — | [Temporal Mesh](temporal-mesh.md#gradient-dialog) |
| **Tie Connect / Cord Inline / Reconnect to Trunk** | Ties one hole to another | Click a hole twice for an initiation point | [Tie Connect](tie-connect.md) |
| **Tie Connect Multi** | Ties every hole along a line between two clicked holes | — | [Tie Connect Multi](tie-connect-multi.md) |
| **Tie Connect Continuous** | A zig-zag run through holes or open ground | **Escape**, right-click or double-click ends a chain | [Tie Connect Continuous](tie-connect-continuous.md) |
| **Trunk Branch Connect** | A trunk line with a branch to each hole in its swath | Right-click a trunk for its menu | [Trunk Branch Connect](trunk-branch-connect.md) |
| **Connectors Remove** | Deletes the tie you click | **Delete** while hovering a tie | [Connectors Remove](connectors-remove.md) |
| **Self Connect Add IP** | Adds or removes an initiation point | Right-click a trunk → **Add Initiation** | [Initiation Points](initiation-points.md) |
| **Connect Distance (m)**, **Connector Color**, **Delay Amount (ms)** | What new ties carry, and how wide the tie tools reach | — | [Connector Settings](connector-settings.md) |
| Connector product chips | Pick the product new ties carry, or **UNDEF** for none | — | [Connector Settings](connector-settings.md#product-chips) |
| **Electronic Timing Panel** | Timing constructs for electronic detonators | — | [Electronic Timing Constructs](electronic-timing-constructs.md) |
| **Harness Wire Assignment (Channel / Commander)** | Click a hole to set its harness path, unit and channel | — | [Harness Wire Assignment](../charging/harness-wire-assignment.md) |
| **Bake Delay (electronic + nonel→electronic conversion)** | Writes the surface timing onto electronic primers | Also in Electronic Timing and Time Window | [Bake Delay](bake-delay.md) |

---

## Which tie tool?

| You want to | Use |
|---|---|
| Tie one hole to the next | [Tie Connect](tie-connect.md) |
| Tie a straight row in two clicks | [Tie Connect Multi](tie-connect-multi.md) |
| Walk the bench in one chain, through open ground | [Tie Connect Continuous](tie-connect-continuous.md) |
| Keep the run on the plan as a trunk with branches | [Trunk Branch Connect](trunk-branch-connect.md) |
| Set where the blast is lit from, and when | [Initiation Points](initiation-points.md) |
| Take a tie off | [Connectors Remove](connectors-remove.md) |

> **Tip:** Set the delay, colour and product in [Connector Settings](connector-settings.md)
> before you tie — new ties take what is set at the time.

---

## Related

- [Timing Sequences](timing-sequences.md) — how ties become firing times
- [Electronic Timing Constructs](electronic-timing-constructs.md)
- [Time Window](../analysis/time-window.md) — timing analysis
- [Holes Toolbar](holes-toolbar.md)
