export const getSpaceStudyInfoResponse = {
  code: 3000,
  message: '스터디 디테일 페이지 조회에 성공했습니다.',
  result: {
    name: '네이버 코딩테스트 돌파하기',
    languages: [
      {
        id: 1,
        name: 'JAVA',
        imageUrl: 'https://cdn.cocomu.co.kr/images/languages/java.png',
      },
    ],
  },
};

export const getSpaceStudyInfoErrorResponse = {
  code: 4200,
  message: '스페이스 스터디 정보 조회에 실패했습니다.',
};
