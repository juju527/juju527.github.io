import { siteConfig } from "../config/site";
import { sortPostsByPublishedDate, type BlogPost } from "./posts";

export interface ArchiveMonth {
  month: number;
  label: string;
  posts: BlogPost[];
}

export interface ArchiveYear {
  year: number;
  count: number;
  months: ArchiveMonth[];
}

const archiveMonthFormatter = new Intl.DateTimeFormat(siteConfig.language, {
  month: "long",
  timeZone: "UTC",
});

function formatArchiveMonth(month: number): string {
  return archiveMonthFormatter.format(new Date(Date.UTC(2000, month, 1)));
}

export function groupPostsByArchive(posts: BlogPost[]): ArchiveYear[] {
  const years = new Map<number, Map<number, BlogPost[]>>();

  for (const post of sortPostsByPublishedDate(posts)) {
    const year = post.data.published.getUTCFullYear();
    const month = post.data.published.getUTCMonth();
    const months = years.get(year) ?? new Map<number, BlogPost[]>();
    const monthPosts = months.get(month) ?? [];

    monthPosts.push(post);
    months.set(month, monthPosts);
    years.set(year, months);
  }

  return Array.from(years, ([year, months]) => {
    const archiveMonths = Array.from(months, ([month, monthPosts]) => ({
      month,
      label: formatArchiveMonth(month),
      posts: monthPosts,
    })).sort((first, second) => second.month - first.month);

    return {
      year,
      count: archiveMonths.reduce((total, month) => total + month.posts.length, 0),
      months: archiveMonths,
    };
  }).sort((first, second) => second.year - first.year);
}
