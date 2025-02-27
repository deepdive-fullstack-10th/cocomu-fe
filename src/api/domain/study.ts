import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { CreateStudyData, EditStudyData, FetchStudiesParams } from '@customTypes/study';

const studyApi = {
  fetchStudies: async (fetchStudiesParams: FetchStudiesParams) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.LIST, {
      params: fetchStudiesParams,
      useAuth: false,
      withCredentials: false,
    });
    return data.result;
  },

  getStudyInfo: async (studyId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.INFO(studyId), {
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },

  createPublicStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PUBLIC_CREATE, createStudyData);

    return data.result;
  },

  createPrivateStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PRIVATE_CREATE, createStudyData);

    return data.result;
  },

  editStudy: async (studyId: string, editStudyData: EditStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.EDIT(studyId), editStudyData);

    return data.result;
  },
};

export default studyApi;
