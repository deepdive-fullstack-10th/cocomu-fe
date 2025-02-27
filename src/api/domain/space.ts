import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { SpaceData, SpaceListParams, CreateSpaceData, TestCaseIO } from '@customTypes/space';

export const spaceApi = {
  getInfo: async (codingSpaceId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.CODING_SPACE.PAGE(codingSpaceId));

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

  start: async (codingSpaceId: string, studyId: string) => {
    await axiosInstance.post(END_POINTS_V1.CODING_SPACE.START(codingSpaceId), studyId);

    return codingSpaceId;
  },

  updateTestCase: async (codingSpaceId: string, testCases: TestCaseIO[]) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.CODING_SPACE.TEST_CASE_UPDATE(codingSpaceId), testCases);

    return data.result;
  },

  getSpaceList: async (studyId: string, params?: SpaceListParams): Promise<SpaceData[]> => {
    const queryParams = {};

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          queryParams[key] = value;
        }
      });
    }

    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.SPACE_LIST(studyId), {
      params: queryParams,
      paramsSerializer: {
        serialize: (param) => {
          const searchParams = new URLSearchParams();

          Object.entries(param).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((item) => searchParams.append(`${key}[]`, item));
            } else {
              searchParams.append(key, value);
            }
          });

          return searchParams.toString();
        },
      },
      /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
    });

    return data.result;
  },
};

export default spaceApi;
