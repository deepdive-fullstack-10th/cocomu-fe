export const getSpaceResponse = {
  code: 1100,
  message: '코딩 스페이스 입장에 성공하였습니다.',
  result: {
    codingSpace: {
      id: 1,
      studyId: 1,
      name: '스페이스 제목입니다.',
      status: '진행',
      language: 'javascript',
      referenceUrl: 'url',
      description: `
        <h1>배열의 최댓값과 최솟값 찾기</h1>
        <br>
        <h1>📌 문제 설명</h1>
        <br>
        <p>정수로 이루어진 배열 <strong>numbers</strong>가 주어집니다.</p>
        <p>이 배열에서 <strong>가장 큰 값과 가장 작은 값을 찾아</strong> 두 값의 차이를 반환하는 함수를 구현하세요.</p>

        <blockquote>
          <p>주어진 배열의 최댓값과 최솟값을 찾아 차이를 반환하세요.</p>
        </blockquote>

        <hr />
        <br>
        <h1>✅ 입력 예시</h1>
        <br>
        <pre><code>
        Input: [3, 7, 2, 9, 1]
        Output: 8  (9 - 1 = 8)
        </code></pre>

        <pre><code>
        Input: [-5, 0, 15, -10, 20]
        Output: 30 (20 - (-10) = 30)
        </code></pre>

        <hr />
        <br>
        <h1>🛠️ 제한 조건</h1>
        <br>
        <ul>
          <li>배열의 길이는 <strong>2 이상 100 이하</strong>입니다.</li>
          <li>배열의 모든 원소는 <strong>-10,000 이상 10,000 이하</strong>의 정수입니다.</li>
          <li>배열에는 중복된 값이 포함될 수 있습니다.</li>
        </ul>

        <hr />
        <br>
        <h1>💡 해결 방법</h1>
        <br>
        <p>배열을 순회하면서 <mark>최댓값과 최솟값을 찾고</mark> 두 값의 차이를 반환하면 됩니다.</p>
        <p><code>Math.max()</code>와 <code>Math.min()</code>을 활용하면 쉽게 구할 수 있습니다.</p>

        <hr />
        <br>
        <h1>📝 예제 코드 (JavaScript)</h1>
        <br>
        <pre><code>
        function findDifference(numbers) {
          const max = Math.max(...numbers);
          const min = Math.min(...numbers);
          return max - min;
        }

        console.log(findDifference([3, 7, 2, 9, 1])); // 8
        console.log(findDifference([-5, 0, 15, -10, 20])); // 30
        </code></pre>

        <hr />
        <br>
        <h1>🚀 제출 및 실행</h1>
        <br>
        <p>아래 코드 영역에 <strong>findDifference</strong> 함수를 작성하고 실행하세요.</p>
      `,
      codingTime: 30,
      totalUserCount: 4,
      hasLeaderRole: true,
      testCase: [
        {
          id: 1,
          input: '1,2,3,4,5',
          output: '18',
          type: 'BASE',
        },
        {
          id: 2,
          input: '1,2,3,4,5',
          output: '18',
          type: 'BASE',
        },
      ],
    },
  },
};

export const getSpaceErrorResponse = {
  code: 4200,
  message: '코딩 스페이스 조회에 실패했습니다.',
};

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
        nickName: '코코',
        profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
      },
    },
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
