# Formula Skill — Install & Use

The **Kirra Formula skill** teaches Claude to write and check Kirra `fx:` formulas — across all
three formula engines — and to do so from the Kirra source rather than guesswork. Install it once
and ask for formulas in plain English; Claude identifies the right engine, picks the correct
prefix and scaling flag, and hand-traces the result before giving it to you.

This page covers what the skill does, how to install it on each Claude surface, and how to verify
it loaded.

> **Human-readable references (no Claude required):** [Formula Engine](formula-engine.md) hub,
> [Deck Builder Formula Guide](../charging/Deck%20Builder%20Formula%20Guide%20Examples.html),
> [Print Formula Reference](../printing/pdf-print.md),
> [Blast Group Formulas](blast-group-formulas.md).

---

## What it covers

Kirra has **three separate formula engines that all use the `fx:` prefix but are not
interchangeable.** Using the right syntax in the wrong field is the most common formula error. The
skill's first job is to route each request to the correct engine, then use only that engine's
variables and functions.

| Engine | Where the formula lives | Examples it handles |
| --- | --- | --- |
| **Charging** | Deck length, deck mass, or primer depth (Deck Builder / `chargeConfigs.csv`) | `fx:chargeBase - 0.3`, `fx:Math.max(1.6, sdobStem(1.5,"ANFO"))`, `ppvKG(...)` |
| **Print template** | A cell in an XLSX/PDF print template | `fx:round(sum(holeLength[i]),1)`, `groupTable(...)`, `mapView(v)` |
| **Blast group** | The Formula field of the Assign Group dialog (hole selection) | `fx:holeLength < 2`, `fx:holeType == "Production" && burden >= 4.5` |

It also knows the limits: a formula is **one expression evaluated once per deck** — no loops or
goal-seek — and powder factor, burden, spacing, and volume are **not** charging-formula variables,
so a PF-driven deck formula isn't possible today. The skill says so plainly instead of inventing
one.

> See also: [Formula Engine](formula-engine.md) and
> [Deck Builder Formula Guide & Examples](../charging/Deck%20Builder%20Formula%20Guide%20Examples.html)
> for the full variable and function reference the skill is built from.

---

## Get the files

Download from this docs folder:

- **[kirra-formula.zip](kirra-formula.zip)** — for claude.ai / Claude Desktop Skills upload
- **`kirra-formula/`** — plain folder with `SKILL.md` and `references/` (for Claude Code; unzip the zip or copy from the Kirra distribution)

Both contain the same thing; the surface decides which you use.

---

## Install — claude.ai or Claude Desktop

Recommended for most users.

1. Open Claude in your browser or the desktop app.
2. Go to **Settings → Customize → Skills**.
3. Click **"+"**, then **"+ Create skill"**.
4. Upload **`kirra-formula.zip`**.
5. Confirm the skill's toggle is **on**.
6. Ask for a formula in plain English — Claude loads the skill automatically when your request
   matches.

> Requires a plan with Skills and code execution enabled (Pro, Max, Team, or Enterprise). If you
> don't see a Skills section, the feature may be off for your plan or organisation.

---

## Install — Claude Code (terminal)

Claude Code reads skills from a folder — no upload.

1. Copy the **`kirra-formula/`** folder into your personal skills directory:

   ```bash
   mkdir -p ~/.claude/skills
   cp -r kirra-formula ~/.claude/skills/
   ```

   The result must be `~/.claude/skills/kirra-formula/SKILL.md` — not nested one level too deep.

2. Start a **new** Claude Code session. (If `~/.claude/skills/` is brand new, restart Code so it
   begins watching the directory.)
3. Run `/skills` to confirm `kirra-formula` is listed.
4. Ask for a formula — the skill triggers automatically.

To ship the skill with the Kirra repo for your team, place the folder in the project's
`.claude/skills/` instead. Project skills override personal ones of the same name.

---

## Install — Claude for Chrome

The Chrome extension is a browser-automation agent and has **no Skills installer** at present.
Two options:

- **Paste fallback.** At the start of a conversation, paste the contents of `SKILL.md` (plus
  `references/charging.md` if your question is about charge decks), then ask. This works as a
  one-off but must be re-pasted each session — it's a prompt, not an installed skill.
- **Drive Chrome through Claude Code.** If you run the Chrome integration via Claude Code, install
  the skill in Claude Code (above); it's then available while Code drives the browser.

> Claude for Chrome is in beta. If a Skills option appears in the extension later, use it in
> preference to the paste method.

---

## Verify it loaded

Ask any of these and check Claude names the engine, picks the prefix/flag, and shows a worked
trace:

| Ask | Expected engine and answer |
| --- | --- |
| "Total drill metres for my report." | Print template — `fx:round(sum(holeLength[i]),1)` |
| "Primer 0.3 m above the deepest charge." | Charging — `fx:chargeBase - 0.3` |
| "Group all holes shorter than 2 m." | Blast group — `fx:holeLength < 2` |

If Claude puts a report function into a charge deck (or vice versa), the skill isn't loaded —
recheck the install steps for your surface.

---

> **Kirra Licence v1.0** — Kirra Design is free for mining, quarrying, construction, and research
> use. Commercial software integration requires written permission from Brent Buffham. See
> [About](../about.md) for details.
