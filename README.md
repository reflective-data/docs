# Reflective Data docs

The documentation for the people who **use** the Reflective Data platform, published at **https://docs.reflectivedata.com**.

It's an [Astro Starlight](https://starlight.astro.build) site: Markdown files in `src/content/docs/`, styled with the [Reflective Data design system](https://reflectivedata.com/design-guide/).

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
```

Every push to `main` is built and published by GitHub Actions (GitHub Pages). The custom domain is `public/CNAME`; DNS is a `CNAME` record for `docs` pointing to `reflective-data.github.io`.

## Who this is for

End users of the platform: analysts, marketers and engineers at our clients. **Not** Reflective Data staff. So:

- Describe what a person can **do and see**, in the words on the screen. Don't explain how it's built.
- Don't name internal components or vendors unless the user sees them (for example Explore's own documentation is linked because Explore is built on it).
- State **who can do it** (viewer, editor, admin) wherever it isn't obvious.
- Say what happens to **data and cost** when it matters.
- Prefer short pages with a clear purpose, a table when comparing, and one example.

## Keeping it current (required)

**Whenever a feature is added or changed in the platform, update these docs in the same piece of work.** For each change:

1. Update or add the page for the feature (`src/content/docs/<area>/`), and add new pages to the sidebar in `astro.config.mjs`.
2. Update [`reference/permissions`](src/content/docs/reference/permissions.md) if who-can-do-what changed.
3. Update [`reference/limits-and-costs`](src/content/docs/reference/limits-and-costs.md) if a limit or a cost changed.
4. Update [`reference/analytics`](src/content/docs/reference/analytics.md) if tracking events changed.
5. Update [`reference/troubleshooting`](src/content/docs/reference/troubleshooting.md) when there's a new common problem.
6. Run `pnpm build`; it fails on broken sidebar entries and front matter.

## Layout

```
src/content/docs/
  index.md                  Welcome
  getting-started/          sign in, workspace, home, roles
  pipelines/  build/  explore/  notebooks/  dashboards/  knowledge/  agent/
  activity/  settings/
  reference/                permissions, limits and costs, analytics events, troubleshooting
src/styles/custom.css       design-system colours and fonts
```
