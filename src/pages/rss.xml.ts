import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { siteConfig } from "../config/site";
import { getPostHref, getVisiblePosts } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getVisiblePosts({ includeDrafts: false });

  return rss({
    title: siteConfig.feed.title,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    customData: `<language>${siteConfig.language}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: getPostHref(post),
      categories: post.data.tags,
    })),
  });
}
