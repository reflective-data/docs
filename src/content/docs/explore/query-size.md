---
title: Query size and limits
description: See how much data a query will process before you run it, and how the limit works.
---

BigQuery charges by the amount of data a query reads. So Explore shows it **before** you run anything.

## The estimate

Next to **Run query**, in both the explorer and the SQL runner, you'll see for example **Will process 1.2 GB**. It's an exact figure from BigQuery's own dry run of the very query you're about to run. A dry run reads nothing and costs nothing.

It updates as you change fields, filters or the SQL. If the query can't be estimated yet (for instance the SQL is still incomplete), nothing is shown.

## The limit

Every project has a **largest query** setting (10 GB by default; admins change it under **Project settings → Agent**). If a query would process more than that:

- the label turns **red** ("Over the limit: would process 14 GB"),
- **Run query** is disabled.

To get under the limit, narrow the question: add a **date filter**, filter more, or pick fewer fields. Date-partitioned tables are much cheaper when you filter on their date column.

The same limit is also enforced by BigQuery itself, so it holds even for things that run without pressing the button (auto-run, saved charts, scheduled deliveries). The [Agent](/agent/overview/) respects it too.

## Tips for cheaper queries

- Filter on the table's **date** (partition) column. Queries then read only the days you ask for.
- Choose only the **fields** you need.
- Prefer **aggregated** models for dashboards that many people open.
