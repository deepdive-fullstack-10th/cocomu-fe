import { JUDGES, PROGRAMMING_LANGUAGES } from '@constants/constants';
import ValidationError from '@utils/errors/ValidationError';

const isEmptyString = (value: string) => !value;

const isEmptyArray = (value: string[]) => value.length === 0;

export const validateName = {
  onBlur: (name: string) => {
    if (isEmptyString(name)) {
      throw new ValidationError({ inputName: 'name', message: '스터디 이름을 입력해주세요.' });
    }
  },
};

export const validatePassword = {
  onBlur: (password: string) => {
    if (isEmptyString(password)) {
      throw new ValidationError({ inputName: 'password', message: '암호를 입력해주세요.' });
    }

    if (password.length < 4 || password.length > 6) {
      throw new ValidationError({ inputName: 'password', message: '암호는 4~6자리여야 합니다.' });
    }
  },
};

export const validateTotalUserCount = {
  onBlur: (totalUserCount: string) => {
    if (isEmptyString(totalUserCount)) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원을 입력해주세요.' });
    }

    if (!Number.isFinite(Number(totalUserCount))) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원은 숫자만 입력할 수 있습니다.' });
    }

    const count = Number(totalUserCount);

    if (count < 2 || count > 50) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원은 2~50명 사이여야 합니다.' });
    }
  },
};

export const validateLanguages = (languages: string[]) => {
  if (isEmptyArray(languages)) {
    throw new ValidationError({ inputName: 'languages', message: '사용할 언어를 하나 이상 선택해야 합니다.' });
  }

  const invalidLanguages = languages.filter(
    (lang) => !PROGRAMMING_LANGUAGES.includes(lang as (typeof PROGRAMMING_LANGUAGES)[number]),
  );

  if (invalidLanguages.length > 0) {
    throw new ValidationError({ inputName: 'languages', message: '선택할 수 없는 언어가 포함되어 있습니다.' });
  }
};

export const validateJudges = (judges: string[]) => {
  if (isEmptyArray(judges)) {
    throw new ValidationError({ inputName: 'judges', message: '사용할 플랫폼을 하나 이상 선택해야 합니다.' });
  }

  const invalidJudges = judges.filter((judge) => !JUDGES.includes(judge as (typeof JUDGES)[number]));

  if (invalidJudges.length > 0) {
    throw new ValidationError({ inputName: 'judges', message: '선택할 수 없는 플랫폼이 포함되어 있습니다.' });
  }
};
