import styled from '@emotion/styled';

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary[400]};
  ${({ theme }) => theme.font.heading[100]};
  color: ${({ theme }) => theme.color.gray[50]};

  user-select: none;
`;

const S = {
  StepContainer,
};

export default S;
