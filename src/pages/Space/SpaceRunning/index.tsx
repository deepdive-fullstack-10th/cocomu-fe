import { useParams } from 'react-router-dom';

import useGetStartingPage from '@hooks/space/useGetStartingPage';

import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';

import Loading from '@pages/Loading';

import S from './style';

// SpaceRunning쪽에서 필요한 핸들러, useState 같은건 여기서 만드시면 됩니다!
export default function SpaceRunning() {
  const { studyId, codingSpaceId } = useParams<{ studyId: string; codingSpaceId: string }>();
  const { data, isLoading } = useGetStartingPage(codingSpaceId);

  const handleStart = () => {};

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        studyId={Number(studyId)}
        name={data.name}
        timer={data.codingMinutes}
        isLeader={data.hostMe}
        buttonLabel='피드백 시작'
        onClick={handleStart}
      />

      {/* 여기 props로 전달할 것들 전달하시면 됩니다. props 추가하셔도 됩니다!*/}
      <CodingWorkspace
        description={data.description}
        workbookUrl={data.workbookUrl}
        language={data.language}
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
      />
    </S.Container>
  );
}
