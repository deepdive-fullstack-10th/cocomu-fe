import styled from '@emotion/styled';

const Stepper = styled.div<{ select?: boolean }>`
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.font.common.small};
  color: ${({ theme }) => theme.color.gray[950]};
  width: 1rem;
  height: 1rem;
  padding: 1rem;
  background: ${({ theme, select }) => (select ? theme.color.primary[100] : theme.color.gray[50])};
  &:hover {
    background: ${({ theme }) => theme.color.gray[200]};
  }
`;

const S = {
  Stepper,
};

export default S;
