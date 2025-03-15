import { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import useYorkie from '@hooks/utils/useYorkie';
import { Client } from '@stomp/stompjs';

import useGetStartingPage from '@hooks/space/useGetStartingPage';
import useFeedBackSpace from '@hooks/space/useRunningSpace';
import useExcution from '@hooks/space/useExcution';
import useSubmission from '@hooks/space/useSubmission';

import Button from '@components/_common/atoms/Button';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import Loading from '@pages/Loading';

import { STOMP_ENDPOINTS } from '@constants/api';
import { ActiveTab, CodeSubmit } from '@customTypes/space';

import { WAITING_INFO } from '@constants/modal';
import { useToastStore } from '@stores/useToastStore';
import { useModalStore } from '@stores/useModalStore';

import S from './style';

interface OutletContextType {
  client: Client | null;
}

export default function SpaceRunning() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { client } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const { open } = useModalStore();
  const { alert } = useToastStore();

  const [users, setUsers] = useState<ActiveTab[]>([]);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>();
  const [isSubmission, setIsSubmission] = useState<boolean>(false);
  const [codeSubmit, setCodeSubmit] = useState<CodeSubmit[]>([]);
  const [isExcution, setIsExcution] = useState<boolean>(false);

  const { excutionMutate } = useExcution();
  const { feedBackSpaceMutate } = useFeedBackSpace();
  const { subMissionMutate } = useSubmission();

  const { data, isLoading, refetch } = useGetStartingPage(codingSpaceId);
  const { content, handleLocalChange } = useYorkie(data?.documentKey);

  useEffect(() => {
    if (!data || !client || !client.connected) return;

    if (data?.activeUsers) {
      const activeUser = data.activeUsers.find((user) => user.myTab === true);
      setUsers(activeUser ? [activeUser] : []);
    }

    const handleMessage = (msg) => {
      const object = JSON.parse(msg.body);

      if (['SUCCESS', 'RUNNING', 'TIMEOUT_ERROR'].includes(object.type)) {
        setOutput(object.data.output);
        setIsExcution(true);
      }

      if (object.type === 'STUDY_FEEDBACK') {
        open('waiting', {
          label: WAITING_INFO.feedback.label,
          description: WAITING_INFO.feedback.description,
          navigate: navigate(WAITING_INFO.feedback.navigate(Number(codingSpaceId)), { replace: true }),
        });
      }

      if (['DELETE_TEST_CASE', 'ADD_TEST_CASE'].includes(object.type)) {
        refetch();
        alert(
          object.type === 'DELETE_TEST_CASE' ? '테스트 케이스가 삭제되었습니다.' : '테스트 케이스가 추가되었습니다.',
        );
      }

      if (['CORRECT', 'WRONG', 'RUNTIME_ERROR'].includes(object.type)) {
        setCodeSubmit((prev) => [...prev, object]);
      }
    };

    const tabSubscription = client.subscribe(STOMP_ENDPOINTS.TAB_SUBSCRIBE(data.tabId), handleMessage);
    const spaceSubscription = client.subscribe(STOMP_ENDPOINTS.SPACE_SUBSCRIBE(codingSpaceId), handleMessage);
    const submissionSubscription = client.subscribe(STOMP_ENDPOINTS.SUBMISSION_SUBSCRIBE(data.tabId), handleMessage);

    return () => {
      tabSubscription.unsubscribe();
      spaceSubscription.unsubscribe();
      submissionSubscription.unsubscribe();
    };
  }, [data]);

  const handleStart = () => {
    feedBackSpaceMutate.mutate(codingSpaceId);
  };

  const handleCodeExecution = () => {
    if (!data) return;

    excutionMutate.mutate({
      codingSpaceTabId: data.tabId,
      language: data.language?.languageName,
      code: content,
      input,
    });
  };

  const handleSubmit = () => {
    subMissionMutate.mutate(
      {
        codingSpaceId: Number(codingSpaceId),
        codingSpaceTabId: Number(data.tabId),
        language: data.language?.languageName,
        code: content,
      },
      {
        onSuccess: () => {
          setIsSubmission(true);
        },
      },
    );
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
        onCodeChange={handleLocalChange}
        setInput={setInput}
        code={content}
        disabled={false}
        output={output}
        isSubmission={isSubmission}
        codeSubmit={codeSubmit}
        testCaseLegnth={data.testCases.length}
        isExcution={isExcution}
        setIsExcution={setIsExcution}
      />

      <SpaceFooter
        codingSpaceId={codingSpaceId}
        testCases={data.testCases}
        isEditable
      >
        <S.ButtonWrapper>
          {!isSubmission && (
            <>
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
            </>
          )}
        </S.ButtonWrapper>
      </SpaceFooter>
    </S.Container>
  );
}
