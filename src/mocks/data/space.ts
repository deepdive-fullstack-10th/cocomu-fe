export const getSpaceListResponse = {
  code: 1100,
  message: '코딩 스페이스 목록 조회에 성공하였습니다.',
  result: [
    {
      id: 1,
      joinable: true,
      name: '백준 1023',
      language: 'Python',
      totalUserCount: 4,
      createdAt: '2025-01-14T10:20:50.197Z',
      status: 'WAITING',
      leader: {
        id: 2,
        name: '새싹이',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      currentUsers: [
        {
          id: 3,
          name: '드래곤',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 27,
          name: '코코',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 31,
          name: '미니',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 32,
          name: '상남이',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
      ],
    },
    {
      id: 2,
      joinable: true,
      name: '프로그래머스 다트게임',
      language: 'Java',
      totalUserCount: 3,
      createdAt: '2025-01-15T13:18:50.197Z',
      status: 'FEEDBACK',
      leader: {
        id: 1,
        name: '으뜸이',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      currentUsers: [
        {
          id: 5,
          name: '새싹이',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 9,
          name: '코코몽',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 12,
          name: '몽몽이',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
      ],
    },
    {
      id: 3,
      joinable: false,
      name: '프로그래머스 구명보트',
      language: 'C',
      totalUserCount: 2,
      createdAt: '2025-01-16T12:20:50.197Z',
      status: 'WAITING',
      leader: {
        id: 4,
        name: '사사',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      currentUsers: [
        {
          id: 13,
          name: '새벽이',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 25,
          name: '이지은',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
      ],
    },
    {
      id: 4,
      joinable: true,
      name: '백준 1023',
      language: 'Python',
      totalUserCount: 4,
      createdAt: '2025-02-01T13:20:50.197Z',
      status: 'COMPLETED',
      leader: {
        id: 22,
        name: '밀웜',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      currentUsers: [
        {
          id: 31,
          name: '강혜원',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 15,
          name: '오혜원',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 18,
          name: '허각',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
        {
          id: 20,
          name: '망치',
          profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
        },
      ],
    },
  ],
};

export const getSpaceListErrorResponse = {
  code: 4200,
  message: '코딩 스페이스 목록 조회에 실패했습니다.',
};
