---
title: Add a pipeline
description: "Step by step: pick a source, connect it, choose tables and a schedule."
---

Editors and admins can add pipelines. Go to **Pipelines → + Add pipeline**. There are four steps.

## 1. Source

Search the catalogue for the tool you want to copy from, for example "HubSpot", "Google Ads" or "Postgres". Experimental connectors are hidden until you search for them or tick *Include experimental connectors*.

## 2. Connect

Give the source a name and fill in its settings. The form is generated from what that tool needs: an API key, an account ID, a database host, and so on. Secrets (passwords, tokens) are hidden as you type and stored securely.

Press **Connect**. The platform checks the connection with the settings you entered and only continues if it works. If it doesn't, you'll see the reason and nothing is saved.

:::note
Some tools offer "sign in with your browser" as an authentication option. That isn't supported yet. If the tool also offers an API key, token or refresh token, choose that; the **Setup guide** link on the page explains how to create one.
:::

## 3. Tables

The platform looks at the source and lists its tables. The first time can take a minute or two. For each one:

1. Tick the tables you want (use **All** or **None** to start from either end).
2. Choose how to copy it: [everything each time, new rows, or new and changed rows](/pipelines/overview/#how-tables-are-copied).
3. If asked, choose the **last changed** column and/or the **unique ID** column.

## 4. Schedule

- **Pipeline name**: how it appears in the list.
- **How often**: *every day at a set time* (choose the time and time zone), *every few hours*, or *only when I run it*.
- **BigQuery dataset**: where the tables land. It defaults to the project's dataset. Type a new name to use a different one: it's created if needed. Names can contain letters, numbers and underscores, and can't be the dataset your dbt models write to.

Press **Create pipeline**. The first copy starts straight away, so there is data to look at; after that it follows the schedule.

## What happens next

The pipeline appears in the list with its status. The first sync can take a while for large sources. When it finishes, the tables are in your BigQuery dataset and can be used in [Build](/build/overview/) as sources, in [Explore](/explore/overview/), or by the [Agent](/agent/overview/) once they're part of your models.
