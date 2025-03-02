import { http, HttpResponse } from 'msw';
import { BASE_URL, END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { CreateStudyData, EditStudyData } from '@customTypes/study';

import {
  createPrivateResponse,
  createPublicResponse,
  createStudyErrorResponse,
  editStudyErrorResponse,
  editStudyResponse,
  getStudyInfoErrorResponse,
  getStudyInfoResponse,
  getStudyListResponse,
} from '@mocks/data/study';

export const studyHandlers = [
  http.get(`${BASE_URL}${END_POINTS_V1.STUDY.LIST}`, async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const size = 8;
    const status = url.searchParams.get('status');
    const joinable = url.searchParams.get('joinable') === 'true';
    const keyword = url.searchParams.get('keyword')?.toLowerCase() || '';
    const languages = url.searchParams.getAll('languages[]');
    const judges = url.searchParams.getAll('judges[]');

    const filteredStudies = getStudyListResponse.result.studies.filter((study) => {
      const matchesStatus = !status || study.status === status;
      const matchesLanguages = languages.length === 0 || study.languages.some((lang) => languages.includes(lang));
      const matchesJudges = judges.length === 0 || study.judges.some((judge) => judges.includes(judge));
      const matchesJoinable = !joinable || study.joinable === true;
      const matchesKeyword = !keyword || study.name.toLowerCase().includes(keyword);
      return matchesStatus && matchesLanguages && matchesJudges && matchesJoinable && matchesKeyword;
    });

    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const paginatedStudies = filteredStudies.slice(startIndex, endIndex);

    const response = {
      ...getStudyListResponse,
      result: {
        ...getStudyListResponse.result,
        studies: paginatedStudies,
        totalPage: getStudyListResponse.result.totalPage,
      },
    };

    return new HttpResponse(JSON.stringify(response), {
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
