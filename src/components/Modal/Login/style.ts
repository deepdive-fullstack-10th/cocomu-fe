import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  padding: 1rem;
`;

const Body = styled.div``;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const IntroduceLabel = styled.div`
  ${({ theme }) => theme.font.heading[600]};
  color: ${({ theme }) => theme.color.gray[950]};
  margin-bottom: 1rem;
`;

const LoginButtonContainer = styled.div``;

const ButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32rem;

  border-radius: 3rem;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;

  cursor: pointer;
  transition: 0.2s ease;
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

const GoogleLoginButton = styled.div`
  ${ButtonStyle};
  border: 1px solid ${({ theme }) => theme.color.gray[600]};
  background-color: ${({ theme }) => theme.color.gray[50]};
  color: ${({ theme }) => theme.color.gray[950]};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[200]};
    color: ${({ theme }) => theme.color.gray[800]};
  }
`;

const GitHubLoginButton = styled.div`
  ${ButtonStyle};
  background-color: ${({ theme }) => theme.color.gray[950]};
  color: ${({ theme }) => theme.color.gray[50]};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[900]};
    color: ${({ theme }) => theme.color.gray[400]};
  }
`;

const KakaoLoginButton = styled.div`
  ${ButtonStyle};
  background-color: ${({ theme }) => theme.color.secondary[500]};
  color: ${({ theme }) => theme.color.gray[950]};

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary[400]};
    color: ${({ theme }) => theme.color.gray[900]};
  }
`;

const S = {
  LoginModalContainer,
  Header,
  Body,
  Logo,
  IntroduceLabel,
  ButtonIcon,
  ButtonLabel,
  LoginButtonContainer,
  GoogleLoginButton,
  GitHubLoginButton,
  KakaoLoginButton,
};

export default S;
