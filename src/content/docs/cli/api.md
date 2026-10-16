---
title: The API
description: Use access tokens to call the platform's API from scripts and other tools.
---

The API is what the CLI and the app use. You can call it from scripts, notebooks or other tools.

- **Address:** `https://api.reflectivedata.com/v1/…`
- **Sign-in:** an **access token** in a header: `Authorization: Bearer <token>`.
- **Who can use it:** editors and admins. A token acts as you, with your role in each project. If your role is reduced, the token loses that access straight away.

```bash
curl -H "Authorization: Bearer $RD_TOKEN" https://api.reflectivedata.com/v1/me
```

## Get a token

**Profile settings → Access tokens → Create a token**, then choose **For the API and CLI**.

- Give it a name, so you know what to end later.
- Choose **all your projects** or **only one project**. A token limited to one project can't see the others.
- Choose when it expires (30 days, 90 days, a year, or never).
- It's shown **once**. Store it like a password. Anyone who has it can do what you can do through the API.

The same page lists every token and CLI sign-in with when it was last used, and **End** stops one at once. A token can't create other tokens.

## Endpoints

Every project route has the project in the address: `/v1/projects/<id>/…`. Find the ids with `GET /v1/me`.

| Method and path | What it does |
|---|---|
| `GET /v1/me` | You, your accounts and projects (editor or admin ones) |
| `GET /v1/projects/:id/pipelines` | Pipelines and their status |
| `POST /v1/projects/:id/pipelines/connections/:connectionId/sync` | Start a sync |
| `PATCH /v1/projects/:id/pipelines/connections/:connectionId` | Pause or resume (`{"status":"inactive"}` or `"active"`), rename, change schedule |
| `GET` / `POST /v1/projects/:id/runs` | List dbt runs, or start one: `{"command":"run","select":"my_model --full-refresh","source":"committed"}` |
| `GET /v1/projects/:id/runs/:runId` | One run, with its log |
| `POST /v1/projects/:id/runs/:runId/cancel` | Cancel |
| `GET /v1/projects/:id/schedules` | dbt schedules |
| `PATCH /v1/projects/:id/schedules/:scheduleId` | e.g. `{"enabled":false}` |
| `POST /v1/projects/:id/schedules/:scheduleId/run` | Run a schedule now |
| `GET` / `POST /v1/projects/:id/knowledge` | List documents, create one (`{"title","body","forAgent"}`) |
| `GET` / `PUT` / `DELETE /v1/projects/:id/knowledge/:docId` | Read, update or delete a document |
| `GET /v1/projects/:id/activity` | Activity (`?since=1d&app=cli`) |
| `POST /v1/projects/:id/ai/chat` | Ask the Agent (`{"message":"…"}`), streamed as server-sent events |
| `POST /v1/projects/:id/sql` | One SELECT: `{"sql":"select …","rows":100}` returns `columns`, `rows`, `totalRows`, `truncated`, `bytesProcessed` |

Anything else (members, keys, GitHub, project settings, tokens) isn't available with a token, and answers `403 not_available`.

## SQL over the API

```bash
curl -s -X POST https://api.reflectivedata.com/v1/projects/$PROJECT/sql \
  -H "Authorization: Bearer $RD_TOKEN" -H "Content-Type: application/json" \
  -d '{"sql":"select 1 as one","rows":10}'
```

The same rules as `rd sql`: one SELECT statement only (anything else is `400 select_only`), the project's query size limit (`422 too_big`), and a daily limit of 500 queries per person and project.

## Errors and limits

Errors are JSON with an `error` code and often a `message`: `401` no or invalid token, `403` not available to tokens or not allowed, `404` not found or no access to that project, `409` a precondition (for example no BigQuery connection, or a run already in progress), `429` too many requests. A token may make **120 requests a minute**.

API calls show in [Activity](/activity/overview/) where they run queries or start work, with the token's name.
