---
title: Set up the agent
description: API keys, models, spending cap and the query size limit (admins).
---

An admin sets the agent up once per project under **Settings → Project settings → Agent**.

## 1. Add an API key

The agent uses **your own** account with an AI provider. Add a key for one or more of:

- **OpenAI** (GPT)
- **Anthropic** (Claude)
- **Google** (Gemini)

Paste the key and press **Save key**. It's checked with the provider straight away; if they don't accept it you'll see why. Keys are stored encrypted and never shown again, only their last four characters.

The first key you save is selected automatically, together with a sensible default model for it. After that the agent is ready.

## 2. Choose a model

Under **Model**, pick a provider and one of the models your key can use, then **Use this model**. Larger models answer harder questions better but cost more per question; smaller ones are faster and cheaper. You can change it any time.

## 3. Set the limits

- **Monthly spend cap (USD).** When the month's estimated spend reaches it, the agent pauses until you raise it or the month ends. Spend is estimated from the number of tokens used and the provider's published prices; your provider's own dashboard has the exact bill.
- **Largest BigQuery query (GB).** A query that would process more is not run. This applies to the agent **and** to Explore, so it protects against expensive drag-and-drop queries too. See [Query size and limits](/explore/query-size/).

The page also shows **spend this month** and who has used the agent.

## Privacy

Questions, and the data that queries return, go to the provider you chose, under your own account with them. Nothing is sent to Reflective Data's own AI accounts. Documents in [Knowledge](/knowledge/overview/) are included when relevant.

## Who can use it

Editors and admins. Viewers don't see the Agent.
