import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

const spaceApi = {
  waiting: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.PAGE(codingSpaceId));

    return data.result;
  },
};

export default spaceApi;
