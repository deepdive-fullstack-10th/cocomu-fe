import { http, HttpResponse } from 'msw';
import {
  createErrorResponse,
  createResponse,
  getSpaceErrorResponse,
  getSpaceResponse,
  getTabErrorResponse,
  getTabResponse,
  spaceStartErrorResponse,
  spaceStartSuccessResponse,
  updateTestCaseErrorResponse,
  updateTestCaseResponse,
  getSpaceListErrorResponse,
  getSpaceListResponse,
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

    return new HttpResponse(JSON.stringify(spaceStartSuccessResponse), {
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

  http.get(`${BASE_URL}${END_POINTS_V1.CODING_SPACE.SPACE_LIST(':studyId')}`, async ({ request, params }) => {
    const { studyId } = params;
    if (!studyId || Number.isNaN(Number(studyId))) {
      return new HttpResponse(JSON.stringify(getSpaceListErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    const url = new URL(request.url);
    const startIndex = parseInt(url.searchParams.get('lastId'), 10) || 0;
    const limit = 20;
    const totalSpaceData = getSpaceListResponse.result;
    const partialSpaceData = totalSpaceData.slice(startIndex, startIndex + limit);

    const response = {
      ...getSpaceListResponse,
      data: partialSpaceData,
    };

    return new HttpResponse(JSON.stringify(response), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
