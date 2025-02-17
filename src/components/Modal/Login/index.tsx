import { BsXLg } from 'react-icons/bs';
import COCOMU_LOGO from '@assets/Image/cocomu-logo.png';
import GOOGLE_LOGO from '@assets/Image/google-logo.png';
import GITHUB_LOGO from '@assets/Image/github-logo.png';
import KAKAO_LOGO from '@assets/Image/kakao-logo.png';
import Icon from '@components/_common/atoms/Icon';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

export default function LoginModal() {
  const handleClick = (platform: string) => {
    /* 각 플랫폼으로 로그인 클릭 시 발생하는 이벤트 */
    console.log(`please access your ${platform}`);
  };
  const { close } = useModalStore();

  return (
    <S.LoginModalContainer>
      <S.CloseIconWrapper onClick={close}>
        <Icon
          icon={
            <BsXLg
              size={20}
              color='50'
            />
          }
        />
      </S.CloseIconWrapper>
      <S.Logo src={COCOMU_LOGO} />
      <S.IntroduceLabel>코코무에 오신 것을</S.IntroduceLabel>
      <S.IntroduceLabel>환영합니다!</S.IntroduceLabel>
      <S.GoogleLoginButton onClick={() => handleClick('google')}>
        <S.ButtonIcon src={GOOGLE_LOGO} />
        <S.ButtonLabel>Google 로그인</S.ButtonLabel>
      </S.GoogleLoginButton>
      <S.GitHubLoginButton onClick={() => handleClick('github')}>
        <S.ButtonIcon src={GITHUB_LOGO} />
        <S.ButtonLabel>GitHub 로그인</S.ButtonLabel>
      </S.GitHubLoginButton>
      <S.KakaoLoginButton onClick={() => handleClick('kakao')}>
        <S.ButtonIcon src={KAKAO_LOGO} />
        <S.ButtonLabel>Kakao 로그인</S.ButtonLabel>
      </S.KakaoLoginButton>
    </S.LoginModalContainer>
  );
}
