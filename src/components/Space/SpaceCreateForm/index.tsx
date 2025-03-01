import InputField from '@components/_common/molecules/InputField';
import InputDropdown from '@components/_common/molecules/InputDropdown';
import { PROGRAMMING_LANGUAGES, SPACE_MEMBER_OPTIONS } from '@constants/constants';
import { useForm } from '@hooks/utils/useForm';
import { useState } from 'react';
import StepMarker from '@components/_common/atoms/StepMarker';
import TextEditor from '@components/_common/atoms/TextEditor';
import Button from '@components/_common/atoms/Button';
import { useToastStore } from '@stores/useToastStore';
import { useNavigate } from 'react-router-dom';
import { CreateSpaceData, SpaceFormData } from '@customTypes/space';
import TimeInputField from '@components/_common/molecules/TimeInputField';
import S from './style';

interface SpaceCreateFormProps {
  initialValues?: SpaceFormData;
  description?: string;
  onSubmit: (data: CreateSpaceData) => void;
}

export default function SpaceCreateForm({ initialValues, description, onSubmit }: SpaceCreateFormProps) {
  const { error } = useToastStore();
  const navigate = useNavigate();
  const [content, setContent] = useState(description || '');
  const { formData, register, registerSelect, hasErrors } = useForm({
    initialValues: initialValues || {
      name: '',
      codingTime: '',
      referenceUrl: '',
      totalUserCount: [],
      languages: [],
    },
  });

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (hasErrors) {
      return error('스페이스 정보를 확인해주세요.');
    }

    const createSpaceData: CreateSpaceData = {
      studyId: 1,
      codingSpace: {
        name: formData.name,
        codingTime: formData.codingTime,
        referenceUrl: formData.referenceUrl,
        totalUserCount: Number(formData.totalUserCount[0]),
        languages: formData.languages.join(','),
        description: content,
      },
      testCases: [],
    };

    onSubmit(createSpaceData);
  };

  return (
    <S.Container onSubmit={(e) => handleSubmit(e)}>
      <TimeInputField />
      <S.Section>
        <S.Header>
          <StepMarker step={1} />
          <S.Description>코딩 스페이스의 정보를 입력해주세요.</S.Description>
        </S.Header>
        <S.InputWrapper>
          <InputDropdown
            label='스페이스 인원'
            description='2명 ~ 4명 이하'
            items={SPACE_MEMBER_OPTIONS}
            {...registerSelect('totalUserCount')}
          />
          <InputDropdown
            label='스페이스 사용 언어'
            description='사용 언어'
            items={PROGRAMMING_LANGUAGES}
            {...registerSelect('languages')}
          />
          <InputField
            label='문제 출처'
            description='링크'
            {...register('referenceUrl')}
          />
        </S.InputWrapper>
      </S.Section>

      <S.Section>
        <S.Header>
          <StepMarker step={2} />
          <S.Description>코딩 스페이스에서 풀어볼 문제를 작성해주세요.</S.Description>
        </S.Header>
        <InputField
          label='문제 제목'
          description='문제 제목을 입력해주세요'
          {...register('name')}
        />
        <TextEditor
          label='문제 내용'
          height='600px'
          value={content}
          onChange={setContent}
        />
      </S.Section>

      <S.ButtonWrapper>
        <Button
          size='lg'
          color='white'
          onClick={() => navigate(-1)}
        >
          취소
        </Button>
        <Button
          size='lg'
          color='primary'
          type='submit'
        >
          생성하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}
