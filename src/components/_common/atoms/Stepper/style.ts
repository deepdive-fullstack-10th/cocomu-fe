import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type StepperColor = 'gray' | 'white' | 'primary';
export type Size = 'sm' | 'md' | 'lg';

export interface StepperStyleProps {
  color: StepperColor;
  size: Size;
}

const commonStyles = (theme: Theme) => css`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.gray[950]};
`;

const colorStyles: { [key in StepperColor]: (theme: Theme) => SerializedStyles } = {
  white: (theme: Theme) => css`
    background-color: ${theme.color.gray[50]};
  `,
  gray: (theme: Theme) => css`
    background-color: ${theme.color.gray[200]};
  `,

  primary: (theme: Theme) => css`
    background-color: ${theme.color.primary[100]};
  `,
};

const SizeStyles: { [key in Size]: (theme: Theme) => SerializedStyles } = {
  lg: (theme: Theme) => css`
    font: ${theme.font.heading[700]};
    width: 6rem;
    height: 6rem;
  `,
  md: (theme: Theme) => css`
    font: ${theme.font.heading[400]};
    width: 4rem;
    height: 4rem;
  `,
  sm: (theme: Theme) => css`
    font: ${theme.font.heading[200]};
    width: 3rem;
    height: 3rem;
  `,
};

const Stepper = styled.div<StepperStyleProps>`
  ${({ color, theme }) => colorStyles[color](theme)}
  ${({ size, theme }) => SizeStyles[size](theme)}
  ${({ theme }) => commonStyles(theme)}
`;

const S = {
  Stepper,
};

export default S;
