import { useState } from 'react';
import S from './style';

export default function SpaceRunner() {
  const [tabSelect, setTabselect] = useState<number>(1);
  const [output] = useState<string>('실행 결과가 여기에 표시됩니다.');

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
      {tabSelect === 1 ? <S.Runner placeholder='여기에 입력하세요.' /> : <S.RunnerResult>{output}</S.RunnerResult>}
    </S.SpaceRunnerContainer>
  );
}
