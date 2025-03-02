import { http, HttpResponse } from 'msw';
import {
  createErrorResponse,
  createResponse,
  spaceData,
  spaceStartErrorResponse,
  spaceStartSuccessResponse,
  TabData,
} from '@mocks/data/space';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { CreateSpaceData } from '@customTypes/space';

export const spaceDetailHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.PAGE(':codingSpaceId')}`, async ({ params }) => {
    const { codingSpaceId } = params;
    if (!codingSpaceId) {
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
  http.post(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.START(':codingSpaceId')}`, async ({ params, request }) => {
    const body = (await request.json()) as { studyId?: string };
    const codingSpaceId = params.codingSpaceId as string;

    if (!body.studyId) {
      return new HttpResponse(JSON.stringify(spaceStartErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(
      JSON.stringify({
        ...spaceStartSuccessResponse,
        result: { codingSpaceId, studyId: body.studyId },
      }),
      {
        status: HTTP_STATUS_CODE.SUCCESS,
      },
    );
  }),
];

export const tabDataHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.TAB(':codingSpaceId')}`, async ({ params }) => {
    const { codingSpaceId } = params;
    if (!codingSpaceId) {
      return new HttpResponse(JSON.stringify({ error: 'Invalid coding space ID' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(TabData), {
      status: HTTP_STATUS_CODE.SUCCESS,
      headers: { 'Content-Type': 'application/json' },
    });
  }),
];

export const spaceHandlers = [
  http.post(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.CREATE}`, async ({ request }) => {
    const body = (await request.json()) as CreateSpaceData;

    if (!body.studyId || !body.codingSpace || !body.testCases) {
      return new HttpResponse(JSON.stringify(createErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(createResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
