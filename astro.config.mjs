import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Reflective Data platform documentation, for the people who use the platform. Published at https://docs.reflectivedata.com
export default defineConfig({
  site: "https://docs.reflectivedata.com",
  integrations: [
    starlight({
      title: "Reflective Data Docs",
      description: "How to use the Reflective Data platform: pipelines, dbt, Explore, notebooks, dashboards, knowledge and the data agent.",
      favicon: "/favicon.svg",
      customCss: ["@fontsource-variable/inter", "@fontsource-variable/jetbrains-mono", "./src/styles/custom.css"],
      social: [{ icon: "external", label: "reflectivedata.com", href: "https://reflectivedata.com" }],
      editLink: { baseUrl: "https://github.com/reflective-data/docs/edit/main/" },
      lastUpdated: true,
      sidebar: [
        { label: "Start here", items: [
          { slug: "index" }, { slug: "getting-started/sign-in" }, { slug: "getting-started/workspace" }, { slug: "getting-started/home" }, { slug: "getting-started/roles" },
        ] },
        { label: "Pipelines", items: [
          { slug: "pipelines/overview" }, { slug: "pipelines/add-a-pipeline" }, { slug: "pipelines/manage" },
        ] },
        { label: "Build (dbt)", items: [
          { slug: "build/overview" }, { slug: "build/connect" }, { slug: "build/edit-and-run" }, { slug: "build/schedules" },
        ] },
        { label: "Explore", items: [
          { slug: "explore/overview" }, { slug: "explore/query-size" }, { slug: "explore/sql-and-views" },
        ] },
        { label: "Notebooks", items: [{ slug: "notebooks/overview" }] },
        { label: "Dashboards", items: [{ slug: "dashboards/overview" }] },
        { label: "Knowledge", items: [{ slug: "knowledge/overview" }] },
        { label: "Agent", items: [
          { slug: "agent/overview" }, { slug: "agent/charts" }, { slug: "agent/setup" },
        ] },
        { label: "Activity & settings", items: [
          { slug: "activity/overview" }, { slug: "settings/project" }, { slug: "settings/account" },
        ] },
        { label: "Reference", items: [
          { slug: "reference/permissions" }, { slug: "reference/limits-and-costs" }, { slug: "reference/analytics" }, { slug: "reference/troubleshooting" },
        ] },
      ],
    }),
  ],
});
