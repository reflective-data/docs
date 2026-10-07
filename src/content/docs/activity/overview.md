---
title: Activity
description: "A record of the queries and jobs run on the platform: who, where, how much, and what."
---

**Activity** (under **Settings → Activity**) lists the queries and jobs run in the project: **who** ran them, in **which app**, how much data they **processed**, what it cost (an estimate) and the full **statement**.

## What's listed

| App | What's recorded |
|---|---|
| Agent | The queries it ran for each question, including ones that were blocked for being too large. |
| Explore, SQL runner, Dashboards | Queries run from the explorer, the SQL runner, dashboards and scheduled deliveries. |
| Build (dbt) | Each dbt run, and the queries dbt ran. |
| Notebooks | Queries run from notebooks (not tied to a person, since a notebook environment is shared by the project). |
| Pipelines | Each sync, with rows and size. |

Each row shows the time, person, app, a short description, the **status** (OK, Failed, Blocked or Running), the data **billed** by BigQuery, an **estimated cost** (BigQuery's on-demand price), and the duration. Click a row to see the full SQL, extra details, and a **Copy** button.

## Filtering and reading

Choose a **time range**, an **app**, a **person**, a **status**, or search the text of queries. **Include internal queries** also shows housekeeping the tools do on their own (like loading table lists). The cards at the top add up what you've filtered: number of jobs, data billed, estimated cost, a split by app, and the heaviest users. Results are shown **100 per page**.

## Who sees what

- **Admins** see everyone's activity in the project.
- **Editors** see their own.
- **Viewers** don't have the Activity page.

## Things to know

- Data from BigQuery's job history is brought in every few minutes and whenever you open the page, so a query you just ran may take a moment to appear.
- Sizes are what BigQuery billed; costs are estimates and don't include storage or other charges.
- If several projects share one Google service account, only queries that carry a project label (Explore and the agent) can be assigned to a project. Using one service account per project avoids this.
