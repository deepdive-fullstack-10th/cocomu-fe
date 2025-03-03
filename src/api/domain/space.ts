import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { SpaceData, SpaceListParams } from '@customTypes/space';

export const spaceApi = {
  fetchSpaceList: async (studyId: string, params?: SpaceListParams): Promise<SpaceData[]> => {
    const queryParams = params ? { ...params } : {};

    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key] === null || queryParams[key] === undefined) delete queryParams[key];
    });

    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.SPACE_LIST(studyId), {
      params: Object.keys(queryParams).length > 0 ? queryParams : undefined,
      /* paramsSerializer: {
        serialize: (param) => {
          const searchParams = new URLSearchParams();

          Object.entries(param).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((item) => searchParams.append(`${key}[]`, item));
            } else {
              searchParams.append(key, String(value));
            }
          });

          return searchParams.toString();
        },
      }, */
      /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
    });
    const startIndex = params?.lastIndex ?? null;
    const limit = startIndex === 0 ? 5 : 10;

    return data.result.slice(startIndex, startIndex + limit);
  },
};
