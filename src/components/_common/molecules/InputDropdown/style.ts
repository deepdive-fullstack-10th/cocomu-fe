import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.gray[50]};

  padding: 1rem 1.2rem;
  margin-bottom: 0.1rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[700]};
    ${({ theme }) => theme.font.common.block};
  }
`;

const Label = styled.p`
  color: ${({ theme }) => theme.color.gray[950]};
  ${({ theme }) => theme.font.common.block};
  padding-bottom: 1.2rem;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const Input = styled.input`
  border: none;
  width: 90%;
  padding: 0.2rem;
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
  Header,
  Label,
  InputContainer,
  Input,
  Icon,
};

export default S;
