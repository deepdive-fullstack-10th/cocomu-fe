import { BsFillCaretUpFill } from 'react-icons/bs';
import S from './style';

export default function MoveTopButton() {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.ScrollButton onClick={scrollToTop}>
      <S.ButtonGroup>
        <S.IconContainer>
          <BsFillCaretUpFill
            size={30}
            color='slateBlue'
          />
        </S.IconContainer>
        <S.ButtonText>TOP</S.ButtonText>
      </S.ButtonGroup>
    </S.ScrollButton>
  );
}
