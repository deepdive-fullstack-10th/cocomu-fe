import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

const userApi = {
  get: async () => {
    const { data } = await axiosInstance.get(END_POINTS_V1.USER.INFO);

    return data.result;
  },

  getSpaceList: async (userId: string, lastId: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.JOINED(userId), {
      params: { lastId },
    });

    return data.result;
  },

  getStudyList: async (userId: string, lastId: string | null) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.JOINED(userId), {
      params: { lastId },
    });

    return data.result;
  },
};

export default userApi;
