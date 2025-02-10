import { ComponentProps } from 'react';
import S from './style';

interface InputFieldProps extends ComponentProps<'input'> {
  label?: string;
  description?: string;
  error?: string;
}

export default function InputField({
  label,
  description,
  value,
  onChange,
  disabled,
  error,
  required,
}: InputFieldProps) {
  return (
    <S.InputWrapper>
      {label && <S.Label disabled={!!disabled}>{label}</S.Label>}

      <S.Input
        value={value}
        placeholder={description}
        onChange={onChange}
        disabled={disabled}
        required={required}
        isError={!!error}
      />

      {error && <S.ErrorText role='alert'>{error}</S.ErrorText>}
    </S.InputWrapper>
  );
}
