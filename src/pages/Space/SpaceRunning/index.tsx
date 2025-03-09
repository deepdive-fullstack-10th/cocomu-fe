// import { useEffect, useState } from 'react';
// import { useOutletContext, useParams } from 'react-router-dom';

// import { useDraggable } from '@hooks/utils/useDraggable';
// import useGetTab from '@hooks/space/useGetTab';

// import { SpaceOutletProps } from '@customTypes/space';

// import MonacoEditor from '@monaco-editor/react';

// import { DEFAULT_CODE } from '@constants/space';

// import ResizablePanel from '@components/Space/ResizablePanel';
// import ExecutionPanel from '@components/Space/ExecutionPanel';
// import UserTabList from '@components/Space/UserTabList';

// import S from './style';

export default function SpaceRunning() {
  // const { codingSpaceId } = useParams();
  // const outletData = useOutletContext<SpaceOutletProps>();

  // const [code, setCode] = useState('');

  // const { data } = useGetTab(codingSpaceId);
  // const [tab, setTab] = useState(data);

  // const { value: height, containerRef, handleMouseDown } = useDraggable({ direction: 'y', initialValue: 70 });

  // useEffect(() => {
  //   if (!data?.tab) return;

  //   if (data) {
  //     setTab(data);
  //   }

  //   outletData?.setTabInfo({
  //     id: tab?.tab?.id,
  //     code: tab?.tab?.code || DEFAULT_CODE[outletData?.language?.toLocaleLowerCase()] || '',
  //   });

  //   setCode(tab?.tab?.code || DEFAULT_CODE[outletData?.language?.toLocaleLowerCase()] || '');
  // }, [outletData, tab?.tab, data]);

  // const handleCodeChange = (value: string) => {
  //   setCode(value);
  //   outletData?.setTabInfo((prev) => ({ ...prev, code: value }));
  // };

  return (
    // <S.Container ref={containerRef}>
    //   <S.CodingContainer height={height}>
    //     <UserTabList users={tab?.tab?.user ? [tab.tab.user] : []} />

    //     <S.MonacoContainer>
    //       <MonacoEditor
    //         defaultLanguage={outletData?.language.toLocaleLowerCase()}
    //         theme='vs'
    //         options={{
    //           minimap: { enabled: false },
    //           scrollBeyondLastLine: false,
    //           automaticLayout: true,
    //         }}
    //         value={code}
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
    <div>SpaceRunning</div>
  );
}
