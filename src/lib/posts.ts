import { getCollection, type CollectionEntry } from "astro:content";

import { siteConfig } from "../config/site";

export type BlogPost = CollectionEntry<"blog">;

interface GetVisiblePostsOptions {
  includeDrafts?: boolean;
}

const postDateFormatter = new Intl.DateTimeFormat(siteConfig.language, {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
  year: "numeric",
});

export function formatPostDate(date: Date): string {
  return postDateFormatter.format(date);
}

export function getPostHref(post: BlogPost): string {
  return `/blog/${post.id}/`;
}

export function sortPostsByPublishedDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((first, second) => {
    const dateDifference = second.data.published.valueOf() - first.data.published.valueOf();
    return dateDifference || first.id.localeCompare(second.id, "en");
  });
}

export async function getVisiblePosts(
  { includeDrafts = import.meta.env.DEV }: GetVisiblePostsOptions = {},
): Promise<BlogPost[]> {
  const shouldIncludeDrafts = import.meta.env.DEV && includeDrafts;
  const posts = await getCollection("blog", ({ data }) => shouldIncludeDrafts || !data.draft);
  return sortPostsByPublishedDate(posts);
}
