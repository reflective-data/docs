---
title: Schedules
description: Run dbt on a timetable.
---

A schedule runs a dbt command regularly, so your tables stay up to date. Editors and admins manage them in **Build → Schedules**.

## Create one

Press **+ New schedule** and set:

- **Name**, for example *Nightly build*.
- **Command** and optionally which models to run (the selector, for example `ga4_events`, `my_model+` or `tag:daily`, with the options `--full-refresh`, `--fail-fast` and `--exclude`; there's no need to type `--select`). Think twice before scheduling `--full-refresh`: it rebuilds from scratch every time and costs accordingly.
- **How often**: every hour (at a minute you choose), every day or every week (at a time you choose), or a **custom cron** expression (`minute hour day month weekday`, for example `0 6 * * 1-5` for 06:00 on weekdays).
- The **time zone** the times refer to.

## What a scheduled run does

- It runs the **committed code** on your branch (a fresh copy), never an unfinished working copy.
- If a run **fails**, the person who created the schedule gets an email.
- If a run is already in progress for the project, the scheduled one is skipped.
- After a successful scheduled run, [Explore](/explore/overview/) refreshes its models.

## Manage

On each schedule: **Run now**, **Pause / Resume**, **Edit**, **Delete**. Its next run time and its last result are shown in the list.
