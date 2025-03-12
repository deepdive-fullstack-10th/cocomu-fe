import { useParams } from 'react-router-dom';

import useGetWaitingPage from '@hooks/space/useGetWaitingPage';
import useStartSpace from '@hooks/space/useStartSpace';

import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';

import Loading from '@pages/Loading';

import S from './style';

export default function SpaceWaiting() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { data, isLoading } = useGetWaitingPage(codingSpaceId);
  const { startSpaceMutate } = useStartSpace(Number(codingSpaceId));

  const handleStart = () => {
    startSpaceMutate.mutate(codingSpaceId);
  };

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        name={data.name}
        timer={data.codingMinutes}
        isLeader={data.hostMe}
        buttonLabel='문제 풀이 시작'
        onClick={handleStart}
      />

      <CodingWorkspace
        description={data.description}
        workbookUrl={data.workbookUrl}
        language={data.language}
        activeUsers={data.activeUsers}
        totalUserCount={data.totalUserCount}
        disabled
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
      />
    </S.Container>
  );
}
