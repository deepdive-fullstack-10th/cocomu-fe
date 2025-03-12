import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useYorkie from '@hooks/utils/useYorkie';
import useGetStartingPage from '@hooks/space/useGetStartingPage';
import useFeedBackSpace from '@hooks/space/useRunningSpace';
import useEnterSpace from '@hooks/space/useEnterSpace';
import useExcution from '@hooks/space/useExcution';
import Button from '@components/_common/atoms/Button';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import useStompClient from '@hooks/utils/useSoket';
import { ActiveTab } from '@customTypes/space';
import { ROUTES } from '@constants/path';
import { useModalStore } from '@stores/useModalStore';
import { WAITING_INFO } from '@constants/modal';
import Loading from '@pages/Loading';

import S from './style';

export default function SpaceRunning() {
  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const { data, isLoading } = useGetStartingPage(codingSpaceId);

  const { enterSpaceMutate } = useEnterSpace(Number(codingSpaceId));

  const navigate = useNavigate();
  const { open } = useModalStore();

  const [users, setUsers] = useState<ActiveTab[]>();
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>();

  const { excutionMutate } = useExcution();

  const { feedBackSpaceMutate } = useFeedBackSpace(Number(codingSpaceId));

  const messages = useStompClient({
    codingSpaceId,
    tabId: data?.tabId,
  });

  const { content, updateContent } = useYorkie(data?.documentKey);

  useEffect(() => {
    enterSpaceMutate(codingSpaceId);
  }, [codingSpaceId, enterSpaceMutate]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(data);
    if (data?.activeUsers) {
      const activeUser = data.activeUsers.find((user) => user.myTab === true);

      setUsers([activeUser]);
    }
    if (messages) {
      const object = JSON.parse(messages);
      // eslint-disable-next-line no-console
      console.log(object);
      if (object?.type === 'STUDY_FEEDBACK') {
        open('wating', {
          label: WAITING_INFO.feedback.label,
          description: WAITING_INFO.feedback.description,
          navigate: navigate(ROUTES.SPACE.FEEDBACK({ codingSpaceId: Number(codingSpaceId) })),
        });
      }
      if (object?.type === 'SUCCESS') {
        setOutput(object?.data?.output);
      }
    }
  }, [data, messages, codingSpaceId, navigate, open]);

  const handleStart = () => {
    feedBackSpaceMutate.mutate(codingSpaceId);
  };

  const handleCodeExecution = () => {
    excutionMutate.mutate({
      codingSpaceTabId: data?.tabId,
      language: data?.language?.languageName,
      code: content,
      input,
    });
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
          >
            제출하기
          </Button>
        </S.ButtonWrapper>
      </SpaceFooter>
    </S.Container>
  );
}
