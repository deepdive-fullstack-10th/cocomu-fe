import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TestCaseProps } from '@customTypes/modal';
import Button from '@components/_common/atoms/Button';
import IconButtton from '@components/_common/atoms/IconButton';
import { BsPlus, BsX } from 'react-icons/bs';
import Icon from '@components/_common/atoms/Icon';
import TestCaseItem from '../TestCaseItem';
import S from './style';

export default function TestCaseModal({ status, testCases, onClose, onSubmit, setTestCaseList }: TestCaseProps) {
  const [localTestCases, setLocalTestCases] = useState(testCases);

  useEffect(() => {
    setLocalTestCases(testCases);
  }, [testCases]);

  const handleAddTestCase = () => {
    setLocalTestCases((prevList) => [...prevList, { id: uuidv4(), type: 'CUSTOM', input: '', output: '' }]);
  };

  const handleRemoveTestCase = (id: string | number) => {
    setLocalTestCases((prevList) => prevList.filter((testCase) => testCase.id !== id));
  };

  const handleInputChange = (id: string | number, field: 'input' | 'output', value: string) => {
    setLocalTestCases((prevList) => prevList.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const onSubmitTestCaseUpdate = async () => {
    setTestCaseList(localTestCases);
    onSubmit();
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
        <S.Description>테스트 케이스</S.Description>
        <S.ItemWrapper>
          {localTestCases.map((testCase) => (
            <TestCaseItem
              handleInputChange={handleInputChange}
              handleRemoveTestCase={handleRemoveTestCase}
              edit={testCase.type === 'CUSTOM' && status === 'CUSTOM'}
              disabled={status === 'DEFAULT' || testCase.type === 'BASE'}
              testCase={testCase}
              key={testCase.id}
            />
          ))}
          {status === 'CUSTOM' && (
            <IconButtton
              align='center'
              content='추가하기'
              onClick={handleAddTestCase}
            >
              <BsPlus />
            </IconButtton>
          )}
        </S.ItemWrapper>
      </S.Body>

      <S.Footer>
        <Button
          size='sm'
          color='white'
          onClick={onClose}
        >
          닫기
        </Button>
        {status === 'CUSTOM' && (
          <Button
            size='sm'
            color='primary'
            onClick={onSubmitTestCaseUpdate}
          >
            수정하기
          </Button>
        )}
      </S.Footer>
    </S.Container>
  );
}
