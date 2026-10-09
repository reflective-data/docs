---
title: Edit, commit and run
description: Working with files, committing to GitHub, and running dbt.
---

## Files

The left side of Build shows your repository's files. You can:

- **Open** a file to edit it in the code editor (with syntax highlighting; the editor follows your light/dark theme).
- **Create** files and folders, **rename** and **delete** them (hover a row to see the buttons).
- **Upload** files or whole folders, either with the upload button or by **dragging them in**. Drop onto a folder to put them there.

Press **Save** (or ⌘S / Ctrl+S) to save a file to your working copy.

## Commit and pull

Your edits live in a working copy until you **commit** them. Write a short message and press **Commit**: the changes go to your GitHub repository. **Pull** brings in changes someone else made. If the same lines changed in both places, Build tells you which files conflict instead of overwriting anything.

## Run dbt

In the **Runs** panel choose a command and press **Run**:

| Command | What it does |
|---|---|
| `build` | Runs models, tests, seeds and snapshots in order. A good default. |
| `run` | Builds the models. |
| `test` | Runs the data tests. |
| `seed` | Loads CSV files from your repo as tables. |
| `compile` | Compiles the SQL without running it. |
| `snapshot` | Runs snapshots. |

- **Models and options** (optional) limits what runs and how. Type a selector such as `my_model+` or `tag:daily` (`--select` is added for you), and optionally:
  - `--full-refresh` rebuilds incremental models from scratch (for example `ga4_events --full-refresh`, or just `--full-refresh` for everything);
  - `--fail-fast` stops at the first failure;
  - `--exclude other_model` leaves something out.
  Other dbt options aren't allowed, so a run can't be pointed anywhere else.
- **Source**: *Working copy* runs your files as they are now, including unsaved-to-GitHub changes; *Committed code* runs a fresh copy of what's on your branch.

The log streams live. **Cancel run** stops it. Past runs are listed with their status, so you can open the log of any of them.

Only one run per project is active at a time.

## Models in Explore

When a run of **committed code** succeeds, Explore refreshes its models, so new or changed models, descriptions, dimensions and metrics appear without anyone doing anything. Runs of the working copy never publish, so unfinished work stays private.
