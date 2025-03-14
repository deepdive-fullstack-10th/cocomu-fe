import SubmissionItem from '@components/Space/SubmissionItem';

import { CodeSubmit } from '@customTypes/space';
import S from './style';

interface SubmissionPanelProps {
  codeSubmit: CodeSubmit[];
  testCaseLegnth: number;
}

export default function SubmissionPanel({ codeSubmit, testCaseLegnth }: SubmissionPanelProps) {
  if (!codeSubmit || codeSubmit.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.HederResultLeft>
          <div>제출 결과</div>
          <div>{`${codeSubmit.length}/${testCaseLegnth}`}</div>
        </S.HederResultLeft>
        <S.HederResultRight status={codeSubmit[codeSubmit.length - 1].type === 'CORRECT'}>
          {codeSubmit[codeSubmit.length - 1].type === 'CORRECT' ? '성공' : '실패'}
        </S.HederResultRight>
      </S.Header>
      {codeSubmit.map((item, index) => (
        <SubmissionItem
          key={item.data.testCaseId}
          item={item}
          index={index}
        />
      ))}
    </S.Container>
  );
}
