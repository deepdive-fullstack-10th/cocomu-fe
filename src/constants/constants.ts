export const LANGUAGE_IMAGES: Record<string, string> = {
  Python: 'https://holaworld.io/images/languages/python.png',
  JavaScript: 'https://holaworld.io/images/languages/javascript.png',
  Java: 'https://holaworld.io/images/languages/java.png',
  C: 'https://holaworld.io/images/languages/c.png',
} as const;
export const PROGRAMMING_LANGUAGES = ['Python', 'JavaScript', 'Java', 'C'] as const;

export const STEP_INFO = {
  WAITING: {
    label: '대기',
    color: 'secondary',
  },
  IN_PROGRESS: {
    label: '진행',
    color: 'analogous',
  },
  FEEDBACK: {
    label: '피드백',
    color: 'primary',
  },
  COMPLETED: {
    label: '종료',
    color: 'triadic',
  },
} as const;

export const STUDY_LIST = ['코딩 스페이스', '멤버 보기', '스터디 정보'] as const;

export type ProgrammingLanguage = (typeof PROGRAMMING_LANGUAGES)[number];

export const ACCESS_STATUS = {
  PUBLIC: '공개',
  PRIVATE: '비공개',
} as const;
