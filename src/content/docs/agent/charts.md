---
title: Charts from the agent
description: What charts the agent can draw, and the options you can ask for.
---

Ask for a chart in words ("show that as a line chart", "make it a bar chart sorted high to low") or let the agent pick one when a visual helps. Charts appear in the conversation and follow your light/dark theme. Press **PNG** on a chart to download it as a high-resolution image (the title is part of the image).

## Chart types

| Type | Good for |
|---|---|
| Line, area | Trends over time |
| Bar, horizontal bar | Comparing categories; use horizontal for long names |
| Stacked bar, stacked area | Parts of a whole across categories or time |
| Pie, donut | Shares of a few categories (small ones are grouped into "Other") |
| Scatter | Two numeric measures against each other |

## What you can ask for

- **A trendline**: a dashed fitted line per series. The slope and how well it fits are calculated exactly, so the agent quotes real numbers. Say *"ignore the partial month"* to leave the latest point out of the fit.
- **A moving average** over a number of points.
- **Running totals** (cumulative).
- **Shares of 100%** for stacked charts.
- **Reference lines**: a target you name, or the average, median, maximum or minimum.
- **Bars and lines together**, and a **second axis** for a measure on a very different scale (revenue as bars, conversion rate as a line).
- **Value labels** on bars and points.
- **Several groups on one chart**, including your own groupings such as "direct vs everything else". The agent can group a field's values on the fly.
- A chart that combines results from **several earlier queries**.

## Following up

You can change a chart by asking: *"add a trendline"*, *"now as a donut"*, *"only the top 5"*. The agent remembers the earlier results in the conversation and redraws from them without re-querying.
