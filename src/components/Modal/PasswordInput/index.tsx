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
    joinPrivateStudy.mutate(
      { studyId, password },
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
