import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useDraggable } from '@hooks/utils/useDraggable';
import useGetSpaceInfo from '@hooks/space/useGetSpaceInfo';

import SpaceNavbar from '@components/Space/SpaceNavbar';
import SpaceFooter from '@components/Space/SpaceFooter';
import TextEditor from '@components/_common/atoms/TextEditor';
import ResizablePanel from '@components/Space/ResizablePanel';

import Loading from '@pages/Loading';
import { useCodeRun, useCodeSubmitHandler } from './handler';

import S from './style';

export default function SpaceDetail() {
  const { codingSpaceId } = useParams();
  const { data, isLoading } = useGetSpaceInfo(codingSpaceId);
  const [outletProps, setOutletProps] = useState(null);

  const [tabInfo, setTabInfo] = useState({ id: '', code: '' });
  const [input, setInput] = useState<string>('');

  const { value: width, containerRef, handleMouseDown } = useDraggable({ direction: 'x' });

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

  if (isLoading || outletProps === null) return <Loading />;

  return (
    <S.Container>
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

        <ResizablePanel
          direction='y'
          onMouseDown={handleMouseDown}
        />

        <S.RightContent width={100 - width}>
          <Outlet context={outletProps} />
        </S.RightContent>
      </S.MainContent>

      <SpaceFooter
        codingSpaceId={String(data.codingSpace.id)}
        status={data.codingSpace.status}
        testCases={data.codingSpace.testCase}
        onCodeRun={codeRun}
        onCodeSubmit={codeSubmit}
      />
    </S.Container>
  );
}
