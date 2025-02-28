import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { SpaceData, SpaceListParams } from '@customTypes/space';

export const spaceApi = {
  fetchSpaceList: async (studyId: string, params?: SpaceListParams): Promise<SpaceData[]> => {
    const queryParams = {};

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          queryParams[key] = value;
        }
      });
    }

    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.SPACE_LIST(studyId), {
      params: queryParams,
      paramsSerializer: {
        serialize: (param) => {
          const searchParams = new URLSearchParams();

          Object.entries(param).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((item) => searchParams.append(`${key}[]`, item));
            } else {
              searchParams.append(key, value);
            }
          });

          return searchParams.toString();
        },
      },
      /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
    });
    const startIndex = params.lastIndex || 0;
    const limit = startIndex === 0 ? 5 : 10;

    return data.result.slice(startIndex, startIndex + limit);
  },
};
