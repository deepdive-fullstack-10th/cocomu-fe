import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'white' | 'primary' | 'secondary' | 'analogous' | 'triadic';
export type ButtonShape = 'default' | 'round';

export interface ButtonStyleProps {
  size: ButtonSize;
  color: ButtonColor;
  shape?: ButtonShape;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.3rem;
  ${theme.font.heading[100]};
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

const sizeStyles = {
  sm: (theme: Theme) => css`
    ${theme.font.common.default}
    padding: 0.15rem 2.2rem;
    width: fit-content;
    min-width: 9rem;
  `,
  md: (theme: Theme) => css`
    ${theme.font.common.default}
    padding: 0.55rem 2.2rem;
    width: fit-content;
    min-width: 10rem;
  `,
  lg: (theme: Theme) => css`
    ${theme.font.heading[100]};
    padding: 0.82rem 2.4rem;
    width: fit-content;
    min-width: 12rem;
  `,
};

const colorStyles: { [key in ButtonColor]: (theme: Theme) => SerializedStyles } = {
  white: (theme: Theme) => css`
    color: ${theme.color.primary[300]};
    background-color: ${theme.color.gray[50]};
    border: 1px solid ${theme.color.primary[300]};
  `,
  primary: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.primary[300]};
    border: 1px solid ${theme.color.primary[300]};
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.secondary[300]};
    border: 1px solid ${theme.color.secondary[300]};
  `,
  analogous: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.analogous[300]};
    border: 1px solid ${theme.color.analogous[300]};
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
    background-color: ${theme.color.triadic[400]};
    border: 1px solid ${theme.color.triadic[400]};
  `,
};

const shapeStyles = (shape: ButtonShape = 'default') => css`
  border-radius: ${shape === 'round' ? '3.2rem' : '1.1rem'};
`;

const Button = styled.button<ButtonStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ size, theme }) => sizeStyles[size](theme)}
  ${({ color, theme }) => colorStyles[color](theme)}
  ${({ shape }) => shapeStyles(shape)}
`;

const S = {
  Button,
};

export default S;
