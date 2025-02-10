import styled from '@emotion/styled';

const Stepper = styled.div<{ select?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;

  font: ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[950]};
  background: ${({ theme, select }) => (select ? theme.color.primary[100] : theme.color.gray[50])};

  border-radius: 50%;

  padding: 1rem;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray[200]};
  }
`;

const S = {
  Stepper,
};

export default S;
