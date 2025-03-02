import { useState } from 'react';
import S from './style';

interface SpaceRunnerProps {
  setInput?: (input: string) => void;
}

export default function SpaceRunner({ setInput }: SpaceRunnerProps) {
  const [tabSelect, setTabselect] = useState<number>(1);

  const [output] = useState<string>('실행 결과가 여기에 표시됩니다.');

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <S.SpaceRunnerContainer>
      <S.TabList>
        <S.Tab
          select={tabSelect === 1}
          onClick={() => setTabselect(1)}
        >
          입력
        </S.Tab>
        <S.Tab
          select={tabSelect === 2}
          onClick={() => setTabselect(2)}
        >
          실행 결과
        </S.Tab>
      </S.TabList>
      {tabSelect === 1 ? (
        <S.Runner
          placeholder='여기에 입력하세요.'
          onChange={onChangeInput}
        />
      ) : (
        <S.RunnerResult>{output}</S.RunnerResult>
      )}
    </S.SpaceRunnerContainer>
  );
}
