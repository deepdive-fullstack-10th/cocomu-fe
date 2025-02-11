import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import S from './style';

type movePage = 'problem' | 'feedback' | 'exit';

interface WaitingDetailContent {
  description: string;
  label: string;
}

const loadingType: Record<movePage, WaitingDetailContent> = {
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

interface WaitingModalProps {
  navigate?: movePage;
  navigateUrl?: string;
}

export default function WaitingModal({ navigate = 'problem', navigateUrl }: WaitingModalProps) {
  const navigateTo = useNavigate();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const waitingTime = setTimeout(() => {
      setIsEnd(true);
      if (navigateUrl) navigateTo(navigateUrl);
      console.log(`navigate url: ${navigateUrl}`);
    }, 5000);

    return () => clearTimeout(waitingTime);
  }, [navigateUrl, navigateTo]);

  if (isEnd) return null;

  return (
    <S.WaitingModalContainer>
      <S.Description>{loadingType[navigate].description}</S.Description>
      <S.Instruction>{`${loadingType[navigate].label}페이지로 이동합니다.`}</S.Instruction>
      <LoadingSpinner />
    </S.WaitingModalContainer>
  );
}
