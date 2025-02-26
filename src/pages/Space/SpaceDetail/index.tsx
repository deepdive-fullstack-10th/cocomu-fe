import { useState, useEffect } from 'react';
import { useDraggable } from '@hooks/useDraggable';
import { Outlet, useParams } from 'react-router-dom';
import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import { BsArrowLeft } from 'react-icons/bs';
import TextEditor from '@components/_common/atoms/TextEditor';
import { generateTimer } from '@utils/timeUtils';
import useWaitingSpace from '@hooks/useSpace';
import { SpaceDetail } from '@customTypes/space';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

export default function SpaceDetail() {
  const [spaceData, setSpacedata] = useState<SpaceDetail>();
  const [timer, settimer] = useState<number>(0);
  const { spaceId } = useParams();
  const { data } = useWaitingSpace({ spaceId });
  const { open } = useModalStore();

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

  useEffect(() => {
    setSpacedata(data?.codingSpace);
    settimer(data?.codingSpace?.codingTime);
  }, [data]);

  const testcaseHandler = () => {
    open('testCase', {
      status: 'DEFAULT',
      testCases: spaceData?.testCase || [],
    });
  };

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
          <div>{spaceData?.name}</div>
        </S.NavbarLeftcontent>

        <S.NavbarRightcontent>
          <div>{generateTimer(timer * 60)}</div>
          {spaceData?.hasLeaderRole && (
            <Button
              size='md'
              color='triadic'
            >
              문제 풀이 시작
            </Button>
          )}
        </S.NavbarRightcontent>
      </S.Navbar>

      <S.MainContent ref={containerRef}>
        <S.ProblemDescription width={width}>
          <TextEditor
            value={spaceData?.description}
            height='100%'
            readOnly
          />
          <S.ReferenceContainer>
            <div>출처</div>
            <div>{spaceData?.referenceUrl}</div>
          </S.ReferenceContainer>
        </S.ProblemDescription>
        <S.ResizablePanel>
          <S.ResizeButton onMouseDown={handleMouseDown} />
        </S.ResizablePanel>
        <S.RightContent>
          <Outlet context={spaceData} />
        </S.RightContent>
      </S.MainContent>

      <S.Footer>
        <S.FooterItem>
          <IconButton
            content='테스트 케이스 확인하기'
            align='center'
            shape='round'
            onClick={testcaseHandler}
          />
        </S.FooterItem>
      </S.Footer>
    </S.PageContainer>
  );
}
