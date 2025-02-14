import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { TestcaseProps } from '@customTypes/modal';

import Button from '@components/_common/atoms/Button';

import IconButtton from '@components/_common/atoms/IconButton';

import { BsPlus, BsDash, BsX } from 'react-icons/bs';

import Icon from '@components/_common/atoms/Icon';

import S from './style';

export default function Testcase({ status, onClose, testcases }: TestcaseProps) {
  const defaultTestcase = testcases.filter((testcase) => testcase.type === 'BASE');

  const [customTestcase, setCustomTestcase] = useState(testcases.filter((testcase) => testcase.type === 'CUSTOM'));

  const [newTestcaseList, setNewTestcaseList] = useState<{ id: string | number; input: string; output: string }[]>([]);

  const handleAddTestcase = () => {
    setNewTestcaseList((prevList) => [...prevList, { id: uuidv4(), input: '', output: '' }]);
  };

  const handleRemoveTestcase = (id: string | number) => {
    setNewTestcaseList((prevList) => prevList.filter((testcase) => testcase.id !== id));
  };

  const handleRemoveCustomTestcase = (id: string | number) => {
    setCustomTestcase((prevList) => prevList.filter((testcase) => testcase.id !== id));
  };

  const handleInputChange = (id: string | number, field: 'input' | 'output', value: string) => {
    setNewTestcaseList((prevList) => prevList.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const onSubmit = () => {
    const combinedTestcaseList = defaultTestcase.concat(customTestcase, newTestcaseList);

    console.log(combinedTestcaseList);
  };

  return (
    <S.TestcaseContainer>
      <S.TestcaseHeader>
        테스트 케이스
        <button
          type='button'
          onClick={onClose}
        >
          <Icon
            size='md'
            icon={<BsX />}
          />
        </button>
      </S.TestcaseHeader>

      {defaultTestcase.map((testcase) => (
        <S.TestcaseItem key={testcase.id}>
          <S.Input
            defaultValue={testcase.input}
            readOnly
          />

          <S.Output
            defaultValue={testcase.output}
            readOnly
          />
        </S.TestcaseItem>
      ))}

      {customTestcase.map((testcase) => (
        <S.TestcaseItem key={testcase.id}>
          {status === 'CUSTOM' && (
            <S.RemoveButton onClick={() => handleRemoveCustomTestcase(testcase.id)}>
              <Icon
                size='md'
                icon={<BsDash />}
              />
            </S.RemoveButton>
          )}

          <S.Input
            defaultValue={testcase.input}
            remove={status === 'CUSTOM'}
          />

          <S.Output defaultValue={testcase.output} />
        </S.TestcaseItem>
      ))}

      {newTestcaseList.map((testcase) => (
        <S.TestcaseItem key={testcase.id}>
          <S.RemoveButton onClick={() => handleRemoveTestcase(testcase.id)}>
            <Icon
              size='md'
              icon={<BsDash />}
            />
          </S.RemoveButton>

          <S.Input
            value={testcase.input}
            onChange={(e) => handleInputChange(testcase.id, 'input', e.target.value)}
            remove
          />

          <S.Output
            value={testcase.output}
            onChange={(e) => handleInputChange(testcase.id, 'output', e.target.value)}
          />
        </S.TestcaseItem>
      ))}

      {status === 'CUSTOM' && (
        <S.TestcaseAddButton
          type='button'
          onClick={handleAddTestcase}
        >
          <IconButtton
            align='center'
            icon={<BsPlus />}
          >
            추가하기
          </IconButtton>
        </S.TestcaseAddButton>
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
