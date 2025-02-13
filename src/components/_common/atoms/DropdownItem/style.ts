import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type listTextColor = 'gray' | 'black';
export type listTextSize = 'md' | 'lg';

export interface DropDownItemStyleProps {
  color?: listTextColor;
  size?: listTextSize;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: start;
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
    padding: 0.4rem 2rem;
  `,
  lg: (theme: Theme) => css`
    ${theme.font.common.defaultAccent};
    padding: 0.5rem 2.2rem;
  `,
};

const colorStyles = {
  black: (theme: Theme) => css`
    color: ${theme.color.gray[950]};
  `,
  gray: (theme: Theme) => css`
    color: ${theme.color.gray[800]};
  `,
};

const DropdownItem = styled.div<DropDownItemStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ size, theme }) => sizeStyles[size](theme)}
  ${({ color, theme }) => colorStyles[color](theme)}
`;

const S = {
  DropdownItem,
};

export default S;
