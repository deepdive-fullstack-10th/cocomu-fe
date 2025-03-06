import Button from '@components/_common/atoms/Button';
import useJoinStudy from '@hooks/study/useJoinStudy';
import S from './style';

interface ConfirmModalProps {
  studyId: string;
  name: string;
  onClose: () => void;
  navigateToStudy?: (studyId: string) => void;
}

export default function ConfirmModal({ studyId, name, onClose, navigateToStudy }: ConfirmModalProps) {
  const { joinPublicStudy } = useJoinStudy();

  const handleConfirm = () => {
    joinPublicStudy.mutate(
      { studyId },
      {
        onSuccess: () => {
          onClose();
          if (navigateToStudy) {
            navigateToStudy(studyId);
          }
        },
      },
    );
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
