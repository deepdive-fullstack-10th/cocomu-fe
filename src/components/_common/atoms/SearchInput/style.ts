import styled from '@emotion/styled';

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  padding: 0.6rem 1.6rem 0.6rem 3.2rem;
  border-radius: 3.2rem;
  cursor: pointer;
`;

const Icon = styled.div`
  border: none;
  position: absolute;
  transform: translate(80%, 40%);
  margin-top: 0.23rem;
`;

const S = {
  SearchContainer,
  SearchInput,
  Icon,
};

export default S;
