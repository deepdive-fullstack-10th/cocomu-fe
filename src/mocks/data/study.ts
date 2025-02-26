export const getStudyInfoResponse = {
  code: 1100,
  message: '스터디 정보 조회에 성공하였습니다.',
  result: {
    id: 1,
    joinable: true,
    name: '딥다이브 스터디',
    status: 'PUBLIC',
    languages: ['Python'],
    judges: ['백준'],
    description: '<p>스터디 소개임</p>',
    totalUserCount: 7,
    createdAt: '2025-02-01T13:20:50.197Z',
    leader: {
      id: 1,
      name: '새싹이',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
  },
};

export const getStudyInfoErrorResponse = {
  code: 4200,
  message: '스터디 정보 조회에 실패했습니다.',
};

export const createPublicResponse = {
  code: 1200,
  message: '공개 스터디 생성에 성공했습니다.',
  result: {
    studyId: 1,
  },
};

export const createPrivateResponse = {
  code: 1200,
  message: '비공개 스터디 생성에 성공했습니다.',
  result: {
    studyId: 1,
  },
};

export const createStudyErrorResponse = {
  code: 4200,
  message: '유효성 검사 실패',
};

export const editStudyResponse = {
  code: 1200,
  message: '스터디 수정에 성공했습니다.',
  result: {
    studyId: 1,
  },
};

export const editStudyErrorResponse = {
  code: 4200,
  message: '유효성 검사 실패',
};
