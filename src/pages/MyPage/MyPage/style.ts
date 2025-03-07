import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 3rem;
`;

const MyPageButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  gap: 1rem;
  padding: 4rem;
`;

const S = {
  HeaderContainer,
  MyPageButtonGroup,
};

export default S;
