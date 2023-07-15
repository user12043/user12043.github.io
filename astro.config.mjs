import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://user12043.github.com",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("user12043.github.io/resume"),
      changefreq: "weekly"
    })
  ]
});
