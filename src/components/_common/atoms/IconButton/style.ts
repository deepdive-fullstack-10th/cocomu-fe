import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type IconButtonColor = 'none' | 'white';
type IconButtonTextAlign = 'left' | 'center';
type ButtonShape = 'default' | 'round';

export type IconButtonProps = {
  color?: IconButtonColor;
  align?: IconButtonTextAlign;
  shape?: ButtonShape;
};

const colorStyles: { [key in IconButtonColor]: (theme: Theme) => SerializedStyles } = {
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

const shapeStyles = (shape: ButtonShape = 'default') => css`
  border-radius: ${shape === 'round' ? '3.2rem' : '1.1rem'};
`;

const IconButtonContainer = styled.div<IconButtonProps>`
  ${({ color, theme }) => colorStyles[color](theme)};
  ${({ theme }) => theme.font.common.default};

  display: flex;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  align-items: center;

  width: 100%;
  min-width: 20rem;

  padding: 0.6rem 1.9rem;
  border-radius: 2rem;

  ${({ shape }) => shapeStyles(shape)}
`;

const Icon = styled.span`
  margin-top: 0.4rem;
`;

const Content = styled.span`
  margin-left: 0.3rem;
`;

const S = {
  IconButtonContainer,
  Icon,
  Content,
};

export default S;
