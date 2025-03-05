import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { getUserInfoErrorResponse, getUserInfoResponse } from '@mocks/data/user';

export const userHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.USER.INFO}`, async ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader) {
      return new HttpResponse(JSON.stringify(getUserInfoErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getUserInfoResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
