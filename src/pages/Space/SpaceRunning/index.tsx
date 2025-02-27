import { useDraggable } from '@hooks/useDraggable';
import Tab from '@components/_common/atoms/Tab';
// import * as monaco from 'monaco-editor';
import MonacoEditor from '@monaco-editor/react';
import SpaceRunner from '../SpaceRunner';
import S from './style';

export default function SpaceStart() {
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
  return (
    <S.Container ref={containerRef}>
      <S.CodingContainer height={height}>
        <S.TabContainer>
          <Tab
            color='primary'
            name='참여자'
          />
        </S.TabContainer>
        <MonacoEditor
          defaultLanguage='javascript'
          theme='vs-dark'
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
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
