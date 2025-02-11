import LoadingSpinner from '@components/_common/atoms/LoadingSpinner';
import S from './style';

interface LoadingIndicatorModalProps {
  descriptionLabel?: string;
  mainLabel?: string;
}

export default function LoadingModal({ descriptionLabel, mainLabel }: LoadingIndicatorModalProps) {
  return (
    <S.LoadingModalContainer>
      <S.Description>{descriptionLabel}</S.Description>
      <S.Instruction>{mainLabel} 페이지로 이동합니다.</S.Instruction>
      <LoadingSpinner />
    </S.LoadingModalContainer>
  );
}
