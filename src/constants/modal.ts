import { ROUTES } from './path';

export const WAITING_INFO = {
  problem: {
    label: '문제 풀이',
    description: '스페이스 모집이 완료되었습니다.',
    navigate: (spaceId: string) => ROUTES.SPACE.RUNNING({ spaceId }),
  },
  feedback: {
    label: '피드백',
    description: '문제 풀이가 종료되었습니다.',
    navigate: (spaceId: string) => ROUTES.SPACE.FEEDBACK({ spaceId }),
  },
  exit: {
    label: '종료',
    description: '피드백이 종료되었습니다.',
    navigate: (spaceId: string) => ROUTES.SPACE.DETAIL({ spaceId }),
  },
} as const;
