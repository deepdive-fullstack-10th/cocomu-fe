import styled from '@emotion/styled';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

const Label = styled.label<{ disabled: boolean }>`
  ${({ theme }) => theme.font.common.block};
  color: ${({ theme, disabled }) => (disabled ? theme.color.gray[800] : theme.color.gray[950])};
`;

const Input = styled.input<{ isError: boolean }>`
  color: ${({ theme }) => theme.color.gray[950]};
  background-color: ${({ theme }) => theme.color.gray[50]};

  ${({ theme }) => theme.font.common.block};
  border: 1px solid ${({ theme, isError }) => (isError ? theme.color.triadic[400] : theme.color.gray[600])};
  border-radius: 0.8rem;
  padding: 1.35rem 1.8rem;
  outline: none;

  &::placeholder {
    ${({ theme }) => theme.font.common.block};
    color: ${({ theme }) => theme.color.gray[700]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray[200]};
    border-color: ${({ theme }) => theme.color.gray[500]};
  }
`;

const ErrorText = styled.p`
  ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.triadic[400]};
`;

const S = {
  InputWrapper,
  Label,
  Input,
  ErrorText,
};

export default S;
