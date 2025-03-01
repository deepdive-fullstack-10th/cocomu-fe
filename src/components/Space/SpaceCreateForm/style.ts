import styled from '@emotion/styled';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11.8rem;

  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.3rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Description = styled.p`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5.3rem;
  column-gap: 4.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 23px;
`;

const S = {
  Container,
  Section,
  Header,
  Description,
  InputWrapper,
  ButtonWrapper,
};

export default S;
