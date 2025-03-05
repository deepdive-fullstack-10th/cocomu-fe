import Button from '@components/_common/atoms/Button';
import { ConfirmProps } from '@customTypes/modal';
import useJoinPublicStudy from '@hooks/study/useJoinPublicStudy';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

interface ConfirmModalProps extends ConfirmProps {
  navigateToStudy?: (studyId: number) => void;
}

export default function ConfirmModal({ studyId, name, navigateToStudy }: ConfirmModalProps) {
  const { joinPublicMutate } = useJoinPublicStudy();
  const { close } = useModalStore();

  const handleConfirm = () => {
    console.log(`[ConfirmModal] Joining study with ID: ${studyId}`);
    joinPublicMutate.mutate({
      studyId,
      onClose: () => {
        close();
        if (navigateToStudy) {
          navigateToStudy(studyId);
        }
      },
    });
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
          onClick={close}
        >
          취소
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
