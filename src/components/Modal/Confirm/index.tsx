import Button from '@components/_common/atoms/Button';
import { ConfirmProps } from '@customTypes/modal';
import useJoinStudy from '@hooks/study/useJoinStudy';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

interface ConfirmModalProps extends ConfirmProps {
  navigateToStudy?: (studyId: string) => void;
}

export default function ConfirmModal({ studyId, name, navigateToStudy }: ConfirmModalProps) {
  const { joinStudyMutate } = useJoinStudy();
  const { close } = useModalStore();

  const handleConfirm = () => {
    joinStudyMutate.mutate({
      studyId: String(studyId),
      onClose: () => {
        close();
        if (navigateToStudy) navigateToStudy(String(studyId));
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
