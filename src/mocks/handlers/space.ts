import { http, HttpResponse } from 'msw';
import {
  createErrorResponse,
  createResponse,
  getSpaceErrorResponse,
  getSpaceResponse,
  getTabErrorResponse,
  getTabResponse,
  spaceStartErrorResponse,
  spaceStartResponse,
  updateTestCaseErrorResponse,
  updateTestCaseResponse,
} from '@mocks/data/space';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { CreateSpaceData, TestCaseIO } from '@customTypes/space';

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

  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.TAB(':codingSpaceId')}`, async ({ params }) => {
    const { codingSpaceId } = params;

    if (!codingSpaceId) {
      return new HttpResponse(JSON.stringify(getTabErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getTabResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.START(':codingSpaceId')}`, async ({ params, request }) => {
    const body = await request.json();
    const { codingSpaceId } = params;

    if (!body || !codingSpaceId) {
      return new HttpResponse(JSON.stringify(spaceStartErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(spaceStartResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.PAGE(':codingSpaceId')}`, async ({ params }) => {
    const { codingSpaceId } = params;

    if (!codingSpaceId) {
      return new HttpResponse(JSON.stringify(getSpaceErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getSpaceResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(
    `${BASE_URL}${END_POINTS_V1.CODING_SPACE.TEST_CASE_UPDATE(':codingSpaceId')}`,
    async ({ params, request }) => {
      const { codingSpaceId } = params;
      const body = (await request.json()) as TestCaseIO[];

      if (!codingSpaceId || !body) {
        return new HttpResponse(JSON.stringify(updateTestCaseErrorResponse), {
          status: HTTP_STATUS_CODE.BAD_REQUEST,
        });
      }

      return new HttpResponse(JSON.stringify(updateTestCaseResponse), {
        status: HTTP_STATUS_CODE.SUCCESS,
      });
    },
  ),
];
