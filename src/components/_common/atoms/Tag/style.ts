import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type TagSize = 'sm' | 'md' | 'lg';
export type TagColor = 'white' | 'yellow' | 'blue' | 'purple' | 'red';

export interface TagStyleProps {
  size: TagSize;
  color: TagColor;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.2rem;
  ${theme.font.heading[100]};
  white-space: nowrap;
`;

const sizeStyles = {
  sm: (theme: Theme) => css`
    ${theme.font.common.default}
    font-size: 0.8rem;
    padding: 0.1rem 1.8rem;
    font-weight: bold;
  `,
  md: (theme: Theme) => css`
    ${theme.font.common.default}
    font-size: 1rem;
    padding: 0.1rem 1.8rem;
    font-weight: bold;
  `,
  lg: (theme: Theme) => css`
    ${theme.font.heading[100]};
    font-size: 1.2rem;
    padding: 0.1rem 1.8rem;
    font-weight: bold;
  `,
};

const colorStyles: { [key in TagColor]: (theme: Theme) => SerializedStyles } = {
  white: (theme: Theme) => css`
    color: ${theme.color.gray[800]};
    background-color: ${theme.color.gray[200]};
  `,
  yellow: (theme: Theme) => css`
    color: ${theme.color.secondary[800]};
    background-color: ${theme.color.secondary[50]};
  `,
  blue: (theme: Theme) => css`
    color: ${theme.color.analogous[800]};
    background-color: ${theme.color.analogous[50]};
  `,
  purple: (theme: Theme) => css`
    color: ${theme.color.primary[800]};
    background-color: ${theme.color.primary[50]};
  `,
  red: (theme: Theme) => css`
    color: ${theme.color.triadic[800]};
    background-color: ${theme.color.triadic[50]};
  `,
};

const Tag = styled.div<TagStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ size, theme }) => sizeStyles[size](theme)}
  ${({ color, theme }) => colorStyles[color](theme)}
`;

const S = {
  Tag,
};

export default S;
