import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { CreateStudyData, EditStudyData, GetListData } from '@customTypes/study';
import { UserDetailData } from '@customTypes/user';

const studyApi = {
  getDetail: async (studyId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.DETAIL(studyId));

    return data.result;
  },

  getInfo: async (studyId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.INFO(studyId), {
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },

  getList: async (params: GetListData) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.LIST, {
      params,
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },

  getFilterOptions: async () => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.FILTER_OPTIONS, {
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

  joinPublic: async (studyId: string) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PUBLIC_JOIN(studyId));

    return data.result;
  },

  joinPrivate: async (studyId: string, password: string) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PRIVATE_JOIN(studyId), { password });

    return data.result;
  },

  getMember: async (studyId: string, lastNickname: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.MEMBER_LIST(studyId), {
      params: {
        lastNickname,
      },
    });

    return data.result;
  },

  leave: async (studyId: string) => {
    await axiosInstance.post(END_POINTS_V1.STUDY.LEAVE(studyId));
  },

  delete: async (studyId: string) => {
    await axiosInstance.delete(END_POINTS_V1.STUDY.DELETE(studyId));
  },
};

export default studyApi;
