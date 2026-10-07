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

## For viewers

Viewers can't run code. Instead they can open the **finished, saved results** of notebooks read-only (the output you last saved), at a comfortable reading width.
