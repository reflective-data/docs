---
title: Agent overview
description: Ask questions about your data in plain language.
---

The **Agent** answers questions about your data in plain language, shows its working, and draws charts you can download. It's available to **editors and admins**, once an admin has [set it up](/agent/setup/).

## Asking

Open **Agent** (or use the ask box on [Home](/getting-started/home/)) and type a question, for example:

- *What were my top 10 pages by users last week? Show it as a chart.*
- *How many users did we have each month this year?*
- *Which traffic sources brought the most users in the last 30 days?*

Press Enter. You can follow up ("and by device?", "make that a donut").

## How it answers

The agent works from your **dbt models** (the tables, metrics and dimensions in [Explore](/explore/overview/)), so numbers are defined the same way as in your dashboards. It also reads your [Knowledge](/knowledge/overview/) documents for definitions and rules. It never sees tables that aren't part of your models.

Above each answer, **steps** shows what it did: the query, the SQL, the rows it got back, and **how much data each query processed**. Expand any step to check it. If it chose a time period or made an assumption, it says so in the answer.

Every query is checked **before** it runs. If it would process more than the project's [limit](/explore/query-size/), it isn't run and the agent narrows it. For tables partitioned by date, the agent always limits the date range (the last 30 days if you didn't say), and tells you.

## Use Agent on every page

**Pipelines, Build, Explore, Notebook, Dashboards and Knowledge** each have a **Use Agent** button next to their usual actions. It opens a wide box at the bottom of the page with a few suggestions for that page (for example *Run the models I changed* in Build) and room to describe what you want over several lines (Enter sends, Shift+Enter adds a line); sending opens the Agent with that already sent. In Pipelines, a row's **⋯ menu → Change with Agent** opens the Agent with that pipeline named, so you only finish the sentence. It's the same Agent as the Agent tab, with the same approval step.

## Making changes: you approve each one

The agent can also **set up and change pipelines** for you. It never changes anything by itself: it prepares the change and shows a card in the chat with what it will do (the source, the tables, the schedule), and nothing happens until you press **Apply**. **Dismiss** throws it away.

| Ask | What it prepares |
|---|---|
| *Copy my HubSpot contacts and companies twice a day* | A new [pipeline](/pipelines/add-a-pipeline/) on a source you've already added, with the tables and schedule |
| *Run the LED pipeline at 08:30 and 20:30 UTC* | A schedule change |
| *Add the deals table to it* / *stop copying contact_lists* | Table changes |
| *Pause the Bing pipeline* / *sync HubSpot now* | Pause, resume, or a run right away |
| *Why did last night's sync fail?* | Nothing to approve: it reads the runs and explains |
| *Delete the old pipeline* | A deletion card (the source and the data already copied stay) |
| *Add a staging model for HubSpot deals* | New or changed files in your dbt repository, shown as a diff |
| *Add descriptions to the ga4_events columns* | A change to the model's YAML (Explore picks the descriptions up after the next run) |
| *Run the changed models* / *do a full refresh of ga4_events* | A dbt run (`build`, `run`, `test` ... with your selection) |
| *Run dbt every day at 21:00 UTC* | A [dbt schedule](/build/schedules/) (create, change, pause, resume, delete, run now) |
| *Add a metric for paid orders to the orders model* | A change to the model's YAML in Explore's format (metrics, dimensions, labels, descriptions), then *Refresh Explore* |
| *Save that as a bar chart* / *Build a dashboard with the top pages and sources* | A chart or dashboard saved in [Explore](/explore/overview/), created as you (new and existing charts can go on one dashboard) |
| *Add our Looker Studio report as a dashboard* | An external dashboard link (project admins only) |
| *Create a notebook that charts sessions by source* / *add a cell that finds the top landing pages* | Cells written into a [notebook](/notebooks/overview/) in the project's notebooks folder |
| *Refresh Explore* | Reads the committed dbt code into Explore |
| *Write a document defining how we count active users* | A new [Knowledge](/knowledge/overview/) document (or a change to one; the agent can only change documents it can read) |
| *Why did last night's dbt run fail?* | Nothing to approve: it reads the log and explains |

**Code changes** show a diff of every file, and you choose where it goes: **Commit to main** (scheduled runs and Explore use it from then on) or **Put on a new branch**, which is pushed to GitHub for you to review and merge there (the card links to it). Repositories that are managed by the platform, without GitHub, can only commit to main. Only the dbt code can be changed this way (`models`, `macros`, `tests`, `seeds`, `snapshots`, `analyses`, `dbt_project.yml`, `packages.yml`); nothing else in the repository. Only the files in the change are committed: other edits waiting in the Build editor are left alone (if the change touches a file you have edited there, the card warns you). dbt runs always wait for your click, because they use BigQuery.

You need the same role as for doing it by hand: editors and admins. A new **source** needs your account's login details, so the agent sends you to **Pipelines → Add pipeline** for that; never type passwords or keys into the chat. Applied changes show in [Activity](/activity/overview/) where the screens log them, and the card keeps a link to the result. From the [command line](/cli/overview/), `rd ask` shows what is waiting for approval; approving is done in the app.

## Your conversations

Conversations are **private to you** by default. Use the **Share with project** switch in a chat's header to let everyone with agent access in the project read it. Others see it **read-only** and can't add to it; only you can unshare or delete it. Shared chats appear in the sidebar under *Shared with the project*.

## What it can't do

- It answers from **your models only**; it can't query other datasets, change data, or write to your warehouse (only SELECT queries run). Its changes are limited to the ones above, and each needs your approval.
- It can be wrong. Check the steps and the SQL for anything important, especially definitions and time periods.
- It doesn't remember across conversations beyond what's in your Knowledge documents.

:::caution
Your question and the data its queries return are sent to the AI provider the admin chose (OpenAI, Anthropic or Google), under your organisation's own account with them. Don't ask it to handle data you wouldn't want processed by that provider.
:::
