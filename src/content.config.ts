import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { normalizeTagKey } from "./lib/tag-normalization";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().trim().min(1),
        description: z.string().trim().min(1),
        published: z.coerce.date(),
        updated: z.coerce.date().optional(),
        tags: z
          .array(z.string().trim().min(1, "tags must not contain empty values"))
          .min(1),
        category: z.string().trim().min(1),
        draft: z.boolean(),
        featured: z.boolean(),
        cover: image().optional(),
        coverAlt: z.string().trim().min(1).optional(),
      })
      .superRefine((post, context) => {
        const tagKeys = new Set<string>();

        post.tags.forEach((tag, index) => {
          const key = normalizeTagKey(tag);

          if (tagKeys.has(key)) {
            context.addIssue({
              code: "custom",
              message: "tags must be unique after case and whitespace normalization",
              path: ["tags", index],
            });
          }

          tagKeys.add(key);
        });

        if (post.updated && post.updated < post.published) {
          context.addIssue({
            code: "custom",
            message: "updated must not be earlier than published",
            path: ["updated"],
          });
        }

        if (post.cover && !post.coverAlt) {
          context.addIssue({
            code: "custom",
            message: "coverAlt is required when cover is provided",
            path: ["coverAlt"],
          });
        }
      }),
});

export const collections = { blog };
