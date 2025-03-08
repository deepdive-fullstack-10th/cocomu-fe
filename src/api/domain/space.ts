import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';

import { CreateSpaceData, SpaceData, SpaceListParams, TestCaseIO, Tab } from '@customTypes/space';

const spaceApi = {
  getStudyInfo: async (studyId: number) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.INFO, {
      params: { studyId },
    });

    return data.result;
  },

  getList: async (studyId: string, params?: SpaceListParams): Promise<SpaceData[]> => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.LIST(studyId), {
      params,
    });

    return data.result;
  },

  getTab: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.TAB(codingSpaceId));

    return data.result;
  },

  getAllTabs: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.ALL_TABS(codingSpaceId));

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

  complete: async (codingSpaceId: string, tabData: Tab[]) => {
    await axiosInstance.post(END_POINTS_V1.CODING_SPACE.COMPLETE(codingSpaceId), tabData);

    return codingSpaceId;
  },

  updateTestCase: async (codingSpaceId: string, testCases: TestCaseIO[]) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.TEST_CASE_UPDATE(codingSpaceId), testCases);

    return data.result;
  },
};

export default spaceApi;
