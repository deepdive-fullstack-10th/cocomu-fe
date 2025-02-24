import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const S = {
  StepContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: ${theme.color.primary[400]};
    color: ${theme.color.gray[50]};
    user-select: none;
  `,
};

export default S;
