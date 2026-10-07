---
title: Connect your project
description: Set up the BigQuery connection and link your GitHub repository (admins).
---

An admin does these two steps once per project.

## 1. The BigQuery connection

Go to **Settings → Project settings → Connections**. You'll need:

- A **Google Cloud service account key** (a JSON file) for a service account that can run queries and create tables in your project. At minimum the *BigQuery Job User* and *BigQuery Data Editor* roles on the dataset you will use.
- The **Google Cloud project ID** that holds your data.
- The **dataset** dbt should write its models to.
- The **location** of that dataset (for example `US` or `EU`).

Press **Test connection**. It checks that the key is valid, that queries run, that the dataset is reachable in the right location, and that tables can be created. Fix anything that fails, then save.

The key is stored encrypted and is never shown again. One connection is shared by [Build](/build/overview/), [Explore](/explore/overview/), [Notebooks](/notebooks/overview/) and [Pipelines](/pipelines/overview/).

:::note
A project has **one** warehouse connection. To work with a different warehouse, create another project (**Settings → Account settings → Projects**).
:::

## 2. Link your repository

Open **Build**. If nothing is linked:

1. Choose **Install the GitHub app** and install it on your organisation or account, selecting the repositories it may access.
2. Back in Build, pick the **repository** and, if you like, a **branch** (otherwise the repository's default).

The platform checks that you really have access to the installation, so nobody can link repositories they don't own.

If the repository is empty, Build offers to **create a starter dbt project** for you.

## Check it

When both are done, the setup checklist on [Home](/getting-started/home/) shows them as done, and you can run dbt from Build.
