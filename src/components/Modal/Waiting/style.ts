import styled from '@emotion/styled';

const WaitingModalContainer = styled.div`
  width: 36rem;

  display: flex;
  flex-direction: column;
  padding: 6rem 3rem;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  background-color: ${({ theme }) => theme.color.gray[50]};
  border-radius: 1.6rem;
`;

const Description = styled.div`
  ${({ theme }) => theme.font.heading[300]};
  color: ${({ theme }) => theme.color.gray[700]};

  margin-bottom: 1.5rem;
`;

const Instruction = styled.div`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};

  margin-bottom: 3rem;
`;

const S = {
  WaitingModalContainer,
  Description,
  Instruction,
};

export default S;
