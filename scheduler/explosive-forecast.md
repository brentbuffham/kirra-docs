# Explosive Forecast

The **EXPLOSIVE FORECAST** tab projects weekly explosive consumption across the schedule. It helps mine planners coordinate emulsion supply logistics and identify peak loading weeks.

> *Screenshot coming soon*

---

## Stats Cards

Four stats cards display above the forecast table:

| Card | Colour | Description |
|---|---|---|
| **Total Explosive Required** | Red | Sum of all blast explosive mass in kg (also shown in tonnes) |
| **Loading Days Required** | Amber | Total loading days at the configured load rate |
| **Avg PF** | Cyan | Average powder factor across all blasts (kg/bcm) |
| **Charge Source** | Green | Whether explosive data comes from Kirra charge configs or the schedule |

The **Charge Source** card shows "Kirra Config" with the number of loaded configs when charge configurations have been imported from a Kirra project or KAP file, otherwise "Designed" (from schedule data).

---

## Forecast Table

The table breaks the schedule into weekly buckets based on loading start dates:

| Column | Description |
|---|---|
| Week | Week number and year (e.g., "Wk 8, 2026") |
| Blasts | Comma-separated list of blast names loading that week |
| Explosive (kg) | Total explosive mass for blasts in that week |
| Volume (bcm) | Total volume for blasts in that week |
| Load Days | Sum of loading days for that week's blasts |
| Daily Rate (kg) | Average daily explosive consumption for that week |

Weeks are sorted chronologically. Only blasts with a load start or blast date are included.

---

## Loading Rate

The loading rate used for forecast calculations is configurable via the input field at the top of the tab. The default is 100,000 kg/day. This rate is used for the forecast table calculations. For actual per-blast loading, the [dependency engine](dependencies.md) uses the combined rate of assigned MPUs.

---

## Usage

The Explosive Forecast helps answer questions like:

- Which weeks have the highest explosive demand?
- Are multiple blasts competing for loading resources in the same week?
- What is the sustained daily emulsion consumption rate?
- Are there weeks with no loading activity (idle MPUs)?

---

## Related Topics

- [Blast Overview](blast-overview.md) -- Summary table of all blasts
- [Conformance](conformance.md) -- Planned vs actual tracking
- [Equipment](equipment.md) -- MPU fleet and loading rates
- [Dependencies](dependencies.md) -- How loading duration is calculated

---
