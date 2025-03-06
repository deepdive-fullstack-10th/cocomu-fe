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
    console.log(`[ConfirmModal] 참가 요청: studyId=${studyId}`);

    joinPublicStudy.mutate(
      { studyId },
      {
        onSuccess: () => {
          console.log(`[ConfirmModal] 참가 성공: studyId=${studyId}`);
          onClose();
          if (navigateToStudy) {
            console.log(`[ConfirmModal] 상세 페이지 이동 실행: studyId=${studyId}`);
            navigateToStudy(studyId);
            console.log('[ConfirmModal] navigateToStudy 실행 완료');
          }
        },
        onError: (error) => {
          console.error('[ConfirmModal] 참가 실패:', error);
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
