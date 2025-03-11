import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGetWaitingPage from '@hooks/space/useGetWaitingPage';
import useStartSpace from '@hooks/space/useStartSpace';
import useStompClient from '@hooks/utils/useSoket';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import { UserRoleData } from '@customTypes/user';
import Loading from '@pages/Loading';

import S from './style';

export default function SpaceWaiting() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const [users, setUsers] = useState<UserRoleData[]>([]);

  const { data, isLoading } = useGetWaitingPage(codingSpaceId);
  const { startSpaceMutate } = useStartSpace(Number(codingSpaceId));

  const messages = useStompClient({
    wsUrl: 'https://api-dev.cocomu.co.kr/stomp',
    subscribeUrl: `/sub/v1/coding-spaces/${codingSpaceId}`,
    token: localStorage.getItem('ACCESS_TOKEN'),
  });

  useEffect(() => {
    console.log(messages);
    console.log(data);
    if (data?.activeUsers) {
      setUsers(data?.activeUsers);
    }
    if (messages) {
      const object = JSON.parse(messages);

      if (object.type === 'USER_ENTER') {
        setUsers((prev) => [...prev, object.data]);
      } else if (object.type === 'USER_LEAVE') {
        setUsers((prev) => prev.filter((user) => user.id !== object.data.id));
      }
    }
  }, [data, messages]);

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
        activeUsers={users}
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
