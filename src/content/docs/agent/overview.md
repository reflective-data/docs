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

## Your conversations

Conversations are **private to you** by default. Use the **Share with project** switch in a chat's header to let everyone with agent access in the project read it. Others see it **read-only** and can't add to it; only you can unshare or delete it. Shared chats appear in the sidebar under *Shared with the project*.

## What it can't do

- It answers from **your models only**; it can't query other datasets, change data, or write to your warehouse (only SELECT queries run).
- It can be wrong. Check the steps and the SQL for anything important, especially definitions and time periods.
- It doesn't remember across conversations beyond what's in your Knowledge documents.

:::caution
Your question and the data its queries return are sent to the AI provider the admin chose (OpenAI, Anthropic or Google), under your organisation's own account with them. Don't ask it to handle data you wouldn't want processed by that provider.
:::
