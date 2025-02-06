export const LANGUAGE_IMAGES: Record<string, string> = {
  Python: 'https://holaworld.io/images/languages/python.png',
  JavaScript: 'https://holaworld.io/images/languages/javascript.png',
  Java: 'https://holaworld.io/images/languages/java.png',
  C: 'https://holaworld.io/images/languages/c.png',
} as const;

export const PROGRAMMING_LANGUAGES = ['Python', 'JavaScript', 'Java', 'C'] as const;
export const STEPS = ['대기', '진행', '피드백', '종료'] as const;

export type ProgrammingLanguage = (typeof PROGRAMMING_LANGUAGES)[number];
export type Steps = (typeof STEPS)[number];

export const ACCESS_STATUS = ['공개', '비공개'] as const;
