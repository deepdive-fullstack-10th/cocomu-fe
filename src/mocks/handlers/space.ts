import { http, HttpResponse } from 'msw';
import { END_POINTS_V1, HTTP_STATUS_CODE } from '@constants/api';
import { getSpaceListErrorResponse, getSpaceListResponse } from '@mocks/data/space';

export const spaceHandlers = [
  http.get(`${END_POINTS_V1.STUDY.SPACE_LIST(':studyId')}`, ({ params }) => {
    const { studyId } = params;

    if (!studyId || Number.isNaN(Number(studyId))) {
      return new HttpResponse(JSON.stringify(getSpaceListErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getSpaceListResponse), {
      status: HTTP_STATUS_CODE.SUCCESS,
    });
  }),
];
