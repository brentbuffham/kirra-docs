# Conformance

The **CONFORMANCE** tab tracks planned versus actual drill and blast volumes across your schedule. It supports importing actuals data via CSV file or querying from REST API endpoints (Generic REST, Snowflake, CData Connect Cloud, OData v4).

> *Screenshot coming soon*

---

## Stats Cards

Four stats cards display at the top of the tab:

| Card | Description |
|---|---|
| **Target BCM (Month)** | Monthly production target in bank cubic metres |
| **Actual BCM (MTD)** | Actual volume achieved month-to-date, with a progress bar |
| **Variance** | Difference between actual and target (green if ahead, red if behind) |
| **Conformance** | Percentage of target achieved |

The progress bar uses colour coding:
- **Green**: 90%+ of target
- **Amber**: 70-89% of target
- **Red**: Below 70% of target

---

## Planned vs Actual Table

The main table shows one row per scheduled blast:

| Column | Description |
|---|---|
| Blast | Blast name |
| Planned BCM | Volume from the schedule |
| Planned Exp (kg) | Explosive mass from the schedule |
| Actual BCM | From imported actuals (green text) |
| Actual Exp (kg) | From imported actuals (green text) |
| BCM Variance | Difference between actual and planned (colour-coded) |
| Planned Date | Blast date from the schedule |
| Actual Date | Actual blast date from imported actuals |
| Status | Badge showing current status (active, fired, drilling, etc.) |

The Actual columns only appear after actuals data has been imported. A count badge below the table shows how many blasts have matching actuals.

---

## Importing Actuals via CSV

### Drop Zone

Drag and drop a CSV file onto the **Import Actuals CSV** drop zone, or click to browse for a file.

### CSV Format

The importer recognises multiple column name variants. Required columns:

| Column | Required | Accepted Headers |
|---|---|---|
| Blast Name | **Yes** | `Blast Name`, `BlastName`, `blast_name`, `blast`, `name` |
| Actual Volume | No | `Actual Volume (m3)`, `ActualBCM`, `actual_bcm`, `bcm`, `volume` |
| Actual Explosive | No | `Actual Explosive (kg)`, `ActualExpKg`, `actual_exp_kg`, `explosive` |
| Actual Blast Date | No | `Actual Blast Date`, `ActualBlastDate`, `actual_blast_date`, `date` |
| Status | No | `Status`, `blast_status` |
| Actual Drill Meters | No | `Actual Drill (m)`, `ActualDrillMeters`, `actual_drill_meters`, `drillmeters` |
| Actual Load Kg | No | `ActualLoadKg`, `actual_load_kg`, `loadkg`, `kgloaded` |

### Date Locale

A dropdown lets you select the date format for your CSV: **Australian** (DD/MM/YYYY), **US** (MM/DD/YYYY), or **ISO** (YYYY-MM-DD). This setting is persisted between sessions.

### Progress Auto-Calculation

When actual drill meters or load kg values are present, the importer automatically calculates drill and load progress percentages for matching blasts:

- **Drill progress** = actual drill meters / total planned drill meters
- **Load progress** = actual load kg / planned explosive mass

### Template Export

Click **Export Template** to download a CSV pre-populated with all scheduled blast names and their planned blast dates. Fill in the actual values and re-import.

---

## Importing Actuals via API

The Conformance tab supports querying actuals from external databases and APIs. Four providers are available:

### Generic REST

- **URL**: Your API endpoint
- **Auth**: Bearer token (optional)
- **Query**: Sent as POST body `{ query: "..." }` if provided, otherwise GET

### Snowflake SQL API

- **URL**: Snowflake account URL (e.g., `https://abc12345.ap-southeast-2.aws.snowflakecomputing.com`)
- **Auth**: Bearer / JWT token (required)
- **Fields**: Database, Schema, Warehouse
- **Query**: SQL statement

### CData Connect Cloud

- **URL**: CData Connect Cloud URL (e.g., `https://cloud.cdata.com`)
- **Auth**: Basic auth (email:PAT, base64 encoded)
- **Fields**: Workspace, Connection/Table
- **Query**: OData `$filter` expression (optional)

### OData v4

- **URL**: OData service root URL
- **Auth**: Bearer token (optional)
- **Fields**: Entity Set name (e.g., `BlastActuals`)
- **Query**: OData `$filter` expression (optional)

### Test Connection

Click **Test Connection** to verify your endpoint and credentials before fetching data.

---

## Related Topics

- [Blast Overview](blast-overview.md) -- Summary table of all blasts
- [Explosive Forecast](explosive-forecast.md) -- Weekly explosive demand forecast
- [Import & Export](import-export.md) -- File import and export workflows

---
