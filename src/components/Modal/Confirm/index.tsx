import Button from '@components/_common/atoms/Button';
import useJoinStudy from '@hooks/study/useJoinStudy';
import useJoinSpace from '@hooks/space/useJoinSpace';
import { ConfirmProps } from '@customTypes/modal';
import S from './style';

export default function ConfirmModal({ isSpace, studyId, codingSpaceId, name, onClose }: ConfirmProps) {
  const { joinPublicStudyMutate } = useJoinStudy();
  const { joinSpaceMutate } = useJoinSpace();

  const handleConfirm = () => {
    onClose();

    if (isSpace) {
      joinSpaceMutate.mutate(codingSpaceId);
      return;
    }

    joinPublicStudyMutate.mutate(studyId);
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
