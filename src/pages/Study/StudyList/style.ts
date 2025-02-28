import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3.4rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 6.6rem 0;
`;
