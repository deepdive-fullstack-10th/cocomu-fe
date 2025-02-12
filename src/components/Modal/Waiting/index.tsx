import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LOADING_TYPE } from '@constants/waiting';
import S from './style';

interface WaitingModalProps {
  navigate?: string;
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
      <S.Description>{LOADING_TYPE[navigate].description}</S.Description>
      <S.Instruction>{`${LOADING_TYPE[navigate].label}페이지로 이동합니다.`}</S.Instruction>
      <LoadingSpinner />
    </S.WaitingModalContainer>
  );
}
