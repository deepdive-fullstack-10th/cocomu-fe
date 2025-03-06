import { useState } from 'react';
import InputField from '@components/_common/molecules/InputField';
import Button from '@components/_common/atoms/Button';
import useJoinStudy from '@hooks/study/useJoinStudy';
import S from './style';

interface PasswordInputProps {
  studyId: string;
  onClose: () => void;
  navigateToStudy?: (studyId: string) => void;
}

export default function PasswordInput({ studyId, onClose, navigateToStudy }: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const { joinPrivateStudy } = useJoinStudy();

  const handleConfirm = () => {
    console.log(`[PasswordInput] 참가 요청: studyId=${studyId}, password=${password}`);

    joinPrivateStudy.mutate(
      { studyId, password },
      {
        onSuccess: () => {
          console.log(`[PasswordInput] 참가 성공: studyId=${studyId}`);
          onClose();
          if (navigateToStudy) {
            console.log(`[PasswordInput] 상세 페이지 이동 실행: studyId=${studyId}`);
            navigateToStudy(studyId);
            console.log('[PasswordInput] navigateToStudy 실행 완료');
          }
        },
        onError: (error) => {
          console.error('[PasswordInput] 참가 실패:', error);
        },
      },
    );
  };

  return (
    <S.Container>
      <S.Description>암호를 입력해주세요</S.Description>
      <InputField
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
