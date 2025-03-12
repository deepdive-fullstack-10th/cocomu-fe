import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3rem;
`;

const SpaceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-height: 70rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const S = {
  Container,
  SpaceListContainer,
  Footer,
};

export default S;
