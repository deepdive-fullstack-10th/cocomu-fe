export const getStudyInfoResponse = {
  code: 3000,
  message: '스터디 정보 조회에 성공했습니다.',
  result: {
    id: 1,
    joinable: false,
    name: '네이버 코딩테스트 돌파하기',
    status: 'PUBLIC',
    languages: [
      {
        id: 1,
        name: 'JAVA',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
      },
    ],
    workbooks: [
      {
        id: 1,
        name: 'BOJ',
        imageUrl: 'https://cdn.cocomu.co.kr/images/workbooks/boj.png',
      },
    ],
    description:
      '우리 스터디는 네이버 백엔드 개발자가 되기 위해 자바 언어로 문제를 해결해 나가려고 합니다. 주로 백준 플랫폼을 활용할 것으로 예상됩니다.',
    currentUserCount: 2,
    totalUserCount: 50,
    createdAt: '2025-03-02T20:32:21.962372',
    leader: {
      id: 1,
      nickname: '코코무',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
  },
};

export const getStudyInfoErrorResponse = {
  code: 4200,
  message: '스터디 정보 조회에 실패했습니다.',
};
