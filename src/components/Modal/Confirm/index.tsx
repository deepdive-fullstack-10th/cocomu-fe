import Button from '@components/_common/atoms/Button';
import S from './style';

interface ConfirmProps {
  description: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function Confirm({ description, onClose, onConfirm }: ConfirmProps) {
  return (
    <S.Container>
      <S.Description>{description}</S.Description>
      <S.Instruction>참여하시겠습니까?</S.Instruction>
      <S.ButtonContainer>
        <Button
          color='primary'
          size='md'
          onClick={onConfirm}
        >
          확인
        </Button>
        <Button
          color='white'
          size='md'
          onClick={onClose}
        >
          취소
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
