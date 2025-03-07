import Button from '@components/_common/atoms/Button';
import useLeaveStudy from '@hooks/study/useLeaveStudy';
import S from './style';

interface LeaveModalProps {
  studyId: string;
  name: string;
  onClose: () => void;
  navigateToStudyList: () => void;
}

export default function LeaveModal({ studyId, name, onClose, navigateToStudyList }: LeaveModalProps) {
  const leaveStudy = useLeaveStudy();

  const handleConfirm = () => {
    leaveStudy.mutate(studyId, {
      onSuccess: () => {
        onClose();
        if (navigateToStudyList) {
          navigateToStudyList();
        }
      },
    });
  };

  return (
    <S.Container>
      <S.Description>{name}</S.Description>
      <S.Instruction>스터디에서 나가시겠습니까?</S.Instruction>
      <S.ButtonWrapper>
        <Button
          color='triadic'
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
