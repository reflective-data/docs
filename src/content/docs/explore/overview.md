---
title: Explore overview
description: Analyse your data with drag and drop, build charts and dashboards.
---

**Explore** is where you analyse the tables your team has modelled, without writing SQL unless you want to. It's built on [Lightdash](https://docs.lightdash.com), so its own documentation covers the finer points of charts and dashboards.

## Turning it on

An **admin** presses **Enable Explore** once per project. This checks the BigQuery connection and loads your dbt models. You need committed dbt code first (see [Build](/build/overview/)). After that, Explore keeps itself up to date: every time a run of your committed code succeeds, new and changed models appear.

You don't sign in again; Explore uses your platform login.

## Working in Explore

1. Pick a **table** (one of your models).
2. Choose **dimensions** (things to group by, like country or date) and **metrics** (numbers, like users or revenue). They come from your dbt models' YAML, so they mean the same thing for everyone.
3. Add **filters**, **sort**, and press **Run query**.
4. Switch to a **chart**, adjust it, and **Save chart**. Put saved charts on a **dashboard**, organised in **spaces**.

You can also create **custom dimensions and metrics** on the fly. They're yours to explore with; to make one permanent and shared, add it to the model in [Build](/build/overview/).

:::note
The usual Explore button for turning a custom dimension into a pull request is hidden here, because your code is managed in Build, not by Explore.
:::

## What your role allows

Account admins can build and manage content; editors can explore and build charts and dashboards; viewers can open dashboards and saved charts. The exact permissions follow your platform role, see [Permissions](/reference/permissions/).

## The size of every query

Next to **Run query** you'll see how much data a query would process, before you run it. See [Query size and limits](/explore/query-size/).
