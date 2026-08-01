# Print Template Skill — Install & Use

The **Kirra Design Print Template skill** teaches Claude to build and fix Kirra print templates —
the Excel workbooks Kirra turns into blast reports, hole tables, load sheets, tie-in sheets and
plan drawings. Install it once and describe the report you want in plain English; Claude writes
the `fx:` cells, lays the sheet out correctly, and knows the traps that quietly produce wrong
numbers.

It ships with a **generated formula reference** — every variable and function the app accepts,
produced from Kirra itself — so it describes the build you actually have rather than guesswork.

> **Human-readable references (no Claude required):** [XLSX Templates](xlsx-templates.md),
> [Template Examples](template-examples.md), [PDF Print](pdf-print.md).

---

## What it covers

| Area | Examples it handles |
| --- | --- |
| **Getting values in** | `fx:holeCount`, `fx:round(sum(holeLength[i]),1)`, `fx:countif(holeType[i], "Production")` |
| **Hole tables** | One hole per row with `[++]`, one per cell with `[+>]`, a specific hole with `[3]` |
| **Restricting a sheet** | `fx:filter(holeAngle > 0)`, `fx:filter(holeType == "Production" && holeDiameter >= 200)` |
| **Per-hole-type blocks** | `groupTable(...)`, and the `countif`/`sumif` pattern when you need one type per cell |
| **Layout** | Why text is clipped, when to merge, row heights, wrap text |
| **Timing** | `fireTime[i]` vs `holeTime[i]`, harness/tie-in sheets |
| **Graphics** | `mapView`, `legend`, `northArrow`, `scale`, `holeSection`, `sectionView` |

It also knows the limits and says so plainly: rows do **not** grow to fit content, `groupTable`
returns every group in **one** cell, and a variable that isn't in the generated reference **does
not exist** — it won't invent a plausible-looking one.

### The trap it exists to prevent

On an **electronic** blast, `holeTime[i]` is the *surface tie delay* — harness wire at 0 ms — not
when the hole fires. A report built with it shows a firing window of a few milliseconds for a
blast that actually fires over seconds. Use `fireTime[i]`. The skill leads with this, and Kirra
now warns about it before printing.

---

## Get the files

Download from this docs folder:

- **[KirraDesign-USER-Print-Skill.zip](KirraDesign-USER-Print-Skill.zip)** — for Claude Code
  (unzip into your skills folder)
- **[KirraDesign-USER-Print-Skill.skill](KirraDesign-USER-Print-Skill.skill)** — for claude.ai /
  Claude Desktop Skills upload

Both contain the same thing:

```
KirraDesign-USER-Print-Skill/
    SKILL.md
    references/formulas.md
```

**Keep the folder together** — the formula reference lives inside the skill so it travels with it.

You also get the same skill inside the app: **Print ▸ Reference Pack** downloads
`Kirra-DesignPRINTReferenceTemplate.zip`, which bundles the skill alongside a working
multi-sheet template you can copy sheets from.

---

## Install — claude.ai or Claude Desktop

Recommended for most users.

1. Open Claude in your browser or the desktop app.
2. Go to **Settings → Customize → Skills**.
3. Click **"+"**, then **"+ Create skill"**.
4. Upload **`KirraDesign-USER-Print-Skill.skill`**.
5. Confirm the skill's toggle is **on**.
6. Describe the report you want — Claude loads the skill automatically when your request matches.

> Requires a plan with Skills and code execution enabled (Pro, Max, Team, or Enterprise). If you
> don't see a Skills section, the feature may be off for your plan or organisation.

---

## Install — Claude Code (terminal)

Claude Code reads skills from a folder — no upload.

1. Unzip and copy the folder into your personal skills directory:

   ```bash
   mkdir -p ~/.claude/skills
   unzip KirraDesign-USER-Print-Skill.zip -d ~/.claude/skills/
   ```

   The result must be `~/.claude/skills/KirraDesign-USER-Print-Skill/SKILL.md` — not nested one
   level too deep.

2. Start a **new** Claude Code session.
3. Run `/skills` to confirm `KirraDesign-USER-Print-Skill` is listed.
4. Ask for a template — the skill triggers automatically.

---

## Install — Claude in Excel

The skill is plain Markdown and self-contained, so it works wherever you can attach files.

1. Upload **`KirraDesign-USER-Print-Skill.skill`** to your Claude Skills (as above) — it is then
   available in Excel alongside your other surfaces.
2. Open your template workbook and ask for the cells you want.

Because the formula reference is *inside* the skill folder, Claude has the full variable list
without needing a second attachment.

---

## Verify it loaded

Ask any of these and check Claude uses the `fx:` prefix and the right pattern:

| Ask | Expected answer |
| --- | --- |
| "Total drill metres for the summary." | `fx:round(sum(holeLength[i]),1) & " m"` |
| "A table with one hole per row — ID, length, diameter." | `fx:holeID[++]`, `fx:round(holeLength[++],1)`, `fx:holeDiameter[++]` |
| "The firing window for this electronic blast." | `fireTime[i]`, **not** `holeTime[i]` |
| "Production holes only on this page." | `fx:filter(holeType == "Production")` |

If Claude answers with `=` instead of `fx:`, or reaches for `holeTime` for a firing window, the
skill isn't loaded — check the toggle, or start a new session.

---

## Keeping it current

The formula reference is generated from Kirra's own catalogue, so **re-download it after a Kirra
update** if you want the newest fields. The copy on this page is rebuilt whenever the print engine
changes.
