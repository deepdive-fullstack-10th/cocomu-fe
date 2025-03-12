import MoveTopButton from '@components/_common/atoms/MoveTopButton';
import FooterLabel from '@pages/MainLayout/Footer/FooterLabel';
import { MENU_LIST } from '@constants/common';
import S from './style';

export default function Footer() {
  return (
    <S.Container>
      <S.InfoSection>
        <S.LogoImg
          src='https://cdn.cocomu.co.kr/images/default/Logo.png'
          alt='Logo'
        />
        <S.LabelContainer>
          <FooterLabel
            name='Email'
            description='deepdive@mail.com'
          />
          <FooterLabel
            name='TEL'
            description='010-XXXX-XXXX'
          />
          <FooterLabel name='© cocomu Corp.' />
        </S.LabelContainer>
      </S.InfoSection>
      <S.MenuSection>
        {MENU_LIST.map((menuItem) => (
          <S.MenuText>{menuItem}</S.MenuText>
        ))}
      </S.MenuSection>
      <MoveTopButton />
    </S.Container>
  );
}
