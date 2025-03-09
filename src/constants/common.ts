export const STUDY_PAGE_SIZE = 12 as const;

export const STUDY_TABS = ['코딩 스페이스', '멤버 보기', '스터디 정보'] as const;

export const NAVBAR_DROPDOWN_LABELS = [
  { label: '마이페이지', color: 'gray' },
  { label: '로그아웃', color: 'gray' },
] as const;

export const STUDY_EDIT_DROPDOWN_LABELS = [
  { label: '스터디 수정하기', color: 'gray' },
  { label: '스터디 삭제하기', color: 'triadic' },
] as const;

export const ACCESS_STATUS = [
  {
    id: 1,
    name: '공개',
    imageUrl: '',
  },
  {
    id: 2,
    name: '비공개',
    imageUrl: '',
  },
] as const;

export const ACCESS_STATUS_MAP_ID = {
  1: 'PUBLIC',
  2: 'PRIVATE',
} as const;

export const ACCESS_STATUS_MAP_REVERSE = {
  PUBLIC: 1,
  PRIVATE: 2,
} as const;

export const ACCESS_STATUS_MAP = {
  PUBLIC: '공개',
  PRIVATE: '비공개',
} as const;

export const SPACE_STATUS = [
  {
    id: 1,
    name: '대기',
    imageUrl: '',
  },
  {
    id: 2,
    name: '진행',
    imageUrl: '',
  },
  {
    id: 3,
    name: '피드백',
    imageUrl: '',
  },
  {
    id: 4,
    name: '종료',
    imageUrl: '',
  },
] as const;

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

export const STEP_LABELS = Object.values(STEP_INFO).map((item) => item.label);
