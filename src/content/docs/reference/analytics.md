---
title: Analytics events (Google Tag Manager)
description: "Every event and parameter the platform pushes to the data layer, for your own GTM and GA4 setup."
---

The platform pushes events to the browser's **`dataLayer`** so you can forward them to Google Analytics 4 through **Google Tag Manager**. The GTM container is loaded on every page.

**Download the reference as CSV:** [events](/gtm-events.csv) · [parameters](/gtm-parameters.csv) · [click names](/gtm-click-names.csv)

:::note
Clicks and actions *inside* embedded tools (Explore, external dashboards, notebooks) happen in their own pages and aren't tracked; the platform reports opening them.
:::

## What every event carries

Every push includes **who and where**, both as event parameters and inside `user_properties`:

| Parameter | Type | Example | Meaning |
|---|---|---|---|
| `event` | string | `pipeline_created` | The event name. Use it as the trigger in GTM. |
| `account_name` | string | `Acme Corp` | Name of the account the person is working in. Empty on sign-in events. |
| `project_name` | string | `marketing` | Name of the project the person is working in. Empty on sign-in events. |
| `user_id` | string (uuid) | `4c1cfb3d-0371-4529-9e16-9a9e80d55e00` | Stable internal ID of the person. Not their email or name. Empty on sign-in events. |
| `account_id` | string (uuid) | `d09136aa-a252-4006-85aa-69aab7700b9e` | ID of the account. |
| `project_id` | string (uuid) | `d1796d57-99a2-49bf-bd9e-ca17780b7ea6` | ID of the project. |
| `user_role` | string | `admin` | The person's role in the project: admin, editor or viewer. |
| `page_path` | string | `/pipelines` | Path of the page where it happened (no query string). |
| `page_title` | string | `Reflective Data` | Title of the page. |
| `user_properties` | object | `…` | The same who/where values as one object, for mapping to GA4 user properties. Contains account_name, project_name, user_id and user_role. |

Nothing people type or write (questions, queries, documents, file contents) is ever included, and clicks inside lists of user content report only where they happened.

## Setting it up in GTM

1. Create **Data Layer Variables** (version 2) for the parameters you want, for example `account_name`, `project_name`, `user_id`, `user_role`, `click_name`.
2. In your **GA4 configuration tag**, set the **User ID** field from the `user_id` variable and add **User properties** from `account_name`, `project_name` and `user_role` (or map the whole `user_properties` object).
3. Create **Custom Event triggers**. The event name is the trigger: for example `pipeline_created`. For all clicks use the event name `ui_click`, and narrow it with a condition on `click_name`.
4. Create **GA4 Event tags** that send those events with the parameters you need as **event parameters**. Register the ones you want to report on as **custom dimensions** in GA4 (Admin → Custom definitions).
5. The platform sends its own `page_view` on every page change. If your GA4 configuration also records page views on browser history changes, turn that off, or you'll count twice.
6. Sign-in events (`login_code_requested`, `login_succeeded`) happen before the platform knows who the person is, so `account_name`, `project_name` and `user_id` are empty on them.

## Event parameters

Parameters that only some events carry:

| Parameter | Type | Example | Meaning | Sent with |
|---|---|---|---|---|
| `page_location` | string (url) | `https://app.reflectivedata.com/pipelines` | Full address of the page. | `page_view` |
| `click_name` | string | `build_commit` | What was clicked. A stable name where the app sets one (see the click names table), otherwise the label as a lowercase_with_underscores slug, or <element>_private inside lists of user content. | `ui_click` |
| `click_text` | string (max 60) | `Commit & push` | The label of what was clicked. Omitted inside lists of user content (chats, files, documents, dashboards, tables). | `ui_click` |
| `click_element` | string | `button` | HTML element: a, button, summary, select, input, label. | `ui_click` |
| `click_area` | string | `sidebar` | Where on the screen: sidebar, header, page or other. | `ui_click` |
| `click_target` | string | `/knowledge` | For links: the path (same site) or the host name (another site). | `ui_click` |
| `to_project_id` | string (uuid) | `d1796d57-…` | The project that was switched to. | `workspace_switched` |
| `theme` | string | `dark` | dark, light or system. | `theme_changed` |
| `message_length` | number | `86` | Characters in the question. The text itself is never sent. | `agent_message_sent` |
| `new_chat` | boolean | `true` | True when the question started a new conversation. | `agent_message_sent` |
| `steps` | number | `4` | Steps the agent took for the answer. | `agent_answer_received` |
| `queries` | number | `2` | Queries it ran. | `agent_answer_received` |
| `charts` | number | `1` | Charts it drew. | `agent_answer_received` |
| `failed` | boolean | `false` | True when the answer ended in an error. | `agent_answer_received` |
| `chart_type` | string | `line` | bar, horizontal_bar, stacked_bar, line, area, stacked_area, pie, donut or scatter. | `agent_chart_downloaded` |
| `doc_id` | string (uuid) | `9b74602e-…` | The Knowledge document that was opened. | `knowledge_doc_opened` |
| `action` | string | `POST /projects/:id/pipelines/connections` | The kind of request: its name if it has one, otherwise the method and path with ids replaced by :id. | `app_error`, `app_action` |
| `status` | number | `422` | HTTP status of the failed request. The error message is never sent. | `app_error` |

