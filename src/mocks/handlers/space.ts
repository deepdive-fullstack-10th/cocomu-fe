import { http, HttpResponse } from 'msw';
import { spaceData, spaceStartErrorResponse, spaceStartSuccessResponse } from '@mocks/data/space';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';

export const spaceHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.PAGE(':condigSpaceId')}`, async ({ params }) => {
    const { condigSpaceId } = params;
    if (!condigSpaceId) {
      return new HttpResponse(JSON.stringify({ error: 'Invalid coding space ID' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(spaceData), {
      status: HTTP_STATUS_CODE.SUCCESS,
      headers: { 'Content-Type': 'application/json' },
    });
  }),
];

export const spaceStartHandlers = [
  http.post(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.START(':spaceId')}`, async ({ params, request }) => {
    const body = (await request.json()) as { studyId?: string };
    const spaceId = params.spaceId as string;

    if (!body.studyId) {
      return new HttpResponse(JSON.stringify(spaceStartErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(
      JSON.stringify({
        ...spaceStartSuccessResponse,
        result: { spaceId, studyId: body.studyId },
      }),
      {
        status: HTTP_STATUS_CODE.SUCCESS,
      },
    );
  }),
];
