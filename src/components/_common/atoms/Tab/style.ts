import styled from '@emotion/styled';
import { css, SerializedStyles, Theme } from '@emotion/react';

export type TabColor = 'primary' | 'secondary' | 'analogous' | 'triadic';

const colorStyles: { [key in TabColor]: (theme: Theme) => SerializedStyles } = {
  primary: (theme: Theme) => css`
    color: ${theme.color.primary[700]};
    &:last-of-type {
      background: ${theme.color.primary[700]};
    }
  `,
  secondary: (theme: Theme) => css`
    color: ${theme.color.secondary[700]};
    &:last-of-type {
      background: ${theme.color.secondary[700]};
    }
  `,
  analogous: (theme: Theme) => css`
    color: ${theme.color.analogous[700]};
    &:last-of-type {
      background: ${theme.color.analogous[700]};
    }
  `,
  triadic: (theme: Theme) => css`
    color: ${theme.color.triadic[700]};
    &:last-of-type {
      background: ${theme.color.triadic[700]};
    }
  `,
};

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  max-width: 15rem;
  padding: 1rem 4rem;

  background: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};

  ${({ theme }) => theme.font.common.default}

  cursor: pointer;
  user-select: none;
`;

const UserName = styled.span<{ color: TabColor }>`
  ${({ color, theme }) => colorStyles[color](theme)}
`;

const Dot = styled.span<{ color: TabColor }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50rem;
  background: black;
  margin-left: 1rem;
  ${({ color, theme }) => colorStyles[color](theme)}
`;

const S = { TabContainer, UserName, Dot };

export default S;
