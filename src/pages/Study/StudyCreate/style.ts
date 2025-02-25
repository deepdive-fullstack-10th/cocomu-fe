import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  max-width: 1040px;
  margin: 0 auto;
  padding: 60px 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.3rem;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5.3rem;
  column-gap: 4.8rem;
`;

const S = {
  Container,
  Section,
  InputWrapper,
};

export default S;
