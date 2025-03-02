import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useDraggable } from '@hooks/utils/useDraggable';
import useGetSpaceInfo from '@hooks/space/useGetSpaceInfo';

import { SpaceDetail } from '@customTypes/space';

import SpaceNavbar from '@components/Space/SpaceNavbar';
import SpaceFooter from '@components/Space/SpaceFooter';
import TextEditor from '@components/_common/atoms/TextEditor';

import Loading from '@pages/Loading';

import { useCodeRun, useCodeSubmitHandler } from './handler';

import S from './style';

export default function SpaceDetail() {
  const { codingSpaceId } = useParams();
  const { data, isLoading } = useGetSpaceInfo(codingSpaceId);
  const [outletProps, setOutletProps] = useState(null);

  const [tabInfo, setTabInfo] = useState({
    id: '',
    code: '',
  });
  const [input, setInput] = useState<string>('');

  const { codeRun } = useCodeRun(tabInfo, input, data?.language);
  const { codeSubmit } = useCodeSubmitHandler(tabInfo, data?.language, data?.codingSpace.testCase);

  useEffect(() => {
    if (!data?.codingSpace) return;

    const { status, totalUserCount, language, id } = data.codingSpace;

    if (status === '대기') {
      setOutletProps({ totalUserCount });
    } else if (status === '진행') {
      setOutletProps({ language, id, setTabInfo, setInput });
    } else if (status === '피드백') {
      setOutletProps({ feedbackMode: true });
    } else if (status === '종료') {
      setOutletProps({});
    }
  }, [data]);

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

  if (isLoading || outletProps === null) return <Loading />;

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
            value={data.codingSpace.description}
            readOnly
          />
          <S.ReferenceContainer>
            출처 :
            <a
              href={data.codingSpace.referenceUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.codingSpace.referenceUrl}
            </a>
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
