---
title: Use your data in Claude, ChatGPT and other AI apps (MCP)
description: Connect an AI app to one project so it can read the same data the agent can, as you.
---

The platform has an **MCP server**, so AI apps you already use (Claude, ChatGPT, Cursor and other tools that support MCP) can read your project's data and answer questions with it. It is the same data the [agent](/agent/overview/) can read, with the same rules.

## What the AI app can do

| Tool | What it does |
|---|---|
| `list_models`, `describe_model` | See the models and their metrics and dimensions. |
| `query_semantic` | Ask for numbers through the metrics and dimensions, with filters. The preferred way. |
| `run_sql` | Read-only SQL on the project's models, when the semantic layer can't express the question. An admin can switch this off. |
| `list_knowledge`, `read_knowledge` | Read the project's [Knowledge](/knowledge/overview/) documents. |

It **cannot** change anything, run code, start pipelines or dbt runs, or see any other project or account. It acts as **you**, with your role. Only editors and admins can connect (viewers can't run queries), and losing your role ends the connection.

## Connect an app

Each connection is for **one project**; connect again for another. The server address is:

```
https://api.reflectivedata.com/mcp
```

- **Claude (claude.ai and the desktop app):** *Settings → Connectors → Add custom connector*, paste the address, and follow the sign-in. You sign in to Reflective Data, choose the project and press **Allow**.
- **Other apps that sign in with the browser:** add a remote MCP server with the same address; the app opens the same screen.
- **Tools that can't sign in with the browser** (some command-line and editor tools): in **Profile settings → AI apps** make a **token** for a project, then send it as `Authorization: Bearer <token>`. The token is shown once; treat it like a password.

## Costs, limits and visibility

- Queries run in BigQuery as usual and are billed to the project's BigQuery. Each query is capped by the project's **query size limit** (set under the agent settings), and the same partition-date rule as the agent applies.
- Each connection is limited to **60 requests a minute and 200 queries a day** (resets at midnight UTC).
- Every query appears in [Activity](/activity/overview/) as **AI apps (MCP)**, with who ran it and which app.
- MCP does not use the project's AI key: the AI app brings its own model, so there is no AI spend on the platform.

## Managing connections

- **You:** *Profile settings → AI apps* lists your connections; **Disconnect** ends one at once.
- **Project admins:** *Project settings → AI apps (MCP)* has two switches: allow connections at all (turning it off disconnects everyone) and allow SQL. It also lists everyone's connections, which an admin can disconnect.
