import { useState, useEffect } from 'react';
import { useDraggable } from '@hooks/utils/useDraggable';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import { BsArrowLeft, BsPlus } from 'react-icons/bs';
import TextEditor from '@components/_common/atoms/TextEditor';
import { generateTimer } from '@utils/timeUtils';
import { useSpaceDetail } from '@hooks/useSpace';
import { SpaceDetail, SpaceOutletProps } from '@customTypes/space';
import { ROUTES } from '@constants/path';
import { SPACE_NAV_BUTTON } from '@constants/constants';
import { useTestCaseOpen, useTestCaseSubmit, useSpaceStatusHandler, useCodeRun, useCodeSubmitHandler } from './handler';
import S from './style';

export default function SpaceDetail() {
  const navigate = useNavigate();
  const { codingSpaceId } = useParams();
  const { data, isLoading } = useGetSpaceInfo(codingSpaceId);

  const [spaceData, setSpacedata] = useState<SpaceDetail>();
  const [timer, settimer] = useState<number>(0);
  const [navButton, setNavbutton] = useState<string>(SPACE_NAV_BUTTON[0]);
  const [testCaseStatus, setTestCaseStatus] = useState<string>('DEFAULT');
  const [testCaseList, setTestCaseList] = useState([]);
  const [outletProps, setOutletProps] = useState<SpaceOutletProps>();
  const [tabInfo, setTabInfo] = useState({
    code: '',
    id: '',
  });
  const [input, setInput] = useState<string>('');


  const { TestCaseSubmitHandler } = useTestCaseSubmit(codingSpaceId, testCaseList, setTestCaseList);
  const { testCaseOpenHandler } = useTestCaseOpen(testCaseStatus, testCaseList, setTestCaseList, TestCaseSubmitHandler);
  const { spaceStartHandler } = useSpaceStatusHandler(codingSpaceId, spaceData?.studyId, spaceData?.status);
  const { codeRun } = useCodeRun(tabInfo, input, spaceData?.language);
  const { codeSubmit } = useCodeSubmitHandler(tabInfo, spaceData?.language, testCaseList);

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
    refetch();
    setSpacedata(data?.codingSpace);
    settimer(data?.codingSpace?.codingTime);
    setTestCaseList(spaceData?.testCase);
    switch (spaceData?.status) {
      case '대기':
        setNavbutton(SPACE_NAV_BUTTON[0]);
        setTestCaseStatus('DEFAULT');
        setOutletProps({ totalUserCount: spaceData?.totalUserCount });
        break;
      case '진행':
        setNavbutton(SPACE_NAV_BUTTON[1]);
        setTestCaseStatus('CUSTOM');
        setOutletProps({ language: spaceData?.language, id: spaceData?.id, setTabInfo, setInput });
        navigate(ROUTES.SPACE.RUNNING({ codingSpaceId }));
        break;
      case '피드백':
        setNavbutton(SPACE_NAV_BUTTON[2]);
        setTestCaseStatus('CUSTOM');
        navigate(ROUTES.SPACE.FEEDBACK({ codingSpaceId }));
        break;
      case '종료':
        setNavbutton(SPACE_NAV_BUTTON[3]);
        setTestCaseStatus('DEFAULT');
        break;
      default:
        setNavbutton(SPACE_NAV_BUTTON[0]);
        setTestCaseStatus('DEFAULT');
        break;
    }
  }, [data, spaceData, codingSpaceId, refetch, navigate]);

  return (
    <S.PageContainer>
      <SpaceNavbar
        studyId={data.codingSpace.studyId}
        status={data.codingSpace.status}
        timer={data.codingSpace.codingTime}
        name={data.codingSpace.name}
      />

      <S.MainContent ref={containerRef}>
        <S.ProblemDescription>
          <TextEditor
            value={spaceData?.description}
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

        <S.RightContent width={100 - width}>
          <Outlet context={outletProps} />
        </S.RightContent>
      </S.MainContent>

      <SpaceFooter
        status={data.codingSpace.status}
        testCases={data.codingSpace.testCase}
        onCodeRun={codeRun}
        onCodeSubmit={codeSubmit}
      />
    </S.PageContainer>
  );
}
