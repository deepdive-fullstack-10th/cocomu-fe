import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import useYorkie from '@hooks/utils/useYorkie';
import { Client } from '@stomp/stompjs';

import useGetFeedbackPage from '@hooks/space/useGetFeedbackPage';
import useExcution from '@hooks/space/useExcution';
import Button from '@components/_common/atoms/Button';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import { ActiveTab } from '@customTypes/space';
import Loading from '@pages/Loading';
import { STOMP_ENDPOINTS } from '@constants/api';
import { useToastStore } from '@stores/useToastStore';
import { WAITING_INFO } from '@constants/modal';
import { useModalStore } from '@stores/useModalStore';
import useFinishSpace from '@hooks/space/useFinishSpace';
import useSaveTabCode from '@hooks/space/useCodesave';

import S from './style';

interface OutletContextType {
  client: Client | null;
}

export default function SpaceFeedBack() {
  const { client } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const { alert } = useToastStore();
  const { open } = useModalStore();

  const { codingSpaceId } = useParams<{ codingSpaceId: string }>();
  const [users, setUsers] = useState<ActiveTab[]>([]);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>();
  const [selectTab, setSelectTab] = useState<ActiveTab | null>(null);
  const [tabMessage, setTabMessage] = useState<string | null>(null);
  const [spaceMessage, setSpaceMessage] = useState<string | null>(null);

  const { excutionMutate } = useExcution();
  const { data, isLoading, refetch } = useGetFeedbackPage(codingSpaceId);
  const { finishSpaceMutate } = useFinishSpace();
  const { saveTabCodeMutate } = useSaveTabCode();

  const finish = useRef(false);
  const isSaving = useRef(false);

  const { content, updateContent, getLatestContentByKey } = useYorkie(selectTab?.documentKey ?? '');

  const saveCode = useCallback(async () => {
    if (!data || !data.activeTabs || isSaving.current || !finish.current) return;

    isSaving.current = true;

    try {
      const activeMyTabs = data.activeTabs.filter((tab) => tab.myTab === true);
      if (activeMyTabs.length === 0) {
        isSaving.current = false;
        return;
      }

      const selectedTab = activeMyTabs[0];
      setSelectTab(selectedTab);

      const latestContent = await getLatestContentByKey(selectedTab.documentKey);

      saveTabCodeMutate.mutate(
        {
          codingSpaceId,
          code: { code: latestContent },
        },
        {
          onSuccess: () => {
            finish.current = false;
            isSaving.current = false;

            open('waiting', {
              label: WAITING_INFO.finish.label,
              description: WAITING_INFO.finish.description,
              navigate: navigate(WAITING_INFO.finish.navigate(Number(codingSpaceId))),
            });
          },
          onError: () => {
            finish.current = false;
            isSaving.current = false;
          },
        },
      );
    } catch (error) {
      finish.current = false;
      isSaving.current = false;
    }
  }, [data, getLatestContentByKey, codingSpaceId, navigate, open, saveTabCodeMutate]);

  useEffect(() => {
    if (!data || !client || !client.connected || !selectTab) return;

    const tabSubscription = client.subscribe(STOMP_ENDPOINTS.TAB_SUBSCRIBE(selectTab.tabId), (msg) => {
      setTabMessage(msg.body);
    });

    const spaceSubscription = client.subscribe(STOMP_ENDPOINTS.SPACE_SUBSCRIBE(codingSpaceId), (msg) => {
      setSpaceMessage(msg.body);
    });

    return () => {
      tabSubscription.unsubscribe();
      spaceSubscription.unsubscribe();
    };
  }, [data, client, codingSpaceId, selectTab]);

  useEffect(() => {
    if (!data?.activeTabs) return;
    setUsers(data.activeTabs);
    setSelectTab(data.activeTabs[0]);
  }, [data]);

  useEffect(() => {
    if (!tabMessage) return;
    const object = JSON.parse(tabMessage);

    if (['SUCCESS', 'RUNNING', 'TIMEOUT_ERROR'].includes(object.type)) {
      setOutput(object.data.output);
    }
  }, [tabMessage]);

  useEffect(() => {
    if (!spaceMessage) return;

    const object = JSON.parse(spaceMessage);

    if (['USER_ENTER', 'USER_LEAVE'].includes(object.type)) {
      refetch();
    }

    if (object.type === 'STUDY_FINISH' && !isSaving.current) {
      finish.current = true;
      saveCode();
    }

    if (object.type === 'DELETE_TEST_CASE') {
      refetch();
      alert('테스트 케이스가 삭제되었습니다.');
    }

    if (object.type === 'ADD_TEST_CASE') {
      refetch();
      alert('테스트 케이스가 추가되었습니다.');
    }
  }, [spaceMessage]);

  const handleCodeExecution = useCallback(() => {
    if (!data || !selectTab) return;
    excutionMutate.mutate({
      codingSpaceTabId: selectTab.tabId,
      language: data.language?.languageName,
      code: content,
      input,
    });
  }, [excutionMutate, data, selectTab, content, input]);

  const handleFinish = () => {
    finishSpaceMutate.mutate(codingSpaceId);
  };

  if (isLoading || !data) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        name={data?.name}
        startTime={data?.startTime}
        isLeader={data?.hostMe}
        buttonLabel='피드백 종료'
        onClick={handleFinish}
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
        selectUser={setSelectTab}
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
        </S.ButtonWrapper>
      </SpaceFooter>
    </S.Container>
  );
}
