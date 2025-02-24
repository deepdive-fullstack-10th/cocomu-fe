import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'default' | 'round';

interface ButtonStyleProps {
  size: ButtonSize;
  shape?: ButtonShape;
  isActive?: boolean;
}

const commonStyles = (theme: Theme, isActive?: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.font.heading[100]};
  white-space: nowrap;
  transition: all 0.3s ease;
  border: 1px solid;

  &:hover {
    cursor: pointer;
    border-color: ${isActive ? theme.color.gray[900] : theme.color.primary[700]};
    color: ${isActive ? theme.color.gray[900] : theme.color.primary[700]};
    div {
      color: ${isActive ? theme.color.gray[900] : theme.color.primary[700]};
    }
  }

  color: ${isActive ? theme?.color.gray[900] : theme?.color.primary[500]};
  border-color: ${isActive ? theme?.color.gray[600] : theme?.color.primary[500]};
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

const shapeStyles = (shape: ButtonShape = 'default') => css`
  border-radius: ${shape === 'round' ? '3.2rem' : '1.1rem'};
`;

const Button = styled.button<ButtonStyleProps>`
  ${({ theme, isActive }) => commonStyles(theme, isActive)}
  ${({ size, theme }) => sizeStyles[size](theme)}
    ${({ shape }) => shapeStyles(shape)}
`;

const S = {
  Button,
};

export default S;
