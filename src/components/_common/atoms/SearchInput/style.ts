import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;

  width: 25.6rem;
  height: 3.6rem;

  user-select: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.6rem 1.6rem 0.6rem 4.5rem;

  ${({ theme }) => theme.font.common.default};
  color: ${({ theme }) => theme.color.gray[900]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 3.2rem;

  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary[500]};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 25%;
  left: 7%;
`;

const S = {
  Container,
  Input,
  SearchIcon,
};

export default S;
