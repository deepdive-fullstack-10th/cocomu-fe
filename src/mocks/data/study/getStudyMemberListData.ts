import { extendData } from '@utils/extendData';

const memberData = [
  {
    id: 1,
    nickName: '으뜸이',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    successCount: '32',
    failedCount: '3',
    JoinedDate: '2025-02-01T13:20:50.197Z',
  },
  {
    id: 2,
    nickName: '새싹이',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    successCount: '32',
    failedCount: '3',
    JoinedDate: '2025-02-01T13:20:50.197Z',
  },
  {
    id: 3,
    nickName: '몽몽이',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
    successCount: '32',
    failedCount: '3',
    JoinedDate: '2025-02-01T13:20:50.197Z',
  },
];

export const getMemberResponse = {
  code: 1100,
  message: '스터디 멤버 목록 조회에 성공하였습니다.',
  result: extendData(memberData, 100),
};

export const getMemberErrorResponse = {
  code: 4200,
  message: '스터디 멤버 목록 조회에 실패했습니다.',
};
