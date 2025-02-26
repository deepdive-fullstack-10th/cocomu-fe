import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

export const spaceApi = {
  getSpaceList: async (studyId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.SPACE_LIST(studyId));

    return data.result;
  },
};
