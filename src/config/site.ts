export const siteConfig = {
  name: "Tianyi Zhu",
  description:
    "A personal website and technical blog about algorithms, systems, and software engineering.",
  url: "https://juju527.github.io",
  language: "en",
  feed: {
    title: "Tianyi Zhu’s Blog",
    href: "/rss.xml",
  },
  sitemap: "/sitemap-index.xml",
  navigation: [
    { label: "Blog", href: "/blog/" },
    { label: "Projects", href: "/projects/" },
    { label: "About", href: "/about/" },
  ],
  socialLinks: [{ label: "GitHub", href: "https://github.com/juju527" }],
} as const;
