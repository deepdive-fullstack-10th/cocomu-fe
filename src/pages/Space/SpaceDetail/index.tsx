import { useState, useEffect } from 'react';
import { useDraggable } from '@hooks/useDraggable';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import { BsArrowLeft } from 'react-icons/bs';
import TextEditor from '@components/_common/atoms/TextEditor';
import { generateTimer } from '@utils/timeUtils';
import { useSpaceDetail, useSpaceStart } from '@hooks/useSpace';
import { SpaceDetail } from '@customTypes/space';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

export default function SpaceDetail() {
  const [spaceData, setSpacedata] = useState<SpaceDetail>();
  const [timer, settimer] = useState<number>(0);
  const { spaceId } = useParams();
  const { data } = useSpaceDetail({ spaceId });
  const { open } = useModalStore();

  const navigate = useNavigate();

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

  const { spaceStartMutate } = useSpaceStart();

  const spaceStartHandler = () => {
    spaceStartMutate.mutate({ spaceId, studyId: spaceData?.studyId });
  };

  return (
    <S.PageContainer>
      <S.Navbar>
        <S.NavbarLeftcontent>
          <IconButton
            content='돌아가기'
            align='center'
            color='none'
            onClick={() => navigate(-1)}
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
              onClick={spaceStartHandler}
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
          <Outlet context={spaceData?.totalUserCount} />
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
        {['진행', '피드백'].includes(spaceData?.status) && (
          <S.FooterItem>
            <Button
              size='md'
              color='analogous'
            >
              코드 실행
            </Button>
            <Button
              size='md'
              color='primary'
            >
              제출하기
            </Button>
          </S.FooterItem>
        )}
      </S.Footer>
    </S.PageContainer>
  );
}
