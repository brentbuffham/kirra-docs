# Time Window Dialog

The **Time Window** dialog is Kirra's timing-and-vibration analysis surface. It groups eight tabs over a shared blast-pattern scope so you can move between event histograms, frequency content, waveform synthesis, and detune actions without losing the selection you're analysing.

The dialog is opened from the **Time Window** button on the **Analyse** toolbar — see [Analyse Toolbar](analyse-toolbar.md).

![Time Window dialog, Time Window tab](../screenshots/TimeWindow.png)
*The Time Window tab — histogram of detonation events with chart-mode selector, Time Window slider, Time Offset slider, and the in-app Tips panel.*

---

## Shared layout

Every tab shares the same wrapper:

| Region | Purpose |
|--------|---------|
| **Title bar** | Always reads **Time Window**. Dock, pin, minimise, and close controls on the right |
| **Blast Patterns (Time Window scope)** | Per-entity checkboxes — picks which blast patterns feed every tab in the dialog. The header notes *Scopes every Time Window tab (Time Window, IDI, Spectrum, Synthesis, Forward Array, Detune pool). Independent of the Voronoi filter.* |
| **Tabs** | Time Window, IDI, Spectrum, Seed, Synthesis, Forward Array, Detune, Constrain |
| **Tab body** | Chart + tab-specific controls |
| **Tips panel** | Collapsible help text written into the app, specific to the active tab |
| **Footer buttons** | **Refresh**, **Bake Delay**, **Export Synth**, **Close**, **Apply**. Apply commits the Detune or Constrain result and is disabled on the read-only tabs. **Export Synth** saves the synthesised trace (time, L, T, V) as a CSV from the Synthesis and Forward Array tabs |

The scope panel is independent of the Voronoi monitor filter — what you tick here is what every chart in the dialog operates on.

---

## Time Window tab

Histogram of detonation events across time. Each bar is one Time Window bin.

![Time Window tab](../screenshots/TimeWindow.png)

### Controls

| Control | Purpose |
|---------|---------|
| **Chart Mode** | Choose how each event is weighted: **Surface Hole Count**, **Measured / Mass per Hole**, or **Deck Count / Mass per Deck** |
| **Time Window** slider | Bin width in milliseconds. Default shown above is **8 ms** |
| **Time Offset** slider | Shifts the bins along the time axis. Default **0 ms** |
| Rangeslider under the chart | Zoom into a specific period; pan/zoom icons on the right work too |

### Chart modes (verbatim from the in-app Tips)

- **Surface Hole Count** — number of holes whose cascade reaches that bin. The classic view.
- **Measured / Mass per Hole** — weights each hole by its loaded charge, exposing where the explosive energy actually lands.
- **Deck Count / Mass per Deck** — counts each primer separately. Multi-deck holes spread across the timeline by the downhole delay.

### How to read the peaks

A tall bar = many deck events in one Time Window slot. For ground-vibration purposes, aim to keep any single bin's mass below the site's max-instantaneous-charge (MIC) limit.

---

## IDI tab (Inter-Detonation Interval)

Δt between each event and its predecessor, plotted as a stem at the event's fire time on the x-axis. Tall stems = real gaps (e.g. between blasts or rows). Short stems = the dense fringe of intra-blast intervals.

![IDI tab — Inter-Detonation Interval](../screenshots/Inter-DetonationInterval.png)

### Controls

| Control | Purpose |
|---------|---------|
| **Level** | Granularity of the interval calculation. The screenshot shows **Hole** |

### What to look for (verbatim from the in-app Tips)

- **Tall isolated stems** — large gaps between sections of the shot. Often the pattern transitions (front row → main field, blast A → blast B, deck stagger boundaries). These are usually intentional.
- **A flat carpet at the bottom** — typical intra-blast Δt (1-3 ms electronic, 8-25 ms nonel). The lower the carpet, the more events crowd a small window — that's tonal-frequency territory.
- **Stems creeping up across the shot** — intervals widening as the shot progresses. Could be intentional (relief budget) or unintentional (fan-out drift).

### The shaded bands

Bands map vibration-band frequencies to Δt: **green** (Δt < 25 ms, > 40 Hz, USBM safe-zone) sits at the bottom; **amber** (Δt 25-67 ms, 15-40 Hz commercial resonance) above it; then warmer amber (67-200 ms, 5-15 Hz residential); and **red** (> 200 ms, < 5 Hz) higher still. Stems whose tops sit inside the residential / low-freq stripes are complaint-drivers.

