import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type listTextColor = 'gray' | 'black';
export type listTextSize = 'md' | 'lg';

export interface dropDownStyleProps {
  color: listTextColor;
  size: listTextSize;
}

const commonStyles = (theme : Theme) => css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-color: ${theme.color.primary[50]};
    cursor: pointer;
  }
`;

const sizeStyles = {
  md: (theme: Theme) => css`
    ${theme.font.common.default};
    padding: 0.8rem;
  `,
  lg: (theme: Theme) => css`
    ${theme.font.common.block};
    padding: 1rem;
  `,
};

const colorStyles = {
  gray: (theme: Theme) => css`
    ${theme.color.gray[950]};
  `,
  black: (theme: Theme) => css`
    ${theme.color.gray[800]};
  `,
};

const Dropdown = styled.div<dropDownStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ size, theme }) => sizeStyles[size](theme)}
  ${({ color, theme }) => colorStyles[color](theme)}
`;
