import { SpaceData, SpaceStatusData } from '@customTypes/space';

export const spaceStartResponse = {
  code: 1200,
  message: '스페이스 시작에 성공했습니다.',
  result: {
    codingSpaceId: '1',
  },
};

export const spaceStartErrorResponse = {
  code: 4200,
  message: '스페이스 시작에 실패했습니다. studyId가 필요합니다.',
};

export const getTabResponse = {
  code: 1100,
  message: '코딩 스페이스 입장에 성공하였습니다.',
  result: {
    tab: {
      id: 'UUID',
      code: '',
      user: {
        id: '1',
        nickname: '코코',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
    },
  },
};

export const getAllTabsResponse = {
  code: 1100,
  message: '코딩 스페이스 입장에 성공하였습니다.',
  result: {
    tabs: [
      {
        tabId: 'UUID1',
        code: '1',
        user: {
          id: 1,
          nickName: '코코1',
          profileImageUrl: 'https://cdn.domain.com/images/*.png',
        },
      },
      {
        tabId: 'UUID2',
        code: '2',
        user: {
          id: 2,
          nickName: '코코2',
          profileImageUrl: 'https://cdn.domain.com/images/*.png',
        },
      },
      {
        tabId: 'UUID3',
        code: '3',
        user: {
          id: 3,
          nickName: '코코3',
          profileImageUrl: 'https://cdn.domain.com/images/*.png',
        },
      },
      {
        tabId: 'UUID4',
        code: '4',
        user: {
          id: 4,
          nickName: '코코4',
          profileImageUrl: 'https://cdn.domain.com/images/*.png',
        },
      },
    ],
  },
};

export const getTabErrorResponse = {
  code: 4200,
  message: '탭 조회에 실패하였습니다.',
};

export const createResponse = {
  code: 1200,
  message: '코딩 스페이스 생성에 성공했습니다.',
  result: {
    codingSpaceId: 1,
  },
};

export const createErrorResponse = {
  code: 4200,
  message: '유효성 검사 실패',
};

export const updateTestCaseResponse = {
  code: 1200,
  message: '테스트 케이스 수정됨',
  result: {
    testCases: [
      {
        id: 100,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
      {
        id: 101,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
      {
        id: 102,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
      {
        id: 103,
        input: '1,2,3,4,5',
        output: '8',
        type: 'CUSTOM',
      },
    ],
  },
};

export const updateTestCaseErrorResponse = {
  code: 4200,
  message: '테스트 케이스 추가에 실패했습니다.',
};

const sampleData = [
  {
    id: 1,
    joinedSpace: true,
    name: '백준 1023',
    language: 'Python',
    totalUserCount: 4,
    createdAt: '2025-01-14T10:20:50.197Z',
    status: 'WAITING' as SpaceStatusData,
    leader: {
      id: 2,
      nickname: '새싹이',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
    currentUsers: [
      {
        id: 3,
        nickname: '드래곤',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 27,
        nickname: '코코',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 31,
        nickname: '미니',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 32,
        nickname: '상남이',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
    ],
  },
  {
    id: 2,
    joinedSpace: true,
    name: '프로그래머스 다트게임',
    language: 'Java',
    totalUserCount: 3,
    createdAt: '2025-01-15T13:18:50.197Z',
    status: 'FEEDBACK' as SpaceStatusData,
    leader: {
      id: 1,
      nickname: '으뜸이',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
    currentUsers: [
      {
        id: 5,
        nickname: '새싹이',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 9,
        nickname: '코코몽',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 12,
        nickname: '몽몽이',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
    ],
  },
  {
    id: 3,
    joinedSpace: false,
    name: '프로그래머스 구명보트',
    language: 'C',
    totalUserCount: 2,
    createdAt: '2025-01-16T12:20:50.197Z',
    status: 'WAITING' as SpaceStatusData,
    leader: {
      id: 4,
      nickname: '사사',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
    currentUsers: [
      {
        id: 13,
        nickname: '새벽이',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 25,
        nickname: '이지은',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
    ],
  },
  {
    id: 4,
    joinedSpace: true,
    name: '백준 1023',
    language: 'Python',
    totalUserCount: 4,
    createdAt: '2025-02-01T13:20:50.197Z',
    status: 'COMPLETED' as SpaceStatusData,
    leader: {
      id: 22,
      nickname: '밀웜',
      profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    },
    currentUsers: [
      {
        id: 31,
        nickname: '강혜원',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 15,
        nickname: '오혜원',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 18,
        nickname: '허각',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
      {
        id: 20,
        nickname: '망치',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
    ],
  },
];

const extendData = (data: SpaceData[]) => {
  const extendedData: SpaceData[] = [];
  const dataLength = data.length;
  const userIds = new Set();

  for (let i = 0; i < 30; i++) {
    const batchData = data.map((item, index) => {
      let newId = item.id + (i + 1) * (dataLength * 30) + index;

      while (userIds.has(newId)) {
        newId += 5;
      }
      userIds.add(newId);

      return {
        ...item,
        id: newId,
      };
    });

    extendedData.push(...batchData);
  }

  return extendedData;
};

export const getSpaceListResponse = {
  code: 1100,
  message: '코딩 스페이스 목록 조회에 성공하였습니다.',
  result: extendData(sampleData as []),
};

export const getSpaceListErrorResponse = {
  code: 4200,
  message: '코딩 스페이스 조회에 실패했습니다.',
};

export const completeSpaceResponse = {
  code: 1200,
  message: '코딩 스페이스 종료에 성공했습니다.',
};

export const completeSpaceErrorResponse = {
  code: 4200,
  message: '피드백 종료에 실패했습니다.',
};