## All events

### Navigation

| Event | Fires when | Extra parameters |
|---|---|---|
| `page_view` | A page is shown: a route change, a project switch, or a page shown again from the page cache. | `page_location` |
| `ui_click` | Every click on a button, link, tab, menu item, checkbox, radio or select. | `click_name`, `click_text`, `click_element`, `click_area`, `click_target` |
| `workspace_switched` | A project is chosen in the workspace switcher. | `to_project_id` |
| `theme_changed` | The theme is changed. | `theme` |

### Sign in

| Event | Fires when | Extra parameters |
|---|---|---|
| `login_code_requested` | An email sign-in code is requested. No user context yet. | – |
| `login_succeeded` | An email sign-in code is accepted. No user context yet (the next event has it). | – |
| `logout` | Sign out. | – |

### Account and team

| Event | Fires when | Extra parameters |
|---|---|---|
| `profile_updated` | Display name changed. | – |
| `account_renamed` | The account was renamed. | – |
| `project_renamed` | The project was renamed. | – |
| `project_created` | A project was created. | – |
| `member_role_changed` | Someone's role was changed. | – |

### Build

| Event | Fires when | Extra parameters |
|---|---|---|
| `build_managed_repo_created` | An admin chose a managed repository. | – |
| `github_install_started` | An admin started connecting GitHub. | – |
| `github_repo_linked` | A GitHub repository was linked (also when a managed repository is moved to GitHub). | – |
| `build_file_saved` | A file was saved in the editor. | – |
| `build_file_deleted` | A file or folder was deleted. | – |
| `build_file_renamed` | A file or folder was renamed or moved. | – |
| `build_files_uploaded` | Files were uploaded. | – |
| `build_project_scaffolded` | A starter dbt project was created. | – |
| `build_commit` | Changes were committed. | – |
| `build_pull` | Changes were pulled from GitHub. | – |
| `dbt_run_started` | A dbt run was started. | – |
| `dbt_run_cancelled` | A dbt run was cancelled. | – |
| `schedule_created` | A schedule was created. | – |
| `schedule_updated` | A schedule was changed, paused or resumed. | – |
| `schedule_deleted` | A schedule was deleted. | – |
| `schedule_run_now` | A schedule was run immediately. | – |
| `build_history_restored` | A file was put back to an earlier version (nothing committed). | – |

### Connections

| Event | Fires when | Extra parameters |
|---|---|---|
| `connection_saved` | The BigQuery connection was saved. | – |
| `connection_tested` | The BigQuery connection was tested. | – |
| `connection_removed` | The BigQuery connection was removed. | – |

### Pipelines

| Event | Fires when | Extra parameters |
|---|---|---|
| `pipelines_enabled` | Pipelines was turned on for the project. | – |
| `pipeline_source_created` | A source was connected. | – |
| `pipeline_source_updated` | A source's settings or credentials were changed. | – |
| `pipeline_created` | A pipeline was created. | – |
| `pipeline_updated` | A pipeline was edited, paused or resumed. | – |
| `pipeline_sync_started` | Sync now was pressed (also the first sync after creating). | – |
| `pipeline_deleted` | A pipeline was deleted. | – |

### Explore and dashboards

| Event | Fires when | Extra parameters |
|---|---|---|
| `explore_enabled` | Explore was turned on. | – |
| `explore_refreshed` | Explore's models were refreshed by hand. | – |
| `explore_opened` | Explore was opened. | – |
| `dashboard_opened` | A dashboard was opened. | – |
| `dashboard_embed_added` | An external dashboard was added. | – |
| `dashboard_embed_updated` | An external dashboard was edited. | – |
| `dashboard_embed_removed` | An external dashboard was removed. | – |

### Notebooks

| Event | Fires when | Extra parameters |
|---|---|---|
| `notebook_started` | The notebook environment was started. | – |
| `notebook_stopped` | The notebook environment was stopped. | – |

