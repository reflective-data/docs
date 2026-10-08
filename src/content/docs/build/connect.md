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

## 2. Choose where your code lives

Open **Build**. If nothing is set up, an admin chooses one of two options:

### Managed repository

We keep your dbt code, with full commit history, **on the platform**. There's nothing to set up: you get a starter dbt project with a first commit, and can edit, commit and run straight away. You don't need a GitHub account. (This is the same idea as a *managed repository* in dbt Cloud.)

- **Commit** saves a version in the managed history. There's no Pull, because nothing else changes the code.
- Scheduled runs and [Explore](/explore/overview/) use the latest commit, exactly as they would with GitHub.
- You can **move to GitHub whenever you like** (below).

### GitHub

Keep the project in **your own GitHub repository**:

1. Choose **Connect GitHub** and sign in with GitHub. If the Reflective Data GitHub app is already installed on your account or organisation it is used (you choose one if there are several); otherwise you install it and select the repositories it may access. To give it more repositories later, open the app's settings on GitHub (**Configure**), then come back to Build.
2. Back in Build, pick the **repository** and, if you like, a **branch** (otherwise the repository's default).

The platform checks that you really have access to the installation, so nobody can link repositories they don't own. If the repository is empty, Build offers to create a starter dbt project in it.

### Moving a managed repository to GitHub

In a managed project an admin chooses **Move to GitHub**, installs the GitHub app if it isn't yet, and picks an **empty** repository. Your code and its **full history** are copied into it and the project then works from GitHub, including Pull. A repository that already has code is refused, so nothing is overwritten.

:::note
A managed repository is stored by the platform; ask your account manager about backups and export if you need a copy outside it. Moving to GitHub is the way to get one yourself.
:::

## Check it

When both are done, the setup checklist on [Home](/getting-started/home/) shows them as done, and you can run dbt from Build.
