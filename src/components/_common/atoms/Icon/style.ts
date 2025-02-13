import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export type IconSize = 'sm' | 'md';
export type IconColor = '50' | '700' | '950';

const sizeStyle = {
  sm: '1.3rem',
  md: '2.4rem',
};

const colorStyle = {
  50: (theme: Theme) => css`
    color: ${theme.color.gray[50]};
  `,
  700: (theme: Theme) => css`
    color: ${theme.color.gray[700]};
  `,
  950: (theme: Theme) => css`
    color: ${theme.color.gray[950]};
  `,
};

const Icon = styled.div<{ size: IconSize; color: IconColor }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ size }) => sizeStyle[size]};
  ${({ color, theme }) => colorStyle[color](theme)};
`;

const S = {
  Icon,
};

export default S;
