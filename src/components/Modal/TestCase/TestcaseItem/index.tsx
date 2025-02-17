import { BsDash } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import { TestcaseItem } from '@customTypes/modal';
import S from './style';

interface TestcaseItemProps {
  testcase?: TestcaseItem;
  edit?: boolean;
  disabled?: boolean;
  handleRemoveTestcase?: (id: string | number) => void;
  handleInputChange?: (id: string | number, field: 'input' | 'output', newValue: string) => void;
}

export default function TestcaseItem({
  testcase,
  edit,
  handleRemoveTestcase,
  handleInputChange,
  disabled,
}: TestcaseItemProps) {
  if (!testcase) {
    return null;
  }
  return (
    <S.TestcaseItem key={testcase.id}>
      {edit && (
        <S.RemoveButton onClick={() => handleRemoveTestcase(testcase.id)}>
          <Icon
            size='md'
            icon={<BsDash />}
          />
        </S.RemoveButton>
      )}
      <S.Input
        value={testcase.input}
        onChange={(e) => handleInputChange(testcase.id, 'input', e.target.value)}
        disabled={disabled}
        remove={edit}
      />
      <S.Output
        value={testcase.output}
        onChange={(e) => handleInputChange(testcase.id, 'output', e.target.value)}
        disabled={disabled}
      />
    </S.TestcaseItem>
  );
}
