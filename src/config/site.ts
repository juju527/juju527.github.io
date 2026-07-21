export const siteConfig = {
  name: "Tianyi Zhu",
  description:
    "Personal site of juju527",
  url: "https://juju527.github.io",
  language: "en",
  feed: {
    title: "Tianyi Zhu’s Blog",
    href: "/rss.xml",
  },
  sitemap: "/sitemap-index.xml",
  navigation: [
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/about/" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/juju527" },
    { label: "Email", href: "mailto:juju527@sjtu.edu.cn"}
  ],
} as const;
