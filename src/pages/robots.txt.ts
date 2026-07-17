import type { APIRoute } from "astro";

import { siteConfig } from "../config/site";

export const GET: APIRoute = ({ site }) => {
  const siteURL = site ?? new URL(siteConfig.url);
  const sitemapURL = new URL(siteConfig.sitemap, siteURL);
  const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${sitemapURL.href}`, ``].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
