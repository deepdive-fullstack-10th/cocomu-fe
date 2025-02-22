import { BsXLg } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import { LoginProps } from '@customTypes/modal';
import S from './style';

export default function Login({ onClose }: LoginProps) {
  const handleClick = (platform: string) => {
    /* 각 플랫폼으로 로그인 클릭 시 발생하는 이벤트 */
    console.log(`please access your ${platform}`);
  };

  return (
    <S.Container>
      <S.Header>
        <Icon
          onClick={onClose}
          size='md'
          color='950'
        >
          <BsXLg />
        </Icon>
      </S.Header>
      <S.Body>
        <S.Logo src='https://cdn.cocomu.co.kr/images/default/Logo.png' />
        <S.WelcomeText>
          코코무에 오신 것을
          <br />
          환영합니다!
        </S.WelcomeText>
        <S.ButtonWrapper>
          <S.LoginButton
            buttonType='google'
            onClick={() => handleClick('google')}
          >
            <S.ButtonIcon src='https://cdn.cocomu.co.kr/images/default/google.png' />
            <S.ButtonLabel>Google 로그인</S.ButtonLabel>
          </S.LoginButton>
          <S.LoginButton
            buttonType='github'
            onClick={() => handleClick('github')}
          >
            <S.ButtonIcon src='https://cdn.cocomu.co.kr/images/default/github.png' />
            <S.ButtonLabel>GitHub 로그인</S.ButtonLabel>
          </S.LoginButton>
          <S.LoginButton
            buttonType='kakao'
            onClick={() => handleClick('kakao')}
          >
            <S.ButtonIcon src='https://cdn.cocomu.co.kr/images/default/kakaotalk.png' />
            <S.ButtonLabel>Kakao 로그인</S.ButtonLabel>
          </S.LoginButton>
        </S.ButtonWrapper>
      </S.Body>
    </S.Container>
  );
}
