import { useState } from 'react';
import InputField from '@components/_common/molecules/InputField';
import Button from '@components/_common/atoms/Button';
import { PasswordInputProps } from '@customTypes/modal';
import S from './style';

export default function PasswordInput({ onClose, onConfirm }: PasswordInputProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | undefined>();

  const handleConfirm = () => {
    if (!password || !onConfirm(password)) {
      setError('올바르지 않은 암호입니다.');
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
        error={error}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(undefined);
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
