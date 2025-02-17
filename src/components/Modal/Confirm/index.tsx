import Button from '@components/_common/atoms/Button';
import { ConfirmProps } from '@customTypes/modal';
import S from './style';

export default function ConfirmModal({ description, onClose, onConfirm }: ConfirmProps) {
  const handleConfirm = () => {
    if (onConfirm && !onConfirm()) return; // Ensure `onConfirm` exists and returns a boolean before closing
    alert('참여 완료!');
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
