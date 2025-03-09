import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { CreateStudyData, EditStudyData } from '@customTypes/study';

import { getStudyListResponse } from '@mocks/data/study/getStudyListData';
import { getStudyInfoErrorResponse, getStudyInfoResponse } from '@mocks/data/study/getStudyInfoData';
import { getFilterOptionsResponse } from '@mocks/data/study/getFilterOptionsData';
import {
  createPrivateStudyResponse,
  createPublicStudyResponse,
  createStudyErrorResponse,
} from '@mocks/data/study/createStudyData';
import { editStudyErrorResponse, editStudyResponse } from '@mocks/data/study/editStudyData';
import {
  joinPrivateStudyErrorResponse,
  joinPrivateStudyResponse,
  joinPublicStudyErrorResponse,
  joinPublicStudyResponse,
} from '@mocks/data/study/joinStudyData';
import { getStudyDetailErrorResponse, getStudyDetailResponse } from '@mocks/data/study/getStudyDetailData';

export const studyHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.STUDY.DETAIL(':studyId')}`, async ({ params }) => {
    const { studyId } = params;

    if (!studyId) {
      return new HttpResponse(JSON.stringify(getStudyDetailErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getStudyDetailResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
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

  http.get(
    `${BASE_URL}${END_POINTS_V1.STUDY.LIST}`,
    async () =>
      new HttpResponse(JSON.stringify(getStudyListResponse), {
        status: HTTP_STATUS_CODE.SUCCESS,
      }),
  ),

  http.get(
    `${BASE_URL}${END_POINTS_V1.STUDY.FILTER_OPTIONS}`,
    async () =>
      new HttpResponse(JSON.stringify(getFilterOptionsResponse), {
        status: HTTP_STATUS_CODE.SUCCESS,
      }),
  ),

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.PUBLIC_CREATE}`, async ({ request }) => {
    const body = (await request.json()) as Omit<CreateStudyData, 'password'>;

    if (!body.name || !body.totalUserCount || !body.languages || !body.workbooks || !body.description) {
      return new HttpResponse(JSON.stringify(createStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(createPublicStudyResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.PRIVATE_CREATE}`, async ({ request }) => {
    const body = (await request.json()) as CreateStudyData;

    if (
      !body.name ||
      !body.password ||
      !body.totalUserCount ||
      !body.languages ||
      !body.workbooks ||
      !body.description
    ) {
      return new HttpResponse(JSON.stringify(createStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }
    return new HttpResponse(JSON.stringify(createPrivateStudyResponse), {
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
      !body.workbooks ||
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

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.PUBLIC_JOIN(':studyId')}`, async ({ params }) => {
    const { studyId } = params;

    if (!studyId) {
      return new HttpResponse(JSON.stringify(joinPublicStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(joinPublicStudyResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),

  http.post(`${BASE_URL}${END_POINTS_V1.STUDY.PRIVATE_JOIN(':studyId')}`, async ({ request, params }) => {
    const { studyId } = params;
    const body = (await request.json()) as { password: string };

    if (!studyId || !body.password) {
      return new HttpResponse(JSON.stringify(joinPrivateStudyErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(joinPrivateStudyResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
