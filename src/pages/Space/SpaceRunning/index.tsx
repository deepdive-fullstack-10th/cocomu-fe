import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import useYorkie from '@hooks/utils/useYorkie';
import useGetStartingPage from '@hooks/space/useGetStartingPage';
import useEnterSpace from '@hooks/space/useEnterSpace';

import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import useStompClient from '@hooks/utils/useSoket';
import Loading from '@pages/Loading';

import S from './style';

export default function SpaceRunning() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { data, isLoading } = useGetStartingPage(codingSpaceId);

  const { enterSpaceMutate } = useEnterSpace(Number(codingSpaceId));

  const messages = useStompClient({
    codingSpaceId,
  });

  // const { content, updateContent } = useYorkie(data?.documentKey);

  useEffect(() => {
    enterSpaceMutate(codingSpaceId);
  }, [codingSpaceId, enterSpaceMutate]);

  useEffect(() => {
    console.log(data);
    if (messages) {
      const object = JSON.parse(messages);
      console.log(object);
    }
  }, [data, messages]);

  const handleStart = () => {};

  if (isLoading || !data) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        name={data?.name}
        startTime={data?.startTime}
        timer={data?.codingMinutes}
        isLeader={data?.hostMe}
        buttonLabel='피드백 시작'
        onClick={handleStart}
      />

      <CodingWorkspace
        description={data?.description}
        workbookUrl={data?.workbookUrl}
        language={data?.language}
        disabled={false}
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
        isEditable
      >
        <div>123</div>
      </SpaceFooter>
    </S.Container>
  );
}
