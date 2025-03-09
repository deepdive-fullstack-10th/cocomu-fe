// import { useEffect, useState } from 'react';
// import { useOutletContext, useParams } from 'react-router-dom';

// import { useDraggable } from '@hooks/utils/useDraggable';
// import useGetAllTabs from '@hooks/space/useGetAllTabs';

// import { SpaceOutletProps } from '@customTypes/space';

// import MonacoEditor from '@monaco-editor/react';

// import ResizablePanel from '@components/Space/ResizablePanel';
// import ExecutionPanel from '@components/Space/ExecutionPanel';
// import UserTabList from '@components/Space/UserTabList';
// import Loading from '@pages/Loading';

// import S from './style';

export default function SpaceFeedBack() {
  // const { codingSpaceId } = useParams();
  // const outletData = useOutletContext<SpaceOutletProps>();
  // const { data, isLoading } = useGetAllTabs(codingSpaceId);

  // const [tab, setTab] = useState(null);
  // const [tabCodeMap, setTabCodeMap] = useState<Record<string, string>>({});

  // const { value: height, containerRef, handleMouseDown } = useDraggable({ direction: 'y', initialValue: 70 });

  // useEffect(() => {
  //   if (data?.tabs?.length) {
  //     setTab(data.tabs[0]);

  //     setTabCodeMap(
  //       data.tabs.reduce(
  //         (acc, list) => {
  //           acc[list.tabId] = list.code;
  //           return acc;
  //         },
  //         {} as Record<string, string>,
  //       ),
  //     );
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (tabCodeMap) {
  //     const tabList = Object.entries(tabCodeMap).map(([id, code]) => ({
  //       id,
  //       code,
  //     }));
  //     outletData?.setCompleteTabs(tabList);
  //   }
  // }, [outletData, tabCodeMap]);

  // useEffect(() => {
  //   if (tab) {
  //     outletData?.setTabInfo({
  //       id: tab.tabId,
  //       code: Object.prototype.hasOwnProperty.call(tabCodeMap, tab?.tabId) ? tabCodeMap[tab?.tabId] : tab?.code,
  //     });
  //   }
  // }, [tab, tabCodeMap, outletData]);

  // const handleCodeChange = (value: string) => {
  //   if (tab) {
  //     setTabCodeMap((prev) => ({
  //       ...prev,
  //       [tab.tabId]: value,
  //     }));
  //   }
  //   outletData?.setTabInfo((prev) => ({ ...prev, code: value }));
  // };

  // const selectUser = (userId: number) => {
  //   const userTab = data?.tabs.find((tabData) => tabData.user.id === userId);

  //   if (userTab) {
  //     setTab(userTab);
  //   }
  // };

  // if (isLoading) return <Loading />;

  return (
    // <S.Container ref={containerRef}>
    //   <S.CodingContainer height={height}>
    //     <UserTabList
    //       users={data?.tabs.map((tabData) => tabData.user) || []}
    //       selectUser={selectUser}
    //     />
    //     <S.MonacoContainer>
    //       <MonacoEditor
    //         defaultLanguage={outletData?.language.toLocaleLowerCase()}
    //         theme='vs'
    //         options={{
    //           minimap: { enabled: false },
    //           scrollBeyondLastLine: false,
    //           automaticLayout: true,
    //         }}
    //         value={Object.prototype.hasOwnProperty.call(tabCodeMap, tab?.tabId) ? tabCodeMap[tab?.tabId] : tab?.code}
    //         onChange={handleCodeChange}
    //       />
    //     </S.MonacoContainer>
    //   </S.CodingContainer>
    //   <ResizablePanel
    //     direction='x'
    //     onMouseDown={handleMouseDown}
    //   />
    //   <ExecutionPanel setInput={outletData?.setInputData} />
    // </S.Container>
    <div>SpaceFeedback</div>
  );
}
