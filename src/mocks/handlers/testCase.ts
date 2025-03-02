import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { testCaseUpdateResponse } from '@mocks/data/testCase';
import { testCaseList } from '@customTypes/testCase';

export const testCaseHandlers = [
  http.post(
    `${BASE_URL}${END_POINTS_V1.CODING_SPACE.TEST_CASE_UPDATE(':codingSpaceId')}`,
    async ({ params, request }) => {
      const { codingSpaceId } = params;
      const body = (await request.json()) as { testCase: testCaseList };
      const { testCase } = body;

      if (!codingSpaceId || !testCase) {
        return new HttpResponse(JSON.stringify({ message: ' Invalid request' }), {
          status: HTTP_STATUS_CODE.BAD_REQUEST,
        });
      }

      return new HttpResponse(JSON.stringify(testCaseUpdateResponse), {
        status: HTTP_STATUS_CODE.SUCCESS,
      });
    },
  ),
];
