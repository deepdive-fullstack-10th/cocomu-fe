import { ROUTES } from './path';

export const WAITING_INFO = {
  problem: {
    label: '문제 풀이',
    description: '스페이스 모집이 완료되었습니다.',
    navigate: (spaceId: string) => ROUTES.SPACE.WAITING({ spaceId }),
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

export const TESTCASE_INFO = {
  status: 'CUSTOM',
  testcases: [
    { id: 1, input: 'Input 1', output: 'Output 1', type: 'BASE' },
    { id: 2, input: 'Input 2', output: 'Output 2', type: 'BASE' },
    { id: 3, input: 'Input 3', output: 'Output 3', type: 'CUSTOM' },
    { id: 4, input: 'Input 4', output: 'Output 4', type: 'CUSTOM' },
  ],
};
