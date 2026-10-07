---
title: Analytics events (Google Tag Manager)
description: The events the platform pushes to the data layer, for your own GTM and GA4 setup.
---

The platform pushes events to the browser's **`dataLayer`** so you can forward them to Google Analytics 4 through **Google Tag Manager**. The GTM container is loaded on every page.

:::note
Clicks and actions inside embedded tools (Explore, external dashboards, notebooks) happen in their own pages and aren't tracked; the platform reports opening them.
:::

## What every event carries

Every push includes **who and where**, both as event parameters and as `user_properties`:

| Parameter | Meaning |
|---|---|
| `account_name`, `project_name` | The account and project the person is in. |
| `user_id` | A stable internal ID for the person. Not their email or name. |
| `account_id`, `project_id`, `user_role` | IDs and the person's role in the project. |
| `page_path`, `page_title` | Where it happened. |
| `user_properties` | An object with `account_name`, `project_name`, `user_id` and `user_role`, to map to GA4 user properties. |

Nothing people type or write (questions, queries, documents, file contents) is ever included, and clicks inside lists of user content report only where they happened.

## Setting it up in GTM

1. Create **Data Layer Variables** for the parameters you want (for example `account_name`, `project_name`, `user_id`, and `click_name`).
2. In your **GA4 configuration tag**, set `user_id` from the `user_id` variable and map `user_properties` as user properties.
3. Create **Custom Event triggers** for the events below, and **GA4 Event tags** that send them with the parameters you need.
4. If the GA4 configuration also records page views on history changes, turn that off and use the `page_view` event instead, to avoid counting twice.

## Events

### Navigation and clicks

| Event | When | Extra parameters |
|---|---|---|
| `page_view` | A page is shown (including when it's shown again from the page cache). | `page_location` |
| `ui_click` | **Every click** on a button, link, tab, menu item, checkbox or select. | `click_name`, `click_text`, `click_element`, `click_area` (`sidebar`, `header`, `page`), `click_target` |
| `workspace_switched` | A project is chosen in the workspace switcher. | `to_project_id` |
| `theme_changed` | The theme is changed. | `theme` |
| `logout` | Sign out. | |
| `login_code_requested`, `login_succeeded` | Email sign-in steps. | |

### Actions

| Area | Events |
|---|---|
| Profile and team | `profile_updated`, `account_renamed`, `project_renamed`, `project_created`, `member_role_changed` |
| Build | `github_install_started`, `github_repo_linked`, `build_file_saved`, `build_file_deleted`, `build_file_renamed`, `build_files_uploaded`, `build_project_scaffolded`, `build_commit`, `build_pull`, `dbt_run_started`, `dbt_run_cancelled`, `schedule_created`, `schedule_updated`, `schedule_deleted`, `schedule_run_now` |
| Connections | `connection_saved`, `connection_tested`, `connection_removed` |
| Pipelines | `pipelines_enabled`, `pipeline_source_created`, `pipeline_source_updated`, `pipeline_created`, `pipeline_updated`, `pipeline_sync_started`, `pipeline_deleted` |
| Explore and dashboards | `explore_enabled`, `explore_refreshed`, `explore_opened`, `dashboard_opened`, `dashboard_embed_added`, `dashboard_embed_updated`, `dashboard_embed_removed` |
| Notebooks | `notebook_started`, `notebook_stopped` |
| Agent | `agent_message_sent` (`message_length`, `new_chat`), `agent_answer_received` (`steps`, `charts`, `queries`, `failed`), `agent_chart_downloaded` (`chart_type`), `agent_chat_sharing_changed`, `agent_chat_deleted`, `agent_settings_saved` |
| Knowledge | `knowledge_doc_opened`, `knowledge_doc_created`, `knowledge_doc_updated`, `knowledge_doc_deleted`, `knowledge_doc_downloaded` |
| Home | `home_ask_submit`, `home_ask_suggestion`, `home_tile_*`, `home_action_*`, `home_setup_step` |
| Anything else that changes data | `app_action` with `action` (the kind of request) |
| Errors | `app_error` with `action` and `status` (never the message) |
