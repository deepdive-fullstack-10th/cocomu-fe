import { axiosInstance } from '@api/axiosInstance';
import { END_POINTS_V1 } from '@constants/api';
import { CreateStudyData } from '@customTypes/study';

const studyApi = {
  createPublicStudy: async (createStudyData: CreateStudyData) => {
    const { data } = await axiosInstance.post(END_POINTS_V1.STUDY.PUBLIC_CREATE, createStudyData);

    return data.result;
  },

export default studyApi;
