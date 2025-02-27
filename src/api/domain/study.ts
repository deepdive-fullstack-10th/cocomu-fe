import axios from 'axios';
import { axiosInstance } from '@api/axiosInstance';
import { CreateStudyData, FetchStudiesParams, FetchStudiesResponse } from '@customTypes/study';
import { BASE_URL, END_POINTS_V1 } from '@constants/api';

const studyApi = {
  fetchStudies: async (params: FetchStudiesParams) => {
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
    return response.data.result;
  },

  createPublicStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PUBLIC_CREATE, createStudyData);
    return data.result;
  },

  createPrivateStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PRIVATE_CREATE, createStudyData);
    return data.result;
  },

  getStudyInfo: async (studyId: string) => {
    const { data } = await axiosInstance.get(END_POINTS_V1.STUDY.INFO(studyId), {
      useAuth: false,
      withCredentials: false,
    });

    return data.result;
  },
};

export default studyApi;
