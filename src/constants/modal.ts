export const WAITING_INFO = {
  problem: {
    label: '문제 풀이',
    description: '스페이스 모집이 완료되었습니다.',
    navigateUrl: '/',
  },
  feedback: {
    label: '피드백',
    description: '문제 풀이가 종료되었습니다.',
    navigateUrl: '/',
  },
  exit: {
    label: '종료',
    description: '피드백이 종료되었습니다',
    navigateUrl: '/',
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
