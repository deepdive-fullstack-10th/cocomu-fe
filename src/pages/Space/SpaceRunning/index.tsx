import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useDraggable } from '@hooks/utils/useDraggable';
import { SpaceDetail } from '@customTypes/space';
import { useTabData } from '@hooks/useSpace';
import Tab from '@components/_common/atoms/Tab';
import MonacoEditor from '@monaco-editor/react';
import SpaceRunner from '../SpaceRunner';

import S from './style';

export default function SpaceStart() {
  const spaceData = useOutletContext<SpaceDetail>();
  const { spaceId } = useParams();
  const { data } = useTabData({ spaceId });
  const [language, setLanguage] = useState<string>('');

  const {
    value: height,
    containerRef,
    handleMouseDown,
  } = useDraggable({
    direction: 'y',
    initialValue: 70,
    min: 10,
    max: 90,
    threshold: 5,
  });

  useEffect(() => {
    setLanguage(spaceData?.language.toLocaleLowerCase());
  }, [spaceData]);

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
            defaultLanguage={language}
            theme='vs'
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </S.MonacoContainer>
      </S.CodingContainer>
      <S.ResizablePanel>
        <S.ResizeButton onMouseDown={handleMouseDown} />
      </S.ResizablePanel>
      <S.RunnerContainer>
        <SpaceRunner />
      </S.RunnerContainer>
    </S.Container>
  );
}
