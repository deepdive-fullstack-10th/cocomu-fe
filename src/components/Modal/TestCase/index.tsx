import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TestcaseProps } from '@customTypes/modal';
import Button from '@components/_common/atoms/Button';
import IconButtton from '@components/_common/atoms/IconButton';
import { BsPlus, BsX } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import TestcaseItem from './TestcaseItem';
import S from './style';

export default function Testcase({ status, onClose, testcases }: TestcaseProps) {
  const [testCaseList, setTestcaseList] = useState(testcases);

  const handleAddTestcase = () => {
    setTestcaseList((prevList) => [...prevList, { id: uuidv4(), type: 'CUSTOM', input: '', output: '' }]);
  };

  const handleRemoveTestcase = (id: string | number) => {
    setTestcaseList((prevList) => prevList.filter((testcase) => testcase.id !== id));
  };

  const handleInputChange = (id: string | number, field: 'input' | 'output', newValue: string) => {
    setTestcaseList((prevTestCases) =>
      prevTestCases.map((testcase) => {
        if (testcase.id !== id) return testcase;
        return { ...testcase, [field]: newValue };
      }),
    );
  };

  const onSubmit = () => {
    console.log(testCaseList);
  };
  return (
    <S.TestcaseContainer>
      <S.TestcaseHeaderRight>
        <Icon
          size='md'
          icon={<BsX />}
          onClick={onClose}
        />
      </S.TestcaseHeaderRight>
      <S.TestcaseHeaderLeft>테스트 케이스</S.TestcaseHeaderLeft>
      <S.TestcaseItemContainer>
        {testCaseList.map((testcase) => (
          <TestcaseItem
            handleInputChange={handleInputChange}
            handleRemoveTestcase={handleRemoveTestcase}
            edit={testcase.type === 'CUSTOM' && status === 'CUSTOM'}
            disabled={status === 'DEFAULT' || testcase.type === 'BASE'}
            testcase={testcase}
          />
        ))}
      </S.TestcaseItemContainer>
      {status === 'CUSTOM' && (
        <IconButtton
          align='center'
          icon={<BsPlus />}
          onClick={handleAddTestcase}
        >
          추가하기
        </IconButtton>
      )}
      <S.TestcaseFooter status={status}>
        <Button
          size='lg'
          color='white'
          onClick={onClose}
        >
          닫기
        </Button>
        {status === 'CUSTOM' && (
          <Button
            size='lg'
            color='primary'
            onClick={onSubmit}
          >
            수정하기
          </Button>
        )}
      </S.TestcaseFooter>
    </S.TestcaseContainer>
  );
}
