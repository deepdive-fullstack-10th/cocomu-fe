import Button from '@components/_common/atoms/Button';
import { ConfirmProps } from '@customTypes/modal';
import S from './style';

export default function ConfirmModal({ description, onClose, onConfirm }: ConfirmProps) {
  const handleConfirm = () => {
    if (!onConfirm()) return; // Ensure `onConfirm` returns a boolean before closing
    onClose();
  };

  return (
    <S.Container>
      <S.Description>{description}</S.Description>
      <S.Instruction>참여하시겠습니까?</S.Instruction>
      <S.ButtonContainer>
        <Button
          color='primary'
          size='md'
          onClick={handleConfirm}
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
