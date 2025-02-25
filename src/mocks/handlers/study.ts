import { http, HttpResponse } from 'msw';
import { mockStudies, createPrivateResponse, createPublicResponse, createStudyErrorResponse } from '@mocks/data/study';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { CreateStudyData } from '@customTypes/study';
import {
  createPrivateResponse,
  createPublicResponse,
  createStudyErrorResponse,
  editStudyErrorResponse,
  editStudyResponse,
  getStudyInfoErrorResponse,
  getStudyInfoResponse,
} from '@mocks/data/study';
import { CreateStudyData, EditStudyData } from '@customTypes/study';

export const studyHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.STUDY.LIST}`, async ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const size = parseInt(url.searchParams.get('size') || '8', 10);

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;

    const paginatedStudies = mockStudies.slice(startIndex, endIndex);

    return new HttpResponse(
      JSON.stringify({
        code: 1000,
        message: '스터디 목록 조회 성공',
        result: {
          studies: paginatedStudies,
          totalItems: mockStudies.length,
        },
      }),
      {
        status: HTTP_STATUS_CODE.SUCCESS,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }),

  http.get(`${BASE_URL}${END_POINTS_V1.STUDY.INFO(':studyId')}`, async ({ params }) => {
    const { studyId } = params;

    if (!studyId) {
      return new HttpResponse(JSON.stringify(getStudyInfoErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getStudyInfoResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.PUBLIC_CREATE}`, async ({ request }) => {
    const body = (await request.json()) as Omit<CreateStudyData, 'password'>;

    if (!body.name || !body.totalUserCount || !body.languages || !body.judges || !body.description) {
      return new HttpResponse(JSON.stringify(createStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(createPublicResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.PRIVATE_CREATE}`, async ({ request }) => {
    const body = (await request.json()) as CreateStudyData;

    if (!body.name || !body.password || !body.totalUserCount || !body.languages || !body.judges || !body.description) {
      return new HttpResponse(JSON.stringify(createStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }
    return new HttpResponse(JSON.stringify(createPrivateResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.EDIT(':studyId')}`, async ({ request, params }) => {
    const { studyId } = params;
    const body = (await request.json()) as EditStudyData;

    if (
      !studyId ||
      !body.status ||
      !body.name ||
      !body.totalUserCount ||
      !body.languages ||
      !body.judges ||
      !body.description
    ) {
      return new HttpResponse(JSON.stringify(editStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }
    return new HttpResponse(JSON.stringify(editStudyResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
