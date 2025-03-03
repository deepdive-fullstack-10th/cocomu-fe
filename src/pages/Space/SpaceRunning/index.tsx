import { useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { useDraggable } from '@hooks/utils/useDraggable';
import useGetTab from '@hooks/space/useGetTab';

import { SpaceOutletProps } from '@customTypes/space';

import MonacoEditor from '@monaco-editor/react';

import { DEFAULT_CODE } from '@constants/space';

import ResizablePanel from '@components/Space/ResizablePanel';
import ExecutionPanel from '@components/Space/ExecutionPanel';
import UserTabList from '@components/Space/UserTabList';

import Loading from '@pages/Loading';

import S from './style';

export default function SpaceRunning() {
  const { codingSpaceId } = useParams();
  const outletData = useOutletContext<SpaceOutletProps>();
  const { data, isLoading } = useGetTab(codingSpaceId);

  const tabId = data?.tab?.id || '';
  const tabCode = data?.tab?.code || DEFAULT_CODE[outletData?.language?.toLowerCase()] || '';

  const [code, setCode] = useState(tabCode);

  const { value: height, containerRef, handleMouseDown } = useDraggable({ direction: 'y', initialValue: 70 });

  const handleCodeChange = (value: string) => {
    setCode(value);
    outletData?.setTabInfo((prev) => ({ ...prev, id: tabId, code: value }));
  };

  if (isLoading) return <Loading />;

  return (
    <S.Container ref={containerRef}>
      <S.CodingContainer height={height}>
        <UserTabList users={data?.tab?.user ? [data.tab.user] : []} />

        <S.MonacoContainer>
          <MonacoEditor
            defaultLanguage={outletData?.language.toLowerCase()}
            theme='vs'
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
            value={code}
            onChange={handleCodeChange}
          />
        </S.MonacoContainer>
      </S.CodingContainer>

      <ResizablePanel
        direction='x'
        onMouseDown={handleMouseDown}
      />

      <ExecutionPanel setInput={outletData?.setInput} />
    </S.Container>
  );
}
