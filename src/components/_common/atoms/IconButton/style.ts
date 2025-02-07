import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type IconBtnColor = 'none' | 'white';
type IconBtnTextAlign = 'left' | 'center';

export type IconBtnProps = {
  color: IconBtnColor;
  align: IconBtnTextAlign;
};

const iconBtnColor: { [key in IconBtnColor]: (theme: Theme) => SerializedStyles } = {
  none: (theme: Theme) => css`
    background-color: transparent;
    color: ${theme.color.gray[900]};
  `,
  white: (theme: Theme) => css`
    background-color: ${theme.color.gray[50]};
    border: 1px solid ${theme.color.gray[600]};
    color: ${theme.color.gray[900]};
    &:hover {
      background-color: ${theme.color.primary[300]};
      border: 1px solid ${theme.color.primary[300]};
      color: ${theme.color.gray[50]};
    }
  `,
};

const IconBtnContainer = styled.div<IconBtnProps>`
  ${({ color, theme }) => iconBtnColor[color](theme)};
  ${({ theme }) => theme.font.common.default};
  width: fit-content;
  min-width: 20rem;
  padding: 0.6rem 1.9rem;
  display: flex;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  border-radius: 2rem;
  align-items: center;
`;

const Icon = styled.span`
  margin-top: 0.4rem;
`;

const Content = styled.span`
  margin-left: 1rem;
`;

const S = {
  IconBtnContainer,
  Icon,
  Content,
};

export default S;
