---
title: Notebooks
description: Python notebooks with ready-made BigQuery access.
---

**Notebooks** give you JupyterLab for analysis in Python, with BigQuery ready to use. Each project has its own private notebook environment.

## Using notebooks

Editors and admins press **Start** on the **Notebooks** page; JupyterLab opens inside the platform (the first start takes a moment). Your notebooks are files in the **`notebooks/`** folder of your project's repository, so you can commit them from [Build](/build/overview/) like any other code.

In every notebook, these are already set up:

- `bq`: a BigQuery client for the project's warehouse,
- `DATASET`: the dataset your dbt models write to,
- the `%%bigquery` magic, to run SQL in a cell and get a table back,
- pandas, NumPy, SciPy, scikit-learn, matplotlib, seaborn and Plotly.

```python
df = bq.query(f"select * from `{DATASET}.my_model` limit 100").to_dataframe()
df.head()
```

No key file is needed; the environment is already authorised.

## Limits and safety

- Each BigQuery query is capped at **100 GB billed** by default. You can pass your own job configuration for a different cap in a single query.
- A notebook environment is private to its project. It can't reach other projects' data or the platform itself, and its internet access is limited to public HTTPS sites.
- It **stops automatically after 60 minutes** without activity, to save resources. Start it again when you need it. Files in `notebooks/` are kept.

## Help on the Notebook page

The **Help** button next to **Stop server** shows a short guide to notebooks, with a sample query that lists the tables in your dbt dataset and a Copy button.

## The assistant inside JupyterLab

Open a notebook and press **✦ Assistant** (bottom right, or **Ctrl/⌘ + /**), the **✦ Agent** button in the notebook's toolbar, or **generate with the Agent** in an empty cell. A panel opens beside the notebook; drag its left edge to share the screen between the notebook and the assistant as you like (the width is remembered). It sees the notebook, the **selected cell** above all (its code and its output, including an error), so you can say *Explain this cell*, *Fix the error*, or *Plot sessions by day*. It knows your project's tables and that `bq` and `DATASET` are ready in the kernel.

When it writes code, the proposal shows in the panel (as a diff when it changes the selected cell) with three buttons: **Accept & Run**, **Accept** (puts it in the cell, without running) and **Cancel**. Nothing is changed or run until you choose. It's available to editors and admins, needs the [Agent set up](/agent/setup/) for the project, and counts toward the project's AI spend cap like the Agent does. If the panel says to restart the notebook server, stop and start it once from the Notebook page.

## Write notebooks with the Agent

The **Use Agent** button on the Notebook page (or the [Agent](/agent/overview/) itself) can create a notebook or add cells to one: *Create a notebook that charts sessions by source*. It shows you the cells first and writes them into the `notebooks/` folder only when you press **Apply**; you run the notebook yourself, and commit it from Build to share it.

## For viewers

Viewers can't run code. Instead they can open the **finished, saved results** of notebooks read-only (the output you last saved), at a comfortable reading width.
