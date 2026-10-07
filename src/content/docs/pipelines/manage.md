---
title: Manage pipelines
description: Run, edit, pause and delete pipelines, and read their history.
---

The **Pipelines** page lists every pipeline in the project with its source, dataset, schedule and last result. While a sync is running the page refreshes by itself.

## Actions on a pipeline

| Action | What it does |
|---|---|
| **Sync now** | Starts a run immediately, in addition to the schedule. |
| **Edit pipeline** | Change the name, schedule, BigQuery dataset, which tables are copied and how. |
| **Edit source** | Change the source's settings or credentials. |
| **Pause / Resume** | Stops or restarts scheduled runs without deleting anything. |
| **Delete** | Removes the pipeline (and optionally its source). Data already in BigQuery stays. |
| **History** | The last runs: when, how many rows, how much data, and whether it worked. Editors also see the reason for a failure. |

## Editing a pipeline

Open **Edit pipeline**. The table list is read from the source again each time, so new tables appear unchecked and tables the source no longer has disappear. Before you save, the screen tells you what the changes mean:

- **New tables** are copied in full on the next run.
- **Changing how a table is copied** can mean it's copied again from scratch on the next run.
- **Removed tables** stop updating. What was already copied stays in BigQuery.
- **Changing the dataset** sends new data to the new dataset from the next run. Tables already copied stay where they were.

## Editing a source

Open **Edit source**. Saved secrets show as *saved* and are left alone unless you type a new value. When you save, the connection is **checked first**, so a wrong password can't break a working pipeline. If the check fails, nothing is saved.

If you point a source at a different account or database, the tables already copied no longer match it, so check the pipeline's tables afterwards.

## When a sync fails

Open **History** on the pipeline. Common reasons: credentials expired or were revoked (edit the source and enter new ones), the tool's API limits were hit (the next scheduled run usually succeeds), or a table was removed at the source (edit the pipeline). Viewers see that a run failed; editors see why.
