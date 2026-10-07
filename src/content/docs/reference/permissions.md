---
title: Permissions
description: Who can do what, by role.
---

✓ = can do it. – = can't.

| | Viewer | Editor | Admin |
|---|:-:|:-:|:-:|
| **Home**, **Dashboards** (open), **Knowledge** (read) | ✓ | ✓ | ✓ |
| Add or edit **external dashboards** | – | – | ✓ |
| **Explore**: open dashboards and saved charts | ✓ | ✓ | ✓ |
| **Explore**: explore data, build charts and dashboards | – | ✓ | ✓ |
| **Explore**: manage content | – | – | ✓ |
| Turn on Explore | – | – | ✓ |
| **Knowledge**: write, edit, delete | – | ✓ | ✓ |
| **Build**: read code, run logs, schedules | ✓ | ✓ | ✓ |
| **Build**: edit files, commit, pull, run dbt, manage schedules | – | ✓ | ✓ |
| Choose where code lives (GitHub or managed), move to GitHub | – | – | ✓ |
| **BigQuery connection**: set up, change, test | – | – | ✓ |
| **Pipelines**: see status and history | ✓ | ✓ | ✓ |
| **Pipelines**: create, edit, sync, pause, delete | – | ✓ | ✓ |
| Turn on Pipelines | – | – | ✓ |
| **Notebooks**: read finished results | ✓ | ✓ | ✓ |
| **Notebooks**: start and use JupyterLab | – | ✓ | ✓ |
| **Agent**: ask, share own chats | – | ✓ | ✓ |
| **Agent**: keys, model, limits | – | – | ✓ |
| **Activity**: see own | – | ✓ | ✓ |
| **Activity**: see everyone's | – | – | ✓ |
| Rename project / account, create projects | – | – | ✓ |
| Change people's roles | – | – | ✓ |

:::note
Roles can be set for a whole account, or for one project only. Someone can be an editor in one project and a viewer in another. Account admins are admins of every project in the account.
:::
