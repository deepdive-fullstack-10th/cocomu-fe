import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { useDraggable } from '@hooks/utils/useDraggable';
import useGetAllTabs from '@hooks/space/useGetAllTabs';

import { SpaceOutletProps } from '@customTypes/space';

import MonacoEditor from '@monaco-editor/react';

import { DEFAULT_CODE } from '@constants/space';

import Tab from '@components/_common/atoms/Tab';
import ResizablePanel from '@components/Space/ResizablePanel';
import SpaceRunner from '../SpaceRunner';

import S from './style';

export default function SpaceRunning() {
  const outletData = useOutletContext<SpaceOutletProps>();
  const { data } = useGetAllTabs(outletData?.id);

  const tabId = data?.tab?.id;
  const tabCode = data?.tab?.code || DEFAULT_CODE[outletData?.language?.toLowerCase()] || '';

  const [code, setCode] = useState<string>(tabCode);

  const { value: height, containerRef, handleMouseDown } = useDraggable({ direction: 'y', initialValue: 70 });

  useEffect(() => {
    if (tabId) {
      outletData?.setTabInfo((prev) => ({ ...prev, id: tabId }));
    }
  }, [tabId]);

  const onChangeCode = (value) => {
    setCode(value);
    outletData?.setTabInfo((prev) => ({ ...prev, code: value }));
  };

  return (
    <S.Container ref={containerRef}>
      <S.CodingContainer height={height}>
        <S.TabContainer>
          <Tab
            color='primary'
            name={data?.tab.user.nickName}
          />
        </S.TabContainer>
        <S.MonacoContainer>
          <MonacoEditor
            defaultLanguage={outletData?.language.toLocaleLowerCase()}
            theme='vs'
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
            value={code}
            onChange={onChangeCode}
          />
        </S.MonacoContainer>
      </S.CodingContainer>

      <ResizablePanel
        direction='x'
        onMouseDown={handleMouseDown}
      />

      <S.RunnerContainer>
        <SpaceRunner setInput={outletData?.setInput} />
      </S.RunnerContainer>
    </S.Container>
  );
}
