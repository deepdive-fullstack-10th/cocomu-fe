import styled from '@emotion/styled';
import { css, SerializedStyles, Theme } from '@emotion/react';

export type ButtonType = 'google' | 'github' | 'kakao';

const LoginModalContainer = styled.div`
  width: 46rem;
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 1.6rem;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 3rem 0 3rem;
  justify-content: right;
  align-items: flex-end;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 8rem 2rem 8rem;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;

const Logo = styled.img`
  width: 50%;
  height: auto;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroduceLabel = styled.div`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};
  margin-bottom: 1rem;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32rem;

  border-radius: 3rem;
  padding: 1.5rem;
  gap: 1.8rem;

  cursor: pointer;
  transition: 0.2s ease;
`;

const typeStyles: { [key in ButtonType]: (theme: Theme) => SerializedStyles } = {
  google: (theme: Theme) => css`
    border: 1px solid ${theme.color.gray[600]};
    background-color: ${theme.color.gray[50]};
    color: ${theme.color.gray[950]};

    &:hover {
      background-color: ${theme.color.gray[200]};
      color: ${theme.color.gray[800]};
    }
  `,
  github: (theme: Theme) => css`
    background-color: ${theme.color.gray[950]};
    color: ${theme.color.gray[50]};

    &:hover {
      background-color: ${theme.color.gray[900]};
      color: ${theme.color.gray[400]};
    }
  `,
  kakao: (theme: Theme) => css`
    background-color: ${theme.color.secondary[500]};
    color: ${theme.color.gray[950]};

    &:hover {
      background-color: ${theme.color.secondary[400]};
      color: ${theme.color.gray[900]};
    }
  `,
};

const LoginButton = styled.button<{ buttonType: ButtonType }>`
  ${buttonStyles};
  ${({ theme, buttonType }) => typeStyles[buttonType](theme)};

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
`;

const ButtonIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const ButtonLabel = styled.div`
  ${({ theme }) => theme.font.common.defaultAccent};
  display: flex;
  align-items: center;
`;

const S = {
  LoginModalContainer,
  Header,
  Body,
  Logo,
  Text,
  IntroduceLabel,
  LoginButton,
  ButtonIcon,
  ButtonLabel,
  LoginButtonContainer,
};

export default S;
