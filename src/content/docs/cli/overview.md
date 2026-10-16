---
title: The command line (rd)
description: Run pipelines, dbt, Knowledge, the Agent and SELECT queries from your terminal, or from the CLI page in the app.
---

`rd` is the Reflective Data command line. It does what you do in the app, from a terminal or a script: start pipelines, run dbt, read and write [Knowledge](/knowledge/overview/), ask the [Agent](/agent/overview/) and run `SELECT` queries on your project's BigQuery, with tidy tables for the results.

It's for **editors and admins**. It acts as you, with your role. It can't change members, keys, GitHub or settings, and it can't make other tokens.

## Install

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install -g @reflective-data/cli
rd help
```

## Sign in

```bash
rd auth login
```

Your browser opens, you press **Allow**, and the terminal is signed in (the same way `gcloud auth login` works). The sign-in lasts **90 days**.

- **No browser on the machine** (a server, a container, SSH): `rd auth login --no-browser` shows a short code. Open the address it prints on any device, enter the code and approve.
- **With a token**: create one under **Profile settings → Access tokens** and use `rd auth login --token <token>`. Or set the `RD_TOKEN` variable, which is what scripts and automation should do.

`rd auth status` shows who you are signed in as, and `rd auth logout` forgets the sign-in on that machine. Every sign-in and token is listed under **Profile settings → Access tokens**, where you can end it at any time.

## Choose the account and project

Like the workspace switcher in the app:

```bash
rd projects list                    # everything you can use
rd projects use acme/marketing      # remember a choice
rd runs list                        # now works on acme/marketing
rd runs list --project acme/other   # or choose per command
```

If you only have one project, it's used automatically.

## A few examples

```bash
rd pipelines list
rd pipelines sync "HubSpot to BigQuery"
rd dbt run ga4_events --full-refresh --follow
rd knowledge put "How we count users" --file users.md --no-agent
rd sql "select country, count(*) as users from \`my-project.my_dataset.sessions\` group by 1 order by 2 desc limit 10"
rd ask "which traffic sources grew the most last month?"
rd activity --since 1d
```

Everything also takes `--json` for scripts. See the [command reference](/cli/commands/).

## The CLI page in the app

Editors and admins have a **CLI** page in the sidebar: a terminal-style console that runs the same `rd` commands as you, in the browser. It starts in the account and project you have selected in the app. It is not a shell: it only understands `rd` commands (`help` lists them), so there is nothing else to run there. `auth` and `config` aren't needed, because you're already signed in.

## Limits and visibility

- Each token is limited to 120 requests a minute, and each person to 500 SQL queries a day per project (resets at midnight UTC).
- SQL runs as the project's service account and obeys the project's [query size limit](/explore/query-size/).
- Queries run from the CLI, the API or the console show in [Activity](/activity/overview/) as **CLI / API**, with who ran them.
