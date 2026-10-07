---
title: Limits and costs
description: What's limited, what costs money, and where to see it.
---

## What costs money

The platform runs on **your** accounts, so the main costs are the ones you'd expect:

| Cost | Where it shows up |
|---|---|
| **BigQuery queries** (data processed) | Your Google Cloud bill. See [Activity](/activity/overview/) for an estimate by person and app, and [Query size and limits](/explore/query-size/) to see a query's size before you run it. |
| **BigQuery storage** | Your Google Cloud bill. Pipelines add raw tables; dbt adds models. |
| **AI usage** (Agent) | Your own AI provider account. The [monthly cap](/agent/setup/) pauses the agent when reached. |

## Limits

| Limit | Default | Notes |
|---|---|---|
| Largest BigQuery query in Explore and the Agent | 10 GB | Admins change it in Project settings → Agent. |
| Agent monthly spend | $20 | Estimated from tokens; admins change it. |
| Largest BigQuery query in a Notebook | 100 GB billed | Per query; can be overridden in code. |
| Notebook idle time before it stops | 60 minutes | Files in `notebooks/` are kept. |
| A Knowledge document | 200,000 characters | Up to 500 documents per project. |
| Rows shown in an Agent step | 200 | The agent sees the first 50 when reasoning, and it can aggregate for you. |
| Agent steps per question | 8 | Ask something narrower if it runs out. |
| Activity page | 100 rows per page | |

## Keeping costs down

- Filter on date columns; select only what you need.
- Use aggregated models for dashboards many people open.
- Set the query limit to what your largest legitimate query needs, not higher.
- Check **Activity** for the heaviest queries and who runs them.