### Click-to-select

Click any stem to highlight the pair of holes producing that interval (the firing hole and its predecessor) on the 2D and 3D canvas. Click again to clear.

---

## Spectrum tab (FFT of Impulse Train)

FFT of the impulse train built from fire times. Each Hz bin's magnitude is how strongly that frequency is "stamped" into the pattern.

![Spectrum tab — FFT of Impulse Train](../screenshots/FFTSpectrum.png)

### Controls

| Control | Purpose |
|---------|---------|
| **Level** | Source granularity — **Hole** in the screenshot |
| **Sample (Hz)** | FFT resolution. **1000 Hz = 1 ms bin resolution**. Rarely needs changing |
| **Max (Hz)** | Upper frequency displayed. Shrink to zoom in on the structural-resonance band |
| **Mass** *(checkbox)* | Mass-weighted. Scales each impulse by hole/deck charge — shows energy spectrum rather than event-count spectrum |
| **Log Y** *(checkbox)* | Log Y axis — reveals secondary harmonics the fundamental would otherwise dwarf |

### Reading the chart (verbatim from the in-app Tips)

- **Fundamental peak** — the strongest single spike. For a dominant 8 ms delay this lands at **125 Hz**. Harmonics appear at 250, 375 Hz etc.
- **Energy in the residential band (amber, 5-15 Hz)** — problematic. Most residential complaints sit here. Detune or shift inter-hole delays to push it out.
- **Broad-spectrum noise floor** — what you want. Indicates the pattern doesn't reinforce any single frequency.

### Frequency-band colouring

| Band | Label | Typical concern |
|------|-------|-----------------|
| Pink/red | **Low freq** | Below structural resonance — building sway |
| Amber | **Residential** | 5-15 Hz residential building resonance |
| Light amber | **Commercial** | Commercial structures, 15-40 Hz |
| Green | **Safe zone** | Above structural resonance |

The peak readout at the bottom (e.g. *peaks: 91.8 Hz, 2.9 Hz, 183.6 Hz*) lists the strongest peaks across the displayed range.

---

## Seed tab

A read-only viewer of the raw seed wavelet that Synthesis and Forward Array stamp at each charged deck. A summary line shows the current source and its parameters. To change the source or its parameters, use the Synthesis tab — this chart re-paints to match.

- **Two-term P+S** plots two traces, P (red) and S (blue), using the P and S parameters of the monitor chosen on the Synthesis tab
- **Measured** plots the loaded geophone trace at its own sample rate

---

## Synthesis tab

Two stacked panels: top shows the single seed wavelet (the shape stamped at each deck); bottom shows the superposition of that seed at every deck's fire time — the trace a monitor would record. Peak of the bottom panel estimates predicted PPV.

![Synthesis tab — single seed and reconstructed monitor trace](../screenshots/SynthesisedGeophone.png)

### Controls

| Control | Purpose |
|---------|---------|
| **Seed** | Source wavelet shape. Options include **Two-term P+S (monitor path)**, **Ricker (acausal)**, **Damped sinusoid (causal)**, **Berlage (causal)**, plus a measured seed. The three buttons next to the dropdown are **Add seed** (load a raw Instantel CSV, which opens the clipper, or a processed time / velocity CSV), **Clear measured seed** (revert to Ricker) and **Load seed from library** |
| **fDom (Hz)** | Dominant frequency of the seed |
| **Dur (ms)** | Duration of the seed window |
| **ξ** | Damping parameter (active for damped seeds) |
| **Amp** | Amplitude scale |
| **Site law (PPV)** | Site-law profile used for amplitude scaling |
| **Monitor** | The Voronoi monitor that defines the receptor position and site-law constants |
| **Superposition** | **Linear** or **Non-Linear (Blair & Minchinton)** |
| **η** *(non-linear only)* | Non-linearity exponent. Range slider with numeric readout |
| **s_P (m)** *(non-linear only)* | P-wave saturation distance override |

### Seed sources (verbatim from the in-app Tips)

