---
title: SQL runner and virtual views
description: Write your own SQL, save it as a chart or a view, and what "virtual view" means.
---

## SQL runner

The **SQL runner** lets you write BigQuery SQL against your project's tables and see the result. You can turn the result into a chart, save it as a chart, or save it as a **virtual view**. The [query size](/explore/query-size/) shows next to **Run query** and the project's limit applies.

## Virtual views

A virtual view is a saved SQL query that then shows up in Explore as a table, so you can drag and drop on top of it.

Good to know:

- It is stored **inside Explore only**. Nothing is created in BigQuery and nothing is written to your GitHub repository.
- It's a saved query, not saved data: every time someone uses it, the SQL runs, so it costs data on every use.
- Everyone with access to the project can see it in Explore.
- It stays when Explore refreshes from your dbt code. If a dbt model has the **same name**, the model wins.

:::tip
Use a virtual view to try something out quickly. When it's something your team relies on, make it a **dbt model** in [Build](/build/overview/) instead: it's versioned in GitHub, can be documented and tested, and the [Agent](/agent/overview/) can use it too.
:::
