export const LANGUAGE_IMAGES: Record<string, string> = {
  Python: 'https://holaworld.io/images/languages/python.png',
  JavaScript: 'https://holaworld.io/images/languages/javascript.png',
  Java: 'https://holaworld.io/images/languages/java.png',
  C: 'https://holaworld.io/images/languages/c.png',
} as const;

export const PROGRAMMING_LANGUAGES = ['Python', 'JavaScript', 'Java', 'C'] as const;

export const JUDGES = ['백준', '프로그래머스'] as const;

export const STUDY_LIST = ['코딩 스페이스', '멤버 보기', '스터디 정보'] as const;

export const NAVBAR_DROPDOWN_LABELS = ['마이페이지', '로그아웃'] as const;

export const ACCESS_STATUS = ['공개', '비공개'] as const;

export const SPACE_MEMBER_OPTIONS = ['2명', '3명', '4명'] as const;

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

export const SPACE_NAV_BUTTON = ['문제 풀이 시작', '피드백 시작', '피드백 종료', '나가기'] as const;

export const STEP_LABELS = Object.values(STEP_INFO).map((item) => item.label);

export const ACCESS_STATUS_MAP = {
  PUBLIC: ACCESS_STATUS[0],
  PRIVATE: ACCESS_STATUS[1],
} as const;

export const DEFAULT_CODE = {
  python: `def Main():
    pass  

Main()`,

  java: `public class Main {
    public static void Main() {
        
    }
}`,

  javascript: `function Main() {
    
}

Main();`,

  c: `#include <stdio.h>

void Main() {
    
}

Main();`,
};
