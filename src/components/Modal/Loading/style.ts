import styled from '@emotion/styled';

const LoadingModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
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

  padding-bottom: 1.5rem;
`;

const Instruction = styled.div`
  ${({ theme }) => theme.font.heading[500]};
  color: ${({ theme }) => theme.color.gray[950]};

  padding-bottom: 3rem;
`;

const S = {
  LoadingModalContainer,
  Description,
  Instruction,
};

export default S;
