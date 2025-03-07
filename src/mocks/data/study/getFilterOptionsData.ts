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
