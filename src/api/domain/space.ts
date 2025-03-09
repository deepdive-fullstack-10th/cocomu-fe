import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

import { CreateSpaceData, SpaceListData, TestCaseIO } from '@customTypes/space';

const spaceApi = {
  getList: async (studyId: string, params: SpaceListData) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.LIST(studyId), {
      params,
    });

    return data.result;
  },

  create: async (createSpaceData: CreateSpaceData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.CREATE, createSpaceData);

    return data.result;
  },

  join: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.JOIN(codingSpaceId));

    return data.result;
  },

  start: async (codingSpaceId: string, studyId: string) => {
    await axiosInstance.post(END_POINTS_V1.CODING_SPACE.START(codingSpaceId), studyId);

    return codingSpaceId;
  },

  updateTestCase: async (codingSpaceId: string, testCases: TestCaseIO[]) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.TEST_CASE_UPDATE(codingSpaceId), testCases);

    return data.result;
  },
};

export default spaceApi;
