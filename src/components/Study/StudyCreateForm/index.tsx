import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useToastStore } from '@stores/useToastStore';
import { useForm } from '@hooks/utils/useForm';

import {
  validateJudges,
  validateLanguages,
  validateName,
  validatePassword,
  validateTotalUserCount,
} from '@utils/validators/studyValidators';

import { JUDGES, PROGRAMMING_LANGUAGES, ACCESS_STATUS } from '@constants/constants';

import { StudyFormData } from '@customTypes/study';

import InputField from '@components/_common/molecules/InputField';
import InputDropdown from '@components/_common/molecules/InputDropdown';
import RadioField from '@components/_common/molecules/RadioField';
import StepHeader from '@components/_common/molecules/StepHeader';
import TextEditor from '@components/_common/atoms/TextEditor';
import Button from '@components/_common/atoms/Button';

import S from './style';

interface StudyCreateFormProps {
  initialValues?: StudyFormData;
  description?: string;
  selectedStatus: (typeof ACCESS_STATUS)[number];
  setSelectedStatus: Dispatch<SetStateAction<(typeof ACCESS_STATUS)[number]>>;
  onSubmit: (data: StudyFormData) => void;
}

export default function StudyCreateForm({
  initialValues,
  description,
  selectedStatus,
  setSelectedStatus,
  onSubmit,
}: StudyCreateFormProps) {
  const { error } = useToastStore();
  const navigate = useNavigate();
  const [content, setContent] = useState(description || '');

  const { formData, register, registerSelect, hasErrors } = useForm({
    initialValues: initialValues || {
      name: '',
      password: '',
      totalUserCount: '',
      languages: [],
      workbooks: [],
    },
  });

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (hasErrors) {
      return error('스터디 정보를 확인해주세요.');
    }
    onSubmit({ ...formData, description: content });
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Section>
        <StepHeader
          step={1}
          description='스터디 정보를 입력해주세요.'
        />
        <RadioField
          name='access_status'
          options={ACCESS_STATUS}
          selectedValue={selectedStatus}
          onChange={setSelectedStatus}
        />
        <S.InputWrapper>
          <InputField
            type='password'
            label='암호'
            disabled={selectedStatus === ACCESS_STATUS[0]}
            {...register('password', { validate: { onBlur: validatePassword.onBlur } })}
          />
          <InputField
            label='모집 인원'
            {...register('totalUserCount', {
              validate: { onBlur: validateTotalUserCount.onBlur },
              placeholder: '2명 ~ 50명 이하',
            })}
          />
          <InputDropdown
            label='스터디 사용 언어'
            description='사용 언어'
            items={PROGRAMMING_LANGUAGES}
            isMultiSelect
            {...registerSelect('languages', { validate: validateLanguages })}
          />
          <InputDropdown
            label='스터디 사용 플랫폼'
            description='백준, 프로그래머스 ...'
            items={JUDGES}
            isMultiSelect
            {...registerSelect('workbooks', { validate: validateJudges })}
          />
        </S.InputWrapper>
      </S.Section>

      <S.Section>
        <StepHeader
          step={2}
          description='스터디에 대해 소개해주세요.'
        />
        <InputField
          label='스터디 이름'
          {...register('name', {
            validate: { onBlur: validateName.onBlur },
            placeholder: '스터디 이름을 입력해주세요',
          })}
        />
        <TextEditor
          label='스터디 소개'
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
