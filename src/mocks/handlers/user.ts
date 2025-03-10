import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { getUserInfoErrorResponse, getUserInfoResponse } from '@mocks/data/user';
import { getSpaceListErrorResponse, getSpaceListResponse } from '@mocks/data/space/getSpaceListData';

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

  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.JOINED(':userId')}`, async ({ params }) => {
    const { userId } = params;

    if (!userId) {
      return new HttpResponse(JSON.stringify(getSpaceListErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getSpaceListResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
