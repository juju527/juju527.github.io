import { rehypeHeadingIds, unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export default defineConfig({
  site: "https://juju527.github.io",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return (
          pathname !== "/404/" &&
          pathname !== "/404" &&
          pathname !== "/404.html" &&
          pathname !== "/robots.txt" &&
          !pathname.endsWith(".xml")
        );
      },
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              ariaLabel: "Link to this section",
              className: ["heading-anchor"],
            },
            content: { type: "text", value: "#" },
          },
        ],
        rehypeKatex,
      ],
    }),
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      wrap: false,
    },
  },
});
