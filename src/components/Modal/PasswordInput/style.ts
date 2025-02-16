import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 6.75rem;
  background: white;
  border-radius: 1.2rem;
  width: 52rem;
  height: 42.5rem;
`;

const Description = styled.h2`
  ${({ theme }) => theme.font.heading[400]};
  color: ${({ theme }) => theme.color.gray[950]};
  margin-bottom: 3.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  gap: 1rem;
  margin-top: 1.8rem;
  width: 21.5rem;
  height: 4.2rem;
`;

const S = { Container, Description, ButtonContainer };
export default S;
