import { useState } from 'react';
import { RUNNER_TAB } from '@constants/space';
import S from './style';

interface ExecutionPanelProps {
  setInput?: (input: string) => void;
  output?: string;
}

export default function ExecutionPanel({ setInput, output }: ExecutionPanelProps) {
  const [selectedTab, setSelectedTab] = useState<keyof typeof RUNNER_TAB>('INPUT');

  return (
    <S.Container>
      <S.TabList>
        {Object.entries(RUNNER_TAB).map(([key, label]) => (
          <S.Tab
            key={key}
            select={selectedTab === key}
            onClick={() => setSelectedTab(key as keyof typeof RUNNER_TAB)}
          >
            {label}
          </S.Tab>
        ))}
      </S.TabList>

      {selectedTab === 'INPUT' ? (
        <S.Runner
          placeholder='여기에 입력하세요.'
          onChange={(e) => setInput?.(e.target.value)}
        />
      ) : (
        <S.RunnerResult
          placeholder='실행 결과가 여기에 표시됩니다.'
          disabled
        >
          {output}
        </S.RunnerResult>
      )}
    </S.Container>
  );
}
