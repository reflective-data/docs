---
title: History and restoring versions
description: See every commit of your dbt project, what each one changed, and bring an earlier version back.
---

Every project keeps its commits, whether the code lives in a [managed repository or in GitHub](/build/connect/). Open **History** at the top of **Build** to see them.

## The commit list

Newest first, with the commit message, who made it, when, and a short id. The newest one is marked **latest**: [scheduled runs](/build/schedules/) always use the latest committed code. Press **Show older commits** to go further back.

Open a file and press **History** next to it to see only the commits that touched that file. **Show all commits** goes back to the full list.

## What a commit changed

Click a commit to see the files it changed, how many lines were added (green) and removed (red), and the changes line by line. Click a file name to look at just that file. Very large diffs are cut off.

Everyone with access to the project can read the history, including viewers.

## Restoring an earlier version

Editors and admins can press **Restore this version** next to a file in a commit. The file in your working copy goes back to how it was in that commit.

- **Nothing is committed** by restoring. The file shows up under **Changes**, so you can look at it, edit it, and then commit it like any other change. That commit is a new entry in the history: nothing is rewritten or lost.
- If the file didn't exist in that commit, there's nothing to restore.
- Scheduled runs keep using the latest committed code until you commit the restored version.
