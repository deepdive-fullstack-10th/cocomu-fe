import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 60px 16px;
`;

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.4rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const S = {
  Container,
  EmptyContainer,
  Body,
  Footer,
};

export default S;
