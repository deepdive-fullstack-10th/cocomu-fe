import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { CreateSpaceData } from '@customTypes/space';

const spaceApi = {
  getInfo: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.PAGE(codingSpaceId));

    return data.result;
  },

  getAllTabs: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.TAB(codingSpaceId));

    return data.result;
  },

  create: async (createSpaceData: CreateSpaceData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.CREATE, createSpaceData);

    return data.result;
  },

  start: async ({ codingSpaceId, studyId }: { codingSpaceId: string; studyId: string }) => {
    await axiosInstance.post(END_POINTS_V1.CODING_SPACE.START(codingSpaceId), { studyId });

    return codingSpaceId;
  },
};

export default spaceApi;
