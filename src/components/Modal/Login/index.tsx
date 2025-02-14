import { BsXLg } from 'react-icons/bs';
import { LoginProps } from '@customTypes/modal';
import S from './style';
import COCOMU_LOGO from '@/assets/Image/cocomu-logo.png';
import GOOGLE_LOGO from '@/assets/Image/google-logo.png';
import GITHUB_LOGO from '@/assets/Image/github-logo.png';
import KAKAO_LOGO from '@/assets/Image/kakao-logo.png';

export default function LoginModal({ onClose, onGoogle, onGitHub, onKakao }: LoginProps) {
  return (
    <S.LoginModalContainer>
      <S.CloseIcon>
        <BsXLg
          size={10}
          onClick={onClose}
        />
      </S.CloseIcon>
      <S.LogoContainer>
        <S.Logo src={COCOMU_LOGO} />
      </S.LogoContainer>
      <S.IntroduceLabel>코코무에 오신 것을</S.IntroduceLabel>
      <S.IntroduceLabel>환영합니다!</S.IntroduceLabel>
      <S.GoogleLoginButton onClick={onGoogle}>
        <S.ButtonIcon src={GOOGLE_LOGO} />
        <S.ButtonLabel>Google 로그인</S.ButtonLabel>
      </S.GoogleLoginButton>
      <S.GitHubLoginButton onClick={onGitHub}>
        <S.ButtonIcon src={GITHUB_LOGO} />
        <S.ButtonLabel>GitHub 로그인</S.ButtonLabel>
      </S.GitHubLoginButton>
      <S.KakaoLoginButton onClick={onKakao}>
        <S.ButtonIcon src={KAKAO_LOGO} />
        <S.ButtonLabel>Kakao 로그인</S.ButtonLabel>
      </S.KakaoLoginButton>
    </S.LoginModalContainer>
  );
}