- **Ricker (acausal)** — symmetric, teaching-style. Energy appears before t=0 of the wavelet centre, so it's not physically causal but is the easiest to interpret in frequency.
- **Damped sinusoid (causal)** — simplest causal model. Instant crack, exponential ring-down. Realistic first approximation.
- **Berlage (causal)** — smooth rise, peak, decay. A common single-wavelet fit to real geophones.
- **Two-term P+S** — two wavelets stamped per deck at different arrival times. Fast P at D/Vp, slower S at D/Vs. fP / ξP / ampP and fS / ξS / ampS are read from the currently selected Voronoi monitor so each monitor gets its own path parameters. Needs a monitor to compute arrivals.

### Status readout

The red line under the seed selector reports the current physics, e.g. *twoterm seed • fP 30 / fS 18 Hz • 235 decks • peak 26.05(mm/s) @ 1182 ms • non-linear: η=2.0 · s_P=18.10 m (override) • path: Vp 5000 / Vs 2900 m/s @ TEST*.

---

## Forward Array tab

Three-component (L / T / V) wave synthesis at a monitor with optional Love-wave packet in the T component. The chart stacks **L** (longitudinal / radial), **T** (transverse), and **V** (vertical) with the peak of each labelled.

![Forward Array tab](../screenshots/FowardArray.png)

### Controls (verbatim from the in-app Tips)

- **Monitor** — picks which Voronoi monitor is the receiver. Its (x,y,z), site-law K/B/E, and P/S parameters (Vp, Vs, fP, fS) feed the synthesis. Edit those in **Voronoi Options**.
- **L brg (°)** — compass bearing of the L axis: 0=N, 90=E. Leave blank to auto-aim from the source centroid to the monitor (the usual choice).
- **Source** — **Explosive centroid**: each hole's contribution starts from its charged-deck mass centroid (matches the site-law convention). **Collar**: starts from the hole collar — slightly off for deep holes, useful when no charging is loaded.

### Love wave (per monitor)

Love settings now live on the monitor itself — open **Voronoi Options**, expand the monitor card, expand the **Love wave** block. Enable, then tune **Factor** (PPV multiplier), **f Love (Hz**, usually 1-5), and **v Love (m/s**, 400-1500). The Forward Array tab re-runs automatically when those values change.

### Status readout

Bottom band reports peaks and risk metrics in this order:

> **L peak** • **T peak** • **V peak** • **PVS** (peak vector sum @ time) • **PoE** (probability of exceedance with V_β / σ) • **Pol θ** (geometric polarisation angle) • **Contributors** (number of decks summed)

The polarisation `Pol θ` is reported as `geom (signed)` — for example *Pol θ: -13.4° (geom -116.4°)*.

### Why per-monitor Love settings

Love waves are horizontally polarised shear waves trapped in a surface layer (Love 1911). They have no vertical component and decay as 1/√r (geometric) rather than 1/r — so at distance, especially over weathered highwalls, they can dominate. Per-monitor lets one receptor model heavy surface coupling while another (e.g. solid floor) doesn't.

---

## Detune tab

Apply a small random offset to detonator timings to spread frequency-domain energy. Reduces tonal peaks that would otherwise couple into structural resonance.

![Detune tab — dither distribution preview](../screenshots/Detune.png)

### Controls

| Control | Purpose |
|---------|---------|
| **Type** | **Electronic** or **Nonel** — chooses which timing field the dither writes to |
| **Scope** | **All visible**, **Selected**, or **one Entity** — limits which holes are affected |
| **Algorithm** | **Uniform ±N** or other distribution. The chart previews the staged Δt distribution |
| **N (ms)** | Magnitude of the dither |
| **Decimals** | Rounding (the screenshot shows **0 (integer)**) |
| **Seed** | RNG seed for reproducibility (default **42**) |
| Refresh icon next to Seed | Re-rolls the seed and re-previews |
| **Apply Detune** | Commits the staged dither (the right-hand footer button changes from **Apply** to **Apply Detune** on this tab) |

### Workflow (verbatim from the in-app Tips)

1. **Scope** — pick All visible / Selected / one Entity. The preview histogram shows the staged dither for that scope only.
2. **Preview** — stages the change in memory; nothing is written. The chart shows the distribution of Δt dithers and the Spectrum/IDI tabs will update to reflect the proposed detune.
3. **Commit** — writes the staged changes into the electronic primers' time offsets (electronic) or the holes' surface delays (nonel). `Ctrl+Z` reverts the whole batch.

**Reset offsets** (the icon button) — zeroes all electronic time offsets in scope. Also a single undoable action.

