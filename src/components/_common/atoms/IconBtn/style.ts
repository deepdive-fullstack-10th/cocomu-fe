import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type IconBtnColor = 'none' | 'white' | 'primary';
type IconBtnTextAlign = 'none' | 'center';

export type IconBtnProps = {
  color: IconBtnColor;
  align: IconBtnTextAlign;
  border?: boolean;
};

const IconBtnColor: { [key in IconBtnColor]: (theme: Theme) => SerializedStyles } = {
  none: () => css`
    background-color: transparent;
  `,
  white: (theme: Theme) => css`
    background-color: ${theme.color.gray[600]};
  `,
  primary: (theme: Theme) => css`
    background-color: ${theme.color.primary[300]};
    color: ${theme.color.gray[50]};
  `,
};

const IconBtnContainer = styled.div<IconBtnProps>`
  ${({ color, theme }) => IconBtnColor[color](theme)};
  font: ${({ theme }) => theme.font.common.default};
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  border: ${({ border }) => (border ? '1px solid' : 'none')};
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
