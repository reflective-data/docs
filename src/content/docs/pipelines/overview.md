---
title: Pipelines overview
description: Copy data from the tools you use into your BigQuery on a schedule.
---

**Pipelines** copy data from the tools you use (advertising platforms, analytics, CRMs, databases and hundreds more) into **your BigQuery**, on a schedule you choose. Once the data is there, the rest of the platform can work with it: build models in [Build](/build/overview/), analyse in [Explore](/explore/overview/), ask the [Agent](/agent/overview/).

## Before you start

An **admin** turns Pipelines on once per project (**Pipelines → Enable Pipelines**). They choose the default BigQuery dataset where copied data lands. It's created for you if it doesn't exist, and it must be different from the dataset your dbt models write to, so raw data and models stay apart. The BigQuery connection must already be [set up](/build/connect/).

After that, editors and admins can create and run pipelines. Viewers can see each pipeline's status and history.

## What a pipeline is made of

- A **source**: the tool you copy from, with its settings and credentials.
- **Tables**: which parts of the source to copy, and *how* (see below).
- A **schedule**: how often it runs.
- A **BigQuery dataset**: where the tables land. Each pipeline can use its own, so Meta Ads can go to `meta_ads` and Google Ads to `google_ads`.

Tables are named after the source, for example `meta_ads_campaigns`, so two sources with a table of the same name never collide.

## How tables are copied

| Choice | What it does | When to use it |
|---|---|---|
| **Copy everything each time** | Replaces the table with a fresh full copy on every run. | Small tables, or when nothing tells you what changed. |
| **Add new rows** | Adds only rows that are new since the last run. | Event or log data that never changes after it's written. Needs a "last changed" column. |
| **Add new rows and update changed ones** | Adds new rows and replaces rows that changed, so there are no duplicates. | Data that is edited after the fact, like campaigns or orders. Needs a "last changed" column and a unique ID column. |

Some sources decide these columns for you; otherwise you pick them from a list.

See [Add a pipeline](/pipelines/add-a-pipeline/) and [Manage pipelines](/pipelines/manage/).
