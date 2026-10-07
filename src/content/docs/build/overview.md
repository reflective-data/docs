---
title: Build overview
description: Edit and run your dbt project, with the code kept in GitHub.
---

**Build** is where you work on the code that turns raw data into clean, reliable tables: a [dbt](https://docs.getdbt.com) project. Your code lives in **your own GitHub repository**; Build gives you an editor, a way to run dbt against your BigQuery, and schedules.

What you can do here:

- Browse and edit the files of your dbt project in a code editor.
- **Commit** your changes to GitHub, and **pull** changes made elsewhere.
- **Run dbt** (build, run, test and more) and watch the log live.
- **Schedule** runs, so models stay fresh without anyone pressing a button.

Models that you commit and run show up in [Explore](/explore/overview/) automatically, with their descriptions, dimensions and metrics.

## Who can do what

Everyone with access to the project can **read** the code, run logs and schedules. **Editors and admins** can edit files, commit, run dbt and manage schedules. **Admins** link the repository and set up the BigQuery connection.

## Get started

1. [Connect BigQuery and your repository](/build/connect/) (an admin does this once).
2. [Edit and run](/build/edit-and-run/).
3. [Schedule](/build/schedules/) what should run regularly.
