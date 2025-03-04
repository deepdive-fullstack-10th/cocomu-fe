import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { CreateStudyData, EditStudyData, GetListParams } from '@customTypes/study';
import { SpaceData, SpaceListParams } from '@customTypes/space';

const studyApi = {
  getInfo: async (studyId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.INFO(studyId), {
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },

  getList: async (params: GetListParams) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.LIST, {
      params,
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },

  createPublic: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PUBLIC_CREATE, createStudyData);
    return data.result;
  },

  createPrivate: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PRIVATE_CREATE, createStudyData);
    return data.result;
  },

  edit: async (studyId: string, editStudyData: EditStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.EDIT(studyId), editStudyData);
    return data.result;
  },

  getSpaceList: async (studyId: string, params?: SpaceListParams): Promise<SpaceData[]> => {
    const queryParams = params ? { ...params } : {};

    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key] === null || queryParams[key] === undefined) delete queryParams[key];
    });

    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.SPACE_LIST(studyId), {
      params: Object.keys(queryParams).length > 0 ? queryParams : undefined,
      /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
    });
    const { lastIndex = 0 } = params;

    const startIndex = params?.lastIndex ?? 0;
    const limit = lastIndex === 0 ? 5 : 10;

    return data.result.slice(startIndex, startIndex + limit);
  },
};

export default studyApi;
