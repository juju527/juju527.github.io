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

export const profileData: ProfileData = {
  introduction: [
    "An OIer from Yali Middle School",
    "An ACMer from Shanghai Jiao Tong University",
    "An undergraduate from SJTU ACM Class 2025.",
    "It is a place for learning records and personal essays.",
  ],
  technicalInterests: [],
  currentLearning: [],
  todos: [],
};
