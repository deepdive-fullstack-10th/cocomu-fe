import { BsDash } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import { TestCaseItem } from '@customTypes/space';
import S from './style';

interface TestCaseItemProps {
  testCase?: TestCaseItem;
  edit?: boolean;
  disabled?: boolean;
  handleRemoveTestCase?: (id: string | number) => void;
  handleInputChange?: (id: string | number, field: 'input' | 'output', newValue: string) => void;
}

export default function TestcaseItem({
  testCase,
  edit,
  handleRemoveTestCase,
  handleInputChange,
  disabled,
}: TestCaseItemProps) {
  return (
    <S.TestCaseItem>
      {edit && (
        <S.RemoveButton>
          <Icon
            size='md'
            color='950'
            onClick={() => handleRemoveTestCase(testCase.id)}
          >
            <BsDash />
          </Icon>
        </S.RemoveButton>
      )}
      <S.Input
        value={testCase.input}
        onChange={(e) => handleInputChange(testCase.id, 'input', e.target.value)}
        disabled={disabled}
        remove={edit}
      />
      <S.Output
        value={testCase.output}
        onChange={(e) => handleInputChange(testCase.id, 'output', e.target.value)}
        disabled={disabled}
      />
    </S.TestCaseItem>
  );
}
