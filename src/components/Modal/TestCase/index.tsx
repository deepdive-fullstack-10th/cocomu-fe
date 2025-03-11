import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TestCaseProps } from '@customTypes/modal';
import Button from '@components/_common/atoms/Button';
import { BsX } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import TestCaseList from '@components/_common/molecules/TestCaseList';
import useUpdateTestCase from '@hooks/space/useUpdateTestCase';
import S from './style';

export default function TestCase({ codingSpaceId, isEditable, testCases, onClose }: TestCaseProps) {
  const [localTestCases, setLocalTestCases] = useState(testCases);
  const { updateTestCaseMutate } = useUpdateTestCase();

  const handleAddTestCase = () => {
    setLocalTestCases((prevList) => [
      ...prevList,
      { testCaseId: uuidv4(), type: 'CUSTOM', input: '', output: '' }, // ✅ testCaseId 유지
    ]);
  };

  const handleRemoveTestCase = (id: string | number) => {
    setLocalTestCases((prevList) => prevList.filter((testCase) => testCase.testCaseId !== id)); // ✅ testCaseId 사용
  };

  const handleInputChange = (id: string | number, field: 'input' | 'output', value: string) => {
    setLocalTestCases((prevList) =>
      prevList.map(
        (item) => (item.testCaseId === id ? { ...item, [field]: value } : item), // ✅ testCaseId 사용
      ),
    );
  };

  const handleUpdate = () => {
    const formattedTestCases = localTestCases.map(({ input, output }) => ({ input, output }));
    updateTestCaseMutate.mutate({ codingSpaceId, testCases: formattedTestCases });

    onClose();
  };

  return (
    <S.Container>
      <S.Header>
        <Icon
          size='md'
          color='950'
          onClick={onClose}
        >
          <BsX />
        </Icon>
      </S.Header>

      <S.Body>
        <TestCaseList
          testCases={localTestCases}
          handleInputChange={handleInputChange}
          handleRemoveTestCase={handleRemoveTestCase}
          handleAddTestCase={handleAddTestCase}
          isEditable={isEditable}
        />
      </S.Body>

      <S.Footer>
        <Button
          size='sm'
          color='white'
          onClick={onClose}
        >
          닫기
        </Button>
        {isEditable && (
          <Button
            size='sm'
            color='primary'
            onClick={handleUpdate}
          >
            수정하기
          </Button>
        )}
      </S.Footer>
    </S.Container>
  );
}