### Electronic vs Nonel

- **Electronic** — uniform or triangular ±N ms dither. Modern EU-grade detonators are ±0.1 ms precise so a 2-3 ms dither actively changes the firing pattern. Magnitude N and RNG seed make it reproducible.
- **Nonel palette snap** — each hole's surface-cascade delay snaps to one of the loaded SurfaceConnector product values (e.g. 9 / 17 / 25 / 42 / 67 / 109 ms). Max step limits how far a hole can jump in the palette.

### Status readout

After preview the dialog reports *Previewed N detonators on M holes • mean |Δt| X ms, max Y ms — click Apply to commit*.

---

## Constrain tab

Event-rate enforcement — flag events that fall inside a rolling window (preview, with **Before** and **After** counts in the legend). The controls are **Scope**, **Unit**, **Window (ms)**, **Max events**, **Max move (ms)** and **Decimals**.

![Constrain tab](../screenshots/Constrain.png)

> *[SCREENSHOT NEEDED: high-resolution Constrain tab so each control and its tooltip are legible]*

### What this tab does

From the in-app Tips:

> Electronic detonators only. Nonel (shock-tube) connectors cannot be freely retimed below their palette values — their delays come in discrete product steps (9/17/25/42 ms etc.) with ±3-5% mechanical scatter, so this tool simply ignores non-electronic primers.

Constrain enforces a cap on how many events can fire inside any rolling time window. Unlike a global "optimise timing" pass, it only moves events that are already too close together, so row-to-row relief stays intact.

| Control | Meaning |
|---------|---------|
| **Window (ms)** | The rolling time slice being policed. 8 ms is the classic coherence window; 10-15 ms is common for stricter residential cases |
| **Max events** | The most detonations allowed inside any window. 1 = fully sequential; 2 is a practical compromise |
| **Unit** | **Holes** counts one event per hole (first primer only); **Decks** counts every charged primer — stricter and more accurate for multi-deck holes |
| **Max move (ms)** | The most any single event may shift. Low values (3-5 ms) protect relief; high values (15+ ms) work harder but may blur inter-row spacing |
| **Decimals** | Detonator timebase resolution — 0 = whole milliseconds |

### Reading the chart

- **Red bars** — 1 ms bins with more than the allowed events (violations)
- **Green bars** — bins at or below the limit
- **Dashed line** — the limit the tool is resolving towards
- **After** series — appears after a preview; any remaining red bars cannot be resolved within the **Max move** budget

### Workflow

1. Set the **Scope** — All visible / Selected / one Entity (same as Detune)
2. Set **Unit**, **Window (ms)**, **Max events**, **Max move (ms)** and **Decimals**
3. The preview runs automatically, in memory, whenever a setting changes; the status reports hot windows before and after, events moved, the largest shift, and any events it gave up on
4. Click **Apply** to commit — the shifts are written into the electronic primers' time offsets as one undoable action (`Ctrl+Z` reverts the whole batch)

Always re-check the Spectrum and Synthesis tabs after committing — reducing superposition can shift energy into the residential 5-15 Hz band.

---

## Bake Delay

The **Bake Delay** button at the bottom of the dialog converts the holes' fire times — surface delays and nonel cascade times — into absolute delays on their electronic primers.

It is the same bake used by the **Bake Delay** button on the [Connect Toolbar](../blast-design/connect-toolbar.md). The difference is the scope: from the Time Window dialog it bakes the holes in the active tab's scope — the Detune or Constrain scope picker on those tabs, otherwise the **Blast Patterns** filter at the top of the dialog.

A **Bake fire time onto primers?** confirmation summarises what will change before you click **Bake**. The bake can be undone. If nothing in scope can be baked, a **Nothing to bake** message explains why.

---

## Related topics

- [Analyse Toolbar](analyse-toolbar.md) — opens this dialog
- [Analytics Overview](overview.md) — GPU shader models and Voronoi PPV
- [PPV & Vibration Models](ppv-models.md) — the underlying site law and waveform models
- [PPV Voronoi Modes](ppv-voronoi-modes.md) — per-cell receptor-aware PPV
- [Electronic Timing Constructs](../blast-design/electronic-timing-constructs.md) — where electronic time offsets are set
- [Connect Toolbar](../blast-design/connect-toolbar.md) — Bake onto Electronic Detonators
