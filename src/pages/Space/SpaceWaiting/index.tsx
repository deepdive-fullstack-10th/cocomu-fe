import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useGetWaitingPage from '@hooks/space/useGetWaitingPage';
import useEnterSpace from '@hooks/space/useEnterSpace';
import useStartSpace from '@hooks/space/useStartSpace';
import useStompClient from '@hooks/utils/useSoket';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import { UserRoleData } from '@customTypes/user';
import { ROUTES } from '@constants/path';
import { useModalStore } from '@stores/useModalStore';
import { WAITING_INFO } from '@constants/modal';
import Loading from '@pages/Loading';

import S from './style';

export default function SpaceWaiting() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();

  const navigate = useNavigate();
  const { open } = useModalStore();

  const [users, setUsers] = useState<UserRoleData[]>([]);
  const [isEntered, setIsEntered] = useState(false);

  const { enterSpaceMutate } = useEnterSpace(Number(codingSpaceId));
  const { startSpaceMutate } = useStartSpace(Number(codingSpaceId));

  const { data, isLoading } = useGetWaitingPage(isEntered ? codingSpaceId : null);

  const messages = useStompClient({
    codingSpaceId,
    token: localStorage.getItem('ACCESS_TOKEN'),
  });

  useEffect(() => {
    enterSpaceMutate(codingSpaceId);
    setIsEntered(true);
  }, [codingSpaceId, enterSpaceMutate]);

  useEffect(() => {
    if (data?.activeUsers) {
      setUsers(data.activeUsers);
    }
    if (messages) {
      const object = JSON.parse(messages);
      if (object.type === 'STUDY_START') {
        open('wating', {
          label: WAITING_INFO.running.label,
          description: WAITING_INFO.running.description,
          navigate: navigate(ROUTES.SPACE.RUNNING({ codingSpaceId: Number(codingSpaceId) })),
        });
      }
      setUsers((prev) => {
        if (object.type === 'USER_ENTER') {
          if (prev.some((user) => user.id === object.data.id)) {
            return prev;
          }
          return [...prev, object.data];
        }
        if (object.type === 'USER_LEAVE') {
          return prev.filter((user) => user.id !== object.data.id);
        }
        return prev;
      });
    }
  }, [data, messages, navigate, codingSpaceId, open]);

  const handleStart = () => {
    startSpaceMutate.mutate(codingSpaceId);
  };

  if (!isEntered || isLoading) return <Loading />;

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
