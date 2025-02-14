import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LoginModalContainer = styled.div`
  width: 52rem;
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.gray[50]};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 1.6rem;
`;

const CloseIcon = styled.div`
  position: absolute;
`;

const LogoContainer = styled.div`
  width: 15rem;
`;

const Logo = styled.img`
  object-fit: cover;
`;

const IntroduceLabel = styled.div`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const ButtonStyle = css`
  justify-content: center;
  align-items: center;

  border-radius: 3rem;
  padding: 1rem;
`;

const ButtonIcon = styled.img`
  width: 2rem;
`;

const ButtonLabel = styled.div`
  ${({ theme }) => theme.font.common.defaultAccent};
`;

const GoogleLoginButton = styled.div`
  ${ButtonStyle};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const GitHubLoginButton = styled.div`
  ${ButtonStyle};
  background-color: ${({ theme }) => theme.color.gray[950]};
  color: ${({ theme }) => theme.color.gray[50]};
`;

const KakaoLoginButton = styled.div`
  ${ButtonStyle};
  background-color: ${({ theme }) => theme.color.secondary[500]};
  color: ${({ theme }) => theme.color.gray[950]};
`;

const S = {
  LoginModalContainer,
  CloseIcon,
  LogoContainer,
  Logo,
  IntroduceLabel,
  ButtonIcon,
  ButtonLabel,
  GoogleLoginButton,
  GitHubLoginButton,
  KakaoLoginButton,
};

export default S;
