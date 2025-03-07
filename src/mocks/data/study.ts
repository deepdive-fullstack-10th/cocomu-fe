export const getStudyInfoResponse = {
  code: 1100,
  message: '스터디 정보 조회에 성공하였습니다.',
  result: {
    id: 1,
    joinable: true,
    name: '딥다이브 스터디',
    status: 'PUBLIC',
    languages: ['Python', 'Java'],
    workbooks: ['백준', '프로그래머스'],
    description: '<p>스터디 소개임</p>',
    totalUserCount: 7,
    createdAt: '2025-02-01T13:20:50.197Z',
    leader: {
      id: 1,
      nickname: '새싹이',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
  },
};

export const getStudyInfoErrorResponse = {
  code: 4200,
  message: '스터디 정보 조회에 실패했습니다.',
};

export const getFilterOptionsResponse = {
  code: 3000,
  message: '스터디 필터 옵션 조회에 성공했습니다.',
  result: {
    workbooks: [
      {
        id: 1,
        name: 'BOJ',
        imageUrl: 'https://cdn.cocomu.co.kr/images/workbooks/boj.png',
      },
    ],
    languages: [
      {
        id: 1,
        name: 'JAVA',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
      },
    ],
  },
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

export const joinPublicStudyResponse = {
  code: 1200,
  message: '공개 스터디 참가에 성공했습니다.',
};

export const joinPublicStudyErrorResponse = {
  code: 4200,
  message: '공개 스터디 참가에 실패했습니다.',
};

export const joinPrivateStudyResponse = {
  code: 1200,
  message: '비공개 스터디 참가에 성공했습니다.',
};

export const joinPrivateStudyErrorResponse = {
  code: 4200,
  message: '비공개 스터디 참가에 실패했습니다.',
};
