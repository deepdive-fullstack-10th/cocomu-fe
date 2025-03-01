import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { CreateSpaceData } from '@customTypes/space';

const spaceApi = {
  create: async (createSpaceData: CreateSpaceData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.CREATE, createSpaceData);

    return data.result;
  },

  detail: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.PAGE(codingSpaceId));

    return data.result;
  },

  start: async ({ spaceId, studyId }: { spaceId: string; studyId: string }) => {
    await axiosInstance.post(END_POINTS_V1.CODING_SPACE.START(spaceId), { studyId });

    return spaceId;
  },

  tab: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.TAB(codingSpaceId));

    return data.result;
  },
};

export default spaceApi;
