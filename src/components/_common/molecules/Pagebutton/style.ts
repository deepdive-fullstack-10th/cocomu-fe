import styled from '@emotion/styled';

const PageButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;

  user-select: none;
`;

const Item = styled.div`
  margin-left: 0.5rem;

  cursor: pointer;
`;

const S = {
  PageButtonsContainer,
  Item,
};

export default S;
