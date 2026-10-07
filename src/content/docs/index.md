---
title: Welcome to the Reflective Data platform
description: What the platform does, how it fits together, and where to start.
---

The Reflective Data platform is one place to **collect, model, explore and ask questions of your data**, all on top of your own BigQuery. You sign in once and move between the tools from a single sidebar.

| Area | What it's for |
|---|---|
| **Home** | Where you land: status at a glance, recent dashboards and quick actions. |
| **Pipelines** | Copy data from the tools you use (ads, analytics, CRMs, databases) into BigQuery on a schedule. |
| **Build** | Edit and run the dbt code that turns raw data into clean tables, with your code kept in GitHub. |
| **Explore** | Drag-and-drop analysis, charts and a SQL runner on top of your models, with the size of every query shown before it runs. |
| **Notebooks** | Python notebooks (JupyterLab) with ready-made BigQuery access. |
| **Dashboards** | Your Explore dashboards and external ones (such as Looker Studio) in one list. |
| **Knowledge** | Documents your team writes in Markdown: definitions, how-tos, notes. |
| **Agent** | Ask questions in plain language and get answers, tables and charts from your data. |

## How the pieces fit

1. **Pipelines** land raw data in BigQuery.
2. **Build** (dbt) turns it into clean, documented tables. Those tables are what Explore, dashboards and the agent use.
3. **Explore** and **Dashboards** show it. The **Agent** answers questions about it. **Knowledge** holds the definitions that make the answers mean the same thing to everyone.

You don't need to use everything. Many teams start with Explore and Dashboards on tables that already exist.

## Where to start

- New here? Read [Signing in](/getting-started/sign-in/) and [Your workspace](/getting-started/workspace/).
- Setting up a project? See [Build: connect your project](/build/connect/) and [Pipelines](/pipelines/overview/).
- Just want answers? Try the [Agent](/agent/overview/).

:::tip
Every page here describes what **you** can do. What you see depends on your role (admin, editor or viewer). The [permissions reference](/reference/permissions/) lists exactly who can do what.
:::
