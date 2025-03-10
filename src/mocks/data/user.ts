export const getUserInfoResponse = {
  code: 1000,
  message: '사용자 정보를 조회했습니다.',
  result: {
    id: 1,
    nickname: '코코무',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  },
};

export const getUserInfoErrorResponse = {
  code: 9007,
  message: '사용자 인증 처리에 실패했습니다.',
};
