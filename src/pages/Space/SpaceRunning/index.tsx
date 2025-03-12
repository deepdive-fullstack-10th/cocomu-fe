import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import useYorkie from '@hooks/utils/useYorkie';
import { Client } from '@stomp/stompjs';

import useGetStartingPage from '@hooks/space/useGetStartingPage';
import useFeedBackSpace from '@hooks/space/useRunningSpace';
import useExcution from '@hooks/space/useExcution';
import Button from '@components/_common/atoms/Button';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import { ActiveTab } from '@customTypes/space';
import Loading from '@pages/Loading';
import { STOMP_ENDPOINTS } from '@constants/api';

import { ROUTES } from '@constants/path';

import S from './style';

interface OutletContextType {
  client: Client | null;
}

export default function SpaceRunning() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { data, isLoading } = useGetStartingPage(codingSpaceId);
  const { client } = useOutletContext<OutletContextType>();

  const navigate = useNavigate();

  const [users, setUsers] = useState<ActiveTab[]>([]);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>();
  const [tabMessage, setTabMessage] = useState<string | null>(null);
  const [spaceMessage, setSpaceMessage] = useState<string | null>(null);

  const { excutionMutate } = useExcution();
  const { feedBackSpaceMutate } = useFeedBackSpace(Number(codingSpaceId));

  const { content, updateContent } = useYorkie(data?.documentKey);

  useEffect(() => {
    if (!data || !client || !client.connected) return;
    console.log('📌 Starting Page Data:', data);

    const tabSubscription = client.subscribe(STOMP_ENDPOINTS.TAB_SUBSCRIBE(data.tabId), (msg) => {
      setTabMessage(msg.body);
    });

    const spaceSubscription = client.subscribe(STOMP_ENDPOINTS.SPACE_SUBSCRIBE(codingSpaceId), (msg) => {
      setSpaceMessage(msg.body);
    });

    return () => {
      tabSubscription.unsubscribe();
      spaceSubscription.unsubscribe();
    };
  }, [data, client, codingSpaceId]);

  useEffect(() => {
    if (!data?.activeUsers) return;
    const activeUser = data.activeUsers.find((user) => user.myTab === true);
    setUsers(activeUser ? [activeUser] : []);
  }, [data]);

  useEffect(() => {
    if (!tabMessage) return;
    const object = JSON.parse(tabMessage);
    console.log(object);
    if (['SUCCESS', 'RUNNING', 'TIMEOUT_ERROR'].includes(object.type)) {
      setOutput(object.data.output);
    }
  }, [tabMessage]);

  useEffect(() => {
    if (!spaceMessage) return;
    const object = JSON.parse(spaceMessage);
    console.log(object);

    if (object.type === 'STUDY_FEEDBACK') {
      if (!data.hostMe) {
        navigate(ROUTES.SPACE.FEEDBACK({ codingSpaceId: Number(codingSpaceId) }));
      }
    }
  }, [spaceMessage, codingSpaceId, data?.hostMe, navigate]);

  const handleStart = useCallback(() => {
    feedBackSpaceMutate.mutate(codingSpaceId);
  }, [feedBackSpaceMutate, codingSpaceId]);

  const handleCodeExecution = useCallback(() => {
    if (!data) return;
    excutionMutate.mutate({
      codingSpaceTabId: data.tabId,
      language: data.language?.languageName,
      code: content,
      input,
    });
  }, [excutionMutate, data, content, input]);

  const handleSubmit = () => {
    console.log('✅ 코드 제출');
  };

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
        onTimeout={handleStart}
        hostMe={data.hostMe}
      />

      <CodingWorkspace
        description={data?.description}
        workbookUrl={data?.workbookUrl}
        language={data?.language}
        activeTabs={users}
        onCodeChange={updateContent}
        setInput={setInput}
        code={content}
        disabled={false}
        output={output}
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
        isEditable
      >
        <S.ButtonWrapper>
          <Button
            size='md'
            color='analogous'
            onClick={handleCodeExecution}
          >
            코드 실행
          </Button>

          <Button
            size='md'
            color='primary'
            onClick={handleSubmit}
          >
            제출하기
          </Button>
        </S.ButtonWrapper>
      </SpaceFooter>
    </S.Container>
  );
}
