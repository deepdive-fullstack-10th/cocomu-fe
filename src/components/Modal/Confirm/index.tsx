import Button from '@components/_common/atoms/Button';
import { ConfirmProps } from '@customTypes/modal';
import S from './style';

export default function ConfirmModal({ studyId, spaceId, name, onClose }: ConfirmProps) {
  const handleConfirm = () => {
    // TODO: CodingSpace 참여하기 api 호출 (studyId, spaceId 사용 예정)
    onClose();
  };

  return (
    <S.Container>
      <S.Description>{name}</S.Description>
      <S.Instruction>참여하시겠습니까?</S.Instruction>
      <S.ButtonWrapper>
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
      </S.ButtonWrapper>
    </S.Container>
  );
}
