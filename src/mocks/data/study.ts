export const getStudyListResponse = {
  code: 1100,
  message: '스터디 목록 조회에 성공하였습니다.',
  result: {
    totalPage: 6,
    studies: Array.from({ length: 102 }, (_, index) => {
      const studyGroups = [
        {
          id: index + 1,
          joinable: true,
          name: `스터디 A - ${index + 1}`,
          status: 'PUBLIC',
          languages: ['JavaScript', 'Python'],
          workbooks: ['백준', '프로그래머스'],
          description: '이 스터디는 프론트엔드 개발을 중심으로 진행됩니다.',
          currentUserCount: 5,
          totalUserCount: 10,
          createdAt: '2025-02-21T13:20:50.197Z',
          leader: {
            id: index + 1,
            nickName: '홍길동',
            profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
          },
        },
        {
          id: index + 101,
          joinable: false,
          name: `스터디 B - ${index + 1}`,
          status: 'PRIVATE',
          languages: ['Java', 'C'],
          workbooks: ['백준'],
          description: '이 스터디는 백엔드 개발을 중심으로 진행됩니다.',
          currentUserCount: 7,
          totalUserCount: 15,
          createdAt: '2025-02-21T13:20:50.197Z',
          leader: {
            id: index + 101,
            nickName: '김철수',
            profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
          },
        },
        {
          id: index + 201,
          joinable: true,
          name: `스터디 C - ${index + 1}`,
          status: 'PUBLIC',
          languages: ['Python', 'C'],
          workbooks: ['프로그래머스'],
          description: '이 스터디는 풀스택 개발을 중심으로 진행됩니다.',
          currentUserCount: 3,
          totalUserCount: 8,
          createdAt: '2025-02-21T13:20:50.197Z',
          leader: {
            id: index + 201,
            nickName: '이영희',
            profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
          },
        },
      ];
      return studyGroups[index % studyGroups.length];
    }),
  },
};

export const getStudyInfoResponse = {
  code: 1100,
  message: '스터디 정보 조회에 성공하였습니다.',
  result: {
    id: 1,
    joinable: true,
    name: '딥다이브 스터디',
    status: 'PUBLIC',
    languages: ['Python'],
    workbooks: ['백준'],
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
