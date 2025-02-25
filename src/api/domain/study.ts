import axios from 'axios';
import { axiosInstance } from '@api/axiosInstance';
import { StudyData, CreateStudyData, EditStudyData } from '@customTypes/study';
import { BASE_URL, END_POINTS_V1 } from '@constants/api';

interface FetchStudiesParams {
  page: number;
  size: number;
}

interface FetchStudiesResponse {
  code: number;
  result: {
    studies: StudyData[];
    totalItems: number;
  };
}

export const fetchStudies = async ({ page, size }: FetchStudiesParams) => {
  try {
    const response = await axios.get<FetchStudiesResponse>(`${BASE_URL}${END_POINTS_V1.STUDY.LIST}`, {
      params: { page, size },
    });

    if (response.data.code === 1000) {
      return {
        studies: response.data.result.studies,
        totalItems: response.data.result.totalItems,
      };
    }
    throw new Error('Invalid response code');
  } catch (error) {
    console.error('스터디 데이터를 불러오는데 실패했습니다.', error);
    throw error;
  }
};

const studyApi = {
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
