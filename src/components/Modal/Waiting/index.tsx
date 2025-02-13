import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { WaitingProps } from '@customTypes/modal';
import S from './style';

export default function Waiting({ label, description, navigateUrl, onClose }: WaitingProps) {
  const navigateTo = useNavigate();

  useEffect(() => {
    const waitingTime = setTimeout(() => {
      if (navigateUrl) navigateTo(navigateUrl);
      console.log(`navigate url: ${navigateUrl}`);
    }, 5000);

    return () => clearTimeout(waitingTime);
  }, []);

  return (
    <S.WaitingModalContainer>
      <S.Description>{description}</S.Description>
      <S.Instruction>{`${label} 페이지로 이동합니다.`}</S.Instruction>
      <LoadingSpinner />
    </S.WaitingModalContainer>
  );
}