### Agent

| Event | Fires when | Extra parameters |
|---|---|---|
| `agent_message_sent` | A question was sent to the agent. | `message_length`, `new_chat` |
| `agent_answer_received` | The agent finished answering. | `steps`, `queries`, `charts`, `failed` |
| `agent_chart_downloaded` | A chart was downloaded as an image. | `chart_type` |
| `agent_chat_sharing_changed` | A conversation was shared with, or unshared from, the project. | – |
| `agent_chat_deleted` | A conversation was deleted. | – |
| `agent_settings_saved` | Agent keys, model or limits were saved (never the keys). | – |

### Knowledge

| Event | Fires when | Extra parameters |
|---|---|---|
| `knowledge_doc_opened` | A document was opened. | `doc_id` |
| `knowledge_doc_created` | A document was created. | – |
| `knowledge_doc_updated` | A document was saved. | – |
| `knowledge_doc_deleted` | A document was deleted. | – |
| `knowledge_doc_downloaded` | A document was downloaded as Markdown. | – |

### AI apps (MCP)

| Event | Fires when | Extra parameters |
|---|---|---|
| `mcp_connection_approved` | Someone allowed an AI app to connect to a project. | – |
| `mcp_connection_revoked` | A connection of an AI app was disconnected. | – |
| `mcp_token_created` | A personal token was created (never its value). | – |
| `mcp_settings_saved` | An admin changed the project's MCP switches. | – |

### Other

| Event | Fires when | Extra parameters |
|---|---|---|
| `app_action` | Any other change to data that has no name above. | `action` |
| `app_error` | A request failed (the platform said no or errored). | `action`, `status` |

## Click names

`ui_click` fires for every click. Its `click_name` parameter is what you filter on. These are the fixed names:

| `click_name` | Where | Meaning |
|---|---|---|
| `workspace_menu` | Sidebar | Opened the workspace switcher. |
| `workspace_pick` | Workspace switcher | Picked a project in the list. |
| `workspace_new_project` | Workspace switcher | Chose New project. |
| `settings_menu` | Sidebar | Opened the Settings menu. |
| `settings_activity` | Settings menu | Opened Activity. |
| `settings_project_settings` | Settings menu | Opened Project settings. |
| `settings_account_settings` | Settings menu | Opened Account settings. |
| `settings_profile` | Settings menu | Opened Profile. |
| `theme_dark / theme_light / theme_system` | Settings menu | Chose a theme. |
| `sign_out` | Settings menu | Pressed Sign out. |
| `home_ask_input` | Home | Clicked into the ask box. |
| `home_ask_submit` | Home | Pressed Ask. |
| `home_ask_suggestion` | Home | Pressed a suggested question. |
| `home_setup_step` | Home | Pressed a line in the setup checklist. |
| `home_tile_pipelines / _dbt / _dashboards / _knowledge` | Home | Opened an area from a status tile. |
| `home_action_bot / _explore / _pipelines / _book / _build / _notebook` | Home | Pressed a quick action (Agent, Explore, Add a pipeline, Write a document, Code editor, Notebooks). |
| `build_choose_managed` | Build | Chose a managed repository. |
| `build_choose_github` | Build | Chose Connect GitHub. |
| `build_choose_github_account` | Build | Picked which GitHub account holds the repository. |
| `build_history_toggle` | Build | Opened or closed the History panel. |
| `build_history_file` | Build | Opened the history of one file. |
| `build_history_all` | Build | Went back to all commits. |
| `build_history_commit` | Build | Opened or closed a commit in the history. |
| `build_history_restore` | Build | Restored a file to an earlier version. |
| `mcp_allow` | AI apps (MCP) | Allowed an AI app on the connect screen. |
| `mcp_decline` | AI apps (MCP) | Cancelled on the connect screen. |
| `mcp_revoke` | AI apps (MCP) | Disconnected an AI app. |
| `mcp_make_token` | AI apps (MCP) | Created a personal token. |
| `build_move_to_github` | Build | Pressed Move to GitHub. |
| `knowledge_view_write / _split / _preview` | Knowledge editor | Switched between Markdown, Side by side and Preview. |
| `knowledge_upload_md` | Knowledge editor | Pressed Upload .md. |
| `knowledge_save` | Knowledge editor | Pressed Save. |
| `<label slug>, e.g. build, commit_push, add_pipeline, run` | Everywhere else | Anything without a fixed name uses its visible label, lowercased with underscores, up to 40 characters. |
| `<element>_private, e.g. a_private, button_private` | Lists of user content | Chats, files, documents, dashboards, table rows: only the kind of element is reported, never its text. |
