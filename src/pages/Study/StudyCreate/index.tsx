import InputField from '@components/_common/molecules/InputField';
import InputDropdown from '@components/_common/molecules/InputDropdown';
import { JUDGES, PROGRAMMING_LANGUAGES, RADIO_ACCESS_STATUS } from '@constants/constants';
import RadioField from '@components/_common/molecules/RadioField';
import { useForm } from '@hooks/utils/useForm';
import { useState } from 'react';
import S from './style';

export default function StudyCreate() {
  const [selectedValue, setSelectedValue] = useState<(typeof RADIO_ACCESS_STATUS)[number]>(RADIO_ACCESS_STATUS[0]);
  const { formData, register, registerSelect, handleSubmit } = useForm({
    initialValues: {
      password: '',
      max_members: '',
      study_language: [],
      study_platform: [],
    },
  });

  return (
    <S.Container>
      <S.Section>
        <RadioField
          name='access_status'
          options={RADIO_ACCESS_STATUS}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
        />
        <S.InputWrapper>
          <InputField
            type='password'
            label='암호'
            {...register('password')}
          />
          <InputField
            label='모집 인원'
            {...register('max_members')}
          />
          <InputDropdown
            label='스터디 사용 언어'
            description='사용 언어'
            items={PROGRAMMING_LANGUAGES}
            isMultiSelect
            {...registerSelect('study_language')}
          />
          <InputDropdown
            label='스터디 사용 플랫폼'
            description='백준, 프로그래머스 ...'
            items={JUDGES}
            isMultiSelect
            {...registerSelect('study_platform')}
          />
        </S.InputWrapper>
      </S.Section>
    </S.Container>
  );
}
