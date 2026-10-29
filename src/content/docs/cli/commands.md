---
title: Command reference
description: Every rd command, its options and the SELECT-only SQL rules.
---

Every command accepts `--project <name>` (or `account/project`), `--account <name>` and `--json`. Names can be the name, the short name shown by `rd projects list`, or an id; where a name is ambiguous the CLI asks you to be more specific. Run `rd help <command>` for details.

## You and your projects

| Command | What it does |
|---|---|
| `rd whoami` | Who you are and the projects you can use |
| `rd accounts list` | Your accounts |
| `rd projects list` | Your projects (● marks the default) |
| `rd projects use <account>/<project>` | Remember the account and project for the next commands |
| `rd auth login` / `logout` / `status` | Sign in (browser, `--no-browser` code, or `--token`), sign out, who am I (terminal only) |
| `rd config show` | Where the saved choices live (terminal only) |

## Pipelines

| Command | What it does |
|---|---|
| `rd pipelines list` | Pipelines with schedule, status and last sync |
| `rd pipelines sync <name\|id>` | Start a run now |
| `rd pipelines pause <name\|id>` / `resume` | Stop or restart the scheduled runs |

## dbt

| Command | What it does |
|---|---|
| `rd dbt run [models]` | Run dbt (also `build`, `test`, `seed`, `compile`, `snapshot`, `deps`, `parse`, `ls`, `debug`) |
| `rd runs list [--limit n]` | Recent runs |
| `rd runs get <run>` | One run's details |
| `rd runs logs <run> [--follow]` | A run's log; `--follow` watches it live |
| `rd runs cancel <run>` | Stop a running run |
| `rd schedules list` | The project's schedules |
| `rd schedules run <name\|id>` / `pause` / `resume` | Run a schedule now, or pause and resume it |

dbt options: `--exclude <models>`, `--full-refresh`, `--fail-fast`, `--committed` (run the committed code instead of the working copy, as scheduled runs do) and `--follow` (wait and show the log, exit code 1 if it fails). Other dbt options aren't allowed. A run is refused while another is in progress in the project.

## Knowledge

| Command | What it does |
|---|---|
| `rd knowledge list` | Documents, and which are available to the Agent |
| `rd knowledge get <title\|id>` | Print a document's Markdown |
| `rd knowledge put <title> [--file doc.md] [--no-agent]` | Create or update (by title) from a file or from standard input |
| `rd knowledge rm <title\|id> --yes` | Delete (asks for `--yes`) |

## Activity and the Agent

| Command | What it does |
|---|---|
| `rd activity [--since 1d\|7d\|30d\|all] [--app x] [--status x] [-q text] [--limit n]` | What ran in the project. Admins see everyone's, editors their own |
| `rd ask "<question>" [--chat <id>]` | Ask the Agent; shows its steps, then the answer. Continue with `--chat` |

## SQL (SELECT only)

```bash
rd sql "select * from \`project.dataset.table\` where date >= '2026-01-01' limit 20"
rd sql --file report.sql --format csv > report.csv
echo "select 1" | rd sql --format vertical
```

Options: `--rows <n>` (default 100, at most 10,000), `--format table|json|csv|vertical` (or `--json`).

The rules:

- **One `SELECT` statement.** BigQuery itself checks what the statement is, so anything else is refused: inserts, updates, deletes, creating or dropping tables, scripts, exports.
- It runs as the project's BigQuery service account, like the SQL runner in [Explore](/explore/sql-and-views/), so it can read whatever that account can.
- The project's **query size limit** applies, and you're told when a query would be over it.
- Results are formatted as a table that fits your terminal; timestamps are shown in UTC.

## Environment variables

| Variable | Meaning |
|---|---|
| `RD_TOKEN` | An access token (instead of `rd auth login`) |
| `RD_PROJECT`, `RD_ACCOUNT` | Default project and account |
| `RD_API_URL` | The server (default `https://api.reflectivedata.com`) |
| `NO_COLOR` | Plain output without colours (`--no-color` does the same) |

Sign-in and choices are saved in `~/.config/rd` (or `$XDG_CONFIG_HOME/rd`, `%APPDATA%\rd`); the sign-in file is readable only by you.

## Exit codes

`0` success, `1` an error or a failed `--follow` run, `2` not signed in or the token is no longer valid.
