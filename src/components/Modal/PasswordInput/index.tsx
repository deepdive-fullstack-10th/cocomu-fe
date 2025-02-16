import { useState } from 'react';
import InputField from '@components/_common/molecules/InputField';
import Button from '@components/_common/atoms/Button';
import S from './style';

interface PasswordInputProps {
  onClose: () => void;
  onConfirm: (password: string) => boolean; // 비밀번호 확인 후 결과 반환
}

export default function PasswordInput({ onClose, onConfirm }: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleConfirm = () => {
    if (!password || !onConfirm(password)) {
      setError(true);
      return;
    }
    onClose();
  };

  return (
    <S.Container>
      <S.Description>암호를 입력해주세요</S.Description>
      <InputField
        type='password'
        placeholder='비밀번호를 입력하세요'
        value={password}
        error={error ? '올바르지 않은 암호입니다.' : undefined}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(false);
        }}
      />
      <S.ButtonContainer>
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
      </S.ButtonContainer>
    </S.Container>
  );
}
