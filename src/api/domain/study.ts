import axios from 'axios';
import { axiosInstance } from '@api/axiosInstance';
import { CreateStudyData, FetchStudiesParams, FetchStudiesResponse } from '@customTypes/study';
import { BASE_URL, END_POINTS_V1 } from '@constants/api';

const studyApi = {
  fetchStudies: async (params: FetchStudiesParams) => {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append('page', String(params.page));
      searchParams.append('size', String(params.size));

      if (params.status) searchParams.append('status', params.status);
      if (params.joinable !== undefined) searchParams.append('joinable', String(params.joinable));
      if (params.keyword) searchParams.append('keyword', params.keyword);

      params.languages?.forEach((language) => searchParams.append('languages', language));
      params.judges?.forEach((judge) => searchParams.append('judges', judge));

      const response = await axios.get<FetchStudiesResponse>(`${BASE_URL}${END_POINTS_V1.STUDY.LIST}`, {
        params: searchParams,
      });

      if (response.data.code === 1000) {
        return response.data.result;
      }
      throw new Error('Invalid response code');
    } catch (error) {
      console.error('스터디 데이터를 불러오는데 실패했습니다.', error);
      throw error;
    }
  },

  createPublicStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PUBLIC_CREATE, createStudyData);
    return data.result;
  },

  createPrivateStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PRIVATE_CREATE, createStudyData);
    return data.result;
  },
};

export default studyApi;
