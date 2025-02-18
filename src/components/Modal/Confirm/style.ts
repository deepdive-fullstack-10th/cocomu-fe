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
  height: 30.8rem;
`;

const Description = styled.h2`
  ${({ theme }) => theme.font.heading[300]};
  color: ${({ theme }) => theme.color.gray[700]};
  margin-bottom: 1.6rem;
`;

const Instruction = styled.h1`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};
  margin-bottom: 3.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1.8rem;
  height: 4.2rem;
`;

const S = { Container, Description, Instruction, ButtonContainer };
export default S;
