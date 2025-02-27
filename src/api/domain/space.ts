import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { SpaceData, SpaceListParams } from '@customTypes/space';

export const spaceApi = {
  fetchSpaceList: async (studyId: string, params?: SpaceListParams): Promise<SpaceData[]> => {
    const realParams = Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value !== null && value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, []>,
    );

    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.SPACE_LIST(studyId), {
      params: realParams,
      /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
      /* paramsSerializer: {
        indexes: null,
      }, */
    });

    return data.result;
  },
};
