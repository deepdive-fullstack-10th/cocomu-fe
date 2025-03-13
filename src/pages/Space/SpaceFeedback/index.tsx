import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import useYorkie from '@hooks/utils/useYorkie';
import { Client } from '@stomp/stompjs';

import useGetFeedbackPage from '@hooks/space/useGetFeedbackPage';
import useExcution from '@hooks/space/useExcution';
import useFinishSpace from '@hooks/space/useFinishSpace';
import useSaveTabCode from '@hooks/space/useCodesave';
import { useToastStore } from '@stores/useToastStore';

import Button from '@components/_common/atoms/Button';
import CodingWorkspace from '@components/Space/CodingWorkspace';
import SpaceFooter from '@components/Space/SpaceFooter';
import SpaceNavbar from '@components/Space/SpaceNavbar';
import Loading from '@pages/Loading';
import { ActiveTab } from '@customTypes/space';
import { STOMP_ENDPOINTS } from '@constants/api';
import { ROUTES } from '@constants/path';

import S from './style';

interface OutletContextType {
  client: Client | null;
}

export default function SpaceFeedBack() {
  const { client } = useOutletContext<OutletContextType>();
  const navigate = useNavigate();
  const { alert } = useToastStore();
  const { studyId, codingSpaceId } = useParams<{ studyId: string; codingSpaceId: string }>();

  const [users, setUsers] = useState<ActiveTab[]>([]);
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>();
  const [selectTab, setSelectTab] = useState<ActiveTab | null>(null);
  const [tabMessage, setTabMessage] = useState<string | null>(null);
  const [spaceMessage, setSpaceMessage] = useState<string | null>(null);
  const [finishClick, setFinishClick] = useState<boolean>(false);

  const { excutionMutate } = useExcution();
  const { data, isLoading, refetch } = useGetFeedbackPage(codingSpaceId);
  const { finishSpaceMutate } = useFinishSpace(Number(studyId), Number(codingSpaceId));
  const { saveTabCodeMutate } = useSaveTabCode();
  const { content, updateContent } = useYorkie(selectTab?.documentKey ?? '');

  const hasRequested = useRef(false);
  const finishRef = useRef(false);

  /** ✅ 피드백 종료 (호스트 & 일반 사용자) */
  const handleFinish = useCallback(() => {
    if (!data || !data.activeTabs) return;
    const activeMyTabs = data.activeTabs.filter((tab) => tab.myTab);

    if (activeMyTabs.length === 0) return;

    setSelectTab(activeMyTabs[0]);
    setFinishClick(true);
  }, [data]);

  /** ✅ 코드 저장 후 종료 API 호출 or 페이지 이동 */
  const saveAndFinish = useCallback(
    (updatedContent: string) => {
      if (!finishClick || hasRequested.current) return;

      hasRequested.current = true;

      saveTabCodeMutate.mutate(
        {
          codingSpaceId: String(codingSpaceId),
          code: { code: updatedContent },
        },
        {
          onSuccess: () => {
            if (data?.hostMe) {
              finishRef.current = true;
            } else {
              navigate(
                ROUTES.SPACE.FINISH({
                  studyId: Number(studyId),
                  codingSpaceId: Number(codingSpaceId),
                }),
              );
            }
          },
        },
      );
    },
    [finishClick, saveTabCodeMutate, codingSpaceId, data?.hostMe, navigate, studyId],
  );

  /** ✅ WebSocket 메시지 구독 (함수 없이 직접 실행) */
  useEffect(() => {
    if (!data || !client || !client.connected || !selectTab) return;
    console.log(data);
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

  /** ✅ 코드 실행 */
  const handleCodeExecution = useCallback(() => {
    if (!data || !selectTab) return;
    excutionMutate.mutate({
      codingSpaceTabId: selectTab.tabId,
      language: data.language?.languageName,
      code: content,
      input,
    });
  }, [excutionMutate, data, selectTab, content, input]);

  /** ✅ WebSocket 메시지 처리 */
  useEffect(() => {
    if (!spaceMessage) return;
    const object = JSON.parse(spaceMessage);
    console.log(object);
    if (['USER_ENTER', 'USER_LEAVE'].includes(object.type)) {
      refetch();
    }

    if (object.type === 'STUDY_FINISH' && !data?.hostMe) {
      handleFinish();
    }

    if (object.type === 'DELETE_TEST_CASE' || object.type === 'ADD_TEST_CASE') {
      refetch();
      alert(object.type === 'DELETE_TEST_CASE' ? '테스트 케이스가 삭제되었습니다.' : '테스트 케이스가 추가되었습니다.');
    }
  }, [spaceMessage, data?.hostMe, handleFinish, refetch, alert]);

  /** ✅ 피드백 페이지 데이터 갱신 */
  useEffect(() => {
    if (!data?.activeTabs) return;
    setUsers(data.activeTabs);
    setSelectTab(data.activeTabs[0]);
  }, [data]);

  /** ✅ 탭 메시지 처리 */
  useEffect(() => {
    if (!tabMessage) return;
    const object = JSON.parse(tabMessage);
    console.log(object);
    if (['SUCCESS', 'RUNNING', 'TIMEOUT_ERROR'].includes(object.type)) {
      setOutput(object.data.output);
    }
  }, [tabMessage]);

  /** ✅ 종료 로직 실행 */
  useEffect(() => {
    if (!selectTab?.documentKey) return;
    if (finishRef.current) {
      finishRef.current = false;
      finishSpaceMutate.mutate(codingSpaceId);
    }
    saveAndFinish(content);
  }, [selectTab, content, saveAndFinish, codingSpaceId, finishSpaceMutate]);

  if (isLoading || !data) return <Loading />;

  return (
    <S.Container>
      <SpaceNavbar
        studyId={Number(studyId)}
        name={data?.name}
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
