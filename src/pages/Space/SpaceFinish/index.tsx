import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import useGetAllTabs from '@hooks/space/useGetAllTabs';
import MonacoEditor from '@monaco-editor/react';
import UserTabList from '@components/Space/UserTabList';
import { SpaceOutletProps } from '@customTypes/space';
import Loading from '@pages/Loading';
import S from './style';

export default function SpaceFinish() {
  const { codingSpaceId } = useParams();
  const { data, isLoading } = useGetAllTabs(codingSpaceId);
  const outletData = useOutletContext<SpaceOutletProps>();

  const [tab, setTab] = useState(null);
  const [tabCodeMap, setTabCodeMap] = useState<Record<string, string>>({});

  useEffect(() => {
    if (data?.tabs?.length) {
      console.log(data);
      setTab(data.tabs[0]);

      setTabCodeMap(
        data.tabs.reduce(
          (acc, list) => {
            acc[list.tabId] = list.code;
            return acc;
          },
          {} as Record<string, string>,
        ),
      );
    }
  }, [data]);

  const selectUser = (userId: number) => {
    const userTab = data?.tabs.find((tabData) => tabData.user.id === userId);
    console.log(userTab);
    if (userTab) {
      setTab(userTab);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <S.Container>
      <S.CodingContainer>
        <UserTabList
          users={data?.tabs.map((tabData) => tabData.user) || []}
          selectUser={selectUser}
        />
        <S.MonacoContainer>
          <MonacoEditor
            defaultLanguage={outletData?.language.toLocaleLowerCase()}
            theme='vs'
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              readOnly: true,
            }}
            value={Object.prototype.hasOwnProperty.call(tabCodeMap, tab?.tabId) ? tabCodeMap[tab?.tabId] : tab?.code}
          />
        </S.MonacoContainer>
      </S.CodingContainer>
    </S.Container>
  );
}
