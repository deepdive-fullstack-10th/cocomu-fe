import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type TagColor = 'gray' | 'secondary' | 'analogous' | 'primary' | 'triadic';

export interface TagStyleProps {
  color: TagColor;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.font.common.smallAccent}
  padding: 0.1rem 1.8rem;
  font-weight: bold;
  border-radius: 1.2rem;
  width: fit-content;
  min-width: 4rem;
`;

const colorStyles: { [key in TagColor]: (theme: Theme) => SerializedStyles } = {
  gray: (theme: Theme) => css`
    color: ${theme.color.gray[800]};
    background-color: ${theme.color.gray[200]};
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.color.secondary[800]};
    background-color: ${theme.color.secondary[50]};
  `,
  analogous: (theme: Theme) => css`
    color: ${theme.color.analogous[800]};
    background-color: ${theme.color.analogous[50]};
  `,
  primary: (theme: Theme) => css`
    color: ${theme.color.primary[800]};
    background-color: ${theme.color.primary[50]};
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.triadic[800]};
    background-color: ${theme.color.triadic[50]};
  `,
};

const Tag = styled.div<TagStyleProps>`
  ${({ theme }) => commonStyles(theme)}
  ${({ color, theme }) => colorStyles[color](theme)}
`;

const S = {
  Tag,
};

export default S;
