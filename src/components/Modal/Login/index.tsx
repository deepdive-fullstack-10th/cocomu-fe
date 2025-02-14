import { BsXLg } from 'react-icons/bs';
import S from "./style";

export default Login({ onClick, onClose }) {
  return (
    <S.LoginModalContainter>
      <S.CloseIcon>
        <BsXLg size={10} onClick={onClose}/>
      </S.CloseIcon>
      <S.LogoContainer>
        <S.LOGO src={}></S.LOGO>
      </S.LogoContainer>
      <S.IntroduceLabel>코코무에 오신 것을</S.IntroduceLabel>
      <S.inroduceLabel>환영합니다!</S.inroduceLabel>
      <S.GoogleLoginButton onClick={onClick}>
        <S.ButtonIcon src={}></S.ButtonIcon>
        <S.ButtonLabel>Google 로그인</S.ButtonLabel>
      </S.GoogleLoginButton>
      <S.GitHubLoginButton onClick={onClick}>
        <S.ButtonIcon></S.ButtonIcon>
        <S.ButtonLabel>GitHub 로그인</S.ButtonLabel>
      </S.GitHubLoginButton>
      <S.KakaoLoginButton onClick={onClick}>
        <S.ButtonIcon></S.ButtonIcon>
        <S.ButtonLabel>Kakao 로그인</S.ButtonLabel>
      </S.KakaoLoginButton>
    </S.LoginModalContainter>
  );
}