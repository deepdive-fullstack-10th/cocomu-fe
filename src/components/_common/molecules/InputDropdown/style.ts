import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  position: relative;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.color.gray[950]};
  ${({ theme }) => theme.font.common.block};
  margin-bottom: 0.1rem;
`;

const InputContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  height: 5.3rem;
  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme, isOpen }) => (isOpen ? theme.color.primary[400] : theme.color.gray[600])};
  border-radius: 0.8rem;
  padding: 1rem 2rem;
`;

const SelectedText = styled.p`
  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[700]};
`;

const Input = styled.input<{ disabled?: boolean }>`
  flex: 1;
  border: none;
  outline: none;

  ${({ theme }) => theme.font.common.block};
  color: ${({ theme }) => theme.color.gray[900]};

  background-color: ${({ disabled, theme }) => (disabled ? theme.color.gray[50] : 'transparent')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  width: 1.3rem;
  height: 1.3rem;

  cursor: pointer;
`;

const DropdownList = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:focus {
    background-color: ${({ theme }) => theme.color.primary[50]};
  }
`;

const S = {
  DropdownList,
  Container,
  Label,
  InputContainer,
  SelectedText,
  Input,
  Icon,
};

export default S;
