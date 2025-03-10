import Button from '@components/_common/atoms/Button';
import useLeaveStudy from '@hooks/study/useLeaveStudy';
import { LeaveProps } from '@customTypes/modal';
import S from './style';

export default function LeaveModal({ studyId, name, onClose, navigate }: LeaveProps) {
  const leaveStudy = useLeaveStudy({ navigate });

  const handleConfirm = () => {
    leaveStudy.mutate(studyId);
    onClose();
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
          borderColor='triadic'
          onClick={onClose}
        >
          취소
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
