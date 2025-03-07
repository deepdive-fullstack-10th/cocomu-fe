import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 16px;
`;

const ButtonWrapper = styled.div`
  width: 25.5rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const S = {
  Container,
  ButtonWrapper,
  Footer,
};

export default S;
