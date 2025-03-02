import { BsPlus } from 'react-icons/bs';
import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import { FOOTER_ACTIONS } from '@constants/space';
import { TestCaseData } from '@customTypes/space';
import { useModalStore } from '@stores/useModalStore';
import S from './style';

interface SpaceFooterProps {
  status: keyof typeof FOOTER_ACTIONS;
  testCases: TestCaseData;
  onCodeRun?: () => void;
  onCodeSubmit?: () => void;
}

export default function SpaceFooter({ status, testCases, onCodeRun, onCodeSubmit }: SpaceFooterProps) {
  const { open } = useModalStore();
  const { testCaseLabel, isTestCaseEditable, showRun, showSubmit } = FOOTER_ACTIONS[status];

  const handleOpenTestCase = () => {
    open('testCase', {
      isEditable: isTestCaseEditable,
      testCases,
    });
  };

  return (
    <S.Container>
      <S.TestCaseButton>
        <IconButton
          content={testCaseLabel}
          align='center'
          shape='round'
          onClick={handleOpenTestCase}
        >
          <BsPlus />
        </IconButton>
      </S.TestCaseButton>

      {showRun && (
        <S.ButtonWrapper>
          <Button
            size='md'
            color='analogous'
            onClick={onCodeRun}
          >
            코드 실행
          </Button>
          {showSubmit && (
            <Button
              size='md'
              color='primary'
              onClick={onCodeSubmit}
            >
              제출하기
            </Button>
          )}
        </S.ButtonWrapper>
      )}
    </S.Container>
  );
}
