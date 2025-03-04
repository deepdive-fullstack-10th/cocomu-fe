import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

const userApi = {
  get: async () => {
    const { data } = await axiosInstance.get(END_POINTS_V1.USER.INFO);

    return data.result;
  },
};

export default userApi;
