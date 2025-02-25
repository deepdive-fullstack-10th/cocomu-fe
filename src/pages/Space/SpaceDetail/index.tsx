import { useDraggable } from '@hooks/useDraggable';
import { Outlet } from 'react-router-dom';
import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import { BsArrowLeft } from 'react-icons/bs';
import TextEditor from '@components/_common/atoms/TextEditor';
import S from './style';

export default function SpaceDetail() {
  const {
    value: width,
    containerRef,
    handleMouseDown,
  } = useDraggable({
    direction: 'x',
    initialValue: 40,
    min: 10,
    max: 90,
    threshold: 5,
  });

  return (
    <S.PageContainer>
      <S.Navbar>
        <S.NavbarLeftcontent>
          <IconButton
            content='돌아가기'
            align='center'
            color='none'
          >
            <BsArrowLeft />
          </IconButton>
          <div>백준1023</div>
        </S.NavbarLeftcontent>

        <S.NavbarRightcontent>
          <div>40:00</div>
          <Button
            size='md'
            color='triadic'
          >
            문제 풀이 시작
          </Button>
        </S.NavbarRightcontent>
      </S.Navbar>

      <S.MainContent ref={containerRef}>
        <S.ProblemDescription width={width}>
          <TextEditor
            value='<p>Hello, world!</p>'
            readOnly
          />
        </S.ProblemDescription>
        <S.ResizablePanel>
          <S.ResizeButton onMouseDown={handleMouseDown} />
        </S.ResizablePanel>
        <S.RightContent>
          <Outlet />
        </S.RightContent>
      </S.MainContent>

      <S.Footer>
        <S.FooterItem>
          <IconButton
            content='테스트 케이스 확인하기'
            align='center'
            shape='round'
          />
        </S.FooterItem>
      </S.Footer>
    </S.PageContainer>
  );
}
