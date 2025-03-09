import { ROUTES } from './path';

export const WAITING_INFO = {
  problem: {
    label: '문제 풀이',
    description: '스페이스 모집이 완료되었습니다.',
    navigate: (codingSpaceId: string) => ROUTES.SPACE.RUNNING({ codingSpaceId }),
  },
  feedback: {
    label: '피드백',
    description: '문제 풀이가 종료되었습니다.',
    navigate: (codingSpaceId: string) => ROUTES.SPACE.FEEDBACK({ codingSpaceId }),
  },
  exit: {
    label: '종료',
    description: '피드백이 종료되었습니다.',
    navigate: (codingSpaceId: string) => ROUTES.SPACE.DETAIL({ codingSpaceId }),
  },
} as const;
