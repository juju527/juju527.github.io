export const projectStatusLabels = {
  "in-development": "In development",
  maintained: "Maintained",
  archived: "Archived",
  placeholder: "Placeholder",
} as const;

export type ProjectStatus = keyof typeof projectStatusLabels;

export interface Project {
  name: string;
  description: string;
  technologies: readonly string[];
  repository: string;
  website?: string;
  status: ProjectStatus;
  featured: boolean;
}

export const projects = [
  {
    name: "juju527.github.io",
    description:
      "Source for this personal website and technical blog, built as a static Astro site for GitHub Pages.",
    technologies: ["Astro", "TypeScript", "CSS", "GitHub Pages"],
    repository: "https://github.com/juju527/juju527.github.io",
    website: "https://juju527.github.io",
    status: "in-development",
    featured: false,
  },
] satisfies readonly Project[];
