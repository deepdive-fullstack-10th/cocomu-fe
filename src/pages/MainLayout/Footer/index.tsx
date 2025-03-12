import MoveTopButton from '@components/_common/atoms/MoveTopButton';
import S from './style';

export default function Footer() {
  return (
    <S.BackgroundContainer>
      <S.FooterContainer>
        <S.LeftContainer>
          <S.LogoImg
            src='https://cdn.cocomu.co.kr/images/default/Logo.png'
            alt='Logo'
          />
          <S.LabelContainer>
            <S.Label>
              <S.LabelText>Email :</S.LabelText>
              <S.SmallLabelText>deepdive@mail.com</S.SmallLabelText>
            </S.Label>
            <S.Label>
              <S.LabelText>TEL :</S.LabelText>
              <S.SmallLabelText>010-XXXX-XXXX</S.SmallLabelText>
            </S.Label>
            <S.LabelText>© cocomu Corp.</S.LabelText>
          </S.LabelContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.MenuText>이용약관</S.MenuText>
          <S.MenuText>개인정보처리방침</S.MenuText>
          <S.MenuText>서비스 소개</S.MenuText>
          <S.MenuText>IT 기업 채용공고</S.MenuText>
        </S.RightContainer>
        <MoveTopButton />
      </S.FooterContainer>
    </S.BackgroundContainer>
  );
}
