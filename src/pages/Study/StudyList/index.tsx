import Header from './header';
import Body from './body';
import Footer from './footer';
import * as S from './style';

export default function StudyList() {
  return (
    <S.Container>
      <Header />
      <Body />
      <Footer
        pages={10}
        onPageChange={() => {}}
      />
    </S.Container>
  );
}
