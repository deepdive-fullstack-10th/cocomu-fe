import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import S from './style';

type movePage = 'problem' | 'feedback' | 'exit';

interface loadingDetailContent {
  description?: string;
  label?: string;
}

const loadingType: Record<movePage, loadingDetailContent> = {
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

interface LoadingModalProps {
  navigate: movePage;
}

export default function LoadingModal({ navigate = 'problem' }: LoadingModalProps) {
  return (
    <S.LoadingModalContainer>
      <S.Description>{loadingType[navigate].description}</S.Description>
      <S.Instruction>{loadingType[navigate].label} 페이지로 이동합니다.</S.Instruction>
      <LoadingSpinner />
    </S.LoadingModalContainer>
  );
}
