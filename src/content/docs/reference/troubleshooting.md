---
title: Troubleshooting
description: Common problems and what to do.
---

## I can't sign in

See [Signing in](/getting-started/sign-in/). The two usual causes are using a different email from the one you were invited with, and an expired code.

## I don't see a project, or an item in the sidebar

You may not have access to that project yet, or your role doesn't include that area (for example, **Agent** is for editors and admins). Ask an account admin. See [Permissions](/reference/permissions/).

## The agent says it isn't set up

An admin needs to add an API key (and a model) under **Settings → Project settings → Agent**. See [Set up the agent](/agent/setup/). If the page says a key is saved but no model is chosen, pick one in the Model box.

## The agent says the spend cap was reached

The month's estimated spend reached the cap an admin set. They can raise it in the same place, or it resets next month.

## "Over the limit" next to Run query

The query would process more data than the project allows. Add a date filter, filter more, or choose fewer fields. See [Query size and limits](/explore/query-size/). An admin can raise the limit if it is too low for legitimate work.

## Explore shows no tables

Explore only shows models from **committed** dbt code, after a successful run. Commit in [Build](/build/edit-and-run/), run dbt on the committed code, and Explore refreshes itself. An admin must also have turned Explore on.

## A dbt run failed

Open the run in **Build → Runs** and read the end of the log; dbt's message names the model and the SQL error. Fix the file, save, and run again. Failed **scheduled** runs email the person who created the schedule.

## A pipeline failed or is stuck

Open **Pipelines → History** on it (editors see the reason). Typical fixes: new credentials in **Edit source**, or waiting for the next scheduled run after a temporary limit at the tool. See [Manage pipelines](/pipelines/manage/).

## My notebook stopped

Notebooks stop after 60 minutes without activity. Press **Start** again; files in `notebooks/` are kept.

## An external dashboard doesn't load

The other service has to allow embedding. For Looker Studio, enable embedding in the report (File → Embed report) and use the `https://lookerstudio.google.com/embed/…` link. If a dashboard shows a sign-in page, the report isn't shared with the people who open it.

## Still stuck

Contact your Reflective Data account manager and tell them the project, what you did, and what you saw (a screenshot helps).
