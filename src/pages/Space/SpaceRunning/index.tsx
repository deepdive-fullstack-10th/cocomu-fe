import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useDraggable } from '@hooks/utils/useDraggable';
import { SpaceOutletProps } from '@customTypes/space';
import { useTabData } from '@hooks/useSpace';
import Tab from '@components/_common/atoms/Tab';
import MonacoEditor from '@monaco-editor/react';
import { DEFAULT_CODE } from '@constants/constants';
import SpaceRunner from '../SpaceRunner';
import S from './style';

export default function SpaceStart() {
  const outletData = useOutletContext<SpaceOutletProps>();
  const { data } = useTabData({ spaceId: outletData?.id });

  const [code, setCode] = useState<string>(data?.tab?.code);

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
    outletData?.setTabInfo((prev) => ({ ...prev, id: data?.tab?.id }));
    if (data?.tab?.code === '' || data?.tab?.code === undefined) {
      switch (outletData?.language?.toLocaleLowerCase()) {
        case 'python':
          setCode(DEFAULT_CODE.python);
          break;
        case 'java':
          setCode(DEFAULT_CODE.java);
          break;
        case 'javascript':
          setCode(DEFAULT_CODE.javascript);
          break;
        case 'c':
          setCode(DEFAULT_CODE.c);
          break;
        default:
          setCode('');
          break;
      }
    } else {
      setCode(data?.tab?.code);
    }
  }, [outletData, data]);

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
      <S.ResizablePanel>
        <S.ResizeButton onMouseDown={handleMouseDown} />
      </S.ResizablePanel>
      <S.RunnerContainer>
        <SpaceRunner setInput={outletData?.setInput} />
      </S.RunnerContainer>
    </S.Container>
  );
}
