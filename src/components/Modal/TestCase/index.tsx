import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TestCaseProps } from '@customTypes/modal';
import Button from '@components/_common/atoms/Button';
import { BsX } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import TestCaseList from '@components/_common/molecules/TestCaseList';
import useUpdateTestCase from '@hooks/space/useUpdateTestCase';
import useDeleteTestCase from '@hooks/space/useDeleteTestCase';
import S from './style';

export default function TestCase({ codingSpaceId, isEditable, testCases, onClose }: TestCaseProps) {
  const [localTestCases, setLocalTestCases] = useState(testCases);
  const { updateTestCaseMutate } = useUpdateTestCase();
  const { deleteTestCaseMutate } = useDeleteTestCase();
  const handleAddTestCase = () => {
    setLocalTestCases((prevList) => [...prevList, { testCaseId: uuidv4(), type: 'CUSTOM', input: '', output: '' }]);
  };

  const handleRemoveTestCase = (id: string) => {
    setLocalTestCases((prevList) => prevList.filter((testCase) => testCase.testCaseId !== id));
    deleteTestCaseMutate.mutate({ codingSpaceId, testCasesId: id });
  };

  const handleInputChange = (id: string, field: 'input' | 'output', value: string) => {
    setLocalTestCases(
      (prevList) => prevList.map((item) => (item.testCaseId === id ? { ...item, [field]: value } : item)),
      // eslint-disable-next-line function-paren-newline
    );
  };

  const handleUpdate = () => {
    const newTestCase = localTestCases.find(({ testCaseId }) => !testCases.some((tc) => tc.testCaseId === testCaseId));

    if (!newTestCase || !newTestCase.input.trim() || !newTestCase.output.trim()) {
      return;
    }

    const formattedTestCase = {
      input: newTestCase.input,
      output: newTestCase.output,
    };

    updateTestCaseMutate.mutate({ codingSpaceId, testCases: formattedTestCase });

    onClose();
  };
  console.log(testCases);
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
