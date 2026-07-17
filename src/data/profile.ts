export interface TechnicalInterest {
  title: string;
  description: string;
}

export interface ProfileTodo {
  section: string;
  task: string;
}

export interface ProfileData {
  introduction: readonly string[];
  technicalInterests: readonly TechnicalInterest[];
  currentLearning: readonly string[];
  todos: readonly ProfileTodo[];
}

export const profileData = {
  introduction: [
    "This is Tianyi Zhu’s personal website and technical blog.",
    "It is a place for technical articles, project notes, and learning records.",
  ],
  technicalInterests: [
    {
      title: "Algorithms",
      description: "Problem solving, data structures, and careful analysis.",
    },
    {
      title: "Systems",
      description: "Software internals, tools, and dependable implementation.",
    },
    {
      title: "Distributed Computing",
      description: "Coordination, consistency, and systems that span machines.",
    },
    {
      title: "C++ / Go",
      description: "Practical engineering notes using C++ and Go.",
    },
  ],
  currentLearning: [],
  todos: [
    {
      section: "Introduction",
      task: "Replace the short site-level introduction with a user-written biography.",
    },
    {
      section: "Current learning",
      task: "Add the topics currently being studied and why they matter.",
    },
    {
      section: "Contact",
      task: "Add a public email address or additional social profiles, if desired.",
    },
  ],
} satisfies ProfileData;
