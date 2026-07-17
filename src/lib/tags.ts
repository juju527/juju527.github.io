import { siteConfig } from "../config/site";
import { sortPostsByPublishedDate, type BlogPost } from "./posts";
import { normalizeTagKey, normalizeTagName, slugifyTag } from "./tag-normalization";

export interface TagSummary {
  name: string;
  slug: string;
  count: number;
  posts: BlogPost[];
}

interface TagBucket {
  names: Set<string>;
  posts: BlogPost[];
}

const tagCollator = new Intl.Collator(siteConfig.language, {
  numeric: true,
  sensitivity: "base",
});

function compareTagNames(first: string, second: string): number {
  const semanticOrder = tagCollator.compare(first, second);

  if (semanticOrder !== 0) {
    return semanticOrder;
  }

  return first < second ? -1 : first > second ? 1 : 0;
}

export function getTagHref(slug: string): string {
  return `/tags/${encodeURIComponent(slug)}/`;
}

export function getTagSummaries(posts: BlogPost[]): TagSummary[] {
  const buckets = new Map<string, TagBucket>();

  for (const post of posts) {
    const seenInPost = new Set<string>();

    for (const rawTag of post.data.tags) {
      const name = normalizeTagName(rawTag);
      const key = normalizeTagKey(name);
      const bucket = buckets.get(key) ?? { names: new Set<string>(), posts: [] };

      bucket.names.add(name);

      if (!seenInPost.has(key)) {
        bucket.posts.push(post);
        seenInPost.add(key);
      }

      buckets.set(key, bucket);
    }
  }

  return Array.from(buckets, ([key, bucket]) => {
    const name = [...bucket.names].sort(compareTagNames)[0];
    const tagPosts = sortPostsByPublishedDate(bucket.posts);

    return {
      name,
      slug: slugifyTag(key),
      count: tagPosts.length,
      posts: tagPosts,
    };
  }).sort((first, second) => compareTagNames(first.name, second.name));
}
