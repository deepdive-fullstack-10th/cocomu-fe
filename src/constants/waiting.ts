import { movePage, WaitingDetailContent } from '@components/Modal/Waiting/type';

export const LOADING_TYPE: Record<movePage, WaitingDetailContent> = {
  problem: {
    description: '스페이스 모집이 완료되었습니다.',
    label: '문제 풀이',
  },
  feedback: {
    description: '문제 풀이가 종료되었습니다.',
    label: '피드백',
  },
  exit: {
    description: '피드백이 종료되었습니다',
    label: '종료',
  },
} as const;
