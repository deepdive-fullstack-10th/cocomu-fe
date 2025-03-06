import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { ideRunResponse, ideSubmitResponse } from '@mocks/data/ide';

export const ideRunHandlers = [
  http.post(`${BASE_URL}${END_POINTS_V1.IDE.RUN}`, async ({ request }) => {
    const body = (await request.json()) as { bodyData };

    if (!body) {
      return new HttpResponse(JSON.stringify({ message: ' Invalid request' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(ideRunResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];

export const ideSubmitHandler = [
  http.post(`${BASE_URL}${END_POINTS_V1.IDE.SUBMIT(':ideID')}`, async ({ params, request }) => {
    const { ideID } = params;
    const body = (await request.json()) as { bodyData };

    if (!ideID || !body) {
      return new HttpResponse(JSON.stringify({ message: ' Invalid request' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(ideSubmitResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
